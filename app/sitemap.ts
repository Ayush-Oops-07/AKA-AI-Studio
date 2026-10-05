import type { MetadataRoute } from "next";
import { SITE, PROJECTS } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/work", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/services", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/industries", changeFrequency: "monthly" as const, priority: 0.85 },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/technologies", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.75 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${SITE.url}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const projectEntries: MetadataRoute.Sitemap = PROJECTS.map((project) => ({
    url: `${SITE.url}/work/${project.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticEntries, ...projectEntries];
}
