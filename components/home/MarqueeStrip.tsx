"use client";

import { GraduationCap, Hotel, ShoppingBag, Truck, Calendar } from "lucide-react";
import { useReducedMotion } from "framer-motion";

const ITEMS = [
  { label: "Schools", icon: GraduationCap },
  { label: "Hotels", icon: Hotel },
  { label: "Shops", icon: ShoppingBag },
  { label: "Suppliers", icon: Truck },
  { label: "Events", icon: Calendar },
];

export function MarqueeStrip() {
  const prefersReduced = useReducedMotion();

  // Duplicate items for continuous smooth loop
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      aria-label="Industries we build for"
      className="group relative overflow-hidden border-y border-[#E2DDD5] bg-[#F6EDE0] py-4"
    >
      <div
        className={`flex w-max items-center gap-10 sm:gap-14 ${
          prefersReduced
            ? ""
            : "animate-marquee group-hover:[animation-play-state:paused]"
        }`}
      >
        {repeated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-2.5 text-sm font-medium tracking-wide text-[#1F2A44]/80 transition-colors hover:text-[#B84B23]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-[6px] bg-white/70 text-[#B84B23] shadow-2xs">
                <Icon className="h-4 w-4" />
              </span>
              <span>{item.label}</span>
              <span className="ml-8 text-[#CFC8BD] select-none" aria-hidden="true">
                •
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
