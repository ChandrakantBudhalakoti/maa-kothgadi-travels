import Script from "next/script";
import { business } from "@/lib/site";

/** Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID is set. */
export function Analytics() {
  const id = business.gaId;
  if (!/^G-[A-Z0-9]+$/.test(id)) return null;
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${id}`} strategy="afterInteractive" />
      <Script id="ga4" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${id}');`}</Script>
    </>
  );
}
