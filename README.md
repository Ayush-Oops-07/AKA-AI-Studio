# AKA AI Studio — Official Website

[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![WCAG 2.1 AA](https://img.shields.io/badge/Accessibility-WCAG_2.1_AA-green)](https://www.w3.org/WAI/standards-guidelines/wcag/)
[![Playwright](https://img.shields.io/badge/Playwright-112_Passing_Tests-darkgreen?logo=playwright)](https://playwright.dev/)

The official production website for **AKA AI Studio** ([www.akaaistudio.in](https://www.akaaistudio.in/)), built and operated by three MCA students — **Adarsh**, **Ayush**, and **Kumari Abhilasha**. We design and build modern websites, mobile applications, and WhatsApp integrations for local businesses in Bihar and UP.

---

## 🛠 Tech Stack

- **Core**: [Next.js 15](https://nextjs.org/) (App Router, Static Site Generation / SSG, Server Components)
- **Runtime & Language**: React 19, TypeScript (strict mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with centralized `@theme` color tokens in `app/globals.css`
- **Animations**: [Framer Motion](https://www.framer.com/motion/) with centralized motion tokens in `lib/motion.ts` (full `prefers-reduced-motion` support)
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/) with auto-swipe and interactive pause
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database & Reviews**: [Supabase](https://supabase.com/) client with optimistic UI updates and seed review fallbacks
- **Testing**: [Playwright](https://playwright.dev/) + [@axe-core/playwright](https://github.com/dequelabs/axe-core-npm) (automated WCAG 2.1 AA compliance across 10 pages)

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/Ayush-Oops-07/AKA-AI-Studio.git
cd AKA-AI-Studio

# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Testing & Quality Assurance

The codebase includes an automated test suite verifying functional interactivity, responsive layouts, and accessibility standards across multiple device viewports (360px, 768px, 1024px, 1440px).

```bash
# Type check without emitting
npx tsc --noEmit

# Run ESLint (0 errors, 0 warnings)
npm run lint

# Production build
npm run build

# Run Playwright test suite (112 test specs)
npx playwright test

# Run Axe accessibility audit (WCAG 2.1 AA)
npx playwright test tests/accessibility.spec.ts
```

---

## 📂 Project Structure

```
├── app/
│   ├── layout.tsx             # Root layout, fonts, SEO metadata, JSON-LD
│   ├── page.tsx               # Homepage assembling all hero, services & work sections
│   ├── not-found.tsx          # Custom branded 404 page
│   ├── error.tsx              # Error boundary component
│   ├── robots.ts              # Dynamic robots.txt generation
│   ├── sitemap.ts             # Dynamic sitemap.xml generation
│   ├── manifest.ts            # Web App Manifest
│   ├── about/                 # Founders' story and timeline
│   ├── work/                  # Client portfolio and case studies
│   ├── work/[slug]/           # Dynamic case study detail pages
│   ├── services/              # Core service offerings
│   ├── industries/            # Industry-focused solutions
│   ├── technologies/          # Tech stack explanations
│   ├── blog/                  # Studio notes & practical guides
│   ├── contact/               # Contact details and multi-channel inquiry form
│   ├── privacy/               # DPDP Act 2023 compliant Privacy Policy
│   └── terms/                 # Terms of Service & project agreements
├── components/
│   ├── home/                  # Hero, CoreServices, SelectedWork, FoundersSection, ReviewsSection, FAQSection, QuickQuoteForm, FinalCTA
│   ├── layout/                # Navbar, Footer, MobileStickyBar
│   ├── shared/                # ContactForm, WhatsAppFloatingButton, Logo
│   └── ui/                    # Button, SectionHeading, Reveal, BackToTop
├── data/
│   └── content.ts             # SINGLE SOURCE OF TRUTH for all site copy, constants, stats, and links
├── lib/
│   ├── motion.ts              # Centralized Framer Motion variants and timings
│   ├── supabaseClient.ts      # Supabase DB client configuration
│   └── utils.ts               # Classname merging utilities
├── public/
│   ├── images/
│   │   ├── team/              # Team group photo & founder headshots
│   │   └── work/              # Real client project screenshots
├── tests/
│   ├── navigation-links.spec.ts     # Links, anchors, headers & 404 validation
│   ├── interactive-elements.spec.ts # Forms, FAQ accordion & reviews carousel
│   ├── responsive-visual.spec.ts    # Responsive layout (320px–1440px) & tap targets
│   └── accessibility.spec.ts        # Axe WCAG 2.1 AA automated audit
├── qa-screenshots/            # Automated viewport screenshots
└── playwright.config.ts       # Playwright multi-viewport testing configuration
```

---

## 📝 Single Content Architecture (`data/content.ts`)

All site copy, founder details, service packages, contact numbers, and SEO labels are maintained in **`data/content.ts`**:
- **`LIVE_WEBSITES_LABEL = "10+"`**: Unified live website counter label.
- **`CONTACT`**: WhatsApp numbers, phone lines, email address (`akaaistudio03@gmail.com`), and physical location.
- **`FOUNDERS`**: Academic credentials ("three MCA students"), roles, and personal introductions.
- **`PAGE_META`**: Metadata, canonical URLs, and Open Graph tags for all routes.

---

## 🛡 Security & Compliance

- **HTTP Security Headers**: Configured in `next.config.ts` including Content-Security-Policy (CSP), Strict-Transport-Security (HSTS), X-Frame-Options (DENY), X-Content-Type-Options (nosniff), Referrer-Policy, and Permissions-Policy.
- **Data Protection**: Clear Privacy Policy compliant with India's **Digital Personal Data Protection Act, 2023 (DPDP Act)** with explicit user consent on inquiry forms.
- **External Links**: Hardened with `rel="noopener noreferrer"`.
- **Zero Secrets**: Environment variables isolated in `.env.local` with `.env.example` templates provided.

---

## 👥 Founders

- **Adarsh Pandey** — Co-Founder & Technical Lead (MCA Student)
- **Ayush Kumar Sharma** — Co-Founder & Systems Lead (MCA Student)
- **Kumari Abhilasha** — Co-Founder & Product Lead (MCA Student)

---

## 📄 License

Copyright &copy; 2026 AKA AI Studio. All rights reserved.
