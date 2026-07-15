import React from "react";
import {
  UsersRound,
  CalendarDays,
  Receipt,
  Package,
  BarChart3,
  LucideIcon,
} from "lucide-react";

// --------------------
// Custom Tooth Icon
// --------------------
function ToothIcon({
  size = 20,
  color = "#fff",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 3C6 3 4 5 4 8c0 2.2.8 4.1 1.4 5.6L7 20c.2.9.8 1.4 1.5 1.4.8 0 1.4-.5 1.5-1.4l.5-3h2l.5 3c.1.9.7 1.4 1.5 1.4.7 0 1.3-.5 1.5-1.4l1.6-6.4C19.2 12.1 20 10.2 20 8c0-3-2-5-4.5-5-1.7 0-2.6.7-3.5 1.5C11.1 3.7 10.2 3 8.5 3z" />
    </svg>
  );
}

type Feature = {
  icon?: LucideIcon;
  customIcon?: React.ReactNode;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: UsersRound,
    title: "Patient\nManagement",
    description: "Complete patient\nrecords & history",
  },
  {
    icon: CalendarDays,
    title: "Appointment\nManagement",
    description: "Smart scheduling\n& reminders",
  },
  {
    customIcon: <ToothIcon />,
    title: "Dental Chart",
    description: "Interactive charting\n& tooth history",
  },
  {
    icon: Receipt,
    title: "Billing &\nPayments",
    description: "Invoices, payments\n& insurance",
  },
  {
    icon: Package,
    title: "Inventory\nManagement",
    description: "Track stock &\nmanage supplies",
  },
  {
    icon: BarChart3,
    title: "Reports &\nAnalytics",
    description: "Insights to grow your\npractice",
  },
];

export default function WhyDentax() {
  return (
    <section className="bg-white py-10 lg:py-14 border-t border-gray-100 overflow-hidden">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] items-center gap-6 lg:gap-10">
          {/* Left Column */}
          <div className="flex flex-col text-left">
            <h2 className="text-2xl lg:text-[28px] font-bold text-[#111827] leading-tight">
              Why Dentax?
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
              Powerful features designed specifically for modern dental practices
            </p>
          </div>

          {/* Right Column - Green Card */}
          <div className="w-full rounded-[12px] bg-gradient-to-r from-[#0F8F5B] to-[#0A5C3A] px-5 lg:px-8 py-5 lg:py-7 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
              {features.map(({ icon: Icon, customIcon, title, description }) => (
                <div key={title} className="flex items-start gap-2">
                  {/* Icon */}
                  <div className="shrink-0 mt-0.5">
                    {Icon ? (
                      <Icon size={18} strokeWidth={2} className="text-white" />
                    ) : (
                      customIcon
                    )}
                  </div>
                  {/* Text */}
                  <div className="flex flex-col">
                    <h3 className="whitespace-pre-line text-[13px] font-semibold leading-[17px] text-white">
                      {title}
                    </h3>
                    <p className="mt-1 whitespace-pre-line text-[11px] leading-[14px] text-white/75">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}