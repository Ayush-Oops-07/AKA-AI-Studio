import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceCategory } from "@/types";
import { Reveal } from "@/components/ui/Reveal";

export function ServiceCard({ service, delay = 0 }: { service: ServiceCategory; delay?: number }) {
  const Icon = service.icon;
  return (
    <Reveal delay={delay}>
      <Link href={`/services#${service.id}`} className="group block h-full">
        <div className="glass-card relative h-full overflow-hidden p-7">
          <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-blue/15 to-violet/15 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue/10 via-violet/10 to-cyan/10 text-blue transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6" strokeWidth={1.6} />
          </div>
          <span className="mt-4 block text-xs font-medium text-ink-faint">0{service.order}</span>
          <h3 className="text-display mt-1 text-lg font-medium text-ink">{service.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-dim">{service.shortDescription}</p>
          <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-blue">
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
