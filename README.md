# Maa Kothgadi Tour & Travels

Bilingual (English + Hinglish), SEO-focused Next.js 16 website: App Router, TypeScript, Tailwind CSS 4.

## Run

```bash
npm install
cp .env.example .env.local   # fill in what you have
npm run dev                  # http://localhost:3000  (redirects to /en or /hi)
npm run build && npm start   # production
```

## Structure

- `src/app/[locale]/…` pages: home, about, services, vehicles, reviews, contact, blog (`/en/*`, `/hi/*`)
- `src/app/api/reviews` public review submission · `src/app/api/admin/reviews` moderation API · `src/app/admin` owner page
- `src/i18n/ui.ts` all interface text in both languages · `src/i18n/seo-copy.ts` per-page titles/descriptions
- `src/data/` services, vehicles, blog articles (edit content here)
- `src/lib/seo.ts` metadata, hreflang, canonical, JSON-LD
- `legacy/index.html` the original single-file site, kept for reference
- `/hi` is Hindi written in Roman script, declared as `hi-Latn` in hreflang

## Reviews and moderation

1. In Vercel: Project, Storage (or Marketplace), add **Upstash for Redis** on the free plan and connect it to this project. Vercel adds `KV_REST_API_URL` and `KV_REST_API_TOKEN` automatically. (Using Upstash directly? `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` also work.)
2. Add `ADMIN_TOKEN` (your moderation password) in the project's Environment Variables, then redeploy.
3. Visitors submit on `/en/reviews`; reviews are stored as *pending*.
4. Open `/admin`, sign in with `ADMIN_TOKEN`, approve or reject. Only approved reviews appear; the average and count are computed from them.

Without Redis, `next dev` stores reviews in `.data/reviews.json` (never used in production, where submissions return 503).

## Google

- Review link: set `NEXT_PUBLIC_GOOGLE_REVIEW_URL` once the Business Profile is verified. A button then appears on the Reviews page.
- Maps: set `NEXT_PUBLIC_GOOGLE_MAPS_URL` after the exact location is confirmed.
- Analytics: set `NEXT_PUBLIC_GA_ID` (GA4). Search Console: the verification tag is already in the site; submit `/sitemap.xml`.
- No Review or AggregateRating schema is output, by design (Google's self-serving review rules).

`NEXT_PUBLIC_SITE_URL` defaults to https://maa-kothgadi-travels.vercel.app. Set it if you add a custom domain: it drives canonicals, sitemap and hreflang.
