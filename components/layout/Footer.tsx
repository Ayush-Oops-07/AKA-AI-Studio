import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, Heart } from "lucide-react";
import { SITE, FOOTER_LINKS, CONTACT } from "@/constants/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white/70 backdrop-blur-md">
      <div className="container-shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="text-display flex items-center gap-2 text-lg font-semibold text-ink">
              <Logo />
              AKA <span className="gradient-text">AI Studio</span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-ink-dim">{SITE.description}</p>

            <div className="flex items-center gap-2 text-xs text-ink-faint">
              <MapPin className="h-3.5 w-3.5 text-blue" />
              <span>{CONTACT.locationDisplay}</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-ink-faint">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
              <span>GST Invoices &amp; 100% Tax Input Credit Available</span>
            </div>

            <div className="mt-6 flex items-center gap-3 pt-2">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-all hover:text-emerald-600 hover:scale-105 shadow-sm"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-all hover:text-blue hover:scale-105 shadow-sm"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.emailHref}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-ink-dim transition-all hover:text-violet hover:scale-105 shadow-sm"
                aria-label="Email us"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Company" links={FOOTER_LINKS.company} />
          <FooterColumn title="Services" links={FOOTER_LINKS.services} />
          <FooterColumn title="Resources" links={FOOTER_LINKS.resources} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-ink-faint sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} AKA AI Studio. Designed &amp; Developed by AKA AI Studio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <span className="text-ink-dim font-medium">{CONTACT.phoneDisplay}</span>
            <a href={CONTACT.emailHref} className="hover:text-ink-dim transition-colors">{CONTACT.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link href={link.href} className="text-sm text-ink-dim transition-colors hover:text-ink">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
