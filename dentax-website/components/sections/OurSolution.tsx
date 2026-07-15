"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";

export default function OurSolution() {
  return (
    <section
      id="solutions"
      className="py-[90px] px-6 lg:px-8"
      style={{
        background: "linear-gradient(180deg, #1B9B52 0%, #188848 45%, #0F5D33 100%)",
      }}
    >
      <div className="mx-auto max-w-[1440px] flex flex-col items-center gap-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="flex flex-col items-center text-center gap-4"
        >
          <h2 className="font-bold text-[40px] text-white leading-tight">
            Our Solution
          </h2>
          <p className="text-[16px] text-white/85 max-w-[650px] leading-relaxed">
            See how Dentax transforms modern dental practice management with one
            integrated platform.
          </p>
        </motion.div>

        {/* Video card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" as const }}
          whileHover={{ y: -4, transition: { duration: 0.25 } }}
          className="relative w-full max-w-[1050px]"
        >
          {/* Floating badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 hidden sm:flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg"
            style={{ top: 24, right: -20 }}
          >
            <PlayCircle size={18} className="text-[#16A34A]" />
            <span className="text-[13px] font-semibold text-[#111827] whitespace-nowrap">
              Live Product Demo
            </span>
          </motion.div>

          {/* White card */}
          <div className="bg-white rounded-[20px] shadow-2xl p-[10px]">
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/HfSFVlM6voU"
                title="Dentax Product Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full rounded-2xl"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
