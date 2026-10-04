"use client";

import { GraduationCap, Hotel, ShoppingBag, Truck, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { INDUSTRIES_WE_HELP } from "@/data/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  hotel: Hotel,
  "shopping-bag": ShoppingBag,
  truck: Truck,
  calendar: Calendar,
};

export function IndustriesWeHelp() {
  return (
    <section
      id="industries"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow={INDUSTRIES_WE_HELP.eyebrow}
          title={INDUSTRIES_WE_HELP.heading}
          description={INDUSTRIES_WE_HELP.intro}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES_WE_HELP.items.map((item, i) => {
            const Icon = ICON_MAP[item.icon] || ShoppingBag;
            return (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="card group flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23] hover:bg-[#FFF3E6] hover:shadow-md cursor-default">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-[#B84B23]/10 text-[#B84B23] transition-all duration-300 group-hover:bg-[#B84B23]/20 group-hover:scale-105">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <h3 className="text-heading mt-4 text-lg font-semibold text-[#1F2A44] transition-colors group-hover:text-[#B84B23]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
