import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PAGE_META, PROJECTS, CONTACT } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.work.title,
  description: PAGE_META.work.description,
};

export default function WorkPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Our Work</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              Real projects for real businesses.
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              Every project below is live and working. We built these for
              schools, hotels, shops, and suppliers in Bihar and UP.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Work grid */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {PROJECTS.map((project, i) => (
              <Reveal key={project.id} delay={Math.min(i * 0.06, 0.24)}>
                <div className="group card flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B84B23]/50 hover:shadow-lg">
                  {/* Screenshot */}
                  <div className="relative aspect-video w-full overflow-hidden bg-[#E2DDD5]">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-heading text-lg text-[#1F2A44]">
                      {project.client}
                    </h2>
                    <p className="mt-1 text-xs text-[#4A5370]">
                      {project.type} · {project.location}
                    </p>

                    <div className="mt-4 space-y-2">
                      <p className="text-sm leading-relaxed text-[#4A5370]">
                        <strong className="text-[#1F2A44]">Problem:</strong>{" "}
                        {project.problem}
                      </p>
                      <p className="text-sm leading-relaxed text-[#4A5370]">
                        <strong className="text-[#1F2A44]">
                          What we built:
                        </strong>{" "}
                        {project.solution}
                      </p>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-[6px] bg-[#F3ECE0] px-2 py-0.5 text-xs font-medium text-[#4A5370]"
                        >
                          {t}
                        </span>
                      ))}
                      <span className="rounded-[6px] bg-[#F3ECE0] px-2 py-0.5 text-xs text-[#4A5370]">
                        Delivered in {project.deliveryTime}
                      </span>
                    </div>

                    <div className="mt-5 flex items-center justify-between gap-3 pt-2">
                      <Link
                        href={`/work/${project.id}`}
                        className="text-sm font-medium text-[#1F2A44] underline hover:text-[#B84B23] transition-colors"
                      >
                        Read case study &rarr;
                      </Link>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#B84B23] transition-colors hover:text-[#A3471F]"
                      >
                        Visit live site
                        <ExternalLink
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-spacing"
        style={{ backgroundColor: "#F3ECE0" }}
      >
        <div className="container-main max-w-2xl text-center">
          <SectionHeading
            eyebrow="Like What You See?"
            title="Want a website like this for your business?"
            description="Tell us what you need and we will get back to you within a few hours."
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
