import { z } from "zod";

const emailSchema = z.string().email("Invalid email address.").max(254);

export const clientInquirySchema = z.object({
  fullName: z.string().min(2, "Full name is required.").max(120),
  companyName: z.string().max(200).optional(),
  email: emailSchema,
  phone: z.string().max(30).optional(),
  projectType: z.string().min(1, "Project type is required.").max(100),
  budget: z.string().min(1, "Budget is required.").max(100),
  timeline: z.string().min(1, "Timeline is required.").max(100),
  projectDescription: z
    .string()
    .min(10, "Project description is required.")
    .max(10000),
  referralSource: z.string().max(200).optional(),
});

export type ClientInquiryInput = z.infer<typeof clientInquirySchema>;

const optionalUrl = z
  .string()
  .max(500)
  .optional()
  .transform((value) => (value && value.trim().length > 0 ? value.trim() : undefined))
  .refine((value) => !value || z.string().url().safeParse(value).success, {
    message: "Invalid URL.",
  });

export const teamApplicationSchema = z.object({
  fullName: z.string().min(2, "Full name is required.").max(120),
  email: emailSchema,
  phone: z.string().max(30).optional(),
  role: z.string().min(1, "Role is required.").max(100),
  experience: z.string().min(1, "Experience is required.").max(100),
  portfolioUrl: optionalUrl,
  linkedinUrl: optionalUrl,
  whyJoin: z.string().min(10, "Please tell us why you want to join.").max(10000),
  availability: z.string().min(1, "Availability is required.").max(100),
});

export type TeamApplicationInput = z.infer<typeof teamApplicationSchema>;

const ALLOWED_RESUME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const MAX_RESUME_SIZE = 5 * 1024 * 1024;

export function validateResumeFile(file: File | null): string | null {
  if (!file || file.size === 0) return null;

  if (!ALLOWED_RESUME_TYPES.has(file.type)) {
    return "Resume must be a PDF or DOCX file.";
  }

  if (file.size > MAX_RESUME_SIZE) {
    return "Resume must be smaller than 5MB.";
  }

  return null;
}
