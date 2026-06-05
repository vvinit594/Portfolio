import type { ClientInquiryInput, TeamApplicationInput } from "@/lib/validation/contact";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string | undefined | null): string {
  if (!value) return "";
  return `
    <tr>
      <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#a1a1aa;font-size:13px;width:160px;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:10px 12px;border-bottom:1px solid #2a2a2a;color:#fafafa;font-size:14px;white-space:pre-wrap;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function emailShell(title: string, rows: string): string {
  return `
<!DOCTYPE html>
<html>
  <body style="margin:0;padding:32px;background:#0b0b0f;font-family:Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#141414;border:1px solid #2a2a2a;border-radius:16px;overflow:hidden;">
      <tr>
        <td style="padding:24px 28px;background:linear-gradient(135deg,#1a1030,#141414);border-bottom:1px solid #2a2a2a;">
          <h1 style="margin:0;color:#fafafa;font-size:22px;font-weight:600;">${escapeHtml(title)}</h1>
          <p style="margin:8px 0 0;color:#a1a1aa;font-size:13px;">Portfolio contact submission</p>
        </td>
      </tr>
      <tr>
        <td style="padding:8px 0 20px;">
          <table width="100%" cellpadding="0" cellspacing="0">${rows}</table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim();
}

export function buildClientInquiryEmail(data: ClientInquiryInput): string {
  const rows = [
    row("Name", data.fullName),
    row("Company", data.companyName),
    row("Email", data.email),
    row("Phone", data.phone),
    row("Project Type", data.projectType),
    row("Budget", data.budget),
    row("Timeline", data.timeline),
    row("Project Description", data.projectDescription),
    row("Referral Source", data.referralSource),
  ].join("");

  return emailShell("New Client Inquiry", rows);
}

export function buildTeamApplicationEmail(
  data: TeamApplicationInput,
  resumeFileName?: string
): string {
  const rows = [
    row("Full Name", data.fullName),
    row("Email", data.email),
    row("Phone", data.phone),
    row("Role", data.role),
    row("Experience", data.experience),
    row("Portfolio", data.portfolioUrl),
    row("LinkedIn", data.linkedinUrl),
    row("Availability", data.availability),
    row("Why Join", data.whyJoin),
    row("Resume", resumeFileName ?? "Not attached"),
  ].join("");

  return emailShell("New Team Application", rows);
}
