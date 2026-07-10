import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { FounderCard } from "@/components/shared/FounderCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { FOUNDERS, TIMELINE, CORE_VALUES, MISSION, VISION } from "@/constants/data";

export const metadata: Metadata = {
  title: "About — AKA AI Studio",
  description: "Meet Ayush, Komal, and Anushka — the three founders behind AKA AI Studio, and the story, mission, and values that drive the studio.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Three friends. One name. A studio built on trust."
        description="AKA stands for Ayush, Komal, and Anushka — three close friends who turned late-night side projects into a full-service AI engineering and design studio."
      />

      <section className="section-pad pt-0">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <FounderCard key={founder.id} founder={founder} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell">
          <SectionHeading eyebrow="Our Journey" title="How three friends became a studio." align="center" className="mx-auto" />
          <div className="relative mx-auto mt-16 max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-px bg-border-strong sm:left-1/2" />
            <div className="space-y-10">
              {TIMELINE.map((entry, i) => (
                <Reveal key={entry.year} delay={i * 0.08}>
                  <div className={`relative flex flex-col gap-2 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10 ${i % 2 === 0 ? "sm:ml-0 sm:text-right" : "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left"}`}>
                    <span className="absolute left-1.5 top-1 h-4 w-4 rounded-full border-4 border-white bg-gradient-to-br from-blue to-violet sm:left-auto sm:right-[-8px] sm:top-1" style={i % 2 !== 0 ? { left: "-8px", right: "auto" } : undefined} />
                    <span className="text-mono-eyebrow gradient-text">{entry.year}</span>
                    <h3 className="text-display text-lg font-medium text-ink">{entry.title}</h3>
                    <p className="text-sm leading-relaxed text-ink-dim">{entry.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-shell grid grid-cols-1 gap-6 md:grid-cols-2">
          <Reveal>
            <div className="glass-card h-full p-8">
              <h3 className="text-display text-2xl font-medium text-ink">Our Mission</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-dim">{MISSION}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="glass-card h-full p-8">
              <h3 className="text-display text-2xl font-medium text-ink">Our Vision</h3>
              <p className="mt-4 text-base leading-relaxed text-ink-dim">{VISION}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell">
          <SectionHeading eyebrow="How We Work" title="The values behind every build." align="center" className="mx-auto" />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CORE_VALUES.map((value, i) => {
              const Icon = value.icon;
              return (
                <Reveal key={value.title} delay={i * 0.08}>
                  <div className="glass-card h-full p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10 text-blue">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </div>
                    <h3 className="text-display mt-4 text-base font-medium text-ink">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-dim">{value.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection title="Want to build with us?" description="We take on a limited number of engagements each quarter so every client gets founder-level attention." />
    </>
  );
}
