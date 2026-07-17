"use client";

import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  MessageSquare,
  Mail,
  Phone,
  Building2,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/contactSchema";

// ─── Constants ────────────────────────────────────────────────────────────────

const DEFAULT_SUBJECT = "Requesting a demonstration of the Dentax system";

const DEFAULT_MESSAGE = `Dear Sir/Madam,

I am writing to express my interest in the Dentax Smart Dental Practice Management Software. 

I would like to request a live demonstration of the platform to better understand its features and how it can support our dental practice.

Please contact me at your earliest convenience using the information provided above.

Thank you for your time.
Best Regards,`;

const CONTACT_ITEMS = [
  { icon: Mail,      label: "Email",          value: "info@globalpearlventures.com" },
  { icon: Phone,     label: "Phone",          value: "We'll contact you back"       },
  { icon: Building2, label: "Business Hours", value: "Monday – Friday\n9AM – 6PM"         },
];

// ─── Spinner SVG ─────────────────────────────────────────────────────────────

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  );
}

// ─── Field wrapper ────────────────────────────────────────────────────────────

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label className="text-[14px] font-semibold text-[#374151]">
        {label}
        {required && <span className="text-[#EF4444] ml-[3px]">*</span>}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-[13px] text-[#EF4444] leading-tight">
          <AlertCircle size={12} strokeWidth={2.5} />
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Styled input ─────────────────────────────────────────────────────────────

function TextInput({
  registration,
  placeholder,
  hasError,
  type = "text",
  disabled,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: any;
  placeholder?: string;
  hasError?: boolean;
  type?: string;
  disabled?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      {...registration}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      onFocus={() => setFocused(true)}
      onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
        setFocused(false);
        registration.onBlur?.(e);
      }}
      style={{
        height: 45,
        border: `1px solid ${hasError ? "#EF4444" : focused ? "#16964A" : "#D1D5DB"}`,
        borderRadius: 16,
        padding: "0 16px",
        fontSize: 14,
        color: "#111827",
        background: disabled ? "#F9FAFB" : "#FFFFFF",
        outline: "none",
        width: "100%",
        opacity: disabled ? 0.7 : 1,
        cursor: disabled ? "not-allowed" : "text",
        transition: "border-color 200ms, box-shadow 200ms",
        boxShadow: focused
          ? hasError
            ? "0 0 0 3px rgba(239,68,68,0.12)"
            : "0 0 0 3px rgba(22,150,74,0.15)"
          : "none",
      }}
    />
  );
}

function TextArea({
  registration,
  hasError,
  disabled,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registration: any;
  hasError?: boolean;
  disabled?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <textarea
      {...registration}
      disabled={disabled}
      onFocus={() => setFocused(true)}
      onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
        setFocused(false);
        registration.onBlur?.(e);
      }}
      style={{
        border: `1px solid ${hasError ? "#EF4444" : focused ? "#16964A" : "#D1D5DB"}`,
        borderRadius: 16,
        padding: 14,
        fontSize: 13,
        color: "#111827",
        background: disabled ? "#F9FAFB" : "#FFFFFF",
        outline: "none",
        width: "100%",
        minHeight: 220,
        resize: "vertical",
        lineHeight: 1.7,
        opacity: disabled ? 0.7 : 1,
        cursor: disabled ? "not-allowed" : "text",
        transition: "border-color 200ms, box-shadow 200ms",
        boxShadow: focused
          ? hasError
            ? "0 0 0 3px rgba(239,68,68,0.12)"
            : "0 0 0 3px rgba(22,150,74,0.15)"
          : "none",
        fontFamily: "inherit",
      }}
    />
  );
}

// ─── Toast ────────────────────────────────────────────────────────────────────

function ErrorToast({ message, onDismiss }: { message: string; onDismiss: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.25 }}
      className="flex items-start gap-3 rounded-[14px] p-4"
      style={{
        background: "#FEF2F2",
        border: "1px solid #FECACA",
        marginBottom: 20,
      }}
    >
      <AlertCircle size={20} color="#EF4444" strokeWidth={2} className="shrink-0 mt-[1px]" />
      <div className="flex-1">
        <p style={{ fontSize: 14, fontWeight: 600, color: "#991B1B", marginBottom: 2 }}>
          Unable to send your request.
        </p>
        <p style={{ fontSize: 13, color: "#B91C1C", lineHeight: 1.5 }}>{message}</p>
      </div>
      <button
        onClick={onDismiss}
        aria-label="Dismiss error"
        style={{ background: "none", border: "none", cursor: "pointer", color: "#EF4444", padding: 0 }}
      >
        <X size={16} />
      </button>
    </motion.div>
  );
}

// ─── Success screen ───────────────────────────────────────────────────────────

