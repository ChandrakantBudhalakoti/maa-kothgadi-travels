"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages } from "lucide-react";
import { locales, hreflang, tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

const labels: Record<Locale, { short: string; full: string }> = {
  en: { short: "EN", full: "English" },
  hi: { short: "हिंदी", full: "Hinglish" },
};

/** Switches language while staying on the same page: /en/about <-> /hi/about. */
export function LanguageSwitcher({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname() || `/${locale}`;
  const rest = pathname.replace(/^\/(en|hi)(?=\/|$)/, "");

  return (
    <div role="group" aria-label={tr(ui.nav.language, locale)} className={`inline-flex items-center rounded-full border border-forest-800/20 bg-cream-100 p-0.5 text-sm ${className}`}>
      <Languages aria-hidden width={16} height={16} className="mx-1.5 text-forest-700" />
      {locales.map((l) => {
        const active = l === locale;
        return (
          <Link
            key={l}
            href={`/${l}${rest}`}
            hrefLang={hreflang[l]}
            lang={hreflang[l]}
            aria-current={active ? "true" : undefined}
            aria-label={labels[l].full}
            className={`rounded-full px-3 py-1.5 font-semibold transition-colors ${active ? "bg-forest-800 text-cream-50" : "text-forest-800 hover:bg-cream-200"}`}
          >
            {l === "en" ? labels.en.short : labels.hi.full}
          </Link>
        );
      })}
    </div>
  );
}
