import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";

import { PAGE_META } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.technologies.title,
  description: PAGE_META.technologies.description,
  alternates: {
    canonical: "/technologies",
  },
  openGraph: {
    title: PAGE_META.technologies.title,
    description: PAGE_META.technologies.description,
    url: "https://www.akaaistudio.in/technologies",
    type: "website",
  },
};

const TECH_GROUPS = [
  {
    id: "web",
    label: "Web Development",
    description: "Modern, lightweight web frameworks for lightning-fast load times on 4G phones.",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    id: "backend",
    label: "Backend & Database",
    description: "Reliable databases and serverless backends with zero maintenance overhead.",
    items: ["Node.js", "Python", "Supabase (PostgreSQL)", "REST APIs"],
  },
  {
    id: "mobile",
    label: "Mobile Apps & Messaging",
    description: "Cross-platform mobile apps and direct WhatsApp customer communication.",
    items: ["React Native", "Android & iOS", "WhatsApp Cloud API", "SMS Gateways"],
  },
  {
    id: "hosting",
    label: "Domain, Hosting & DNS",
    description: "End-to-end setup so your website is secure, fast, and indexed on Google.",
    items: ["Vercel", "Custom .in & .com Domains", "Free SSL Certificates", "Google Search Console"],
  },
];

export default function TechnologiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Stack"
        title="Tools we use to build your software."
        description="We choose simple, reliable tools that keep your website fast, secure, and easy to maintain."
      />

      <section className="section-spacing" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECH_GROUPS.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div className="card h-full p-6 sm:p-7">
                <h2 className="text-heading text-xl text-[#1F2A44]">
                  {group.label}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#4A5370]">
                  {group.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-[6px] bg-[#F3ECE0] px-3 py-1.5 text-xs font-medium text-[#1F2A44]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Need advice on the right tech for your project?"
        description="Tell us what you want to achieve and we will recommend the simplest, most cost-effective approach."
      />
    </>
  );
}
