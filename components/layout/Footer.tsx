import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE, FOOTER_LINKS, CONTACT } from "@/constants/data";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-white/60">
      <div className="container-shell py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="text-display flex items-center gap-2 text-lg font-semibold text-ink">
              <Logo />
              AKA <span className="gradient-text">AI Studio</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-dim">{SITE.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={CONTACT.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-ink"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.phoneHref}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-ink"
                aria-label="Call us"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={CONTACT.emailHref}
                className="glass flex h-9 w-9 items-center justify-center rounded-full text-ink-dim transition-colors hover:text-ink"
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
          <p>&copy; {new Date().getFullYear()} AKA AI Studio. Built by Ayush, Komal &amp; Anushka.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href={CONTACT.phoneHref} className="hover:text-ink-dim">{CONTACT.phoneDisplay}</a>
            <a href={CONTACT.emailHref} className="hover:text-ink-dim">{CONTACT.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-medium text-ink">{title}</h4>
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
