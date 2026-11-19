import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pathFor } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { TaxiRoute } from "@/data/routes";

export function RouteCard({ route, locale }: { route: TaxiRoute; locale: Locale }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-forest-900/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-100">
        <Image src={route.image} alt={tr(route.imageAlt, locale)} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: route.imagePosition }} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl leading-snug font-semibold text-forest-900">
          <Link href={pathFor(locale, `/taxi/${route.slug}`)} className="after:absolute after:inset-0 hover:underline hover:underline-offset-4">
            {tr(route.label, locale)}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] text-ink-soft">{tr(route.description, locale)}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-800">
          {tr(ui.routes.view, locale)}
          <ArrowRight aria-hidden width={16} height={16} />
        </span>
      </div>
    </article>
  );
}
