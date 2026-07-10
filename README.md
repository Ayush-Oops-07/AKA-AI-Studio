# AKA AI Studio — Company Website

The official marketing website for **AKA AI Studio**, founded by Ayush, Komal & Anushka. Built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

## Stack

- **Next.js 15** (App Router, server components by default)
- **React 19** + **TypeScript** (strict mode)
- **Tailwind CSS v4** (CSS-first `@theme` design tokens in `app/globals.css`)
- **Framer Motion** — scroll reveals, hover micro-interactions, hero animation
- **Lenis** — smooth scroll
- **Lucide React** — icon set

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # run the production build locally
```

## Project structure

```
app/
  page.tsx               Homepage
  about/                 About page (founders, timeline, values)
  work/page.tsx           Portfolio grid (real client projects)
  work/[slug]/page.tsx     Individual case study pages
  services/, industries/, technologies/, blog/, contact/
components/
  home/                   Hero, HeroVisual, AboutPreview, ServicesPreview, TechStrip, ReviewsSection
  layout/                 Navbar, Footer
  shared/                 Logo, FounderCard, PageHero, CTASection, ContactForm, WhatsAppFloatingButton, ServiceCard/Detail
  ui/                     Button, GlassCard, SectionHeading, Reveal, AnimatedCounter
  effects/                Preloader, CursorGlow, SmoothScrollProvider
constants/data.ts         All site copy & structured content (founders, case studies, services, contact info, FAQs...)
types/index.ts            Shared TypeScript interfaces
lib/supabaseClient.ts     Supabase client for the reviews feature
supabase/schema.sql        SQL to create the reviews table + policies
public/images/
  team/                   Founder & group photos
  work/                   Real project screenshots
```

## Content you'll likely edit

- **`constants/data.ts` → `CASE_STUDIES`** — the portfolio projects. Add a new project here and a card + case study page appear automatically.
- **`constants/data.ts` → `FOUNDERS`** — founder bios, skills, and photo paths.
- **`constants/data.ts` → `CONTACT`** — the real phone number, WhatsApp number, and email used across every button on the site (navbar, hero, footer, CTAs, contact page). Change it once here and it updates everywhere.
- **`public/images/`** — swap in new screenshots/photos any time; just point to the new path in `data.ts`.
- **`components/shared/Logo.tsx`** — the AKA logomark (inline SVG, no image file needed).

## Real client reviews (Supabase)

The homepage "What our clients actually say" section stores and displays real reviews using [Supabase](https://supabase.com) (free tier is enough).

1. Create a free project at supabase.com.
2. In the Supabase dashboard, go to **SQL Editor → New Query**, paste the contents of `supabase/schema.sql` from this repo, and run it. This creates the `reviews` table with public read/insert access.
3. Go to **Project Settings → API** and copy the **Project URL** and **anon public key**.
4. Locally: copy `.env.local.example` to `.env.local` and fill in those two values.
5. On Vercel: **Project Settings → Environment Variables** → add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`, then redeploy.

Until these env vars are set, the section shows a friendly "not connected yet" notice instead of crashing the page.

There's currently no moderation queue — new reviews appear immediately (a simple honeypot field only blocks basic bots). Remove a bad review from **Supabase → Table Editor → reviews** if needed.

## Contact & WhatsApp

Every "Book a Call" / "WhatsApp Us" button, the floating WhatsApp bubble, and the footer all read from `CONTACT` in `constants/data.ts` — update the number/email there once to change it everywhere. The contact form on `/contact` opens WhatsApp with a pre-filled message instead of sending email (no backend required).

## Notes

- No environment variables are required for the site to build and run — Supabase env vars are only needed for the reviews section to store/display data (see above).
