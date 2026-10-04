"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
}: PageHeroProps) {
  const prefersReduced = useReducedMotion();

  const anim = (delay: number) =>
    prefersReduced
      ? {}
      : {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.28, delay, ease: [0.25, 0.46, 0.45, 0.94] },
        };

  return (
    <section
      className={cn("pb-12 pt-32 lg:pt-40", className)}
      style={{ backgroundColor: "#FBF6EE" }}
    >
      <div className="container-main max-w-3xl">
        <motion.span {...anim(0)} className="text-eyebrow inline-block">
          {eyebrow}
        </motion.span>
        <motion.h1
          {...anim(0.06)}
          className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl"
        >
          {title}
        </motion.h1>
        <motion.p
          {...anim(0.12)}
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#4A5370] lg:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
