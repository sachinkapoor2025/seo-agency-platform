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

const meaningProblems = [
  {
    title: "Unclear page purpose",
    text: "Visitors and search systems need to understand what a page is about.",
  },
  {
    title: "Search intent mismatch",
    text: "Page content should address the question or need behind a search.",
  },
] as const;

const structureProblems = [
  {
    title: "Weak content hierarchy",
    text: "Headings and sections should organize information logically.",
  },
  {
    title: "Missing content depth",
    text: "Important questions and relevant details may be overlooked.",
  },
] as const;

const connectionProblems = [
  {
    title: "Metadata issues",
    text: "Titles and descriptions should accurately represent the page.",
  },
  {
    title: "Weak internal connections",
    text: "Relevant pages should help users navigate related information.",
  },
] as const;

const stages = [
  {
    index: "01",
    title: "Understand intent",
    text: "Identify the audience, page purpose and search intent.",
  },
  {
    index: "02",
    title: "Review the page",
    text: "Assess existing content, structure, headings, metadata and internal links.",
  },
  {
    index: "03",
    title: "Improve structure",
    text: "Organize sections and headings around the page's purpose.",
  },
  {
    index: "04",
    title: "Refine content",
    text: "Improve clarity, usefulness, relevance and completeness.",
  },
  {
    index: "05",
    title: "Validate",
    text: "Review the updated page and its connections to related content.",
  },
] as const;

const deliverableGroups = [
  {
    title: "Understand the page",
    items: ["Page-level SEO review", "Search intent analysis", "Keyword-to-page mapping"],
  },
  {
    title: "Shape the page",
    items: [
      "Title and meta description recommendations",
      "Heading hierarchy recommendations",
      "Content gap analysis",
      "Content optimization guidance",
      "Image alt text guidance",
    ],
  },
  {
    title: "Connect the page",
    items: ["Internal linking recommendations", "Page-level quality review"],
  },
] as const;

const audiences = [
  {
    title: "Businesses with important service pages",
    text: "Core offers depend on a few pages saying clearly what the business does and for whom.",
  },
  {
    title: "E-commerce websites with product and category pages",
    text: "A shopper needs a page that explains the choice, not only the fields in the catalog.",
  },
  {
    title: "Content-heavy websites",
    text: "Large bodies of pages need a purpose, a heading order, and a reason to exist beside one another.",
  },
  {
    title: "Businesses creating new landing pages",
    text: "Pages written for a campaign or a market, before the structure is fixed in a template.",
  },
  {
    title: "Websites whose pages do not clearly address audience needs",
    text: "The page talks about the company while the audience arrived with a specific question.",
  },
] as const;

const outcomes = [
  "Clearer communication of page purpose.",
  "Better alignment with audience search intent.",
  "More useful and organized content.",
  "Stronger internal navigation.",
  "A consistent approach to page-level optimization.",
] as const;

const relatedSlugs = [
  "technical-seo",
  "content-strategy",
  "ecommerce-seo",
  "answer-engine-optimization",
] as const;

function PageComposition() {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute top-6 right-3 bottom-0 left-0 hidden border border-line bg-sage lg:block"
      />
      <article className="relative border border-line bg-surface lg:mr-3">
        <header className="border-b border-line px-5 py-5 sm:px-6">
          <p className={ui.eyebrow}>A clear page purpose</p>
          <p className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            One reason this URL exists.
          </p>
        </header>
        <div className="grid gap-6 px-5 py-5 sm:px-6">
          <div>
            <p className={ui.eyebrow}>Relevant headings</p>
            <p className="mt-2 font-serif text-lg font-semibold tracking-tight">
              Sections follow that purpose, in an order a reader can scan.
            </p>
          </div>
          <div className="border-l border-accent pl-4">
            <p className={ui.eyebrow}>Useful content</p>
            <p className="mt-2 text-sm leading-6 text-muted">
              The detail under each heading answers the question the heading raises.
            </p>
          </div>
        </div>
        <footer className="border-t border-line bg-sage px-5 py-4 sm:px-6">
          <p className={ui.eyebrow}>Connected internal links</p>
          <p className="mt-2 text-sm leading-6 text-ink">
            Related page · Supporting explanation · Next step
          </p>
        </footer>
      </article>
    </div>
  );
}

