"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Mail, Loader2, Check } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QUICK_QUOTE, CONTACT } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function QuickQuoteForm() {
  const prefersReduced = useReducedMotion();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState(QUICK_QUOTE.businessTypes[0]);
  const [projectNeed, setProjectNeed] = useState(QUICK_QUOTE.projectNeeds[0]);
  const [budgetRange, setBudgetRange] = useState(QUICK_QUOTE.budgetRanges[0]);
  const [timeline, setTimeline] = useState(QUICK_QUOTE.timelines[0]);
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  function validate() {
    const errs: Record<string, string> = {};
    if (!name.trim()) {
      errs.name = "Please enter your name.";
    }
    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!cleanPhone) {
      errs.phone = "Please enter your phone number.";
    } else if (cleanPhone.length < 10) {
      errs.phone = "Please enter a valid 10-digit phone number.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function getSummaryText() {
    return [
      `Hi AKA AI Studio! Here are my project details:`,
      `Name: ${name.trim()}`,
      `Phone: ${phone.trim()}`,
      `Business type: ${businessType}`,
      `Looking for: ${projectNeed}`,
      `Budget: ${budgetRange}`,
      `Timeline: ${timeline}`,
      message.trim() ? `Note: ${message.trim()}` : "",
    ]
      .filter(Boolean)
      .join("\n");
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const summary = getSummaryText();
    const waLink = CONTACT.whatsappHrefWithMessage(summary);

    setTimeout(() => {
      window.open(waLink, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 450);
  }

  const mailtoHref = `mailto:${CONTACT.email}?subject=${encodeURIComponent(
    `Project Inquiry from ${name || "Client"}`
  )}&body=${encodeURIComponent(getSummaryText())}`;

  return (
    <section
      id="quote"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow={QUICK_QUOTE.eyebrow}
          title={QUICK_QUOTE.heading}
          description={QUICK_QUOTE.intro}
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-2xl">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card p-6 sm:p-9 shadow-xs"
            >
              <div className="space-y-6">
                {/* Name field with floating label */}
                <div className="relative">
                  <input
                    type="text"
                    id="quote-name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                    }}
                    placeholder=" "
                    className="peer block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3.5 pb-2 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 placeholder-transparent focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                  />
                  <label
                    htmlFor="quote-name"
                    className="pointer-events-none absolute left-3.5 top-1.5 origin-[0] -translate-y-0 scale-75 text-xs text-[#4A5370] transition-all duration-200 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-xs peer-focus:text-[#B84B23]"
                  >
                    Your name *
                  </label>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-[#B84B23]">{errors.name}</p>
                  )}
                </div>

                {/* Phone field with floating label */}
                <div className="relative">
                  <input
                    type="tel"
                    id="quote-phone"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                    }}
                    placeholder=" "
                    className="peer block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3.5 pb-2 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 placeholder-transparent focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                  />
                  <label
                    htmlFor="quote-phone"
                    className="pointer-events-none absolute left-3.5 top-1.5 origin-[0] -translate-y-0 scale-75 text-xs text-[#4A5370] transition-all duration-200 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-xs peer-focus:text-[#B84B23]"
                  >
                    Phone number *
                  </label>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-[#B84B23]">{errors.phone}</p>
                  )}
                </div>

                {/* Grid for Selects */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="quote-business"
                      className="block text-xs font-medium text-[#4A5370]"
                    >
                      Business type
                    </label>
                    <select
                      id="quote-business"
                      value={businessType}
                      onChange={(e) => setBusinessType(e.target.value)}
                      className="mt-1.5 block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3 py-2.5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    >
                      {QUICK_QUOTE.businessTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-need"
                      className="block text-xs font-medium text-[#4A5370]"
                    >
                      What do you need?
                    </label>
                    <select
                      id="quote-need"
                      value={projectNeed}
                      onChange={(e) => setProjectNeed(e.target.value)}
                      className="mt-1.5 block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3 py-2.5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    >
                      {QUICK_QUOTE.projectNeeds.map((need) => (
                        <option key={need} value={need}>
                          {need}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-budget"
                      className="block text-xs font-medium text-[#4A5370]"
                    >
                      Budget range
                    </label>
                    <select
                      id="quote-budget"
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(e.target.value)}
                      className="mt-1.5 block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3 py-2.5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    >
                      {QUICK_QUOTE.budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="quote-timeline"
                      className="block text-xs font-medium text-[#4A5370]"
                    >
                      Timeline
                    </label>
                    <select
                      id="quote-timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="mt-1.5 block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3 py-2.5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    >
                      {QUICK_QUOTE.timelines.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message field with floating label */}
                <div className="relative">
                  <textarea
                    id="quote-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className="peer block w-full rounded-[8px] border border-[#E2DDD5] bg-white px-3.5 pb-2 pt-5 text-base sm:text-sm text-[#1F2A44] transition-all duration-200 placeholder-transparent focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                  />
                  <label
                    htmlFor="quote-message"
                    className="pointer-events-none absolute left-3.5 top-1.5 origin-[0] -translate-y-0 scale-75 text-xs text-[#4A5370] transition-all duration-200 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:text-sm peer-focus:top-1.5 peer-focus:-translate-y-0 peer-focus:scale-75 peer-focus:text-xs peer-focus:text-[#B84B23]"
                  >
                    Short message (optional)
                  </label>
                </div>

                {/* Submit button with loading and success state */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`group relative flex w-full items-center justify-center gap-2 rounded-[8px] px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                      isSuccess
                        ? "bg-[#0B3D2E] text-white"
                        : "bg-[#25D366] text-[#0B3D2E] hover:bg-[#1DA851] hover:text-white"
                    } disabled:opacity-90 cursor-pointer`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : isSuccess ? (
                      <>
                        <motion.svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 stroke-current"
                          fill="none"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <motion.polyline
                            points="20 6 9 17 4 12"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.4, ease: TRANSITION_EASE }}
                          />
                        </motion.svg>
                        <span>Thanks. We will reply soon.</span>
                      </>
                    ) : (
                      <>
                        <MessageCircle className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                        <span>Send details on WhatsApp</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Prefer email fallback link */}
                <div className="text-center pt-1">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4A5370] transition-colors hover:text-[#B84B23]"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>Prefer email? Send by email instead</span>
                  </a>
                </div>

                {/* Consent line */}
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
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
