import type { Metadata } from "next";
import { Globe, MessageCircle, Smartphone, Bot } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import {
  PAGE_META,
  SERVICES,
  SERVICES_ALSO_AVAILABLE,
  CONTACT,
} from "@/data/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  globe: Globe,
  "message-circle": MessageCircle,
  smartphone: Smartphone,
  bot: Bot,
};

export const metadata: Metadata = {
  title: PAGE_META.services.title,
  description: PAGE_META.services.description,
};

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Services</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              What we build for you.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              We focus on four things we can deliver well and on time. Every
              project is handled directly by us — Adarsh, Ayush, and Kumari
              Abhilasha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || Globe;
              return (
                <Reveal key={service.id} delay={i * 0.06}>
                  <div className="group card h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23]/50 hover:shadow-md" id={service.id}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#B84B23]/10 text-[#B84B23] transition-all duration-300 group-hover:bg-[#B84B23] group-hover:text-white group-hover:scale-105">
                      <Icon className="h-6 w-6" strokeWidth={1.8} />
                    </div>
                    <h2 className="text-heading mt-5 text-xl text-[#1F2A44]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#B84B23]">
                      {service.price}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.24}>
            <p className="mt-10 text-center text-sm text-[#4A5370]">
              {SERVICES_ALSO_AVAILABLE}
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#F3ECE0" }}
      >
        <div className="container-main max-w-2xl text-center">
          <SectionHeading
            eyebrow="Not Sure What You Need?"
            title="Tell us about your business and we will suggest the right option."
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={CONTACT.whatsappHref} variant="whatsapp">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button href="/contact" variant="outline">
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
