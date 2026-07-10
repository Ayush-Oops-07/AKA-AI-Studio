import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQS, CONTACT } from "@/constants/data";

export const metadata: Metadata = {
  title: "Contact — AKA AI Studio",
  description: "Get in touch with AKA AI Studio on WhatsApp, by phone, or by email.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something intelligent together."
        description="Message us on WhatsApp for the fastest reply, or call/email directly."
      />

      <section className="pb-16">
        <div className="container-shell grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-5 lg:col-span-2">
            <Reveal>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-start gap-4 p-6 transition-colors hover:bg-white/70"
              >
                <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-medium text-ink">WhatsApp</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.phoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">Fastest way to reach us</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.06}>
              <a href={CONTACT.phoneHref} className="glass-card flex items-start gap-4 p-6 transition-colors hover:bg-white/70">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-medium text-ink">Call</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.phoneDisplay}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.12}>
              <a href={CONTACT.emailHref} className="glass-card flex items-start gap-4 p-6 transition-colors hover:bg-white/70">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-medium text-ink">Email</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.email}</p>
                </div>
              </a>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="glass-card flex items-start gap-4 p-6">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue" />
                <div>
                  <p className="text-sm font-medium text-ink">Response time</p>
                  <p className="mt-1 text-sm text-ink-dim">Usually within a few hours on WhatsApp</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell max-w-2xl text-center">
          <SectionHeading eyebrow="Prefer to Talk?" title="Skip the form — message us directly." align="center" className="mx-auto" />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={CONTACT.whatsappHref} variant="primary">WhatsApp Us</Button>
              <Button href={CONTACT.phoneHref} variant="outline" showArrow={false}>Call {CONTACT.phoneDisplay}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Common questions before you reach out." align="center" className="mx-auto" />
          <div className="mt-10 space-y-3">
            {FAQS.map((faq, i) => (
              <Reveal key={faq.id} delay={i * 0.05}>
                <details className="glass-card group p-5 open:pb-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink">
                    {faq.question}
                    <span className="ml-4 text-ink-faint transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink-dim">{faq.answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
