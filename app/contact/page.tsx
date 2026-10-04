import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/shared/ContactForm";
import { PAGE_META, FAQS, CONTACT } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.contact.title,
  description: PAGE_META.contact.description,
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Get In Touch</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              Let us talk about what you need.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              Message us on WhatsApp for the fastest reply, or use the form
              below. You can also call or email us directly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact form + sidebar */}
      <section className="pb-16" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="space-y-4 lg:col-span-2">
            {/* WhatsApp — Ayush */}
            <Reveal>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#25D366]/10 text-[#25D366]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#1F2A44]">
                      WhatsApp (Primary)
                    </p>
                    <span className="rounded-[6px] bg-[#B84B23]/15 px-2 py-0.5 text-[10px] font-semibold text-[#8B3512]">
                      Ayush
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#4A5370]">
                    {CONTACT.phoneDisplay}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#0D6832]">
                    Replies within minutes
                  </p>
                </div>
              </a>
            </Reveal>

            {/* WhatsApp — Adarsh */}
            <Reveal delay={0.05}>
              <a
                href={CONTACT.adarshWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#25D366]/10 text-[#0D6832]">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[#1F2A44]">
                      WhatsApp
                    </p>
                    <span className="rounded-[6px] bg-[#0B3D2E]/10 px-2 py-0.5 text-[10px] font-semibold text-[#0B3D2E]">
                      Adarsh
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-[#4A5370]">
                    {CONTACT.adarshPhoneDisplay}
                  </p>
                  <p className="mt-0.5 text-xs text-[#4A5370]">
                    Direct line to co-founder
                  </p>
                </div>
              </a>
            </Reveal>

            {/* Phone */}
            <Reveal delay={0.1}>
              <a
                href={CONTACT.phoneHref}
                className="card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B84B23] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#B84B23]/10 text-[#8B3512]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F2A44]">
                    Direct Call
                  </p>
                  <p className="mt-1 text-sm text-[#4A5370]">
                    {CONTACT.phoneDisplay}
                  </p>
                </div>
              </a>
            </Reveal>

            {/* Email */}
            <Reveal delay={0.12}>
              <a
                href={CONTACT.emailHref}
                className="card flex items-start gap-4 p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#B84B23] hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#0B3D2E]/10 text-[#0B3D2E]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F2A44]">Email</p>
                  <p className="mt-1 text-sm text-[#4A5370]">
                    {CONTACT.email}
                  </p>
                </div>
              </a>
            </Reveal>

            {/* Location and hours */}
            <Reveal delay={0.16}>
              <div className="card flex items-start gap-4 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[8px] bg-[#B84B23]/10 text-[#8B3512]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1F2A44]">
                    Location
                  </p>
                  <p className="mt-1 text-sm text-[#4A5370]">
                    {CONTACT.locationDisplay}
                  </p>
                  <div className="mt-2 flex items-center gap-1.5 text-xs text-[#4A5370]">
                    <Clock className="h-3 w-3" />
                    {CONTACT.supportHours}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Quick WhatsApp section */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#F3ECE0" }}
      >
        <div className="container-main max-w-2xl text-center">
          <SectionHeading
            eyebrow="Prefer a Quick Chat?"
            title="Skip the form — connect on WhatsApp."
            align="center"
            className="mx-auto"
          />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={CONTACT.whatsappHref} variant="whatsapp">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button href={CONTACT.phoneHref} variant="outline">
                Call {CONTACT.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions before starting."
            align="center"
            className="mx-auto"
          />
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.id} delay={i * 0.04}>
                <details className="card group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-[#1F2A44]">
                    {faq.question}
                    <span className="ml-4 text-[#4A5370] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
                    {faq.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
