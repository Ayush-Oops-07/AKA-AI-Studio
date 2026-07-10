import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export function AboutPreview() {
  return (
    <section id="about" className="section-pad">
      <div className="container-shell grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title={
              <>
                AKA means <span className="gradient-text">Ayush, Komal &amp; Anushka</span>.
              </>
            }
            description="Three close friends who became co-founders — building AI-powered digital products with the care of a boutique studio and the rigor of a senior engineering team."
          />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-dim md:text-base">
              Every AKA engagement is led directly by one of the three of us — no rotating account
              managers, no handoffs to a stranger. We bring AI engineering, full-stack development,
              and product design together under one roof, so what we ship feels considered from the
              first line of code to the last pixel.
            </p>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-8">
              <Button href="/about" variant="ghost">Our Full Story</Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="glass-card relative aspect-[4/3] overflow-hidden p-0">
            <Image
              src="/images/team/group-photo.jpg"
              alt="Ayush, Komal & Anushka — founders of AKA AI Studio"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
