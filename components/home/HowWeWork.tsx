"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { HOW_WE_WORK } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function HowWeWork() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Scroll-linked progressive connecting line
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 50%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section ref={sectionRef} className="section-spacing section-dark">
      <div className="container-main">
        <SectionHeading
          eyebrow="How We Work"
          title="Three simple steps."
          align="center"
          className="mx-auto"
          dark
        />

        <div className="relative mt-16">
          {/* Background track line */}
          <div
            className="absolute left-[18%] right-[18%] top-7 z-0 hidden h-[2px] bg-white/10 sm:block"
            aria-hidden="true"
          />

          {/* Scroll-driven progressive connecting line */}
          <motion.div
            style={{ scaleX: prefersReduced ? 1 : scaleX, originX: 0 }}
            className="absolute left-[18%] right-[18%] top-7 z-0 hidden h-[2px] origin-left bg-[#F2B705] sm:block shadow-[0_0_8px_rgba(242,183,5,0.6)]"
            aria-hidden="true"
          />

          <div className="relative z-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
            {HOW_WE_WORK.map((step, i) => (
              <Reveal key={step.number} delay={i * 0.16}>
                <div className="group text-center">
                  <motion.div
                    initial={
                      prefersReduced
                        ? {}
                        : { scale: 0.85, opacity: 0.7 }
                    }
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.45,
                      delay: 0.2 + i * 0.16,
                      ease: TRANSITION_EASE,
                    }}
                    whileHover={prefersReduced ? {} : { scale: 1.08 }}
                    className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#F2B705] bg-[#0B3D2E] text-xl font-bold text-[#F2B705] shadow-[0_0_12px_rgba(242,183,5,0.35)] transition-all duration-300 group-hover:bg-[#F2B705] group-hover:text-[#0B3D2E] group-hover:shadow-[0_0_20px_rgba(242,183,5,0.6)]"
                  >
                    {step.number}
                  </motion.div>
                  <h3 className="text-heading mt-5 text-xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
