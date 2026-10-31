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

const layers = [
  { title: "Website content", detail: "The pages that explain the offer, the proof, and the next step." },
  { title: "Brand information", detail: "A stable account of who the business is and what it does." },
  { title: "Search discovery", detail: "Classic search paths that still depend on access and clarity." },
  { title: "AI-assisted experiences", detail: "Interfaces that draw on that same information when they assemble an answer." },
] as const;

const problems = [
  { title: "Limited understanding of AI search presence", text: "The team cannot yet describe where the business is easy to interpret, and where it is vague." },
  { title: "Inconsistent brand information", text: "Names, descriptions, and offers differ across the pages that should agree." },
  { title: "Important content is difficult to discover", text: "Useful pages exist, but the paths to them are weak or blocked." },
  { title: "Gaps in topical and entity clarity", text: "Priority subjects and the entities around them are named without a clear definition." },
  { title: "Fragmented traditional and AI search strategies", text: "Classic search and AI-assisted discovery are planned as separate campaigns." },
  { title: "Lack of a structured monitoring approach", text: "Reporting follows screenshots of tools rather than the condition of the site." },
] as const;

const stages = [
  { index: "01", title: "Establish the current picture", text: "See how the site, the brand facts, and the priority pages currently explain the business." },
  { index: "02", title: "Identify discovery opportunities", text: "Choose the markets, offers, and questions where clearer information would matter." },
  { index: "03", title: "Improve information foundations", text: "Align access, entity descriptions, and the pages that carry the core facts." },
  { index: "04", title: "Connect content and search strategy", text: "Use one URL map for classic search, answer-focused pages, and generative coverage." },
  { index: "05", title: "Monitor and adapt", text: "Revisit the same pages as interfaces change, and record what the signals do not prove." },
] as const;

const assess = [
  "AI search visibility assessment",
  "Brand information review",
  "AI discovery opportunity analysis",
  "Content accessibility review",
];

const improve = [
  "Entity and topic clarity recommendations",
  "Search and AI content alignment",
  "Monitoring and reporting framework",
  "Ongoing improvement roadmap",
];

const audiences = [
  { title: "Businesses exploring AI-assisted discovery", text: "Teams that want a grounded view of the site before they treat AI search as a channel." },
  { title: "Established brands", text: "Names with enough public information that inconsistency becomes the risk." },
  { title: "E-commerce businesses", text: "Catalogs whose product facts need to stay clear wherever they are summarized." },
  { title: "B2B and professional service companies", text: "Firms whose expertise should be findable in more than one kind of search." },
  { title: "Organizations integrating AI search into marketing", text: "Plans that need one strategy for content, classic search, and AI-assisted experiences." },
] as const;

const outcomes = [
  "A better understanding of AI discovery opportunities.",
  "Clearer and more consistent brand information.",
  "Better alignment between search and content strategies.",
  "A structured approach to visibility assessment.",
  "Ongoing monitoring and improvement priorities.",
] as const;

const relatedSlugs = ["technical-seo", "content-strategy", "answer-engine-optimization", "generative-engine-optimization"] as const;

function VisibilityLayers() {
  return (
    <div className="min-w-0 border border-line">
      <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight sm:px-6">
        One information layer
      </p>
      <ul className="relative">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] z-10 w-px bg-accent/40 sm:left-[1.6rem]"
        />
        {layers.map((layer, index) => (
          <li
            key={layer.title}
            className={cx(
              "border-b border-line py-4 pr-5 pl-10 last:border-b-0 sm:pr-6 sm:pl-11",
              index % 2 === 0 ? "bg-surface" : "bg-sage",
            )}
          >
            <p className="font-serif text-lg font-semibold tracking-tight">{layer.title}</p>
            <p className="mt-1 text-sm leading-6 text-ink">{layer.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AiSearchVisibilityDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });
  const closing = stages[4];
  const opening = stages.slice(0, 4);

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.08fr)_minmax(16rem,0.92fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "AI Search Visibility" }]} />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>AI search visibility</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Make your business discoverable across AI search.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses assess and strengthen their presence across AI-assisted discovery experiences through clear information, useful content and a connected search strategy.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">Discuss Your AI Search Visibility</ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">Explore Our Approach</ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <VisibilityLayers />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="AI search is a way of being found, not a separate trick."
            description="The durable work is a website that states who it serves, what it offers, and what it knows. This page does not promise mentions, citations, recommendations, or traffic from any AI platform."
          />
