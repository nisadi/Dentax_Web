import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/contactSchema";
import transporter from "@/lib/mail";
import { buildAdminEmail, buildUserReply } from "@/lib/emailTemplates";

// ── In-memory rate limiter ────────────────────────────────────────────────────
// Allows 5 submissions per IP per 10-minute window.
// For production at scale, replace with Redis (e.g. Upstash).

const WINDOW_MS  = 10 * 60 * 1000; // 10 minutes
const MAX_HITS   = 5;

const ipMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now  = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_HITS) return true;

  entry.count += 1;
  return false;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function getIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown"
  );
}

function sriLankaTime(): string {
  return new Date().toLocaleString("en-US", {
    timeZone: "Asia/Colombo",
    dateStyle: "full",
    timeStyle: "medium",
  });
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Rate limit
  const ip = getIp(req);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 2. Parse body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // 3. Server-side Zod validation
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = parsed.error.flatten().fieldErrors;
    return NextResponse.json(
      { error: "Validation failed.", fieldErrors },
      { status: 400 }
    );
  }

  const { fullName, phone, organization, subject, message } = parsed.data;

  // 4. Build email data
  const submittedAt = sriLankaTime();
  const recipient   = process.env.CONTACT_EMAIL ?? "YOUR_EMAIL";

  const adminHtml = buildAdminEmail({
    fullName,
    phone:        phone        ?? "",
    organization: organization ?? "",
    subject,
    message,
    submittedAt,
    ipAddress: ip,
  });

  // 5. Send admin notification
  try {
    await transporter.sendMail({
      from:    `"Dentax Website" <${process.env.SMTP_USER}>`,
      to:      recipient,
      subject: `New Dentax Demo Request — ${fullName}`,
      html:    adminHtml,
      replyTo: process.env.SMTP_USER,
    });
  } catch (err) {
    console.error("[contact] Failed to send admin email:", err);
    return NextResponse.json(
      { error: "Failed to send your request. Please try again later." },
      { status: 500 }
    );
  }

  // 6. Return success (auto-reply is best-effort — never block the response)
  return NextResponse.json({ success: true }, { status: 200 });
}

// Reject all other HTTP methods
export function GET()    { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
export function PUT()    { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
export function DELETE() { return NextResponse.json({ error: "Method not allowed." }, { status: 405 }); }
