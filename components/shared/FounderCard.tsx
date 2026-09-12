import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Founder } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

export function FounderCard({ founder, delay = 0 }: { founder: Founder; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <GlassCard className="h-full flex flex-col justify-between">
        <div>
          {founder.image ? (
            <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg ring-2 ring-white">
              <Image
                src={founder.image}
                alt={founder.alt || `Portrait of ${founder.fullName || founder.name}, ${founder.role} of AKA AI Studio`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          ) : (
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br ${founder.gradient} text-2xl font-semibold text-white shadow-lg`}
            >
              {founder.initials}
            </div>
          )}
          <h3 className="text-display mt-5 text-xl font-medium text-ink">{founder.name}</h3>
          <p className="mt-1 text-sm font-medium text-ink-dim">{founder.role}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink-dim">{founder.bio}</p>
          {founder.skills && founder.skills.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {founder.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-pill border border-border-strong bg-white/50 px-3 py-1 text-xs text-ink-dim"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>

        {founder.portfolioUrl && (
          <div className="mt-6 pt-4 border-t border-border-strong/40">
            <a
              href={founder.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 text-xs font-semibold text-blue hover:text-violet transition-colors"
            >
              <span>{founder.portfolioLabel || founder.portfolioUrl.replace(/^https?:\/\//, "")}</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        )}
      </GlassCard>
    </Reveal>
  );
}
