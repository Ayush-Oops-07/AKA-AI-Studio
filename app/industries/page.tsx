import type { Metadata } from "next";
import {
  GraduationCap,
  Building2,
  Store,
  Truck,
  CalendarCheck,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";

import { PAGE_META } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.industries.title,
  description: PAGE_META.industries.description,
  alternates: {
    canonical: "/industries",
  },
  openGraph: {
    title: PAGE_META.industries.title,
    description: PAGE_META.industries.description,
    url: "https://www.akaaistudio.in/industries",
    type: "website",
  },
};

const INDUSTRIES = [
  {
    id: "education",
    icon: GraduationCap,
    name: "Schools & Colleges",
    blurb:
      "Admissions information, course details, campus photo galleries, and direct WhatsApp inquiries for parents and students.",
  },
  {
    id: "hospitality",
    icon: Building2,
    name: "Hotels & Marriage Halls",
    blurb:
      "Room tours, banquet lawn capacity, package pricing, and quick WhatsApp booking buttons for wedding parties and travelers.",
  },
  {
    id: "retail",
    icon: Store,
    name: "Retail & Electronics Stores",
    blurb:
      "Branch directories, product showcase, and store contact numbers so customers can check availability before visiting.",
  },
  {
    id: "suppliers",
    icon: Truck,
    name: "Suppliers & Building Materials",
    blurb:
      "Fast digital catalogs for cement, steel, and hardware that contractors can easily browse from construction sites on 4G phones.",
  },
  {
    id: "events",
    icon: CalendarCheck,
    name: "Events & Festive Celebrations",
    blurb:
      "Fast event pages showing performer lineups, schedule timings, venue maps, and WhatsApp ticket inquiries.",
  },
  {
    id: "healthcare",
    icon: Stethoscope,
    name: "Clinics & Doctors",
    blurb:
      "Doctor profiles, consultation hours, clinic address, and direct WhatsApp appointment booking for patients.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Build For"
        title="Businesses we understand and serve."
        description="We build practical websites for local businesses in Bihar and UP. No jargon, just clear websites that bring customers."
      />

      <section className="section-spacing" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <Reveal key={ind.id} delay={i * 0.05}>
                <div className="card flex h-full flex-col p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#B84B23]/10 text-[#B84B23]">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>
                  <h2 className="text-heading mt-4 text-xl text-[#1F2A44]">
                    {ind.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                    {ind.blurb}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTASection
        title="Do you run a business in another field?"
        description="We are quick to understand new business models. Tell us about your business and we will share how a website can help."
      />
    </>
  );
}
