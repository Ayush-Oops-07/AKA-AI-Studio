"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { CONTACT } from "@/data/content";
import { formShake } from "@/lib/motion";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const prefersReduced = useReducedMotion();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setHasError(false);
    setErrorMessage("");

    if (!name.trim() || !phone.trim() || !message.trim()) {
      setHasError(true);
      setErrorMessage("Please fill in your name, phone number, and message.");
      return;
    }

    setIsSubmitting(true);

    const lines = [
      `Hi AKA AI Studio, I am ${name}.`,
      `Phone: ${phone}.`,
      businessType ? `Business: ${businessType}.` : "",
      message,
    ]
      .filter(Boolean)
      .join(" ");

    const waLink = CONTACT.whatsappHrefWithMessage(lines);

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      // Open WhatsApp after brief confirmation
      setTimeout(() => {
        window.open(waLink, "_blank", "noopener,noreferrer");
      }, 1000);
    }, 600);
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={prefersReduced ? {} : formShake}
      animate={hasError ? "shake" : undefined}
      className="card space-y-5 p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Floating label: Name */}
        <div className="relative">
          <input
            id="contact-name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (hasError) setHasError(false);
            }}
            required
            placeholder=" "
            className="peer w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 pb-2.5 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
          />
          <label
            htmlFor="contact-name"
            className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold text-[#4A5370] transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#B84B23]"
          >
            Your full name
          </label>
        </div>

        {/* Floating label: Phone */}
        <div className="relative">
          <input
            id="contact-phone"
            type="tel"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (hasError) setHasError(false);
            }}
            required
            placeholder=" "
            className="peer w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 pb-2.5 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
          />
          <label
            htmlFor="contact-phone"
            className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold text-[#4A5370] transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#B84B23]"
          >
            Phone number
          </label>
        </div>
      </div>

      {/* Floating select: Business type */}
      <div className="relative">
        <select
          id="contact-business"
          value={businessType}
          onChange={(e) => setBusinessType(e.target.value)}
          className="peer w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 pb-2.5 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
        >
          <option value="">Select your business type (optional)</option>
          <option value="School or College">School or College</option>
          <option value="Hotel or Banquet Hall">Hotel or Banquet Hall</option>
          <option value="Shop or Retail Store">Shop or Retail Store</option>
          <option value="Supplier or Distributor">Supplier or Distributor</option>
          <option value="Restaurant or Cafe">Restaurant or Cafe</option>
          <option value="Clinic or Hospital">Clinic or Hospital</option>
          <option value="Other">Other</option>
        </select>
        <label
          htmlFor="contact-business"
          className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold text-[#4A5370]"
        >
          Business type
        </label>
      </div>

      {/* Floating label: Message */}
      <div className="relative">
        <textarea
          id="contact-message"
          rows={4}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (hasError) setHasError(false);
          }}
          required
          placeholder=" "
          className="peer w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 pb-2.5 pt-6 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
        />
        <label
          htmlFor="contact-message"
          className="pointer-events-none absolute left-4 top-2 text-[11px] font-semibold text-[#4A5370] transition-all duration-200 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-sm peer-placeholder-shown:font-normal peer-focus:top-2 peer-focus:text-[11px] peer-focus:font-semibold peer-focus:text-[#B84B23]"
        >
          What are you looking to build?
        </label>
      </div>

      {/* Error notification */}
      {hasError && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-semibold text-red-600"
        >
          {errorMessage}
        </motion.p>
      )}

      {/* Submit button: morphs into green success state with drawn checkmark */}
      <button
        type="submit"
        disabled={isSubmitting || success}
        className={`btn w-full transition-all duration-300 ${
          success
            ? "bg-[#25D366] text-white hover:bg-[#1DA851]"
            : "btn-primary"
        }`}
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Sending...</span>
          </span>
        ) : success ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-5 w-5 stroke-white"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth={2.5}
            >
              <motion.path
                d="M5 13l4 4L19 7"
                initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            </svg>
            <span>Message sent. We will reply soon.</span>
          </span>
        ) : (
          <span>Send Message</span>
        )}
      </button>

      <p className="text-center text-xs text-[#4A5370]">
        We reply within one business day on WhatsApp, phone, or email.
      </p>

      <p className="text-center text-xs text-[#6B7280]">
        By sending this, you agree to our{" "}
        <Link
          href="/privacy"
          className="text-[#B84B23] underline underline-offset-2 hover:text-[#A8431F]"
        >
          Privacy Policy
        </Link>
        .
      </p>
    </motion.form>
  );
}
