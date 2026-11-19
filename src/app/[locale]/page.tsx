import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { BookingForm } from "@/components/contact/BookingForm";
import { Hero } from "@/components/home/Hero";
import { CtaBand, ServicesGrid, Steps, WhyUs } from "@/components/home/Sections";
import { BlogCard } from "@/components/blog/BlogCard";
import { ReviewCard, ReviewSummaryCard } from "@/components/reviews/ReviewList";
import { VehicleCard } from "@/components/vehicles/VehicleCard";
import { ButtonLink, Container, SectionHeading } from "@/components/ui/primitives";
import { posts } from "@/data/blog";
import { vehicles } from "@/data/vehicles";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { listApproved, summarize } from "@/lib/reviews-store";
import { buildMetadata } from "@/lib/seo";
import { business, pathFor, waLink } from "@/lib/site";
import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";

export const revalidate = 300;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.home;
  return buildMetadata({ locale, title: tr(m.title, locale), description: tr(m.description, locale) });
}

export default async function HomePage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const h = ui.home;
  const reviews = await listApproved();
  const summary = summarize(reviews);
  const featured = [vehicles[0], vehicles[2], vehicles[3]];

  return (
    <>
      <Hero locale={locale} />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={tr(h.servicesEyebrow, locale)} title={tr(h.servicesTitle, locale)} lead={tr(h.servicesLead, locale)} />
          <div className="mt-10">
            <ServicesGrid locale={locale} />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={tr(h.fleetEyebrow, locale)} title={tr(h.fleetTitle, locale)} lead={tr(h.fleetLead, locale)} />
            <ButtonLink href={pathFor(locale, "/vehicles")} variant="outline" className="shrink-0 self-start sm:self-auto">
              {tr(ui.cta.allVehicles, locale)}
              <ArrowRight aria-hidden width={17} height={17} />
            </ButtonLink>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((v) => (
              <VehicleCard key={v.slug} vehicle={v} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <WhyUs locale={locale} />

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={tr(h.stepsEyebrow, locale)} title={tr(h.stepsTitle, locale)} lead={tr(h.stepsLead, locale)} />
          <div className="mt-12">
            <Steps locale={locale} />
          </div>
        </Container>
      </section>

      <section id="book" aria-labelledby="book-h" className="topo scroll-mt-16 bg-forest-900 py-16 text-cream-50 sm:py-20 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <SectionHeading as="h2" tone="dark" eyebrow={tr(ui.cta.bookRide, locale)} title={tr(ui.contact.bookTitle, locale)} lead={tr(ui.contact.bookBody, locale)} />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href={`tel:${business.phones[0].tel}`}>
                <Phone aria-hidden width={18} height={18} />
                {business.phones[0].display}
              </ButtonLink>
              <ButtonLink href={waLink()} variant="whatsapp">
                <WhatsAppIcon width={18} height={18} />
                {tr(ui.cta.whatsapp, locale)}
              </ButtonLink>
            </div>
            <ul className="mt-10 hidden space-y-4 border-t border-cream-50/15 pt-8 lg:block">
              {[
                { en: "Reply within minutes on WhatsApp", hi: "WhatsApp par kuch hi minute mein reply" },
                { en: "Clear rates, no hidden charges", hi: "Saaf rates, koi hidden charge nahi" },
                { en: "Verified drivers, clean vehicles", hi: "Verified driver, saaf gaadiyan" },
                { en: "Available for airport, outstation and local trips", hi: "Airport, outstation aur local trips ke liye uplabdh" },
              ].map((t) => (
                <li key={t.en} className="flex items-start gap-3 text-cream-50/90">
                  <span aria-hidden className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold-400/20 text-sm text-gold-400">
                    ✓
                  </span>
                  {tr(t, locale)}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 text-ink shadow-card sm:p-8">
            <h2 id="book-h" className="sr-only">
              {tr(ui.contact.bookTitle, locale)}
            </h2>
            <BookingForm locale={locale} vehicleNames={[...new Set(vehicles.map((v) => v.name))]} />
          </div>
        </Container>
      </section>

      <section className="bg-cream-100 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeading eyebrow={tr(h.reviewsEyebrow, locale)} title={tr(h.reviewsTitle, locale)} lead={tr(h.reviewsLead, locale)} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <ReviewSummaryCard summary={summary} locale={locale} />
              <div className="mt-5">
                <ButtonLink href={pathFor(locale, "/reviews#write")} variant="dark">
                  {tr(h.reviewsCta, locale)}
                </ButtonLink>
              </div>
            </div>
            {reviews.slice(0, 2).map((r) => (
              <ReviewCard key={r.id} review={r} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow={tr(h.blogEyebrow, locale)} title={tr(h.blogTitle, locale)} />
            <Link href={pathFor(locale, "/blog")} className="inline-flex items-center gap-2 font-semibold text-forest-800 underline-offset-4 hover:underline">
              {tr(ui.cta.allArticles, locale)}
              <ArrowRight aria-hidden width={17} height={17} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.slice(0, 3).map((p) => (
              <BlogCard key={p.slug} post={p} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}
