import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/services";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const architecture = [
  {
    index: "01",
    title: "Website structure",
    detail: "Sections, templates, and the relationships between pages.",
  },
  {
    index: "02",
    title: "Crawl paths",
    detail: "The links a crawler can follow from one URL to the next.",
  },
  {
    index: "03",
    title: "Page accessibility",
    detail: "Important content and links available when a page is rendered.",
  },
  {
    index: "04",
    title: "Search discovery",
    detail: "A clear, preferred URL that search can reach and understand.",
  },
] as const;

const accessProblems = [
  {
    title: "Crawlability",
    text: "Search engines must be able to access important pages.",
  },
  {
    title: "Indexing",
    text: "Important pages should be eligible for search index inclusion.",
  },
  {
    title: "Rendering",
    text: "Important content and links should be accessible when pages are rendered.",
  },
] as const;

const structureProblems = [
  {
    title: "Site architecture",
    text: "Pages should have a clear, logical structure.",
  },
  {
    title: "Duplicate and canonical issues",
    text: "Search engines need clear signals about preferred URLs.",
  },
] as const;

const stages = [
  {
    index: "01",
    title: "Audit",
    text: "Review crawling, indexing, rendering, architecture and technical signals.",
  },
  {
    index: "02",
    title: "Prioritize",
    text: "Identify important issues based on impact, scope and implementation effort.",
  },
  {
    index: "03",
    title: "Implement",
    text: "Provide recommendations and technical guidance for resolving identified issues.",
  },
  {
    index: "04",
    title: "Validate",
    text: "Recheck the affected pages and technical signals after implementation.",
  },
  {
    index: "05",
    title: "Monitor",
    text: "Review changes over time and identify new issues as the website evolves.",
  },
] as const;

const deliverables = [
  "Technical SEO audit",
  "Crawl and indexability analysis",
  "Site architecture review",
  "Internal linking recommendations",
  "Canonical and duplicate URL review",
  "XML sitemap and robots.txt review",
  "Structured data review",
  "Rendering and page performance assessment",
  "Prioritized technical recommendations",
  "Implementation validation guidance",
] as const;

const audiences = [
  {
    title: "Growing business websites",
    text: "Sites whose templates and internal links no longer match the pages that now carry the business.",
  },
  {
    title: "E-commerce websites",
    text: "Catalogs where categories, filters, and product templates affect what can be crawled and indexed.",
  },
  {
    title: "Content-heavy websites",
    text: "Large sets of pages that need a clear route to the explanations and offers worth finding.",
  },
  {
    title: "Redesigns and migrations",
    text: "URL, template, and indexation changes that need a search review before and after launch.",
  },
  {
    title: "Technical visibility issues",
    text: "Important pages that are hard to reach, duplicated, or unclear to search engines.",
  },
] as const;

const outcomes = [
  "A clearer account of the technical barriers on the site.",
  "A site structure that is easier to follow.",
  "Improved access to important content.",
  "More consistent technical signals.",
  "A prioritized plan for ongoing improvement.",
] as const;

const relatedSlugs = [
  "on-page-seo",
  "content-strategy",
  "ecommerce-seo",
  "ai-search-visibility",
] as const;

function ArchitecturePanel() {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute top-5 right-0 bottom-0 left-3 hidden border border-line bg-sage lg:block"
      />
      <div className="relative border border-line bg-surface">
        <div className="border-b border-line bg-sage px-5 py-4 sm:px-6">
          <p className="font-serif text-xl font-semibold tracking-tight">From structure to discovery</p>
          <p className="mt-1 text-sm leading-6 text-ink">
            A conceptual path through the site: structure, crawl paths, accessible pages, then discovery.
          </p>
        </div>
        <ol className="relative px-5 sm:px-6">
          <span
            aria-hidden="true"
            className="absolute top-5 bottom-5 left-[2.125rem] w-px bg-accent/35 sm:left-[2.375rem]"
          />
          {architecture.map((item) => (
            <li
              key={item.index}
              className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 border-b border-line py-4 last:border-b-0"
            >
              <span className="relative z-10 flex h-7 w-7 items-center justify-center bg-surface font-serif text-sm font-semibold text-accent">
                {item.index}
              </span>
              <div className="min-w-0">
                <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export function TechnicalSeoDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:py-20">
          <div className="flex min-w-0 flex-col">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "Technical SEO" },
              ]}
            />
            <div className="flex flex-col gap-4">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Technical SEO</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "max-w-3xl")}>
                Build a stronger technical foundation for search.
              </h1>
            </HeroEntrance>
            </div>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses improve how search engines access, understand and
              navigate their websites through careful technical analysis and structured
              optimization.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss Your Technical SEO Needs
              </ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">
                Explore Our Approach
              </ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <ArchitecturePanel />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="A website needs more than good content to be discoverable."
            description="Useful pages can still be hard to find. These are the technical conditions that decide whether important URLs can be reached, rendered, and treated as the preferred version."
          />
