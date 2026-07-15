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
    <section id="contact" className="py-10 md:py-20 lg:py-24 px-5 md:px-8 lg:px-6 bg-[#F7FCFB] overflow-hidden">
      <div className="mx-auto max-w-[1440px] flex flex-col gap-8 lg:gap-6">

        {/* ── Card 1: Still Have Questions? ── */}
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="w-full rounded-[28px] lg:rounded-[32px] bg-[#EDF8F2] px-6 py-10 md:px-10 md:py-12 lg:px-[60px] lg:py-[56px] flex flex-col items-center gap-8 lg:gap-10"
          style={{ boxShadow: "0 12px 40px rgba(0,0,0,0.05)" }}
        >
          <div className="flex flex-col items-center text-center gap-2">
            <h2 className="font-bold text-2xl md:text-3xl lg:text-[38px] text-[#111827] leading-tight">
              Still have questions?
            </h2>
            <p className="text-sm md:text-base lg:text-[17px] text-[#6B7280]">
              We&apos;re here to help! Reach out to our friendly team today.
            </p>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {contacts.map(({ icon: Icon, heading, value }, i) => (
              <motion.div
                key={heading}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" as const }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
                className="flex items-center gap-4 bg-white rounded-[18px] p-5 lg:p-[26px]"
                style={{ boxShadow: "0 10px 25px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="shrink-0 flex items-center justify-center rounded-2xl"
                  style={{ width: 52, height: 52, backgroundColor: "#0F8A56" }}
                >
                  <Icon size={24} className="text-white" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-base lg:text-[18px] font-bold text-[#111827]">{heading}</span>
                  <span className="text-sm lg:text-[16px] text-[#4B5563] truncate">{value}</span>
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
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-center px-6 py-10 md:px-10 md:py-12 lg:px-[60px] lg:py-[52px]">

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-[42px] text-white leading-tight">
                  Ready to transform your dental practice?
                </h2>
                <p
                  className="text-sm md:text-base lg:text-[17px] leading-relaxed max-w-[560px]"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Take the next step toward smarter dental care with a solution built to
                  enhance productivity, improve patient experiences, and simplify practice
                  management.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Start Your Free Trial"
                  className="flex h-[48px] sm:h-[52px] items-center justify-center rounded-full px-6 sm:px-8 text-sm md:text-base font-semibold w-full sm:w-auto"
                  style={{ backgroundColor: "#fff", color: "#0F8A56" }}
                >
                  Start Your Trial
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ backgroundColor: "#fff", color: "#0F8A56", scale: 1.04 }}
                  transition={{ duration: 0.2 }}
                  aria-label="Book a Personalized Demo"
                  className="flex h-[48px] sm:h-[52px] items-center justify-center rounded-full px-6 sm:px-8 text-sm md:text-base font-semibold text-white w-full sm:w-auto"
                  style={{ border: "1.5px solid rgba(255,255,255,0.9)" }}
                >
                  Book a Personalized Demo
                </motion.a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
                style={{
                  width: "clamp(200px, 50vw, 340px)",
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
                  sizes="(max-width: 640px) 200px, (max-width: 1024px) 280px, 340px"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
