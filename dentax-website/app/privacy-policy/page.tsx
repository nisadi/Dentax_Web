"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  ClipboardList,
  UserCircle2,
  Users,
  Cookie,
  RefreshCcw,
  CircleHelp,
} from "lucide-react";
import Footer from "@/components/Footer/Footer";

// ─── Container ────────────────────────────────────────────────────────────────

const CONTAINER = "mx-auto w-full px-6" as const;
const MAX_W = { maxWidth: 1280 } as const;

// ─── Policy card data ─────────────────────────────────────────────────────────

type BulletItem = string;

interface PolicyCard {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: BulletItem[];
}

const CARDS: PolicyCard[] = [
  {
    id: "collect",
    icon: ClipboardList,
    title: "Information We Collect",
    subtitle: "We may collect the following information from registered clinics:",
    bullets: [
      "Clinic name, contact person, email address, and contact number",
      "Billing and payment information (processed via secure third-party gateways)",
      "Usage data, access logs, and browser/device metadata (for system optimization and security)",
    ],
  },
  {
    id: "use",
    icon: UserCircle2,
    title: "Use of Information",
    subtitle: "Your data is collected and used for the following purposes:",
    bullets: [
      "Creating and managing your clinic account",
      "Processing subscription payments",
      "Monitoring platform performance and improving user experience",
      "Providing customer and technical support",
    ],
  },
  {
    id: "sharing",
    icon: Users,
    title: "Data Sharing",
    subtitle:
      "We do not sell, rent, or share your data with any third parties, except in the following cases:",
    bullets: [
      "With payment gateways, strictly for secure card payment processing",
      "With law enforcement authorities, only if required under Sri Lankan law",
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    title: "Data Security",
    paragraphs: [
      "We implement industry-standard security measures including end-to-end encryption (TLS/SSL), encrypted data storage, and role-based access controls to protect your information. Our infrastructure is hosted on secure, regularly audited servers with automated backups and continuous monitoring.",
      "While we take every reasonable precaution to safeguard your data, no method of transmission over the internet is 100% secure. We encourage all users to use strong, unique passwords and to report any suspicious activity immediately.",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies",
    paragraphs: [
      "Dentax uses cookies and similar tracking technologies to enhance your experience on our platform. These include essential session cookies required for the platform to function, as well as analytics cookies that help us understand how users interact with the system so we can continue to improve it.",
      "You may disable cookies through your browser settings at any time; however, please note that some features of the platform may not function properly without them.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCcw,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or applicable legal requirements. When we make significant changes, we will notify registered users via email or through a prominent notice within the platform.",
      'The "Last Updated" date at the top of this page will always reflect the most recent revision. Your continued use of the Dentax platform after any changes are posted constitutes your acceptance of the updated Privacy Policy.',
    ],
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function BulletList({ items }: { items: string[] }) {
  return (
    <ul
      className="flex flex-col"
      style={{ marginTop: 12, gap: 10, paddingLeft: 30 }}
    >
      {items.map((item) => (
        <li
          key={item}
          className="relative"
          style={{
            fontSize: 14,
            lineHeight: 1.9,
            color: "#374151",
          }}
        >
          <span
            className="absolute"
            style={{ left: -18, top: 0, color: "#16964A", fontWeight: 700 }}
            aria-hidden="true"
          >
            •
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function PolicyCardBlock({
  card,
  index,
}: {
  card: PolicyCard;
  index: number;
}) {
  const Icon = card.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.45,
        delay: index * 0.07,
        ease: "easeOut" as const,
      }}
      whileHover={{ y: -3 }}
      className="w-full"
      style={{
        background: "#FFFFFF",
        border: "1px solid rgba(22,150,74,0.08)",
        borderRadius: 28,
        boxShadow: "0 12px 35px rgba(0,0,0,0.05)",
        transition: "box-shadow 300ms, transform 300ms",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 18px 45px rgba(22,150,74,0.10)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.boxShadow =
          "0 12px 35px rgba(0,0,0,0.05)";
      }}
    >
      {/* Inner padding wrapper */}
      <div
        className="grid"
        style={{
          gridTemplateColumns: "90px 1fr",
          gap: 32,
          alignItems: "start",
          padding: "36px",
        }}
      >
        {/* Icon */}
        <div
          className="flex items-center justify-center shrink-0"
          style={{
            width: 72,
            height: 72,
            background: "#EEF9F3",
            borderRadius: 20,
          }}
        >
          <Icon size={40} color="#16964A" strokeWidth={2} />
        </div>

        {/* Content */}
        <div>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 700,
              color: "#111827",
              marginBottom: 14,
              lineHeight: 1.2,
            }}
          >
            {card.title}
          </h2>

          {card.subtitle && (
            <p
              style={{
                fontSize: 16,
                color: "#4B5563",
                lineHeight: 1.9,
                maxWidth: 850,
              }}
            >
              {card.subtitle}
            </p>
          )}

          {card.bullets && <BulletList items={card.bullets} />}

          {card.paragraphs &&
            card.paragraphs.map((para, i) => (
              <p
                key={i}
                style={{
                  fontSize: 14,
                  color: "#4B5563",
                  lineHeight: 1.9,
                  maxWidth: 1000,
                  marginTop: i === 0 ? 0 : 18,
                }}
              >
                {para}
              </p>
            ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-18 pb-14 md:pt-[64px] md:pb-[56px]"
        style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F8FCFA 100%)" }}
      >
        {/* Decorative shield */}
        <div
          className="pointer-events-none absolute top-[30px] right-0 hidden lg:block"
          style={{ opacity: 0.06, width: 400, height: 400 }}
          aria-hidden="true"
        >
          <ShieldCheck size={350} className="text-[#16964A]" strokeWidth={0.6} />
        </div>

        <div
          className={`${CONTAINER} relative z-10 flex flex-col items-center text-center gap-6`}
          style={MAX_W}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" as const }}
            className="flex items-center gap-2 rounded-full px-6 py-3"
            style={{ backgroundColor: "#EAF8F1" }}
          >
            <ShieldCheck size={20} className="text-[#16964A]" strokeWidth={2} />
            <span className="text-[16px] font-semibold text-[#16964A]">
              Your Privacy Matters
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="font-extrabold text-[32px] md:text-[40px] lg:text-[64px] text-[#111827] leading-[1.1]"
          >
            Privacy Policy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" as const }}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-[#6B7280]"
          >
            Your privacy and data security are our top priorities
          </motion.p>

          {/* Last updated */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease: "easeOut" as const }}
            className="flex items-center gap-[10px]"
          >
            <CalendarDays size={20} className="text-[#4B5563]" />
            <span className="text-[16px] font-medium text-[#4B5563]">
              Last Updated: October 30, 2025
            </span>
          </motion.div>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" as const }}
            className="text-[14px] md:text-[16px] text-[#4B5563] leading-[1.9] max-w-[820px] "
          >
            At Dentax, we are committed to protecting the privacy of our clinic
            partners. This policy outlines how we collect, use, and safeguard
            your data when you use our software platform at{" "}
            <a
              href="https://dentax.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16964A] hover:underline"
            >
              https://dentax.lk/
            </a>
          </motion.p>
        </div>
      </section>

      {/* ── Policy Cards Section ── */}
      <section
        style={{
          background: "linear-gradient(180deg,#F9FDFC 0%,#FFFFFF 100%)",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <div className={CONTAINER} style={MAX_W}>

          {/* Policy cards */}
          <div className="flex flex-col" style={{ gap: 20 }}>
            {CARDS.map((card, i) => (
              <PolicyCardBlock key={card.id} card={card} index={i} />
            ))}

            {/* Card 7 — Have Questions */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: CARDS.length * 0.07,
                ease: "easeOut" as const,
              }}
              whileHover={{ y: -3 }}
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(22,150,74,0.08)",
                borderRadius: 28,
                boxShadow: "0 12px 35px rgba(0,0,0,0.05)",
                transition: "box-shadow 300ms, transform 300ms",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 18px 45px rgba(22,150,74,0.10)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 35px rgba(0,0,0,0.05)";
              }}
            >
              <div
                className="grid"
                style={{
                  gridTemplateColumns: "90px 1fr",
                  gap: 28,
                  alignItems: "start",
                  padding: "28px",
                }}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center shrink-0"
                  style={{
                    width: 72,
                    height: 72,
                    background: "#EEF9F3",
                    borderRadius: 20,
                  }}
                >
                  <CircleHelp size={40} color="#16964A" strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <h2
                      style={{
                        fontSize: 24,
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: 8,
                        lineHeight: 1.5,
                      }}
                    >
                      Have Questions?
                    </h2>
                    <p
                      style={{
                        fontSize: 18,
                        color: "#4B5563",
                        lineHeight: 1.5,
                        maxWidth: 850,
                      }}
                    >
                      If you have any questions or concerns about our Privacy
                      Policy, please don&apos;t hesitate to contact us.
                    </p>
                  </div>

                  {/* Contact Us button */}
                  <motion.a
                    href="/#footcontact"
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center shrink-0 font-semibold text-white text-[16px]"
                    style={{
                      height: 54,
                      paddingLeft: 32,
                      paddingRight: 32,
                      borderRadius: 999,
                      backgroundColor: "#16964A",
                      boxShadow: "0 8px 25px rgba(22,150,74,0.25)",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "#148347";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "#16964A";
                    }}
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
