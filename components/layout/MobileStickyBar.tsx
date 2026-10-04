"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CONTACT } from "@/data/content";
import { stickyBarMotion } from "@/lib/motion";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    function handleScroll() {
      // Show once scrolled past the hero section (~450px)
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          variants={prefersReduced ? {} : stickyBarMotion}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed bottom-0 left-0 right-0 z-40 block border-t border-[#E2DDD5] bg-[#FBF6EE]/95 px-4 py-2.5 backdrop-blur-md shadow-lg sm:hidden"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[#1F2A44]">
                AKA AI Studio
              </p>
              <p className="truncate text-[11px] text-[#4A5370]">
                Direct founder reply
              </p>
            </div>

            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-[8px] bg-[#25D366] px-4 py-2 text-xs font-semibold text-[#0B3D2E] shadow-xs transition-colors hover:bg-[#1DA851] hover:text-white"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
