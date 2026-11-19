import type { Metadata } from "next";
import { Check, MapPin, Plane, Route } from "lucide-react";
import { CtaBand } from "@/components/home/Sections";
import { RouteCard } from "@/components/home/RouteCard";
import { routes } from "@/data/routes";
import { ButtonLink, Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { services } from "@/data/services";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { pathFor } from "@/lib/site";

const icons = { route: Route, plane: Plane, "map-pin": MapPin } as const;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.services;
  return buildMetadata({ locale, path: "/services", title: tr(m.title, locale), description: tr(m.description, locale), image: "/images/innova.jpg" });
}

export default async function ServicesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const crumb = tr(ui.nav.services, locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/services") }])} />
      <PageHero locale={locale} title={tr(ui.pages.services.title, locale)} lead={tr(ui.pages.services.lead, locale)} trail={[{ label: crumb }]} />

      <Container className="py-16 sm:py-20">
        <ul className="space-y-6">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.slug} id={s.slug} className="scroll-mt-24 rounded-2xl bg-white p-7 shadow-card ring-1 ring-forest-900/5 sm:p-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:gap-12">
                  <div>
                    <div className="flex items-center gap-4">
                      <Icon aria-hidden width={32} height={32} strokeWidth={1.5} className="text-forest-700" />
                      <span aria-hidden className="font-display text-3xl text-cream-300">
                        0{i + 1}
                      </span>
                    </div>
                    <h2 className="mt-5 text-3xl font-semibold text-forest-900">{tr(s.title, locale)}</h2>
                    <p className="mt-4 text-lg text-ink-soft">{tr(s.description, locale)}</p>
                    <div className="mt-6">
                      <ButtonLink href={pathFor(locale, "/contact#book")} variant="dark">
                        {tr(ui.cta.bookRide, locale)}
                      </ButtonLink>
                    </div>
                  </div>
                  <div className="rounded-xl bg-cream-100 p-6">
                    <h3 className="font-sans text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">{tr(ui.services.includes, locale)}</h3>
                    <ul className="mt-4 space-y-3">
                      {s.points[locale].map((p) => (
                        <li key={p} className="flex items-start gap-2.5">
                          <Check aria-hidden width={18} height={18} className="mt-1 shrink-0 text-forest-600" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
        <p className="mt-10 max-w-3xl text-lg text-ink-soft">{tr(ui.services.other, locale)}</p>

        <h2 id="routes" className="mt-16 scroll-mt-24 text-3xl font-semibold text-forest-900">{tr(ui.routes.title, locale)}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {routes.map((r) => (
            <RouteCard key={r.slug} route={r} locale={locale} />
          ))}
        </div>
      </Container>

      <CtaBand locale={locale} />
    </>
  );
}
