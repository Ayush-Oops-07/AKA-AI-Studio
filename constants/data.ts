import {
  Brain,
  Cloud,
  Code2,
  Smartphone,
  Container,
  Database,
  Sparkles,
  Bot,
  ShieldCheck,
  Workflow,
  MessagesSquare,
  ScanText,
  Layers,
  Server,
  Globe,
  GitBranch,
  Boxes,
  Cpu,
  Fingerprint,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Landmark,
  Plane,
  Factory,
  Building2,
  Truck,
  UtensilsCrossed,
  Compass,
  Target,
  Handshake,
  Rocket,
  Lightbulb,
} from "lucide-react";
import type {
  AICapability,
  BlogPost,
  CaseStudy,
  CoreValue,
  FaqItem,
  FloatingIcon,
  Founder,
  Industry,
  NavLink,
  ProcessStep,
  ServiceCategory,
  TechCategory,
  TimelineEntry,
} from "@/types";

export const SITE = {
  name: "AKA AI Studio",
  tagline: "Three Founders. One Obsession: Intelligent Software.",
  description:
    "AKA AI Studio is a premier AI engineering and software design studio founded by Ayush, Komal, and Anushka — building high-performance web platforms, mobile apps, and AI systems for ambitious businesses across Bihar, India, and globally.",
};

/**
 * Single source of truth for real contact details.
 * Update these here and every button/link across the site updates with it.
 */
const WHATSAPP_NUMBER = "918235308885"; // country code + number, no +/spaces/dashes

