"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing",   href: "#pricing" },
  { label: "FAQ's",     href: "#contact" },
];

const featureLinks = [
  { label: "A platform for every role", href: "#features" },
  { label: "AI Assistance",             href: "#AI" },
  { label: "Multi language",            href: "#AI" },
];

const contactItems = [
  { icon: Phone,  label: "0778673863",        href: "tel:0778673863" },
  { icon: Mail,   label: "info@dentax.com",    href: "mailto:info@globalpearlventures.com" },
  { icon: MapPin, label: "Colombo, Sri Lanka", href: "#" },
];

const bottomLinks = [
  { label: "Privacy Policy",   href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Policy",    href: "#" },
];

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-[17px] font-semibold text-[#111827] mb-5">{children}</h3>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer aria-label="Site footer">

      {/* ── Main footer ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" as const }}
        className="bg-white pt-[72px] pb-12"
      >
        <div
          className="mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-y-9 md:gap-10 lg:gap-[80px] items-start"
          style={{ maxWidth: 1280 }}
        >
          {/* Col 1 — Logo + Description */}
          <div className="flex flex-col">
            <a href="#home" aria-label="Dentax home" className="mb-5 inline-block">
              <Image
                src="/dentax.png"
                alt="Dentax"
                width={120}
                height={36}
                className="object-contain"
                style={{ height: 36, width: "auto" }}
              />
            </a>
            <p className="text-[16px] text-[#6B7280] leading-[30px] max-w-[320px]">
              The complete dental practice management platform for modern clinics.
              Secure, reliable, and intelligent.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <nav aria-label="Footer navigation">
            <ColHeading>Home</ColHeading>
            <ul className="flex flex-col gap-[18px]">
              {navLinks.map(({ label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[15px] text-[#6B7280] hover:text-[#16964A] transition-colors duration-200 inline-block"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Features */}
          <nav aria-label="Footer features">
            <ColHeading>Features</ColHeading>
            <ul className="flex flex-col gap-[18px]">
              {featureLinks.map(({ label, href }) => (
                <li key={label}>
                  <motion.a
                    href={href}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    className="text-[15px] text-[#6B7280] hover:text-[#16964A] transition-colors duration-200 inline-block"
                  >
                    {label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 4 — Contact */}
          <div>
            <ColHeading>Contact</ColHeading>
            <ul className="flex flex-col gap-3">
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="flex items-center gap-3 text-[15px] text-[#6B7280] hover:text-[#16964A] transition-colors duration-200 group"
                  >
                    <Icon
                      size={16}
                      className="text-[#6B7280] group-hover:text-[#16964A] shrink-0 transition-colors duration-200"
                    />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>

      {/* ── Copyright bar ── */}
      <div
        className="w-full flex items-center"
        style={{ backgroundColor: "#176C54", minHeight: 75 }}
      >
        <div
          className="mx-auto px-6 w-full flex flex-col items-center justify-center gap-1 py-4"
          style={{ maxWidth: 1280 }}
        >
          <p className="text-[14px] mb-3 mt-3 font-medium text-white text-center">
            © 2026 Dentax. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-1">
            <a href="#" className="text-[14px] text-white/95 hover:underline transition-all duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-[14px] text-white/95 hover:underline transition-all duration-200">
              Terms of Service
            </a>
            <a href="#" className="text-[14px] text-white/95 hover:underline transition-all duration-200">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
