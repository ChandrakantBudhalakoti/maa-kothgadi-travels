import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { Analytics } from "@/components/layout/Analytics";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/primitives";
import { hreflang, locales, tr } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { businessJsonLd, SITE_NAME, websiteJsonLd } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import "@/styles/globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", axes: ["opsz"] });
const sans = Figtree({ subsets: ["latin"], variable: "--font-figtree", display: "swap" });

export const viewport: Viewport = { themeColor: "#12281b", width: "device-width", initialScale: 1 };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  await resolveLocale(params);
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: SITE_NAME, template: `%s | ${SITE_NAME}` },
    applicationName: SITE_NAME,
    formatDetection: { telephone: true },
    verification: { google: "yKOHr6XY2H0EL2VwtjjFDZkJFklTn1Ec6zig88enJ1Y" },
  };
}

export default async function LocaleLayout({ children, params }: LocaleParams & { children: React.ReactNode }) {
  const locale = await resolveLocale(params);
  return (
    <html lang={hreflang[locale]} className={`${display.variable} ${sans.variable}`}>
      <body>
        <a href="#main" className="sr-only z-[60] rounded-full bg-gold-400 px-5 py-3 font-semibold text-forest-950 focus:not-sr-only focus:fixed focus:top-3 focus:left-3">
          {tr(ui.nav.skip, locale)}
        </a>
        <Header locale={locale} />
        <main id="main">{children}</main>
        <Footer locale={locale} />
        <FloatingActions locale={locale} />
        <JsonLd data={[businessJsonLd(locale), websiteJsonLd(locale)]} />
        <Analytics />
      </body>
    </html>
  );
}
