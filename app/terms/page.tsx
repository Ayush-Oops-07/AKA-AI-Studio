import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { PAGE_META, CONTACT } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.terms.title,
  description: PAGE_META.terms.description,
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Agreement &amp; Terms</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              Terms of Service
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              Last updated: October 2026. These terms outline how AKA AI Studio works with clients on website and application development projects.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main max-w-3xl space-y-8 text-[#1F2A44]">
          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">1. Services and Scope of Work</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              AKA AI Studio provides custom website design, web development, mobile application development, and technical consulting. For every project, we establish a written scope of work specifying the pages, features, and timeline before development begins.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">2. Quotes and Payment Terms</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              All project quotes are fixed and agreed upon prior to starting work. Payments are milestone-based: an advance payment upon project kickoff, a progress milestone upon interactive demo review, and the final balance upon successful deployment to your domain. Payments can be completed via UPI, bank transfer, or net banking.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">3. Client Content and Approvals</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Clients are responsible for providing business text, product photos, pricing details, and logos required for their project. Timely feedback during demo reviews ensures the agreed delivery schedule is maintained.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">4. Intellectual Property and Ownership</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Upon receipt of full payment, you own the website files, design assets, and code created specifically for your project. AKA AI Studio reserves the right to display the completed website and screenshots in our portfolio and case studies as examples of our work.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">5. Revisions and Scope Changes</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Each project proposal includes standard revision rounds to refine layouts, typography, and styling. Significant additions or new features requested outside the initial agreed scope will be quoted separately before implementation.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">6. Post-Launch Support and Warranty</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Every launched website includes complimentary technical support for 30 days following deployment to address any unforeseen bugs or layout issues. Ongoing maintenance packages are available if you require continuous updates or new content additions.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">7. Limitation of Liability</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              While we test all projects rigorously across modern browsers and screen sizes, AKA AI Studio is not liable for indirect or consequential damages, third-party hosting outages, or loss of profits arising from website operation. Our total liability is limited to the fees paid for the specific project.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">8. Contact Us</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              If you have any questions regarding these terms, please contact us at{" "}
              <a href={CONTACT.emailHref} className="text-[#B84B23] underline underline-offset-4">
                {CONTACT.email}
              </a>{" "}
              or via WhatsApp at {CONTACT.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
