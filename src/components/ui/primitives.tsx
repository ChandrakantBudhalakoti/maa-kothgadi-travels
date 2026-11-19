import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { pathFor } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  tone = "light",
  align = "left",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  as?: "h1" | "h2";
}) {
  const dark = tone === "dark";
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className={`mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] ${dark ? "text-gold-400" : "text-gold-700"} ${align === "center" ? "justify-center" : ""}`}>
          <span aria-hidden className={`h-px w-8 ${dark ? "bg-gold-400" : "bg-gold-500"}`} />
          {eyebrow}
        </p>
      )}
      <Tag className={`font-display text-3xl leading-tight font-semibold sm:text-4xl ${dark ? "text-cream-50" : "text-forest-900"}`}>{title}</Tag>
      {lead && <p className={`mt-4 text-base sm:text-lg ${dark ? "text-cream-200" : "text-ink-soft"}`}>{lead}</p>}
    </div>
  );
}

const variants = {
  primary: "bg-gold-400 text-forest-950 hover:bg-gold-500 focus-visible:outline-cream-50",
  dark: "bg-forest-800 text-cream-50 hover:bg-forest-700",
  outline: "border border-forest-800/30 text-forest-900 hover:bg-forest-900 hover:text-cream-50",
  outlineLight: "border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-forest-900",
  whatsapp: "bg-[#128c4a] text-white hover:bg-[#0e7a40]",
} as const;

export function buttonClass(variant: keyof typeof variants = "primary", extra = "") {
  return `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold transition-colors duration-200 ${variants[variant]} ${extra}`;
}

export function ButtonLink({
  href,
  variant = "primary",
  children,
  external,
  className = "",
  ...rest
}: {
  href: string;
  variant?: keyof typeof variants;
  children: ReactNode;
  external?: boolean;
  className?: string;
  "aria-label"?: string;
  "data-track"?: string;
}) {
  const cls = buttonClass(variant, className);
  if (external || href.startsWith("tel:") || href.startsWith("http")) {
    return (
      <a href={href} className={cls} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Stars({ value, size = 18, label }: { value: number; size?: number; label?: string }) {
  return (
    <span className="inline-flex items-center gap-0.5" role="img" aria-label={label ?? `${value} / 5`}>
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} width={size} height={size} aria-hidden className={n <= Math.round(value) ? "fill-gold-500 text-gold-500" : "fill-transparent text-cream-300"} />
      ))}
    </span>
  );
}

export function Breadcrumbs({ locale, trail }: { locale: Locale; trail: { label: string; href?: string }[] }) {
  return (
    <nav aria-label={tr(ui.nav.breadcrumb, locale)} className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-cream-200">
        <li>
          <Link href={pathFor(locale)} className="underline-offset-4 hover:underline">
            {tr(ui.nav.home, locale)}
          </Link>
        </li>
        {trail.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <ChevronRight width={14} height={14} aria-hidden className="text-gold-400" />
            {item.href ? (
              <Link href={item.href} className="underline-offset-4 hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-cream-50">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Dark page header used on inner pages (carries the H1 and breadcrumbs). */
export function PageHero({ locale, title, lead, trail }: { locale: Locale; title: string; lead: string; trail: { label: string; href?: string }[] }) {
  return (
    <section className="topo relative bg-forest-900 text-cream-50">
      <Container className="py-12 sm:py-16 lg:py-20">
        <Breadcrumbs locale={locale} trail={trail} />
        <h1 className="mt-6 max-w-3xl text-4xl leading-[1.1] font-semibold sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-cream-200">{lead}</p>
      </Container>
    </section>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
