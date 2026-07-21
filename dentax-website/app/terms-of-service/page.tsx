"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  FileCheck2,
  UserRoundCheck,
  Lock,
  CreditCard,
  MonitorSmartphone,
  TriangleAlert,
  Scale,
  RefreshCcw,
  CircleHelp,
} from "lucide-react";
import Footer from "@/components/Footer/Footer";

// ─── Container (identical to Privacy Policy) ──────────────────────────────────

const CONTAINER = "mx-auto w-full px-6" as const;
const MAX_W = { maxWidth: 1280 } as const;

// ─── Card data ────────────────────────────────────────────────────────────────

interface TermsCard {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
}

const CARDS: TermsCard[] = [
  {
    id: "eligibility",
    icon: UserRoundCheck,
    title: "Eligibility",
    subtitle: "To use the Dentax platform, you must meet the following criteria:",
    bullets: [
      "Only registered dental clinics are eligible to use the platform.",
      "You must provide accurate and verifiable information during registration.",
    ],
  },
  {
    id: "account",
    icon: Lock,
    title: "Account and Access",
    subtitle: "Your account is subject to the following terms:",
    bullets: [
      "Access is manually granted after payment verification.",
      "You are responsible for maintaining the confidentiality of your login credentials.",
    ],
  },
  {
    id: "subscription",
    icon: CreditCard,
    title: "Subscription and Payments",
    subtitle: "Our subscription model operates as follows:",
    bullets: [
      "The platform operates on a monthly subscription basis.",
      "Payments are non-refundable, and once access is granted, no cancellations or refunds will be accepted.",
      "Only card payments are accepted via third-party secure payment processors.",
    ],
  },
  {
    id: "system-use",
    icon: MonitorSmartphone,
    title: "System Use",
    subtitle: "When using our platform, you agree to:",
    bullets: [
      "Clinics must not use the system for any illegal or unauthorized activity.",
      "Misuse or unauthorized sharing of access credentials may result in immediate suspension.",
    ],
  },
  {
    id: "ip",
    icon: ShieldCheck,
    title: "Intellectual Property",
    subtitle: "All intellectual property rights are protected:",
    bullets: [
      "All software features, content, and branding are the property of Global Pearl Ventures (PVT) Ltd.",
      "Unauthorized copying, modification, or redistribution is strictly prohibited.",
    ],
  },
  {
    id: "liability",
    icon: TriangleAlert,
    title: "Limitation of Liability",
    paragraphs: [
      "Dentax is not liable for any indirect, incidental, or consequential damages arising from the use or inability to use the system.",
      "The platform is provided 'as is' without warranties of any kind, either express or implied.",
    ],
  },
  {
    id: "law",
    icon: Scale,
    title: "Governing Law",
    subtitle: "These terms are governed by:",
    bullets: [
      "These Terms are governed by the laws of Sri Lanka.",
      "Any disputes shall be subject to the exclusive jurisdiction of Sri Lankan courts.",
    ],
  },
  {
    id: "amendments",
    icon: RefreshCcw,
    title: "Amendments",
    paragraphs: [
      "We may update these Terms without prior notice. Continued use of the platform implies acceptance of the revised Terms and Conditions.",
      "It is your responsibility to review these Terms periodically for any changes.",
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

function TermsCardBlock({
  card,
  index,
}: {
  card: TermsCard;
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

// ─── Footer (identical to Privacy Policy) ────────────────────────────────────

const footerNavLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ's", href: "/#faq" },
];
const footerFeatureLinks = [
  { label: "A platform for every role", href: "/#solutions" },
  { label: "AI Assistance", href: "/#features-overview" },
  { label: "Multi language", href: "/#features-overview" },
];
const footerContactItems = [
  { icon: Phone, label: "0778673863", href: "tel:0778673863" },
  { icon: Mail, label: "info@dentax.com", href: "mailto:info@dentax.com" },
  { icon: MapPin, label: "Colombo, Sri Lanka", href: "#" },
];

function FooterColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-semibold text-[#111827] mb-5">
      {children}
    </h3>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TermsOfServicePage() {
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
            <FileCheck2 size={20} className="text-[#16964A]" strokeWidth={2} />
            <span className="text-[16px] font-semibold text-[#16964A]">
              Please Read Carefully
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" as const }}
            className="font-extrabold text-[32px] md:text-[40px] lg:text-[64px] text-[#111827] leading-[1.1]"
          >
            Terms of Service
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" as const }}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-[#6B7280]"
          >
            Please read these terms carefully before using our platform
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
            className="text-[14px] md:text-[16px] text-[#4B5563] leading-[1.9] max-w-[820px]"
          >
            Welcome to Dentax. These Terms govern the access and use of our dental
            clinic management platform at{" "}
            <a
              href="https://dentax.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16964A] hover:underline"
            >
              https://dentax.lk/
            </a>
            . By registering and subscribing, you agree to the terms outlined below.
          </motion.p>
        </div>
      </section>

      {/* ── Terms Cards Section ── */}
      <section
        style={{
          background: "linear-gradient(180deg,#F9FDFC 0%,#FFFFFF 100%)",
          paddingTop: 50,
          paddingBottom: 50,
        }}
      >
        <div className={CONTAINER} style={MAX_W}>
          <div className="flex flex-col" style={{ gap: 20 }}>

            {/* Cards */}
            {CARDS.map((card, i) => (
              <TermsCardBlock key={card.id} card={card} index={i} />
            ))}

            {/* Card — Have Questions? */}
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
                      If you have any questions or concerns about our Terms of Service, please don&apos;t hesitate to contact us.
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