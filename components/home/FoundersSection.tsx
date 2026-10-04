"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Highlight } from "@/components/ui/Highlight";
import { FOUNDERS } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";

export function FoundersSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="founders"
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
          eyebrow="Who We Are"
          title="Three student friends. That is our whole team."
          description={
            <>
              We are three MCA students.{" "}
              <Highlight>You talk directly to us</Highlight> — the same people
              who design, code, and deliver your project.
            </>
          }
          align="center"
          className="mx-auto"
        />

        {/* Group photo feature card in Founders section */}
        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 max-w-xl overflow-hidden rounded-[12px] border border-[#E2DDD5] bg-[#FBF6EE] p-2 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[9px] bg-[#F3ECE0]">
              <Image
                src="/images/team/group-photo.png"
                alt="Adarsh, Ayush and Kumari Abhilasha, the three founders of AKA AI Studio"
                fill
                sizes="(max-width: 768px) 90vw, 580px"
                className="object-cover object-center"
              />
            </div>
            <p className="py-2 text-center text-xs font-medium text-[#4A5370]">
              Founders of AKA AI Studio: Adarsh, Kumari Abhilasha &amp; Ayush
            </p>
          </div>
        </Reveal>

        {/* 3 Individual founder profile cards (100ms stagger) */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {FOUNDERS.map((founder, i) => (
            <Reveal key={founder.id} delay={0.1 + i * 0.1}>
              <div className="card group flex h-full flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23]/50 hover:shadow-md">
                {/* Photo avatar with 1.04 zoom and sliding role bar on hover */}
                <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#E2DDD5] bg-[#F3ECE0] shadow-2xs">
                  <Image
                    src={founder.image}
                    alt={founder.imageAlt}
                    width={112}
                    height={112}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Sliding role bar: always visible on touch, slides up on desktop hover */}
                  <div className="absolute inset-x-0 bottom-0 bg-[#1F2A44]/90 px-1 py-1 text-center backdrop-blur-xs transition-transform duration-300 ease-out sm:translate-y-full sm:group-hover:translate-y-0">
                    <p className="truncate text-[10px] font-semibold text-white">
                      {founder.role}
                    </p>
                  </div>
                </div>

                <h3 className="text-heading mt-4 text-lg font-semibold text-[#1F2A44]">
                  {founder.fullName}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#B84B23]">
                  {founder.role}
                </p>
                <p className="mt-1 text-xs text-[#4A5370]">
                  {founder.study}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5370]">
                  {founder.personalLine}
                </p>

                {founder.portfolioUrl && (
                  <a
                    href={founder.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-xs font-semibold text-[#B84B23] underline transition-colors hover:text-[#A3471F]"
                  >
                    {founder.portfolioUrl.replace(/^https?:\/\//, "")}
                  </a>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
