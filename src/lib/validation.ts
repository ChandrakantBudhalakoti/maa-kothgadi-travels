/** Server-side validation for review submissions (the client validates too, but is never trusted). */
export type ReviewInput = { rating: number; name: string; text: string; lang: "en" | "hi" };

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s+/g, " ").trim().slice(0, max) : "";

export function parseReview(body: unknown): { ok: true; value: ReviewInput } | { ok: false; field: "rating" | "name" | "text" | "lang" } {
  const b = (body ?? {}) as Record<string, unknown>;
  const rating = Number(b.rating);
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) return { ok: false, field: "rating" };
  const name = clean(b.name, 60);
  if (name.length < 2) return { ok: false, field: "name" };
  // Keep line breaks in the review body but normalise everything else.
  const text = typeof b.text === "string" ? b.text.replace(/\r/g, "").replace(/[^\S\n]+/g, " ").replace(/\n{3,}/g, "\n\n").trim().slice(0, 1000) : "";
  if (text.length < 10) return { ok: false, field: "text" };
  const lang = b.lang === "hi" ? "hi" : b.lang === "en" ? "en" : null;
  if (!lang) return { ok: false, field: "lang" };
  return { ok: true, value: { rating, name, text, lang } };
}

/** Very small in-memory limiter: best-effort protection against a single client flooding submissions. */
const hits = new Map<string, number[]>();
export function rateLimited(key: string, max = 3, windowMs = 10 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((t) => now - t < windowMs);
  if (recent.length >= max) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}
