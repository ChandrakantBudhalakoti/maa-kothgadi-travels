import { Quote } from "lucide-react";
import { Stars } from "@/components/ui/primitives";
import { tr, hreflang, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { PublicReview, ReviewSummary } from "@/types/review";

export function ReviewSummaryCard({ summary, locale }: { summary: ReviewSummary; locale: Locale }) {
  const r = ui.reviews;
  if (!summary.count || summary.average === null) {
    return (
      <div className="rounded-2xl bg-cream-100 p-6 ring-1 ring-forest-900/10">
        <p className="font-display text-xl font-semibold text-forest-900">{tr(r.emptyTitle, locale)}</p>
        <p className="mt-2 text-ink-soft">{tr(r.emptyBody, locale)}</p>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-5 rounded-2xl bg-cream-100 p-6 ring-1 ring-forest-900/10">
      <p className="font-display text-6xl leading-none font-semibold text-forest-900" aria-label={`${tr(r.avgLabel, locale)}: ${summary.average} ${tr(r.outOf, locale)}`}>
        {summary.average.toFixed(1)}
      </p>
      <div>
        <Stars value={summary.average} size={22} label={`${summary.average} / 5`} />
        <p className="mt-1.5 text-sm text-ink-soft">
          {summary.count === 1 ? tr(r.countOne, locale) : `${summary.count} ${tr(r.countMany, locale)}`}
        </p>
      </div>
    </div>
  );
}

export function ReviewCard({ review, locale }: { review: PublicReview; locale: Locale }) {
  const date = new Date(review.createdAt).toLocaleDateString(hreflang[locale] === "hi-Latn" ? "en-IN" : "en-IN", { year: "numeric", month: "short" });
  return (
    <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-forest-900/5">
      <Quote aria-hidden width={28} height={28} className="text-gold-500" />
      <div className="mt-3">
        <Stars value={review.rating} label={`${review.rating} / 5`} />
      </div>
      <blockquote className="mt-3 flex-1 whitespace-pre-line text-[0.97rem] text-ink" lang={hreflang[review.lang]}>
        {review.text}
      </blockquote>
      <footer className="mt-5 flex items-center justify-between border-t border-forest-900/10 pt-4 text-sm">
        <span className="font-semibold text-forest-900">{review.name}</span>
        <span className="text-ink-soft">
          <time dateTime={review.createdAt}>{date}</time> · {review.lang === "hi" ? "Hinglish" : "English"}
        </span>
      </footer>
    </article>
  );
}
