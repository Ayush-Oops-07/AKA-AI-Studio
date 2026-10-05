import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { PAGE_META, CONTACT } from "@/data/content";

export const metadata: Metadata = {
  title: PAGE_META.privacy.title,
  description: PAGE_META.privacy.description,
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section
        className="pb-12 pt-32 lg:pt-40"
        style={{ backgroundColor: "#FBF6EE" }}
      >
        <div className="container-main max-w-3xl">
          <Reveal>
            <span className="text-eyebrow">Legal &amp; Privacy</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="text-heading mt-4 text-3xl leading-[1.15] text-[#1F2A44] sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-base leading-relaxed text-[#4A5370] lg:text-lg">
              Last updated: October 2026. This policy explains how AKA AI Studio collects, uses, and protects personal information in accordance with India&apos;s Digital Personal Data Protection Act, 2023.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "#FBF6EE" }}>
        <div className="container-main max-w-3xl space-y-8 text-[#1F2A44]">
          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">1. About AKA AI Studio</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              AKA AI Studio is an independent web development studio operated by three MCA students: Adarsh, Ayush, and Kumari Abhilasha. We provide custom web development, app development, and technical consulting for small businesses in India. You can reach us at{" "}
              <a href={CONTACT.emailHref} className="text-[#B84B23] underline underline-offset-4">
                {CONTACT.email}
              </a>.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">2. Information We Collect</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              We only collect information you voluntarily provide to us when requesting a quote, submitting an inquiry, or communicating directly:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#4A5370]">
              <li>Contact details: your name, business name, phone number, and email address.</li>
              <li>Project details: project requirements, design preferences, and estimated timelines.</li>
              <li>Communication history: messages sent through our contact forms or direct WhatsApp messages.</li>
            </ul>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">3. Purpose of Processing</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              We use your personal data strictly for:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#4A5370]">
              <li>Responding to your project inquiries and preparing accurate cost quotes.</li>
              <li>Communicating with you during the design, development, and launch phases.</li>
              <li>Providing post-launch technical support and updates.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              We do not sell, rent, or trade your personal details with any third parties or advertisers.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">4. Data Storage and Retention</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Your data is stored securely. Form submissions and communications are retained only for as long as necessary to fulfill project requirements and maintain active client records. If you decide not to proceed with a project, you can request that we remove your information at any time.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">5. Your Rights</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Under India&apos;s Digital Personal Data Protection Act, 2023, you have the right to:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#4A5370]">
              <li>Request a summary of personal information we hold about you.</li>
              <li>Request correction or updating of inaccurate personal data.</li>
              <li>Request erasure of your personal data from our records.</li>
              <li>Withdraw your consent for future communications.</li>
            </ul>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              To exercise any of these rights, email us at{" "}
              <a href={CONTACT.emailHref} className="text-[#B84B23] underline underline-offset-4">
                {CONTACT.email}
              </a>{" "}
              or message us directly on WhatsApp.
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">6. Cookies and Tracking</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              Our website does not use third-party marketing or cross-site tracking cookies. Any client-side storage is limited to necessary technical preferences (such as reduced motion settings or session states).
            </p>
          </div>

          <div className="rounded-xl border border-[#E2DDD5] bg-white p-6 md:p-8">
            <h2 className="text-xl font-medium text-[#1F2A44]">7. Contact and Grievance Officer</h2>
            <p className="mt-3 text-sm leading-relaxed text-[#4A5370]">
              For any questions regarding this Privacy Policy or our data handling practices, please contact:
            </p>
            <p className="mt-2 text-sm font-medium text-[#1F2A44]">
              AKA AI Studio<br />
              Email: {CONTACT.email}<br />
              WhatsApp / Phone: {CONTACT.phoneDisplay}<br />
              Location: {CONTACT.locationDisplay}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
