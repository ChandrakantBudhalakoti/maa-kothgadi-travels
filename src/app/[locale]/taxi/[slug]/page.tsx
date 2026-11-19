import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Check, ChevronDown } from "lucide-react";
import { CtaBand } from "@/components/home/Sections";
import { RouteCard } from "@/components/home/RouteCard";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { WhatsAppIcon } from "@/components/ui/icons";
import { ButtonLink, Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { getRoute, routes } from "@/data/routes";
import { vehicles } from "@/data/vehicles";
import { isLocale, locales, tr } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { pathFor, waLink } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => routes.map((r) => ({ locale, slug: r.slug })));
}

async function load(params: Props["params"]) {
  const { locale, slug } = await params;
  const route = getRoute(slug);
  if (!isLocale(locale) || !route) notFound();
  return { locale, route };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, route } = await load(params);
  return buildMetadata({ locale, path: `/taxi/${route.slug}`, title: tr(route.seoTitle, locale), description: tr(route.description, locale), image: route.image });
}

export default async function RoutePage({ params }: Props) {
  const { locale, route } = await load(params);
  const title = tr(route.title, locale);
  const others = routes.filter((r) => r.slug !== route.slug);
  // Suggested vehicles: a compact car, a family vehicle and an SUV.
  const suggested = [vehicles[3], vehicles[0], vehicles[2]];

  return (
    <>
      {/* Breadcrumbs only. The FAQ is visible content; no FAQPage markup (rich results are not available for this kind of site). */}
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: title, path: pathFor(locale, `/taxi/${route.slug}`) }])} />
      <PageHero locale={locale} title={title} lead={tr(route.intro, locale)} trail={[{ label: title }]} />

      <Container className="grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.42fr] lg:gap-16">
        <div>
          {route.sections.map((s) => (
            <section key={s.heading.en} className="mb-10 last:mb-0">
              <h2 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{tr(s.heading, locale)}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {tr(p, locale)}
                </p>
              ))}
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-cream-100 p-6 ring-1 ring-forest-900/10">
            <h2 className="font-sans text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">{tr(ui.routes.quick, locale)}</h2>
            <ul className="mt-4 space-y-3">
              {route.highlights[locale].map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <Check aria-hidden width={18} height={18} className="mt-1 shrink-0 text-forest-600" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <ButtonLink href={waLink(tr(route.waMessage, locale))} variant="whatsapp">
                <WhatsAppIcon width={18} height={18} />
                {tr(ui.routes.book, locale)}
              </ButtonLink>
              <ButtonLink href={pathFor(locale, "/contact#book")} variant="dark">
                {tr(ui.cta.bookRide, locale)}
              </ButtonLink>
            </div>
            <p className="mt-4 text-sm text-ink-soft">{tr(ui.routes.note, locale)}</p>
          </div>
        </aside>
      </Container>

      <section className="bg-cream-100 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{tr(ui.routes.vehicles, locale)}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {suggested.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{tr(ui.routes.faq, locale)}</h2>
          <div className="mt-8 divide-y divide-forest-900/10 rounded-2xl bg-white ring-1 ring-forest-900/10">
            {route.faqs.map((f) => (
              <details key={f.q.en} className="group p-5 sm:p-6">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-forest-900">
                  {tr(f.q, locale)}
                  <ChevronDown aria-hidden width={20} height={20} className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-ink-soft">{tr(f.a, locale)}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20">
        <Container>
          <h2 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{tr(ui.routes.other, locale)}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {others.map((r) => (
              <RouteCard key={r.slug} route={r} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
