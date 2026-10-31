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

const plan = [
  { label: "Audience questions", detail: "The jobs a reader is trying to get done." },
  { label: "Search intent", detail: "Why that person looks, and what would count as an answer." },
  { label: "Content themes", detail: "The subjects that deserve a page, a cluster, or a revision." },
  { label: "Editorial plan", detail: "What is written, reviewed, kept, or left unpublished." },
] as const;

const directionProblems = [
  {
    title: "Content without a clear objective",
    text: "Pages are published before anyone has named the business question they exist to answer.",
  },
  {
    title: "Unclear audience and search intent",
    text: "The reader and the need behind the query are still vague when the draft begins.",
  },
  {
    title: "Inconsistent publishing priorities",
    text: "The calendar follows capacity, while the questions that matter wait.",
  },
] as const;

const libraryProblems = [
  {
    title: "Gaps in important topics",
    text: "A priority question has no page, or only a passing mention inside something else.",
  },
  {
    title: "Disconnected content across the website",
    text: "Related pages do not lead to one another, so a subject is hard to follow.",
  },
  {
    title: "Content that is difficult to maintain or measure",
    text: "There is no agreed way to review a page, update it, or decide whether it still earns its place.",
  },
] as const;

const stages = [
  { index: "01", title: "Discover audience needs", text: "Name the audiences, the questions they bring, and the decisions the content should support." },
  { index: "02", title: "Research search opportunities", text: "See how those questions show up in search, and which existing URLs already try to answer them." },
  { index: "03", title: "Build content architecture", text: "Group themes, assign pages, and decide what should be consolidated or left unpublished." },
  { index: "04", title: "Develop the editorial plan", text: "Turn the architecture into briefs, ownership, and a sequence the team can actually produce." },
  { index: "05", title: "Review and improve", text: "Revisit pages against their purpose, and adjust the plan as the site and the questions change." },
] as const;

const deliverableGroups = [
  {
    title: "Research",
    items: ["Audience and intent research", "Topic and keyword research", "Content gap analysis"],
  },
  {
    title: "Plan",
    items: ["Topic cluster planning", "Content briefs", "Editorial calendar"],
  },
  {
    title: "Steward",
    items: ["Content governance recommendations", "Existing content review", "Content performance review framework"],
  },
] as const;

const audiences = [
  { title: "Businesses building organic content", text: "Teams that want a body of pages tied to demand, rather than a publishing quota." },
  { title: "Companies entering new markets", text: "Offers that need different questions answered in India, the United States, or the United Kingdom." },
  { title: "B2B businesses with complex offerings", text: "Subjects that take more than one page to explain, and a clear path between those pages." },
  { title: "E-commerce businesses with content opportunities", text: "Guides and category stories that should help a shopper choose, then return to the catalog." },
  { title: "Large or disconnected content libraries", text: "Sites where useful material exists, but the map between topics and URLs has been lost." },
] as const;

const outcomes = [
  "Clearer content priorities.",
  "Better alignment with audience needs.",
  "More organized topical coverage.",
  "Consistent editorial planning.",
  "A sustainable content improvement process.",
] as const;

const relatedSlugs = ["technical-seo", "on-page-seo", "ecommerce-seo", "answer-engine-optimization"] as const;

function EditorialPlan() {
  return (
    <div className="min-w-0 border border-line bg-surface">
      <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight sm:px-6">
        From question to plan
      </p>
      <ol>
        {plan.map((item, index) => (
          <li key={item.label} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 border-b border-line px-5 py-4 last:border-b-0 sm:px-6">
            <span className="font-serif text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
            <span className="min-w-0">
              <span className="block font-serif text-lg font-semibold tracking-tight">{item.label}</span>
              <span className="mt-1 block text-sm leading-6 text-muted">{item.detail}</span>
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ContentStrategyDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.12fr)_minmax(16rem,0.88fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Content Strategy" }]} />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Content strategy</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Turn useful content into a growth strategy.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses plan and develop meaningful content around audience needs, search intent and business priorities.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">Discuss Your Content Strategy</ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">Explore Our Approach</ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <EditorialPlan />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="Publishing is not the same thing as a content strategy."
            description="A useful program names the audience, the question, and the page that should answer it. These are the gaps that usually appear first."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div>
              <p className={ui.eyebrow}>Direction</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {directionProblems.map((problem, index) => (
                  <li key={problem.title} className="py-4">
<ScrollReveal {...revealStep(index)}>
                    <h3 className={ui.h3}>{problem.title}</h3>
                    <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
                  </ScrollReveal>
</li>
                ))}
              </ul>
            </div>
            <div>
              <p className={ui.eyebrow}>The library</p>
              <ul className="mt-4 divide-y divide-line border-y border-line">
                {libraryProblems.map((problem, index) => (
                  <li key={problem.title} className="py-4">
<ScrollReveal {...revealStep(index)}>
                    <h3 className={ui.h3}>{problem.title}</h3>
                    <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
                  </ScrollReveal>
</li>
                ))}
              </ul>
            </div>
          </div>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="Start with the question. Then decide what deserves a page."
            description="The plan is a working document. It changes when the audience, the site, or the commercial priority changes."
          />
</ScrollReveal>
          <ol className="mt-12 space-y-6">
            {stages.map((stage, index) => (
              <li key={stage.index} className="grid gap-3 border-l-2 border-accent pl-5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6">
<ScrollReveal {...revealStep(index)}>
                <p className="font-serif text-sm font-semibold text-accent">{stage.index}</p>
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
            description="These are potential deliverables. The set depends on the library and the brief. It is not a promise of traffic, rankings, or a publishing volume."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-3">
            {deliverableGroups.map((group, index) => (
              <div key={group.title} className="min-w-0">
                <h3 className={ui.h3}>{group.title}</h3>
                <ul className="mt-4 border-t border-line">
                  {group.items.map((item) => (
                    <li key={item} className="border-b border-line py-3 text-sm leading-6">
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="audiences-heading"
            eyebrow="Who this service helps"
            title="Teams that need a map before they need more drafts."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {audiences.map((audience, index) => (
              <li key={audience.title} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] sm:gap-8">
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
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start")}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="A plan the team can keep using."
            description="The outcome is clearer priorities and a way to improve the library over time. It is not a forecast of rankings, traffic, or a publication date."
          />
</ScrollReveal>
          <ul>
            {outcomes.map((outcome, index) => (
              <li key={outcome} className={cx(ui.body, "flex gap-3 border-t border-line py-4")}>
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
<SectionHeading
            id="related-heading"
            eyebrow="Related services"
            title="The plan still has to live on a real website."
            description="Each link opens the existing explanation of that service."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {related.map((service, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="grid gap-2 py-5 transition-colors duration-150 hover:text-accent sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-8">
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
        title="Does your content have a clear direction?"
        description="Let's look at the questions your audience brings, the pages you already have, and the plan that would make the next drafts useful."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
