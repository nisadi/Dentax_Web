"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

type Plan = {
  badge: string;
  price: string;
  description: string;
  features: string[];
  accent: string;
};

const plans: Plan[] = [
  {
    badge: "INDIVIDUAL (BASIC)",
    price: "LKR 2,900",
    description:
      "A simple solution to manage patient records, appointments, and basic practice operations.",
    features: [
      "Unlimited Patient Registrations",
      "Unlimited Patient Appointments",
      "AI Chat Bot",
      "Basic Reports & Analytics",
      "Basic Patient Management",
      "Mobile, Tablet & Laptop Compatibility",
      "2 User Roles",
      "1 GB Data Storage (Expandable at LKR 1000/GB)",
      "Weekly Data Backup",
      "Email Support",
      "Online Training",
    ],
    accent: "#16A34A",
  },
  {
    badge: "STANDARD (PRO)",
    price: "LKR 6,900",
    description:
      "Designed for practices that need advanced clinical management, improved workflow control, and better collaboration.",
    features: [
      "Everything included in the Individual Plan",
      "Unlimited User Roles",
      "Diagnosis Management",
      "Dental Chart",
      "Treatment Management",
      "WhatsApp Support",
      "Configuration Support",
    ],
    accent: "#0D9488",
  },
  {
    badge: "ENTERPRISE (PREMIUM)",
    price: "LKR 9,900",
    description:
      "A comprehensive platform designed for large clinics, multi-location practices, and organizations requiring advanced customization.",
    features: [
      "Everything included in the Standard Plan",
      "Orthodontic Management",
      "Lab Management",
      "Inventory Management",
      "Prescription Module",
      "HR & Payroll Management",
      "Expense Management",
      "Integration & API Access",
      "Audit Logs & Compliance",
      "Custom Branding & Workflow Setup",
      "24/7 Phone + Onsite Support",
      "Department-wise Training Programs",
      "Dedicated Account Manager",
    ],
    accent: "#7C3AED",
  },
];

const VISIBLE_COUNT = 4;

// ─── Card ─────────────────────────────────────────────────────────────────────

function PricingCard({ plan, index }: { plan: Plan; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const visibleFeatures = plan.features.slice(0, VISIBLE_COUNT);
  const hiddenFeatures = plan.features.slice(VISIBLE_COUNT);
  const hasMore = hiddenFeatures.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" as const }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className="flex flex-col w-full max-w-[380px] rounded-[24px] overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0F8A56 0%, #012B18 100%)",
        boxShadow: "0 20px 50px rgba(0,0,0,0.18)",
      }}
    >
      {/* ── White header panel ── */}
      <div
        className="mx-4 mt-4 flex flex-col px-6 py-5"
        style={{ background: "#fff", borderRadius: 20 }}
      >
        {/* Badge */}
        <span
          className="self-start rounded-full px-3 py-1 text-[10px] font-bold tracking-wide text-white"
          style={{ backgroundColor: plan.accent }}
        >
          {plan.badge}
        </span>

        {/* Price */}
        <div className="flex items-end gap-1 mt-2">
          <span className="text-[36px] font-bold text-[#111827] leading-none">
            {plan.price}
          </span>
          <span className="text-[15px] text-gray-400 mb-0.5">/month</span>
        </div>
      </div>

      {/* ── Green content area ── */}
      <div className="flex flex-col px-6 pt-5 pb-6 gap-4">
        {/* Description */}
        <p className="text-[13px] leading-[1.6] text-white/90">
          {plan.description}
        </p>

        {/* Get Started button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          aria-label={`Get started with ${plan.badge}`}
          className="w-full h-[44px] rounded-full text-[14px] font-semibold transition-colors duration-300"
          style={{ backgroundColor: "#fff", color: "#0F8A56" }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#EFFFF5";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#fff";
          }}
        >
          Get Started
        </motion.button>

        {/* Divider */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }} />

        {/* View all features — right-aligned, above list */}
        {hasMore && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="flex items-center justify-end gap-1.5 text-[13px] font-medium transition-colors duration-200 text-white/80 hover:text-white"
          >
            {expanded ? "View Less" : "View all Features"}
            <motion.span
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" as const }}
              className="flex"
            >
              <ChevronDown size={14} />
            </motion.span>
          </button>
        )}

        {/* Always-visible first 4 features */}
        <ul className="flex flex-col gap-3">
          {visibleFeatures.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-[#4ADE80] font-bold text-[14px] shrink-0 mt-0.5">✓</span>
              <span className="text-white text-[13.5px] leading-snug font-medium">{item}</span>
            </li>
          ))}
        </ul>

        {/* Expanded hidden features */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              key="extra"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" as const }}
              className="flex flex-col gap-3 overflow-hidden"
            >
              {hiddenFeatures.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: i * 0.04, ease: "easeOut" as const }}
                  className="flex items-start gap-2.5"
                >
                  <span className="text-[#86EFAC] font-bold text-[14px] shrink-0 mt-0.5">✓</span>
                  <span className="text-white/80 text-[13.5px] leading-snug font-medium">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function PricingSection() {
  return (
    <section id="pricing" className="py-[90px] px-6 lg:px-8 bg-[#F7FCFB]">
      <div className="mx-auto max-w-[1440px] flex flex-col items-center gap-14">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: "easeOut" as const }}
          className="flex flex-col items-center text-center gap-4"
        >
          <h2 className="font-bold text-[38px] text-[#134E4A] leading-tight max-w-[700px]">
            Choose the Right Plan for Your Dental Practice
          </h2>
          <p className="text-[16px] text-[#64748B] max-w-[650px] leading-relaxed">
            Select a plan that fits your practice requirements, from essential patient
            management tools to complete enterprise-level dental operations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-items-center">
          {plans.map((plan, i) => (
            <PricingCard key={plan.badge} plan={plan} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}