</ScrollReveal>
          <div className="mt-12 border border-line bg-sage">
            <div className="border-b border-line px-5 py-4 sm:px-6">
              <p className={ui.eyebrow}>Access</p>
              <p className={cx(ui.body, "mt-2 max-w-2xl text-ink")}>
                A page has to be reachable, eligible for the index, and readable once it is rendered.
              </p>
            </div>
            <ol className="grid lg:grid-cols-3">
              {accessProblems.map((problem, index) => (
                <li key={problem.title}

                  className="border-b border-line px-5 py-6 last:border-b-0 sm:px-6 lg:border-r lg:border-b-0 lg:last:border-r-0"
                >
<ScrollReveal {...revealStep(index)}>
                  <p className="font-serif text-sm font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className={cx(ui.h3, "mt-3")}>{problem.title}</h3>
                  <p className={cx(ui.body, "mt-3 text-ink")}>{problem.text}</p>
                </ScrollReveal>
</li>
              ))}
            </ol>
          </div>
          <div className="mt-4 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.8fr)]">
            {structureProblems.map((problem) => (
              <article
                key={problem.title}
                className={cx(
                  "min-w-0 border border-line bg-surface p-6 sm:p-8",
                  problem.title.startsWith("Duplicate") && "border-t-2 border-t-accent bg-background",
                )}
              >
                <h3 className={ui.h3}>{problem.title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{problem.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-4 grid gap-4 border-t border-line pt-6 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:items-start">
            <h3 className={ui.h3}>Performance and page experience</h3>
            <p className={cx(ui.body, "text-muted")}>
              Technical quality should support a usable website. Speed, stability, and the
              way a page responds are part of that foundation.
            </p>
          </div>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our technical SEO approach"
            title="Find the barriers. Prioritize the work. Validate the result."
            description="Implementation responsibilities depend on the engagement. Some teams want recommendations and guidance. Others want support while their own developers make the changes. The work does not assume that every project includes direct code implementation."
          />
</ScrollReveal>
          <ol className="mt-10 border-t border-line">
            {stages.map((stage, index) => (
              <li key={stage.index}

                className="grid gap-3 border-b border-line py-6 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-6"
              >
<ScrollReveal {...revealStep(index)}>
                <p className="font-serif text-2xl font-semibold text-accent">{stage.index}</p>
                <div className="min-w-0">
                  <h3 className={ui.h3}>{stage.title}</h3>
                  <p className={cx(ui.body, "mt-2 max-w-2xl text-muted")}>{stage.text}</p>
                </div>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="deliverables-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="deliverables-heading"
            eyebrow="Engagement"
            title="What the engagement can include"
            description="These are potential deliverables. The set is shaped by the site and the brief. An engagement does not have to include every item, and none of them is a promise of rankings, traffic, or revenue."
          />
</ScrollReveal>
          <ul className="mt-10 grid sm:grid-cols-2 sm:gap-x-12">
            {deliverables.map((item, index) => (
              <li key={item}

                className="border-t border-line py-4 font-serif text-lg font-semibold tracking-tight"
              >
<ScrollReveal {...revealStep(index)}>
                {item}
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="audiences-heading"
            eyebrow="Who this service helps"
            title="Sites where the technical layer is doing real work."
            description="The useful question is whether the website’s structure and signals match the pages the business needs to be found."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {audiences.map((audience, index) => (
              <li key={audience.title}

                className="grid gap-2 py-5 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] sm:gap-8"
              >
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{audience.title}</h3>
                <p className={cx(ui.body, "text-ink")}>{audience.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="A clearer technical foundation for sustainable search growth."
            description="The result of the work is a clearer site and a clearer plan. It is not a forecast of rankings, traffic, revenue, or a delivery date."
          />
</ScrollReveal>
          <ul className="mt-10 grid gap-4 lg:grid-cols-5">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className="min-w-0 border-t-2 border-accent pt-4">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <p className={cx(ui.body, "mt-3 text-ink")}>{outcome}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="related-heading"
            eyebrow="Related services"
            title="Technical work connects to the rest of the practice."
            description="These services use the same URL map. Each link opens the existing explanation."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {related.map((service, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="grid gap-3 py-5 transition-colors duration-150 hover:text-accent sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-8"
                >
                  <span className="font-serif text-xl font-semibold tracking-tight">{service.name}</span>
                  <span className={cx(ui.small, "text-muted")}>{service.summary}</span>
                  <span className={ui.textLink}>View service</span>
                </Link>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Is your website technically ready to grow?"
        description="Let's review your website's technical foundations and identify the work worth prioritizing."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
