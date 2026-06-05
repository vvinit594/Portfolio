import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getResend, getNotificationEmail, getFromEmail } from "@/lib/resend";
import {
  teamApplicationSchema,
  validateResumeFile,
} from "@/lib/validation/contact";
import { sanitizeOptionalString, sanitizeString } from "@/lib/sanitize";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { buildTeamApplicationEmail } from "@/lib/emails/contact";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`team:${ip}`);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const formData = await request.formData();

    const raw = {
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      role: formData.get("role"),
      experience: formData.get("experience"),
      portfolioUrl: formData.get("portfolioUrl"),
      linkedinUrl: formData.get("linkedinUrl"),
      whyJoin: formData.get("whyJoin"),
      availability: formData.get("availability"),
    };

    const parsed = teamApplicationSchema.safeParse({
      fullName: typeof raw.fullName === "string" ? raw.fullName : "",
      email: typeof raw.email === "string" ? raw.email : "",
      phone: typeof raw.phone === "string" ? raw.phone : undefined,
      role: typeof raw.role === "string" ? raw.role : "",
      experience: typeof raw.experience === "string" ? raw.experience : "",
      portfolioUrl:
        typeof raw.portfolioUrl === "string" ? raw.portfolioUrl : undefined,
      linkedinUrl:
        typeof raw.linkedinUrl === "string" ? raw.linkedinUrl : undefined,
      whyJoin: typeof raw.whyJoin === "string" ? raw.whyJoin : "",
      availability:
        typeof raw.availability === "string" ? raw.availability : "",
    });

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid form data.",
        },
        { status: 400 }
      );
    }

    const resumeFile = formData.get("resume");
    const resume =
      resumeFile instanceof File && resumeFile.size > 0 ? resumeFile : null;
    const resumeError = validateResumeFile(resume);

    if (resumeError) {
      return NextResponse.json(
        { success: false, message: resumeError },
        { status: 400 }
      );
    }

    const data = {
      fullName: sanitizeString(parsed.data.fullName, 120),
      email: sanitizeString(parsed.data.email, 254).toLowerCase(),
      phone: sanitizeOptionalString(parsed.data.phone, 30),
      role: sanitizeString(parsed.data.role, 100),
      experience: sanitizeString(parsed.data.experience, 100),
      portfolioUrl: sanitizeOptionalString(parsed.data.portfolioUrl, 500),
      linkedinUrl: sanitizeOptionalString(parsed.data.linkedinUrl, 500),
      whyJoin: sanitizeString(parsed.data.whyJoin, 10000),
      availability: sanitizeString(parsed.data.availability, 100),
    };

    await prisma.teamApplication.create({ data });

    const attachments = resume
      ? [
          {
            filename: resume.name,
            content: Buffer.from(await resume.arrayBuffer()).toString("base64"),
          },
        ]
      : undefined;

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: getFromEmail(),
      to: getNotificationEmail(),
      subject: "👨‍💻 New Team Application Received",
      html: buildTeamApplicationEmail(data, resume?.name),
      replyTo: data.email,
      attachments,
    });

    if (error) {
      console.error("Resend team application error:", error);
      return NextResponse.json(
        {
          success: false,
          message: "Something went wrong.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Submission received successfully.",
    });
  } catch (error) {
    console.error("Team application API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
