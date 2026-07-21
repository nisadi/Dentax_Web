"use client";

import { motion } from "framer-motion";
import {
  Building2,
  CheckCircle,
  Sparkles,
  Languages,
  ArrowRight,
  User,
  ShieldCheck,
} from "lucide-react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const featureColumns = [
  {
    id: "column1",
    groups: [
      {
        title: "Practice Management",
        color: "#0E8B45",
        features: [
          "Patient Management",
          "Appointment Scheduling",
          "Treatment Planning",
          "DICOM Viewer & Medical Imaging",
          "Billing & Invoicing",
          "Payments & Insurance",
        ],
      },
      {
        title: "Clinical Tools",
        color: "#0E8B45",
        features: [
          "Dental Charting",
          "Treatment History",
          "Digital Prescriptions",
          "Clinical Notes",
        ],
      },
    ],
  },
  {
    id: "column2",
    groups: [
      {
        title: "Operations",
        color: "#0E8B45",
        features: [
          "Inventory Management",
          "Staff Management",
          "Reminders & Notifications",
          "Lab Management",
          "Data Backup & Security",
          "Multi-Location Support",
          "HR & Payroll Management",
        ],
      },
      {
        title: "AI Features",
        color: "#9333EA",
        icon: Sparkles,
        features: [
          "AI Assistant (Smart Chat)",
          "AI Treatment Suggestions",
          "Voice-to-Text Notes",
          "Smart Appointment Reminders",
          "Automated Patient Follow-ups",
        ],
      },
    ],
  },
  {
    id: "column3",
    groups: [
      {
        title: "Communication",
        color: "#0E8B45",
        features: [
          "Email & SMS Notifications",
          "Patient Portal",
          "Document Management",
          "WhatsApp Support",
          "Online Payments",
        ],
      },
      {
        title: "Multi-language Support",
        color: "#2563EB",
        icon: Languages,
        features: [
          "English",
          "සිංහල (Sinhala)",
          "தமிழ் (Tamil)",
          "Multi-language UI & Reports",
        ],
      },
    ],
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function EnterpriseHeader() {
  return (
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-8 md:p-10 rounded-t-2xl"
      style={{
        background: "linear-gradient(135deg, #0E8B45 0%, #0A5F31 100%)",
        minHeight: 160,
      }}
    >
      {/* Left side */}
      <div className="flex items-start gap-4">
        <div
          className="flex items-center justify-center shrink-0 rounded-xl"
          style={{
            width: 56,
            height: 56,
            background: "rgba(255,255,255,0.15)",
          }}
        >
          <Building2 size={28} color="#FFFFFF" strokeWidth={2} />
        </div>
        <div>
          <h3
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Enterprise
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.85)",
              marginTop: 2,
            }}
          >
            All in one solution for modern dental practices of any size
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <CheckCircle size={14} color="#FFFFFF" strokeWidth={2.5} />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                All Features Included
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <User size={14} color="#FFFFFF" strokeWidth={2.5} />
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#FFFFFF",
                }}
              >
                Unlimited Users
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Badge */}
      <div
        className="mt-4 sm:mt-0 flex items-center px-4 py-2 rounded-full"
        style={{
          background: "rgba(255,255,255,0.15)",
          border: "1px solid rgba(255,255,255,0.2)",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "0.06em",
          }}
        >
          ✔ ALL FEATURES INCLUDED
        </span>
      </div>
    </div>
  );
}

