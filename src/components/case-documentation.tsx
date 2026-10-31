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
import type { CaseStudy } from "@/content/types";
import { getService } from "@/lib/content";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const ecosystem = [
  { title: "Product pages", detail: "Evaluation questions and the job the product does." },
  { title: "Features", detail: "Names a buyer and a user both have to recognize." },
  { title: "Documentation", detail: "Setup and task pages that should not compete by accident." },
  { title: "Connections", detail: "Links from the commercial page to the canonical task." },
] as const;

export function DocumentationCaseStudy({ study }: { study: CaseStudy }) {
  const services = study.serviceSlugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: study.title },
            ]}
          />
          <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Illustrative example · {study.industry}</p>
            </HeroEntrance>
          <div className="mt-4 grid items-end gap-8 lg:grid-cols-[minmax(0,1.15fr)_auto]">
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "max-w-4xl")}>{study.title}</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "flex flex-col gap-3 sm:flex-row lg:pb-1")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss a real product
              </ButtonLink>
              <ButtonLink href="#plan" variant="secondary" className="w-full sm:w-auto">
                See the sample plan
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>{study.summary}</p>
            </HeroEntrance>
          <SampleNotice>
            This scenario is hypothetical. It is not a client story, a testimonial, or a verified result.
          </SampleNotice>
          <HeroEntrance {...heroStep("visual", "mt-10 min-w-0")}>
          <ul className="grid min-w-0 border border-line sm:grid-cols-2 lg:grid-cols-4">
            {ecosystem.map((item) => (
              <li key={item.title} className="border-b border-line bg-surface px-5 py-5 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-r lg:border-b-0 lg:last:border-r-0">
                <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
          </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="context-heading" className="border-b border-line bg-inverse text-on-inverse">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">Hypothetical business context</p>
          <h2 id="context-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>Marketing pages and a help center, one evaluation.</h2>
          <div className="mt-6 max-w-3xl space-y-4">
            {study.context.map((paragraph) => (
              <p key={paragraph} className="text-on-inverse/85">{paragraph}</p>
            ))}
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="challenge-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-12 lg:grid-cols-2")}>

          <div>
            <ScrollReveal {...revealStep()}>
<SectionHeading id="challenge-heading" eyebrow="Challenge" title="Two libraries answer the same query." />
</ScrollReveal>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {study.challenge.map((item, index) => (
                <li key={item} className={cx(ui.body, "py-4")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
              ))}
            </ul>
          </div>
          <div id="plan" className="scroll-mt-24">
            <p className={ui.eyebrow}>Strategy</p>
            <h2 className={cx(ui.h2, "mt-3")}>Give each query one preferred URL.</h2>
            <ol className="mt-8 space-y-5">
              {study.strategy.map((item, index) => (
                <li key={item} className="border-l-2 border-accent pl-4">
<ScrollReveal {...revealStep(index)}>
                  <p className={ui.body}>{item}</p>
                </ScrollReveal>
</li>
              ))}
            </ol>
          </div>


        </Container>
      </section>

      <section aria-labelledby="implementation-heading" className="border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="implementation-heading" eyebrow="Implementation" title="A glossary, then the links between the two sites." />
</ScrollReveal>
          <ol className="mt-10 grid gap-6 sm:grid-cols-2">
            {study.implementation.map((item, index) => (
              <li key={item} className="bg-surface p-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.body}>{item}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>
          <div className="mt-12 max-w-3xl">
            <h2 className={ui.h2}>Measurement plan</h2>
            <div className="mt-4 space-y-4">
              {study.measurement.map((paragraph) => (
                <p key={paragraph} className={ui.body}>{paragraph}</p>
              ))}
            </div>
          </div>


        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="services-heading" eyebrow="Services in this example" title="Content, answers, and the technical path between them." />
</ScrollReveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => (
              <li key={service.slug} className="border-t border-accent pt-4">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>{service.name}</Link>
                <p className={cx(ui.small, "mt-3 text-muted")}>{service.summary}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Planning product and documentation pages?"
        description="A consultation can look at the actual product site and help center. This example does not report rankings or pipeline results."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
