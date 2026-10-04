"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { TRANSITION_EASE } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  dark?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  dark = false,
}: SectionHeadingProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {/* Short accent line draws in above heading when entering viewport */}
      <motion.div
        initial={prefersReduced ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.5, ease: TRANSITION_EASE }}
        className={cn(
          "mb-3.5 h-[3px] w-9 rounded-full",
          align === "center" ? "mx-auto origin-center" : "origin-left",
          dark ? "bg-[#F2B705]" : "bg-[#B84B23]"
        )}
        aria-hidden="true"
      />

      {eyebrow && (
        <Reveal>
          <span className={cn("text-eyebrow", dark && "!text-[#F2B705]")}>
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2
          className={cn(
            "text-heading mt-2.5 text-3xl leading-[1.15] sm:text-4xl",
            dark ? "text-white" : "text-[#1F2A44]"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "mt-3.5 text-base leading-relaxed",
              dark ? "text-white/70" : "text-[#4A5370]"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
