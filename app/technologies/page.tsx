import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { TECH_CATEGORIES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Technologies — AKA AI Studio",
  description: "The frontend, backend, cloud, AI, DevOps, database, mobile, and AI model technologies AKA AI Studio builds with.",
};

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="A modern stack, chosen deliberately."
        description="We stay opinionated about tooling so you don't have to be — every technology below is battle-tested in production."
      />

      <section className="pb-24">
        <div className="container-shell grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECH_CATEGORIES.map((cat, i) => (
            <Reveal key={cat.id} delay={i * 0.05}>
              <div className="glass-card h-full p-7">
                <h3 className="text-display text-lg font-medium text-ink">{cat.label}</h3>
                <div className="mt-5 flex flex-wrap gap-2.5">
                  {cat.items.map((item) => (
                    <span
                      key={item.name}
                      className="group rounded-pill border border-border-strong bg-white/50 px-4 py-2 text-sm text-ink-dim transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:bg-gradient-to-r hover:from-blue/10 hover:via-violet/10 hover:to-cyan/10 hover:text-ink"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Have a specific stack in mind?" description="We're flexible — tell us your constraints and we'll design around them." />
    </>
  );
}
