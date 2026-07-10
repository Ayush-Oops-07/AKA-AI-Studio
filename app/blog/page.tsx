import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";
import { BLOG_POSTS } from "@/constants/data";

export const metadata: Metadata = {
  title: "Blog — AKA AI Studio",
  description: "Notes on AI engineering, product design, and building software studios — from the AKA AI Studio team.",
};

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Notes from the studio."
        description="Thoughts on AI engineering, product design, and building software the right way — from Ayush, Komal, and Anushka."
      />

      <section className="pb-24">
        <div className="container-shell grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.05}>
              <article className="glass-card group flex h-full flex-col p-7">
                <div
                  className="mb-5 h-36 rounded-2xl bg-gradient-to-br opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
                  style={{ backgroundImage: "linear-gradient(135deg, rgba(67,97,238,0.18), rgba(139,92,246,0.18), rgba(34,201,224,0.18))" }}
                />
                <span className="text-mono-eyebrow gradient-text">{post.category}</span>
                <h3 className="text-display mt-2 text-lg font-medium leading-snug text-ink">{post.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-dim">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-ink-faint">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection title="Have a topic you'd like us to cover?" description="Reach out and we'll consider it for a future post." />
    </>
  );
}
