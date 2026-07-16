"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What is Dentax?",
    answer:
      "Dentax is an advanced, cloud-based dental management platform designed to streamline clinic operations—from patient records and appointment scheduling to imaging, billing, and analytics—all within one secure and user-friendly system.",
  },
  {
    question: "Is my patient data secure?",
    answer:
      "Yes. Dentax uses encrypted communication, secure cloud infrastructure, role-based access control, and regular backups to ensure your patient data remains protected at all times.",
  },
  {
    question: "Do I need to install any software?",
    answer:
      "No. Dentax is completely cloud-based, allowing you to securely access the system from any modern web browser without installing additional software.",
  },
  {
    question: "Can multiple users access the platform?",
    answer:
      "Absolutely. Dentax supports multiple user roles including dentists, receptionists, radiologists, assistants, accountants, and administrators with customizable permissions.",
  },
  {
    question: "How can I get technical support?",
    answer:
      "Our dedicated support team is available through phone, email, WhatsApp, and remote assistance to help you whenever you need technical support.",
  },
];

// ─── Accordion Item ───────────────────────────────────────────────────────────

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      whileHover={!isOpen ? { y: -2, transition: { duration: 0.25 } } : {}}
      className="rounded-[18px] bg-white overflow-hidden transition-shadow duration-300"
      style={{
        border: isOpen ? "2px solid #16A34A" : "1.5px solid #16A34A",
        boxShadow: isOpen ? "0 10px 35px rgba(22,163,74,0.15)" : "none",
      }}
    >
      {/* Question row */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
      >
        <span className="text-[15px] font-semibold text-[#111827] leading-snug">
          {faq.question}
        </span>

        {/* Chevron circle */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" as const }}
          className="shrink-0 flex items-center justify-center rounded-full"
          style={{ width: 34, height: 34, background: "#DDF7EA" }}
        >
          <ChevronDown size={16} className="text-[#16A34A]" strokeWidth={2.5} />
        </motion.div>
      </button>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" as const }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-6 text-[15px] text-[#6B7280] leading-[1.8]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-14 px-5 md:px-8 lg:px-6 bg-white overflow-hidden">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-20 items-start">

          {/* ── Left content ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" as const }}
            className="flex flex-col gap-4 lg:sticky lg:top-28"
          >
            <span className="self-start rounded-full bg-[#DDF7EA] px-3 py-1 text-[11px] font-semibold text-[#16A34A]">
              Common Questions
            </span>
            <h2 className="font-bold text-3xl md:text-4xl lg:text-[54px] text-[#111827] leading-[1.05]">
              Frequently asked
              <br />
              <span className="text-[#16A34A]">questions</span>
            </h2>
            <p className="text-sm md:text-base text-[#6B7280] leading-[1.8]">
              Have questions about your next visit, or treatments? We believe in
              transparent, stress-free dental care. Find clear, straightforward
              answers to our most common inquiries below.
            </p>
          </motion.div>

          {/* ── Right accordion ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" as const }}
            className="flex flex-col gap-4"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
