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
    "AKA AI Studio is an AI engineering and software design studio founded by Ayush, Komal, and Anushka, building premium web, mobile, and AI-native products for teams that refuse to ship anything ordinary.",
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
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hi AKA AI Studio! I'd like to know more about building a website."
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
  { label: "Products shipped", value: 45, suffix: "+" },
  { label: "AI systems in production", value: 20, suffix: "+" },
  { label: "Client satisfaction", value: 98, suffix: "%" },
  { label: "Founders. Zero shortcuts.", value: 3, suffix: "" },
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
  "Northwind",
  "Solace Health",
  "Ferrous Cloud",
  "Meridian Bank",
  "Odyssey Retail",
  "Lumen Labs",
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
  { year: "2022", title: "Three friends, one idea", description: "Ayush, Komal, and Anushka start building software together as students — the name AKA is born from their initials." },
  { year: "2023", title: "First client projects", description: "AKA takes on its first freelance web and app builds, quickly earning a reputation for senior-level craft." },
  { year: "2024", title: "Going AI-native", description: "The studio shifts focus to AI engineering — agents, RAG systems, and LLM infrastructure — as its core specialty." },
  { year: "2025", title: "AKA AI Studio launches", description: "The studio formalizes into AKA AI Studio, a full-service AI engineering and product design partner." },
  { year: "2026", title: "Scaling with purpose", description: "Now serving clients across healthcare, finance, retail, and manufacturing, with a growing bench of senior engineers." },
];

export const CORE_VALUES: CoreValue[] = [
  { title: "Craft over speed for its own sake", description: "We move fast, but never at the cost of quality. Every line of code and pixel is deliberate.", icon: Target },
  { title: "Radical transparency", description: "Fixed scope, clear pricing, weekly demos. No black boxes, no surprise invoices.", icon: Handshake },
  { title: "AI-native thinking", description: "We don't bolt AI onto software — we design systems where intelligence is core architecture.", icon: Lightbulb },
  { title: "Founder-level ownership", description: "Every project is touched directly by Ayush, Komal, or Anushka — never handed off to a stranger.", icon: Rocket },
];

export const MISSION = "To help ambitious teams build AI-powered digital products that feel as premium as they perform — without the bloat of a traditional agency.";
export const VISION = "A world where every business, regardless of size, has access to studio-grade AI engineering and design.";

/* ----------------------------- SERVICES ----------------------------- */

const defaultPricing = (base: number) => [
  { tier: "Starter", price: `$${base.toLocaleString()}+`, blurb: "For focused, single-scope builds.", features: ["Discovery & scoping", "Single senior engineer", "2–4 week delivery", "30-day support"] },
  { tier: "Growth", price: `$${(base * 3).toLocaleString()}+`, blurb: "For teams scaling a core product.", features: ["Dedicated pod (2–3 engineers)", "Weekly demos", "6–10 week delivery", "90-day support & tuning"] },
  { tier: "Enterprise", price: "Custom", blurb: "For complex, compliance-heavy builds.", features: ["Full senior team", "Security & compliance review", "Ongoing SLA support", "Dedicated account lead"] },
];

