import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getResend, getNotificationEmail, getFromEmail } from "@/lib/resend";
import { clientInquirySchema } from "@/lib/validation/contact";
import { sanitizeOptionalString, sanitizeString } from "@/lib/sanitize";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";
import { buildClientInquiryEmail } from "@/lib/emails/contact";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(`client:${ip}`);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          success: false,
          message: "Too many requests. Please try again later.",
        },
        { status: 429 }
      );
    }

    const body = await request.json();
    const parsed = clientInquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsed.error.issues[0]?.message ?? "Invalid form data.",
        },
        { status: 400 }
      );
    }

    const data = {
      fullName: sanitizeString(parsed.data.fullName, 120),
      companyName: sanitizeOptionalString(parsed.data.companyName, 200),
      email: sanitizeString(parsed.data.email, 254).toLowerCase(),
      phone: sanitizeOptionalString(parsed.data.phone, 30),
      projectType: sanitizeString(parsed.data.projectType, 100),
      budget: sanitizeString(parsed.data.budget, 100),
      timeline: sanitizeString(parsed.data.timeline, 100),
      projectDescription: sanitizeString(parsed.data.projectDescription, 10000),
      referralSource: sanitizeOptionalString(parsed.data.referralSource, 200),
    };

    await prisma.clientInquiry.create({ data });

    const resend = getResend();
    const { error } = await resend.emails.send({
      from: getFromEmail(),
      to: getNotificationEmail(),
      subject: "🚀 New Client Inquiry Received",
      html: buildClientInquiryEmail(data),
      replyTo: data.email,
    });

    if (error) {
      console.error("Resend client inquiry error:", error);
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
    console.error("Client inquiry API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 }
    );
  }
}
