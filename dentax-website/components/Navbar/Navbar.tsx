"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import RequestDemoModal from "@/components/RequestDemoModal/RequestDemoModal";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(`#${id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <header
      className="sticky top-0 z-50 bg-white w-full"
      style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.05)" }}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-6">
        {/* Logo */}
        <a href="#home" aria-label="Dentax home">
          <Image src="/dentax.png" alt="Dentax" height={15} width={55} priority />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Main navigation">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setActive(href)}
              aria-label={label}
              className={`text-sm font-medium transition-colors ${
                active === href
                  ? "text-[#0F8F5B] font-semibold border-b-2 border-[#0F8F5B] pb-0.5"
                  : "text-[#1F2937] hover:text-[#0F8F5B]"
              }`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://wa.me/94778673863"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex items-center gap-2"
          >
            <FaWhatsapp size={22} color="#25D366" />
            <span className="text-sm font-semibold text-[#111827]">+94 77 867 3863</span>
          </a>

          <a
            href="#login"
            aria-label="Login"
            className="rounded-full border border-[#0F8F5B] px-5 py-2 text-sm font-medium text-[#0F8F5B] transition-colors hover:bg-[#0F8F5B] hover:text-white"
          >
            Login
          </a>

          <button
            onClick={() => setDemoOpen(true)}
            aria-label="Request Demo"
            className="rounded-full bg-[#0F8F5B] px-7 text-sm font-medium text-white transition-colors hover:bg-[#0A7A4C]"
            style={{ paddingTop: 14, paddingBottom: 14, border: "none", cursor: "pointer" }}
          >
            Request Demo
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#1F2937]"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 pb-6 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => { setActive(href); setMenuOpen(false); }}
              className={`text-sm font-medium ${active === href ? "text-[#0F8F5B] font-semibold" : "text-[#1F2937]"}`}
            >
              {label}
            </a>
          ))}
          <a href="https://wa.me/94778673863" className="flex items-center gap-2 text-sm font-semibold text-[#111827]">
            <FaWhatsapp size={20} color="#25D366" />
            +94 77 867 3863
          </a>
          <a href="#login" className="w-full rounded-full border border-[#0F8F5B] py-2 text-center text-sm text-[#0F8F5B]">Login</a>
          <button onClick={() => { setDemoOpen(true); setMenuOpen(false); }} className="w-full rounded-full bg-[#0F8F5B] py-2 text-center text-sm text-white" style={{ border: "none", cursor: "pointer" }}>Request Demo</button>
        </div>
      )}
    </header>

    <RequestDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
