import type { SVGProps } from "react";

/** Brand icons (the Lucide package no longer ships brand logos). */
type P = SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false } as const;

export const WhatsAppIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.59 5.93L0 24l6.35-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.42-8.43ZM12.06 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.77.99 1-3.68-.24-.38a9.88 9.88 0 0 1-1.52-5.26c0-5.46 4.45-9.9 9.92-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.9 7c0 5.46-4.45 9.92-9.87 9.92Zm5.43-7.43c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

export const InstagramIcon = (p: P) => (
  <svg {...base} fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
  </svg>
);

export const FacebookIcon = (p: P) => (
  <svg {...base} fill="currentColor" {...p}>
    <path d="M13.5 22v-8.2h2.8l.45-3.3H13.5V8.4c0-.95.27-1.6 1.62-1.6h1.73V3.85A22.6 22.6 0 0 0 14.3 3.7c-2.5 0-4.2 1.5-4.2 4.3v2.5H7.3v3.3h2.8V22h3.4Z" />
  </svg>
);
