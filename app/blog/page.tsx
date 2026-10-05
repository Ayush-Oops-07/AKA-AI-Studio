import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/ui/Reveal";
import { CTASection } from "@/components/shared/CTASection";

import { PAGE_META } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.blog.title,
  description: PAGE_META.blog.description,
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: PAGE_META.blog.title,
    description: PAGE_META.blog.description,
    url: "https://www.akaaistudio.in/blog",
    type: "website",
  },
};

const POSTS = [
  {
    id: "4g-speed-for-local-business",
    category: "Performance",
    title: "Why 4G loading speed matters more than heavy animations for local shops",
    excerpt:
      "Most customers in Gopalganj and Varanasi visit your website on 4G phones. If your page takes 5 seconds to load, they will close the tab and call someone else.",
    date: "February 2026",
    readTime: "3 min read",
  },
  {
    id: "whatsapp-lead-generation",
    category: "Sales & Inquiries",
    title: "Why a WhatsApp button generates 3x more customer inquiries than an email form",
    excerpt:
      "Small business customers rarely check email. A pre-filled WhatsApp link lets them ask questions instantly right from their phone.",
    date: "January 2026",
    readTime: "4 min read",
  },
  {
    id: "student-founders-journey",
    category: "Studio Notes",
    title: "Three friends, three students: building real client websites from college",
    excerpt:
      "How Adarsh, Ayush, and Kumari Abhilasha started building software for schools, hotels, and retail stores while completing our MCA studies.",
    date: "December 2025",
    readTime: "5 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Studio Notes"
        title="Notes from the studio."
        description="Practical ideas about websites, WhatsApp automation, and honest software for local businesses."
      />

      <section className="section-spacing" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.06}>
              <article className="card flex h-full flex-col p-6">
                <span className="text-eyebrow text-xs">{post.category}</span>
                <h2 className="text-heading mt-3 text-lg text-[#1F2A44]">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4A5370]">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-[#E2DDD5] pt-3 text-xs text-[#4A5370]">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Have a question or project to discuss?"
        description="Message us on WhatsApp. We are happy to chat about your website or app idea."
      />
    </>
  );
}