export function OnPageSeoDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });
  const [opening, ...revision] = stages;

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(16rem,0.88fr)] lg:gap-16 lg:py-20">
          <div className="flex min-w-0 flex-col">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "On-Page SEO" },
              ]}
            />
            <div className="flex flex-col gap-4">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>On-page SEO</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "max-w-3xl")}>Make every important page count.</h1>
            </HeroEntrance>
            </div>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses make their pages clearer, more relevant and more useful
              by aligning content, structure and search intent with what their audiences
              need.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss Your On-Page SEO Needs
              </ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">
                Explore Our Approach
              </ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <PageComposition />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="A page needs a clear purpose before it can perform."
            description="On-page work starts with what the page is for. Structure, depth, metadata, and links then have something to follow."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-0">
            {meaningProblems.map((problem, index) => (
              <article
                key={problem.title}
                className={cx("min-w-0", index === 1 && "lg:border-l lg:border-line lg:pl-10")}
              >
                <h3 className={ui.h3}>{problem.title}</h3>
                <p className={cx(ui.body, "mt-3 max-w-md text-muted")}>{problem.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 bg-sage">
            {structureProblems.map((problem) => (
              <article
                key={problem.title}
                className="grid gap-2 border-b border-line px-5 py-5 last:border-b-0 sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] sm:items-baseline sm:gap-8 sm:px-6"
              >
                <h3 className={ui.h3}>{problem.title}</h3>
                <p className={cx(ui.body, "text-ink")}>{problem.text}</p>
              </article>
            ))}
          </div>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2">
            {connectionProblems.map((problem, index) => (
              <li key={problem.title} className="min-w-0 border-t-2 border-accent pt-4">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 5).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{problem.title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{problem.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="Make relevance clear from the first heading to the final link."
            description="The sequence follows the page itself. Intent comes first. Structure and wording follow. The last pass checks that the page still agrees with the pages around it."
          />
</ScrollReveal>
          <article className="mt-12 border-t border-line pt-8">
            <p className={ui.eyebrow}>{opening.index}</p>
            <h3 className={cx(ui.h2, "mt-3 max-w-2xl")}>{opening.title}</h3>
            <p className={cx(ui.bodyLg, "mt-3 max-w-2xl text-muted")}>{opening.text}</p>
          </article>
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {revision.map((stage, index) => (
              <li key={stage.index} className="min-w-0 border-t border-line pt-5">
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

      <section aria-labelledby="deliverables-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="deliverables-heading"
            eyebrow="Engagement"
            title="What the engagement can include"
            description="These are potential deliverables. Which of them belong in an engagement depends on the pages in scope. The list is not a promise that every project includes every item, and it is not a promise of rankings, traffic, or conversions."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-12">
            {deliverableGroups.map((group, index) => (
              <div key={group.title} className="min-w-0">
                <h3 className={ui.h3}>{group.title}</h3>
                <ul className="mt-4 border-t border-line">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-line py-3 text-sm leading-6">
<ScrollReveal {...revealStep(index)}>
                      {item}
                    </ScrollReveal>
</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="audiences-heading"
            eyebrow="Who this service helps"
            title="Pages that carry a decision."
            description="The work is most useful where a person arrives with a question and the page needs to answer it plainly."
          />
</ScrollReveal>
          <div className="mt-12 border border-line bg-surface p-6 sm:p-8">
            <p className={ui.eyebrow}>01</p>
            <h3 className={cx(ui.h2, "mt-3 max-w-2xl")}>{audiences[0].title}</h3>
            <p className={cx(ui.body, "mt-3 max-w-2xl text-muted")}>{audiences[0].text}</p>
          </div>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {audiences.slice(1).map((audience, index) => (
              <li key={audience.title} className="min-w-0 border border-line bg-sage px-5 py-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 2).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{audience.title}</h3>
                <p className={cx(ui.body, "mt-3 text-ink")}>{audience.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start")}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="Pages that are clearer, more relevant and easier to navigate."
            description="These are qualities of the page and the way the team works on later pages. They are not a forecast of rankings, traffic, conversions, or a delivery date."
          />
</ScrollReveal>
          <ol>
            {outcomes.map((outcome, index) => (
              <li key={outcome} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-line py-4">
<ScrollReveal {...revealStep(index)}>
                <span className="font-serif text-sm font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className={ui.body}>{outcome}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="related-heading"
            eyebrow="Related services"
            title="A page still depends on the system around it."
            description="Each link opens the existing explanation of that service."
          />
</ScrollReveal>
          <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
            {related.map((service, index) => (
              <li key={service.slug} className="min-w-0 border-t border-line">
<ScrollReveal {...revealStep(index)}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block py-5 transition-colors duration-150 hover:text-accent"
                >
                  <span className="block font-serif text-xl font-semibold tracking-tight">
                    {service.name}
                  </span>
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
        title="Are your most important pages saying the right things?"
        description="Let's review your key pages and identify opportunities to improve their relevance, clarity and structure."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
