import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  initials: string;
  skills: string[];
  bio: string;
  gradient: string;
  image?: string;
}

export interface ServiceCategory {
  id: string;
  order: number;
  title: string;
  shortDescription: string;
  description: string;
  icon: LucideIcon;
  points: string[];
  benefits: string[];
  process: { title: string; description: string }[];
  technologies: string[];
  pricing: { tier: string; price: string; blurb: string; features: string[] }[];
  faqs: { question: string; answer: string }[];
}

export interface AICapability {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  id: string;
  label: string;
  items: TechItem[];
}

export interface FloatingIcon {
  label: string;
  icon: LucideIcon;
}

export interface Industry {
  id: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  about: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  image?: string;
  liveUrl?: string;
  comingSoon?: boolean;
  location?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  business?: string | null;
  rating: number;
  message: string;
  created_at: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}
