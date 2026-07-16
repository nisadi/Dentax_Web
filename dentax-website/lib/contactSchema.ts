import { z } from "zod";

const PHONE_RE = /^[+]?[\d\s\-().]{7,20}$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required.")
    .min(3, "Full name must be at least 3 characters."),

  phone: z
    .string()
    .optional()
    .refine(
      (v) => !v || v.trim() === "" || PHONE_RE.test(v.trim()),
      "Please enter a valid phone number."
    ),

  organization: z.string().optional(),

  subject: z.string().min(1, "Subject is required."),

  message: z
    .string()
    .min(1, "Message is required.")
    .min(20, "Message must be at least 20 characters."),
});

export type ContactFormData = z.infer<typeof contactSchema>;
