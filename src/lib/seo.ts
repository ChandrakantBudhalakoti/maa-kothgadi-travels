import type { Metadata } from "next";
import { business, SITE_URL, pathFor } from "./site";
import { hreflang, locales, ogLocale, type Locale } from "@/i18n/config";

export const SITE_NAME = business.name;
export const DEFAULT_OG_IMAGE = "/images/hero.jpg";

type Args = {
  locale: Locale;
  /** Path WITHOUT the locale prefix, e.g. "/about" or "" for the homepage. */
  path?: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export function buildMetadata({ locale, path = "", title, description, image = DEFAULT_OG_IMAGE, type = "website", publishedTime, noindex }: Args): Metadata {
  const url = `${SITE_URL}${pathFor(locale, path)}`;
  const languages: Record<string, string> = Object.fromEntries(locales.map((l) => [hreflang[l], `${SITE_URL}${pathFor(l, path)}`]));
  languages["x-default"] = `${SITE_URL}${pathFor("en", path)}`;
  return {
    title,
    description,
    alternates: { canonical: url, languages },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: image, alt: title }],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const abs = (p: string) => (p.startsWith("http") ? p : `${SITE_URL}${p}`);

/** Business details here are limited to verified facts: name, phones, social profiles. No address or rating. */
export function businessJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "@id": `${SITE_URL}/#business`,
    name: business.name,
    url: `${SITE_URL}${pathFor(locale)}`,
    image: abs(DEFAULT_OG_IMAGE),
    telephone: business.phones.map((p) => p.tel),
    hasMap: business.googleMapsUrl,
    sameAs: [business.social.instagram, business.social.instagramOwner, business.social.facebook],
    areaServed: [
      { "@type": "AdministrativeArea", name: "Uttarakhand" },
      { "@type": "City", name: "Nainital" },
      { "@type": "City", name: "Haldwani" },
    ],
    knowsLanguage: ["en", "hi"],
    makesOffer: ["Outstation taxi", "Airport pickup and drop", "Local taxi"].map((n) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: n },
    })),
  };
}

export function websiteJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: business.name,
    url: `${SITE_URL}${pathFor(locale)}`,
    inLanguage: hreflang[locale],
    publisher: { "@id": `${SITE_URL}/#business` },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: `${SITE_URL}${item.path}` })),
  };
}

export function articleJsonLd(a: { locale: Locale; path: string; title: string; description: string; image: string; date: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    image: abs(a.image),
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: hreflang[a.locale],
    mainEntityOfPage: `${SITE_URL}${pathFor(a.locale, a.path)}`,
    author: { "@type": "Organization", name: business.name },
    publisher: { "@type": "Organization", name: business.name },
  };
}
