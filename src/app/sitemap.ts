import type { MetadataRoute } from "next";
import { posts } from "@/data/blog";
import { hreflang, locales } from "@/i18n/config";
import { sitemapPages } from "@/lib/sitemap-pages";
import { pathFor, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    ...sitemapPages.map((p) => ({ ...p, path: p.path, lastModified: undefined as Date | undefined })),
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
