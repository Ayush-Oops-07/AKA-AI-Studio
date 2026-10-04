"use client";

import { MessageCircle, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FREE_CHECK, CONTACT } from "@/data/content";

export function FreeWebsiteCheck() {
  if (!FREE_CHECK.showFreeCheck) {
    return null;
  }

  const waHref = CONTACT.whatsappHrefWithMessage(FREE_CHECK.whatsappMessage);

  return (
    <section
      id="free-check"
      className="section-dark section-spacing relative overflow-hidden"
    >
      <div className="container-main relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal delay={0.05}>
            <span className="text-eyebrow inline-block font-semibold text-[#F2B705]">
              {FREE_CHECK.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="text-heading mt-3 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
              {FREE_CHECK.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">
              {FREE_CHECK.body}
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button href={waHref} variant="whatsapp" className="px-6 py-3 text-base">
                {FREE_CHECK.buttonText}
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.32}>
            <p className="mt-4 text-xs text-white/60">
              No sales pitch. No obligation. Direct reply from the founders.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
