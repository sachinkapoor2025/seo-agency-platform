import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { HeroSystem } from "@/components/hero-system";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/case-studies";
import { services } from "@/content/services";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const strategyParts = [
  {
    title: "Technical foundations",
    text: "Crawl access, templates, and internal links decide whether the right pages can be reached at all.",
  },
  {
    title: "Useful content",
    text: "A page should answer a defined question for a real audience, rather than add publishing volume for its own sake.",
  },
  {
    title: "Search engine visibility",
    text: "Classic search still depends on stable URLs, clear pages, and a site that can be crawled and understood.",
  },
  {
    title: "Answer engine optimization",
    text: "A direct, accurate answer is easier to use in search results and in answer interfaces.",
  },
  {
    title: "Generative engine optimization",
    text: "Generative systems need a consistent source. Contradictory or thin pages are a weak one.",
  },
  {
    title: "AI-mediated discovery",
    text: "AI search is not a separate trick. It depends on the same technical access, clarity, and consistency.",
  },
] as const;

const stages = [
  {
    step: "01",
    title: "Discover",
    text: "Clarify the commercial goal, the priority markets, and the current state of the site.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "Choose the technical, content, and visibility work that fits. Leave out activity that cannot be justified.",
  },
  {
    step: "03",
    title: "Execute",
    text: "Implement with the people who own the website, content, and product, in changes that can be reviewed.",
  },
  {
    step: "04",
    title: "Measure",
    text: "Watch signals that can be explained, and state clearly what those signals do not prove.",
  },
  {
    step: "05",
    title: "Improve",
    text: "Use what was learned to set the next cycle. No cycle is treated as a final guarantee.",
  },
] as const;

const reasons = [
  {
    title: "Technical and strategic SEO together",
    text: "Recommendations join engineering realities with the commercial question the site needs to answer.",
  },
  {
    title: "Visibility beyond a single search box",
    text: "The same plan covers classic search, answer interfaces, and generative discovery.",
  },
  {
    title: "Content built around genuine intent",
    text: "Topics are chosen because someone needs an answer, then tied back to the pages that matter.",
  },
  {
    title: "A measurable, continuous approach",
    text: "What is watched is explained in plain language, including what a metric cannot prove.",
  },
  {
    title: "An international market perspective",
    text: "Work is planned for India, the United States, and the United Kingdom, without assuming one market’s pages fit another.",
  },
] as const;

const serviceStyle: Record<string, "feature" | "sage" | "plain" | "rule" | "closing"> = {
  "technical-seo": "feature",
  "on-page-seo": "plain",
  "content-strategy": "sage",
  "ecommerce-seo": "rule",
  "answer-engine-optimization": "sage",
  "generative-engine-optimization": "plain",
  "ai-search-visibility": "closing",
};

const serviceKicker: Record<string, string> = {
  "technical-seo": "Foundation",
  "on-page-seo": "Pages",
  "content-strategy": "Editorial",
  "ecommerce-seo": "Catalogs",
  "answer-engine-optimization": "AEO",
  "generative-engine-optimization": "GEO",
  "ai-search-visibility": "Combined",
};

