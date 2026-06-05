import { Resend } from "resend";

let resendClient: Resend | null = null;

const UNVERIFIED_SENDER_DOMAINS = new Set([
  "gmail.com",
  "googlemail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
]);

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

function extractEmailAddress(from: string): string {
  const match = from.match(/<([^>]+)>/);
  return (match?.[1] ?? from).trim().toLowerCase();
}

export function getFromEmail(): string {
  const configured = process.env.RESEND_FROM_EMAIL?.trim();

  if (!configured) {
    return "Portfolio Contact <onboarding@resend.dev>";
  }

  const address = extractEmailAddress(configured);
  const domain = address.split("@")[1];

  if (domain && UNVERIFIED_SENDER_DOMAINS.has(domain)) {
    console.warn(
      `[resend] RESEND_FROM_EMAIL uses "${domain}", which Resend cannot send from. ` +
        "Use a verified domain or onboarding@resend.dev for testing."
    );
    return "Portfolio Contact <onboarding@resend.dev>";
  }

  return configured.includes("<") ? configured : `Portfolio Contact <${configured}>`;
}

type SendNotificationInput = {
  subject: string;
  html: string;
  replyTo?: string;
  attachments?: {
    filename: string;
    content: Buffer | string;
  }[];
};

export async function sendContactNotification({
  subject,
  html,
  replyTo,
  attachments,
}: SendNotificationInput): Promise<{ ok: true } | { ok: false; error: unknown }> {
  const resend = getResend();
  const { error } = await resend.emails.send({
    from: getFromEmail(),
    to: getNotificationEmail(),
    subject,
    html,
    replyTo,
    attachments,
  });

  if (error) {
    console.error("Resend notification error:", error);
    return { ok: false, error };
  }

  return { ok: true };
}
