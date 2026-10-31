import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { principles, processSteps } from "@/content/site";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "About",
  description:
    "Growth Agency is an international SEO and AI search visibility practice focused on evidence, technical quality, sustainable work, and transparent measurement.",
};

const disciplines = [
  { title: "Classic search", detail: "Technical access and pages with a defined purpose." },
  { title: "Answer engines", detail: "Explanations clear enough to answer a real question." },
  { title: "Generative search", detail: "A consistent account of the business and its offer." },
  { title: "AI-assisted discovery", detail: "The same foundations, read by newer interfaces." },
] as const;

const markets = ["India", "United States", "United Kingdom"] as const;

export default function AboutPage() {
  const [evidence, sustainable, technical, measurement] = principles;

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-14 lg:py-20">
          <div className="min-w-0">
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>About</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>An international search practice with a narrow promise.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
                Growth Agency helps organizations improve how they are found in classic search and in AI-mediated answers. Traditional SEO, answer engine optimization, and generative engine optimization are one practice. The priority markets are India, the United States, and the United Kingdom.
              </p>
              <p className={cx(ui.body, ui.measure, "mt-4 text-ink")}>
                The promise is a clear plan and careful execution, not a guaranteed position.
              </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "mt-6 flex flex-col gap-3 sm:flex-row")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a consultation
              </ButtonLink>
              <ButtonLink href="#practice" variant="secondary" className="w-full sm:w-auto">
                Read the practice
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual", "min-w-0")}>
          <div className="min-w-0 border border-line">
            <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight">
              One search practice
            </p>
            <ul className="relative">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] z-10 w-px bg-accent/40"
              />
              {disciplines.map((item, index) => (
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
        </Container>
      </header>

      <section id="practice" aria-labelledby="mission-heading" className="scroll-mt-24 border-b border-line bg-surface">
        <Container className={cx(ui.section, "max-w-3xl")}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Mission</p>
          <h2 id="mission-heading" className={cx(ui.h2, "mt-3")}>
            Make search visibility a managed part of the website.
          </h2>
          <div className="mt-6 space-y-4">
            <p className={ui.body}>
              That means technical access, pages with a defined purpose, and content consistent enough to be used by people and by retrieval systems.
            </p>
            <p className={cx(ui.body, "text-muted")}>
              The practice combines technical SEO, on-page SEO, content strategy, e-commerce SEO, answer engine optimization, generative engine optimization, and AI search visibility. Those labels describe the work. They are one body of work, not separate campaigns that ignore each other.
            </p>
          </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="approach-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading
              id="approach-heading"
              eyebrow="Approach"
              title="Start with the goal and the site that already exists."
              description="Recommend the smallest set of changes that removes a real obstacle or answers a real question. Write the recommendation so the people who own the website can review it."
            />
          </ScrollReveal>
          <ol className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              ["Traditional SEO", "Technical access, on-page clarity, and content with a job. Classic search still depends on those foundations."],
              ["Answer engine optimization", "Pages that state a useful answer where a person, and a retrieval system, can find it."],
              ["Generative engine optimization", "One consistent account of the business, the offer, and the limits of that account."],
              ["AI search visibility", "The same information, checked for whether newer discovery experiences can interpret it."],
            ].map(([title, text], index) => (
              <li key={title}>
                <ScrollReveal {...revealStep(index, "h-full border-t border-line pt-5")}>
                  <h3 className={ui.h3}>{title}</h3>
                  <p className={cx(ui.body, "mt-3 text-muted")}>{text}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
          <ScrollReveal {...revealStep(1)}>
            <p className={cx(ui.body, ui.measure, "mt-10 text-ink")}>
              International work checks language, regulation, offer, and search behavior before a page is reused from one market in another.
            </p>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="principles-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading id="principles-heading" eyebrow="Principles" title="Four constraints on the work." />
          </ScrollReveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)]">
            <ScrollReveal {...revealStep(0, "h-full")}>
            <article className="h-full bg-sage p-6 sm:p-8">
              <p className={ui.eyebrow}>01</p>
              <h3 className={cx(ui.h2, "mt-3")}>{evidence.title}</h3>
              <p className={cx(ui.body, "mt-4 max-w-xl text-ink")}>{evidence.description}</p>
            </article>
            </ScrollReveal>
            <ScrollReveal {...revealStep(1, "h-full")}>
            <article className="flex h-full flex-col justify-between border border-line border-t-2 border-t-accent bg-surface p-6 sm:p-8">
              <div>
                <p className={ui.eyebrow}>02</p>
                <h3 className={cx(ui.h3, "mt-3")}>{sustainable.title}</h3>
                <p className={cx(ui.body, "mt-4 text-muted")}>{sustainable.description}</p>
              </div>
            </article>
            </ScrollReveal>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <ScrollReveal {...revealStep(2, "h-full")}>
            <article className="h-full border border-line p-6 sm:p-8">
              <p className={ui.eyebrow}>03</p>
              <h3 className={cx(ui.h3, "mt-3")}>{technical.title}</h3>
              <p className={cx(ui.body, "mt-4 text-muted")}>{technical.description}</p>
            </article>
            </ScrollReveal>
            <ScrollReveal {...revealStep(3, "h-full")}>
            <article className="h-full bg-inverse p-6 text-on-inverse sm:p-8">
              <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">04</p>
              <h3 className={cx(ui.h3, "mt-3")}>{measurement.title}</h3>
              <p className="mt-4 text-on-inverse/85">{measurement.description}</p>
            </article>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading
              id="process-heading"
              eyebrow="Process"
              title="Four steps, then the cycle repeats."
              description="Nothing in the process assumes a permanent outcome."
            />
          </ScrollReveal>
          <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <ScrollReveal {...revealStep(index, "h-full border-t-2 border-accent pt-5")}>
                  <p className={ui.eyebrow}>{step.step}</p>
                  <h3 className={cx(ui.h3, "mt-3")}>{step.title}</h3>
                  <p className={cx(ui.body, "mt-3 text-muted")}>{step.description}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="markets-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16")}>
          <ScrollReveal {...revealStep()}>
            <SectionHeading
              id="markets-heading"
              eyebrow="Priority markets"
              title="India, the United States, and the United Kingdom."
              description="These are the markets the practice plans for. This page does not assign Growth Agency an office in any of them."
            />
          </ScrollReveal>
          <ScrollReveal {...revealStep(1, "min-w-0")}>
          <ol className="grid min-w-0 border border-line sm:grid-cols-3">
            {markets.map((market) => (
              <li key={market} className="border-b border-line px-5 py-6 font-serif text-2xl font-semibold tracking-tight last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0">
                {market}
              </li>
            ))}
          </ol>
          </ScrollReveal>
        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Start with a consultation"
        description="Share the site, the markets, and the question you are trying to answer. The form on the contact page is a demonstration and does not send a message."
        actionLabel="Book a Consultation"
      />
      </ScrollReveal>
    </>
  );
}
