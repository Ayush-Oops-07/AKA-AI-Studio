"use client";

import { motion, useReducedMotion } from "framer-motion";
import { pageTransition } from "@/lib/motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      className="w-full"
    >
      {children}
    </motion.div>
  );
}
