import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/content/services";
import type { Service } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Search foundations, content and commerce, and AI search discovery. Seven services planned as one connected practice for international visibility.",
};

const areas = [
  {
    href: "#search-foundations",
    index: "01",
    title: "Search foundations",
    detail: "Technical SEO and on-page relevance.",
  },
  {
    href: "#content-commerce",
    index: "02",
    title: "Content and commerce",
    detail: "Content strategy and catalog structure.",
  },
  {
    href: "#ai-search-discovery",
    index: "03",
    title: "AI search discovery",
    detail: "Answers, generative results, and combined visibility.",
  },
] as const;

const sequence = [
  {
    index: "01",
    title: "Technical foundations",
    text: "Crawl access, templates, and site structure decide which pages can be reached.",
  },
  {
    index: "02",
    title: "Relevant content",
    text: "Pages answer a defined question for a real audience, including the catalog pages that help someone choose.",
  },
  {
    index: "03",
    title: "Search visibility",
    text: "Classic search reads a site that is available and clear about what each page is for.",
  },
  {
    index: "04",
    title: "Answer and generative discovery",
    text: "Answer engines and generative experiences draw on that same clear, consistent source.",
  },
  {
    index: "05",
    title: "Measurement and improvement",
    text: "What is watched is explained in plain language, and the next cycle returns to the pages that need work.",
  },
] as const;

function findService(slug: string) {
  const service = services.find((item) => item.slug === slug);
  if (!service) {
    throw new Error(`Missing service: ${slug}`);
  }
  return service;
}

const foundations = [findService("technical-seo"), findService("on-page-seo")];
const commerce = [findService("content-strategy"), findService("ecommerce-seo")];
const discovery = [
  findService("answer-engine-optimization"),
  findService("generative-engine-optimization"),
  findService("ai-search-visibility"),
];

const kickers: Record<string, string> = {
  "technical-seo": "Technical",
  "on-page-seo": "Pages",
  "content-strategy": "Editorial",
  "ecommerce-seo": "Catalogs",
  "answer-engine-optimization": "AEO",
  "generative-engine-optimization": "GEO",
  "ai-search-visibility": "Combined",
};

