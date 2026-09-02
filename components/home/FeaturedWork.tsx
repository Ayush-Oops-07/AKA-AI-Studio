import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ExternalLink, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES } from "@/constants/data";

export function FeaturedWork() {
  return (
    <section id="work" className="section-pad">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Our Work"
            title="Real websites shipped for real Indian businesses."
            description="Explore our recent live client websites across Bihar and India — engineered for high conversion, sub-second speeds, and verified custom domains."
            className="max-w-2xl"
          />
          <Button href="/work" variant="ghost" className="hidden sm:inline-flex">
            View All Projects
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.id} delay={i * 0.08}>
              <article className="glass-card group flex h-full flex-col overflow-hidden !p-0 transition-all duration-300 hover:border-blue/30">
                {/* Image Container with Live Badge */}
                <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-surface-2">
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
                        Live Project
                      </span>
                      <span className="text-display text-lg font-medium text-ink/60">{cs.client}</span>
                    </div>
                  )}

                  {/* Live Status Tag */}
                  {cs.liveUrl && (
                    <div className="absolute left-4 top-4 z-10">
                      <span className="glass-strong inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-medium text-ink backdrop-blur-md shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        Live Site
                      </span>
                    </div>
                  )}
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-pill border border-border-strong bg-white/60 px-3 py-1 text-xs font-medium text-ink-dim">
                      {cs.industry}
                    </span>
                    {cs.location && (
                      <span className="inline-flex items-center gap-1 text-xs text-ink-faint">
                        <MapPin className="h-3 w-3 text-blue" /> {cs.location}
                      </span>
                    )}
                  </div>

                  <h3 className="text-display mt-3.5 text-xl font-medium text-ink transition-colors group-hover:text-blue">
                    {cs.client}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-ink-faint">{cs.title}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim flex-1">{cs.summary}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {cs.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-pill bg-gradient-to-r from-blue/10 via-violet/10 to-cyan/10 px-2.5 py-1 text-xs text-ink-dim"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5">
                    {cs.liveUrl ? (
                      <a
                        href={cs.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-pill bg-gradient-to-r from-blue via-violet to-cyan px-4 py-2 text-xs font-medium text-white shadow-sm transition-transform hover:scale-[1.03]"
                      >
                        Visit Live Site
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : null}
                    <Link
                      href={`/work/${cs.id}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-ink-dim transition-colors hover:text-ink"
                    >
                      View Case Study
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-center sm:hidden">
          <Button href="/work" variant="ghost">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
