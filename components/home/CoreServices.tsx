"use client";

import Link from "next/link";
import { Globe, MessageCircle, Smartphone, Bot, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES, SERVICES_ALSO_AVAILABLE } from "@/data/content";
import { TRANSITION_EASE } from "@/lib/motion";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  "message-circle": MessageCircle,
  smartphone: Smartphone,
  bot: Bot,
};

export function CoreServices() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="services"
      className="section-spacing"
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div className="container-main">
        <SectionHeading
          eyebrow="What We Build"
          title="Four things we do well."
          description="We focus on what we can deliver honestly and on time."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon] || Globe;
            return (
              <Reveal key={service.id} delay={i * 0.08}>
                <Link
                  href={`/services#${service.id}`}
                  className="card group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23] hover:bg-[#FFF3E6] hover:shadow-md cursor-pointer block"
                  id={service.id}
                >
                  {/* Icon that draws itself (stroke-dashoffset 600ms) on entrance, tints terracotta on hover */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#B84B23]/10 text-[#B84B23] transition-all duration-300 group-hover:bg-[#B84B23]/20 group-hover:scale-105">
                    <motion.svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-[#B84B23] transition-colors duration-300 group-hover:text-[#A3471F]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {service.icon === "globe" && (
                        <>
                          <motion.circle
                            cx="12"
                            cy="12"
                            r="10"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
                          />
                          <motion.path
                            d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE, delay: 0.1 }}
                          />
                          <motion.path
                            d="M2 12h20"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE, delay: 0.2 }}
                          />
                        </>
                      )}
                      {service.icon === "message-circle" && (
                        <motion.path
                          d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
                          initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, ease: TRANSITION_EASE }}
                        />
                      )}
                      {service.icon === "smartphone" && (
                        <>
                          <motion.rect
                            width="14"
                            height="20"
                            x="5"
                            y="2"
                            rx="2"
                            ry="2"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
                          />
                          <motion.path
                            d="M12 18h.01"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE, delay: 0.15 }}
                          />
                        </>
                      )}
                      {service.icon === "bot" && (
                        <>
                          <motion.path
                            d="M12 8V4H8"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE }}
                          />
                          <motion.rect
                            width="16"
                            height="12"
                            x="4"
                            y="8"
                            rx="2"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE, delay: 0.1 }}
                          />
                          <motion.path
                            d="M2 14h2M20 14h2M9 13v2M15 13v2"
                            initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: TRANSITION_EASE, delay: 0.2 }}
                          />
                        </>
                      )}
                    </motion.svg>
                  </div>

                  <h3 className="text-heading mt-5 text-xl font-semibold text-[#1F2A44] transition-colors group-hover:text-[#B84B23]">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#4A5370]">
                    {service.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-[#E2DDD5]/70 pt-3">
                    <p className="text-sm font-semibold text-[#B84B23]">
                      {service.price}
                    </p>

                    {/* Small Learn more arrow that fades in and slides 4px on hover */}
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#B84B23] opacity-0 -translate-x-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                      <span>Learn more</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.24}>
          <p className="mt-10 text-center text-sm text-[#4A5370]">
            {SERVICES_ALSO_AVAILABLE}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
