import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { ReviewCard, ReviewSummaryCard } from "@/components/reviews/ReviewList";
import { ReviewForm } from "@/components/reviews/ReviewForm";
import { ButtonLink, Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { listApproved, summarize } from "@/lib/reviews-store";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { business, pathFor } from "@/lib/site";

export const revalidate = 300;

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.reviews;
  return buildMetadata({ locale, path: "/reviews", title: tr(m.title, locale), description: tr(m.description, locale) });
}

export default async function ReviewsPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const r = ui.reviews;
  const crumb = tr(ui.nav.reviews, locale);
  const reviews = await listApproved();
  const summary = summarize(reviews);

  return (
    <>
      {/* Breadcrumbs only. Deliberately NO Review/AggregateRating schema: Google disallows self-serving
          reviews for LocalBusiness-type entities, and these are the business's own collected reviews. */}
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/reviews") }])} />
      <PageHero locale={locale} title={tr(ui.pages.reviews.title, locale)} lead={tr(ui.pages.reviews.lead, locale)} trail={[{ label: crumb }]} />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:gap-14">
          <div>
            <ReviewSummaryCard summary={summary} locale={locale} />
            {reviews.length > 0 && (
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {reviews.map((rev) => (
                  <li key={rev.id}>
                    <ReviewCard review={rev} locale={locale} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          <aside id="write" className="scroll-mt-24 space-y-8 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-forest-900/5 sm:p-8">
              <h2 className="text-2xl font-semibold text-forest-900">{tr(r.formTitle, locale)}</h2>
              <p className="mt-2 mb-6 text-ink-soft">{tr(r.formBody, locale)}</p>
              <ReviewForm locale={locale} />
            </div>

            <div className="rounded-2xl bg-cream-100 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-forest-900">{tr(r.googleTitle, locale)}</h2>
              <p className="mt-2 text-ink-soft">{tr(r.googleBody, locale)}</p>
              {business.googleReviewUrl ? (
                <div className="mt-5">
                  <ButtonLink href={business.googleReviewUrl} variant="dark">
                    {tr(ui.cta.googleReview, locale)}
                    <ExternalLink aria-hidden width={16} height={16} />
                  </ButtonLink>
                </div>
              ) : (
                <p className="mt-4 text-sm font-medium text-gold-700">{tr(r.googleSoon, locale)}</p>
              )}
            </div>
          </aside>
        </div>
      </Container>
    </>
  );
}