export const SERVICES: ServiceCategory[] = [
  {
    id: "web-development",
    order: 1,
    title: "Web Development",
    shortDescription: "High-performance web platforms engineered for speed, resilience, and conversion.",
    description: "We design and build web platforms — marketing sites, dashboards, and complex internal tools — using Next.js and modern React, engineered for Core Web Vitals from day one.",
    icon: Code2,
    points: ["Next.js & React", "Design systems", "Core Web Vitals"],
    benefits: ["Sub-second load times", "SEO-first architecture", "Composable design systems", "Built for scale from day one"],
    process: [
      { title: "Audit & plan", description: "We map your goals, users, and technical constraints." },
      { title: "Design system", description: "A reusable component library is built before a single page is." },
      { title: "Build & test", description: "Iterative development with weekly demos and QA baked in." },
      { title: "Launch & tune", description: "Zero-downtime launch with performance monitoring from day one." },
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "GraphQL"],
    pricing: defaultPricing(3000),
    faqs: [
      { question: "Do you work with existing codebases?", answer: "Yes — most engagements start inside an existing repo. We audit before we build." },
      { question: "Can you redesign an existing site?", answer: "Absolutely. Full redesigns like this one are one of our most common engagements." },
      { question: "What's your typical delivery time?", answer: "A marketing site typically ships in 2–4 weeks; complex platforms take 6–10 weeks." },
    ],
  },
  {
    id: "mobile-development",
    order: 2,
    title: "Mobile App Development",
    shortDescription: "Native-feeling cross-platform apps that ship fast and feel premium.",
    description: "From Flutter to React Native, we build mobile apps that feel native on both iOS and Android — backed by the same engineering rigor as our web platforms.",
    icon: Smartphone,
    points: ["iOS & Android", "Flutter & React Native", "Offline-first"],
    benefits: ["One codebase, two platforms", "Offline-first architecture", "App Store & Play Store ready", "Push notifications & deep linking"],
    process: [
      { title: "Product scoping", description: "We define core flows before touching a design tool." },
      { title: "UI prototyping", description: "Interactive prototypes validated with real users." },
      { title: "Development", description: "Flutter or React Native builds with native modules where needed." },
      { title: "Store launch", description: "Full App Store & Play Store submission support." },
    ],
    technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase", "Supabase"],
    pricing: defaultPricing(4000),
    faqs: [
      { question: "Flutter or React Native — which do you recommend?", answer: "Depends on your team and roadmap; we'll recommend the right fit during discovery." },
      { question: "Do you handle App Store submission?", answer: "Yes, end to end, including compliance review and store listing assets." },
      { question: "Can the app work offline?", answer: "Yes, we build offline-first sync patterns as standard where relevant." },
    ],
  },
  {
    id: "ai-engineering",
    order: 3,
    title: "AI Engineering",
    shortDescription: "Production-grade AI systems, not prototypes.",
    description: "We design agentic architectures, LLM infrastructure, and evaluation harnesses built to run reliably in production — not just impress in a demo.",
    icon: Brain,
    points: ["Agentic architectures", "LLM ops & evals", "Model routing"],
    benefits: ["Production-grade, not prototype", "Model-agnostic infrastructure", "Built-in evaluation harnesses", "Cost-optimized model routing"],
    process: [
      { title: "Use case mapping", description: "We identify where AI creates real leverage, not just novelty." },
      { title: "Architecture design", description: "Agentic pipelines, retrieval, and guardrails designed together." },
      { title: "Build & evaluate", description: "Continuous evals against real-world edge cases." },
      { title: "Deploy & monitor", description: "Full observability into model behavior in production." },
    ],
    technologies: ["OpenAI", "Claude", "Gemini", "LangChain", "CrewAI", "Python"],
    pricing: defaultPricing(6000),
    faqs: [
      { question: "Which AI models do you work with?", answer: "We're model-agnostic across OpenAI, Claude, Gemini, and open-weight models like Llama." },
      { question: "How do you prevent hallucination?", answer: "Through grounded retrieval, evaluation harnesses, and human-in-the-loop review where needed." },
      { question: "Can you work with our existing data infrastructure?", answer: "Yes — we audit your existing stack before proposing new architecture." },
    ],
  },
  {
    id: "ai-agents",
    order: 4,
    title: "AI Agents",
    shortDescription: "Autonomous, tool-using agents that complete multi-step work end to end.",
    description: "We build agents that don't just chat — they plan, use tools, and complete real, multi-step tasks inside your product or internal workflows.",
    icon: Bot,
    points: ["Multi-step planning", "Tool use & function calling", "Human-in-the-loop review"],
    benefits: ["Automates multi-step workflows", "Safe tool-use guardrails", "Human review checkpoints", "Integrates with your existing tools"],
    process: [
      { title: "Workflow mapping", description: "We define the exact multi-step task the agent will own." },
      { title: "Tool design", description: "Function calling and tool access are scoped and secured." },
      { title: "Guardrails & testing", description: "Extensive testing against edge cases and failure modes." },
      { title: "Rollout", description: "Gradual rollout with human review checkpoints as needed." },
    ],
    technologies: ["LangGraph", "CrewAI", "OpenAI Functions", "Claude Tool Use", "Python", "Redis"],
    pricing: defaultPricing(5500),
    faqs: [
      { question: "How do you keep agents from making costly mistakes?", answer: "Scoped tool access, guardrails, and human-in-the-loop review for high-stakes actions." },
      { question: "Can agents integrate with our internal tools?", answer: "Yes, via API, MCP, or custom tool integrations." },
      { question: "What tasks are good fits for agents?", answer: "Multi-step, rules-based work — triage, research, drafting, data entry, and support workflows." },
    ],
  },
  {
    id: "rag-systems",
    order: 5,
    title: "RAG Systems",
    shortDescription: "Retrieval-augmented systems that ground LLMs in your knowledge.",
    description: "We build retrieval pipelines that ground large language models in your proprietary data — accurately, securely, and at scale.",
    icon: ScanText,
    points: ["Vector search", "Grounded generation", "Hallucination control"],
    benefits: ["Answers grounded in your data", "Reduced hallucination rate", "Scales to millions of documents", "Source citations built in"],
    process: [
      { title: "Data audit", description: "We assess your document sources and structure." },
      { title: "Pipeline design", description: "Chunking, embedding, and retrieval strategy tailored to your data." },
      { title: "Evaluation", description: "Retrieval accuracy tested against real user queries." },
      { title: "Deploy & scale", description: "Vector infrastructure that scales with your knowledge base." },
    ],
    technologies: ["Pinecone", "Weaviate", "pgvector", "LangChain", "LlamaIndex", "OpenAI Embeddings"],
    pricing: defaultPricing(5000),
    faqs: [
      { question: "What document types can you index?", answer: "PDFs, docs, wikis, tickets, transcripts, and structured databases." },
      { question: "How do you handle sensitive data?", answer: "Self-hosted vector stores and private deployments are available for regulated data." },
      { question: "How accurate are the answers?", answer: "We tune and evaluate retrieval quality continuously against real query sets before launch." },
    ],
  },
  {
    id: "cloud-architecture",
    order: 6,
    title: "Cloud Architecture",
    shortDescription: "Cloud infrastructure designed for cost efficiency and five-nines reliability.",
    description: "We architect multi-cloud infrastructure across AWS, Azure, and GCP, tuned for both reliability and cost — not just one or the other.",
    icon: Cloud,
    points: ["Multi-cloud", "Cost optimization", "Zero-downtime migrations"],
    benefits: ["Five-nines reliability target", "Right-sized cost optimization", "Zero-downtime migrations", "Disaster recovery built in"],
    process: [
      { title: "Infrastructure audit", description: "We assess current spend, reliability, and bottlenecks." },
      { title: "Architecture design", description: "A right-sized, multi-cloud-ready architecture is proposed." },
      { title: "Migration", description: "Careful, staged migration with zero customer-facing downtime." },
      { title: "Monitor & optimize", description: "Ongoing cost and performance tuning post-launch." },
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Cloudflare"],
    pricing: defaultPricing(4500),
    faqs: [
      { question: "Can you migrate us with zero downtime?", answer: "Yes, this is standard practice for every migration we run." },
      { question: "Do you work across multiple cloud providers?", answer: "Yes, we're multi-cloud by design and vendor-agnostic." },
      { question: "Will this reduce our cloud bill?", answer: "In most engagements, yes — cost optimization is part of every architecture review." },
    ],
  },
  {
    id: "devops",
    order: 7,
    title: "DevOps",
    shortDescription: "CI/CD, observability, and infrastructure-as-code done right.",
    description: "We turn deployment from an event into a non-event with CI/CD pipelines, infrastructure-as-code, and full observability stacks.",
    icon: Container,
    points: ["IaC (Terraform)", "Kubernetes", "Observability stacks"],
    benefits: ["Deploy multiple times a day, safely", "Full infrastructure-as-code", "Real-time observability", "Faster incident response"],
    process: [
      { title: "Pipeline audit", description: "We review your current deploy process and pain points." },
      { title: "IaC setup", description: "Infrastructure defined as code, version-controlled and reviewable." },
      { title: "CI/CD build", description: "Automated pipelines with test gates and rollback safety." },
      { title: "Observability", description: "Logging, metrics, and alerting wired into a single pane of glass." },
    ],
    technologies: ["Terraform", "Kubernetes", "GitHub Actions", "Docker", "Grafana", "Datadog"],
    pricing: defaultPricing(4000),
    faqs: [
      { question: "Do you support Kubernetes?", answer: "Yes, we design and manage Kubernetes clusters across major cloud providers." },
      { question: "Can you set up alerting for our on-call team?", answer: "Yes, full observability and alerting setup is part of every DevOps engagement." },
      { question: "How long does a CI/CD setup take?", answer: "Typically 2–4 weeks depending on the complexity of your existing infra." },
    ],
  },
  {
    id: "data-engineering",
    order: 8,
    title: "Data Engineering",
    shortDescription: "Pipelines and warehouses that make your data trustworthy and AI-ready.",
    description: "We build ETL/ELT pipelines and data warehouses that make your data queryable, trustworthy, and ready to power AI features.",
    icon: Database,
    points: ["ETL/ELT pipelines", "Data warehousing", "Real-time streaming"],
    benefits: ["Trustworthy, query-ready data", "Real-time streaming pipelines", "AI-ready data foundations", "Reduced data engineering overhead"],
    process: [
      { title: "Data audit", description: "We map every data source and its current quality issues." },
      { title: "Pipeline design", description: "ETL/ELT pipelines designed for your specific data volume and shape." },
      { title: "Warehouse build", description: "A scalable warehouse layer built for analytics and AI workloads." },
      { title: "Monitoring", description: "Data quality checks and pipeline monitoring built in." },
    ],
    technologies: ["Airflow", "dbt", "Snowflake", "BigQuery", "Kafka", "Spark"],
    pricing: defaultPricing(4500),
    faqs: [
      { question: "Can you work with our existing warehouse?", answer: "Yes, we audit and build on top of existing Snowflake, BigQuery, or Redshift setups." },
      { question: "Do you support real-time streaming?", answer: "Yes, via Kafka or managed streaming services depending on your stack." },
      { question: "Will this prepare our data for AI features?", answer: "That's the core goal — every pipeline we build is designed with AI-readiness in mind." },
    ],
  },
  {
    id: "machine-learning",
    order: 9,
    title: "Machine Learning",
    shortDescription: "Custom models trained and fine-tuned on your data.",
    description: "From forecasting to computer vision, we build and fine-tune custom models trained specifically on your data and use case.",
    icon: Sparkles,
    points: ["Predictive modeling", "Fine-tuning", "MLOps"],
    benefits: ["Models tuned to your exact data", "Full MLOps lifecycle support", "Explainable, auditable predictions", "Continuous retraining pipelines"],
    process: [
      { title: "Problem framing", description: "We define the prediction target and success metric together." },
      { title: "Data preparation", description: "Feature engineering and data quality work before any modeling." },
      { title: "Model development", description: "Iterative training, validation, and fine-tuning." },
      { title: "MLOps deployment", description: "Automated retraining and monitoring pipelines post-launch." },
    ],
    technologies: ["PyTorch", "scikit-learn", "Hugging Face", "MLflow", "SageMaker", "Vertex AI"],
    pricing: defaultPricing(6000),
    faqs: [
      { question: "Do you fine-tune open-weight models?", answer: "Yes, we fine-tune models like Llama on your proprietary data where appropriate." },
      { question: "How do you measure model performance?", answer: "Through rigorous validation sets and business-metric-aligned evaluation, not just accuracy scores." },
      { question: "Can you deploy models to our existing infra?", answer: "Yes, we build deployment pipelines compatible with your current cloud environment." },
    ],
  },
  {
    id: "automation",
    order: 10,
    title: "Automation",
    shortDescription: "Workflow automation that removes the manual glue between your tools.",
    description: "We build automation — from RPA to agentic workflows — that quietly saves your team hundreds of hours a month.",
    icon: Workflow,
    points: ["Process mining", "RPA", "Agentic workflows"],
    benefits: ["Hundreds of hours saved monthly", "Fewer manual errors", "Faster cross-tool workflows", "Scales without added headcount"],
    process: [
      { title: "Process mapping", description: "We identify the highest-leverage manual workflows to automate." },
      { title: "Automation design", description: "RPA, scripts, or agentic workflows designed for the specific task." },
      { title: "Build & test", description: "Automations tested thoroughly against edge cases before rollout." },
      { title: "Monitor", description: "Ongoing monitoring to catch failures before they impact your team." },
    ],
    technologies: ["Zapier", "n8n", "Make", "Python", "Playwright", "Temporal"],
    pricing: defaultPricing(2500),
    faqs: [
      { question: "What kind of workflows can you automate?", answer: "Anything repetitive and rules-based — data entry, reporting, approvals, notifications, and more." },
      { question: "Will this replace our existing tools?", answer: "No, automation typically connects your existing tools rather than replacing them." },
      { question: "How quickly can this be built?", answer: "Simple automations ship in days; complex agentic workflows take 2–4 weeks." },
    ],
  },
  {
    id: "cyber-security",
    order: 11,
    title: "Cyber Security",
    shortDescription: "Security woven into the build, not bolted on after.",
    description: "We bring security into the build from day one — audits, hardening, and compliance-ready infrastructure for teams that can't afford to get this wrong.",
    icon: ShieldCheck,
    points: ["Pen testing", "SOC 2 readiness", "Zero-trust architecture"],
    benefits: ["Security built in from day one", "Compliance-ready documentation", "Reduced attack surface", "Faster SOC 2 / ISO readiness"],
    process: [
      { title: "Security audit", description: "We assess your current attack surface and compliance gaps." },
      { title: "Hardening plan", description: "A prioritized remediation plan across infrastructure and code." },
      { title: "Implementation", description: "Zero-trust architecture and access controls implemented." },
      { title: "Ongoing testing", description: "Regular penetration testing and vulnerability monitoring." },
    ],
    technologies: ["AWS IAM", "Vault", "Snyk", "OWASP", "Okta", "Cloudflare"],
    pricing: defaultPricing(5000),
    faqs: [
      { question: "Do you help with SOC 2 or ISO 27001 readiness?", answer: "Yes, we prepare infrastructure and documentation for compliance audits." },
      { question: "Can you run a penetration test on our current app?", answer: "Yes, this is a standalone engagement we offer independently of a full build." },
      { question: "How often should we re-test?", answer: "We recommend quarterly reviews for regulated industries, bi-annual otherwise." },
    ],
  },
  {
    id: "consulting",
    order: 12,
    title: "Consulting",
    shortDescription: "Strategic technology and AI consulting for leadership teams.",
    description: "For teams that need a second opinion before committing — we advise on AI strategy, architecture decisions, and technical due diligence.",
    icon: Compass,
    points: ["AI strategy", "Technical due diligence", "Architecture review"],
    benefits: ["Vendor-agnostic recommendations", "Faster, better-informed decisions", "Reduced technical risk", "Direct access to senior engineers"],
    process: [
      { title: "Discovery call", description: "We understand your goals, constraints, and current thinking." },
      { title: "Deep-dive review", description: "Architecture, codebase, or AI strategy reviewed in depth." },
      { title: "Recommendation", description: "A clear, prioritized set of recommendations delivered." },
      { title: "Ongoing advisory", description: "Optional retainer for continued strategic support." },
    ],
    technologies: ["Architecture Review", "AI Strategy", "Tech Due Diligence", "Roadmapping"],
    pricing: defaultPricing(1500),
    faqs: [
      { question: "Is this a one-off engagement or ongoing?", answer: "Both options are available — a single deep-dive review or an ongoing monthly advisory retainer." },
      { question: "Do you only advise, or can you also build?", answer: "We can transition seamlessly from advisory into a build engagement if that's the right next step." },
      { question: "Who typically engages you for consulting?", answer: "Founders and CTOs evaluating AI strategy, an acquisition target, or a major architecture decision." },
    ],
  },
];

/* ------------------------- AI CAPABILITIES ------------------------- */

export const AI_CAPABILITIES: AICapability[] = [
  { id: "ai-agents", title: "AI Agents", description: "Autonomous, tool-using agents that complete multi-step work end to end.", icon: Bot },
  { id: "rag", title: "RAG", description: "Retrieval pipelines that ground answers in your own documents and data.", icon: ScanText },
  { id: "fine-tuning", title: "Fine-Tuning", description: "Custom-tuned models that speak in your product's exact voice and domain.", icon: Sparkles },
  { id: "chatbots", title: "Chatbots", description: "Conversational assistants tuned for accuracy, tone, and containment rate.", icon: MessagesSquare },
  { id: "private-gpt", title: "Private GPT", description: "Self-hosted, private language models — your data never leaves your VPC.", icon: Fingerprint },
  { id: "automation-ai", title: "AI Automation", description: "AI-driven automation that removes repetitive work from your team's day.", icon: Workflow },
];

/* ---------------------------- TECHNOLOGIES --------------------------- */

export const TECH_CATEGORIES: TechCategory[] = [
  { id: "frontend", label: "Frontend", items: [{ name: "Next.js" }, { name: "React" }, { name: "TypeScript" }, { name: "Tailwind CSS" }, { name: "Framer Motion" }] },
  { id: "backend", label: "Backend", items: [{ name: "Node.js" }, { name: "Python" }, { name: "FastAPI" }, { name: "NestJS" }, { name: "GraphQL" }] },
  { id: "cloud", label: "Cloud", items: [{ name: "AWS" }, { name: "Azure" }, { name: "Google Cloud" }, { name: "Vercel" }, { name: "Cloudflare" }] },
  { id: "ai", label: "AI", items: [{ name: "LangChain" }, { name: "CrewAI" }, { name: "LlamaIndex" }, { name: "Pinecone" }, { name: "Hugging Face" }] },
  { id: "devops", label: "DevOps", items: [{ name: "Docker" }, { name: "Kubernetes" }, { name: "Terraform" }, { name: "GitHub Actions" }, { name: "Grafana" }] },
  { id: "database", label: "Database", items: [{ name: "PostgreSQL" }, { name: "MongoDB" }, { name: "Redis" }, { name: "Supabase" }, { name: "Firebase" }] },
  { id: "mobile", label: "Mobile", items: [{ name: "Flutter" }, { name: "React Native" }, { name: "Swift" }, { name: "Kotlin" }] },
  { id: "ai-models", label: "AI Models", items: [{ name: "OpenAI" }, { name: "Claude" }, { name: "Gemini" }, { name: "Llama" }, { name: "Mistral" }] },
];

/* ---------------------------- INDUSTRIES ---------------------------- */

export const INDUSTRIES: Industry[] = [
  { id: "healthcare", name: "Healthcare", icon: HeartPulse, blurb: "HIPAA-ready patient and clinician tooling." },
  { id: "education", name: "Education", icon: GraduationCap, blurb: "Adaptive learning platforms and cohort tools." },
  { id: "retail", name: "Retail", icon: ShoppingBag, blurb: "Personalization and inventory intelligence." },
  { id: "finance", name: "Finance", icon: Landmark, blurb: "Fraud detection and compliant automation." },
  { id: "travel", name: "Travel", icon: Plane, blurb: "Dynamic pricing and itinerary intelligence." },
  { id: "manufacturing", name: "Manufacturing", icon: Factory, blurb: "Predictive maintenance and QA vision." },
  { id: "real-estate", name: "Real Estate", icon: Building2, blurb: "Valuation models and lead automation." },
  { id: "logistics", name: "Logistics", icon: Truck, blurb: "Route optimization and fleet visibility." },
  { id: "restaurants", name: "Restaurants", icon: UtensilsCrossed, blurb: "Ordering automation and demand forecasting." },
];

/* ---------------------------- CASE STUDIES --------------------------- */

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "hotel-sarkar",
    client: "Hotel Sarkar & Marriage Hall",
    industry: "Hospitality",
    location: "Thawe, Bihar",
    title: "A premium hospitality brand, brought online for Thawe",
    summary: "A full marketing website for a hotel and banquet hall serving travelers, weddings, and corporate events near Thawe Railway Station.",
    about:
      "Hotel Sarkar & Marriage Hall was founded with a singular vision — to bring premium hospitality to Thawe, Bihar. Conveniently located near Thawe Railway Station, it has become a preferred destination for travelers, business professionals, weddings, family celebrations, and corporate events. We designed and built a website that reflects that same premium feel online, giving guests an easy way to explore the property, its banquet spaces, and its amenities before they book.",
    metrics: [
      { label: "Live site", value: "Vercel" },
      { label: "Focus", value: "Hospitality" },
      { label: "Built with", value: "Next.js" },
    ],
    tags: ["Web Design", "Next.js", "Hospitality"],
    image: "/images/work/hotel-sarkar.jpg",
    liveUrl: "https://hotel-sarkar.vercel.app/",
  },
  {
    id: "mohit-enterprise",
    client: "Mohit Enterprise Group",
    industry: "Retail & Business",
    location: "Thawe, Gopalganj, Bihar",
    title: "A digital home for a growing multi-business retail group",
    summary: "A corporate website unifying multiple retail businesses under Mohit Enterprise Group's single brand identity.",
    about:
      "Mohit Enterprise Group (MEG) is a growing business group based in Thawe, Gopalganj, Bihar. Founded by Sheshnath Gupta, the company is built on trust, quality, and customer satisfaction, operating multiple successful retail businesses under one brand. Our job was to bring all of that under one clean, professional website — making it easy for customers and partners to understand what MEG does and the businesses it runs.",
    metrics: [
      { label: "Live site", value: "Custom domain" },
      { label: "Focus", value: "Retail Group" },
      { label: "Built with", value: "Next.js" },
    ],
    tags: ["Web Design", "Branding", "Business"],
    image: "/images/work/mohit-enterprise.jpg",
    liveUrl: "https://mohitmobile.in",
  },
  {
    id: "sandeep-traders",
    client: "Sandeep Traders",
    industry: "Building Materials",
    location: "Bihar",
    title: "A trusted supplier's catalog, made for the modern web",
    summary: "A clean, fast website presenting building materials to builders, contractors, and homeowners across Bihar.",
    about:
      "Sandeep Traders has been the trusted destination for builders, contractors, and homeowners across Bihar. The website reflects the company's commitment to quality building materials, reliable service, and a strong digital presence — giving customers a straightforward way to browse offerings and get in touch.",
    metrics: [
      { label: "Live site", value: "GitHub Pages" },
      { label: "Focus", value: "Building Materials" },
      { label: "Built with", value: "HTML/CSS/JS" },
    ],
    tags: ["Web Design", "Static Site", "Local Business"],
    image: "/images/work/sandeep-traders.jpg",
    liveUrl: "https://mandeepkumarkushwaha-cmyk.github.io/sandeep-traders/",
  },
  {
    id: "nav-bharat-school",
    client: "Nav Bharat Public School",
    industry: "Education",
    location: "Thawe, Gopalganj, Bihar",
    title: "A modern digital front door for a growing CBSE school",
    summary: "A full school website covering admissions, academics, faculty, campus life, and achievements for students and parents.",
    about:
      "Nav Bharat Public School is committed to providing quality education through academic excellence, innovation, discipline, and holistic student development. The website showcases the school's vision, admissions, academics, faculty, campus life, events, and achievements — creating a modern digital experience for students and parents alike.",
    metrics: [
      { label: "Status", value: "Live" },
      { label: "Focus", value: "Education" },
      { label: "Built with", value: "Next.js" },
    ],
    tags: ["Education", "Admissions", "CBSE"],
    image: "/images/work/nav-bharat-school.jpg",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  { step: "01", title: "Discover", description: "We map your business goals, technical constraints, and users before writing a line of code." },
  { step: "02", title: "Design", description: "Interfaces and system architecture designed in parallel, so form and function are never at odds." },
  { step: "03", title: "Develop", description: "Senior engineers build in short, demoable cycles — you see progress every week." },
  { step: "04", title: "Deploy", description: "Zero-downtime releases with full observability from the first user session onward." },
  { step: "05", title: "Scale", description: "As usage grows, we tune infrastructure and cost before it ever becomes a fire drill." },
];

