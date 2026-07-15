"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Phone, Building2 } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const contacts = [
  {
    icon: Mail,
    heading: "Email Us",
    value: "info@globalpearlventures.com",
  },
  {
    icon: Phone,
    heading: "Call Us",
    value: "+94 77 2613 863",
  },
  {
    icon: Building2,
    heading: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" as const },
  }),
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function ContactCTA() {
  return (
    <section id="contact" className="py-8 px-6 lg:px-8 bg-[#F7FCFB]">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-10">

        {/* ── Card 1: Still Have Questions? ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full rounded-[32px] bg-[#EDF8F2] px-8 py-14 lg:px-[60px] lg:py-[56px] flex flex-col items-center gap-10"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.05)" }}
        >
          {/* Heading */}
          <div className="flex flex-col items-center text-center gap-3">
            <h2 className="font-bold text-[38px] text-[#111827] leading-tight">
              Still have questions?
            </h2>
            <p className="text-[17px] text-[#6B7280]">
              We&apos;re here to help! Reach out to our friendly team today.
            </p>
          </div>

          {/* Contact cards */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contacts.map(({ icon: Icon, heading, value }, i) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="flex items-center gap-5 bg-white rounded-[18px] p-[26px]"
                style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}
              >
                {/* Icon container */}
                <div
                  className="shrink-0 flex items-center justify-center rounded-2xl"
                  style={{ width: 56, height: 56, backgroundColor: "#0F8A56" }}
                >
                  <Icon size={28} className="text-white" strokeWidth={1.8} />
                </div>

                {/* Text */}
                <div className="flex flex-col gap-0.5">
                  <span className="text-[18px] font-bold text-[#111827]">{heading}</span>
                  <span className="text-[16px] text-[#4B5563]">{value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Card 2: Ready to Transform ── */}
        <motion.div
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full rounded-[20px] overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1B9B52 0%, #188848 45%, #0F6A39 100%)",
            boxShadow: "0 20px 45px rgba(0,0,0,0.18)",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 items-center px-8 py-14 lg:px-[60px] lg:py-[52px]">

            {/* Left text */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-[38px] lg:text-[42px] text-white leading-tight">
                  Ready to transform your dental practice?
                </h2>
                <p
                  className="text-[17px] leading-relaxed max-w-[560px]"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Take the next step toward smarter dental care with a solution built to
                  enhance productivity, improve patient experiences, and simplify practice
                  management.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Start Your Free Trial"
                  className="flex h-[52px] items-center justify-center rounded-full px-8 text-[16px] font-semibold"
                  style={{ backgroundColor: "#fff", color: "#0F8A56" }}
                >
                  Start Your Free Trial
                </motion.a>

                <motion.a
                  href="#contact"
                  whileHover={{ backgroundColor: "#fff", color: "#0F8A56", scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Book a Personalized Demo"
                  className="flex h-[52px] items-center justify-center rounded-full px-8 text-[16px] font-semibold text-white"
                  style={{ border: "1.5px solid rgba(255,255,255,0.9)" }}
                >
                  Book a Personalized Demo
                </motion.a>
              </div>
            </div>

            {/* Right image */}
            <div className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{
                  width: "clamp(240px, 60vw, 380px)",
                  aspectRatio: "4/3",
                  transform: "rotate(-8deg)",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
                }}
              >
                <Image
                  src="/images/tab.png"
                  alt="Dentax dashboard on tablet"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
