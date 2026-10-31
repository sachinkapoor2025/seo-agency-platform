import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep, revealStep } from "@/lib/motion-steps";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How search planning differs for e-commerce, SaaS, professional services, healthcare, education, and local or multi-location businesses.",
};

const approach = [
  {
    index: "01",
    title: "Start with the pages the business needs",
    text: "A catalog, a product, a firm, a clinic, a course list, and a set of locations do not share a page model.",
  },
  {
    index: "02",
    title: "Match the work to that structure",
    text: "Technical access, page clarity, content planning, and AI-assisted discovery are used only where they fit.",
  },
  {
    index: "03",
    title: "Keep the claims reviewable",
    text: "Planning covers India, the United States, and the United Kingdom, using the site's own pages and facts.",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="grid items-start gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:gap-16 lg:py-20">
          <div className="min-w-0">
            <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Industries</p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-3xl")}>Search strategy follows the business.</h1>
            </HeroEntrance>
            <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>
                The pages that matter change with the business. A store, a software product, a professional firm, a healthcare organization, an education provider, and a multi-location service each need a different information structure.
              </p>
            </HeroEntrance>
            <HeroEntrance {...heroStep("cta", "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center")}>
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss an industry brief
              </ButtonLink>
              <ButtonLink href="#industries" variant="secondary" className="w-full sm:w-auto">
                Explore the industries
              </ButtonLink>
            </HeroEntrance>
          </div>
          <HeroEntrance {...heroStep("visual")}>
          <p className={cx(ui.body, "border-t border-line pt-5 text-ink lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8")}>
            These overviews are planning guides for India, the United States, and the United Kingdom. They describe search and content structure. They do not claim a client, a ranking, or a commercial result.
          </p>
          </HeroEntrance>
        </Container>
      </header>

      <section id="industries" aria-labelledby="industries-heading" className="scroll-mt-24 border-b border-line bg-background">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="industries-heading"
            eyebrow="Six business types"
            title="The same practice. Different pages."
          />
</ScrollReveal>

          <ScrollReveal {...revealStep(0)}>
          <Link
            href="/industries/ecommerce"
            className="mt-12 grid min-w-0 border border-line bg-sage transition-colors duration-150 hover:border-accent lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]"
          >
            <div className="p-6 sm:p-8">
              <p className={ui.eyebrow}>E-commerce</p>
              <h2 className={cx(ui.h2, "mt-3")}>Catalogs are found through structure.</h2>
              <p className={cx(ui.body, "mt-4 max-w-xl text-ink")}>
                Categories, products, filters, and the rules that decide which URLs should be eligible.
              </p>
              <p className={cx(ui.textLink, "mt-6")}>View industry</p>
            </div>
            <ol className="grid grid-cols-2 border-t border-line bg-surface sm:grid-cols-4 lg:grid-cols-1 lg:border-t-0 lg:border-l">
              {["Store", "Categories", "Products", "Search"].map((item) => (
                <li key={item} className="border-b border-line px-5 py-4 font-serif text-lg font-semibold last:border-b-0">{item}</li>
              ))}
            </ol>
          </Link>
          </ScrollReveal>

          <ScrollReveal {...revealStep(1)}>
          <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.75fr)]">
            <Link
              href="/industries/saas-technology"
              className="min-w-0 border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>SaaS and technology</p>
              <h2 className={cx(ui.h2, "mt-3")}>Product pages have to survive an evaluation.</h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Features, integrations, use cases, and documentation compete for the same questions.
              </p>
              <p className="mt-6 text-sm leading-6 text-ink">Product · Features · Integrations · Use cases · Comparison</p>
              <p className={cx(ui.textLink, "mt-6")}>View industry</p>
            </Link>
            <Link
              href="/industries/professional-services"
              className="flex min-w-0 flex-col justify-between border border-line border-t-2 border-t-accent bg-background p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <div>
                <p className={ui.eyebrow}>Professional services</p>
                <h2 className={cx(ui.h3, "mt-3")}>Expertise has to be evaluable.</h2>
                <p className={cx(ui.body, "mt-4 text-muted")}>
                  Service pages, subject coverage, and the evidence a buyer can actually check.
                </p>
              </div>
              <p className={cx(ui.textLink, "mt-6")}>View industry</p>
            </Link>
          </div>
          </ScrollReveal>

          <ScrollReveal {...revealStep(2)}>
          <Link
            href="/industries/healthcare"
            className="mt-4 block min-w-0 border border-line bg-surface transition-colors duration-150 hover:border-accent"
          >
            <div className="border-b border-line px-6 py-6 sm:px-8">
              <p className={ui.eyebrow}>Healthcare</p>
              <h2 className={cx(ui.h2, "mt-3 max-w-3xl")}>Important information has to be findable and accurate.</h2>
            </div>
            <ol className="grid sm:grid-cols-2 lg:grid-cols-4">
              {["Provider", "Services", "Locations", "Patient information"].map((item) => (
                <li key={item} className="border-b border-line px-6 py-4 font-serif text-lg font-semibold last:border-b-0 sm:px-8 lg:border-r lg:border-b-0 lg:last:border-r-0">{item}</li>
              ))}
            </ol>
          </Link>
          </ScrollReveal>

          <ScrollReveal {...revealStep(3)}>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            <Link
              href="/industries/education"
              className="min-w-0 border border-line bg-sage p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>Education</p>
              <h2 className={cx(ui.h2, "mt-3")}>Programs, admissions, and advice are one system.</h2>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {["Institution", "Programs", "Admissions", "Learning resources"].map((item) => (
                  <li key={item} className="py-3 font-serif text-lg font-semibold">{item}</li>
                ))}
              </ol>
              <p className={cx(ui.textLink, "mt-6")}>View industry</p>
            </Link>
            <Link
              href="/industries/local-multi-location"
              className="flex min-w-0 flex-col bg-inverse p-6 text-on-inverse transition-colors duration-150 hover:bg-navy-dark sm:p-8"
            >
              <p className="text-sm font-semibold tracking-[0.14em] text-on-inverse/80 uppercase">Local and multi-location</p>
              <h2 className={cx(ui.h2, "mt-3")}>A place should change the page, or the page should not exist.</h2>
              <p className="mt-4 text-on-inverse/85">Brand information, locations, and services, kept consistent where the facts are shared.</p>
              <p className="mt-6 text-sm font-semibold underline decoration-on-inverse/40 underline-offset-4">View industry</p>
            </Link>
          </div>
          </ScrollReveal>


        </Container>
      </section>

      <section aria-labelledby="approach-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="approach-heading"
            eyebrow="How the work is planned"
            title="Industry context decides which pages the work starts from."
          />
</ScrollReveal>
          <ol className="mt-12 grid gap-8 lg:grid-cols-3">
            {approach.map((item, index) => (
              <li key={item.index} className="min-w-0 border-t border-line pt-5">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{item.index}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{item.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Not sure which industry brief fits?"
        description="We'll look at the business, the pages that carry it, and the search work worth doing first."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
