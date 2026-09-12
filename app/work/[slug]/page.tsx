import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MapPin, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/Button";
import { CASE_STUDIES, CONTACT } from "@/constants/data";

export function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.id === slug);
  if (!cs) return {};
  return {
    title: `${cs.client} — AKA AI Studio Case Study`,
    description: cs.summary,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.id === slug);
  if (!cs) notFound();

  const index = CASE_STUDIES.findIndex((c) => c.id === cs.id);
  const next = CASE_STUDIES[(index + 1) % CASE_STUDIES.length] ?? cs;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-12 pt-36 lg:pt-44">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-blue/10 via-violet/5 to-transparent" />
        <div className="container-shell max-w-3xl">
          <Reveal>
            <Link href="/work" className="inline-flex items-center gap-1.5 text-sm text-ink-dim hover:text-ink">
              <ArrowLeft className="h-4 w-4" /> Back to All Projects
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-mono-eyebrow gradient-text">{cs.industry}</span>
              {cs.location && (
                <span className="inline-flex items-center gap-1 text-xs text-ink-faint">
                  <MapPin className="h-3 w-3 text-blue" /> {cs.location}
                </span>
              )}
              {cs.liveUrl && (
                <span className="glass-strong inline-flex items-center gap-1.5 rounded-pill px-3 py-0.5 text-xs font-medium text-ink">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live in Production
                </span>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="text-display mt-4 text-4xl font-medium leading-[1.08] text-ink sm:text-5xl">
              {cs.title}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-3 text-lg font-medium text-ink-faint">{cs.client}</p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {cs.liveUrl && (
                <Button href={cs.liveUrl} variant="primary">
                  Visit Live Site
                </Button>
              )}
              <Button href={CONTACT.whatsappHref} variant="ghost" showArrow={false}>
                Discuss a Similar Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshot Showcase Section */}
      <section className="pb-8">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <div className="glass-card relative aspect-[16/9] w-full overflow-hidden !p-0 shadow-xl border border-white/40">
              {cs.image ? (
                <Image
                  src={cs.image}
                  alt={`${cs.client} website screenshot`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1200px"
                  className="object-cover object-top"
                  priority
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10">
                  <span className="rounded-pill glass px-5 py-2 text-sm font-medium tracking-wide text-ink-dim">
                    Live Project
                  </span>
                  <span className="text-display text-2xl font-medium text-ink/50">{cs.client}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Study Details */}
      <section className="section-pad pt-8">
        <div className="container-shell max-w-5xl grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Reveal>
              <h2 className="text-display text-2xl font-medium text-ink">Project Overview</h2>
              <p className="mt-4 text-base leading-relaxed text-ink-dim">{cs.about}</p>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h3 className="text-display text-lg font-medium text-ink">Key Highlights &amp; Scope</h3>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <div className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    Mobile-first responsive architecture
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    Sub-second load times on 4G/5G networks
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    Custom domain, DNS &amp; SSL configuration
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-ink-dim">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                    Direct WhatsApp lead generation integration
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div>
                <h3 className="text-display text-lg font-medium text-ink">Technologies &amp; Tags</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill bg-gradient-to-r from-blue/10 via-violet/10 to-cyan/10 px-3.5 py-1.5 text-xs font-medium text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {cs.liveUrl && (
              <Reveal delay={0.16}>
                <div className="rounded-2xl border border-border bg-white/50 p-6 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-ink-faint">Live Website</p>
                  <a
                    href={cs.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-2 inline-flex items-center gap-2 text-base font-semibold text-blue hover:text-violet transition-colors"
                  >
                    <span>{cs.liveUrl.replace(/^https?:\/\//, "")}</span>
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </Reveal>
            )}
          </div>

          {/* Project Details Sidebar */}
          <Reveal delay={0.1}>
            <div className="glass-card h-fit p-6 space-y-6">
              <h3 className="text-display text-sm font-medium uppercase tracking-wide text-ink-faint">
                Project Summary
              </h3>
              <dl className="space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <dt className="text-sm text-ink-dim">Client</dt>
                  <dd className="text-sm font-medium text-ink text-right">{cs.client}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <dt className="text-sm text-ink-dim">Location</dt>
                  <dd className="text-sm font-medium text-ink text-right">{cs.location || "Bihar, India"}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <dt className="text-sm text-ink-dim">Industry</dt>
                  <dd className="text-sm font-medium text-ink text-right">{cs.industry}</dd>
                </div>
                {cs.metrics.map((m) => (
                  <div key={m.label} className="flex items-center justify-between border-b border-border pb-3 last:border-0 last:pb-0">
                    <dt className="text-sm text-ink-dim">{m.label}</dt>
                    <dd className="text-sm font-medium text-ink text-right">{m.value}</dd>
                  </div>
                ))}
              </dl>

              {cs.liveUrl && (
                <Button href={cs.liveUrl} variant="primary" className="w-full justify-center">
                  Visit Live Site
                </Button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Next Project Carousel Navigation */}
      <section className="pb-8">
        <div className="container-shell max-w-5xl">
          <Reveal>
            <Link
              href={`/work/${next.id}`}
              className="glass-card group flex items-center justify-between gap-4 p-6 transition-all hover:border-blue/30"
            >
              <div>
                <p className="text-xs text-ink-faint">Next Case Study</p>
                <p className="text-display mt-1 text-lg font-medium text-ink">{next.client}</p>
                <p className="text-xs text-ink-dim mt-0.5">{next.title}</p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-ink-dim transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Ready to build a website for your business?"
        description="Connect directly with Ayush, K. Abhilasha & Adarsh on WhatsApp — we'll share a customized quote and prototype plan within 24 hours."
      />
    </>
  );
}
