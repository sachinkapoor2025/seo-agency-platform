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

const discovery = [
  { title: "Features", detail: "Capabilities a buyer is trying to confirm." },
  { title: "Integrations", detail: "Systems the product has to work beside." },
  { title: "Use cases", detail: "Jobs the product is hired to do." },
] as const;

const matters = [
  {
    title: "Product and solution pages",
    text: "A product page and a solution page answer different questions. Collapsing them makes both harder to evaluate.",
  },
  {
    title: "Feature and use-case discovery",
    text: "Buyers search for a capability or a job to be done, often before they search for the product name.",
  },
  {
    title: "Integration and alternative pages",
    text: "Integration pages and comparison pages serve a later stage of the same evaluation.",
  },
  {
    title: "Documentation discoverability",
    text: "Help and technical docs need to be findable without competing with the page that explains the product.",
  },
  {
    title: "Comparison and evaluation journeys",
    text: "A buyer may move from a problem, to a feature, to a comparison, to a proof point. Those pages should connect.",
  },
  {
    title: "Complex B2B intent",
    text: "One query can mean a researcher, a user, or a buying group. The page should be clear about which it serves.",
  },
  {
    title: "Clear technical explanation",
    text: "A technical product still needs plain language for the problem, the boundary, and the next step.",
  },
] as const;

const engagement = [
  { label: "Map", text: "Product, feature, integration, use-case, and comparison pages, and where documentation sits beside them." },
  { label: "Clarify", text: "Page purposes so marketing pages and docs do not answer the same query in two systems." },
  { label: "Connect", text: "Internal links across the evaluation journey, from the problem to the product boundary." },
  { label: "Explain", text: "Content that states what the product does in language a non-specialist buyer can use." },
] as const;

const related = [
  ["technical-seo", "Templates and documentation paths that search engines can access."],
  ["on-page-seo", "Product, feature, and comparison pages with a single clear purpose."],
  ["content-strategy", "A plan for use cases, integrations, and the questions buyers ask."],
  ["answer-engine-optimization", "Direct answers to evaluation questions the product can actually support."],
  ["generative-engine-optimization", "A consistent account of the product across the pages that describe it."],
] as const;

export function SaasIndustryPage() {
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
              { label: "SaaS and technology" },
            ]}
          />
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-14">
            <div className="min-w-0">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>SaaS and technology</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>Help the right customers discover what your product can do.</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
                Technology sites split the story across product pages, features, integrations, use cases, comparisons, and documentation. Searchers experience that as one evaluation.
              </p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Discuss your product
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
              <div className="min-w-0 border border-line">
              <p className="border-b border-line bg-inverse px-5 py-4 font-serif text-xl font-semibold tracking-tight text-on-inverse">
                Product
              </p>
              <ul className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] z-10 w-px bg-accent/40"
                />
                {discovery.map((item, index) => (
                  <li
                    key={item.title}
                    className={cx(
                      "border-b border-line py-4 pr-5 pl-10 last:border-b-0",
                      index % 2 === 0 ? "bg-surface" : "bg-sage",
                    )}
                  >
                    <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-ink">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            </HeroEntrance>
          </div>
        </Container>
      </header>

      <section aria-labelledby="matters-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="matters-heading"
            eyebrow="What has to be findable"
            title="Buyers search for a job, a feature, or an alternative."
          />
</ScrollReveal>
          <ol className="mt-12">
            {matters.map((item, index) => (
              <li key={item.title} className="grid gap-3 border-t border-line py-6 last:border-b md:grid-cols-[4rem_minmax(0,16rem)_1fr] md:gap-8">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className={ui.h3}>{item.title}</h3>
                <p className={cx(ui.body, "text-muted")}>{item.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="challenges-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-2 lg:gap-16")}>
          <ScrollReveal {...revealStep()}>
          <div>
            <p className={ui.eyebrow}>Common challenges</p>
            <h2 id="challenges-heading" className={cx(ui.h2, "mt-3")}>Two libraries, one query.</h2>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              Product marketing and technical documentation often live apart. A searcher does not know which system owns the answer.
            </p>
          </div>
          <div className="border-t border-line pt-6">
            <h3 className={ui.h3}>Intent is shared across roles</h3>
            <p className={cx(ui.body, "mt-3 text-muted")}>
              The same feature name can be a researcher comparing vendors, a user looking for setup, or a buying group checking a requirement. Each of those needs a page with a purpose.
            </p>
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section id="engagement" aria-labelledby="engagement-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="engagement-heading"
            eyebrow="What an engagement can include"
            title="Scope follows the product and the documentation already published."
          />
</ScrollReveal>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {engagement.map((item, index) => (
              <li key={item.label} className="border border-line bg-surface p-5">
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{item.label}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{item.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="example-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end")}>
          <ScrollReveal {...revealStep()}>
          <div>
            <p className={ui.eyebrow}>Illustrative example</p>
            <h2 id="example-heading" className={cx(ui.h2, "mt-3")}>Product pages beside a documentation set</h2>
            <p className={cx(ui.body, ui.measure, "mt-4 text-muted")}>
              A hypothetical example of product pages planned next to technical documentation. It is not a client engagement, a testimonial, or a reported result.
            </p>
          </div>
          <Link href="/case-studies/b2b-software-documentation" className={cx(ui.textLink, "lg:mb-1")}>
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
            title="Five practices cover the evaluation journey."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map(({ service, why }, index) => (
              <li key={service.slug} className="grid gap-2 py-5 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>
                  {service.name}
                </Link>
                <p className={cx(ui.body, "text-muted")}>{why}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Can the right customers tell what your product does?"
        description="We'll look at the product pages, the documentation, and the questions an evaluation actually asks."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
