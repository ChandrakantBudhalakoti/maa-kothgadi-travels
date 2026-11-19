import { routes } from "@/data/routes";

/** Pages listed in the sitemaps (path without the locale prefix). */
export const sitemapPages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/vehicles", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
  ...routes.map((r) => ({ path: `/taxi/${r.slug}`, priority: 0.9, changeFrequency: "monthly" as const })),
];
