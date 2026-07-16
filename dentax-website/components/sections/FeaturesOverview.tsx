"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Cross,
  Mic,
  FileText,
  ClipboardList,
  Search,
  Bell,
  MessageSquare,
  Mail,
  Calendar,
  FlaskConical,
  Calculator,
  Cloud,
  Languages,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

type Module = {
  title: string;
  color: string;
  bg: string;
  borderColor: string;
  emoji: string;
  image: string;
  features: string[];
};

const modules: Module[] = [
  {
    title: "Clinical",
    color: "#0F8F5B",
    bg: "bg-[#F4FBF7]",
    borderColor: "border-[#DCFCE7]",
    emoji: "🦷",
    image: "/images/clinical.png",
    features: [
      "Patient Management",
      "Dental Chart",
      "Diagnosis Management",
      "Treatment Management",
      "Prescription Module",
      "Orthodontic Management",
      "DICOM Imaging Viewer",
    ],
  },
  {
    title: "Administration",
    color: "#2563EB",
    bg: "bg-[#EFF6FF]",
    borderColor: "border-[#DBEAFE]",
    emoji: "⚙️",
    image: "/images/administration.png",
    features: [
      "Appointment Management",
      "Invoice & Billing",
      "Payment Management",
      "HR & Payroll",
      "Expense Management",
      "SMS / Email / WhatsApp",
      "Reports & Analytics",
    ],
  },
  {
    title: "Business",
    color: "#C026D3",
    bg: "bg-[#FDF4FF]",
    borderColor: "border-[#FCE7F3]",
    emoji: "📊",
    image: "/images/business.png",
    features: [
      "Inventory Management",
      "Lab Management",
      "Multi-Location Support",
      "Role-Based Access",
      "Cloud Backup & Security",
      "API & Integrations",
      "Audit Logs",
    ],
  },
];

type AiFeature = { icon: React.ElementType; label: string };
const aiFeatures: AiFeature[] = [
  { icon: Cross, label: " AI Treatment Suggestions"},
  { icon: Mic, label: "Voice Notes"},
  { icon: FileText, label: "AI Patient Summary"},
  { icon: ClipboardList, label: "Clinical Decision Support"},
  { icon: Search, label: "AI Search"},
  { icon: Bell, label: "Smart Follow-up Reminders"},
];

type Integration = { icon: React.ElementType; label: string; bg: string; color: string };
const integrations: Integration[] = [
  { icon: FaWhatsapp, label: "WhatsApp", bg: "#DCFCE7", color: "#16A34A" },
  { icon: MessageSquare, label: "SMS", bg: "#DBEAFE", color: "#2563EB" },
  { icon: Mail, label: "Gmail", bg: "#FEE2E2", color: "#DC2626" },
  { icon: Calendar, label: "Google Calendar", bg: "#FEF9C3", color: "#CA8A04" },
  { icon: FlaskConical, label: "Lab Systems", bg: "#F3E8FF", color: "#9333EA" },
  { icon: Calculator, label: "Accounting & Billing", bg: "#FFEDD5", color: "#EA580C" },
  { icon: Cloud, label: "Cloud Storage", bg: "#E0F2FE", color: "#0284C7" },
];

// ─── Animation helpers ───────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

// ─── Sub-components ──────────────────────────────────────────────────────────

