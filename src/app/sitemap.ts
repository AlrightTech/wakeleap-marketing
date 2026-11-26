import type { MetadataRoute } from "next";
import { features } from "@/lib/features";
import { comparisons } from "@/lib/compare";
import { posts } from "@/lib/blog";

/** Hardcoded canonical — live Contabo domain (wakeleap.app has no DNS). */
const BASE_URL = "https://wakeleap.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    { path: "", priority: 1 },
    { path: "/features", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/compare", priority: 0.8 },
    { path: "/download", priority: 0.9 },
    { path: "/about", priority: 0.5 },
    { path: "/editors", priority: 0.4 },
    { path: "/contact", priority: 0.5 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
    { path: "/blog", priority: 0.8 },
  ];

  const staticRoutes = staticPaths.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    priority: r.priority,
  }));

  const featureRoutes = features.map((f) => ({
    url: `${BASE_URL}/features/${f.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const compareRoutes = comparisons.map((c) => ({
    url: `${BASE_URL}/compare/${c.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    priority: 0.6,
  }));

  return [...staticRoutes, ...featureRoutes, ...compareRoutes, ...blogRoutes];
}
