"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JOURNEY } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function JourneyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Scroll-linked progress for drawing vertical line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 60%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      id="our-journey"
      className="section-spacing"
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="Our Journey"
          title="How we got here."
          align="center"
          className="mx-auto"
        />

        <div ref={containerRef} className="relative mx-auto mt-16 max-w-2xl">
          {/* Background vertical track line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-[#E2DDD5] sm:left-1/2 sm:-translate-x-px" />

          {/* Active drawing vertical line tied to scroll */}
          <motion.div
            style={prefersReduced ? {} : { scaleY, originY: 0 }}
            className="absolute left-5 top-0 h-full w-[2px] bg-[#B84B23] sm:left-1/2 sm:-translate-x-px"
          />

          <div className="space-y-12">
            {JOURNEY.map((entry, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={entry.year}
                  className={`relative flex flex-col gap-1.5 pl-14 sm:w-1/2 sm:pl-0 ${
                    isLeft
                      ? "sm:pr-10 sm:text-right"
                      : "sm:ml-auto sm:pl-10 sm:text-left"
                  }`}
                >
                  {/* 8. Milestone dot: pops in (scale 0.6 to 1 with small overshoot) */}
                  <motion.span
                    initial={prefersReduced ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 18, // small overshoot
                      delay: 0.1,
                    }}
                    className="absolute left-[13px] top-1.5 h-4 w-4 rounded-full border-[3px] border-[#FBF6EE] bg-[#B84B23] shadow-xs sm:left-auto"
                    style={
                      isLeft
                        ? { right: "-9px", left: "auto" }
                        : { left: "-9px" }
                    }
                    aria-hidden="true"
                  />

                  {/* Milestone text: fades in from side (desktop) or bottom (mobile) */}
                  <motion.div
                    initial={
                      prefersReduced
                        ? { opacity: 1 }
                        : {
                            opacity: 0,
                            x: isLeft ? -20 : 20,
                          }
                    }
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      ease: TRANSITION_EASE,
                      delay: i * 0.08,
                    }}
                  >
                    <span className="text-eyebrow text-xs">{entry.year}</span>
                    <h3 className="text-heading text-lg font-semibold text-[#1F2A44]">
                      {entry.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#4A5370]">
                      {entry.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
