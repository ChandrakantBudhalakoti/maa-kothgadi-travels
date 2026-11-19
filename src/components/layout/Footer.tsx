import Link from "next/link";
import { Phone } from "lucide-react";
import { Logo, navItems } from "./Header";
import { Container } from "@/components/ui/primitives";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/ui/icons";
import { business, waLink } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export function Footer({ locale }: { locale: Locale }) {
  const items = navItems(locale);
  const social = [
    { href: business.social.instagram, label: "Instagram", Icon: InstagramIcon },
    { href: business.social.facebook, label: "Facebook", Icon: FacebookIcon },
  ];
  return (
    <footer className="topo bg-forest-950 text-cream-200">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo locale={locale} light />
          <p className="mt-5 max-w-sm text-sm leading-relaxed">{tr(ui.footer.about, locale)}</p>
          <ul className="mt-6 flex gap-3">
            {social.map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-11 place-items-center rounded-full border border-cream-50/25 text-cream-50 transition-colors hover:border-gold-400 hover:text-gold-400">
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label={tr(ui.footer.explore, locale)}>
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">{tr(ui.footer.explore, locale)}</h2>
          <ul className="mt-4 space-y-1">
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-block py-1.5 text-[0.95rem] underline-offset-4 hover:text-cream-50 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-sans text-sm font-semibold tracking-[0.18em] text-gold-400 uppercase">{tr(ui.footer.reach, locale)}</h2>
          <ul className="mt-4 space-y-2">
            {business.phones.map((p) => (
              <li key={p.tel}>
                <a href={`tel:${p.tel}`} className="inline-flex items-center gap-2.5 py-1.5 text-[0.95rem] hover:text-cream-50">
                  <Phone aria-hidden width={17} height={17} className="text-gold-400" />
                  {p.display}
                </a>
              </li>
            ))}
            <li>
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 py-1.5 text-[0.95rem] hover:text-cream-50">
                <WhatsAppIcon width={17} height={17} className="text-gold-400" />
                {tr(ui.cta.whatsapp, locale)}
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <div className="border-t border-cream-50/10">
        <Container className="flex flex-col gap-2 py-5 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {business.name}. {tr(ui.footer.rights, locale)}
          </p>
          <p className="font-display text-base text-gold-400 italic">{tr(ui.footer.tagline, locale)}</p>
        </Container>
      </div>
    </footer>
  );
}
