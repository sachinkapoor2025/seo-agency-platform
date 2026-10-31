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

const nodes = [
  { title: "Brand", detail: "The service explanation that stays the same." },
  { title: "Locations", detail: "A page only where coverage or the offer changes." },
  { title: "Services", detail: "The offer, linked to the places that provide it." },
  { title: "Discovery", detail: "Local search that depends on those facts matching." },
] as const;

export function LocationsCaseStudy({ study }: { study: CaseStudy }) {
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
                  Discuss real locations
                </ButtonLink>
                <ButtonLink href="#plan" variant="secondary" className="w-full sm:w-auto">
                  See the sample plan
                </ButtonLink>
              </div>
            </HeroEntrance>
              <SampleNotice>
                This scenario is hypothetical. It names no offices, addresses, rankings, or reviews, and it is not a client result.
              </SampleNotice>
            </div>
            <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <div className="min-w-0 border border-line">
              <p className="border-b border-line bg-inverse px-5 py-4 font-serif text-xl font-semibold tracking-tight text-on-inverse">
                Location architecture
              </p>
              <ol className="relative bg-surface">
                <span aria-hidden="true" className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] z-10 w-px bg-accent/40" />
                {nodes.map((item, index) => (
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
          <h2 id="context-heading" className={cx(ui.h2, "mt-3")}>A city page is not justified by a place name.</h2>
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
<SectionHeading id="challenge-heading" eyebrow="Challenge" title="The locations are copies. The service is thin." />
</ScrollReveal>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {study.challenge.map((item, index) => (
              <li key={item} className={cx(ui.body, "py-4")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section id="plan" aria-labelledby="strategy-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]")}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="strategy-heading" eyebrow="Strategy" title="Keep a location page only when the place changes the offer." />
</ScrollReveal>
          <ol className="divide-y divide-line border-y border-line">
            {study.strategy.map((item, index) => (
              <li key={item} className={cx(ui.body, "py-4")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="implementation-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 id="implementation-heading" className={ui.h2}>Implementation</h2>
              <ul className="mt-6 space-y-4">
                {study.implementation.map((item) => (
                  <li key={item} className={cx(ui.body, "border-l-2 border-line pl-4")}>{item}</li>
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
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading id="services-heading" eyebrow="Services in this example" title="Page clarity, technical templates, and consistent information." />
</ScrollReveal>
          <ul className="mt-10">
            {services.map((service, index) => (
              <li key={service.slug} className="border-b border-line py-5 first:border-t">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>{service.name}</Link>
                <p className={cx(ui.body, "mt-2 max-w-2xl text-muted")}>{service.summary}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Planning location pages for a real business?"
        description="A consultation can look at which places actually change the offer. This example invents neither locations nor proof."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
