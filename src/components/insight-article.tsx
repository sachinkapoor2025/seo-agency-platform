import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SampleNotice } from "@/components/sample-notice";
import type { Article } from "@/content/types";
import { getArticlesBySlug, getService } from "@/lib/content";
import { formatPublishedDate, readingTimeLabel } from "@/lib/format";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const serviceNotes: Record<string, ReadonlyArray<readonly [string, string]>> = {
  "what-answer-engine-optimization-asks": [
    ["answer-engine-optimization", "How a page can answer a real question without promising a placement."],
    ["content-strategy", "Choosing which questions deserve a public page."],
  ],
  "technical-foundations-for-retrieval": [
    ["technical-seo", "Crawl access, templates, and indexation for pages that need to be retrieved."],
    ["on-page-seo", "Headings and internal links that show which explanation matters."],
  ],
  "planning-pages-for-generative-search": [
    ["generative-engine-optimization", "A consistent, crawlable source for the topics a business wants to explain."],
    ["content-strategy", "One explanation per topic, including the limit of that explanation."],
  ],
  "ecommerce-search-before-the-product-grid": [
    ["ecommerce-seo", "Which catalog URLs should exist, and what a category page is for."],
    ["technical-seo", "Filter and template rules that keep indexation intentional."],
  ],
  "measuring-search-without-vanity-metrics": [
    ["ai-search-visibility", "How to discuss AI-assisted discovery without turning an anecdote into a score."],
    ["technical-seo", "Index coverage and template checks that can inform a decision."],
  ],
};

function anchorId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function InsightArticle({ article }: { article: Article }) {
  const related = getArticlesBySlug(article.related);
  const services = (serviceNotes[article.slug] ?? []).flatMap(([slug, why]) => {
    const service = getService(slug);
    return service ? [{ service, why }] : [];
  });

  return (
    <>
      <article>
        <header className="border-b border-line bg-background">
          <Container className="py-14 sm:py-16">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Insights", href: "/insights" },
                { label: article.title },
              ]}
            />
            <div className="max-w-3xl">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Sample article · {article.category}</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>{article.title}</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>{article.excerpt}</p>
            </HeroEntrance>
              <p className={cx(ui.small, "mt-6 text-muted")}>
                <time dateTime={article.publishedOn}>{formatPublishedDate(article.publishedOn)}</time>
                <span aria-hidden="true"> · </span>
                <span>{readingTimeLabel(article.readingTime)}</span>
              </p>
              <SampleNotice>
                This is sample content written for the website POC. It is not a research paper and it does not report original findings.
              </SampleNotice>
            </div>
          </Container>
        </header>

        <Container className="grid gap-12 py-12 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:py-16">
          <nav aria-label="In this article" className="lg:sticky lg:top-24 lg:self-start">
            <p className={ui.eyebrow}>In this article</p>
            <ol className="mt-4 space-y-3 border-t border-line pt-4">
              {article.sections.map((section) => (
                <li key={section.heading}>
                  <a href={`#${anchorId(section.heading)}`} className={cx(ui.small, ui.quietLink)}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="min-w-0 max-w-3xl">
            {article.introduction.map((paragraph) => (
              <p key={paragraph} className={cx(ui.bodyLg, "mt-5 text-ink first:mt-0")}>{paragraph}</p>
            ))}
            {article.sections.map((section) => (
              <section key={section.heading} id={anchorId(section.heading)} className="scroll-mt-24 mt-12">
                <h2 className={ui.h2}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className={cx(ui.body, "mt-4 text-ink")}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </Container>
      </article>

      {services.length > 0 ? (
        <section aria-labelledby="article-services-heading" className="border-t border-line bg-surface">
          <Container className="py-14 sm:py-16">
          <ScrollReveal {...revealStep()}>
            <p className={ui.eyebrow}>Related services</p>
            <h2 id="article-services-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>
              Practices this explanation connects to.
            </h2>
          </ScrollReveal>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {services.map(({ service, why }, index) => (
                <li key={service.slug}>
                  <ScrollReveal {...revealStep(index)}>
                  <Link href={`/services/${service.slug}`} className="group grid gap-2 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
                    <span className="font-serif text-xl font-semibold tracking-tight transition-colors duration-150 group-hover:text-accent">{service.name}</span>
                    <span className={cx(ui.body, "text-muted")}>{why}</span>
                  </Link>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
        </Container>
        </section>
      ) : null}

      <section aria-labelledby="related-articles-heading" className="border-t border-line bg-background">
        <Container className="py-14 sm:py-16">
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Related sample articles</p>
          <h2 id="related-articles-heading" className={cx(ui.h2, "mt-3")}>Continue reading</h2>
          </ScrollReveal>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((item, index) => (
              <li key={item.slug} className="border-t border-line pt-5">
                <ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{item.category}</p>
                <Link href={`/insights/${item.slug}`} className={cx(ui.h3, "mt-3 inline-block transition-colors duration-150 hover:text-accent")}>
                  {item.title}
                </Link>
                <p className={cx(ui.body, "mt-3 text-muted")}>{item.excerpt}</p>
                </ScrollReveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Want to apply this to a real site?"
        description="The article is an explanation, not a finding. A consultation can look at the actual pages."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
