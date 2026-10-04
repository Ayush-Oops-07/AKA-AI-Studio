"use client";

import { Users, Zap, Tag, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { WHY_US } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  users: Users,
  zap: Zap,
  tag: Tag,
  sparkles: Sparkles,
};

export function WhyWorkWithUs() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="why-us"
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
          eyebrow={WHY_US.eyebrow}
          title={WHY_US.heading}
          description={WHY_US.intro}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_US.cards.map((card, i) => {
            const Icon = ICON_MAP[card.icon] || Users;
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23] hover:bg-[#FFF3E6] hover:shadow-md cursor-default">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#B84B23]/10 text-[#B84B23] transition-all duration-300 group-hover:bg-[#B84B23]/20 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-heading mt-4 text-lg font-semibold text-[#1F2A44] transition-colors group-hover:text-[#B84B23]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                    {card.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Honest note in soft box */}
        <Reveal delay={0.35}>
          <div className="mx-auto mt-10 max-w-2xl rounded-[12px] border border-[#E2DDD5] bg-white/80 p-5 text-center shadow-2xs">
            <p className="text-sm font-medium text-[#1F2A44]">
              {WHY_US.honestNote}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
