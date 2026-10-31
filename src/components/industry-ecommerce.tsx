import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SampleNotice } from "@/components/sample-notice";
import { SectionHeading } from "@/components/section-heading";
import { getService } from "@/lib/content";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const shelf = [
  { title: "Store", detail: "The catalog home and the paths that lead into it." },
  { title: "Categories", detail: "The groups a shopper and a crawler both rely on." },
  { title: "Products", detail: "The pages that carry the offer and the buying facts." },
  { title: "Search", detail: "On-site search, and the URLs that should stay eligible." },
] as const;

const structures = [
  {
    title: "Product and category discovery",
    text: "Searchers arrive on a category, a product, or a guide. Each of those templates needs a job.",
  },
  {
    title: "Category architecture and navigation",
    text: "The way the catalog is grouped decides which pages can rank for a real shopping task.",
  },
  {
    title: "Descriptions and buying information",
    text: "A product page should say what the item is, who it is for, and what a buyer needs before choosing.",
  },
  {
    title: "Faceted navigation and duplicate URLs",
    text: "Filters, sorts, and variants can publish the same products at many addresses.",
  },
  {
    title: "Internal linking and relationships",
    text: "Related products, parent categories, and guides should point to the page that owns the topic.",
  },
  {
    title: "Availability and indexability",
    text: "Out-of-stock, discontinued, and variant URLs need a rule for whether they stay in the index.",
  },
  {
    title: "Product structured data",
    text: "Structured data should match the product facts a person can already see on the page.",
  },
  {
    title: "Content and AI-assisted discovery",
    text: "Buying guides and product facts can support both classic search and summaries that draw on the same information.",
  },
] as const;

const challenges = [
  {
    title: "Filters multiply the catalog",
    text: "A useful filter can also create a near-duplicate URL for every combination.",
  },
  {
    title: "Templates stay thin",
    text: "The same sentence, with the product name swapped, does not help a buyer or a search engine.",
  },
  {
    title: "Relationships stay implicit",
    text: "Products that belong together are hard to discover when the links only exist in a recommendation widget.",
  },
] as const;

const engagement = [
  "A review of category architecture, navigation, and the URLs those choices create.",
  "Guidance for product and category templates, including descriptions and buying information.",
  "Rules for filters, canonicals, availability, and which pages should be indexed.",
  "An internal-linking plan across products, categories, and supporting content.",
  "Structured data checked against the visible product facts.",
  "A content plan for guides and product information that can also support AI-assisted discovery.",
] as const;

const related = [
  ["technical-seo", "Crawl and indexation rules for categories, filters, and product templates."],
  ["on-page-seo", "Category and product pages that explain a real choice."],
  ["content-strategy", "Buying guides and supporting content connected to the catalog."],
  ["ecommerce-seo", "Catalog architecture, templates, and the product-specific search work."],
  ["ai-search-visibility", "Product facts clear enough to be summarized consistently."],
] as const;

export function EcommerceIndustryPage() {
  const services = related.flatMap(([slug, why]) => {
    const service = getService(slug);
    return service ? [{ service, why }] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "E-commerce" },
            ]}
          />
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="min-w-0">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>E-commerce</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>Make every product and category easier to discover.</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
                A catalog is found through its templates. The work covers how categories, products, and filters are organized, and which of those URLs should carry search visibility.
              </p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Discuss your catalog
                </ButtonLink>
                <ButtonLink href="#engagement" variant="secondary" className="w-full sm:w-auto">
                  See what an engagement includes
                </ButtonLink>
              </div>
            </HeroEntrance>
              <SampleNotice>
                This is a planning overview. It does not describe a client engagement or claim results in this industry.
              </SampleNotice>
            </div>
            <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <div className="min-w-0 border border-line bg-surface">
              <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight sm:px-6">
                Storefront discovery
              </p>
              <ol className="grid sm:grid-cols-2 lg:grid-cols-1">
                {shelf.map((item) => (
                  <li
                    key={item.title}
                    className="border-b border-line px-5 py-4 last:border-b-0 sm:px-6 sm:max-lg:border-r sm:max-lg:[&:nth-child(2n)]:border-r-0 sm:max-lg:[&:nth-last-child(-n+2)]:border-b-0"
                  >
                    <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            </HeroEntrance>
          </div>
        </Container>
      </header>

      <section aria-labelledby="structure-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="structure-heading"
            eyebrow="What has to be findable"
            title="The catalog is a set of templates, not a pile of products."
          />
</ScrollReveal>
          <ol className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-2">
            {structures.map((item, index) => (
              <li key={item.title} className="min-w-0 border-t border-line pt-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{item.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="challenges-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <ScrollReveal {...revealStep()}>
<SectionHeading
              id="challenges-heading"
              eyebrow="Common challenges"
              title="Scale makes a small rule expensive."
            />
</ScrollReveal>
            <ol className="divide-y divide-line border-y border-line">
              {challenges.map((item, index) => (
                <li key={item.title} className="py-6">
<ScrollReveal {...revealStep(index)}>
                  <h3 className={ui.h3}>{item.title}</h3>
                  <p className={cx(ui.body, "mt-3 text-muted")}>{item.text}</p>
                </ScrollReveal>
</li>
              ))}
            </ol>
          </div>


        </Container>
      </section>

      <section id="engagement" aria-labelledby="engagement-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="engagement-heading"
            eyebrow="What an engagement can include"
            title="Catalog work depends on the store and the scope."
          />
</ScrollReveal>
          <ol className="mt-10 max-w-3xl divide-y divide-line border-y border-line">
            {engagement.map((item, index) => (
              <li key={item} className={cx(ui.body, "py-4 text-ink")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="example-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Illustrative example</p>
          <h2 id="example-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>An international product catalogue</h2>
          <p className={cx(ui.body, ui.measure, "mt-4 text-muted")}>
            A hypothetical look at how a large catalog can be organized for discovery. It is not a client engagement, a testimonial, or a reported result.
          </p>
          <Link href="/case-studies/international-product-catalogue" className={cx(ui.textLink, "mt-6")}>
            Read the example
          </Link>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="services-heading"
            eyebrow="Relevant services"
            title="The catalog work draws on five practices."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map(({ service, why }, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group grid gap-2 py-5 transition-colors duration-150 hover:text-accent sm:grid-cols-[minmax(0,14rem)_1fr] sm:gap-8"
                >
                  <span className="font-serif text-xl font-semibold tracking-tight group-hover:text-accent">{service.name}</span>
                  <span className={cx(ui.body, "text-muted group-hover:text-ink")}>{why}</span>
                </Link>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Are the right products getting found?"
        description="We'll look at the catalog structure, the templates, and the pages that should carry discovery."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
