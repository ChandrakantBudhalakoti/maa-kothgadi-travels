import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { ButtonLink, Container } from "@/components/ui/primitives";
import { business, pathFor } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export function Hero({ locale }: { locale: Locale }) {
  const h = ui.home;
  return (
    <section className="topo relative overflow-hidden bg-forest-900 text-cream-50">
      <Container className="grid items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-24">
        <div>
          <p className="rise mb-5 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            <span aria-hidden className="h-px w-8 bg-gold-400" />
            {tr(h.eyebrow, locale)}
          </p>
          <h1 className="rise rise-2 text-[2.75rem] leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">
            {tr(h.h1a, locale)}
            <br />
            <span className="text-gold-400 italic">{tr(h.h1b, locale)}</span>
          </h1>
          <p className="rise rise-3 mt-6 max-w-xl text-lg text-cream-200">{tr(h.lead, locale)}</p>

          <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={"#book"}>{tr(ui.cta.bookRide, locale)}</ButtonLink>
            <ButtonLink href={`tel:${business.phones[0].tel}`} variant="outlineLight">
              <Phone aria-hidden width={18} height={18} />
              {business.phones[0].display}
            </ButtonLink>
          </div>

          <ul className="mt-10 grid gap-3 text-[0.95rem] text-cream-100 sm:grid-cols-3">
            {h.trust[locale].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Check aria-hidden width={18} height={18} className="mt-0.5 shrink-0 text-gold-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Real vehicle photograph, framed. */}
        <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div aria-hidden className="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[10rem] rounded-b-2xl border border-gold-400/60" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[10rem] rounded-b-2xl bg-forest-800">
            <Image
              src="/images/hero.jpg"
              alt={tr({ en: "A white Hyundai car from Maa Kothgadi Tour & Travels parked in front of pine trees", hi: "Cheed ke pedon ke saamne khadi Maa Kothgadi Tour & Travels ki safed Hyundai gaadi" }, locale)}
              fill
              priority
              sizes="(min-width: 1024px) 440px, 90vw"
              className="object-cover"
              style={{ objectPosition: "50% 60%" }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
