import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/", "/admin"] }],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/en/sitemap.xml`, `${SITE_URL}/hi/sitemap.xml`],
    host: SITE_URL,
  };
}
