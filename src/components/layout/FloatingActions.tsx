import { Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { business, waLink } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

/** Sticky call + WhatsApp bar on mobile, floating WhatsApp button on larger screens. */
export function FloatingActions({ locale }: { locale: Locale }) {
  return (
    <>
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-px border-t border-forest-950/20 bg-forest-950/20 md:hidden">
        <a href={`tel:${business.phones[0].tel}`} className="flex min-h-14 items-center justify-center gap-2 bg-forest-800 font-semibold text-cream-50">
          <Phone aria-hidden width={18} height={18} />
          {tr(ui.cta.callNow, locale)}
        </a>
        <a href={waLink()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 bg-[#128c4a] font-semibold text-white">
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tr(ui.cta.whatsapp, locale)}
        className="fixed right-6 bottom-6 z-40 hidden size-14 place-items-center rounded-full bg-[#128c4a] text-white shadow-lg transition-transform hover:scale-105 md:grid"
      >
        <WhatsAppIcon width={28} height={28} />
      </a>
    </>
  );
}
