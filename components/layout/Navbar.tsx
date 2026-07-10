"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, CONTACT } from "@/constants/data";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/shared/Logo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 24);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-6"
      )}
    >
      <div className="container-shell">
        <div
          className={cn(
            "flex items-center justify-between rounded-pill px-5 py-3 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <Link href="/" className="text-display flex items-center gap-2 text-lg font-semibold text-ink">
            <Logo />
            AKA <span className="hidden sm:inline gradient-text">AI Studio</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavItem key={link.href} label={link.label} href={link.href} active={pathname === link.href} />
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href={CONTACT.whatsappHref} variant="primary" className="!px-5 !py-2.5 !text-sm">
              WhatsApp Us
            </Button>
          </div>

          <button
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="container-shell mt-3 lg:hidden"
          >
            <div className="glass-strong flex flex-col gap-1 rounded-card p-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm transition-colors hover:bg-surface-2 hover:text-ink",
                    pathname === link.href ? "text-ink font-medium" : "text-ink-dim"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 px-3">
                <Button href={CONTACT.whatsappHref} variant="primary" className="w-full justify-center">
                  WhatsApp Us
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavItem({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative text-sm transition-colors",
        active ? "text-ink font-medium" : "text-ink-dim hover:text-ink"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-1.5 left-0 h-px bg-gradient-to-r from-blue via-violet to-cyan transition-all duration-300",
          active ? "w-full" : "w-0 group-hover:w-full"
        )}
      />
    </Link>
  );
}
