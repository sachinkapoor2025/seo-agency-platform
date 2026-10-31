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

const shelf = [
  { title: "Markets", detail: "India, the United States, and the United Kingdom in this scenario." },
  { title: "Categories", detail: "The shelves that should carry a real shopping task." },
  { title: "Products", detail: "Templates that state the offer and the buying facts." },
  { title: "Indexation", detail: "Which of those URLs should be eligible to be crawled." },
] as const;

export function CatalogueCaseStudy({ study }: { study: CaseStudy }) {
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
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,22rem)] lg:gap-14">
            <div className="min-w-0">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Illustrative example · {study.industry}</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>{study.title}</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>{study.summary}</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Discuss a real catalog
                </ButtonLink>
                <ButtonLink href="#plan" variant="secondary" className="w-full sm:w-auto">
                  See the sample plan
                </ButtonLink>
              </div>
            </HeroEntrance>
              <SampleNotice>
                This scenario is hypothetical. It is not a client story, a testimonial, or a verified result.
              </SampleNotice>
            </div>
            <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <div className="min-w-0 border border-line bg-surface">
              <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight">
                Catalogue architecture
              </p>
              <ol>
                {shelf.map((item) => (
                  <li key={item.title} className="border-b border-line px-5 py-4 last:border-b-0">
                    <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
            </HeroEntrance>
          </div>
        </Container>
      </header>

      <section aria-labelledby="context-heading" className="border-b border-line bg-surface">
        <Container className={cx(ui.section, "max-w-3xl")}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Hypothetical business context</p>
          <h2 id="context-heading" className={cx(ui.h2, "mt-3")}>One catalog template, several country sites.</h2>
          <div className="mt-6 space-y-4">
            {study.context.map((paragraph) => (
              <p key={paragraph} className={ui.body}>{paragraph}</p>
            ))}
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="challenge-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="challenge-heading" eyebrow="Challenge" title="The template creates more URLs than the catalog needs." />
</ScrollReveal>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {study.challenge.map((item, index) => (
              <li key={item} className="border-t border-line pt-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.body}>{item}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section id="plan" aria-labelledby="strategy-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="strategy-heading" eyebrow="Strategy" title="Decide which pages deserve to be found." />
</ScrollReveal>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {study.strategy.map((item, index) => (
              <li key={item} className="grid gap-3 py-5 sm:grid-cols-[3rem_1fr] sm:gap-6">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <p className={ui.body}>{item}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="implementation-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-2")}>

          <div>
            <ScrollReveal {...revealStep()}>
<SectionHeading id="implementation-heading" eyebrow="Implementation" title="Who would do the work in this scenario." />
</ScrollReveal>
            <ul className="mt-8 space-y-4">
              {study.implementation.map((item, index) => (
                <li key={item} className={cx(ui.body, "border-t border-line pt-4")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={ui.h2}>Measurement plan</h2>
            <div className="mt-6 space-y-4">
              {study.measurement.map((paragraph) => (
                <p key={paragraph} className={cx(ui.body, "text-muted")}>{paragraph}</p>
              ))}
            </div>
          </div>


        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="services-heading" eyebrow="Services in this example" title="Technical SEO and catalog work, used together." />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <li key={service.slug}>
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className="group grid gap-2 py-5 transition-colors duration-150 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
                  <span className="font-serif text-xl font-semibold tracking-tight group-hover:text-accent">{service.name}</span>
                  <span className={cx(ui.body, "text-muted")}>{service.summary}</span>
                </Link>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Planning a real catalog?"
        description="A consultation can look at the actual templates and markets. This example is not a result we can claim."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
