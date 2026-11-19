import Link from "next/link";
import { Phone } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { MobileNav } from "./MobileNav";
import { NavLinks } from "./NavLinks";
import { business, pathFor } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export function Logo({ locale, light = false }: { locale: Locale; light?: boolean }) {
  return (
    <Link href={pathFor(locale)} className="flex shrink-0 items-center gap-3 whitespace-nowrap" aria-label={`${business.name} - ${tr(ui.nav.home, locale)}`}>
      <span aria-hidden className={`grid size-11 shrink-0 place-items-center rounded-full border-2 font-display text-lg font-semibold ${light ? "border-gold-400 text-gold-400" : "border-forest-800 bg-forest-800 text-gold-400"}`}>
        MK
      </span>
      <span className={`leading-tight ${light ? "text-cream-50" : "text-forest-900"}`}>
        <span className="block font-display text-lg font-semibold">Maa Kothgadi</span>
        <span className={`block text-[0.7rem] font-semibold tracking-[0.2em] uppercase ${light ? "text-gold-400" : "text-gold-700"}`}>Tour &amp; Travels</span>
      </span>
    </Link>
  );
}

export function navItems(locale: Locale) {
  return [
    { href: pathFor(locale), label: tr(ui.nav.home, locale) },
    { href: pathFor(locale, "/about"), label: tr(ui.nav.about, locale) },
    { href: pathFor(locale, "/services"), label: tr(ui.nav.services, locale) },
    { href: pathFor(locale, "/vehicles"), label: tr(ui.nav.vehicles, locale) },
    { href: pathFor(locale, "/reviews"), label: tr(ui.nav.reviews, locale) },
    { href: pathFor(locale, "/blog"), label: tr(ui.nav.blog, locale) },
    { href: pathFor(locale, "/contact"), label: tr(ui.nav.contact, locale) },
  ];
}

export function Header({ locale }: { locale: Locale }) {
  const items = navItems(locale);
  const bookHref = pathFor(locale, "/contact#book");
  return (
    <header className="sticky top-0 z-50 border-b border-forest-900/10 bg-cream-50/95 backdrop-blur supports-[backdrop-filter]:bg-cream-50/85">
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo locale={locale} />
        <NavLinks items={items.slice(1)} label={tr(ui.nav.main, locale)} />
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher locale={locale} />
          </div>
          <a href={`tel:${business.phones[0].tel}`} className="hidden items-center gap-2 rounded-full bg-forest-800 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-cream-50 transition-colors hover:bg-forest-700 min-[1400px]:inline-flex">
            <Phone aria-hidden width={16} height={16} />
            {business.phones[0].display}
          </a>
          <Link href={bookHref} className="hidden rounded-full bg-gold-400 px-5 py-2.5 text-sm font-semibold text-forest-950 transition-colors hover:bg-gold-500 whitespace-nowrap md:inline-flex lg:hidden xl:inline-flex">
            {tr(ui.nav.book, locale)}
          </Link>
          <MobileNav locale={locale} items={items} bookHref={bookHref} />
        </div>
      </div>
    </header>
  );
}
