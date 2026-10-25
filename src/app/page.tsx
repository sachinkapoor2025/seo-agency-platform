import { ButtonLink } from "@/components/button-link";
import { CaseStudyCard } from "@/components/case-study-card";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { IndustryCard } from "@/components/industry-card";
import { InsightCard } from "@/components/insight-card";
import { ProcessSteps } from "@/components/process-steps";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { articles } from "@/content/insights";
import { principles } from "@/content/site";
import { services } from "@/content/services";

const focusAreas = [
  "Technical quality of the website",
  "Pages that answer a defined question",
  "A consistent source for priority topics",
  "Visibility across classic and AI-mediated search",
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper">
        <Container className="grid gap-10 py-10 sm:py-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(17rem,0.85fr)] lg:items-center lg:gap-14 lg:py-14">
          <div className="flex max-w-2xl flex-col gap-5">
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
                International SEO and AI search visibility
              </p>
              <h1 className="max-w-full text-balance font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Grow your visibility across search and AI.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted">
              Growth Agency helps businesses improve technical SEO, content
              performance, and visibility across AI-driven search experiences. The
              practice supports teams in India, the United States, and the United
              Kingdom.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore services
              </ButtonLink>
            </div>
          </div>
          <aside className="border border-line bg-white p-7 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
              Where the work starts
            </p>
            <ul className="mt-5 space-y-4">
              {focusAreas.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-ink">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 border-t border-line pt-4 text-sm leading-6 text-muted">
              Priority markets: India, the United States, and the United Kingdom.
            </p>
          </aside>
        </Container>
      </section>

      <section aria-labelledby="approach-heading" className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="approach-heading"
            eyebrow="Approach"
            title="Credibility comes from the way the work is done."
            description="There are no client logos or performance claims on this site. These are the standards the practice is built around."
          />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle.title} className="border border-line bg-paper p-6">
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.description}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-t border-line bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="services-heading"
            eyebrow="Services"
            title="Core services"
            description="Traditional SEO, answer engine optimization, generative engine optimization, and AI search visibility are planned as one system."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="industries-heading" className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries"
            title="Search needs change with the business model."
            description="The same checklist does not fit a catalog, a software product, a clinic, and a multi-location service. These overviews describe the difference. They do not claim client work."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <IndustryCard key={industry.slug} industry={industry} />
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="examples-heading" className="border-t border-line bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="examples-heading"
            eyebrow="Illustrative examples"
            title="Case-study previews"
            description="Every example is hypothetical. None of them report a verified engagement, a ranking, or a commercial result."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/case-studies" variant="secondary">
              View all examples
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="bg-white">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="process-heading"
            eyebrow="Process"
            title="Four steps, then another cycle."
            description="Discover, strategize, execute, and improve. Each step produces a decision the next one can use."
          />
          <ProcessSteps />
        </Container>
      </section>

      <section aria-labelledby="insights-heading" className="border-t border-line bg-paper">
        <Container className="py-16 sm:py-20">
          <SectionHeading
            id="insights-heading"
            eyebrow="Sample insights"
            title="Notes on SEO, AEO, GEO, and measurement."
            description="These articles are original sample writing for this POC. They are not client research and they do not present fabricated findings."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <InsightCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="mt-8">
            <ButtonLink href="/insights" variant="secondary">
              Read the sample articles
            </ButtonLink>
          </div>
        </Container>
      </section>

      <ConsultationCta />
    </>
  );
}
