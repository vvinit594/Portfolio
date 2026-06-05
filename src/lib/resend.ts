import { Resend } from "resend";

let resendClient: Resend | null = null;

export function getResend(): Resend {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }

  if (!resendClient) {
    resendClient = new Resend(apiKey);
  }

  return resendClient;
}

export function getNotificationEmail(): string {
  const email = process.env.NOTIFICATION_EMAIL;

  if (!email) {
    throw new Error("NOTIFICATION_EMAIL is not configured.");
  }

  return email;
}

export function getFromEmail(): string {
  return process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
}
