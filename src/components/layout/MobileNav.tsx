"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

export type NavItem = { href: string; label: string };

export function MobileNav({ locale, items, bookHref }: { locale: Locale; items: NavItem[]; bookHref: string }) {
  const pathname = usePathname();
  // The menu is open only for the page it was opened on, so navigating closes it automatically.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const setOpen = (value: boolean | ((v: boolean) => boolean)) => setOpenOn((cur) => ((typeof value === "function" ? value(cur === pathname) : value) ? pathname : null));
  const button = useRef<HTMLButtonElement>(null);

  // Escape closes, and the page behind does not scroll while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="lg:hidden">
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={tr(open ? ui.nav.close : ui.nav.menu, locale)}
        onClick={() => setOpen((v) => !v)}
        className="grid size-11 place-items-center rounded-full border border-forest-800/20 text-forest-900"
      >
        {open ? <X aria-hidden width={22} height={22} /> : <Menu aria-hidden width={22} height={22} />}
      </button>

      {open && createPortal(
        <div id="mobile-menu" className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-forest-900 px-6 pt-6 pb-10 text-cream-50">
          <nav aria-label={tr(ui.nav.main, locale)}>
            <ul className="divide-y divide-cream-50/10">
              {items.map((item) => {
                const active = pathname === item.href || (item.href.split("/").length > 2 && pathname.startsWith(item.href));
                return (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={active ? "page" : undefined} className={`flex min-h-14 items-center font-display text-2xl ${active ? "text-gold-400" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mt-8 flex flex-col gap-4">
            <Link href={bookHref} className="inline-flex min-h-12 items-center justify-center rounded-full bg-gold-400 px-6 py-3 font-semibold text-forest-950">
              {tr(ui.cta.bookRide, locale)}
            </Link>
            <div className="flex justify-center">
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>,
        document.body,
      )}
    </div>
  );
}
