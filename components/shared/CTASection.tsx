import { MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/data/content";

export function CTASection({
  title = "Ready to get your business online?",
  description = "Message us on WhatsApp or give us a call — we will reply within a few hours.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="section-spacing section-dark">
      <div className="container-main max-w-2xl text-center">
        <Reveal>
          <span className="text-eyebrow">Work With Us</span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="text-heading mt-3 text-3xl text-white sm:text-4xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {description}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={CONTACT.whatsappHref} variant="whatsapp">
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </Button>
            <Button
              href={CONTACT.phoneHref}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              <Phone className="h-4 w-4" />
              Call {CONTACT.phoneDisplay}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
