export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://effortless-llama-d253c6.netlify.app").replace(/\/$/, "");

export const business = {
  name: "Maa Kothgadi Tour & Travels",
  phones: [
    { display: "+91 63961 56873", tel: "+916396156873", wa: "916396156873" },
    { display: "+91 94581 34038", tel: "+919458134038", wa: "919458134038" },
  ],
  social: {
    instagram: "https://www.instagram.com/maa_kotgadi_tour_and_travels",
    instagramOwner: "https://www.instagram.com/pankaj_mahra_9444",
    facebook: "https://www.facebook.com/pankaj.mahra.1238",
  },
  /** Set NEXT_PUBLIC_GOOGLE_REVIEW_URL once the Google Business Profile is verified. */
  googleReviewUrl: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL ?? "",
  /** Set NEXT_PUBLIC_GOOGLE_MAPS_URL once the exact business location is confirmed. */
  googleMapsUrl: process.env.NEXT_PUBLIC_GOOGLE_MAPS_URL ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
} as const;

export const primaryWa = business.phones[0].wa;

export function waLink(text?: string, number: string = primaryWa) {
  return `https://wa.me/${number}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

/** Path helper: pathFor("hi", "/about") -> "/hi/about" */
export const pathFor = (locale: string, path = "") => `/${locale}${path === "/" ? "" : path}`;