</ScrollReveal>
          <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => (
              <li key={problem.title} className="min-w-0">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{problem.title}</h3>
                <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="Start with the site. Then connect the ways it can be found."
            description="Interfaces change. The sequence keeps the assessment tied to pages, facts, and a modest set of signals."
          />
</ScrollReveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2">
            {opening.map((stage, index) => (
              <li key={stage.index} className="min-w-0 border border-line bg-background p-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{stage.index}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{stage.title}</h3>
                <p className={cx(ui.body, "mt-2 text-muted")}>{stage.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>
          <article className="mt-6 bg-inverse px-5 py-6 text-on-inverse sm:px-6">
            <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">{closing.index}</p>
            <h3 className={cx(ui.h3, "mt-3")}>{closing.title}</h3>
            <p className="mt-2 max-w-2xl text-base leading-7 text-on-inverse/85">{closing.text}</p>
          </article>


        </Container>
      </section>

      <section aria-labelledby="deliverables-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="deliverables-heading"
            eyebrow="Engagement"
            title="What the engagement can include"
            description="An assessment and a roadmap can be scoped without every item below. The reporting framework explains what will be watched. It does not promise platform mentions or traffic."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className={ui.h3}>Assess</h3>
              <ul className="mt-4 border-t border-line">
                {assess.map((item, index) => (
                  <li key={item} className="border-b border-line py-3 font-serif text-lg font-semibold tracking-tight">
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={ui.h3}>Improve</h3>
              <ul className="mt-4 border-t border-line">
                {improve.map((item, index) => (
                  <li key={item} className="border-b border-line py-3 font-serif text-lg font-semibold tracking-tight">
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                ))}
              </ul>
            </div>
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="audiences-heading" eyebrow="Who this service helps" title="Teams that want AI search inside the same plan as the website." />
</ScrollReveal>
          <ol className="mt-10">
            {audiences.map((audience, index) => (
              <li key={audience.title} className="grid gap-2 border-t border-line py-5 sm:grid-cols-[3rem_minmax(0,18rem)_minmax(0,1fr)] sm:gap-6">
<ScrollReveal {...revealStep(index)}>
                <span className="font-serif text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <h3 className={ui.h3}>{audience.title}</h3>
                <p className={cx(ui.body, "text-ink")}>{audience.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "max-w-3xl")}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="A clearer picture, and a plan that can be revised."
            description="These outcomes describe understanding and alignment. They do not include promised mentions, citations, recommendations, or traffic from AI platforms, and they do not include a fixed timeline."
          />
</ScrollReveal>
          <ul className="mt-8 space-y-3">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className={cx(ui.body, "flex gap-3")}>
<ScrollReveal {...revealStep(index)}>
                <span aria-hidden="true" className={ui.mark} />
                <span>{outcome}</span>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="related-heading" eyebrow="Related services" title="Visibility is the combined result of the work around it." />
</ScrollReveal>
          <ul className="mt-10 grid gap-6 lg:grid-cols-4">
            {related.map((service, index) => (
              <li key={service.slug} className="min-w-0">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="block transition-colors duration-150 hover:text-accent">
                  <span className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</span>
                  <span className="mt-3 block font-serif text-xl font-semibold tracking-tight">{service.name}</span>
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
        title="Let's make your business easier to discover."
        description="We'll look at the current site, the brand information, and the discovery work worth prioritizing. The conversation is a starting point, not a promise of AI mentions or traffic."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
