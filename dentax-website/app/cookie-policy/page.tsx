"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cookie,
  ShieldCheck,
  CalendarDays,
  Phone,
  Mail,
  MapPin,
  Scale,
  BadgeCheck,
  UserRound,
  RefreshCcw,
  CircleHelp,
} from "lucide-react";
import Footer from "@/components/Footer/Footer";

// ─── Container (identical across all legal pages) ─────────────────────────────

const CONTAINER = "mx-auto w-full px-6" as const;
const MAX_W = { maxWidth: 1280 } as const;

// ─── Card data ────────────────────────────────────────────────────────────────

interface CookieCard {
  id: string;
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  bullets?: string[];
}

const CARDS: CookieCard[] = [
  {
    id: "what",
    icon: Cookie,
    title: "What Are Cookies?",
    subtitle: "Understanding how cookies work on our platform:",
    paragraphs: [
      "Cookies are small text files that are placed on your device when you visit a website. They help websites function properly and provide information to the website owners.",
    ],
  },
  {
    id: "how",
    icon: Scale,
    title: "How We Use Cookies",
    subtitle: "We use cookies for the following purposes:",
    bullets: [
      "Essential cookies — required for the website and platform to function properly.",
      "Performance cookies — help us understand how visitors use our platform.",
      "Functionality cookies — remember your preferences and settings.",
      "Security cookies — help protect your account and prevent fraudulent activity.",
    ],
  },
  {
    id: "types",
    icon: BadgeCheck,
    title: "Types of Cookies We Use",
    subtitle: "Different types of cookies we employ:",
    paragraphs: [
      "We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a set period).",
    ],
  },
  {
    id: "third-party",
    icon: UserRound,
    title: "Third-Party Cookies",
    subtitle: "Cookies set by trusted third-party services:",
    paragraphs: [
      "Some cookies may be set by trusted third-party services (such as analytics or payment providers) to help us improve our services and ensure secure transactions.",
    ],
  },
  {
    id: "choices",
    icon: ShieldCheck,
    title: "Your Choices",
    subtitle: "You have control over your cookie preferences:",
    paragraphs: [
      "You can manage or disable cookies through your browser settings. However, please note that disabling certain cookies may affect the functionality and performance of our platform.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCcw,
    title: "Changes To This Policy",
    subtitle: "Updates to our Cookie Policy:",
    paragraphs: [
      "We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated 'Last Updated' date.",
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

function CookieCardBlock({
  card,
  index,
}: {
  card: CookieCard;
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

export default function CookiePolicyPage() {
  return (
    <main className="overflow-x-hidden">

      {/* ── Hero ── */}
      <section
        className="relative overflow-hidden pt-18 pb-14 md:pt-[64px] md:pb-[56px]"
        style={{ background: "linear-gradient(180deg,#FFFFFF 0%,#F8FCFA 100%)" }}
      >
        {/* Decorative cookie + shield illustration */}
        <div
          className="pointer-events-none absolute top-[30px] right-0 hidden lg:flex lg:flex-col lg:items-end"
          style={{ opacity: 0.06, gap: 0 }}
          aria-hidden="true"
        >
          <Cookie size={420} className="text-[#16964A]" strokeWidth={0.6} />
          <ShieldCheck
            size={180}
            className="text-[#16964A]"
            strokeWidth={0.6}
            style={{ marginTop: -60, marginRight: 40 }}
          />
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
            <Cookie size={20} className="text-[#16964A]" strokeWidth={2} />
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
            Cookie Policy
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18, ease: "easeOut" as const }}
            className="text-[14px] md:text-[16px] lg:text-[18px] text-[#6B7280]"
          >
            This policy explains how we use cookies and similar technologies
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
            This Cookie Policy explains how Dentax (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses
            cookies and similar technologies when you visit our website and use our
            dental clinic management platform at{" "}
            <a
              href="https://dentaxweb.globalpearlventures.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#16964A] hover:underline"
            >
              https://dentaxweb.globalpearlventures.com/
            </a>
            .
          </motion.p>
        </div>
      </section>

      {/* ── Cookie Cards Section ── */}
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
              <CookieCardBlock key={card.id} card={card} index={i} />
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
                      If you have any questions or concerns about our Cookie
                      Policy, please don&apos;t hesitate to contact us.
                    </p>
                  </div>

                  {/* Contact Us button */}
                  <motion.a
                    href="/#contact"
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