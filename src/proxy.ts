import { NextResponse, type NextRequest } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

/** Redirect un-prefixed URLs to /en or /hi (based on Accept-Language). */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return NextResponse.next();
  }
  const accept = request.headers.get("accept-language") ?? "";
  const locale = /^\s*hi\b/i.test(accept) ? "hi" : defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url, 307);
}

export const config = {
  matcher: ["/((?!api|admin|_next|images|favicon.ico|icon|apple-icon|sitemap.xml|robots.txt|.*\..*).*)"],
};
