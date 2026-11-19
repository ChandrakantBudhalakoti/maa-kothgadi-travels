import { notFound } from "next/navigation";
import { posts } from "@/data/blog";
import { isLocale, locales } from "@/i18n/config";
import { sitemapPages } from "@/lib/sitemap-pages";
import { pathFor, SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Per-language sitemap at /en/sitemap.xml and /hi/sitemap.xml. Search Console properties that are
 * scoped to /en/ or /hi/ only accept sitemaps that live under that path and list only its URLs.
 * (Language alternates are declared with hreflang in each page's <head>.)
 */
export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const paths = [...sitemapPages.map((p) => p.path), ...posts.map((p) => `/blog/${p.slug}`)];
  const urls = paths.map((path) => `<url><loc>${SITE_URL}${pathFor(locale, path)}</loc></url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
