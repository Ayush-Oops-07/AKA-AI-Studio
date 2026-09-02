import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { WorkGrid } from "@/components/work/WorkGrid";

export const metadata: Metadata = {
  title: "Our Work & Live Portfolio — AKA AI Studio",
  description:
    "Real websites and digital systems designed and built by AKA AI Studio for education, hospitality, retail, and construction clients across Bihar and India.",
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Work &amp; Portfolio"
        title="Real projects built for real Indian businesses."
        description="A selection of high-performance websites and digital portals we've designed and shipped end-to-end — with verified live domains."
      />

      <section className="pb-24">
        <div className="container-shell">
          <WorkGrid />
        </div>
      </section>

      <CTASection
        title="Want a high-converting website for your business?"
        description="We take on a limited number of client engagements at a time so every business gets direct founder-level attention and rapid delivery."
      />
    </>
  );
}
