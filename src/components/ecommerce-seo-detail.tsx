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

const catalog = [
  { level: "Store structure", detail: "The templates and paths that hold the catalog together." },
  { level: "Categories", detail: "The shelves a shopper uses to narrow a choice." },
  { level: "Products", detail: "The pages that explain a specific offer." },
  { level: "Search discovery", detail: "Whether those URLs can be found, understood, and preferred." },
] as const;

const problems = [
  { title: "Poor product and category discoverability", text: "Important offers are hard to reach from search or from inside the store." },
  { title: "Weak category architecture", text: "The way products are grouped does not match how people look for them." },
  { title: "Duplicate or thin product descriptions", text: "Templates repeat the same words, so similar products are hard to tell apart." },
  { title: "Faceted navigation and URL complexity", text: "Filters and parameters create paths that compete with the pages that should be found." },
  { title: "Internal linking gaps", text: "Guides, categories, and products do not point to one another with a clear purpose." },
  { title: "Product availability and indexability issues", text: "Stock, variants, and indexation rules leave the wrong URLs eligible." },
  { title: "Structured data inconsistencies", text: "Product information in the page and in the markup does not agree." },
] as const;

const stages = [
  { index: "01", title: "Understand the store", text: "Map the catalog, the markets, and the templates that generate category and product URLs." },
  { index: "02", title: "Review category and product architecture", text: "See how shelves, filters, and variants shape what can be crawled and chosen." },
  { index: "03", title: "Prioritize discovery opportunities", text: "Choose the categories and products where clearer structure would matter most." },
  { index: "04", title: "Improve pages and technical signals", text: "Guide content, internal links, indexation, and product markup for those templates." },
  { index: "05", title: "Monitor and refine", text: "Recheck the affected paths as the assortment, the platform, or the filters change." },
] as const;

const deliverableGroups = [
  {
    title: "The store",
    items: ["E-commerce SEO audit", "Category architecture recommendations", "Search intent mapping", "Migration and platform-change SEO guidance where relevant"],
  },
  {
    title: "The pages",
    items: ["Product and category page review", "Product content optimization guidance", "Internal linking recommendations"],
  },
  {
    title: "The signals",
    items: ["Faceted navigation review", "Product structured data review", "Indexability assessment"],
  },
] as const;

const audiences = [
  { title: "Online retailers", text: "Stores whose catalog is the website, and whose templates decide what can be found." },
  { title: "Multi-category stores", text: "Assortments that need shelves people can follow without creating endless filter URLs." },
  { title: "Growing D2C brands", text: "A smaller catalog that still needs category pages and product pages with a clear job." },
  { title: "Marketplaces", text: "Many sellers or ranges sharing templates, where duplication and indexation need rules." },
  { title: "Platform migrations", text: "Businesses changing commerce platforms, where URLs and templates move with the catalog." },
] as const;

const outcomes = [
  "Clearer product and category organization.",
  "A better account of what blocks product discovery.",
  "More useful product and category content.",
  "Improved internal navigation.",
  "A prioritized e-commerce search improvement plan.",
] as const;

const relatedSlugs = ["technical-seo", "on-page-seo", "content-strategy", "ai-search-visibility"] as const;

function CatalogTree() {
  return (
    <div className="min-w-0 border border-line bg-sage p-4 sm:p-5">
      <p className="px-2 pb-3 font-serif text-xl font-semibold tracking-tight">How a catalog is found</p>
      <ol className="bg-surface">
        {catalog.map((item, index) => (
          <li
            key={item.level}
            className="border-t border-line py-4 pr-4"
            style={{ paddingLeft: `${1 + index * 0.85}rem` }}
          >
            <p className="font-serif text-lg font-semibold tracking-tight">{item.level}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function EcommerceSeoDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "E-commerce SEO" }]} />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>E-commerce SEO</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Make your products easier to discover.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help e-commerce businesses improve product and category discovery through stronger site architecture, useful product content and search-focused optimization.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">Discuss Your E-commerce SEO Needs</ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">Explore Our Approach</ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <CatalogTree />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="A catalog can be large and still hard to find."
            description="Discovery depends on the shelves, the product pages, and the signals that tell search which URLs should be eligible."
          />
</ScrollReveal>
          <ol className="mt-10 border-t border-line">
            {problems.map((problem, index) => (
              <li key={problem.title} className="grid gap-3 border-b border-line py-5 sm:grid-cols-[3rem_minmax(0,1fr)]">
<ScrollReveal {...revealStep(index)}>
                <span className="font-serif text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className={ui.h3}>{problem.title}</h3>
                  <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
                </div>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="Walk the store before rewriting the product pages."
            description="Architecture and indexation come before adding text to every SKU. Implementation still depends on the commerce team and the platform."
          />
</ScrollReveal>
          <ol className="mt-12 grid gap-8 lg:grid-cols-5">
            {stages.map((stage, index) => (
              <li key={stage.index} className="min-w-0 border-t-2 border-accent pt-4">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{stage.index}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{stage.title}</h3>
                <p className={cx(ui.small, "mt-3 text-muted")}>{stage.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="deliverables-heading" className="border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="deliverables-heading"
            eyebrow="Engagement"
            title="What the engagement can include"
            description="A store does not need every item below. Migration guidance appears only when a platform change is in scope. None of this promises rankings, revenue, or a sales lift."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {deliverableGroups.map((group, index) => (
              <article key={group.title} className="min-w-0 bg-surface p-6">
                <h3 className={ui.h3}>{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className={cx(ui.small, "border-t border-line pt-3")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="audiences-heading" eyebrow="Who this service helps" title="Stores where the template is the strategy." />
</ScrollReveal>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience, index) => (
              <li key={audience.title} className="min-w-0">
<ScrollReveal {...revealStep(index)}>
                <h3 className="font-serif text-lg font-semibold tracking-tight">{audience.title}</h3>
                <p className={cx(ui.small, "mt-2 text-muted")}>{audience.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="A clearer catalog, and a clearer plan for it."
            description="These are working improvements to structure, content, and navigation. They are not a forecast of rankings, traffic, or revenue."
          />
</ScrollReveal>
          <ul className="mt-10 grid gap-4 lg:grid-cols-5">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className="min-w-0 border-t border-line pt-4">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <p className={cx(ui.body, "mt-3")}>{outcome}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="related-heading" eyebrow="Related services" title="The catalog sits inside a wider search practice." />
</ScrollReveal>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {related.map((service, index) => (
              <li key={service.slug} className="min-w-0 border-t border-line">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="block py-5 transition-colors duration-150 hover:text-accent">
                  <span className="block font-serif text-xl font-semibold tracking-tight">{service.name}</span>
                  <span className={cx(ui.small, "mt-2 block text-muted")}>{service.summary}</span>
                  <span className={cx(ui.textLink, "mt-4 inline-block")}>View service</span>
                </Link>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Are customers finding the products you want them to discover?"
        description="Let's review the catalog structure, the pages that explain the range, and the work worth doing first."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
