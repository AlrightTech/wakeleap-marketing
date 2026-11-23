import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { features } from "@/lib/features";
import { comparisons } from "@/lib/compare";
import { posts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "/",
    "/features",
    "/pricing",
    "/compare",
    "/download",
    "/about",
    "/editors",
    "/contact",
    "/privacy",
    "/terms",
    "/blog",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));

  features.forEach((f) => {
    entries.push({
      url: `${SITE_URL}/features/${f.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  });

  comparisons.forEach((c) => {
    entries.push({
      url: `${SITE_URL}/compare/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  posts.forEach((p) => {
    entries.push({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.dateModified),
      changeFrequency: "monthly",
      priority: 0.6,
    });
  });

  return entries;
}