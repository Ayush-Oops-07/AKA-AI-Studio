"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { TRANSITION_EASE } from "@/lib/motion";

export function BackToTop() {
  const [show, setShow] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      setShow(window.scrollY > 800);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  }

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.25, ease: TRANSITION_EASE }}
          className="fixed bottom-[calc(68px+env(safe-area-inset-bottom,0px))] left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-[#E2DDD5] bg-[#FBF6EE] text-[#1F2A44] shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-[#B84B23] active:scale-95 sm:bottom-6 sm:left-6"
        >
          <ArrowUp className="h-4 w-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
