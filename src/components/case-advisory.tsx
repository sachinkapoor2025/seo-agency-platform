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

const path = [
  { title: "Services", detail: "Pages a buyer can compare." },
  { title: "Questions", detail: "What the firm is qualified to answer in public." },
  { title: "Explanations", detail: "One URL that owns each topic." },
  { title: "Limits", detail: "What stays in a sales conversation." },
] as const;

export function AdvisoryCaseStudy({ study }: { study: CaseStudy }) {
  const services = study.serviceSlugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:py-20">
          <div className="min-w-0">
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
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>{study.title}</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>{study.summary}</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss real expertise pages
              </ButtonLink>
              <ButtonLink href="#plan" variant="secondary" className="w-full sm:w-auto">
                See the sample plan
              </ButtonLink>
            </div>
            </HeroEntrance>
            <SampleNotice>
              This scenario is hypothetical. It is not a client story, an endorsement, or a verified result.
            </SampleNotice>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
          <ol className="min-w-0 border-t border-ink">
            {path.map((item) => (
              <li key={item.title} className="border-b border-line py-5">
                <p className="font-serif text-2xl font-semibold tracking-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="context-heading" className="border-b border-line bg-sage">
        <Container className={cx(ui.section, "max-w-3xl")}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Hypothetical business context</p>
          <h2 id="context-heading" className={cx(ui.h2, "mt-3")}>Essays exist. The service pages do not explain the work.</h2>
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
          <SectionHeading id="challenge-heading" eyebrow="Challenge" title="More publishing will not fix a conflicting explanation." />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {study.challenge.map((item) => (
              <article key={item} className="border-t-2 border-accent pt-4">
                <p className={ui.body}>{item}</p>
              </article>
            ))}
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section id="plan" aria-labelledby="strategy-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="strategy-heading" eyebrow="Strategy" title="A small set of services, and one explanation for each topic." />
</ScrollReveal>
          <ol className="mt-10 max-w-3xl">
            {study.strategy.map((item, index) => (
              <li key={item} className="grid gap-3 border-t border-line py-5 last:border-b sm:grid-cols-[3rem_1fr]">
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
        <Container className={cx(ui.section, "grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]")}>
          <ScrollReveal {...revealStep()}>
          <div>
            <h2 id="implementation-heading" className={ui.h2}>Implementation</h2>
            <ul className="mt-6 space-y-4">
              {study.implementation.map((item) => (
                <li key={item} className={cx(ui.body, "text-ink")}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
            <h2 className={ui.h2}>Measurement plan</h2>
            <div className="mt-6 space-y-4">
              {study.measurement.map((paragraph) => (
                <p key={paragraph} className={cx(ui.body, "text-muted")}>{paragraph}</p>
              ))}
            </div>
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="services-heading" eyebrow="Services in this example" title="Explanation, page clarity, and a consistent public account." />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-y border-line">
            {services.map((service, index) => (
              <li key={service.slug} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>{service.name}</Link>
                <p className={cx(ui.body, "text-muted")}>{service.summary}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Planning explanatory pages for a real firm?"
        description="A consultation can look at the actual service pages and the questions the firm can answer. This example includes no credentials or results."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
