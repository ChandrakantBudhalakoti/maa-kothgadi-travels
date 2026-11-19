"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/** Desktop navigation with the current section highlighted. */
export function NavLinks({ items, label }: { items: { href: string; label: string }[]; label: string }) {
  const pathname = usePathname();
  return (
    <nav aria-label={label} className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap rounded-full px-3 py-2 text-[0.95rem] font-medium transition-colors ${active ? "text-forest-900" : "text-ink-soft hover:text-forest-900"}`}
              >
                {item.label}
                {active && <span aria-hidden className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded bg-gold-500" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
