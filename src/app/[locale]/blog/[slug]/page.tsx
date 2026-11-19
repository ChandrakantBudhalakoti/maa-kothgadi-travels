import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { CtaBand } from "@/components/home/Sections";
import { Breadcrumbs, Container, JsonLd } from "@/components/ui/primitives";
import { getPost, posts } from "@/data/blog";
import { hreflang, locales, tr, isLocale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { articleJsonLd, breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { pathFor } from "@/lib/site";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => posts.map((p) => ({ locale, slug: p.slug })));
}

async function load(params: Props["params"]) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!isLocale(locale) || !post) notFound();
  return { locale, post };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, post } = await load(params);
  return buildMetadata({ locale, path: `/blog/${post.slug}`, title: tr(post.title, locale), description: tr(post.description, locale), image: post.image, type: "article", publishedTime: post.date });
}

export default async function BlogPostPage({ params }: Props) {
  const { locale, post } = await load(params);
  const path = `/blog/${post.slug}`;
  const title = tr(post.title, locale);
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const date = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({ locale, path, title, description: tr(post.description, locale), image: post.image, date: post.date }),
          breadcrumbJsonLd([
            { name: tr(ui.nav.home, locale), path: pathFor(locale) },
            { name: tr(ui.nav.blog, locale), path: pathFor(locale, "/blog") },
            { name: title, path: pathFor(locale, path) },
          ]),
        ]}
      />
      <article lang={hreflang[locale]}>
        <header className="topo bg-forest-900 text-cream-50">
          <Container className="py-12 sm:py-16">
            <Breadcrumbs locale={locale} trail={[{ label: tr(ui.nav.blog, locale), href: pathFor(locale, "/blog") }, { label: title }]} />
            <h1 className="mt-6 max-w-3xl text-3xl leading-[1.15] font-semibold sm:text-5xl">{title}</h1>
            <p className="mt-5 text-sm text-cream-200">
              <time dateTime={post.date}>{date}</time> · {post.minutes} {tr(ui.blog.minutes, locale)}
            </p>
          </Container>
        </header>

        <Container className="max-w-3xl py-12 sm:py-16">
          <div className="relative -mt-2 mb-10 aspect-[16/10] overflow-hidden rounded-2xl shadow-card">
            <Image src={post.image} alt={tr(post.imageAlt, locale)} fill priority sizes="(min-width: 768px) 768px, 92vw" className="object-cover" style={{ objectPosition: post.imagePosition }} />
          </div>
          <p className="text-xl leading-relaxed text-ink">{tr(post.intro, locale)}</p>

          {post.sections.map((s) => (
            <section key={s.heading.en} className="mt-10">
              <h2 className="text-2xl font-semibold text-forest-900 sm:text-3xl">{tr(s.heading, locale)}</h2>
              {s.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 text-lg leading-relaxed text-ink-soft">
                  {tr(p, locale)}
                </p>
              ))}
            </section>
          ))}

          <p className="mt-12 rounded-xl border-l-4 border-gold-500 bg-cream-100 p-5 text-[0.95rem] text-ink-soft">{tr(ui.blog.verifyNote, locale)}</p>
        </Container>
      </article>

      <section className="bg-cream-100 py-14 sm:py-16">
        <Container>
          <h2 className="text-2xl font-semibold text-forest-900">{tr(ui.blog.related, locale)}</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} locale={locale} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} title={tr(ui.blog.ctaTitle, locale)} lead={tr(ui.blog.ctaBody, locale)} />
    </>
  );
}
