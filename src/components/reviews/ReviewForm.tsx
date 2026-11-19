"use client";

import { useState, type FormEvent } from "react";
import { Star } from "lucide-react";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

type Status = "idle" | "sending" | "done" | "error" | "unavailable";
type Errors = Partial<Record<"rating" | "name" | "text" | "consent", string>>;

const input = "mt-1.5 w-full rounded-xl border border-forest-800/25 bg-white px-4 py-3 text-base placeholder:text-ink-soft/60 focus:border-forest-700";

export function ReviewForm({ locale }: { locale: Locale }) {
  const r = ui.reviews;
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = new FormData(form);
    const rating = Number(d.get("rating"));
    const name = String(d.get("name") ?? "").trim();
    const text = String(d.get("text") ?? "").trim();
    const next: Errors = {};
    if (!rating) next.rating = tr(r.vRating, locale);
    if (name.length < 2 || name.length > 60) next.name = tr(r.vName, locale);
    if (text.length < 10) next.text = tr(r.vText, locale);
    if (!d.get("consent")) next.consent = tr(r.vConsent, locale);
    setErrors(next);
    if (Object.keys(next).length) {
      const first = Object.keys(next)[0];
      (form.querySelector(first === "rating" ? "[name=rating]" : `[name=${first}]`) as HTMLElement | null)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rating, name, text, lang: d.get("lang"), website: d.get("website") }),
      });
      if (res.status === 503) return setStatus("unavailable");
      if (!res.ok) return setStatus("error");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const err = (k: keyof Errors) =>
    errors[k] ? (
      <p id={`rf-${k}-err`} className="mt-1.5 text-sm font-medium text-red-700">
        {errors[k]}
      </p>
    ) : null;

  if (status === "done") {
    return (
      <div role="status" className="rounded-2xl bg-forest-100 p-6 text-forest-900">
        <p className="font-display text-xl font-semibold">{tr(r.success, locale)}</p>
        <button type="button" onClick={() => setStatus("idle")} className="mt-4 text-sm font-semibold underline underline-offset-4">
          {tr(r.formTitle, locale)}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      {/* Honeypot: hidden from people, visible to naive bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="rf-website">Website</label>
        <input id="rf-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset aria-describedby={errors.rating ? "rf-rating-err" : undefined}>
        <legend className="text-sm font-semibold text-forest-900">{tr(r.rating, locale)}</legend>
        <div className="star-input mt-1.5">
          {[5, 4, 3, 2, 1].map((n) => (
            <span key={n} className="contents">
              <input type="radio" name="rating" id={`rf-star-${n}`} value={n} />
              <label htmlFor={`rf-star-${n}`} title={`${n} / 5`}>
                <Star width={32} height={32} aria-hidden className="fill-current" />
                <span className="sr-only">{n} / 5</span>
              </label>
            </span>
          ))}
        </div>
        {err("rating")}
      </fieldset>

      <div>
        <label htmlFor="rf-name" className="text-sm font-semibold text-forest-900">
          {tr(r.name, locale)}
        </label>
        <input id="rf-name" name="name" autoComplete="name" maxLength={60} placeholder={tr(r.namePh, locale)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "rf-name-err" : undefined} className={input} />
        {err("name")}
      </div>

      <div>
        <label htmlFor="rf-text" className="text-sm font-semibold text-forest-900">
          {tr(r.text, locale)}
        </label>
        <textarea id="rf-text" name="text" rows={5} maxLength={1000} placeholder={tr(r.textPh, locale)} aria-invalid={Boolean(errors.text)} aria-describedby={errors.text ? "rf-text-err" : undefined} className={input} />
        {err("text")}
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-forest-900">{tr(r.language, locale)}</legend>
        <div className="mt-1.5 flex gap-6">
          {(["en", "hi"] as const).map((l) => (
            <label key={l} className="inline-flex items-center gap-2">
              <input type="radio" name="lang" value={l} defaultChecked={l === locale} className="size-4 accent-forest-800" />
              {tr(l === "en" ? r.langEn : r.langHi, locale)}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label className="flex items-start gap-3 text-sm">
          <input type="checkbox" name="consent" aria-invalid={Boolean(errors.consent)} aria-describedby={errors.consent ? "rf-consent-err" : undefined} className="mt-1 size-5 shrink-0 accent-forest-800" />
          {tr(r.consent, locale)}
        </label>
        {err("consent")}
      </div>

      <div aria-live="polite">
        {status === "error" && <p className="mb-3 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-800">{tr(r.error, locale)}</p>}
        {status === "unavailable" && <p className="mb-3 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-800">{tr(r.unavailable, locale)}</p>}
      </div>

      <button type="submit" disabled={status === "sending"} className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest-800 px-7 py-3 font-semibold text-cream-50 transition-colors hover:bg-forest-700 disabled:opacity-60">
        {tr(status === "sending" ? r.submitting : r.submit, locale)}
      </button>
    </form>
  );
}
