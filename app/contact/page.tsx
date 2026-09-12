import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Clock, MapPin, ShieldCheck, CreditCard } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FAQS, CONTACT } from "@/constants/data";

export const metadata: Metadata = {
  title: "Contact Us — AKA AI Studio",
  description: "Get in touch with AKA AI Studio directly on WhatsApp, phone, or email. Based in Dehradun, Uttarakhand, India.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Let's build something extraordinary together."
        description="Message us on WhatsApp for the fastest reply, or call/email Ayush, K. Abhilasha & Adarsh directly."
      />

      <section className="pb-16">
        <div className="container-shell grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-4 lg:col-span-2">
            <Reveal>
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-start gap-4 p-6 transition-all hover:bg-white/80 hover:border-blue/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink">WhatsApp (Primary)</p>
                    <span className="rounded-pill bg-blue/10 px-2 py-0.5 text-[10px] font-medium text-blue">Ayush</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.phoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-emerald-600 font-medium">Replies within minutes</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.05}>
              <a
                href={CONTACT.adarshWhatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-start gap-4 p-6 transition-all hover:bg-white/80 hover:border-blue/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-ink">WhatsApp</p>
                    <span className="rounded-pill bg-violet/10 px-2 py-0.5 text-[10px] font-medium text-violet">Adarsh</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.adarshPhoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">Direct line to co-founder</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={CONTACT.phoneHref}
                className="glass-card flex items-start gap-4 p-6 transition-all hover:bg-white/80 hover:border-blue/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue/10 text-blue">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Direct Call</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.phoneDisplay}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">Direct line to studio</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.12}>
              <a
                href={CONTACT.emailHref}
                className="glass-card flex items-start gap-4 p-6 transition-all hover:bg-white/80 hover:border-blue/30"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet/10 text-violet">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Email Support</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.email}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">For RFPs &amp; detailed briefs</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="glass-card flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-cyan">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">Studio Presence</p>
                  <p className="mt-1 text-sm text-ink-dim">{CONTACT.locationDisplay}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{CONTACT.supportHours}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Payment & Security Assurance Banner */}
      <section className="pb-12">
        <div className="container-shell">
          <div className="grid grid-cols-1 gap-4 rounded-2xl border border-border bg-white/40 p-6 backdrop-blur-sm sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-blue shrink-0" />
              <div>
                <p className="text-xs font-semibold text-ink">GST Invoices Provided</p>
                <p className="text-[11px] text-ink-faint">Full tax input credit for Indian businesses</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="h-5 w-5 text-violet shrink-0" />
              <div>
                <p className="text-xs font-semibold text-ink">Flexible Milestone Payments</p>
                <p className="text-[11px] text-ink-faint">Pay via UPI, NEFT, IMPS or Credit/Debit Cards</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-cyan shrink-0" />
              <div>
                <p className="text-xs font-semibold text-ink">Rapid 1–2 Week Delivery</p>
                <p className="text-[11px] text-ink-faint">Guaranteed on-time launch with weekly demos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell max-w-2xl text-center">
          <SectionHeading eyebrow="Prefer a Quick Chat?" title="Skip the form — connect on WhatsApp." align="center" className="mx-auto" />
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href={CONTACT.whatsappHref} variant="primary">Chat on WhatsApp</Button>
              <Button href={CONTACT.phoneHref} variant="outline" showArrow={false}>Call {CONTACT.phoneDisplay}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-base-soft">
        <div className="container-shell max-w-3xl">
          <SectionHeading eyebrow="FAQ" title="Frequently asked questions before starting." align="center" className="mx-auto" />
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
