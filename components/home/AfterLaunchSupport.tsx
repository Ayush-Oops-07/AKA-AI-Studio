"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AFTER_LAUNCH } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function AfterLaunchSupport() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="support"
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
          eyebrow={AFTER_LAUNCH.eyebrow}
          title={AFTER_LAUNCH.heading}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {AFTER_LAUNCH.points.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <div className="card flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23] hover:shadow-md">
                {/* SVG Check icon drawing in on scroll (stroke-dashoffset 400ms) */}
                <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#0B3D2E]/10 text-[#0B3D2E]">
                  <motion.svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-[#0B3D2E]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.polyline
                      points="20 6 9 17 4 12"
                      initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.45,
                        delay: prefersReduced ? 0 : 0.15 + i * 0.1,
                        ease: TRANSITION_EASE,
                      }}
                    />
                  </motion.svg>
                </div>

                <h3 className="text-heading mt-5 text-lg font-semibold text-[#1F2A44]">
                  {point.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[#4A5370]">
                  {point.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing line */}
        <Reveal delay={0.35}>
          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-base font-medium text-[#1F2A44]">
              {AFTER_LAUNCH.closing}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
