import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/constants/data";

export function CTASection({
  title = "Ready to build something intelligent?",
  description = "Message us on WhatsApp or give us a call — we'll reply within one business day with next steps.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-shell">
        <Reveal>
          <div className="glass-card relative overflow-hidden px-8 py-16 text-center sm:px-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue/20 blur-[100px]" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-violet/20 blur-[100px]" />
            <h2 className="text-display mx-auto max-w-2xl text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink-dim md:text-lg">
              {description}
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <Button href={CONTACT.whatsappHref} variant="primary">WhatsApp Us</Button>
              <Button href={CONTACT.phoneHref} variant="outline" showArrow={false}>Call Now</Button>
              <Button href="/work" variant="ghost" showArrow={false}>See Our Work</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
