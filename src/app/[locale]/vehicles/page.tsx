import type { Metadata } from "next";
import { CtaBand } from "@/components/home/Sections";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { ButtonLink, Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { vehicles } from "@/data/vehicles";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { pathFor } from "@/lib/site";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.vehicles;
  return buildMetadata({ locale, path: "/vehicles", title: tr(m.title, locale), description: tr(m.description, locale), image: "/images/innova-2.jpg" });
}

export default async function VehiclesPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const crumb = tr(ui.nav.vehicles, locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/vehicles") }])} />
      <PageHero locale={locale} title={tr(ui.pages.vehicles.title, locale)} lead={tr(ui.pages.vehicles.lead, locale)} trail={[{ label: crumb }]} />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} locale={locale} priority={i < 3} />
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-soft">{tr(ui.vehicle.seating, locale)}</p>

        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-cream-100 p-8 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-forest-900">{tr(ui.vehicle.helpTitle, locale)}</h2>
            <p className="mt-2 max-w-xl text-ink-soft">{tr(ui.vehicle.helpBody, locale)}</p>
          </div>
          <ButtonLink href={pathFor(locale, "/contact#book")} variant="dark" className="shrink-0">
            {tr(ui.cta.bookRide, locale)}
          </ButtonLink>
        </div>
      </Container>

      <CtaBand locale={locale} />
    </>
  );
}
