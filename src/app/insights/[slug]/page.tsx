import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { RelatedLinks } from "@/components/related-links";
import { articles } from "@/content/insights";
import { getArticle, getArticlesBySlug } from "@/lib/content";
import { formatPublishedDate, readingTimeLabel } from "@/lib/format";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getArticlesBySlug(article.related);

  return (
    <>
      <PageIntro
        eyebrow={`Sample article · ${article.category}`}
        title={article.title}
        lede={article.excerpt}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Insights", href: "/insights" },
          { label: article.title },
        ]}
        notice="This is sample content written for the website POC. It is not a research paper and it does not report original findings."
      />
      <Container className="py-10">
        <p className="text-sm text-muted">
          <time dateTime={article.publishedOn}>
            {formatPublishedDate(article.publishedOn)}
          </time>
          <span aria-hidden="true"> · </span>
          <span>{readingTimeLabel(article.readingTime)}</span>
        </p>
        <div className="mt-8 max-w-3xl">
          {article.introduction.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-lg leading-8 text-ink">
              {paragraph}
            </p>
          ))}
          {article.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
                {section.heading}
              </h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 text-base leading-7 text-ink">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <RelatedLinks
          title="Related sample articles"
          links={related.map((item) => ({
            href: `/insights/${item.slug}`,
            label: item.title,
            description: item.excerpt,
          }))}
        />
      </Container>
      <ConsultationCta />
    </>
  );
}
