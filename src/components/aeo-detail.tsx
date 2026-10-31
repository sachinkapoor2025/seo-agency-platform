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

const answerParts = [
  { label: "Question", detail: "The specific thing a person is trying to resolve." },
  { label: "Context", detail: "Who is asking, and what they already need to know." },
  { label: "Concise answer", detail: "The useful response, stated where it can be found." },
  { label: "Supporting evidence", detail: "The source, caveat, or next step that makes the answer usable." },
] as const;

const questionProblems = [
  { title: "Important questions remain unanswered", text: "The business knows the subject, but no page states the answer a customer came to find." },
  { title: "Content does not directly address user intent", text: "The page discusses a topic while the query asked for a decision, a definition, or a step." },
  { title: "Weak FAQ and question-led content", text: "Questions are collected as an afterthought, or they repeat what the main page already failed to say." },
] as const;

const answerProblems = [
  { title: "Information is difficult to extract or interpret", text: "The useful fact is buried under introduction, so a person or a retrieval system has to hunt for it." },
  { title: "Missing context and supporting evidence", text: "A claim appears without the condition, the source, or the limit that makes it responsible." },
  { title: "Inconsistent information across important pages", text: "Two URLs answer the same question in ways that do not agree." },
] as const;

const stages = [
  { index: "01", title: "Identify audience questions", text: "Select the questions that match real demand and the organization's authority to answer." },
  { index: "02", title: "Review existing answers", text: "Find where those questions are already handled, contradicted, or missing." },
  { index: "03", title: "Structure useful information", text: "Put the answer where it can be read, then organize the detail that supports it." },
  { index: "04", title: "Strengthen supporting context", text: "Add the evidence, the caveat, and the next step a careful answer needs." },
  { index: "05", title: "Review and refine", text: "Check that the pages still agree with each other after the edits." },
] as const;

const deliverableGroups = [
  { title: "Questions", items: ["Question and intent research", "Answer-focused content audit", "FAQ opportunity assessment"] },
  { title: "Answers", items: ["Question-led content briefs", "Page structure recommendations", "Content clarity recommendations"] },
  { title: "Evidence", items: ["Supporting source and evidence guidance", "Relevant structured data assessment", "AEO monitoring framework"] },
] as const;

const audiences = [
  { title: "Professional service businesses", text: "Practices whose clients arrive with a specific question before they arrive with a brief." },
  { title: "B2B companies", text: "Offers that need a direct explanation before a longer evaluation page." },
  { title: "Educational and informational websites", text: "Libraries of explanations that should answer one question cleanly." },
  { title: "Brands with specialized expertise", text: "Subjects where a vague page is a weak source, even when the expertise is real." },
  { title: "Complex customer questions", text: "Businesses whose buyers need conditions, steps, and limits, not a slogan." },
] as const;

const outcomes = [
  "Clearer answers to audience questions.",
  "More structured and useful information.",
  "Better coverage of relevant questions.",
  "Stronger supporting context.",
  "A consistent answer-focused content approach.",
] as const;

const relatedSlugs = ["on-page-seo", "content-strategy", "generative-engine-optimization", "ai-search-visibility"] as const;

function AnswerStructure() {
  return (
    <article className="min-w-0 border border-line bg-surface">
      {answerParts.map((part, index) => (
        <div key={part.label} className={cx("px-5 py-4 sm:px-6", index === 0 && "bg-sage", index > 0 && "border-t border-line", index === 2 && "bg-background")}>
          <p className={ui.eyebrow}>{part.label}</p>
          <p className={cx("mt-2", index === 2 ? "font-serif text-xl font-semibold tracking-tight" : "text-sm leading-6 text-ink")}>
            {part.detail}
          </p>
        </div>
      ))}
    </article>
  );
}

