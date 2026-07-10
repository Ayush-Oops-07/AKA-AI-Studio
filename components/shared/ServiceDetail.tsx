import { CheckCircle2 } from "lucide-react";
import type { ServiceCategory } from "@/types";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function ServiceDetail({ service }: { service: ServiceCategory }) {
  const Icon = service.icon;

  return (
    <section id={service.id} className="scroll-mt-28 border-t border-border py-16 first:border-t-0 lg:py-20">
      <div className="container-shell">
        <Reveal>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10 text-blue">
              <Icon className="h-7 w-7" strokeWidth={1.6} />
            </div>
            <div>
              <span className="text-mono-eyebrow gradient-text">Service 0{service.order}</span>
              <h2 className="text-display text-2xl font-medium text-ink sm:text-3xl">{service.title}</h2>
            </div>
          </div>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-dim">{service.description}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Benefits + Process */}
          <div className="lg:col-span-2 space-y-10">
            <Reveal>
              <h3 className="text-display text-lg font-medium text-ink">Benefits</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    {b}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.06}>
              <h3 className="text-display text-lg font-medium text-ink">Our Process</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.process.map((p, i) => (
                  <div key={p.title} className="glass-card p-5">
                    <span className="text-xs font-semibold text-ink-faint">0{i + 1}</span>
                    <h4 className="text-display mt-1 text-sm font-medium text-ink">{p.title}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{p.description}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <h3 className="text-display text-lg font-medium text-ink">Technology Used</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.technologies.map((t) => (
                  <span key={t} className="rounded-pill border border-border-strong bg-white/50 px-3.5 py-1.5 text-xs text-ink-dim">
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <h3 className="text-display text-lg font-medium text-ink">FAQ</h3>
              <div className="mt-4 space-y-3">
                {service.faqs.map((f) => (
                  <div key={f.question} className="glass-card p-5">
                    <h4 className="text-sm font-medium text-ink">{f.question}</h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-dim">{f.answer}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Pricing + CTA */}
          <div className="space-y-4">
            <h3 className="text-display text-lg font-medium text-ink">Pricing</h3>
            {service.pricing.map((tier, i) => (
              <Reveal key={tier.tier} delay={i * 0.06}>
                <div className="glass-card p-5">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-ink">{tier.tier}</span>
                    <span className="text-display text-lg font-semibold gradient-text">{tier.price}</span>
                  </div>
                  <p className="mt-1 text-xs text-ink-faint">{tier.blurb}</p>
                  <ul className="mt-3 space-y-1.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-ink-dim">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
            <Button href="/contact" variant="primary" className="mt-2 w-full justify-center">
              Get a Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
