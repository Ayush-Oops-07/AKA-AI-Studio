import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/Button";
import { SERVICES } from "@/constants/data";

export function ServicesPreview() {
  const featured = [...SERVICES].sort((a, b) => a.order - b.order).slice(0, 6);

  return (
    <section id="services" className="section-pad bg-base-soft">
      <div className="container-shell">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Full-stack engineering. AI-native by design."
            description="From web platforms to production AI agents — twelve disciplines, one senior team."
            className="max-w-xl"
          />
          <Button href="/services" variant="ghost" className="hidden sm:inline-flex">
            View All 12 Services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.06} />
          ))}
        </div>

        <div className="mt-10 sm:hidden">
          <Button href="/services" variant="ghost">View All 12 Services</Button>
        </div>
      </div>
    </section>
  );
}
