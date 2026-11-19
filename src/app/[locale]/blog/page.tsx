import type { Metadata } from "next";
import { BlogCard } from "@/components/blog/BlogCard";
import { Container, JsonLd, PageHero } from "@/components/ui/primitives";
import { CtaBand } from "@/components/home/Sections";
import { posts } from "@/data/blog";
import { tr } from "@/i18n/config";
import { seoCopy } from "@/i18n/seo-copy";
import { ui } from "@/i18n/ui";
import { resolveLocale, type LocaleParams } from "@/lib/locale";
import { breadcrumbJsonLd, buildMetadata } from "@/lib/seo";
import { pathFor } from "@/lib/site";

export async function generateMetadata({ params }: LocaleParams): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const m = seoCopy.blog;
  return buildMetadata({ locale, path: "/blog", title: tr(m.title, locale), description: tr(m.description, locale) });
}

export default async function BlogPage({ params }: LocaleParams) {
  const locale = await resolveLocale(params);
  const crumb = tr(ui.nav.blog, locale);
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: tr(ui.nav.home, locale), path: pathFor(locale) }, { name: crumb, path: pathFor(locale, "/blog") }])} />
      <PageHero locale={locale} title={tr(ui.pages.blog.title, locale)} lead={tr(ui.pages.blog.lead, locale)} trail={[{ label: crumb }]} />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => (
            <BlogCard key={p.slug} post={p} locale={locale} />
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-ink-soft">{tr(ui.blog.verifyNote, locale)}</p>
      </Container>
      <CtaBand locale={locale} />
    </>
  );
}
