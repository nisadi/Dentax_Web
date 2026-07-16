// Server-only — builds branded HTML email strings.

function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function nl2br(str: string): string {
  return esc(str).replace(/\n/g, "<br>");
}

const GREEN      = "#16964A";
const DARK_GREEN = "#0F6A39";
const BG         = "#F4FBF7";
const BORDER     = "#D1FAE5";

function wrapper(body: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dentax</title>
</head>
<body style="margin:0;padding:0;background:${BG};font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:${BG};padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,${GREEN},${DARK_GREEN});border-radius:16px 16px 0 0;padding:32px 36px;text-align:center;">
              <p style="margin:0 0 6px;font-size:28px;font-weight:800;color:#fff;letter-spacing:-0.5px;">Dentax</p>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.75);letter-spacing:0.04em;text-transform:uppercase;">Smart Dental Practice Management</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#fff;padding:36px;border-left:1px solid ${BORDER};border-right:1px solid ${BORDER};">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F9FAFB;border:1px solid ${BORDER};border-top:none;border-radius:0 0 16px 16px;padding:20px 36px;text-align:center;">
              <p style="margin:0 0 4px;font-size:13px;color:#6B7280;">Sent automatically from the Dentax website</p>
              <a href="https://dentaxweb.globalpearlventures.com" style="font-size:13px;color:${GREEN};text-decoration:none;">
                https://dentaxweb.globalpearlventures.com
              </a>
              <p style="margin:8px 0 0;font-size:12px;color:#9CA3AF;">Global Pearl Ventures (PVT) Ltd. &bull; Colombo, Sri Lanka</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string): string {
  return `
  <tr>
    <td style="padding:12px 16px;font-size:13px;font-weight:600;color:#6B7280;white-space:nowrap;width:160px;border-bottom:1px solid #F3F4F6;">${esc(label)}</td>
    <td style="padding:12px 16px;font-size:15px;color:#111827;border-bottom:1px solid #F3F4F6;">${value}</td>
  </tr>`;
}

// ── Admin notification ────────────────────────────────────────────────────────

export interface DemoRequestData {
  fullName:     string;
  phone:        string;
  organization: string;
  subject:      string;
  message:      string;
  submittedAt:  string;
  ipAddress:    string;
}

export function buildAdminEmail(d: DemoRequestData): string {
  const body = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#111827;">New Demo Request</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#6B7280;">A new demo request has been submitted via the Dentax website.</p>

    <table width="100%" cellpadding="0" cellspacing="0"
      style="border:1px solid #E5E7EB;border-radius:12px;overflow:hidden;border-collapse:collapse;">
      <tbody>
        ${row("Full Name",     esc(d.fullName))}
        ${row("Contact Number", d.phone        ? esc(d.phone)        : "<span style='color:#9CA3AF;font-style:italic;'>Not provided</span>")}
        ${row("Organization",  d.organization  ? esc(d.organization) : "<span style='color:#9CA3AF;font-style:italic;'>Not provided</span>")}
        ${row("Subject",       esc(d.subject))}
        ${row("Message",       `<span style="white-space:pre-wrap;line-height:1.7;">${nl2br(d.message)}</span>`)}
        ${row("Submitted At",  esc(d.submittedAt))}
        ${row("IP Address",    esc(d.ipAddress))}
      </tbody>
    </table>

    <div style="margin-top:24px;padding:16px 20px;background:${BG};border-radius:10px;border:1px solid ${BORDER};">
      <p style="margin:0;font-size:14px;color:${DARK_GREEN};font-weight:600;">
        ⚡ Action required: Please follow up with this clinic at your earliest convenience.
      </p>
    </div>
  `;
  return wrapper(body);
}

// ── User auto-reply ───────────────────────────────────────────────────────────

export function buildUserReply(name: string): string {
  const body = `
    <h2 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#111827;">Thank You for Contacting Dentax</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#6B7280;">We have received your request and will be in touch shortly.</p>

    <p style="font-size:16px;color:#374151;line-height:1.8;margin:0 0 16px;">Dear <strong>${esc(name)}</strong>,</p>

    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0 0 12px;">
      Thank you for your interest in Dentax.
    </p>
    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0 0 12px;">
      We have successfully received your request for a live demonstration.
      Our team will review your request and contact you shortly to arrange a convenient time.
    </p>
    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0 0 24px;">
      We appreciate your interest in Dentax Smart Dental Practice Management Software.
    </p>

    <div style="padding:20px 24px;background:${BG};border-radius:12px;border-left:4px solid ${GREEN};margin-bottom:24px;">
      <p style="margin:0;font-size:14px;color:#374151;line-height:1.7;">
        If you have any urgent questions in the meantime, feel free to reach us at
        <a href="mailto:info@globalpearlventures.com" style="color:${GREEN};font-weight:600;">info@globalpearlventures.com</a>.
      </p>
    </div>

    <p style="font-size:15px;color:#374151;line-height:1.8;margin:0;">
      Best Regards,<br>
      <strong style="color:#111827;">Dentax Team</strong><br>
      <span style="color:#6B7280;font-size:14px;">Global Pearl Ventures (PVT) Ltd.</span>
    </p>
  `;
  return wrapper(body);
}
