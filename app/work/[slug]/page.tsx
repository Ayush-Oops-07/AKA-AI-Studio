import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Clock,
  Calendar,
  Layers,
  MessageCircle,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PROJECTS, CONTACT } from "@/data/content";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) return {};
  return {
    title: `${project.client} — Case Study | AKA AI Studio`,
    description: `${project.client} (${project.type}, ${project.location}): ${project.solution}`,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.id === slug);
  if (!project) notFound();

  const index = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(index + 1) % PROJECTS.length] ?? project;

  return (
    <>
      {/* Header section */}
      <section
        className="pb-10 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-4xl">
          <Reveal>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4A5370] transition-colors hover:text-[#1F2A44]"
            >
              <ArrowLeft className="h-4 w-4" /> Back to All Work
            </Link>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              <span className="rounded-[6px] bg-[#B84B23]/10 px-2.5 py-1 text-xs font-semibold text-[#B84B23]">
                {project.type}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-[#4A5370]">
                <MapPin className="h-3.5 w-3.5 text-[#B84B23]" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-2.5 py-0.5 text-xs font-medium text-[#0B3D2E]">
                <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                Live Website
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              {project.client}
            </h1>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="mt-4 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              {project.solution}
            </p>
          </Reveal>

          <Reveal delay={0.22}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Visit Live Site
                <ExternalLink className="h-4 w-4" />
              </a>
              <Button href={CONTACT.whatsappHref} variant="whatsapp">
                <MessageCircle className="h-4 w-4" />
                Discuss a Similar Project
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Screenshot section */}
      <section className="pb-8" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main max-w-5xl">
          <Reveal>
            <div className="card overflow-hidden !p-0 shadow-sm">
              <div className="relative aspect-video w-full overflow-hidden bg-[#E2DDD5]">
                <Image
                  src={project.image}
                  alt={project.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main details + Sidebar */}
      <section className="section-spacing pt-4" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main max-w-5xl">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Left 2 cols: Problem, What We Built, Result, Highlights, Tech */}
            <div className="space-y-10 lg:col-span-2">
              <Reveal>
                <div className="card p-7 sm:p-8">
                  <span className="text-eyebrow">The Challenge</span>
                  <h2 className="text-heading mt-2 text-2xl text-[#1F2A44]">
                    The Problem
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#4A5370]">
                    {project.problem}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div className="card p-7 sm:p-8">
                  <span className="text-eyebrow">Our Solution</span>
                  <h2 className="text-heading mt-2 text-2xl text-[#1F2A44]">
                    What We Built
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#4A5370]">
                    {project.solution}
                  </p>

                  <h3 className="text-heading mt-6 text-lg text-[#1F2A44]">
                    Key Deliverables
                  </h3>
                  <div className="mt-4 space-y-2.5">
                    {project.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4A5370]"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B84B23]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="card p-7 sm:p-8">
                  <span className="text-eyebrow">Outcome</span>
                  <h2 className="text-heading mt-2 text-2xl text-[#1F2A44]">
                    The Result
                  </h2>
                  <p className="mt-3 text-base leading-relaxed text-[#4A5370]">
                    {project.result}
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="card p-7 sm:p-8">
                  <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#B84B23]" />
                    <h3 className="text-heading text-lg text-[#1F2A44]">
                      Technologies Used
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-[6px] bg-[#F3ECE0] px-3 py-1.5 text-xs font-medium text-[#1F2A44]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right sidebar: Project Summary card */}
            <div className="lg:col-span-1">
              <Reveal delay={0.14}>
                <div className="card sticky top-24 p-6">
                  <h3 className="text-heading text-lg text-[#1F2A44]">
                    Project Summary
                  </h3>

                  <dl className="mt-5 space-y-4 text-sm">
                    <div className="flex items-start justify-between border-b border-[#E2DDD5] pb-3">
                      <dt className="text-[#4A5370]">Client</dt>
                      <dd className="font-medium text-[#1F2A44] text-right">
                        {project.client}
                      </dd>
                    </div>

                    <div className="flex items-start justify-between border-b border-[#E2DDD5] pb-3">
                      <dt className="text-[#4A5370]">Location</dt>
                      <dd className="font-medium text-[#1F2A44] text-right">
                        {project.location}
                      </dd>
                    </div>

                    <div className="flex items-start justify-between border-b border-[#E2DDD5] pb-3">
                      <dt className="text-[#4A5370]">Type</dt>
                      <dd className="font-medium text-[#1F2A44] text-right">
                        {project.type}
                      </dd>
                    </div>

                    <div className="flex items-start justify-between border-b border-[#E2DDD5] pb-3">
                      <dt className="text-[#4A5370]">Delivery Time</dt>
                      <dd className="flex items-center gap-1 font-medium text-[#1F2A44]">
                        <Clock className="h-3.5 w-3.5 text-[#B84B23]" />
                        {project.deliveryTime}
                      </dd>
                    </div>

                    <div className="flex items-start justify-between border-b border-[#E2DDD5] pb-3">
                      <dt className="text-[#4A5370]">Custom Domain</dt>
                      <dd className="font-medium text-[#1F2A44]">
                        {project.hasCustomDomain ? "Yes (.info / .in)" : "Hosted Portal"}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-6 space-y-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-full"
                    >
                      Visit Live Site
                      <ExternalLink className="h-4 w-4" />
                    </a>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-whatsapp w-full"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Next case study nav */}
      <section className="pb-16" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main max-w-5xl">
          <Reveal>
            <Link
              href={`/work/${nextProject.id}`}
              className="card group flex items-center justify-between p-6 transition-all hover:border-[#B84B23]"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4A5370]">
                  Next Project
                </span>
                <h4 className="text-heading mt-1 text-xl text-[#1F2A44] group-hover:text-[#B84B23] transition-colors">
                  {nextProject.client}
                </h4>
                <p className="mt-0.5 text-xs text-[#4A5370]">
                  {nextProject.type} · {nextProject.location}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 text-[#4A5370] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#B84B23]" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA on Deep Green */}
      <section className="section-spacing section-dark">
        <div className="container-main max-w-2xl text-center">
          <Reveal>
            <span className="text-eyebrow">Work With Us</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="text-heading mt-3 text-3xl text-white sm:text-4xl">
              Want a similar website for your business?
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 text-base text-white/70">
              Talk directly with Adarsh, Ayush, and Kumari Abhilasha on WhatsApp.
              We will share timeline, scope, and fair pricing within a few hours.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={CONTACT.whatsappHref} variant="whatsapp">
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>
              <Button href={CONTACT.phoneHref} variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Call {CONTACT.phoneDisplay}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
