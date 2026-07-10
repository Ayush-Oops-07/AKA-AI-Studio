import Image from "next/image";
import type { Founder } from "@/types";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

export function FounderCard({ founder, delay = 0 }: { founder: Founder; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <GlassCard className="h-full">
        {founder.image ? (
          <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg ring-2 ring-white">
            <Image src={founder.image} alt={founder.name} fill className="object-cover" sizes="80px" />
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
      </GlassCard>
    </Reveal>
  );
}
