"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CTA, CONTACT } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function FinalCTA() {
  const prefersReduced = useReducedMotion();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    const lines = [
      `Hi AKA AI Studio, I am ${name || "someone"}.`,
      phone ? `My number: ${phone}.` : "",
      businessType ? `Business type: ${businessType}.` : "",
      message || "I would like to discuss a project.",
    ]
      .filter(Boolean)
      .join(" ");

    const waLink = CONTACT.whatsappHrefWithMessage(lines);

    setTimeout(() => {
      window.open(waLink, "_blank", "noopener,noreferrer");
      setIsSubmitting(false);
      setSent(true);
    }, 400);
  }

  return (
    <section
      id="contact-cta"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      {/* Background rhythm layer fading in on view (500ms) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[#F6EDE0]"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: TRANSITION_EASE }}
      />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Get In Touch"
          title={CTA.headline}
          description={CTA.supporting}
          align="center"
          className="mx-auto"
        />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={CONTACT.whatsappHref} variant="whatsapp">
              <MessageCircle className="h-4 w-4" />
              {CTA.whatsappLabel}
            </Button>
            <Button href={CONTACT.phoneHref} variant="outline">
              <Phone className="h-4 w-4" />
              {CTA.callLabel}
            </Button>
          </div>
        </Reveal>

        {/* Inquiry form */}
        <Reveal delay={0.16}>
          <div className="mx-auto mt-12 max-w-lg">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card flex flex-col items-center p-8 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20, delay: 0.1 }}
                  className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]"
                >
                  <CheckCircle2 className="h-7 w-7" />
                </motion.div>
                <h3 className="text-heading mt-4 text-xl font-semibold text-[#1F2A44]">
                  Opening WhatsApp...
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                  Your inquiry message is ready to send. If WhatsApp did not open automatically,{" "}
                  <a
                    href={CONTACT.whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#B84B23] underline"
                  >
                    tap here
                  </a>
                  .
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-5 text-xs font-semibold text-[#4A5370] underline hover:text-[#1F2A44]"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="card space-y-4 p-7 shadow-xs">
                <h3 className="text-heading text-lg font-semibold text-[#1F2A44]">
                  Or send us a quick inquiry
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#1F2A44]">
                      Your name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full name"
                      required
                      className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-2.5 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-semibold text-[#1F2A44]">
                      Phone number
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      type="tel"
                      className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-2.5 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#1F2A44]">
                    Business type
                  </label>
                  <select
                    value={businessType}
                    onChange={(e) => setBusinessType(e.target.value)}
                    className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-2.5 text-sm text-[#1F2A44] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                  >
                    <option value="">Select your business type</option>
                    <option value="School or College">School or College</option>
                    <option value="Hotel or Banquet Hall">Hotel or Banquet Hall</option>
                    <option value="Shop or Retail Store">Shop or Retail Store</option>
                    <option value="Supplier or Distributor">Supplier or Distributor</option>
                    <option value="Restaurant or Cafe">Restaurant or Cafe</option>
                    <option value="Clinic or Hospital">Clinic or Hospital</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-[#1F2A44]">
                    Your message
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={3}
                    placeholder="Tell us briefly what you need..."
                    className="w-full rounded-[8px] border border-[#E2DDD5] bg-white px-4 py-2.5 text-sm text-[#1F2A44] placeholder:text-[#4A5370] transition-all duration-200 focus:border-[#B84B23] focus:outline-none focus:ring-2 focus:ring-[#B84B23]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-whatsapp w-full disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Preparing message...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="h-4 w-4" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-[#4A5370]">
                  This opens WhatsApp with your message pre-filled. Nothing sends until you tap send there.
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
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
