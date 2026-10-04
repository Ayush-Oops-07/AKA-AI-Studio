"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TRANSITION_EASE } from "@/lib/motion";

export function Highlight({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.span
      className="inline rounded-[2px] font-medium text-[#1F2A44]"
      style={{
        backgroundImage: "linear-gradient(rgba(242, 183, 5, 0.35), rgba(242, 183, 5, 0.35))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "0 92%",
      }}
      initial={
        prefersReduced
          ? { backgroundSize: "100% 40%" }
          : { backgroundSize: "0% 40%" }
      }
      whileInView={{ backgroundSize: "100% 40%" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.6, ease: TRANSITION_EASE }}
    >
      {children}
    </motion.span>
  );
}
