"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { FOOTER, CONTACT } from "@/data/content";

export function Footer() {
  return (
    <footer
      className="border-t border-[#14573F]"
      style={{ backgroundColor: "#0B3D2E", color: "#fff" }}
    >
      <div className="container-main py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <Reveal delay={0.06}>
            <div className="lg:col-span-2 space-y-4">
              <Link
                href="/"
                className="text-heading flex items-center gap-2.5 text-lg text-white"
              >
                <Image
                  src="/images/logo.jpeg"
                  alt="AKA AI Studio logo"
                  width={32}
                  height={32}
                  className="h-8 w-8 shrink-0 rounded-[6px] object-cover"
                />
                <span className="font-semibold tracking-tight">AKA AI Studio</span>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                {FOOTER.tagline}
              </p>

              <div className="flex items-center gap-2 text-xs text-white/80">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                <span>{FOOTER.location}</span>
              </div>

              {/* Contact icons */}
              <div className="mt-4 flex items-center gap-3">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/10 hover:text-[#25D366]"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white"
                  aria-label="Call us"
                >
                  <Phone className="h-4 w-4" />
                </a>
                <a
                  href={CONTACT.emailHref}
                  className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-white/20 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/10 hover:text-white"
                  aria-label="Email us"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Company links */}
          <Reveal delay={0.12}>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Company</h4>
              <ul className="mt-4 space-y-2.5">
                {FOOTER.links.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center py-0.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.label}</span>
                      {/* Center-grow underline matching header */}
                      <span className="absolute inset-x-0 bottom-0 h-[1.5px] scale-x-0 origin-center bg-[#F2B705] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Services links */}
          <Reveal delay={0.18}>
            <div>
              <h4 className="text-sm font-semibold tracking-wide text-white">Services</h4>
              <ul className="mt-4 space-y-2.5">
                {FOOTER.links.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group relative inline-flex items-center py-0.5 text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      <span>{link.label}</span>
                      {/* Center-grow underline matching header */}
                      <span className="absolute inset-x-0 bottom-0 h-[1.5px] scale-x-0 origin-center bg-[#F2B705] transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/85 sm:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <p>&copy; {FOOTER.copyright}</p>
            <Link href="/privacy" className="underline underline-offset-2 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="underline underline-offset-2 hover:text-white">
              Terms of Service
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span>{CONTACT.phoneDisplay}</span>
            <a
              href={CONTACT.emailHref}
              className="underline underline-offset-2 hover:text-white"
            >
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
