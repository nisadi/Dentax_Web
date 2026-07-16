"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

type Role = {
  id: string;
  label: string;
  title: string;
  image: string;
  features: string[];
};

const roles: Role[] = [
  {
    id: "dentist",
    label: "Dentist",
    title: "For the Dentist",
    image: "/images/dentist.png",
    features: [
      "View complete patient dental history",
      "Interactive dental chart with diagnosis",
      "Create and manage treatment plans",
      "Add clinical notes and attachments (X-rays, reports, images)",
      "Manage appointments and patient visits",
      "Record completed treatments",
      "Prescribe medications and treatment recommendations",
      "View patient medical alerts and allergies",
      "Request lab work and track lab status",
      "Print treatment plans and clinical records",
    ],
  },
  {
    id: "receptionist",
    label: "Receptionist",
    title: "For the Receptionist",
    image: "/images/receptionist.png",
    features: [
      "Register new patients",
      "Schedule, reschedule, and cancel appointments",
      "Patient check-in and visit management",
      "Manage waiting list",
      "Send appointment reminders",
      "Generate invoices and collect payments",
      "Process insurance information",
      "Manage patient profiles and contact details",
      "View daily appointment calendar",
      "Print receipts and appointment summaries",
    ],
  },
  {
    id: "radiologist",
    label: "Radiologist",
    title: "For the Radiologist",
    image: "/images/tab.png",
    features: [
      "DICOM image support",
      "CBCT 3D Viewer",
      "AI pathology detection",
      "Radiation exposure tracking",
      "Digital consent management",
      "Image comparison timeline",
      "Voice-to-text report generation",
      "Integration with imaging devices",
      "Quality assurance checklist",
      "Emergency case prioritization",
    ],
  },
  {
    id: "practice-manager",
    label: "Practice Manager",
    title: "For the Practice Manager",
    image: "/images/practiceM.png",
    features: [
      "Dashboard with clinic performance overview",
      "Monitor appointments and patient statistics",
      "Revenue and financial reports",
      "Staff and user management",
      "Role-based access control",
      "Inventory and stock management",
      "Manage multiple dentists and branches",
      "View treatment and billing analytics",
      "Manage memberships and pricing",
      "Audit logs and activity tracking",
    ],
  },
];

const cardVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: "easeIn" as const } },
};

const imageVariants = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.97, transition: { duration: 0.25, ease: "easeIn" as const } },
};

export default function RolePlatform() {
  const [activeId, setActiveId] = useState<string>("dentist");
  const activeRole = roles.find((r) => r.id === activeId)!;

  return (
    <section
      id="features"
      className="bg-gradient-to-b from-[#1D9B52] via-[#188847] to-[#146D39] py-16 lg:py-20 px-5 md:px-8 lg:px-6 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px]">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[36px] text-white leading-tight">
            A Platform for Every Role
          </h2>
          <p className="mt-3 text-sm md:text-[15px] text-white/80 max-w-[600px] leading-relaxed">
            Dentax adapts to every role in your dental practice ecosystem,
            ensuring everyone works at peak efficiency.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div
            className="flex flex-wrap justify-center gap-1 rounded-full bg-[#1EA659] px-2 py-2"
            role="tablist"
            aria-label="Role navigation"
          >
            {roles.map((role) => (
              <button
                key={role.id}
                role="tab"
                aria-selected={activeId === role.id}
                onClick={() => setActiveId(role.id)}
                className={`relative rounded-full px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-medium text-white transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                  activeId === role.id ? "bg-[#0D5A39]" : "hover:brightness-110"
                }`}
              >
                {role.label}
              </button>
            ))}
          </div>
        </div>

        {/* Role Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full rounded-2xl shadow-2xl"
            style={{
              background: "linear-gradient(to right, #0B3D22, #0F7A44)",
              padding: "clamp(20px, 3.5vw, 48px)",
            }}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

              {/* Left — Features */}
              <div className="w-full lg:w-[40%] flex flex-col">
                <h3 className="text-white text-2xl lg:text-[34px] font-semibold mb-5 leading-tight">
                  {activeRole.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {activeRole.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 size={16} className="text-[#4ADE80] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-sm md:text-[15px] text-white/90 leading-snug">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right — Dashboard Image */}
              <div className="w-full lg:w-[60%] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeRole.image}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-xl"
                  >
                    <Image
                      src={activeRole.image}
                      alt={`${activeRole.title} dashboard`}
                      fill
                      className="object-contain rounded-xl"
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
