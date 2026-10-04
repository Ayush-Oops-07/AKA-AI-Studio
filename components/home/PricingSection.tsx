"use client";

import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PRICING, CONTACT } from "@/data/content";

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow={PRICING.eyebrow}
          title={PRICING.heading}
          description={PRICING.intro}
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-3">
          {PRICING.packages.map((pkg, i) => {
            const isPopular = pkg.popular;
            const waHref = CONTACT.whatsappHrefWithMessage(pkg.whatsappMessage);

            return (
              <Reveal key={pkg.id} delay={i * 0.08}>
                <div
                  className={`card relative flex h-full flex-col justify-between p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
                    isPopular
                      ? "border-2 border-[#B84B23] bg-white shadow-sm md:-translate-y-2"
                      : "border border-[#E2DDD5] bg-white/90"
                  }`}
                >
                  {isPopular && pkg.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#B84B23] px-3.5 py-0.5 text-xs font-semibold text-white shadow-2xs">
                      {pkg.badge}
                    </div>
                  )}

                  <div>
                    <h3 className="text-heading text-xl font-bold text-[#1F2A44]">
                      {pkg.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                      {pkg.description}
                    </p>

                    <div className="mt-5 border-t border-[#E2DDD5] pt-4">
                      <div className="text-heading text-2xl font-bold text-[#1F2A44]">
                        {pkg.price}
                      </div>
                    </div>

                    <ul className="mt-6 space-y-3">
                      {pkg.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-[#4A5370]"
                        >
                          <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#25D366]/15 text-[#0B3D2E]">
                            <Check className="h-3 w-3 stroke-[2.5]" />
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-4">
                    <Button
                      href={waHref}
                      variant={isPopular ? "whatsapp" : "outline"}
                      className="w-full text-center"
                    >
                      Ask about this package
                    </Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Note under the cards */}
        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-normal text-[#4A5370]">
            {PRICING.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
