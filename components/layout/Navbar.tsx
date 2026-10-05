"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/data/content";
import { cn } from "@/lib/utils";
import {
  TRANSITION_EASE,
  mobileMenuDrawer,
  mobileBackdrop,
  iconWiggle,
} from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const prefersReduced = useReducedMotion();

  // 1. Scroll progress bar: 3px terracotta bar fixed at very top
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // 2. Smart header: 24px scroll state + hide on scroll down / show on scroll up
  useEffect(() => {
    function handleScroll() {
      const currentY = window.scrollY;
      setScrolled(currentY > 24);

      if (mobileOpen) {
        setHeaderVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > 120 && currentY > lastScrollY.current + 8) {
        setHeaderVisible(false); // scrolling down
      } else if (currentY < lastScrollY.current - 8) {
        setHeaderVisible(true); // scrolling up
      }
      lastScrollY.current = currentY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Close on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // 3. Mobile menu: Lock body scroll & close on Escape key
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleLinkClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: prefersReduced ? "auto" : "smooth",
        });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
    setMobileOpen(false);
  }

  return (
    <>
      {/* 1. Scroll progress bar: 3px terracotta (#B84B23) fixed at very top */}
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#B84B23]"
        style={{ scaleX: prefersReduced ? 1 : scaleX, originX: 0 }}
        aria-hidden="true"
      />

      {/* 2. Smart Header: transitions height, hides on scroll down, shows on scroll up */}
      <header
        style={{
          transform: headerVisible || mobileOpen || prefersReduced ? "translateY(0)" : "translateY(-100%)",
          transition: "transform 250ms cubic-bezier(0.22, 1, 0.36, 1), background-color 250ms ease, border-color 250ms ease, height 250ms ease",
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 flex items-center",
          scrolled
            ? "h-[60px] border-b border-[#E2DDD5] bg-[#FBF6EE]/92 backdrop-blur-md shadow-xs"
            : "h-[72px] bg-transparent"
        )}
      >
        <div className="container-main flex w-full items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-heading flex items-center gap-2.5 text-lg text-[#1F2A44]"
          >
            <Image
              src="/images/logo.jpeg"
              alt="AKA AI Studio logo"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0 rounded-[6px] object-cover transition-transform duration-200 hover:scale-105"
              priority
            />
            <span className="font-semibold tracking-tight">
              AKA <span className="hidden text-[#B84B23] sm:inline">AI Studio</span>
            </span>
          </Link>

          {/* Desktop Nav Links: Center-out underline expand, stays on active */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={cn(
                    "group relative py-1 text-sm font-medium transition-colors",
                    isActive
                      ? "text-[#1F2A44]"
                      : "text-[#4A5370] hover:text-[#1F2A44]"
                  )}
                >
                  <span>{link.label}</span>
                  {/* Center-out underline */}
                  <span
                    className={cn(
                      "absolute inset-x-0 -bottom-0.5 h-[2px] bg-[#B84B23] transition-transform duration-300 ease-out origin-center",
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Desktop WhatsApp CTA with icon wiggle on hover */}
          <motion.a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            initial="rest"
            whileHover="hover"
            className="group relative hidden items-center gap-2 rounded-[8px] bg-[#25D366] px-4 py-2 text-sm font-semibold text-[#0B3D2E] shadow-xs transition-all duration-200 hover:bg-[#1DA851] hover:text-white active:scale-95 lg:inline-flex"
          >
            <motion.span variants={iconWiggle} className="inline-block">
              <MessageCircle className="h-4 w-4" />
            </motion.span>
            <span>Chat on WhatsApp</span>
          </motion.a>

          {/* Mobile Menu Toggle Button: 44x44px touch target */}
          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-[#E2DDD5] bg-white text-[#1F2A44] transition-colors hover:bg-[#F3ECE0] active:scale-95 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </header>

      {/* 3. Mobile Menu Drawer: Slide in from right (350ms) with dimmed backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Dimmed backdrop */}
            <motion.div
              variants={prefersReduced ? {} : mobileBackdrop}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-in drawer */}
            <motion.div
              variants={prefersReduced ? {} : mobileMenuDrawer}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[280px] max-w-[85vw] flex-col justify-between border-l border-[#E2DDD5] bg-[#FBF6EE] p-6 shadow-2xl lg:hidden"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-[#E2DDD5]">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/logo.jpeg"
                      alt="AKA logo"
                      width={28}
                      height={28}
                      className="h-7 w-7 rounded-[6px] object-cover"
                    />
                    <span className="font-semibold text-sm text-[#1F2A44]">
                      AKA AI Studio
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close drawer"
                    className="flex h-11 w-11 items-center justify-center rounded-[8px] text-[#1F2A44] transition-colors hover:bg-[#F3ECE0] hover:text-[#B84B23] active:scale-95"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Staggered links (50ms stagger) with >=44px tap target */}
                <nav className="mt-6 flex flex-col gap-2">
                  {NAV_LINKS.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={prefersReduced ? {} : { opacity: 0, x: 14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.1 + idx * 0.05, // 50ms stagger
                        duration: 0.3,
                        ease: TRANSITION_EASE,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={(e) => handleLinkClick(e, link.href)}
                        className={cn(
                          "flex min-h-[44px] items-center rounded-[8px] px-4 py-2.5 text-base font-medium transition-colors",
                          pathname === link.href
                            ? "bg-white font-semibold text-[#B84B23] shadow-xs"
                            : "text-[#1F2A44] hover:bg-white/60"
                        )}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Bottom WhatsApp button in drawer */}
              <div className="pt-6 border-t border-[#E2DDD5]">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-[8px] bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#0B3D2E] shadow-sm transition-colors hover:bg-[#1DA851] hover:text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