export function AeoDetail() {
  const related = relatedSlugs.flatMap((slug) => {
    const service = services.find((item) => item.slug === slug);
    return service ? [service] : [];
  });
  const [first, second, third, fourth, fifth] = stages;

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Answer Engine Optimization" }]} />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Answer engine optimization</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Make your expertise easier to find and understand.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
              We help businesses structure useful information so that direct-answer experiences can better interpret their expertise and address audience questions.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/contact" className="w-full sm:w-auto">Discuss Your AEO Strategy</ButtonLink>
              <ButtonLink href="#approach" variant="secondary" className="w-full sm:w-auto">Explore Our Approach</ButtonLink>
            </div>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <AnswerStructure />
            </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="problems-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="problems-heading"
            eyebrow="Problems we solve"
            title="An expert page can still fail to answer the question."
            description="Answer engine optimization is about clarity, structure, and a page that deserves to be read. It does not promise a featured placement or a mention in any answer product."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className={ui.eyebrow}>The question</p>
              <ul className="mt-4 space-y-6">
                {questionProblems.map((problem, index) => (
                  <li key={problem.title}>
<ScrollReveal {...revealStep(index)}>
                    <h3 className={ui.h3}>{problem.title}</h3>
                    <p className={cx(ui.body, "mt-2 text-muted")}>{problem.text}</p>
                  </ScrollReveal>
</li>
                ))}
              </ul>
            </div>
            <div className="border-t border-line pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <p className={ui.eyebrow}>The answer</p>
              <ul className="mt-4 space-y-6">
                {answerProblems.map((problem, index) => (
                  <li key={problem.title}>
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
            title="State the answer, then earn it."
            description="The work selects questions the organization can answer responsibly, then makes those answers easier to read and easier to keep consistent."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
            <ol className="divide-y divide-line border-y border-line">
              {[first, second, third].map((stage, index) => (
                <li key={stage.index} className="py-5">
<ScrollReveal {...revealStep(index)}>
                  <p className={ui.eyebrow}>{stage.index}</p>
                  <h3 className={cx(ui.h3, "mt-2")}>{stage.title}</h3>
                  <p className={cx(ui.body, "mt-2 text-muted")}>{stage.text}</p>
                </ScrollReveal>
</li>
              ))}
            </ol>
            <ol className="grid content-start gap-4">
              {[fourth, fifth].map((stage, index) => (
                <li key={stage.index} className="bg-sage px-5 py-5">
<ScrollReveal {...revealStep(index)}>
                  <p className={ui.eyebrow}>{stage.index}</p>
                  <h3 className={cx(ui.h3, "mt-2")}>{stage.title}</h3>
                  <p className={cx(ui.body, "mt-2 text-ink")}>{stage.text}</p>
                </ScrollReveal>
</li>
              ))}
            </ol>
          </div>


        </Container>
      </section>

      <section aria-labelledby="deliverables-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="deliverables-heading"
            eyebrow="Engagement"
            title="What the engagement can include"
            description="Deliverables follow the questions in scope. A monitoring framework is a way to revisit those pages. It is not a guarantee of placement in an answer engine."
          />
</ScrollReveal>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {deliverableGroups.map((group, index) => (
              <div key={group.title}>
                <h3 className="font-serif text-2xl font-semibold tracking-tight">{group.title}</h3>
                <ul className="mt-4">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-line py-3 text-sm leading-6">
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


        </Container>
      </section>

      <section aria-labelledby="audiences-heading" className="border-b border-line bg-inverse text-on-inverse">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <div className={ui.measure}>
            <p className={cx(ui.eyebrow, "text-on-inverse/80")}>Who this service helps</p>
            <h2 id="audiences-heading" className={cx(ui.h2, "mt-3")}>
              Organizations that are asked the same questions often.
            </h2>
          </div>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((audience) => (
              <li key={audience.title} className="min-w-0">
                <h3 className="font-serif text-lg font-semibold tracking-tight">{audience.title}</h3>
                <p className="mt-2 text-sm leading-6 text-on-inverse/80">{audience.text}</p>
              </li>
            ))}
          </ul>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="outcomes-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="outcomes-heading"
            eyebrow="Expected outcomes"
            title="Answers a person can use, and a site that agrees with itself."
            description="The benefit is clearer information. This work does not promise featured answers, citations, or inclusion in any answer product, and it does not promise a timeline."
          />
</ScrollReveal>
          <ol className="mt-10 max-w-3xl">
            {outcomes.map((outcome, index) => (
              <li key={outcome} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-line py-4">
<ScrollReveal {...revealStep(index)}>
                <span className="font-serif text-sm font-semibold text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className={ui.body}>{outcome}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="related-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="related-heading" eyebrow="Related services" title="A good answer still needs a sound page and a sound plan." />
</ScrollReveal>
          <ul className="mt-8 divide-y divide-line border-t border-line">
            {related.map((service, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="flex flex-col gap-2 py-5 transition-colors duration-150 hover:text-accent sm:flex-row sm:items-baseline sm:justify-between">
                  <span className="font-serif text-xl font-semibold tracking-tight">{service.name}</span>
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
        title="Can your audience find clear answers from your business?"
        description="Let's look at the questions people bring to you, and whether the site answers them in a way that can be read and trusted."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
