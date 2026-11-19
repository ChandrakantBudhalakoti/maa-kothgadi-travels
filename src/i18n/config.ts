export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

/** hreflang values. "hi" URLs are Hindi written in Roman script (Hinglish). */
export const hreflang: Record<Locale, string> = { en: "en-IN", hi: "hi-Latn" };
export const ogLocale: Record<Locale, string> = { en: "en_IN", hi: "hi_IN" };

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** A string available in both languages. */
export type L = Record<Locale, string>;
export const tr = (value: L, locale: Locale): string => value[locale];
