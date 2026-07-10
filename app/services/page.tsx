import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ServiceDetail } from "@/components/shared/ServiceDetail";
import { CTASection } from "@/components/shared/CTASection";
import { SERVICES } from "@/constants/data";

export const metadata: Metadata = {
  title: "Services — AKA AI Studio",
  description: "Twelve disciplines under one senior team — web development, mobile apps, AI engineering, AI agents, RAG, cloud, DevOps, data, ML, automation, security, and consulting.",
};

export default function ServicesPage() {
  const ordered = [...SERVICES].sort((a, b) => a.order - b.order);

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Twelve disciplines. One senior team."
        description="From your first line of code to your production AI agents — every service is delivered by the same founders who started this studio."
      />

      <section className="pb-16">
        <div className="container-shell grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.04} />
          ))}
        </div>
      </section>

      <div className="border-t border-border">
        {ordered.map((service) => (
          <ServiceDetail key={service.id} service={service} />
        ))}
      </div>

      <CTASection title="Not sure which service you need?" description="Book a free 30-minute call and we'll map the right scope for your product." />
    </>
  );
}
