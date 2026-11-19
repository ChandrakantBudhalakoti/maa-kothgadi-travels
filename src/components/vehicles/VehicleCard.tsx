import Image from "next/image";
import { Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { waLink } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { Vehicle } from "@/data/vehicles";

export function VehicleCard({ vehicle, locale, priority = false }: { vehicle: Vehicle; locale: Locale; priority?: boolean }) {
  const message =
    locale === "hi"
      ? `Namaste Maa Kothgadi Tour & Travels! Mujhe ${vehicle.name} book karni hai. Kripya availability aur rate batayein.`
      : `Hello Maa Kothgadi Tour & Travels! I would like to book the ${vehicle.name}. Please share availability and rates.`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-forest-900/5">
      <div className="relative aspect-[4/5] overflow-hidden bg-forest-100">
        <Image
          src={vehicle.image}
          alt={tr(vehicle.alt, locale)}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          style={{ objectPosition: vehicle.position }}
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-2xl font-semibold text-forest-900">{vehicle.name}</h3>
        <p className="mt-2 text-[0.95rem] text-ink-soft">{tr(vehicle.description, locale)}</p>
        <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-gold-700 uppercase">{tr(ui.vehicle.bestFor, locale)}</p>
        <ul className="mt-2 space-y-1.5 text-[0.95rem]">
          {vehicle.useCases[locale].map((u) => (
            <li key={u} className="flex items-start gap-2">
              <Check aria-hidden width={17} height={17} className="mt-1 shrink-0 text-forest-600" />
              {u}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-6">
          <a
            href={waLink(message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-forest-800 px-5 py-3 text-[0.95rem] font-semibold text-cream-50 transition-colors hover:bg-forest-700"
          >
            <WhatsAppIcon width={18} height={18} />
            {tr(ui.cta.bookThis, locale)}
            <span className="sr-only"> - {vehicle.name}</span>
          </a>
        </div>
      </div>
    </article>
  );
}