function PriceSummary() {
  return (
    <div className="flex flex-col gap-4">
      {/* Monthly */}
      <div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0E8B45",
            letterSpacing: "0.06em",
          }}
        >
          MONTHLY
        </span>
        <div className="flex items-end gap-2 mt-1">
          <span
            style={{
              fontSize: 48,
              fontWeight: 700,
              color: "#0E8B45",
              lineHeight: 1,
            }}
          >
            LKR 9,900
          </span>
          <span
            style={{
              fontSize: 14,
              color: "#6B7280",
              marginBottom: 2,
            }}
          >
            /month
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3">
        <div
          style={{
            flex: 1,
            height: 1,
            background: "#E5E7EB",
          }}
        />
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#6B7280",
          }}
        >
          OR
        </span>
        <div
          style={{
            flex: 1,
            height: 1,
            background: "#E5E7EB",
          }}
        />
      </div>

      {/* Annual */}
      <div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: "#0E8B45",
            letterSpacing: "0.06em",
          }}
        >
          ANNUAL (SAVE 15%)
        </span>
        <div className="flex items-end gap-3 mt-1">
          <span
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#0E8B45",
              lineHeight: 1,
            }}
          >
            LKR 100,980
          </span>
          <span
            style={{
              fontSize: 18,
              fontWeight: 400,
              color: "#9CA3AF",
              textDecoration: "line-through",
              marginBottom: 1,
            }}
          >
            LKR 118,800
          </span>
        </div>
      </div>

      {/* Savings badge */}
      <div
        className="flex items-center gap-2 px-4 py-2.5 rounded-full"
        style={{
          border: "1px solid #0E8B45",
          background: "rgba(14, 139, 69, 0.06)",
        }}
      >
        <ShieldCheck size={16} color="#0E8B45" strokeWidth={2} />
        <span
          style={{
            fontSize: 13,
            fontWeight: 600,
            color: "#0E8B45",
          }}
        >
          Save LKR 17,820 with annual billing
        </span>
      </div>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center gap-2 w-full h-14 rounded-xl font-semibold text-white"
        style={{
          background: "#0E8B45",
          fontSize: 16,
          marginTop: 8,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#0A5F31";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = "#0E8B45";
        }}
      >
        Get Started Now
        <ArrowRight size={18} strokeWidth={2.5} />
      </motion.button>
    </div>
  );
}

function FeatureGroup({
  group,
}: {
  group: {
    title: string;
    color: string;
    icon?: React.ElementType;
    features: string[];
  };
}) {
  const Icon = group.icon;

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        {Icon && <Icon size={16} color={group.color} strokeWidth={2} />}
        <h4
          style={{
            fontSize: 16,
            fontWeight: 700,
            color: group.color,
          }}
        >
          {group.title}
        </h4>
      </div>
      <ul className="flex flex-col gap-2.5">
        {group.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5">
            <CheckCircle
              size={16}
              color={group.color}
              strokeWidth={2}
              className="shrink-0 mt-0.5"
            />
            <span
              style={{
                fontSize: 14,
                color: "#374151",
                lineHeight: 1.5,
              }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FeatureColumn({
  column,
  index,
}: {
  column: (typeof featureColumns)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut" as const,
      }}
      className="flex flex-col gap-6"
    >
      {column.groups.map((group) => (
        <FeatureGroup key={group.title} group={group} />
      ))}
    </motion.div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="py-16 px-4 md:px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #F8FBFC 0%, #FFFFFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1400px]">
        {/* ── Heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="text-center mb-12"
        >
          <h2
            style={{
              fontSize: 42,
              fontWeight: 700,
              color: "#0A5F31",
              lineHeight: 1.2,
              marginBottom: 12,
            }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6B7280",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            One complete plan with everything your dental practice needs
            to manage, grow, and deliver exceptional care.
          </p>
        </motion.div>

        {/* ── Pricing Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" as const }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          style={{
            border: "1px solid #E5E7EB",
          }}
        >
          {/* Enterprise Header */}
          <EnterpriseHeader />

          {/* Main Content */}
          <div className="p-8 md:p-10 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-12">
              {/* Left - Pricing */}
              <div>
                <PriceSummary />
              </div>

              {/* Right - Features */}
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                style={{
                  borderLeft: "1px solid #E5E7EB",
                  paddingLeft: 24,
                }}
              >
                {featureColumns.map((column, index) => (
                  <FeatureColumn
                    key={column.id}
                    column={column}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}