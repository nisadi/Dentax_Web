"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import RequestDemoModal from "@/components/RequestDemoModal/RequestDemoModal";

const features = [
  "Patient Management",
  "Dental Chart",
  "Treatment Planning",
  "Billing & Payments",
  "AI Assistant",
  "X-rays & Imaging",
  "Lab Management",
  "Mobile App",
];

export default function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section
      id="home"
      className="bg-[#EEF6FF] pt-10 pb-10 overflow-hidden"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-6 flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
        {/* Left Content */}
        <div className="w-full lg:w-[45%] flex flex-col gap-5">
          {/* Heading */}
          <h1
            className="font-extrabold leading-[1.1] text-[32px] sm:text-[42px] md:text-[48px] lg:text-[48px] text-[#111827]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Complete
            <br />
            <span className="text-[#0F8F5B]">Dental Practice</span>
            <br />
            Management Platform
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-[#374151] leading-relaxed">
            Everything your clinic needs in one secure.{" "}
            <span className="text-[#0F8F5B] font-medium">Cloud-based platform.</span>
          </p>

          {/* Features Grid */}
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                <CheckCircle2 size={16} className="text-[#16A34A] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setDemoOpen(true)}
              aria-label="Start Free Trial"
              className="flex h-[48px] sm:h-[52px] items-center justify-center rounded-xl bg-[#0F8F5B] px-6 sm:px-8 text-sm font-semibold text-white transition-colors hover:bg-[#0A7A4C] w-full sm:w-auto"
              style={{ border: "none", cursor: "pointer" }}
            >
              Start Your Trial
            </button>
            <button
              onClick={() => setDemoOpen(true)}
              aria-label="Request a Demo"
              className="flex h-[48px] sm:h-[52px] items-center justify-center rounded-xl border border-[#0F8F5B] px-6 sm:px-8 text-sm font-semibold text-[#0F8F5B] transition-colors hover:bg-[#0F8F5B] hover:text-white w-full sm:w-auto"
              style={{ cursor: "pointer" }}
            >
              Request a Demo
            </button>
          </div>

          {/* Bottom Info */}
          <p className="text-xs md:text-sm text-[#6B7280]">
            No credit card required &nbsp;|&nbsp; Setup in 5 minutes &nbsp;|&nbsp; 24/7 Support
          </p>
        </div>

        {/* Right — Laptop Image */}
        <div className="w-full lg:w-[55%] flex justify-center items-center">
          <div className="relative w-full max-w-[560px] lg:max-w-[720px] aspect-[20/14] animate-float">
            <Image
              src="/images/Lap.png"
              alt="Dentax dashboard on laptop"
              fill
              priority
              className="object-contain"
              sizes="(max-width: 768px) 90vw, (max-width: 1024px) 50vw, 720px"
            />
          </div>
        </div>
      </div>
      <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}
