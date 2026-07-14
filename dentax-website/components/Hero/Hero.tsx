import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

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
  return (
    <section
      id="home"
      className="bg-[#EEF6FF] pt-10 pb-15"
    >
      <div className="mx-auto max-w-[1440px] px-6 flex flex-col lg:flex-row items-center gap-5">
        {/* Left Content */}
        <div className="flex-1 lg:w-[45%] flex flex-col gap-5">
          {/* Heading */}
          <h1
            className="font-extrabold leading-[1.1] text-[35px] md:text-[56px] lg:text-[48px] text-[#111827]"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            The Complete
            <br />
            <span className="text-[#0F8F5B]">Dental Practice</span>
            <br />
            Management Platform
          </h1>

          {/* Subtitle */}
          <p className="text-[20px] md:text-[20px] text-[#374151] leading-relaxed">
            Everything your clinic needs in one secure.{" "}
            <span className="text-[#0F8F5B] font-medium">Cloud-based platform.</span>
          </p>

          {/* Features Grid */}
          <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-sm text-[#374151]">
                <CheckCircle2 size={18} className="text-[#16A34A] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href="#contact"
              aria-label="Start Free Trial"
              className="flex h-[52px] items-center justify-center rounded-xl bg-[#0F8F5B] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#0A7A4C] sm:w-auto w-full"
            >
              Start Free Trial
            </a>
            <a
              href="#contact"
              aria-label="Request a Demo"
              className="flex h-[52px] items-center justify-center rounded-xl border border-[#0F8F5B] px-8 text-sm font-semibold text-[#0F8F5B] transition-colors hover:bg-[#0F8F5B] hover:text-white sm:w-auto w-full"
            >
              Request a Demo
            </a>
          </div>

          {/* Bottom Info */}
          <p className="text-[14px] text-[#6B7280]">
            No credit card required &nbsp;|&nbsp; Setup in 5 minutes &nbsp;|&nbsp; 24/7 Support
          </p>
        </div>

        {/* Right — Laptop Image */}
        <div className="lg:w-[55%] w-full flex justify-center items-center">
          <div
            className="relative w-full max-w-[720px] aspect-[20/14] animate-float"
          >
            <Image
              src="/images/Lap.png"
              alt="Dentax dashboard on laptop"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
