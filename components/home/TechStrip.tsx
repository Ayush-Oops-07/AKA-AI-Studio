import { SectionHeading } from "@/components/ui/SectionHeading";
import { AI_CAPABILITIES } from "@/constants/data";
import { Reveal } from "@/components/ui/Reveal";

export function TechStrip() {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <SectionHeading
          eyebrow="AI Capabilities"
          title="AI expertise engineered into every build."
          description="From autonomous agents to private, self-hosted models — our AI capabilities span the full stack."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AI_CAPABILITIES.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <Reveal key={cap.id} delay={i * 0.06}>
                <div className="glass-card flex h-full items-start gap-4 p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10 text-blue">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="text-display text-base font-medium text-ink">{cap.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{cap.description}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
