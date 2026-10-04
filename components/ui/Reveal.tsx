"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { TRANSITION_EASE } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Scroll-reveal wrapper: fades and slides up 16-24px once when entering viewport.
 * Respects prefers-reduced-motion for zero motion sickness.
 */
export function Reveal({
  children,
  delay = 0,
  className,
  y = 20,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: TRANSITION_EASE, delay }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
