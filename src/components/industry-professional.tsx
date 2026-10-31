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

const path = [
  { title: "Services", detail: "The offers a client can hire, each with its own page." },
  { title: "Expertise", detail: "The subjects the firm can explain in public." },
  { title: "Evidence", detail: "The proof a prospect can check, without invented results." },
  { title: "Decision", detail: "The questions a buyer works through before making contact." },
] as const;

const matters = [
  {
    title: "Service-specific landing pages",
    text: "A firm page is not a substitute for a page about one service a buyer can compare.",
  },
  {
    title: "Expertise and subject coverage",
    text: "Subject pages should reflect work the firm can actually discuss, and stay distinct from the service pages.",
  },
  {
    title: "Trust and credibility signals",
    text: "Credentials, method, and named constraints belong on the page. Unsupported outcomes do not.",
  },
  {
    title: "Location and practice-area pages",
    text: "A location or practice page earns a URL when the place or the specialty changes the offer.",
  },
  {
    title: "Question-led educational content",
    text: "Explanatory pages answer the questions clients already ask, and link back to the service they support.",
  },
  {
    title: "Complex decision journeys",
    text: "Professional work is chosen slowly. The site should support research, comparison, and a clear next step.",
  },
  {
    title: "Specialist services, explained plainly",
    text: "A specialist offer needs ordinary language for the problem, the way the firm works, and who it is for.",
  },
] as const;

const related = [
  ["content-strategy", "A map of services, subjects, and the explanatory pages that connect them."],
  ["on-page-seo", "Service pages a buyer can evaluate without reading the whole site."],
  ["technical-seo", "A structure that keeps those service and subject pages reachable."],
  ["answer-engine-optimization", "Clear answers to the questions the firm is already asked."],
  ["generative-engine-optimization", "A consistent public account of the firm and its expertise."],
] as const;

export function ProfessionalIndustryPage() {
  const services = related.flatMap(([slug, why]) => {
    const service = getService(slug);
    return service ? [{ service, why }] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1fr)_minmax(16rem,22rem)] lg:py-20">
          <div className="min-w-0">
            <Breadcrumbs
              items={[
                { label: "Home", href: "/" },
                { label: "Industries", href: "/industries" },
                { label: "Professional services" },
              ]}
            />
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Professional services</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>Make your expertise easier to find and evaluate.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
              Clients choose a firm on fit and credibility. Search pages have to show the service, the subject, and the evidence a buyer can check.
            </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss your expertise
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
          <ol className="min-w-0 border-t border-ink">
            {path.map((item, index) => (
              <li key={item.title} className="border-b border-line py-5">
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-2 font-serif text-2xl font-semibold tracking-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="matters-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading
            id="matters-heading"
            eyebrow="What has to be findable"
            title="A buyer is comparing a service, not collecting essays."
          />
          <div className="mt-12 grid gap-x-10 gap-y-8 md:grid-cols-2">
            {matters.map((item) => (
              <article key={item.title} className="min-w-0">
                <h3 className={cx(ui.h3, "border-l-2 border-accent pl-4")}>{item.title}</h3>
                <p className={cx(ui.body, "mt-3 pl-4 text-muted")}>{item.text}</p>
              </article>
            ))}
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="challenges-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "max-w-3xl")}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Common challenges</p>
          <h2 id="challenges-heading" className={cx(ui.h2, "mt-3")}>The site explains the firm, and skips the decision.</h2>
          <div className="mt-8 space-y-6">
            <p className={ui.body}>
              Long thought pieces sit beside a single services list. A prospect still cannot tell which offer applies, which office or practice area is relevant, or what the firm will and will not take on.
            </p>
            <p className={cx(ui.body, "text-muted")}>
              Trust language becomes a problem when it outruns the evidence. Credentials, method, and constraints are useful. Rankings, win rates, and unnamed client results are not a substitute.
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
            title="The scope follows the services the firm is willing to explain."
          />
</ScrollReveal>
          <ol className="mt-10 grid gap-8 lg:grid-cols-3">
            {[
              ["Service pages", "A page for each offer, with the problem, the audience, and the way the work proceeds."],
              ["Subject coverage", "Explanatory pages that answer real questions and point back to the relevant service."],
              ["Evidence and structure", "Credibility placed where it can be checked, and a site structure that keeps those pages reachable."],
            ].map(([title, text], index) => (
              <li key={title}>
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{title}</h3>
                <p className={cx(ui.body, "mt-3 text-ink")}>{text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="example-heading" className="border-b border-line bg-inverse text-on-inverse">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">Illustrative example</p>
          <h2 id="example-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>Explanatory content for an advisory firm</h2>
          <p className={cx(ui.body, ui.measure, "mt-4 text-on-inverse/80")}>
            A hypothetical example of how an advisory firm can explain its work. It is not a client engagement, a testimonial, or a reported result.
          </p>
          <Link href="/case-studies/advisory-explanatory-content" className="mt-6 inline-flex font-semibold text-on-inverse underline decoration-on-inverse/40 underline-offset-4">
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
            title="Expertise becomes findable through five practices."
          />
</ScrollReveal>
          <ul className="mt-10">
            {services.map(({ service, why }, index) => (
              <li key={service.slug} className="border-t border-line py-5 last:border-b">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "mt-2 inline-block transition-colors duration-150 hover:text-accent")}>
                  {service.name}
                </Link>
                <p className={cx(ui.body, "mt-2 text-muted")}>{why}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Is your expertise easy to evaluate?"
        description="We'll look at the service pages, the subjects you can explain, and the evidence a buyer can check."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
