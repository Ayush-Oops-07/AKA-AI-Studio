import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { INDUSTRIES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Industries — AKA AI Studio",
  description: "Industries AKA AI Studio serves — healthcare, education, retail, finance, travel, manufacturing, real estate, logistics, and restaurants.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Domain expertise across nine industries."
        description="Every industry has its own constraints — compliance, data sensitivity, latency. We design around them, not through them."
      />

      <section className="pb-24">
        <div className="container-shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, i) => {
            const Icon = industry.icon;
            return (
              <Reveal key={industry.id} delay={i * 0.05}>
                <div className="glass-card group h-full p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10 text-blue transition-transform duration-500 group-hover:scale-110">
                    <Icon className="h-6 w-6" strokeWidth={1.6} />
                  </div>
                  <h3 className="text-display mt-4 text-lg font-medium text-ink">{industry.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-dim">{industry.blurb}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection title="Don't see your industry?" description="We've likely worked adjacent to it. Let's talk about your specific constraints." />
    </>
  );
}