function ModuleCard({ mod, index }: { mod: Module; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4, scale: 1.01, transition: { duration: 0.25 } }}
      className={`rounded-[14px] border ${mod.borderColor} ${mod.bg} p-5 flex flex-col gap-4`}
    >
      {/* Title */}
      <span className="text-[15px] font-bold flex items-center gap-1.5" style={{ color: mod.color }}>
        <span>{mod.emoji}</span>
        <span>{mod.title}</span>
      </span>

      {/* Feature list + image row */}
      <div className="flex gap-4 items-start justify-between">
        <ul className="flex flex-col gap-2 flex-1">
          {mod.features.map((f) => (
            <li key={f} className="flex items-center gap-2 text-[13px] font-medium text-gray-700">
              <span
                className="w-1.5 h-1.5 rounded-full border border-current shrink-0 mt-0.5"
                style={{ borderColor: mod.color, color: mod.color }}
              />
              {f}
            </li>
          ))}
        </ul>
        <div className="relative w-[110px] lg:w-[130px] h-[120px] lg:h-[135px] shrink-0">
          <Image
            src={mod.image}
            alt={mod.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 110px, 130px"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function FeaturesOverview() {
  return (
    <section id="AI" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-6 flex flex-col gap-10">

        {/* ── Part 1: Complete Modules ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 lg:gap-12 items-center">
          {/* Left text */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-3 text-left"
          >
            <h2 className="font-bold text-[26px] lg:text-[34px] text-[#111827] leading-tight">
              Complete Modules to
              <br className="hidden lg:block" /> Run Your Practice
            </h2>
            <p className="text-[14px] leading-[20px] text-gray-500">
              All the tools you need in one integrated platform
            </p>
          </motion.div>

          {/* Three module cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <ModuleCard key={mod.title} mod={mod} index={i} />
            ))}
          </div>
        </div>

        {/* ───────────────── AI Assistant ───────────────── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative overflow-visible rounded-2xl shadow-xl"
          style={{
            background:
              "linear-gradient(135deg,#1B9B52 0%,#188848 50%,#116E3A 100%)",
          }}
        >
          <div className="relative px-8 py-10 lg:px-12 lg:py-14">
            
            {/* ── Flex Container ── */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
              
              {/* 1. Left: AI Assistant Heading & Description */}
              <div className="flex flex-col mt-10 gap-5 shrink-0 lg:w-[250px]">
                <h3 className="text-white font-bold text-[28px] lg:text-[32px] leading-tight">
                  AI Assistant
                </h3>
                <p className="text-white/85 text-[14px] lg:text-[16px] leading-relaxed">
                  Let AI simplify your clinical decisions and documentation.
                </p>
              </div>

              {/* 2. Bot Image */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="shrink-0"
              >
                <Image
                  src="/images/bot.png"
                  alt="AI Assistant"
                  width={160}
                  height={250}
                  className="object-contain"
                  priority
                />
              </motion.div>

              {/* 3. Feature Points Grid */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-6 flex-1" style={{ columnGap: '8px', maxWidth: '600px' }}>
                {aiFeatures.map(({ icon: Icon, label}, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08, ease: "easeOut" as const }}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    className="flex items-center gap-3 cursor-default"
                  >
                    {/* Icon box */}
                    <div
                      className="flex items-center justify-center shrink-0 rounded-[10px]"
                      style={{ width: 32, height: 32, background: "rgba(255,255,255,0.18)" }}
                    >
                      <Icon size={16} className="text-white" />
                    </div>
                    <span className="text-white font-semibold text-[13px] lg:text-[14px] leading-snug whitespace-nowrap">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 4. Chat Image - Overlapping on the right */}
            <motion.div
              initial={{ opacity: 0, x: 60, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="hidden lg:block absolute"
              style={{ 
                right: "-50px", 
                top: "10%", 
                transform: "translateY(-50%)",
                zIndex: 20
              }}
            >
              <div className="relative drop-shadow-2xl" style={{ width: 280, height: 350 }}>
                <Image
                  src="/images/chat.png"
                  alt="AI Chat Window"
                  fill
                  className="object-contain"
                  sizes="300px"
                />
              </div>
            </motion.div>

            {/* ── Mobile: Chat Image ── */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, ease: "easeOut" as const }}
              className="lg:hidden w-full flex justify-center mt-6"
            >
              <div className="relative w-[260px] h-[200px]">
                <Image 
                  src="/images/chat.png" 
                  alt="AI Chat Window" 
                  fill 
                  className="object-contain" 
                  sizes="260px" 
                />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* ── Part 3: Bottom Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6 mt-5">
          
          {/* Card 1 — Multi Language (1/3 of the space) */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#F8FAFC] rounded-2xl border border-gray-200/50 p-6 flex flex-col items-start justify-between gap-4 overflow-hidden"
          >
            <div className="flex flex-col gap-2 text-left w-full">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#E6F4EA] flex items-center justify-center shrink-0">
                  <Languages size={18} className="text-[#0F8F5B]" />
                </div>
                <h3 className="font-bold text-[18px] text-[#111827]">Multi Language Support</h3>
              </div>
              
              {/* Paragraph and Image - Horizontal Layout */}
              <div className="flex flex-row items-center gap-4 w-full">
                <p className="text-[16px] leading-[26px] text-gray-500 flex-1">
                  Use Dentax in Your preferred language for a better experience.
                </p>
                <div className="relative w-[160px] h-[120px] shrink-0">
                  <Image
                    src="/images/multilanguage.png"
                    alt="Multi Language Support"
                    fill
                    className="object-contain"
                    sizes="120px"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 2 — Seamless Integrations (2/3 of the space) */}
          <motion.div
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="bg-[#F8FAFC] rounded-2xl border border-gray-200/50 p-6 md:col-span-2 flex flex-col gap-4"
          >
            <div className="flex flex-row items-center gap-6">
              {/* Left: Title and Description */}
              <div className="flex flex-col gap-1 text-left shrink-0">
                <h3 className="font-bold text-[24px] text-[#111827]">Seamless</h3>
                <h3 className="font-bold text-[24px] text-[#111827]">Integrations</h3>
                <p className="text-[14px] leading-[18px] text-gray-500">Connect with your favourite tools.</p>
              </div>
              
              {/* Right: All icons inside one white rectangle */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1">
                <div className="grid grid-cols-4 gap-6">
                  {integrations.map(({ icon: Icon, label, bg, color }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                        style={{ backgroundColor: bg }}
                      >
                        <Icon size={22} style={{ color }} />
                      </div>
                      <span className="text-[11px] text-gray-600 text-center leading-tight font-medium">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}