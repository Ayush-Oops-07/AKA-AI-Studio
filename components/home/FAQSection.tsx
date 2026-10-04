"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { FAQ, FAQ_JSON_LD } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default
  const prefersReduced = useReducedMotion();

  function toggleItem(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  return (
    <section
      id="faq"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      {/* FAQPage JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

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
          eyebrow={FAQ.eyebrow}
          title={FAQ.heading}
          description={FAQ.intro}
          align="center"
          className="mx-auto"
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {FAQ.items.map((item, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headerId = `faq-header-${index}`;

            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div className="card overflow-hidden transition-all duration-300">
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(index)}
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:text-[#B84B23] focus-visible:outline-2 focus-visible:outline-[#B84B23]"
                  >
                    <span className="text-base font-semibold text-[#1F2A44] sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E2DDD5]/50 text-[#1F2A44] transition-transform duration-250 ${
                        isOpen ? "rotate-45 text-[#B84B23]" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.2} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={contentId}
                        role="region"
                        aria-labelledby={headerId}
                        initial={
                          prefersReduced
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        animate={
                          prefersReduced
                            ? { opacity: 1 }
                            : { height: "auto", opacity: 1 }
                        }
                        exit={
                          prefersReduced
                            ? { opacity: 0 }
                            : { height: 0, opacity: 0 }
                        }
                        transition={{
                          duration: 0.25,
                          ease: TRANSITION_EASE,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[#E2DDD5]/70 p-5 pt-3 text-sm leading-relaxed text-[#4A5370]">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