function SuccessScreen({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex flex-col items-center justify-center text-center gap-6 py-16 px-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
        className="flex items-center justify-center rounded-full"
        style={{
          width: 96,
          height: 96,
          background: "linear-gradient(135deg,#1B9B52,#0F6A39)",
          boxShadow: "0 16px 40px rgba(22,150,74,0.30)",
        }}
      >
        <CheckCircle2 size={48} color="#FFFFFF" strokeWidth={2.5} />
      </motion.div>

      <div className="flex flex-col gap-3 max-w-[440px]">
        <h2 style={{ fontSize: 28, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
          Request Sent Successfully!
        </h2>
        <p style={{ fontSize: 17, color: "#6B7280", lineHeight: 1.7 }}>
          Thank you for contacting Dentax.
          <br />
          Our team has received your request and will get back to you shortly to
          schedule a live demonstration.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
        <button
          onClick={onClose}
          className="flex items-center justify-center font-semibold text-[15px] text-[#374151]"
          style={{
            height: 52,
            paddingLeft: 28,
            paddingRight: 28,
            borderRadius: 14,
            border: "1px solid #D1D5DB",
            background: "#FFFFFF",
            cursor: "pointer",
          }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F9FAFB"; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF"; }}
        >
          Return to Website
        </button>
        <button
          onClick={onClose}
          className="flex items-center justify-center font-semibold text-[15px] text-white"
          style={{
            height: 52,
            paddingLeft: 28,
            paddingRight: 28,
            borderRadius: 14,
            background: "#16964A",
            boxShadow: "0 10px 25px rgba(22,150,74,0.30)",
            border: "none",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </motion.div>
  );
}

// ─── Main modal ───────────────────────────────────────────────────────────────

export default function RequestDemoModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [submitted, setSubmitted]     = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const modalRef    = useRef<HTMLDivElement>(null);
  const firstRef    = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName:     "",
      phone:        "",
      organization: "",
      subject:      DEFAULT_SUBJECT,
      message:      DEFAULT_MESSAGE,
    },
  });

  // ── Reset on open ──
  useEffect(() => {
    if (open) {
      reset({
        fullName:     "",
        phone:        "",
        organization: "",
        subject:      DEFAULT_SUBJECT,
        message:      DEFAULT_MESSAGE,
      });
      setSubmitted(false);
      setServerError(null);
      setTimeout(() => firstRef.current?.focus(), 320);
    }
  }, [open, reset]);

  // ── Lock body scroll ──
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // ── ESC to close ──
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, onClose]);

  // ── Focus trap ──
  useEffect(() => {
    if (!open) return;
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll<HTMLElement>(
      'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    const trap  = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    modal.addEventListener("keydown", trap);
    return () => modal.removeEventListener("keydown", trap);
  }, [open]);

  // ── Form submit ──
  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const res = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });

      if (res.status === 429) {
        setServerError("Too many requests. Please wait a few minutes and try again.");
        return;
      }

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        setServerError(
          (json as { error?: string }).error ??
          "Failed to send your request. Please try again later."
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setServerError(
        "A network error occurred. Please check your connection and try again."
      );
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* ── Backdrop ── */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] backdrop-blur-sm"
            style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
            onClick={onClose}
            aria-hidden="true"
          />

          {/* ── Modal container ── */}
          <div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Request Demo"
          >
            <motion.div
              key="modal"
              ref={modalRef}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative flex flex-col bg-white overflow-hidden w-full"
              style={{
                maxWidth: 1000,
                maxHeight: "100vh",
                borderRadius: 28,
                boxShadow: "0 30px 80px rgba(0,0,0,0.18)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <SuccessScreen onClose={onClose} />
              ) : (
                <>
                  {/* ── Header ── */}
                  <div
                    className="flex items-start justify-between shrink-0"
                    style={{ padding: "28px 32px 24px", borderBottom: "1px solid #E5E7EB" }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="flex items-center justify-center shrink-0"
                        style={{ width: 48, height: 48, background: "#EEF9F3", borderRadius: 14 }}
                      >
                        <MessageSquare size={24} color="#16964A" strokeWidth={2} />
                      </div>
                      <div>
                        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#111827", lineHeight: 1.2 }}>
                          Get in Touch
                        </h2>
                        <p
                          className="hidden sm:block"
                          style={{ fontSize: 12, color: "#6B7280", marginTop: 3 }}
                        >
                          We&apos;d love to hear from you! Fill out the form below and
                          we&apos;ll get back to you as soon as possible.
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={onClose}
                      aria-label="Close modal"
                      className="flex items-center justify-center shrink-0"
                      style={{
                        width: 40, height: 40, borderRadius: 10,
                        border: "none", background: "transparent",
                        cursor: "pointer", color: "#6B7280",
                        transition: "background 150ms",
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#F3F4F6"; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* ── Scrollable body ── */}
                  <div className="overflow-y-auto flex-1" style={{ padding: "16px 18px 18px" }}>

                    {/* Error toast */}
                    <AnimatePresence>
                      {serverError && (
                        <ErrorToast
                          message={serverError}
                          onDismiss={() => setServerError(null)}
                        />
                      )}
                    </AnimatePresence>

                    <div
                      className="grid grid-cols-1 lg:grid-cols-[360px_1fr]"
                      style={{ gap: 18, alignItems: "start" }}
                    >
                      {/* ── Contact card ── */}
                      <div
                        className="lg:sticky lg:top-0 rounded-[24px] flex flex-col gap-8"
                        style={{
                          background: "linear-gradient(160deg,#ffffff,#0EA54A)",
                          padding: 32,
                          color: "#A8FFBB",
                        }}
                      >
                        <h3 style={{ fontSize: 22, fontWeight: 700, color: "#0f6a39", lineHeight: 1.2 }}>
                          Contact Information
                        </h3>

                        <div className="flex flex-col gap-4">
                          {CONTACT_ITEMS.map(({ icon: Icon, label, value }) => (
                            <motion.div
                              key={label}
                              whileHover={{ y: -2 }}
                              transition={{ duration: 0.2 }}
                              className="flex items-start gap-4"
                              style={{
                                background: "rgba(255,255,255,0.10)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: 18,
                                padding: 20,
                              }}
                            >
                              <div
                                className="flex items-center justify-center shrink-0"
                                style={{
                                  width: 40, height: 40,
                                  background: "#E5F5EF",
                                  borderRadius: 12,
                                }}
                              >
                                <Icon size={18} color="#0f6a39" strokeWidth={2} />
                              </div>
                              <div>
                                <p style={{
                                  fontSize: 12, fontWeight: 700,
                                  color: "#000000",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.06em",
                                  marginBottom: 4,
                                }}>
                                  {label}
                                </p>
                                {value.split("\n").map((line, i) => (
                                  <p key={i} style={{ fontSize: 14, fontWeight: 400, color: "#000000", lineHeight: 1.5 }}>
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* ── Form ── */}
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        className="flex flex-col gap-5"
                        style={{ cursor: isSubmitting ? "wait" : "auto" }}
                      >
                        {/* Row 1 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 24 }}>
                          <Field label="Full Name" required error={errors.fullName?.message}>
                            <TextInput
                              registration={{ ...register("fullName"), ref: (el: HTMLInputElement) => {
                                register("fullName").ref(el);
                                (firstRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
                              }}}
                              placeholder="Dr. John Silva"
                              hasError={!!errors.fullName}
                              disabled={isSubmitting}
                            />
                          </Field>

                          <Field label="Contact Number" error={errors.phone?.message}>
                            <TextInput
                              registration={register("phone")}
                              placeholder="+94 77 000 0000"
                              type="tel"
                              hasError={!!errors.phone}
                              disabled={isSubmitting}
                            />
                          </Field>
                        </div>

                        {/* Row 2 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: 20 }}>
                          <Field label="Organization">
                            <TextInput
                              registration={register("organization")}
                              placeholder="Smile Dental Clinic"
                              disabled={isSubmitting}
                            />
                          </Field>

                          <Field label="Subject" required error={errors.subject?.message}>
                            <TextInput
                              registration={register("subject")}
                              placeholder="Subject"
                              hasError={!!errors.subject}
                              disabled={isSubmitting}
                            />
                          </Field>
                        </div>

                        {/* Message */}
                        <Field label="Message" required error={errors.message?.message}>
                          <TextArea
                            registration={register("message")}
                            hasError={!!errors.message}
                            disabled={isSubmitting}
                          />
                        </Field>

                        {/* Buttons */}
                        <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3 pt-2">
                          <button
                            type="button"
                            onClick={onClose}
                            disabled={isSubmitting}
                            className="flex items-center justify-center font-semibold text-[15px] text-[#374151]"
                            style={{
                              height: 50,
                              paddingLeft: 28, paddingRight: 28,
                              borderRadius: 14,
                              border: "1px solid #D1D5DB",
                              background: "#FFFFFF",
                              cursor: isSubmitting ? "not-allowed" : "pointer",
                              opacity: isSubmitting ? 0.6 : 1,
                              transition: "background 150ms",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) (e.currentTarget as HTMLButtonElement).style.background = "#F9FAFB";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLButtonElement).style.background = "#FFFFFF";
                            }}
                          >
                            Cancel
                          </button>

                          <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            whileHover={isSubmitting ? {} : { scale: 1.02, y: -1 }}
                            transition={{ duration: 0.2 }}
                            className="flex items-center justify-center gap-2 font-semibold text-[15px] text-white"
                            style={{
                              height: 50,
                              paddingLeft: 32, paddingRight: 32,
                              borderRadius: 14,
                              background: isSubmitting ? "#6B9E7A" : "#16964A",
                              boxShadow: "0 10px 25px rgba(22,150,74,0.30)",
                              border: "none",
                              cursor: isSubmitting ? "not-allowed" : "pointer",
                              opacity: isSubmitting ? 0.85 : 1,
                              transition: "background 200ms, opacity 200ms",
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting)
                                (e.currentTarget as HTMLButtonElement).style.background = "#148347";
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting)
                                (e.currentTarget as HTMLButtonElement).style.background = "#16964A";
                            }}
                          >
                            {isSubmitting ? (
                              <><Spinner /> Sending…</>
                            ) : (
                              <><Send size={17} strokeWidth={2} /> Send Message</>
                            )}
                          </motion.button>
                        </div>
                      </form>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
