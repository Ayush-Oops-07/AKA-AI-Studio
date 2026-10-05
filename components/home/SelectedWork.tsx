"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ExternalLink, ArrowRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/data/content";
import { cardWipe, TRANSITION_EASE } from "@/lib/motion";

const CATEGORIES = ["All", "Education", "Hospitality", "Retail", "Events"] as const;
type Category = (typeof CATEGORIES)[number];

function getProjectCategory(type: string): Category {
  const lower = type.toLowerCase();
  if (lower.includes("school") || lower.includes("education")) return "Education";
  if (lower.includes("hotel") || lower.includes("hospitality")) return "Hospitality";
  if (lower.includes("event")) return "Events";
  return "Retail"; // Retail, materials catalog, retail website
}

export function SelectedWork() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");
  const prefersReduced = useReducedMotion();

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return PROJECTS;
    return PROJECTS.filter((p) => getProjectCategory(p.type) === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="work"
      className="section-spacing relative overflow-hidden bg-[#FBF6EE]"
    >
      <div id="selected-work" className="sr-only" aria-hidden="true" />
      {/* Background rhythm layer fading in on view (500ms) */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[#F6EDE0]"
        initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: TRANSITION_EASE }}
      />
      <div className="container-main relative z-10">
        <SectionHeading
          eyebrow="Our Work"
          title="Real websites we have built for real businesses."
          description="Every project here is live and working. Click to visit."
        />

        {/* 6. Filter chips with animated sliding pill background */}
        <div
          role="toolbar"
          aria-label="Filter projects by category"
          className="mt-8 flex flex-wrap items-center gap-2"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveFilter(cat)}
                aria-pressed={isActive}
                className={`relative flex min-h-[38px] sm:min-h-[32px] items-center justify-center rounded-full px-4 py-2 sm:py-1.5 text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-[#B84B23] ${
                  isActive ? "text-white" : "text-[#4A5370] hover:text-[#1F2A44]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId={prefersReduced ? undefined : "activeProjectFilter"}
                    className="absolute inset-0 rounded-full bg-[#B84B23] shadow-xs"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Project Grid with layout reordering and AnimatePresence */}
        <motion.div
          layout
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout={!prefersReduced}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: TRANSITION_EASE }}
                className="card group flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[#B84B23]/50 hover:shadow-md"
              >
                {/* Screenshot inside clipped frame with wipe on entrance and 1.04 zoom on hover */}
                <motion.div
                  variants={prefersReduced ? {} : cardWipe}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="relative aspect-video w-full overflow-hidden bg-[#E2DDD5]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </motion.div>

                <div className="flex flex-1 flex-col p-5">
                  <div>
                    <h3 className="text-heading text-base font-semibold text-[#1F2A44] transition-colors group-hover:text-[#B84B23]">
                      {project.client}
                    </h3>
                    <p className="mt-0.5 text-xs text-[#4A5370]">
                      {project.type} · {project.location}
                    </p>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5370]">
                    {project.problem} {project.solution}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-[6px] bg-[#FBF6EE] px-2 py-0.5 text-xs font-medium text-[#4A5370]"
                      >
                        {t}
                      </span>
                    ))}
                    <span className="rounded-[6px] bg-[#FBF6EE] px-2 py-0.5 text-xs text-[#4A5370]">
                      {project.deliveryTime}
                    </span>
                  </div>

                  {/* Actions: View case study + Visit live site */}
                  <div className="mt-5 flex items-center justify-between border-t border-[#E2DDD5]/70 pt-3">
                    <Link
                      href={`/work/${project.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1F2A44] transition-colors hover:text-[#B84B23]"
                    >
                      <span>Read case study</span>
                      <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-[#B84B23] transition-colors hover:text-[#A3471F]"
                    >
                      <span>Visit site</span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
