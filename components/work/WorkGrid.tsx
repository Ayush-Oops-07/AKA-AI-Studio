"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, ExternalLink, Globe, Sparkles, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CASE_STUDIES } from "@/constants/data";

const CATEGORIES = ["All Projects", "Education", "Hospitality", "Retail & Electronics", "Building Materials"];

export function WorkGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");

  const filteredStudies = CASE_STUDIES.filter((cs) => {
    if (selectedCategory === "All Projects") return true;
    if (selectedCategory === "Education") return cs.industry.toLowerCase().includes("education");
    if (selectedCategory === "Hospitality") return cs.industry.toLowerCase().includes("hospitality");
    if (selectedCategory === "Retail & Electronics") return cs.industry.toLowerCase().includes("retail");
    if (selectedCategory === "Building Materials") return cs.industry.toLowerCase().includes("building");
    return true;
  });

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`rounded-pill px-4 py-2 text-xs font-medium transition-all duration-300 ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-blue via-violet to-cyan text-white shadow-[0_4px_16px_-4px_rgba(67,97,238,0.4)]"
                : "glass border border-border-strong text-ink-dim hover:bg-white/60 hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Trust Highlights Bar */}
      <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-white/40 p-4 backdrop-blur-sm sm:grid-cols-4 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
            <Globe className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-ink-faint">Live Deployments</p>
            <p className="text-sm font-semibold text-ink">100% Live Sites</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-ink-faint">Speed Score</p>
            <p className="text-sm font-semibold text-ink">Sub-second 4G</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
            <CheckCircle2 className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-ink-faint">Custom Domains</p>
            <p className="text-sm font-semibold text-ink">SSL &amp; DNS Setup</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
            <MapPin className="h-4 w-4" />
          </div>
          <div>
            <p className="text-xs text-ink-faint">Client Location</p>
            <p className="text-sm font-semibold text-ink">Bihar &amp; Pan-India</p>
          </div>
        </div>
      </div>

      {/* Grid of Work Items */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredStudies.map((cs, i) => (
          <Reveal key={cs.id} delay={i * 0.08}>
            <article className="glass-card group flex h-full flex-col overflow-hidden !p-0 transition-all duration-300 hover:border-blue/30">
              {/* Image Preview Container */}
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

                {/* Status Pill on top of screenshot */}
                {cs.liveUrl && (
                  <div className="absolute left-4 top-4 z-10">
                    <span className="glass-strong inline-flex items-center gap-2 rounded-pill px-3 py-1 text-xs font-medium text-ink backdrop-blur-md shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Site
                    </span>
                  </div>
                )}
              </div>

              {/* Project Info */}
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

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cs.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-pill bg-gradient-to-r from-blue/10 via-violet/10 to-cyan/10 px-2.5 py-1 text-xs text-ink-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Links */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
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
                    className="inline-flex items-center gap-1 text-xs font-medium text-ink-dim transition-colors hover:text-ink ml-auto"
                  >
                    Case Study &amp; Details
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
