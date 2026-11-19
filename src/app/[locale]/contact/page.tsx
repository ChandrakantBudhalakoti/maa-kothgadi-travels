import type { Metadata } from "next";
import { MapPin, Phone } from "lucide-react";
import { BookingForm } from "@/components/contact/BookingForm";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { ButtonLink, Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { vehicles } from "@/data/vehicles";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { business, pathFor, waLink } from "@/lib/site";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.contact;
  return buildMetadata({ locale, path: "/contact", title: tr(m.title, locale), description: tr(m.description, locale) });
}

export default async function ContactPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const c = ui.contact;
  const crumb = tr(ui.nav.contact, locale);
  const vehicleNames = [...new Set(vehicles.map((v) => v.name))];
  const card = "rounded-2xl bg-white p-6 shadow-card ring-1 ring-forest-900/5";

  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/contact") }])} />
      <PageHero locale={locale} title={tr(ui.pages.contact.title, locale)} lead={tr(ui.pages.contact.lead, locale)} trail={[{ label: crumb }]} />

      <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="space-y-6">
          <section className={card} aria-labelledby="call-h">
            <h2 id="call-h" className="flex items-center gap-2.5 text-xl font-semibold text-forest-900">
              <Phone aria-hidden width={22} height={22} className="text-forest-700" />
              {tr(c.callTitle, locale)}
            </h2>
            <p className="mt-1 text-sm text-ink-soft">{tr(c.callBody, locale)}</p>
            <ul className="mt-4 space-y-3">
              {business.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="flex min-h-12 items-center justify-between rounded-xl bg-cream-100 px-5 font-display text-xl font-semibold text-forest-900 transition-colors hover:bg-cream-200">
                    {p.display}
                    <Phone aria-hidden width={18} height={18} className="text-forest-700" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={card} aria-labelledby="wa-h">
            <h2 id="wa-h" className="flex items-center gap-2.5 text-xl font-semibold text-forest-900">
              <WhatsAppIcon className="text-[#128c4a]" />
              {tr(c.waTitle, locale)}
            </h2>
            <p className="mt-1 text-ink-soft">{tr(c.waBody, locale)}</p>
            <div className="mt-4">
              <ButtonLink href={waLink()} variant="whatsapp">
                <WhatsAppIcon width={18} height={18} />
                {tr(ui.cta.whatsapp, locale)}
              </ButtonLink>
            </div>
          </section>

          <section className={card} aria-labelledby="social-h">
            <h2 id="social-h" className="text-xl font-semibold text-forest-900">
              {tr(c.socialTitle, locale)}
            </h2>
            <ul className="mt-4 space-y-2">
              {[
                { href: business.social.instagram, label: c.instagram, Icon: InstagramIcon },
                { href: business.social.instagramOwner, label: c.instagramOwner, Icon: InstagramIcon },
                { href: business.social.facebook, label: c.facebook, Icon: FacebookIcon },
              ].map(({ href, label, Icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-3 font-medium text-forest-800 underline-offset-4 hover:underline">
                    <Icon className="text-forest-700" />
                    {tr(label, locale)}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className={card} aria-labelledby="area-h">
            <h2 id="area-h" className="flex items-center gap-2.5 text-xl font-semibold text-forest-900">
              <MapPin aria-hidden width={22} height={22} className="text-forest-700" />
              {tr(c.areaTitle, locale)}
            </h2>
            <p className="mt-2 text-ink-soft">{tr(c.areaBody, locale)}</p>
            {business.googleMapsUrl && (
              <div className="mt-4">
                <ButtonLink href={business.googleMapsUrl} variant="outline">
                  Google Maps
                </ButtonLink>
              </div>
            )}
          </section>
        </div>

        <section id="book" aria-labelledby="book-h" className="scroll-mt-24 rounded-2xl bg-white p-6 shadow-card ring-1 ring-forest-900/5 sm:p-8 lg:self-start">
          <h2 id="book-h" className="text-2xl font-semibold text-forest-900 sm:text-3xl">
            {tr(c.bookTitle, locale)}
          </h2>
          <p className="mt-2 mb-7 text-ink-soft">{tr(c.bookBody, locale)}</p>
          <BookingForm locale={locale} vehicleNames={vehicleNames} />
        </section>
      </Container>
    </>
  );
}
