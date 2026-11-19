import Image from "next/image";
import Link from "next/link";
import { pathFor } from "@/lib/site";
import { tr, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import type { Post } from "@/data/blog";

export function BlogCard({ post, locale }: { post: Post; locale: Locale }) {
  const href = pathFor(locale, `/blog/${post.slug}`);
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-forest-900/5">
      <div className="relative aspect-[16/10] overflow-hidden bg-forest-100">
        <Image src={post.image} alt={tr(post.imageAlt, locale)} fill sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 92vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" style={{ objectPosition: post.imagePosition }} />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-gold-700 uppercase">
          {post.minutes} {tr(ui.blog.minutes, locale)}
        </p>
        <h3 className="mt-2 font-display text-xl leading-snug font-semibold text-forest-900">
          <Link href={href} className="after:absolute after:inset-0 hover:underline hover:underline-offset-4">
            {tr(post.title, locale)}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.95rem] text-ink-soft">{tr(post.description, locale)}</p>
        <span className="mt-5 text-sm font-semibold text-forest-800">{tr(ui.cta.readMore, locale)} →</span>
      </div>
    </article>
  );
}
