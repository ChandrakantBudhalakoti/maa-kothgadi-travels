import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Car, MapPin, Phone, Plane, Route, Sparkles } from "lucide-react";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { WhatsAppIcon } from "@/components/ui/icons";
import { business, pathFor, waLink } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { services } from "@/data/services";
import { fleetPhoto } from "@/data/vehicles";

const serviceIcons = { route: Route, plane: Plane, "map-pin": MapPin } as const;
const whyIcons = { sparkles: Sparkles, steering: Car, phone: Phone, route: Route } as const;

export function ServicesGrid({ locale }: { locale: Locale }) {
  return (
    <ul className="grid gap-px overflow-hidden rounded-2xl bg-forest-900/10 ring-1 ring-forest-900/10 md:grid-cols-3">
      {services.map((s, i) => {
        const Icon = serviceIcons[s.icon];
        return (
          <li key={s.slug} className="flex flex-col bg-cream-50 p-7 sm:p-8">
            <div className="flex items-start justify-between">
              <Icon aria-hidden width={30} height={30} strokeWidth={1.5} className="text-forest-700" />
              <span aria-hidden className="font-display text-4xl text-cream-300">
                0{i + 1}
              </span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-semibold text-forest-900">{tr(s.title, locale)}</h3>
            <p className="mt-3 flex-1 text-ink-soft">{tr(s.short, locale)}</p>
            <Link href={pathFor(locale, `/services#${s.slug}`)} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest-800 underline-offset-4 hover:underline">
              {tr(ui.cta.learnMore, locale)}
              <ArrowRight aria-hidden width={16} height={16} />
              <span className="sr-only"> - {tr(s.title, locale)}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function WhyUs({ locale }: { locale: Locale }) {
  return (
    <section className="bg-cream-100">
      <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card sm:aspect-[16/11] lg:aspect-[4/5]">
          <Image src={fleetPhoto.src} alt={tr(fleetPhoto.alt, locale)} fill sizes="(min-width: 1024px) 560px, 92vw" className="object-cover" style={{ objectPosition: fleetPhoto.position }} />
        </div>
        <div>
          <SectionHeading eyebrow={tr(ui.home.whyEyebrow, locale)} title={tr(ui.home.whyTitle, locale)} />
          <ul className="mt-8 space-y-6">
            {ui.why.map((w) => {
              const Icon = whyIcons[w.icon as keyof typeof whyIcons];
              return (
                <li key={w.icon} className="flex gap-4">
                  <span aria-hidden className="grid size-11 shrink-0 place-items-center rounded-full bg-forest-800 text-gold-400">
                    <Icon width={20} height={20} />
                  </span>
                  <div>
                    <h3 className="font-sans text-lg font-semibold text-forest-900">{tr(w.title, locale)}</h3>
                    <p className="mt-1 text-ink-soft">{tr(w.body, locale)}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function Steps({ locale }: { locale: Locale }) {
  return (
    <ol className="grid gap-8 md:grid-cols-3">
      {ui.steps.map((s, i) => (
        <li key={i} className="relative border-t-2 border-gold-500 pt-6">
          <span aria-hidden className="font-display text-5xl text-forest-700/30">
            {i + 1}
          </span>
          <h3 className="mt-2 font-sans text-xl font-semibold text-forest-900">{tr(s.title, locale)}</h3>
          <p className="mt-2 text-ink-soft">{tr(s.body, locale)}</p>
        </li>
      ))}
    </ol>
  );
}

/** Closing call-to-action used at the bottom of most pages. */
export function CtaBand({ locale, title, lead }: { locale: Locale; title?: string; lead?: string }) {
  return (
    <section className="topo bg-forest-900 text-cream-50">
      <Container className="py-16 text-center sm:py-20">
        <h2 className="mx-auto max-w-3xl text-3xl leading-tight font-semibold sm:text-4xl lg:text-5xl">{title ?? tr(ui.home.ctaTitle, locale)}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-cream-200">{lead ?? tr(ui.home.ctaLead, locale)}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink href={`tel:${business.phones[0].tel}`}>
            <Phone aria-hidden width={18} height={18} />
            {tr(ui.cta.callNow, locale)}: {business.phones[0].display}
          </ButtonLink>
          <ButtonLink href={waLink()} variant="whatsapp">
            <WhatsAppIcon width={18} height={18} />
            {tr(ui.cta.whatsapp, locale)}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
