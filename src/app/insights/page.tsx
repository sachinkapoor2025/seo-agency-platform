import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { articles } from "@/content/insights";
import type { Article } from "@/content/types";
import { formatPublishedDate, readingTimeLabel } from "@/lib/format";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Sample articles on SEO, technical SEO, answer engine optimization, generative engine optimization, and AI search visibility.",
};

function Meta({ article }: { article: Article }) {
  return (
    <p className={cx(ui.small, "text-muted")}>
      <time dateTime={article.publishedOn}>{formatPublishedDate(article.publishedOn)}</time>
      <span aria-hidden="true"> · </span>
      <span>{readingTimeLabel(article.readingTime)}</span>
    </p>
  );
}

export default function InsightsPage() {
  const featured = articles[articles.length - 1];
  const [aeo, technical, geo, ecommerce] = articles;

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Insights</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Sample writing on search visibility.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
                These articles explain SEO, technical foundations, answer engine optimization, generative engine optimization, and measurement.
              </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "mt-6 flex flex-col gap-3 sm:flex-row")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss your search questions
              </ButtonLink>
              <ButtonLink href="#reading" variant="secondary" className="w-full sm:w-auto">
                Start reading
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual")}>
          <p className={cx(ui.body, "border-t border-line pt-5 text-ink lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8")}>
            Each article is sample content written for this website. It is an explanation, not client research, and it does not present original findings.
          </p>
          </HeroEntrance>
        </Container>
      </header>

      <section id="reading" aria-labelledby="reading-heading" className="scroll-mt-24 border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading id="reading-heading" eyebrow="Reading index" title="Five sample articles." />
          </ScrollReveal>

          <ScrollReveal {...revealStep(0)}>
          <Link
            href={`/insights/${featured.slug}`}
            className="mt-12 grid min-w-0 border border-line bg-sage transition-colors duration-150 hover:border-accent lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)]"
          >
            <div className="border-b border-line p-6 sm:p-8 lg:border-r lg:border-b-0">
              <p className={ui.eyebrow}>Featured · {featured.category}</p>
              <Meta article={featured} />
            </div>
            <div className="bg-surface p-6 sm:p-8">
              <h2 className={cx(ui.h2, "max-w-3xl")}>{featured.title}</h2>
              <p className={cx(ui.body, "mt-4 max-w-2xl text-muted")}>{featured.excerpt}</p>
              <p className={cx(ui.textLink, "mt-6")}>Read the article</p>
            </div>
          </Link>
          </ScrollReveal>

          <ScrollReveal {...revealStep(1)}>
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.75fr)]">
            <Link
              href={`/insights/${aeo.slug}`}
              className="min-w-0 border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>{aeo.category}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{aeo.title}</h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>{aeo.excerpt}</p>
              <div className="mt-6">
                <Meta article={aeo} />
              </div>
              <p className={cx(ui.textLink, "mt-6")}>Read the article</p>
            </Link>
            <Link
              href={`/insights/${technical.slug}`}
              className="flex min-w-0 flex-col justify-between border border-line border-t-2 border-t-accent bg-background p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <div>
                <p className={ui.eyebrow}>{technical.category}</p>
                <h2 className={cx(ui.h3, "mt-3")}>{technical.title}</h2>
                <p className={cx(ui.body, "mt-4 text-muted")}>{technical.excerpt}</p>
              </div>
              <div className="mt-6">
                <Meta article={technical} />
                <p className={cx(ui.textLink, "mt-4")}>Read the article</p>
              </div>
            </Link>
          </div>
          </ScrollReveal>

          <ScrollReveal {...revealStep(2)}>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Link
              href={`/insights/${geo.slug}`}
              className="min-w-0 bg-inverse p-6 text-on-inverse transition-colors duration-150 hover:bg-navy-dark sm:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">{geo.category}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{geo.title}</h2>
              <p className="mt-4 text-on-inverse/85">{geo.excerpt}</p>
              <p className="mt-6 text-sm text-on-inverse/80">
                <time dateTime={geo.publishedOn}>{formatPublishedDate(geo.publishedOn)}</time>
                <span aria-hidden="true"> · </span>
                {readingTimeLabel(geo.readingTime)}
              </p>
              <p className="mt-4 text-sm font-semibold underline decoration-on-inverse/40 underline-offset-4">Read the article</p>
            </Link>
            <Link
              href={`/insights/${ecommerce.slug}`}
              className="min-w-0 border border-line p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>{ecommerce.category}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{ecommerce.title}</h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>{ecommerce.excerpt}</p>
              <div className="mt-6">
                <Meta article={ecommerce} />
              </div>
              <p className={cx(ui.textLink, "mt-6")}>Read the article</p>
            </Link>
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Want to apply an idea to a real site?"
        description="These articles are explanations. A consultation can look at the actual pages, without treating the samples as findings."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
