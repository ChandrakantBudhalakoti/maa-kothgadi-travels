import Image from "next/image";
import type { Metadata } from "next";
import { FacebookIcon, InstagramIcon } from "@/components/ui/icons";
import { CtaBand } from "@/components/home/Sections";
import { Container, JsonLd, PageHero, SectionHeading } from "@/components/ui/primitives";
import { fleetPhoto } from "@/data/vehicles";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { business, pathFor } from "@/lib/site";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.about;
  return buildMetadata({ locale, path: "/about", title: tr(m.title, locale), description: tr(m.description, locale), image: "/images/gadiyan.jpg" });
}

export default async function AboutPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const a = ui.about;
  const crumb = tr(ui.nav.about, locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/about") }])} />
      <PageHero locale={locale} title={tr(ui.pages.about.title, locale)} lead={tr(ui.pages.about.lead, locale)} trail={[{ label: crumb }]} />

      <section className="py-16 sm:py-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading title={tr(a.storyTitle, locale)} />
            <div className="mt-6 space-y-4 text-lg text-ink-soft">
              <p>{tr(a.storyP1, locale)}</p>
              <p>{tr(a.storyP2, locale)}</p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-card sm:aspect-[16/11] lg:aspect-[4/5]">
            <Image src={fleetPhoto.src} alt={tr(fleetPhoto.alt, locale)} fill sizes="(min-width: 1024px) 540px, 92vw" className="object-cover" style={{ objectPosition: fleetPhoto.position }} />
          </div>
        </Container>
      </section>

      <section className="bg-forest-900 py-16 text-cream-50 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading tone="dark" title={tr(a.missionTitle, locale)} />
            <p className="mt-5 font-display text-2xl leading-snug text-gold-400 italic">{tr(a.missionBody, locale)}</p>
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold">{tr(a.valuesTitle, locale)}</h2>
            <ul className="mt-6 divide-y divide-cream-50/15">
              {a.values.map((v) => (
                <li key={v.title.en} className="py-5 first:pt-0">
                  <h3 className="font-sans text-lg font-semibold text-gold-400">{tr(v.title, locale)}</h3>
                  <p className="mt-1.5 text-cream-200">{tr(v.body, locale)}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="max-w-3xl">
          <SectionHeading title={tr(a.trustTitle, locale)} />
          <p className="mt-5 text-lg text-ink-soft">{tr(a.trustBody, locale)}</p>
          <h3 className="mt-10 font-sans text-sm font-semibold tracking-[0.16em] text-gold-700 uppercase">{tr(a.followTitle, locale)}</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            <li>
              <a href={business.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-forest-800/25 px-5 font-semibold text-forest-900 hover:bg-forest-900 hover:text-cream-50">
                <InstagramIcon /> Instagram
              </a>
            </li>
            <li>
              <a href={business.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-forest-800/25 px-5 font-semibold text-forest-900 hover:bg-forest-900 hover:text-cream-50">
                <FacebookIcon /> Facebook
              </a>
            </li>
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
