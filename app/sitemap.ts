import type { MetadataRoute } from "next";
import { SITE } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/work",
    "/services",
    "/industries",
    "/technologies",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return routes.map((route) => ({
    url: `${SITE.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