function CapabilityIndex() {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute top-5 right-0 bottom-0 left-3 hidden border border-line bg-sage lg:block"
      />
      <div className="relative border border-line bg-surface">
        <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight sm:px-6">
          Three areas, one practice
        </p>
        <ol>
          {areas.map((area) => (
            <li key={area.href} className="border-b border-line last:border-b-0">
              <Link
                href={area.href}
                className="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 px-5 py-4 transition-colors duration-150 hover:bg-sage/50 sm:px-6"
              >
                <span className="font-serif text-sm font-semibold text-accent">{area.index}</span>
                <span className="min-w-0">
                  <span className="block font-serif text-lg font-semibold tracking-tight">
                    {area.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-muted">{area.detail}</span>
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function LearnMore({ inverse = false }: { inverse?: boolean }) {
  return (
    <p
      className={cx(
        "mt-5 text-sm font-semibold",
        inverse
          ? "text-on-inverse underline decoration-on-inverse/40 underline-offset-4"
          : ui.textLink,
      )}
    >
      Learn more
    </p>
  );
}

function ServiceCopy({
  service,
  inverse = false,
  index,
}: {
  service: Service;
  inverse?: boolean;
  index?: string;
}) {
  return (
    <div className="min-w-0">
      <div className="flex items-baseline justify-between gap-4">
        <p className={cx(ui.eyebrow, inverse && "text-on-inverse/80")}>{kickers[service.slug]}</p>
        {index ? (
          <span className={cx("font-serif text-sm font-semibold", inverse ? "text-on-inverse/80" : "text-accent")}>
            {index}
          </span>
        ) : null}
      </div>
      <h4 className={cx(ui.h3, "mt-3")}>{service.name}</h4>
      <p className={cx(ui.body, "mt-3 max-w-2xl", inverse ? "text-on-inverse/85" : "text-muted")}>
        {service.summary}
      </p>
      <LearnMore inverse={inverse} />
    </div>
  );
}

export default function ServicesPage() {
  const [contentStrategy, ecommerce] = commerce;
  const [answerEngine, generative, aiVisibility] = discovery;

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:py-20">
          <div className="flex min-w-0 flex-col gap-6">
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Our services</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "max-w-3xl")}>
                Search growth, built on the right foundations.
              </h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "text-muted")}>
                From technical foundations and content strategy to AI-driven discovery, we
                connect the capabilities businesses need to become more visible and attract
                the right audience.
              </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "flex flex-col gap-3 sm:flex-row sm:items-center")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss Your Growth Goals
              </ButtonLink>
              <ButtonLink href="#capabilities" variant="secondary" className="w-full sm:w-auto">
                Explore Our Capabilities
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
            <CapabilityIndex />
          </HeroEntrance>
        </Container>
      </header>

      <section id="capabilities" aria-labelledby="capabilities-heading" className="scroll-mt-24">
        <Container className={cx(ui.section, "pb-0")}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading
              id="capabilities-heading"
              eyebrow="Capability areas"
              title="Seven services, in three areas."
              description="Each service still opens its existing explanation. The grouping shows how the work fits together."
            />
          </ScrollReveal>
        </Container>

        <div id="search-foundations" className="scroll-mt-24 border-t border-line bg-sage">
          <ScrollReveal {...revealStep()}>
          <Container className="grid gap-10 py-14 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-16 lg:py-16">
            <div className="min-w-0">
              <p className={ui.eyebrow}>Search foundations</p>
              <h3 className={cx(ui.h2, "mt-3")}>Technical quality and page relevance.</h3>
              <p className={cx(ui.body, "mt-4 max-w-xl text-ink")}>
                Technical quality, site structure, indexing, and page experience decide
                whether important pages can be reached. On-page relevance then aligns each
                page with the question it is meant to answer.
              </p>
            </div>
            <ol className="min-w-0 divide-y divide-line border-y border-line">
              {foundations.map((service, index) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="grid gap-4 py-6 transition-colors duration-150 hover:text-accent sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6"
                  >
                    <span className="font-serif text-sm font-semibold text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <ServiceCopy service={service} />
                  </Link>
                </li>
              ))}
            </ol>
          </Container>
          </ScrollReveal>
        </div>

        <div id="content-commerce" className="scroll-mt-24 border-t border-line bg-background">
          <ScrollReveal {...revealStep()}>
          <Container className="py-14 lg:py-16">
            <div className="max-w-2xl">
              <p className={ui.eyebrow}>Content and commerce</p>
              <h3 className={cx(ui.h2, "mt-3")}>Useful pages and a catalog people can follow.</h3>
              <p className={cx(ui.body, "mt-4 text-ink")}>
                Useful content follows a real search intent and a defined audience. In a
                catalog, product discovery and category architecture do the same work for
                the offers a business needs to be found.
              </p>
            </div>
            <div className="mt-10 grid items-stretch gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.75fr)]">
              <Link
                href={`/services/${contentStrategy.slug}`}
                className="flex min-w-0 flex-col justify-between border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
              >
                <ServiceCopy service={contentStrategy} index="03" />
              </Link>
              <Link
                href={`/services/${ecommerce.slug}`}
                className="flex min-w-0 flex-col justify-between border border-line border-t-2 border-t-accent bg-sage p-6 transition-colors duration-150 hover:border-accent sm:p-8"
              >
                <ServiceCopy service={ecommerce} index="04" />
              </Link>
            </div>
          </Container>
          </ScrollReveal>
        </div>

        <div id="ai-search-discovery" className="scroll-mt-24 border-t border-line bg-surface">
          <ScrollReveal {...revealStep()}>
          <Container className="py-14 lg:py-16">
            <div className="max-w-2xl">
              <p className={ui.eyebrow}>AI search discovery</p>
              <h3 className={cx(ui.h2, "mt-3")}>A clear source for answer and generative experiences.</h3>
              <p className={cx(ui.body, "mt-4 text-ink")}>
                A direct page can serve an answer engine. A consistent set of pages can
                serve a generative explanation. AI search visibility is the plan that holds
                technical access and that editorial work together.
              </p>
            </div>
            <ol className="mt-10 border-t border-line">
              {[answerEngine, generative].map((service, index) => (
                <li key={service.slug} className="border-b border-line">
                  <Link
                    href={`/services/${service.slug}`}
                    className="grid gap-4 py-6 transition-colors duration-150 hover:text-accent sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:items-start sm:gap-6"
                  >
                    <span className="font-serif text-sm font-semibold text-accent">
                      {String(index + 5).padStart(2, "0")}
                    </span>
                    <ServiceCopy service={service} />
                  </Link>
                </li>
              ))}
            </ol>
            <Link
              href={`/services/${aiVisibility.slug}`}
              className="mt-4 block min-w-0 bg-inverse p-6 text-on-inverse transition-colors duration-150 hover:bg-navy-dark sm:p-8"
            >
              <div className="grid min-w-0 gap-4 sm:grid-cols-[3.5rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-serif text-sm font-semibold text-on-inverse/80">07</span>
                <ServiceCopy service={aiVisibility} inverse />
              </div>
            </Link>
          </Container>
          </ScrollReveal>
        </div>
      </section>

      <section aria-labelledby="together-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading
              id="together-heading"
              eyebrow="How the work connects"
              title="One sequence, not seven isolated tasks."
              description="Each stage depends on the one before it. Measurement sends the next cycle back to the foundations. This is a way to plan the work, not a forecast of rankings, traffic, or revenue."
            />
          </ScrollReveal>
          <ol className="mt-12 grid gap-y-8 lg:grid-cols-5 lg:gap-x-8">
            {sequence.map((step, index) => (
              <li key={step.title} className="relative min-w-0">
                <ScrollReveal {...revealStep(index, "h-full border-t border-line pt-5 lg:pr-6")}>
                <p className={ui.eyebrow}>{step.index}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{step.title}</h3>
                <p className={cx(ui.small, "mt-3 text-muted")}>{step.text}</p>
                {index < sequence.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="mt-4 block text-sm font-semibold text-accent lg:absolute lg:top-5 lg:right-0 lg:mt-0"
                  >
                    →
                  </span>
                ) : null}
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Not sure where your search strategy should start?"
        description="Let's understand your business, your current visibility and the opportunities worth prioritizing."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
