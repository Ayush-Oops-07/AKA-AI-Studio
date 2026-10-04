import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { PAGE_META, FOUNDERS, JOURNEY, CONTACT } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: PAGE_META.about.title,
  description: PAGE_META.about.description,
};

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Our Story</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              Three friends. One name. A studio built on trust.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              AKA stands for Adarsh, (K)umari Abhilasha, and Ayush — three
              MCA students who turned college projects into a real
              business. We build websites and apps for local businesses in Bihar
              and UP.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founders */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main">
          {/* Founders Group Photo */}
          <Reveal delay={0.06}>
            <div className="mx-auto mb-12 max-w-xl overflow-hidden rounded-[12px] border border-[#E2DDD5] bg-[#FBF6EE] p-2 shadow-sm transition-all duration-300 hover:shadow-md">
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[9px] bg-[#F3ECE0]">
                <Image
                  src="/images/team/group-photo.png"
                  alt="Adarsh, Ayush and Kumari Abhilasha, the three founders of AKA AI Studio"
                  fill
                  sizes="(max-width: 768px) 90vw, 580px"
                  className="object-cover object-center"
                />
              </div>
              <p className="py-2 text-center text-xs font-medium text-[#4A5370]">
                Founders of AKA AI Studio: Adarsh, Kumari Abhilasha &amp; Ayush
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {FOUNDERS.map((founder, i) => (
              <Reveal key={founder.id} delay={i * 0.08}>
                <div className="card flex flex-col items-center p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#B84B23]/50 hover:shadow-md">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full border-2 border-[#E2DDD5] bg-[#F3ECE0]">
                    <Image
                      src={founder.image}
                      alt={founder.imageAlt}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-heading mt-4 text-lg text-[#1F2A44]">
                    {founder.fullName}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[#B84B23]">
                    {founder.role}
                  </p>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    {founder.study}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
                    {founder.personalLine}
                  </p>
                  {founder.portfolioUrl && (
                    <a
                      href={founder.portfolioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 text-xs font-medium text-[#B84B23] underline"
                    >
                      {founder.portfolioUrl.replace(/^https?:\/\//, "")}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#F3ECE0" }}
      >
        <div className="container-main">
          <SectionHeading
            eyebrow="Our Journey"
            title="How three friends became a studio."
            align="center"
            className="mx-auto"
          />
          <div className="relative mx-auto mt-14 max-w-2xl">
            <div className="absolute left-5 top-0 h-full w-px bg-[#E2DDD5] sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-10">
              {JOURNEY.map((entry, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <Reveal key={entry.year} delay={i * 0.06}>
                    <div
                      className={`relative flex flex-col gap-1.5 pl-14 sm:w-1/2 sm:pl-0 ${
                        isLeft
                          ? "sm:pr-10 sm:text-right"
                          : "sm:ml-auto sm:pl-10 sm:text-left"
                      }`}
                    >
                      <span
                        className="absolute left-3 top-1.5 h-4 w-4 rounded-full border-[3px] border-[#F3ECE0] bg-[#B84B23] sm:left-auto"
                        style={
                          isLeft
                            ? { right: "-8px", left: "auto" }
                            : { left: "-8px" }
                        }
                      />
                      <span className="text-eyebrow text-xs">
                        {entry.year}
                      </span>
                      <h3 className="text-heading text-lg text-[#1F2A44]">
                        {entry.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#4A5370]">
                        {entry.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-2xl text-center">
          <SectionHeading
            eyebrow="Work With Us"
            title="Want to build something together?"
            description="We take on a small number of projects at a time so every client gets our full attention."
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
    </>
  );
}
