/**
 * ──────────────────────────────────────────────────────────
 * AKA AI Studio — Single Content File
 * ──────────────────────────────────────────────────────────
 * All user-visible text lives here. Edit this file to update
 * copy across the entire site. Search for [FILL] to find
 * placeholders that need real data.
 *
 * Language: English only (en-IN). No Hindi or Devanagari.
 * ──────────────────────────────────────────────────────────
 */

/* ─── SITE META ─── */

export const SITE = {
  name: "AKA AI Studio",
  tagline: "Three friends. Real websites for real businesses.",
  description:
    "We are Adarsh, Ayush, and Kumari Abhilasha — three MCA students who build websites, apps, and AI tools for local businesses in Bihar and UP. Direct communication, fair pricing, and real shipped work.",
  url: "https://www.akaaistudio.in",
  logo: "/images/logo.jpeg",
};

export const LIVE_WEBSITES_LABEL = "10+";
export const LIVE_WEBSITES_COUNT = 10;

/* ─── CONTACT ─── */

const WHATSAPP_NUMBER = "918235308885"; // Ayush (Primary)
const ADARSH_WHATSAPP_NUMBER = "919369791938"; // Adarsh

export const CONTACT = {
  phoneDisplay: "+91 82353 08885",
  phoneHref: "tel:+918235308885",
  adarshPhoneDisplay: "+91 93697 91938",
  adarshPhoneHref: "tel:+919369791938",
  email: "akaaistudio03@gmail.com",
  emailHref: "mailto:akaaistudio03@gmail.com",
  whatsappNumber: WHATSAPP_NUMBER,
  adarshWhatsappNumber: ADARSH_WHATSAPP_NUMBER,
  // [FILL] Update location to your real base city
  locationDisplay: "Based in Gopalganj, Bihar and Varanasi, UP",
  supportHours: "Mon to Sat, 9 AM – 8 PM IST",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi AKA AI Studio! I would like to discuss building a website for my business."
  )}`,
  adarshWhatsappHref: `https://wa.me/${ADARSH_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi Adarsh! I would like to discuss a project with AKA AI Studio."
  )}`,
  whatsappHrefWithMessage: (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
};

/* ─── NAVIGATION ─── */

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#why-us" },
  { label: "FAQ", href: "/#faq" },
];

/* ─── HERO ─── */

// Alternative headlines (kept as options):
// 1. "We build the website. You run the business."
// 2. "Your business, open online all day, every day."
// 3. "A website you understand, from people who reply."

export const HERO = {
  label: "Three friends. Three students.",
  headline: "Your shop closes at 9. Your website never does.",
  supporting:
    "We are three MCA students who build simple, good-looking websites for shops, schools and hotels. You talk to us directly, and we reply fast.",
  trustLine: "No middlemen. Honest pricing. Replies within one business day.",
  ctaPrimary: "Chat on WhatsApp",
  ctaSecondary: "See our work",
  founderPhoto: "/images/team/group-photo.avif",
  founderPhotoAlt:
    "Adarsh, Ayush and Kumari Abhilasha, the three founders of AKA AI Studio",
  floatingBadge1: "3 founders. Direct support.",
  floatingBadge2: `${LIVE_WEBSITES_LABEL} websites live`,
};

/* ─── VERIFIED STATS (three real facts only, no percentages) ─── */

export const REAL_STATS = [
  { value: LIVE_WEBSITES_COUNT, suffix: "+", label: "websites live" },
  { value: 3, suffix: "", label: "founders you talk to directly" },
  { value: "Replies", suffix: "", label: "within one business day", isText: true },
];

/* ─── JOURNEY TIMELINE ─── */

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

// [FILL] Replace with your real dates and facts
export const JOURNEY: TimelineEntry[] = [
  {
    year: "2022",
    title: "Three friends, one idea",
    description:
      "Adarsh, Ayush, and Kumari Abhilasha started building software together as students. The name AKA came from our initials.",
  },
  {
    year: "2023",
    title: "First real client",
    description:
      "We built our first business website for a local school in Gopalganj, Bihar. Word spread through WhatsApp.",
  },
  {
    year: "2024",
    title: "More businesses, more trust",
    description:
      "Hotels, retail stores, and suppliers started reaching out. We shipped websites for Mohit Enterprise Group and Hotel Sarkar.",
  },
  {
    year: "2025",
    title: "AKA AI Studio takes shape",
    description:
      "We formalised into AKA AI Studio and started adding AI chatbots and WhatsApp automation to our services.",
  },
  {
    // [FILL] Update the count with your real number
    year: "2026",
    title: `${LIVE_WEBSITES_LABEL} live websites and counting`,
    description:
      "Today we serve schools, hotels, shops, and suppliers across Bihar and UP with websites, apps, and automation.",
  },
];

/* ─── SELECTED WORK (CASE STUDIES) ─── */

export interface Project {
  id: string;
  client: string;
  type: string;
  location: string;
  problem: string;
  solution: string;
  result: string;
  highlights: string[];
  tech: string[];
  deliveryTime: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  hasCustomDomain: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "nav-bharat-school",
    client: "Nav Bharat Public School",
    type: "School Website",
    location: "Thawe, Gopalganj, Bihar",
    problem:
      "Parents had no easy way to check admissions, curriculum, or contact the school administration online without visiting in person.",
    solution:
      "We built a fast, mobile-friendly school website featuring admissions guidelines, school calendar, photo galleries, and an instant WhatsApp inquiry button.",
    result:
      "Parents can now check admission notices and syllabus on their phones. Direct inquiries via WhatsApp increased significantly during admissions season.",
    highlights: [
      "Admissions information and downloadable syllabus",
      "Direct WhatsApp contact for the admissions desk",
      "Mobile-friendly layout tested on 4G connections",
      "Custom domain configuration and Google Search indexing",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    deliveryTime: "2 weeks",
    image: "/images/work/nav-bharat-school.jpg",
    imageAlt: "Screenshot of the Nav Bharat Public School website showing the homepage",
    liveUrl: "https://navbharatpublicschool.info",
    hasCustomDomain: true,
  },
  {
    id: "mohit-enterprise",
    client: "Mohit Enterprise Group",
    type: "Retail Business Website",
    location: "Thawe and Gopalganj, Bihar",
    problem:
      "A growing multi-store electronics business had no online presence to show their store branches, contact numbers, and latest products.",
    solution:
      "A clean group website at mohitmobile.in listing all store locations, latest smartphone arrivals, and direct WhatsApp contact for each branch.",
    result:
      "Customers quickly find store hours and message managers on WhatsApp before visiting. Increased footfall and phone inquiries across both towns.",
    highlights: [
      "Multi-store branch directory with maps and hours",
      "Direct WhatsApp messaging link for each branch",
      "Showcase for newest smartphone arrivals",
      "Sub-second page load times on local mobile networks",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    deliveryTime: "2 weeks",
    image: "/images/work/mohit-enterprise.jpg",
    imageAlt: "Screenshot of the Mohit Enterprise Group website showing store listings",
    liveUrl: "https://mohitmobile.in",
    hasCustomDomain: true,
  },
  {
    id: "hotel-sarkar",
    client: "Hotel Sarkar and Marriage Hall",
    type: "Hotel and Banquet Website",
    location: "Thawe, Gopalganj, Bihar",
    problem:
      "Guests and families planning weddings had no way to see rooms, lawns, banquet capacity, or packages online.",
    solution:
      "A website showcasing AC rooms, marriage lawn, banquet hall amenities, catering packages, and an instant WhatsApp booking button.",
    result:
      "Direct booking inquiries via WhatsApp rose, especially during wedding and festive seasons in Thawe.",
    highlights: [
      "High-resolution room and banquet lawn photo tour",
      "Wedding package and catering details in plain English",
      "One-tap WhatsApp booking button for prospective guests",
      "Optimised for fast loading on rural and semi-urban connections",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    deliveryTime: "10 days",
    image: "/images/work/hotel-sarkar.jpg",
    imageAlt: "Screenshot of the Hotel Sarkar website showing rooms and banquet hall",
    liveUrl: "https://hotel-sarkar.vercel.app/",
    hasCustomDomain: false,
  },
  {
    id: "sandeep-traders",
    client: "Sandeep Traders",
    type: "Building Materials Catalog",
    location: "Bihar",
    problem:
      "Contractors had to call or visit in person to check which brands and materials of cement, TMT bars, and hardware were in stock.",
    solution:
      "A lightweight, fast-loading digital catalog of cement, steel bars, and hardware — optimised for 4G phones — with a direct call and WhatsApp quote button.",
    result:
      "Contractors can browse available building materials from construction sites and request quick WhatsApp quotes with zero page lag.",
    highlights: [
      "Categorized catalog of cement, TMT steel, and plumbing items",
      "Quick quote request via pre-filled WhatsApp message",
      "Extremely lightweight bundle that loads in under 1 second",
      "Direct call button for urgent material inquiries",
    ],
    tech: ["HTML", "CSS", "JavaScript"],
    deliveryTime: "1 week",
    image: "/images/work/sandeep-traders.jpg",
    imageAlt: "Screenshot of the Sandeep Traders building materials catalog website",
    liveUrl: "https://mandeepkumarkushwaha-cmyk.github.io/sandeep-traders/",
    hasCustomDomain: false,
  },
  {
    id: "national-model-school",
    client: "National Model School",
    type: "School Website",
    location: "Bihar",
    problem:
      "The school needed a professional online presence to share academic notices, campus facilities, and attract new admissions.",
    solution:
      "A modern, responsive school website showing academics, campus facilities, co-curricular activities, and direct contact options.",
    result:
      "Gave the school a trustworthy online identity, helping parents in Bihar explore the curriculum and get in touch with administration.",
    highlights: [
      "Clear academic structure and curriculum overview",
      "School facility highlights and campus photos",
      "Admissions inquiry form and direct phone contacts",
      "Fully responsive across smartphones and tablets",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    deliveryTime: "2 weeks",
    image: "/images/work/national-model-school.jpg",
    imageAlt: "Screenshot of the National Model School website showing school information",
    liveUrl: "https://national-model-school.vercel.app/",
    hasCustomDomain: false,
  },
  {
    id: "navratri-vibes-2026",
    client: "Navratri Vibes with Dandiya Beats 2026",
    type: "Event Website",
    location: "Bihar",
    problem:
      "The organisers needed a way to share event dates, daily schedules, artist details, and ticket booking links online.",
    solution:
      "A vibrant event website with schedule timings, venue details, guest artists, and ticket booking information.",
    result:
      "Handled high visitor traffic smoothly during the festive campaign with quick ticket inquiries on WhatsApp.",
    highlights: [
      "Event schedule and artist lineup display",
      "Venue directions and entry guidelines",
      "Direct WhatsApp booking for group passes",
      "Sub-second page response even under campaign traffic surges",
    ],
    tech: ["Next.js", "Tailwind CSS"],
    deliveryTime: "1 week",
    image: "/images/work/navratri-vibes-2026.jpg",
    imageAlt: "Screenshot of the Navratri Vibes event website showing event details",
    liveUrl: "https://www.elitesgroup.org/",
    hasCustomDomain: true,
  },
];

/* ─── SERVICES (4 core + extras) ─── */

export interface Service {
  id: string;
  title: string;
  description: string;
  // [FILL] Replace with your real starting rates, or "Rate on request"
  price: string;
  icon: "globe" | "message-circle" | "smartphone" | "bot";
}

export const SERVICES: Service[] = [
  {
    id: "business-website",
    title: "Business Website",
    description:
      "A fast, mobile-friendly website for your shop, school, hotel, or office — with your own domain name, WhatsApp button, and everything set up for Google search.",
    price: "Rate on request",
    icon: "globe",
  },
  {
    id: "whatsapp-setup",
    title: "WhatsApp Inquiry and Booking",
    description:
      "We set up WhatsApp buttons on your website so customers can message you directly. We can also automate replies and booking confirmations.",
    price: "Rate on request",
    icon: "message-circle",
  },
  {
    id: "mobile-app",
    title: "Mobile App",
    description:
      "An Android or iOS app for your business — whether it is a product catalog, booking system, or customer portal. One codebase, works on both platforms.",
    price: "Rate on request",
    icon: "smartphone",
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot or Automation",
    description:
      "A smart chatbot for your website or WhatsApp that answers customer questions automatically — or custom automations that save you hours of manual work.",
    price: "Rate on request",
    icon: "bot",
  },
];

export const SERVICES_ALSO_AVAILABLE =
  "We also take on projects for cloud hosting, data pipelines, cybersecurity, and consulting — reach out and we will discuss what you need.";

/* ─── HOW WE WORK (3 steps) ─── */

export interface Step {
  number: string;
  title: string;
  description: string;
}

export const HOW_WE_WORK: Step[] = [
  {
    number: "1",
    title: "Talk",
    description:
      "You tell us what your business needs. We listen, ask questions, and understand the problem. No jargon.",
  },
  {
    number: "2",
    title: "Build",
    description:
      "We design and develop your website or app. You see progress every few days on WhatsApp. You give feedback, we improve.",
  },
  {
    number: "3",
    title: "Go Live",
    description:
      "We set up your domain, hosting, and everything else. We also show you how to use your new website — a short training session included.",
  },
];

/* ─── FOUNDERS ─── */

export interface Founder {
  id: string;
  name: string;
  fullName: string;
  role: string;
  // [FILL] Replace with real details about what each person studies
  study: string;
  personalLine: string;
  image: string;
  imageAlt: string;
  portfolioUrl?: string;
}

export const FOUNDERS: Founder[] = [
  {
    id: "adarsh",
    name: "Adarsh",
    fullName: "Adarsh Pandey",
    role: "Development and Systems",
    // [FILL] Update with real college and course
    study: "MCA student",
    personalLine:
      "Adarsh writes the code. He handles full-stack development, sets up domains and hosting, and makes sure everything runs fast.",
    image: "/images/team/adarsh-pandey.jpg",
    imageAlt: "Photo of Adarsh Pandey, co-founder of AKA AI Studio",
    portfolioUrl: "https://adarsh-pandey.in",
  },
  {
    id: "ayush",
    name: "Ayush",
    fullName: "Ayush Kumar Sharma",
    role: "AI and Backend",
    // [FILL] Update with real college and course
    study: "MCA student",
    personalLine:
      "Ayush handles AI features, backend logic, and automation. If your website needs a chatbot or smart replies, he builds it.",
    image: "/images/team/ayush-kumar-sharma.jpg",
    imageAlt: "Photo of Ayush Kumar Sharma, founder of AKA AI Studio",
    portfolioUrl: "https://ayushops.in",
  },
  {
    id: "abhilasha",
    name: "Kumari Abhilasha",
    fullName: "Kumari Abhilasha",
    role: "Design and Client Communication",
    // [FILL] Update with real college and course
    study: "MCA student",
    personalLine:
      "Abhilasha designs the look and feel of every project and is your main point of contact. She makes sure the final product matches what you asked for.",
    image: "/images/team/kumari-abhilasha.png",
    imageAlt: "Photo of Kumari Abhilasha, co-founder of AKA AI Studio",
    portfolioUrl: "https://abhilasha-rai.in",
  },
];

/* ─── REVIEWS (seed data — real client reviews only) ─── */

export interface Review {
  id: string;
  name: string;
  business: string | null;
  rating: number;
  message: string;
  created_at: string;
}

export const SEED_REVIEWS: Review[] = [
  {
    id: "seed-1",
    name: "Sheshnath Gupta",
    business: "Mohit Enterprise Group, Thawe",
    rating: 5,
    message:
      "AKA AI Studio built our official group website mohitmobile.in. They delivered a fast, clean portal on time. Our customers can now easily find our stores and reach us on WhatsApp.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 14).toISOString(),
  },
  {
    id: "seed-2",
    name: "School Administration",
    business: "Nav Bharat Public School, Gopalganj",
    rating: 5,
    message:
      "The new website navbharatpublicschool.info has made it much easier for parents to check admissions and school information. It loads fast on mobile phones.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30).toISOString(),
  },
  {
    id: "seed-3",
    name: "Hotel Management",
    business: "Hotel Sarkar and Marriage Hall, Thawe",
    rating: 5,
    message:
      "Our website shows our rooms, banquet hall, and marriage lawn nicely. The WhatsApp button brings us direct booking inquiries from wedding families and travellers.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 45).toISOString(),
  },
  {
    id: "seed-4",
    name: "Sandeep Kumar",
    business: "Sandeep Traders, Bihar",
    rating: 5,
    message:
      "The digital catalog for our cement, steel, and building materials is fast and easy for contractors to browse on their phones. We get more quote requests now.",
    created_at: new Date(Date.now() - 1000 * 60 * 60 * 24 * 60).toISOString(),
  },
];

/* ─── FAQs ─── */

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "f1",
    question: "How is AKA AI Studio different from other agencies?",
    answer:
      "We are three student founders, not a big agency. You talk directly to the people who build your website. No salespeople, no middlemen. Fixed pricing with no hidden fees.",
  },
  {
    id: "f2",
    question: "How do we communicate during the project?",
    answer:
      "We communicate directly on WhatsApp, phone calls, or Google Meet — whatever works best for you. You get direct updates with no middlemen.",
  },
  {
    id: "f3",
    question: "Do you help with domain purchase and hosting?",
    answer:
      "Yes, end to end. We set up your custom domain (.in, .com, .info), SSL certificate, fast hosting, business email, and Google indexing.",
  },
  {
    id: "f4",
    question: "How fast can you build and launch a website?",
    answer:
      "A standard business website takes 1 to 2 weeks. Custom web applications and apps take 4 to 8 weeks depending on features.",
  },
  {
    id: "f5",
    question: "What are your payment terms?",
    answer:
      "Payments are milestone-based — advance payment to start, midway demo review, and final payment on launch. You can pay via UPI, net banking, or bank transfer.",
  },
];

/* ─── CTA ─── */

export const CTA = {
  headline: "Ready to get your business online?",
  supporting:
    "Tell us what you need. We will get back to you within a few hours.",
  whatsappLabel: "Chat on WhatsApp",
  callLabel: "Call Us",
};

/* ─── FOOTER ─── */

export const FOOTER = {
  tagline:
    "Websites, apps, and AI tools for local businesses — built by three MCA students from Bihar and UP.",
  // [FILL] Update with your real base location
  location: "Based in Gopalganj, Bihar and Varanasi, UP",
  copyright: `${new Date().getFullYear()} AKA AI Studio`,
  links: {
    company: [
      { label: "Work", href: "/#work" },
      { label: "Pricing", href: "/#pricing" },
      { label: "Our Journey", href: "/about" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact Us", href: "/contact" },
    ],
    services: [
      { label: "Business Website", href: "/services#business-website" },
      { label: "WhatsApp Setup", href: "/services#whatsapp-setup" },
      { label: "Mobile App", href: "/services#mobile-app" },
      { label: "AI Chatbot", href: "/services#ai-chatbot" },
    ],
    explore: [
      { label: "Industries We Serve", href: "/industries" },
      { label: "Technologies", href: "/technologies" },
      { label: "Studio Blog", href: "/blog" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
};

/* ─── JSON-LD (LocalBusiness) ─── */

export const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AKA AI Studio",
  description: SITE.description,
  url: SITE.url,
  email: CONTACT.email,
  telephone: CONTACT.phoneDisplay,
  // [FILL] Update address with your real base
  address: {
    "@type": "PostalAddress",
    addressLocality: "Gopalganj",
    addressRegion: "Bihar",
    addressCountry: "IN",
  },
  founder: [
    { "@type": "Person", name: "Adarsh Pandey" },
    { "@type": "Person", name: "Ayush Kumar Sharma" },
    { "@type": "Person", name: "Kumari Abhilasha" },
  ],
  sameAs: [CONTACT.whatsappHref],
};

/* ─── PAGE META ─── */

export const PAGE_META = {
  home: {
    title: "AKA AI Studio — Websites and Apps for Local Businesses",
    description:
      "We are three MCA students who build simple, good-looking websites for shops, schools and hotels. Direct contact with the founders, fair prices, and fast replies on WhatsApp.",
  },
  about: {
    title: "Our Journey — AKA AI Studio",
    description:
      "Meet Adarsh, Ayush, and Kumari Abhilasha — the three MCA students behind AKA AI Studio. Our story, our work, and why local businesses trust us.",
  },
  services: {
    title: "Services — AKA AI Studio",
    description:
      "Business websites, WhatsApp booking setup, mobile apps, and AI chatbots — built for local businesses by AKA AI Studio.",
  },
  work: {
    title: "Our Work — AKA AI Studio",
    description:
      "Real websites built for real businesses — schools, hotels, retail stores, and suppliers.",
  },
  contact: {
    title: "Contact Us — AKA AI Studio",
    description:
      "Get in touch with AKA AI Studio on WhatsApp, phone, or email. Talk directly to the three founders.",
  },
  privacy: {
    title: "Privacy Policy — AKA AI Studio",
    description:
      "Privacy policy for AKA AI Studio. How we handle inquiries and personal data in line with India's Digital Personal Data Protection Act, 2023.",
  },
  terms: {
    title: "Terms of Service — AKA AI Studio",
    description:
      "Terms of service, scope of work, payment terms, and delivery agreements for client projects with AKA AI Studio.",
  },
  industries: {
    title: "Industries We Serve — AKA AI Studio",
    description:
      "Websites, WhatsApp booking setup, and custom web tools for schools, hotels, banquet halls, and retail businesses across Bihar and UP.",
  },
  technologies: {
    title: "Technologies We Use — Next.js, React, Tailwind CSS | AKA AI Studio",
    description:
      "Modern, fast frameworks and tools AKA AI Studio uses to build sub-second websites, mobile applications, and WhatsApp automations.",
  },
  blog: {
    title: "Notes from the Studio — Web Development & SEO Insights | AKA AI Studio",
    description:
      "Practical tips and insights on building websites, WhatsApp lead generation, 4G performance, and local business SEO in India.",
  },
};

/* ─── SECTION 1: WHY WORK WITH THREE STUDENTS (id="why-us") ─── */

export const WHY_US = {
  id: "why-us",
  eyebrow: "Why Us",
  heading: "Why work with three students?",
  intro: "Because you get things big agencies often can't offer.",
  cards: [
    {
      title: "You talk to the founders",
      description:
        "No account managers and no waiting. The people building your website are the people replying to you.",
      icon: "users",
    },
    {
      title: "Fast replies",
      description:
        "We answer on WhatsApp, usually within one business day.",
      icon: "zap",
    },
    {
      title: "Fair prices",
      description:
        "Student-friendly rates and a clear quote before we start. No hidden charges.",
      icon: "tag",
    },
    {
      title: "Fresh skills",
      description:
        "We learn the newest tools every day, so your website will not look old in a year.",
      icon: "sparkles",
    },
  ],
  honestNote:
    "We take a limited number of projects at a time, so every client gets real attention.",
};

/* ─── SECTION 2: PRICING (id="pricing") ─── */

export const PRICING = {
  id: "pricing",
  eyebrow: "Pricing",
  heading: "Simple pricing, no surprises",
  intro:
    "Pick a starting point. We will confirm the final price after a quick chat.",
  packages: [
    {
      id: "starter",
      name: "Starter",
      description:
        "A clean 1 to 3 page website for a small shop, clinic or service.",
      price: "Rate on request",
      popular: false,
      features: [
        "Mobile-friendly design",
        "WhatsApp button",
        "Contact form",
        "Google Maps link",
      ],
      delivery: null,
      whatsappMessage:
        "Hi AKA AI Studio! I would like to ask about the Starter package.",
    },
    {
      id: "business",
      name: "Business",
      badge: "Most popular",
      description:
        "A full website for a school, hotel or growing business.",
      price: "Rate on request",
      popular: true,
      features: [
        "Up to multiple pages",
        "WhatsApp and inquiry form",
        "Photo gallery",
        "Basic Google search setup",
      ],
      delivery: null,
      whatsappMessage:
        "Hi AKA AI Studio! I would like to ask about the Business package.",
    },
    {
      id: "custom",
      name: "Custom",
      description:
        "Apps, booking systems or automation for special needs.",
      price: "Let's talk",
      popular: false,
      features: [
        "Planning call",
        "Custom design",
        "Step-by-step progress updates",
      ],
      delivery: null,
      whatsappMessage:
        "Hi AKA AI Studio! I would like to ask about the Custom package.",
    },
  ],
  note: "Domain and hosting costs are discussed upfront, before we start.",
};

/* ─── SECTION 3: AFTER-LAUNCH PROMISE AND OWNERSHIP (id="support") ─── */

export const AFTER_LAUNCH = {
  id: "support",
  eyebrow: "Our Promise",
  heading: "We don't disappear after launch",
  intro: "A website is a long-term tool. We want to be the people you call when you need help.",
  points: [
    {
      title: "Free fixes after launch",
      description:
        "Free fixes after launch. Ask us for the exact period.",
    },
    {
      title: "You own your website",
      description: "The domain and your content belong to you.",
    },
    {
      title: "Need changes later?",
      description:
        "Message us on WhatsApp and we will tell you the cost and time before we start.",
    },
  ],
  closing:
    "A website is a long-term tool. We want to be the people you call when you need help.",
};

/* ─── SECTION 4: FREE WEBSITE CHECK (id="free-check") ─── */

export const FREE_CHECK = {
  id: "free-check",
  showFreeCheck: true,
  eyebrow: "Free Check",
  heading: "Not sure what to fix? Get a free check.",
  body: "Send us your website, Instagram page or Google Maps listing. We will reply with 3 simple tips to get more customers. Free, with no pressure.",
  buttonText: "Send my link on WhatsApp",
  whatsappMessage: "Hi, I would like a free check. Here is my link: ",
};

/* ─── SECTION 5: FAQ (id="faq") ─── */

export const FAQ = {
  id: "faq",
  eyebrow: "FAQ",
  heading: "Questions we hear most",
  intro:
    "Clear answers to the things small business owners ask us before getting started.",
  items: [
    {
      question: "How long does a website take?",
      answer:
        "Most simple websites take about one to two weeks. Bigger projects take longer, and we tell you the timeline before we start.",
    },
    {
      question: "How much does it cost?",
      answer:
        "See our packages above. After a short chat, we give you a clear quote in writing before any work begins.",
    },
    {
      question: "Do I own my website?",
      answer: "You own your website. The domain and your content belong to you.",
    },
    {
      question: "What do you need from me?",
      answer:
        "Your business name, photos, a short description and your contact details. If you do not have photos, we will help you plan them.",
    },
    {
      question: "Can I ask for changes while you build?",
      answer:
        "Yes. You see progress as we go, and small changes are part of the process.",
    },
    {
      question: "What happens after launch?",
      answer:
        "We offer free fixes after launch and stay available on WhatsApp for any future updates.",
    },
    {
      question: "How do I pay?",
      answer: "We agree on the payment plan with you before we start.",
    },
    {
      question: "Are you really students?",
      answer:
        "Yes. We are three MCA students, and this studio is our real work. You will talk to the founders directly, not to a sales team.",
    },
  ],
};

/* ─── SECTION 6: INDUSTRIES WE HELP (id="industries") ─── */

export const INDUSTRIES_WE_HELP = {
  id: "industries",
  eyebrow: "Industries",
  heading: "Who we build for",
  intro: "Five types of businesses we work with regularly.",
  items: [
    {
      title: "Schools",
      description:
        "Admission inquiries, notices and a clear online presence for parents.",
      icon: "graduation-cap",
    },
    {
      title: "Hotels and stays",
      description:
        "Photos, rooms, rates and booking inquiries in one place.",
      icon: "hotel",
    },
    {
      title: "Shops",
      description:
        "Show your products and let customers message you directly.",
      icon: "shopping-bag",
    },
    {
      title: "Suppliers",
      description:
        "A simple catalogue so buyers can find and contact you.",
      icon: "truck",
    },
    {
      title: "Events",
      description: "Dates, galleries and registration made easy.",
      icon: "calendar",
    },
  ],
};

/* ─── SECTION 9: QUICK QUOTE FORM (id="quote") ─── */

export const QUICK_QUOTE = {
  id: "quote",
  eyebrow: "Quick Quote",
  heading: "Tell us about your business",
  intro: "Two minutes. We will reply with ideas and a price range.",
  businessTypes: [
    "School",
    "Hotel",
    "Shop",
    "Supplier",
    "Event",
    "Other",
  ],
  projectNeeds: [
    "New website",
    "Redesign",
    "Mobile app",
    "AI chatbot or automation",
    "Not sure",
  ],
  budgetRanges: [
    "₹10,000 – ₹20,000",
    "₹20,000 – ₹40,000",
    "₹40,000+",
    "Not sure yet",
  ],
  timelines: [
    "As soon as possible",
    "Within a month",
    "Just exploring",
  ],
};

/* ─── SECTION 10: LOCATION & CONTACT CONFIG (id="contact") ─── */

export const LOCATION_CONFIG = {
  // [FILL: base city] - Unconfirmed, Section 10 will not render until confirmed
  baseCity: null,
  workingHours: "Mon to Sat, 9 AM – 8 PM IST",
  googleMapsUrl: null,
};

/* ─── FAQPage JSON-LD Schema ─── */

export const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