export default function HomePage() {
  const examples = caseStudies.slice(0, 3);

  return (
    <>
      <section aria-labelledby="hero-heading" className="border-b border-line bg-background">
        <Container className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-start lg:gap-14 lg:pt-12 lg:pb-16">
          <div className="flex min-w-0 flex-col gap-6">
            <div className="flex flex-col gap-4">
              <p className={ui.eyebrow}>International SEO and AI search growth</p>
              <HeroEntrance duration={0.56} distance={18}>
                <h1 id="hero-heading" className={cx(ui.display, "max-w-4xl")}>
                  Grow your visibility across search and AI.
                </h1>
              </HeroEntrance>
            </div>
            <HeroEntrance delay={0.12} duration={0.52} distance={14}>
              <p className={cx(ui.bodyLg, ui.measure, "text-muted")}>
                We help ambitious businesses build discoverability, attract qualified
                traffic and turn digital visibility into measurable growth.
              </p>
            </HeroEntrance>
            <HeroEntrance delay={0.24} duration={0.52} distance={12} className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a Strategy Call
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Our Services
              </ButtonLink>
            </HeroEntrance>
            <p className={cx(ui.small, "text-muted")}>
              Priority markets: India, the United States, and the United Kingdom.
            </p>
          </div>
          <HeroEntrance delay={0.4} duration={0.62} distance={16} className="min-w-0">
            <HeroSystem />
          </HeroEntrance>
        </Container>
      </section>

      <section aria-labelledby="strategy-heading" className="bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-12 lg:gap-14")}>
          <ScrollReveal className="lg:col-span-4">
            <SectionHeading
              id="strategy-heading"
              eyebrow="Positioning"
              title="Visibility is a connected system."
              description="A website has to be technically available, useful to a person, and consistent enough for search engines and AI-mediated answers."
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-8" delay={0.08}>
          <ol>
            {strategyParts.map((part, index) => (
              <li
                key={part.title}
                className="grid gap-2 border-t border-line py-5 md:grid-cols-[minmax(11rem,0.8fr)_1.2fr] md:items-baseline md:gap-8"
              >
                <h3 className={ui.h3}>
                  <span className="mr-3 font-sans text-sm font-semibold tracking-wide text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {part.title}
                </h3>
                <p className={cx(ui.body, "text-muted")}>{part.text}</p>
              </li>
            ))}
          </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="Core capabilities"
              description="Seven practices, planned as one system. Each link opens the existing explanation of that service."
            />
          </ScrollReveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const layout = serviceStyle[service.slug] ?? "plain";
              const wide = layout === "feature" || layout === "closing";
              return (
                <li key={service.slug} className={wide ? "md:col-span-2" : undefined}>
                  <ScrollReveal className="h-full min-w-0" delay={index * 0.08}>
                  <Link
                    href={`/services/${service.slug}`}
                    className={cx(
                      "flex h-full min-w-0 flex-col gap-4 border border-line p-6 transition-colors duration-150 sm:p-7",
                      layout === "feature" && "bg-inverse text-on-inverse md:flex-row md:items-end md:justify-between md:gap-12",
                      layout === "closing" && "bg-surface md:flex-row md:items-end md:justify-between md:gap-12",
                      layout === "sage" && "bg-sage",
                      layout === "plain" && "bg-surface",
                      layout === "rule" && "border-t-2 border-t-accent bg-surface",
                      "hover:border-accent",
                    )}
                  >
                    <div className="min-w-0">
                      <p className={cx(ui.eyebrow, layout === "feature" && "text-on-inverse/80")}>
                        {serviceKicker[service.slug] ?? "Service"}
                      </p>
                      <h3 className={cx(ui.h3, "mt-3")}>{service.name}</h3>
                      <p
                        className={cx(
                          ui.body,
                          "mt-3 max-w-2xl",
                          layout === "feature" ? "text-on-inverse/85" : "text-muted",
                        )}
                      >
                        {service.summary}
                      </p>
                    </div>
                    <p
                      className={cx(
                        "text-sm font-semibold",
                        layout === "feature"
                          ? "text-on-inverse underline decoration-on-inverse/40 underline-offset-4"
                          : ui.textLink,
                      )}
                    >
                      View service
                    </p>
                  </Link>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading
              id="process-heading"
              eyebrow="Process"
              title="Five stages, then another cycle."
              description="Each stage produces a decision the next one can use. Nothing here is a promise of rankings or revenue."
            />
          </ScrollReveal>
          <ol className="mt-10 grid lg:grid-cols-5">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <ScrollReveal className="border-t-2 border-accent py-5 lg:pr-6" delay={index * 0.09}>
                <p className={ui.eyebrow}>{stage.step}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{stage.title}</h3>
                <p className={cx(ui.small, "mt-3 text-muted")}>{stage.text}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="examples-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading
              id="examples-heading"
              eyebrow="Illustrative examples"
              title="Case-study previews"
              description="Every example is hypothetical. None of them is a client engagement, and none reports a ranking or a commercial result."
            />
          </ScrollReveal>
          <div className="mt-8 border-t border-line">
            {examples.map((study, index) => (
              <article key={study.slug}>
                <ScrollReveal className="border-b border-line py-8" delay={index * 0.08}>
                <div className="grid gap-6 lg:grid-cols-12">
                  <div className="min-w-0 lg:col-span-4">
                    <p className={ui.eyebrow}>Illustrative example</p>
                    <h3 className={cx(ui.h3, "mt-3")}>
                      <Link href={`/case-studies/${study.slug}`} className={ui.quietLink}>
                        {study.title}
                      </Link>
                    </h3>
                    <p className={cx(ui.small, "mt-2 font-semibold")}>{study.industry}</p>
                    <Link href={`/case-studies/${study.slug}`} className={cx(ui.textLink, "mt-5 inline-flex text-sm")}>
                      Read the example
                    </Link>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                        Challenge
                      </h4>
                      <p className={cx(ui.small, "mt-2 text-ink")}>{study.challenge[0]}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                        Approach
                      </h4>
                      <p className={cx(ui.small, "mt-2 text-ink")}>{study.strategy[0]}</p>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                        Outcome
                      </h4>
                      <p className={cx(ui.small, "mt-2 text-ink")}>
                        Not included. This example does not report rankings, traffic, or commercial results.
                      </p>
                    </div>
                  </div>
                </div>
                </ScrollReveal>
              </article>
            ))}
          </div>
          <ScrollReveal className="mt-8">
            <ButtonLink href="/case-studies" variant="secondary">
              View all examples
            </ButtonLink>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="why-heading" className="border-t border-line bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-12 lg:gap-16")}>
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              id="why-heading"
              eyebrow="Why Growth Agency"
              title="A practice built around the work, not a claim of scale."
              description="The distinction is how search, content, and technical decisions are held together. There is no client count and no market-leader claim on this site."
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-7" delay={0.08}>
          <ol className="border-t border-line">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-line py-5">
                <span className="font-serif text-lg font-semibold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className={ui.h3}>{reason.title}</h3>
                  <p className={cx(ui.body, "mt-2 text-muted")}>{reason.text}</p>
                </div>
              </li>
            ))}
          </ol>
          </ScrollReveal>
        </Container>
      </section>

      <ScrollReveal>
      <ConsultationCta
        title="Let's build your next stage of search growth."
        description="Book a strategy call to discuss priority markets, the current site, and the kind of work that would be useful. The conversation is a starting point, not a promise of rankings or results."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