export const FAQS: FaqItem[] = [
  { id: "f1", question: "How is AKA AI Studio different from a typical dev agency?", answer: "We're three founders, not a rotating cast of account managers. Every engagement is staffed by senior engineers end to end, with fixed scope and transparent pricing." },
  { id: "f2", question: "What does a typical engagement timeline look like?", answer: "Most engagements start with a two-week discovery and design sprint, followed by iterative build cycles with weekly demos. A production-ready MVP typically ships in 8–12 weeks." },
  { id: "f3", question: "Do you work with early-stage startups or only enterprises?", answer: "Both. We run parallel tracks: a lean build model for funded startups needing speed, and a compliance-first model for enterprises needing security and scale." },
  { id: "f4", question: "Can you integrate with our existing codebase and cloud infra?", answer: "Yes. Most engagements begin inside an existing codebase and cloud environment. We audit before we build." },
  { id: "f5", question: "What happens after launch?", answer: "We offer maintenance and scaling retainers with defined SLAs, on-call response, and quarterly roadmap reviews." },
  { id: "f6", question: "Which AI models and frameworks do you work with?", answer: "We're model-agnostic across OpenAI, Claude, Gemini, and open-weight models like Llama, orchestrated with LangChain or CrewAI depending on the use case." },
];

export const BLOG_POSTS: BlogPost[] = [
  { id: "b1", title: "Why every SaaS product needs an AI-native architecture in 2026", excerpt: "Bolting a chatbot onto an existing product isn't AI strategy. Here's what AI-native actually means.", category: "AI Strategy", date: "Jun 2026", readTime: "6 min read" },
  { id: "b2", title: "RAG vs. fine-tuning: choosing the right approach for your data", excerpt: "A practical framework for deciding when to retrieve, when to fine-tune, and when to do both.", category: "Engineering", date: "May 2026", readTime: "8 min read" },
  { id: "b3", title: "How we cut clinical charting time by 63% with an ambient AI copilot", excerpt: "A behind-the-scenes look at the architecture behind our Solace Health case study.", category: "Case Study", date: "Apr 2026", readTime: "5 min read" },
  { id: "b4", title: "The founder's guide to hiring your first AI engineering partner", excerpt: "What to ask, what to avoid, and how to spot a team that ships versus one that just demos.", category: "Founder Notes", date: "Mar 2026", readTime: "7 min read" },
  { id: "b5", title: "Zero-downtime cloud migrations: a step-by-step playbook", excerpt: "The exact process we use to migrate production systems without a single minute of downtime.", category: "Cloud", date: "Feb 2026", readTime: "9 min read" },
  { id: "b6", title: "Design systems that scale: lessons from three years of client builds", excerpt: "What makes a component library actually get reused instead of rebuilt every project.", category: "Design", date: "Jan 2026", readTime: "6 min read" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "AI Engineering", href: "/services#ai-engineering" },
    { label: "Web Development", href: "/services#web-development" },
    { label: "Cloud Architecture", href: "/services#cloud-architecture" },
    { label: "Data Engineering", href: "/services#data-engineering" },
  ],
  resources: [
    { label: "Case Studies", href: "/work" },
    { label: "Technologies", href: "/technologies" },
    { label: "Industries", href: "/industries" },
  ],
};
