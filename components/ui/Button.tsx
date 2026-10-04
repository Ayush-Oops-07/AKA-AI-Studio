"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "whatsapp" | "outline" | "ghost";
  className?: string;
  showArrow?: boolean;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  showArrow = false,
}: ButtonProps) {
  const isExternal =
    href.startsWith("http") ||
    href.startsWith("tel:") ||
    href.startsWith("mailto:");
  const isHttp = href.startsWith("http");

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-[0.98] hover:-translate-y-[2px]",
    variant === "primary" &&
      "bg-[#B84B23] text-white hover:bg-[#A3471F] hover:shadow-sm",
    variant === "whatsapp" &&
      "bg-[#25D366] text-[#0B3D2E] font-semibold hover:bg-[#1DA851] hover:text-white shadow-xs",
    variant === "outline" &&
      "border border-[#E2DDD5] bg-transparent text-[#1F2A44] hover:bg-white hover:border-[#1F2A44]/30",
    variant === "ghost" &&
      "bg-transparent text-[#1F2A44] hover:bg-[#F3ECE0]",
    className
  );

  const inner = (
    <>
      {variant === "whatsapp" && (
        <span
          className="pointer-events-none absolute -inset-0.5 rounded-[9px] bg-[#25D366] opacity-40 blur-xs transition-opacity duration-300 group-hover:opacity-0 animate-pulse"
          style={{ animationDuration: "4s" }}
          aria-hidden="true"
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {variant === "whatsapp" && (
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 transition-transform duration-400 group-hover-wiggle"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
          </svg>
        )}
        {children}
        {showArrow && (
          <ArrowUpRight
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(isHttp
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
