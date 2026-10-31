import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { caseStudies } from "@/content/case-studies";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative case-study examples showing how a search engagement might be framed. These are not verified client results.",
};

function study(slug: string) {
  const match = caseStudies.find((item) => item.slug === slug);
  if (!match) throw new Error(`Missing case study: ${slug}`);
  return match;
}

export default function CaseStudiesPage() {
  const catalogue = study("international-product-catalogue");
  const software = study("b2b-software-documentation");
  const locations = study("multi-location-service-business");
  const advisory = study("advisory-explanatory-content");

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Case studies</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Illustrative examples, not client results.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
                These scenarios show how a brief, a strategy, and a measurement plan could be structured. They use hypothetical businesses.
              </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "mt-6 flex flex-col gap-3 sm:flex-row")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss a real situation
              </ButtonLink>
              <ButtonLink href="#examples" variant="secondary" className="w-full sm:w-auto">
                Explore the examples
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual")}>
          <p className={cx(ui.body, "border-t border-line pt-5 text-ink lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8")}>
            Every example is hypothetical. None of them is a client engagement, a testimonial, or a documented result. They do not report rankings, traffic, leads, or revenue.
          </p>
          </HeroEntrance>
        </Container>
      </header>

      <section id="examples" aria-labelledby="examples-heading" className="scroll-mt-24 border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="examples-heading"
            eyebrow="Four scenarios"
            title="The same kind of plan, four different pages."
          />
</ScrollReveal>

          <ScrollReveal {...revealStep(0)}>
          <Link
            href={`/case-studies/${catalogue.slug}`}
            className="mt-12 grid min-w-0 border border-line bg-sage transition-colors duration-150 hover:border-accent lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]"
          >
            <div className="p-6 sm:p-8">
              <p className={ui.eyebrow}>{catalogue.industry}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{catalogue.title}</h2>
              <p className={cx(ui.body, "mt-4 max-w-xl text-ink")}>{catalogue.challenge[0]}</p>
              <p className={cx(ui.small, "mt-4 text-ink")}>Focus: {catalogue.strategy[0]}</p>
              <p className={cx(ui.textLink, "mt-6")}>Read the example</p>
            </div>
            <ol className="grid grid-cols-2 border-t border-line bg-surface sm:grid-cols-4 lg:grid-cols-1 lg:border-t-0 lg:border-l">
              {["Markets", "Categories", "Products", "Indexation"].map((item) => (
                <li key={item} className="border-b border-line px-5 py-4 font-serif text-lg font-semibold last:border-b-0">{item}</li>
              ))}
            </ol>
          </Link>
          </ScrollReveal>

          <ScrollReveal {...revealStep(1)}>
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(16rem,0.75fr)]">
            <Link
              href={`/case-studies/${software.slug}`}
              className="min-w-0 border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>{software.industry}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{software.title}</h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>{software.challenge[0]}</p>
              <p className="mt-6 text-sm leading-6 text-ink">Product pages · Documentation · Evaluation</p>
              <p className={cx(ui.small, "mt-4 text-ink")}>Focus: {software.strategy[0]}</p>
              <p className={cx(ui.textLink, "mt-6")}>Read the example</p>
            </Link>
            <Link
              href={`/case-studies/${locations.slug}`}
              className="flex min-w-0 flex-col justify-between border border-line border-t-2 border-t-accent bg-background p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <div>
                <p className={ui.eyebrow}>{locations.industry}</p>
                <h2 className={cx(ui.h3, "mt-3")}>{locations.title}</h2>
                <p className={cx(ui.body, "mt-4 text-muted")}>{locations.challenge[0]}</p>
                <p className={cx(ui.small, "mt-4 text-ink")}>Focus: {locations.strategy[1]}</p>
              </div>
              <p className={cx(ui.textLink, "mt-6")}>Read the example</p>
            </Link>
          </div>
          </ScrollReveal>

          <ScrollReveal {...revealStep(2)}>
          <Link
            href={`/case-studies/${advisory.slug}`}
            className="mt-4 grid min-w-0 bg-inverse text-on-inverse transition-colors duration-150 hover:bg-navy-dark lg:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.8fr)]"
          >
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">{advisory.industry}</p>
              <h2 className={cx(ui.h2, "mt-3")}>{advisory.title}</h2>
              <p className="mt-4 max-w-xl text-on-inverse/85">{advisory.challenge[0]}</p>
              <p className="mt-4 text-sm leading-6 text-on-inverse/85">Focus: {advisory.strategy[0]}</p>
              <p className="mt-6 text-sm font-semibold underline decoration-on-inverse/40 underline-offset-4">Read the example</p>
            </div>
            <ol className="border-t border-on-inverse/15 sm:grid sm:grid-cols-3 lg:block lg:border-t-0 lg:border-l">
              {["Services", "Questions", "Evidence"].map((item) => (
                <li key={item} className="border-b border-on-inverse/15 px-6 py-4 font-serif text-lg font-semibold last:border-b-0">{item}</li>
              ))}
            </ol>
          </Link>
          </ScrollReveal>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Want to talk about a real situation?"
        description="A consultation can look at the actual site and markets. It will not reuse these examples as if they were results."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