export const CONTACT = {
  phoneDisplay: "+91 82353 08885",
  phoneHref: "tel:+918235308885",
  email: "starksystem07@gmail.com",
  emailHref: "mailto:starksystem07@gmail.com",
  whatsappNumber: WHATSAPP_NUMBER,
  locationDisplay: "Thawe, Gopalganj, Bihar & Bengaluru, India",
  supportHours: "Mon – Sat: 9:00 AM – 8:00 PM IST",
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi AKA AI Studio! I'd like to discuss building a project for my business."
  )}`,
  whatsappHrefWithMessage: (message: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Technologies", href: "/technologies" },
  { label: "Industries", href: "/industries" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const HERO_STATS = [
  { label: "Live Client Websites", value: 12, suffix: "+" },
  { label: "AI & Web Automations", value: 8, suffix: "+" },
  { label: "Client Satisfaction", value: 100, suffix: "%" },
  { label: "Founders. Direct Attention.", value: 3, suffix: "" },
];

export const HERO_FLOATING_ICONS: FloatingIcon[] = [
  { label: "AI", icon: Brain },
  { label: "Web", icon: Globe },
  { label: "App", icon: Smartphone },
  { label: "Cloud", icon: Cloud },
  { label: "DevOps", icon: Container },
  { label: "RAG", icon: ScanText },
  { label: "Flutter", icon: Layers },
  { label: "Next.js", icon: Code2 },
  { label: "Python", icon: Cpu },
  { label: "AWS", icon: Server },
  { label: "Docker", icon: Boxes },
  { label: "Node.js", icon: GitBranch },
];

export const TRUST_LOGOS = [
  "Nav Bharat Public School",
  "Hotel Sarkar & Banquets",
  "Mohit Enterprise Group",
  "Sandeep Traders",
  "Bihar Agro Tech",
  "Kashi Tech Solutions",
];

/* ----------------------------- FOUNDERS ----------------------------- */

export const FOUNDERS: Founder[] = [
  {
    id: "ayush",
    name: "Ayush",
    role: "Co-Founder & AI Engineering Lead",
    initials: "A",
    skills: ["AI Agents", "RAG Systems", "Python", "Cloud Architecture"],
    bio: "Ayush leads AI and backend architecture — designing the agentic systems and infrastructure that power every AKA product under the hood.",
    gradient: "from-blue to-cyan",
    image: "/images/team/ayush.jpg",
  },
  {
    id: "komal",
    name: "Komal",
    role: "Co-Founder & Engineering Lead",
    initials: "K",
    skills: ["Next.js", "Mobile Apps", "DevOps", "System Design"],
    bio: "Komal owns full-stack and mobile engineering, turning ambitious product ideas into fast, reliable web and app experiences shipped on tight timelines.",
    gradient: "from-violet to-blue",
    image: "/images/team/komal.jpg",
  },
  {
    id: "anushka",
    name: "Anushka",
    role: "Co-Founder & Design & Product Lead",
    initials: "A",
    skills: ["Product Design", "UX Research", "Brand", "Client Strategy"],
    bio: "Anushka shapes product direction and design — making sure every interface AKA ships feels as considered and premium as the engineering behind it.",
    gradient: "from-cyan to-violet",
    image: "/images/team/anushka.jpg",
  },
];

export const TIMELINE: TimelineEntry[] = [
  { year: "2022", title: "Three friends, one idea", description: "Ayush, Komal, and Anushka start building software together as students in India — the name AKA is born from their initials." },
  { year: "2023", title: "First client projects", description: "AKA takes on its first web and app builds for businesses across Bihar, quickly earning a reputation for senior-level craft and reliability." },
  { year: "2024", title: "Going AI-native", description: "The studio expands focus to AI engineering — agents, RAG systems, and LLM infrastructure tailored for Indian & global enterprises." },
  { year: "2025", title: "AKA AI Studio launches", description: "The studio formalizes into AKA AI Studio, a full-service AI engineering and product design partner." },
  { year: "2026", title: "Scaling with purpose", description: "Serving ambitious clients across education, retail, hospitality, healthcare, and manufacturing with end-to-end digital solutions." },
];

export const CORE_VALUES: CoreValue[] = [
  { title: "Craft over speed for its own sake", description: "We move fast, but never at the cost of quality. Every line of code and pixel is deliberate.", icon: Target },
  { title: "Radical transparency", description: "Fixed scope, clear INR pricing, weekly demos. No black boxes, no surprise invoices, full GST compliance.", icon: Handshake },
  { title: "AI-native thinking", description: "We don't bolt AI onto software — we design systems where intelligence is core architecture.", icon: Lightbulb },
  { title: "Founder-level ownership", description: "Every project is touched directly by Ayush, Komal, or Anushka — never handed off to an agency intermediary.", icon: Rocket },
];

export const MISSION = "To help ambitious businesses build AI-powered digital products that feel as premium as they perform — with transparent Indian pricing and zero agency bloat.";
export const VISION = "A world where every business in India and beyond has direct access to studio-grade AI engineering, modern web craft, and senior product leadership.";

/* ----------------------------- SERVICES ----------------------------- */

const defaultPricing = (base: number) => [
  {
    tier: "Starter",
    price: `₹${base.toLocaleString("en-IN")}+`,
    blurb: "For focused, single-scope builds & local businesses.",
    features: ["Discovery & scoping", "Single senior engineer", "1–2 week delivery", "30-day support & GST invoice"],
  },
  {
    tier: "Growth",
    price: `₹${Math.round(base * 2.4).toLocaleString("en-IN")}+`,
    blurb: "For established businesses scaling a core product.",
    features: ["Dedicated pod (2–3 engineers)", "Weekly live demos", "3–6 week delivery", "90-day support & performance tuning"],
  },
  {
    tier: "Enterprise",
    price: "Custom",
    blurb: "For complex platforms & high-scale enterprise systems.",
    features: ["Full senior team", "Security & DPDP compliance review", "Priority SLA on-call support", "Dedicated founder lead"],
  },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "web-development",
    order: 1,
    title: "Web Development",
    shortDescription: "High-performance web platforms engineered for speed, resilience, and conversion across Indian & global networks.",
    description: "We design and build fast web platforms — corporate websites, customer portals, dashboards, and internal tools — using Next.js and modern React, engineered for 4G/5G mobile networks and Core Web Vitals from day one.",
    icon: Code2,
    points: ["Next.js & React", "Design systems", "Core Web Vitals & SEO"],
    benefits: ["Sub-second load times on mobile", "SEO-first architecture for Indian local search", "Responsive design systems", "Built for scale from day one"],
    process: [
      { title: "Audit & plan", description: "We map your business goals, Indian user behavior, and technical constraints." },
      { title: "Design system", description: "A reusable, mobile-first component library is built before a single page is." },
      { title: "Build & test", description: "Iterative development with weekly WhatsApp updates, demos, and QA baked in." },
      { title: "Launch & tune", description: "Zero-downtime deployment with custom domain setup and performance monitoring." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    pricing: defaultPricing(24999),
    faqs: [
      { question: "Do you work with existing codebases or rebuilds?", answer: "Yes — many engagements start with an existing website or repo that needs a modern redesign. We audit before we build." },
      { question: "Can you setup custom domains (.in, .info, .com) and hosting?", answer: "Absolutely. We handle complete domain configuration, SSL certificates, DNS setup, and fast CDN hosting." },
      { question: "What is your typical delivery time for a website?", answer: "A focused business website ships in 1–2 weeks; custom platforms with backend portals take 4–6 weeks." },
    ],
  },
  {
    id: "mobile-development",
    order: 2,
    title: "Mobile App Development",
    shortDescription: "Native-feeling Android and iOS apps that ship fast, feel premium, and work offline.",
    description: "From Flutter to React Native, we build mobile applications that run smoothly on Indian Android and iOS devices — backed by offline-first architecture and instant WhatsApp/SMS notification integrations.",
    icon: Smartphone,
    points: ["iOS & Android", "Flutter & React Native", "Offline-first & UPI Ready"],
    benefits: ["One codebase, two platforms", "Offline-first architecture for patchy networks", "Google Play Store & Apple App Store ready", "Push notifications & OTP login"],
    process: [
      { title: "Product scoping", description: "We define core customer flows and native requirements." },
      { title: "UI prototyping", description: "Interactive Figma prototypes validated with real users." },
      { title: "Development", description: "Flutter or React Native builds with native hardware & camera modules where needed." },
      { title: "Store launch", description: "Full Google Play & Apple App Store submission and compliance support." },
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    pricing: defaultPricing(39999),
    faqs: [
      { question: "Flutter or React Native — which do you recommend?", answer: "Both are excellent; we recommend Flutter for UI consistency across diverse Android devices and React Native if you have a web React stack." },
      { question: "Do you handle Play Store & App Store submissions?", answer: "Yes, end-to-end, including privacy policy compliance, screenshot assets, and store listing optimization." },
      { question: "Can the mobile app work in low-connectivity areas?", answer: "Yes, we implement offline-first caching and sync patterns as standard." },
    ],
  },
  {
    id: "ai-engineering",
    order: 3,
    title: "AI Engineering",
    shortDescription: "Production-grade AI systems, multilingual LLMs, and custom intelligence.",
    description: "We design agentic architectures, LLM infrastructure, and evaluation harnesses built to run reliably in production — supporting multilingual Indian languages, domain-specific terminology, and cost optimization.",
    icon: Brain,
    points: ["Agentic architectures", "Multilingual Indian LLMs", "Cost-optimized routing"],
    benefits: ["Production-grade, not prototypes", "Model-agnostic infrastructure (OpenAI, Claude, Gemini, Llama)", "Built-in evaluation harnesses", "Hindi and regional language support"],
    process: [
      { title: "Use case mapping", description: "We identify where AI creates genuine leverage and ROI for your business." },
      { title: "Architecture design", description: "Agentic pipelines, retrieval, and guardrails designed together." },
      { title: "Build & evaluate", description: "Continuous evals against real-world Indian language queries and edge cases." },
      { title: "Deploy & monitor", description: "Full observability into model latency, cost, and accuracy in production." },
    ],
    technologies: ["OpenAI", "Claude", "Gemini", "LangChain", "CrewAI", "Python"],
    pricing: defaultPricing(49999),
    faqs: [
      { question: "Which AI models do you support?", answer: "We are model-agnostic across OpenAI (GPT-4o), Claude 3.5, Google Gemini 2.0, and open-weight models like Llama 3." },
      { question: "Can AI models understand Indian business terms & languages?", answer: "Yes, we fine-tune and prompt-engineer models to support Hinglish, Hindi, and Indian commercial phrasing." },
      { question: "Can you connect AI with our existing database?", answer: "Yes — we build secure APIs and retrieval layers on top of your existing MySQL, PostgreSQL, or Mongo databases." },
    ],
  },
  {
    id: "ai-agents",
    order: 4,
    title: "AI Agents",
    shortDescription: "Autonomous, tool-using agents that complete multi-step work end to end.",
    description: "We build agents that don't just chat — they plan, query internal tools, update databases, and complete real multi-step tasks across customer support, billing, and WhatsApp workflows.",
    icon: Bot,
    points: ["Multi-step planning", "Tool use & function calling", "Human-in-the-loop review"],
    benefits: ["Automates complex multi-step workflows", "Safe tool-use guardrails", "Human review checkpoints", "Integrates with WhatsApp & CRM tools"],
    process: [
      { title: "Workflow mapping", description: "We define the exact business process the agent will execute." },
      { title: "Tool design", description: "Function calling and database access are scoped and secured." },
      { title: "Guardrails & testing", description: "Extensive safety testing against hallucinations and edge cases." },
      { title: "Rollout", description: "Gradual rollout with human supervisor escalation." },
    ],
    technologies: ["LangGraph", "CrewAI", "OpenAI Functions", "Claude Tool Use", "Python", "Redis"],
    pricing: defaultPricing(44999),
    faqs: [
      { question: "How do you keep AI agents from making costly mistakes?", answer: "Scoped tool access, strict guardrails, and automated human-in-the-loop escalation for high-stakes actions." },
      { question: "Can agents respond to customers on WhatsApp?", answer: "Yes, we integrate agents directly with WhatsApp Business API for instant, automated 24/7 customer assistance." },
      { question: "What tasks are best suited for AI agents?", answer: "Customer inquiry resolution, order status lookup, document summarization, appointment scheduling, and lead qualification." },
    ],
  },
  {
    id: "rag-systems",
    order: 5,
    title: "RAG Systems",
    shortDescription: "Retrieval-augmented systems that ground LLMs in your company knowledge.",
    description: "We build retrieval pipelines that ground large language models in your proprietary catalogs, PDFs, ERP data, and policies — accurately, securely, and with verified source citations.",
    icon: ScanText,
    points: ["Vector search", "Grounded generation", "Hallucination control"],
    benefits: ["Answers grounded in your exact business documents", "Zero hallucination on factual queries", "Scales to thousands of PDFs & records", "Verified citations for auditability"],
    process: [
      { title: "Data audit", description: "We assess your document sources, catalogs, and databases." },
      { title: "Pipeline design", description: "Chunking, embedding, and hybrid retrieval strategy tailored to your data." },
      { title: "Evaluation", description: "Retrieval accuracy tested against real customer queries." },
      { title: "Deploy & scale", description: "Vector infrastructure that scales seamlessly with your knowledge base." },
    ],
    technologies: ["Pinecone", "Weaviate", "pgvector", "LangChain", "LlamaIndex", "OpenAI Embeddings"],
    pricing: defaultPricing(39999),
    faqs: [
      { question: "What documents can be indexed in a RAG system?", answer: "PDF catalogs, Word documents, legal terms, product specs, spreadsheets, and database records." },
      { question: "How is proprietary company data kept secure?", answer: "Your data is stored in private vector databases and encrypted at rest and in transit; it is never used to train public models." },
      { question: "How accurate are the generated answers?", answer: "We tune retrieval with rerankers and strict temperature controls so answers cite verified source material only." },
    ],
  },
  {
    id: "cloud-architecture",
    order: 6,
    title: "Cloud Architecture",
    shortDescription: "High-availability cloud infrastructure designed for low latency across India and global regions.",
    description: "We architect resilient cloud infrastructure across AWS (Mumbai/Hyderabad), Azure (India regions), and GCP, tuned for speed, cost optimization, and high availability.",
    icon: Cloud,
    points: ["AWS Mumbai/Hyderabad", "Cost optimization", "Zero-downtime setup"],
    benefits: ["Sub-50ms latency across Indian cities", "Optimized cloud bills with right-sizing", "Zero-downtime migrations", "Automated backups and disaster recovery"],
    process: [
      { title: "Infrastructure audit", description: "We assess your current cloud spend, bottlenecks, and security posture." },
      { title: "Architecture design", description: "A right-sized, scalable cloud architecture is proposed." },
      { title: "Migration", description: "Staged migration with zero business downtime." },
      { title: "Monitor & optimize", description: "Ongoing cost monitoring and automated scaling." },
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Cloudflare"],
    pricing: defaultPricing(34999),
    faqs: [
      { question: "Can you host our servers in Indian data centers for compliance?", answer: "Yes, we primarily deploy on AWS Mumbai (ap-south-1) and Hyderabad to ensure full data locality compliance." },
      { question: "Can you migrate an existing website or app without downtime?", answer: "Yes, zero-downtime blue/green migration is standard practice for all our cloud deployments." },
      { question: "Will this reduce our monthly cloud bill?", answer: "Yes — right-sizing compute, implementing caching, and serverless architectures often lower monthly costs by 30–50%." },
    ],
  },
  {
    id: "devops",
    order: 7,
    title: "DevOps",
    shortDescription: "CI/CD pipelines, automated testing, and infrastructure-as-code for fast shipping.",
    description: "We streamline your engineering workflow with automated CI/CD pipelines, Docker containerization, and monitoring dashboards that let you deploy updates with zero fear.",
    icon: Container,
    points: ["IaC (Terraform)", "Docker & Kubernetes", "CI/CD Pipelines"],
    benefits: ["Deploy updates multiple times a day safely", "Full infrastructure version control", "Real-time error alerts on WhatsApp/Slack", "Instant rollback capabilities"],
    process: [
      { title: "Pipeline audit", description: "We review your current build and release workflow." },
      { title: "IaC setup", description: "Infrastructure defined as code for repeatable, versioned environments." },
      { title: "CI/CD build", description: "Automated GitHub Actions pipelines with automated test gates." },
      { title: "Observability", description: "Logging and uptime monitoring with instant alert triggers." },
    ],
    technologies: ["Terraform", "Kubernetes", "GitHub Actions", "Docker", "Grafana", "Datadog"],
    pricing: defaultPricing(29999),
    faqs: [
      { question: "Do you set up automated backups?", answer: "Yes, automated database snapshots and offsite backups are included in every DevOps setup." },
      { question: "How long does a CI/CD setup take?", answer: "Typically 1–2 weeks depending on repository complexity and target environments." },
      { question: "Can you set up staging and production environments?", answer: "Yes, isolated staging and production environments ensure code is tested before going live." },
    ],
  },
  {
    id: "data-engineering",
    order: 8,
    title: "Data Engineering",
    shortDescription: "ETL pipelines and analytics warehouses that make your data trustworthy and AI-ready.",
    description: "We build robust data pipelines that clean, transform, and centralize data from your retail POS, ERPs, CRMs, and website into query-ready analytics warehouses.",
    icon: Database,
    points: ["ETL/ELT pipelines", "Data warehousing", "GST/Sales analytics"],
    benefits: ["Centralized view of sales and operations", "Automated daily reporting", "AI-ready data foundations", "Reduced manual spreadsheet work"],
    process: [
      { title: "Data mapping", description: "We map all your data sources and current data quality issues." },
      { title: "Pipeline design", description: "ETL pipelines designed for your specific volume and schema." },
      { title: "Warehouse build", description: "A scalable warehouse layer built for fast querying and BI dashboards." },
      { title: "Automation", description: "Automated data verification and quality checks." },
    ],
    technologies: ["Airflow", "dbt", "Snowflake", "BigQuery", "PostgreSQL", "Kafka"],
    pricing: defaultPricing(34999),
    faqs: [
      { question: "Can you connect with our retail POS or accounting software?", answer: "Yes, we integrate with popular Indian accounting tools (Tally, Zoho Books, Vyapar) and custom POS databases." },
      { question: "Will this help us prepare for AI features?", answer: "Yes — clean, structured data is the prerequisite for powerful AI agents and business forecasting." },
      { question: "How often can data refresh?", answer: "From real-time streaming to hourly or daily batch syncs, depending on your business requirements." },
    ],
  },
  {
    id: "machine-learning",
    order: 9,
    title: "Machine Learning",
    shortDescription: "Custom predictive models and computer vision fine-tuned on your domain data.",
    description: "From sales demand forecasting to automated document OCR and defect detection, we build and deploy machine learning models trained on your business data.",
    icon: Sparkles,
    points: ["Demand forecasting", "Document OCR", "MLOps pipelines"],
    benefits: ["Custom models tuned to your exact operational data", "Explainable predictions", "Automated retraining workflows", "High accuracy on Indian documents"],
    process: [
      { title: "Problem framing", description: "We define the prediction target and business ROI metric." },
      { title: "Data preparation", description: "Feature engineering, cleaning, and dataset labeling." },
      { title: "Model training", description: "Iterative training, cross-validation, and fine-tuning." },
      { title: "Deployment", description: "Lightweight API endpoints and automated monitoring post-launch." },
    ],
    technologies: ["PyTorch", "scikit-learn", "Hugging Face", "FastAPI", "SageMaker", "Vertex AI"],
    pricing: defaultPricing(49999),
    faqs: [
      { question: "Can you build custom document OCR for invoices and IDs?", answer: "Yes, we build computer vision models capable of parsing Indian invoices, receipts, and identity documents." },
      { question: "How do you evaluate model accuracy?", answer: "Through cross-validated metrics aligned directly with your business KPIs (e.g. inventory waste reduction, processing speed)." },
      { question: "Can models run locally on our private servers?", answer: "Yes, we support on-premise containerized deployments as well as cloud API hosting." },
    ],
  },
  {
    id: "automation",
    order: 10,
    title: "Automation",
    shortDescription: "Workflow automation, WhatsApp bots, and RPA that eliminate manual busywork.",
    description: "We build smart automations — from WhatsApp lead capture and invoice generation to multi-tool sync — that quietly save your team hundreds of hours every month.",
    icon: Workflow,
    points: ["WhatsApp automation", "Invoice generation", "Multi-app integration"],
    benefits: ["Hundreds of hours saved monthly", "Zero manual data entry errors", "Instant response to customer leads", "Scales operations without hiring extra staff"],
    process: [
      { title: "Process audit", description: "We identify the most repetitive manual tasks eating up your team's time." },
      { title: "Workflow design", description: "Automated triggers, webhooks, and scripts mapped end to end." },
      { title: "Build & test", description: "End-to-end testing with edge cases and error alerting." },
      { title: "Launch & monitor", description: "Reliable background execution with instant failure notifications." },
    ],
    technologies: ["n8n", "Python", "WhatsApp API", "Zapier", "Make", "Playwright"],
    pricing: defaultPricing(19999),
    faqs: [
      { question: "What workflows can you automate?", answer: "WhatsApp order notifications, lead routing from website to CRM, automated GST invoice PDF creation, payment status alerts, and email follow-ups." },
      { question: "Does WhatsApp automation require official API approval?", answer: "We help you set up official WhatsApp Cloud API or lightweight integrations tailored to your volume." },
      { question: "How fast can an automation be set up?", answer: "Simple automations go live in 2–4 days; complex multi-step systems take 1–2 weeks." },
    ],
  },
  {
    id: "cyber-security",
    order: 11,
    title: "Cyber Security",
    shortDescription: "Security, penetration testing, and DPDP Act 2023 compliance built into the core.",
    description: "We secure your digital assets from day one — vulnerability assessments, API hardening, data encryption, and compliance readiness for Indian and international regulations.",
    icon: ShieldCheck,
    points: ["Vulnerability assessment", "DPDP Act 2023 readiness", "API & cloud hardening"],
    benefits: ["Security built in from the ground up", "Indian DPDP Act 2023 compliance", "Protected customer and payment data", "Protection against DDoS and bot attacks"],
    process: [
      { title: "Security audit", description: "We test your website, APIs, and cloud configurations for vulnerabilities." },
      { title: "Remediation plan", description: "A prioritized action list to patch security loopholes immediately." },
      { title: "Implementation", description: "Zero-trust access, SSL/TLS, firewalls, and data encryption applied." },
      { title: "Verification", description: "Re-testing and delivery of a clean security verification report." },
    ],
    technologies: ["Cloudflare", "OWASP", "AWS IAM", "Vault", "Snyk", "SSL/TLS"],
    pricing: defaultPricing(39999),
    faqs: [
      { question: "Do you help with Indian DPDP Act 2023 compliance?", answer: "Yes, we audit consent mechanisms, data storage, user privacy flows, and retention policies to meet DPDP requirements." },
      { question: "Can you perform penetration testing on our current website?", answer: "Yes, we run comprehensive vulnerability scans and penetration tests on web apps and APIs." },
      { question: "How do you protect websites from DDoS attacks and scraping?", answer: "We deploy Cloudflare Enterprise-grade WAF rules, rate limiting, and bot protection layers." },
    ],
  },
  {
    id: "consulting",
    order: 12,
    title: "Consulting",
    shortDescription: "Strategic technology and AI advisory directly from our senior founders.",
    description: "For business owners and CTOs seeking clarity before making large technology investments — we advise on AI roadmaps, vendor evaluations, and software architecture.",
    icon: Compass,
    points: ["AI strategy roadmap", "Tech stack selection", "Vendor evaluation"],
    benefits: ["Unbiased, vendor-neutral recommendations", "Save lakhs by avoiding wrong tech decisions", "Direct access to senior founders", "Clear actionable technical blueprints"],
    process: [
      { title: "Discovery session", description: "We understand your business vision, budget, and pain points." },
      { title: "Technical review", description: "Deep-dive analysis of proposed tech stacks, architectures, and quotes." },
      { title: "Strategy report", description: "A clear, prioritized roadmap with budget and timeline estimates." },
      { title: "Advisory support", description: "Optional ongoing monthly advisory during execution." },
    ],
    technologies: ["AI Strategy", "Tech Due Diligence", "Architecture Planning", "Cloud Audits"],
    pricing: defaultPricing(14999),
    faqs: [
      { question: "Who typically engages you for tech consulting?", answer: "Business founders evaluating AI adoption, companies planning a major website or app rebuild, and teams needing architecture reviews." },
      { question: "Do you provide written architecture documents?", answer: "Yes, you receive an actionable, step-by-step technical blueprint and architecture diagram." },
      { question: "Can you also build the software after consulting?", answer: "Yes, we can smoothly transition from consulting to full-stack execution if you choose." },
    ],
  },
];

/* ------------------------- AI CAPABILITIES ------------------------- */

export const AI_CAPABILITIES: AICapability[] = [
  { id: "ai-agents", title: "AI Agents", description: "Autonomous, tool-using agents that complete multi-step work across customer workflows.", icon: Bot },
  { id: "rag", title: "RAG Systems", description: "Retrieval pipelines that ground AI answers in your own business documents and catalogs.", icon: ScanText },
  { id: "fine-tuning", title: "Fine-Tuning", description: "Custom models fine-tuned to speak in your brand's exact tone and Indian domain terminology.", icon: Sparkles },
  { id: "chatbots", title: "Smart Chatbots", description: "Conversational assistants on WhatsApp and web with high accuracy and instant support.", icon: MessagesSquare },
  { id: "private-gpt", title: "Private AI", description: "Self-hosted, private language models where your data never leaves your secure cloud environment.", icon: Fingerprint },
  { id: "automation-ai", title: "AI Automation", description: "Intelligent workflows that automate manual invoicing, data entry, and lead routing.", icon: Workflow },
];

/* ---------------------------- TECHNOLOGIES --------------------------- */

export const TECH_CATEGORIES: TechCategory[] = [
  { id: "frontend", label: "Frontend", items: [{ name: "Next.js" }, { name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }] },
  { id: "backend", label: "Backend", items: [{ name: "Node.js" }, { name: "Python" }, { name: "FastAPI" }, { name: "NestJS" }, { name: "GraphQL" }] },
  { id: "cloud", label: "Cloud & CDN", items: [{ name: "AWS (Mumbai)" }, { name: "Google Cloud" }, { name: "Vercel" }, { name: "Cloudflare" }, { name: "Azure" }] },
  { id: "ai", label: "AI & Agents", items: [{ name: "LangChain" }, { name: "CrewAI" }, { name: "LlamaIndex" }, { name: "Pinecone" }, { name: "Hugging Face" }] },
  { id: "devops", label: "DevOps", items: [{ name: "Docker" }, { name: "Kubernetes" }, { name: "Terraform" }, { name: "GitHub Actions" }, { name: "Grafana" }] },
  { id: "database", label: "Databases", items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }, { name: "Supabase" }, { name: "Firebase" }] },
  { id: "mobile", label: "Mobile Apps", items: [{ name: "Flutter" }, { name: "React Native" }, { name: "Swift" }, { name: "Kotlin" }] },
  { id: "ai-models", label: "AI Models", items: [{ name: "OpenAI GPT-4o" }, { name: "Claude 3.5" }, { name: "Google Gemini" }, { name: "Llama 3" }, { name: "Mistral" }] },
];

/* ---------------------------- INDUSTRIES ---------------------------- */

export const INDUSTRIES: Industry[] = [
  { id: "education", name: "Education & Schools", icon: GraduationCap, blurb: "CBSE/ICSE school websites, online admissions inquiry, parent notices, and student portals." },
  { id: "hospitality", name: "Hospitality & Banquets", icon: UtensilsCrossed, blurb: "Hotel room reservations, marriage hall banquet showcases, catering menus, and WhatsApp bookings." },
  { id: "retail", name: "Retail & Electronics", icon: ShoppingBag, blurb: "Multi-branch retail websites, digital product catalogs, ONDC, and WhatsApp commerce." },
  { id: "building-materials", name: "Building Materials & Hardware", icon: Building2, blurb: "Cement, steel, and hardware catalogs with instant contractor quote requests." },
  { id: "healthcare", name: "Healthcare & Clinics", icon: HeartPulse, blurb: "ABDM & NABH-ready clinic management, doctor appointments, and patient EHR records." },
  { id: "finance", name: "Fintech & Banking", icon: Landmark, blurb: "UPI 2.0 payment flows, RBI data localization compliance, and GST invoice automation." },
  { id: "manufacturing", name: "Manufacturing & MSME", icon: Factory, blurb: "GST e-invoicing, factory inventory control, supply chain tracking, and ERP integrations." },
  { id: "real-estate", name: "Real Estate & Builders", icon: Landmark, blurb: "RERA-compliant builder portals, luxury project showcase, and automated WhatsApp lead gen." },
  { id: "logistics", name: "Logistics & Transport", icon: Truck, blurb: "Intra-state freight route optimization, fleet visibility, and live shipment tracking." },
];

/* ---------------------------- CASE STUDIES --------------------------- */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nav-bharat-school",
    client: "Nav Bharat Public School",
    industry: "Education",
    location: "Thawe, Gopalganj, Bihar",
    title: "A modern digital front door & admissions portal for a leading CBSE school",
    summary: "A comprehensive CBSE school website featuring online admissions inquiry, academic curriculum, smart campus tour, faculty directory, and parent notice board.",
    about:
      "Nav Bharat Public School is a premier educational institution in Thawe, Gopalganj, committed to holistic student development, academic excellence, innovation, and discipline. The school required a modern, highly engaging digital experience to connect with students, parents, and prospective families. We designed and built a fast Next.js website showcasing their vision, CBSE academic curriculum, admissions criteria, faculty profiles, campus facilities, event galleries, and direct parental inquiry helpline on navbharatpublicschool.info.",
    metrics: [
      { label: "Live domain", value: "navbharatpublicschool.info" },
      { label: "Focus", value: "CBSE School & Admissions" },
      { label: "Built with", value: "Next.js & Tailwind" },
    ],
    tags: ["Education", "Admissions Portal", "CBSE", "Next.js", "Mobile-First"],
    image: "/images/work/nav-bharat-school.jpg",
    liveUrl: "https://navbharatpublicschool.info",
  },
  {
    id: "hotel-sarkar",
    client: "Hotel Sarkar & Marriage Hall",
    industry: "Hospitality",
    location: "Thawe, Gopalganj, Bihar",
    title: "A premier hospitality & marriage banquet brand, brought online for Bihar",
    summary: "A modern marketing website and booking inquiry system for luxury rooms, weddings, and corporate banquets near Thawe Railway Station.",
    about:
      "Hotel Sarkar & Marriage Hall was founded with a singular vision — to bring premium hospitality, grand banquet lawns, and comfortable lodging to Thawe, Bihar. Conveniently located near Thawe Railway Station and the renowned Thawe Mandir, it has become the preferred destination for travelers, families hosting grand weddings, and business seminars. We designed and built a website that reflects their premium hospitality, giving guests an easy way to explore AC rooms, marriage lawn capacities, catering packages, and book instantly via WhatsApp.",
    metrics: [
      { label: "Live site", value: "Vercel Deployment" },
      { label: "Focus", value: "Hotel & Banquets" },
      { label: "Built with", value: "Next.js" },
    ],
    tags: ["Web Design", "Next.js", "Hospitality", "Banquet Booking"],
    image: "/images/work/hotel-sarkar.jpg",
    liveUrl: "https://hotel-sarkar.vercel.app/",
  },
  {
    id: "mohit-enterprise",
    client: "Mohit Enterprise Group",
    industry: "Retail & Electronics",
    location: "Thawe & Gopalganj, Bihar",
    title: "A digital home for a growing multi-business retail group",
    summary: "A corporate brand portal and digital showcase for Mohit Enterprise Group's leading retail smartphone & electronics stores across Thawe & Gopalganj.",
    about:
      "Mohit Enterprise Group (MEG) is a premier business group based in Thawe, Gopalganj, Bihar, founded by Sheshnath Gupta. Built on unwavering trust, quality, and exceptional customer service, the company operates multiple successful retail showrooms dealing in top-tier smartphones, consumer appliances, and digital electronics. We brought all of their retail branches under one clean, high-performance website — making it effortless for customers to discover the latest device arrivals, store locations, and reach customer support directly.",
    metrics: [
      { label: "Live domain", value: "mohitmobile.in" },
      { label: "Focus", value: "Retail & Electronics" },
      { label: "Built with", value: "Next.js" },
    ],
    tags: ["Web Design", "Branding", "Retail Portal", "Next.js"],
    image: "/images/work/mohit-enterprise.jpg",
    liveUrl: "https://mohitmobile.in",
  },
  {
    id: "sandeep-traders",
    client: "Sandeep Traders",
    industry: "Building Materials",
    location: "Bihar, India",
    title: "A trusted supplier's digital catalog for builders & contractors",
    summary: "A clean, ultra-fast digital catalog presenting cement, TMT steel bars, pipes, and construction hardware across Bihar with instant quote requests.",
    about:
      "Sandeep Traders has long been the trusted destination for builders, contractors, and homeowners across Bihar. The website reflects the company's commitment to supplying top-grade building materials (UltraTech & Ambuja cement, Tata Tiscon TMT bars, sanitaryware) with reliable local logistics. We engineered a fast, lightweight catalog optimized for mobile devices on Indian 4G/5G networks, giving contractors an easy way to browse specifications and request wholesale price quotes via direct call and WhatsApp.",
    metrics: [
      { label: "Live site", value: "Live Deployment" },
      { label: "Focus", value: "Building Materials" },
      { label: "Built with", value: "HTML5/CSS3/JS" },
    ],
    tags: ["Web Design", "Catalog Website", "Local Business", "Fast Load"],
    image: "/images/work/sandeep-traders.jpg",
    liveUrl: "https://mandeepkumarkushwaha-cmyk.github.io/sandeep-traders/",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discover & Scope", description: "We understand your business model, target Indian customers, and feature requirements before writing code." },
  { step: "02", title: "Design & Prototype", description: "Modern mobile-first UI design and architecture built in parallel, shared directly with you for feedback." },
  { step: "03", title: "Develop with Senior Craft", description: "Our founders build your project with weekly demos and continuous WhatsApp progress updates." },
  { step: "04", title: "Launch & Domain Setup", description: "Zero-downtime deployment on custom domains (.in, .info, .com) with SSL and high-speed CDN." },
  { step: "05", title: "Support & Growth", description: "Ongoing maintenance, SEO monitoring, and feature upgrades with guaranteed SLA support." },
];

export const FAQS: FaqItem[] = [
  { id: "f1", question: "How is AKA AI Studio different from traditional agencies?", answer: "We are three senior founders, not sales middlemen or junior outsource teams. Every project is planned, designed, and coded directly by Ayush, Komal, or Anushka with fixed INR pricing and zero hidden fees." },
  { id: "f2", question: "What are your payment terms and do you provide GST invoices?", answer: "Yes, 100% GST-compliant invoices are provided for business tax input credit. Payments are milestone-based (e.g. 40% advance, 30% midway demo, 30% on launch) payable via UPI, Net Banking (NEFT/RTGS/IMPS), or Cards." },
  { id: "f3", question: "Can we communicate in Hindi or English?", answer: "Yes, we comfortably communicate in both Hindi and English. We provide regular updates directly on WhatsApp, phone calls, or Google Meet as per your preference." },
  { id: "f4", question: "Do you help with domain purchase, DNS, and hosting setup?", answer: "Yes, end-to-end! We set up your custom domain (.in, .com, .info, .org), SSL certificate, high-speed CDN, corporate emails, and search engine indexing." },
  { id: "f5", question: "How fast can you build and launch our website or AI system?", answer: "A professional business website typically launches in 1–2 weeks; custom web applications and AI agent platforms take 4–8 weeks." },
  { id: "f6", question: "Which AI models and modern frameworks do you use?", answer: "We build with Next.js, React, TypeScript, Python, Tailwind CSS, and integrate top AI engines including OpenAI GPT-4o, Claude 3.5, and Google Gemini with LangChain/CrewAI." },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "b1", title: "Why Indian SMEs need AI-native websites & WhatsApp automation in 2026", excerpt: "How Indian retail, education, and service businesses are multiplying revenue by combining fast Next.js sites with WhatsApp automation.", category: "AI Strategy", date: "Jun 2026", readTime: "6 min read" },
  { id: "b2", title: "How modern schools in India increase admissions with a fast Next.js portal", excerpt: "A deep dive into how Nav Bharat Public School modernized its digital presence and streamlined online admissions inquiries.", category: "Case Study", date: "May 2026", readTime: "7 min read" },
  { id: "b3", title: "RAG vs. fine-tuning: building multilingual AI systems for Indian businesses", excerpt: "A practical guide to building AI tools that understand Hinglish, Hindi, and regional domain terminology with zero hallucination.", category: "Engineering", date: "Apr 2026", readTime: "8 min read" },
  { id: "b4", title: "The Indian Founder's Guide to hiring high-performing full-stack AI engineers", excerpt: "What to look for, what questions to ask, and how to partner with a senior engineering studio that actually ships production code.", category: "Founder Notes", date: "Mar 2026", readTime: "5 min read" },
  { id: "b5", title: "Zero-downtime cloud migrations on AWS Mumbai (ap-south-1) & Cloudflare", excerpt: "The exact blueprint we use to achieve sub-50ms latency across Indian cities with 99.99% uptime and low infrastructure bills.", category: "Cloud", date: "Feb 2026", readTime: "9 min read" },
  { id: "b6", title: "Design systems that convert: lessons from building for Bihar & Indian retail", excerpt: "How to design mobile-first, high-trust interfaces that load instantly on 4G networks and convert visitors into WhatsApp leads.", category: "Design", date: "Jan 2026", readTime: "6 min read" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/work" },
    { label: "Blog & Insights", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services#web-development" },
    { label: "Mobile App Development", href: "/services#mobile-development" },
    { label: "AI Engineering", href: "/services#ai-engineering" },
    { label: "Automation & WhatsApp", href: "/services#automation" },
  ],
  resources: [
    { label: "Case Studies", href: "/work" },
    { label: "Technologies Stack", href: "/technologies" },
    { label: "Industries Served", href: "/industries" },
  ],
};
