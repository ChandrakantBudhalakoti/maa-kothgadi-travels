import Link from "next/link";
import { Container } from "@/components/ui/primitives";
import { defaultLocale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

/** Rendered inside the locale layout. Shows both languages because the locale is not known here. */
export default function NotFound() {
  return (
    <Container className="py-24 text-center">
      <p className="font-display text-7xl text-gold-500">404</p>
      <h1 className="mt-4 text-3xl font-semibold text-forest-900">
        {ui.notFound.title.en} / {ui.notFound.title.hi}
      </h1>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">{ui.notFound.body.en}</p>
      <Link href={`/${defaultLocale}`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-forest-800 px-7 font-semibold text-cream-50 hover:bg-forest-700">
        {ui.notFound.home.en}
      </Link>
      <Link href="/hi" className="mt-8 ml-3 inline-flex min-h-12 items-center rounded-full border border-forest-800/30 px-7 font-semibold text-forest-900 hover:bg-forest-900 hover:text-cream-50">
        {ui.notFound.home.hi}
      </Link>
    </Container>
  );
}
