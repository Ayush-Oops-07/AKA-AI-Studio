import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { CASE_STUDIES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Work — AKA AI Studio",
  description: "Real websites AKA AI Studio has designed and built for hospitality, retail, and education clients across Bihar.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Real projects, built for real businesses."
        description="A selection of websites we've designed and shipped end to end — from hospitality to retail to education."
      />

      <section className="pb-24">
        <div className="container-shell grid grid-cols-1 gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.08}>
              <Link href={`/work/${cs.id}`} className="group block h-full">
                <article className="glass-card flex h-full flex-col overflow-hidden !p-0">
                  <div className="relative aspect-[16/9.2] w-full overflow-hidden bg-surface-2">
                    {cs.image ? (
                      <Image
                        src={cs.image}
                        alt={`${cs.client} website screenshot`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10">
                        <span className="rounded-pill glass px-4 py-1.5 text-xs font-medium tracking-wide text-ink-dim">
                          Coming Soon
                        </span>
                        <span className="text-display text-lg font-medium text-ink/60">{cs.client}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-pill border border-border-strong bg-white/50 px-3 py-1 text-xs text-ink-dim">
                        {cs.industry}
                      </span>
                      {cs.location && (
                        <span className="inline-flex items-center gap-1 text-xs text-ink-faint">
                          <MapPin className="h-3 w-3" /> {cs.location}
                        </span>
                      )}
                    </div>

                    <h3 className="text-display mt-4 text-xl font-medium text-ink">{cs.title}</h3>
                    <p className="mt-1 text-sm font-medium text-ink-faint">{cs.client}</p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-dim">{cs.summary}</p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-pill bg-gradient-to-r from-blue/10 via-violet/10 to-cyan/10 px-3 py-1 text-xs text-ink-dim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-ink">
                      View case study
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Want a site like these?" description="We take on a limited number of engagements at a time so every client gets founder-level attention." />
    </>
  );
}
