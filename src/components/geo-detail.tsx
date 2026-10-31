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

const fields = [
  { title: "Topics", detail: "The subjects the organization can explain without contradicting itself." },
  { title: "Entities", detail: "The brand, the offers, and the people or places that need a stable description." },
  { title: "Supporting content", detail: "Pages that add depth, conditions, and examples around those subjects." },
  { title: "Trusted sources", detail: "Evidence and canonical URLs a careful system could draw on." },
] as const;

const problems = [
  { title: "Unclear brand and entity information", text: "The site does not say, in one stable place, who the organization is and what it offers." },
  { title: "Fragmented topical coverage", text: "A subject is scattered across thin pages that never become a coherent explanation." },
  { title: "Weak supporting context", text: "Claims sit alone, without the detail, the limit, or the page that should back them." },
  { title: "Inconsistent business information", text: "Names, facts, and descriptions differ from one URL to the next." },
  { title: "Content that lacks depth or clarity", text: "Priority topics are named, but a reader cannot learn enough to use them." },
  { title: "Limited understanding of generative search visibility", text: "Teams chase mentions in generative tools before the site is a clear source." },
] as const;

const stages = [
  { index: "01", title: "Understand the brand and topics", text: "Name the entities and the subjects that matter commercially." },
  { index: "02", title: "Review information and sources", text: "Find the canonical explanations, the contradictions, and the missing evidence." },
  { index: "03", title: "Strengthen topical coverage", text: "Give priority subjects a page structure that can hold depth." },
  { index: "04", title: "Improve clarity and consistency", text: "Align facts, wording, and internal links so the body of work agrees." },
  { index: "05", title: "Monitor emerging discovery patterns", text: "Watch how the information is used, and revise the source when the site drifts." },
] as const;

const deliverableGroups = [
  { title: "Read the source", items: ["Brand and entity information review", "Topical coverage assessment", "Content and source analysis"] },
  { title: "Strengthen it", items: ["Entity clarity recommendations", "Topic and content architecture", "Supporting evidence recommendations", "Information consistency review"] },
  { title: "Plan the next pass", items: ["GEO improvement roadmap", "Monitoring framework"] },
] as const;

const audiences = [
  { title: "Established brands", text: "Names that already appear in many places and need one coherent account." },
  { title: "B2B and professional services", text: "Firms whose expertise is the product, and whose pages are the source." },
  { title: "Complex products", text: "Offers that need entities, features, and limits described without contradiction." },
  { title: "Broad topical expertise", text: "Organizations that publish across many subjects and need a map of canonical pages." },
  { title: "Teams forming an AI search strategy", text: "Groups that want the website ready before they expand production." },
] as const;

const outcomes = [
  "Clearer brand and topic information.",
  "Better organized topical coverage.",
  "More consistent supporting content.",
  "A clearer view of generative search opportunities.",
  "A structured GEO improvement roadmap.",
] as const;

const relatedSlugs = ["content-strategy", "on-page-seo", "answer-engine-optimization", "ai-search-visibility"] as const;

function SourceField() {
  return (
    <div className="min-w-0">
      <p className="mb-3 font-serif text-xl font-semibold tracking-tight">A subject worth citing</p>
      <div className="grid grid-cols-2 border border-line bg-surface">
        {fields.map((field) => (
          <div key={field.title} className="min-w-0 border-r border-b border-line p-4 last:border-r-0 sm:p-5 [&:nth-child(2n)]:border-r-0 [&:nth-last-child(-n+2)]:border-b-0">
            <p className={ui.eyebrow}>{field.title}</p>
            <p className="mt-2 text-sm leading-6 text-ink">{field.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GeoDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(16rem,0.95fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Generative Engine Optimization" }]} />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Generative engine optimization</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Build visibility in the era of generative search.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses strengthen the clarity, depth and consistency of their digital information for an evolving search environment that includes generative experiences.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">Discuss Your GEO Strategy</ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">Explore Our Approach</ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <SourceField />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="Generative systems need a source that agrees with itself."
            description="The practical work is still editorial and technical. It does not guarantee citations, mentions, rankings, or inclusion in an AI-generated response."
          />
</ScrollReveal>
          <ul className="mt-12 grid gap-x-12 gap-y-8 sm:grid-cols-2">
            {problems.map((problem, index) => (
              <li key={problem.title} className="min-w-0 border-t border-accent pt-4">
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{problem.title}</h3>
                <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="Our approach"
            title="Make the website a consistent source."
            description="Coverage, evidence, and wording are brought into line. Monitoring looks for drift. It does not score a model's output."
          />
</ScrollReveal>
          <ol className="mt-10 bg-surface">
            {stages.map((stage, index) => (
              <li key={stage.index} className="grid gap-2 border-b border-line px-5 py-5 last:border-b-0 sm:grid-cols-[4.5rem_minmax(0,14rem)_minmax(0,1fr)] sm:items-baseline sm:gap-6 sm:px-6">
<ScrollReveal {...revealStep(index)}>
                <span className="font-serif text-sm font-semibold text-accent">{stage.index}</span>
                <h3 className="font-serif text-xl font-semibold tracking-tight">{stage.title}</h3>
                <p className={cx(ui.body, "text-muted")}>{stage.text}</p>
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
            description="The roadmap and the monitoring framework describe how the source will be maintained. They are not a promise of generative citations."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,0.85fr)]">
            {deliverableGroups.map((group, index) => (
              <div key={group.title} className="min-w-0">
                <h3 className={ui.h3}>{group.title}</h3>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="bg-sage px-4 py-3 text-sm leading-6">
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading id="audiences-heading" eyebrow="Who this service helps" title="Organizations whose information is already public, and uneven." />
          <dl className="mt-10 grid gap-6 md:grid-cols-2">
            {audiences.map((audience) => (
              <div key={audience.title} className="min-w-0 border-l border-accent pl-4">
                <dt className="font-serif text-lg font-semibold tracking-tight">{audience.title}</dt>
                <dd className={cx(ui.body, "mt-2 text-muted")}>{audience.text}</dd>
              </div>
            ))}
          </dl>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="A body of information that can be used with more confidence."
            description="The result is a clearer source and a roadmap for keeping it clear. It is not inclusion in generative answers, and it is not a ranking or a traffic forecast."
          />
</ScrollReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className={cx(ui.body, "border border-line bg-surface px-4 py-4")}>
<ScrollReveal {...revealStep(index)}>{outcome}</ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="related-heading" eyebrow="Related services" title="Generative discovery still depends on the pages underneath." />
</ScrollReveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {related.map((service, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="block border-t-2 border-accent py-4 transition-colors duration-150 hover:text-accent">
                  <span className="font-serif text-xl font-semibold tracking-tight">{service.name}</span>
                  <span className={cx(ui.textLink, "mt-3 block")}>View service</span>
                </Link>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Is your digital information ready for generative discovery?"
        description="Let's review how the brand, the topics, and the supporting pages currently explain the business."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
