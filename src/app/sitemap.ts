import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { hreflang, locales } from "@/i18n/config";
import { pathFor, SITE_URL } from "@/lib/site";

const pages = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/vehicles", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.9, changeFrequency: "yearly" as const },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...pages.map((p) => ({ ...p, path: p.path, lastModified: undefined as Date | undefined })),
    ...posts.map((post) => ({ path: `/blog/${post.slug}`, priority: 0.6, changeFrequency: "yearly" as const, lastModified: new Date(post.date) })),
  ];
  return entries.flatMap((e) =>
    locales.map((locale) => ({
      url: `${SITE_URL}${pathFor(locale, e.path)}`,
      lastModified: e.lastModified,
      changeFrequency: e.changeFrequency,
      priority: e.priority,
      alternates: { languages: Object.fromEntries(locales.map((l) => [hreflang[l], `${SITE_URL}${pathFor(l, e.path)}`])) },
    })),
  );
}
