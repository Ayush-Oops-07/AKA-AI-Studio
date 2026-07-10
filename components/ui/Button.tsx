"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  showArrow?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = true,
}: ButtonProps) {
  const isSpecialLink = href.startsWith("tel:") || href.startsWith("mailto:");
  const isHttp = href.startsWith("http");
  const isAnchorOrExternal = href.startsWith("#") || isHttp || isSpecialLink;

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group inline-flex items-center gap-2 rounded-pill px-6 py-3 text-sm font-medium transition-all",
        variant === "primary" &&
          "bg-gradient-to-r from-blue via-violet to-cyan text-white shadow-[0_10px_30px_-8px_rgba(67,97,238,0.5)] hover:shadow-[0_14px_36px_-6px_rgba(139,92,246,0.55)]",
        variant === "ghost" &&
          "glass text-ink hover:border-border-strong hover:bg-white/70",
        variant === "outline" &&
          "border border-border-strong bg-white/40 text-ink hover:bg-white/70",
        className
      )}
    >
      {children}
      {showArrow && (
        <ArrowUpRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </motion.span>
  );

  if (isAnchorOrExternal) {
    return (
      <a
        href={href}
        className="inline-block"
        {...(isHttp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="inline-block">
      {content}
    </Link>
  );
}
