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

const nodes = [
  { title: "Brand", detail: "The facts that stay the same for every location." },
  { title: "Locations", detail: "A page only where a real place changes the offer." },
  { title: "Services", detail: "What is available, and whether it is shared or local." },
  { title: "Discovery", detail: "How those pages connect for local search." },
] as const;

const related = [
  ["technical-seo", "Location and service templates that avoid thin, repeated city pages."],
  ["on-page-seo", "Location pages with information that is distinct and accurate."],
  ["content-strategy", "A governance plan for what is shared and what is local."],
  ["ai-search-visibility", "Business information consistent enough to be summarized the same way."],
] as const;

export function LocalIndustryPage() {
  const services = related.flatMap(([slug, why]) => {
    const service = getService(slug);
    return service ? [{ service, why }] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Local and multi-location businesses" },
            ]}
          />
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,24rem)] lg:gap-14">
            <div className="min-w-0">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Local and multi-location</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>Build a clearer search presence across every location.</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
                Local search depends on pages that match the business. A single location and a multi-location brand need different structures, and a city name alone is not a page.
              </p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Discuss your locations
                </ButtonLink>
                <ButtonLink href="#engagement" variant="secondary" className="w-full sm:w-auto">
                  See what an engagement includes
                </ButtonLink>
              </div>
            </HeroEntrance>
              <SampleNotice>
                This is a planning overview. It does not name offices, addresses, rankings, or reviews, and it does not describe a client engagement.
              </SampleNotice>
            </div>
            <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <div className="min-w-0 border border-line bg-surface">
              <p className="border-b border-line px-5 py-4 font-serif text-xl font-semibold tracking-tight">Location architecture</p>
              <ol>
                {nodes.map((item) => (
                  <li key={item.title} className="grid grid-cols-[2rem_1fr] gap-3 border-b border-line px-5 py-4 last:border-b-0">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 rounded-full bg-accent" />
                    <div>
                      <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            </HeroEntrance>
          </div>
        </Container>
      </header>

      <section aria-labelledby="matters-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading
            id="matters-heading"
            eyebrow="What has to be findable"
            title="A location page has to change something true."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              ["Location-specific landing pages", "Hours, coverage, services, and contact details belong on a location page when they differ. A swapped city name does not."],
              ["Service-area architecture", "Service areas need a model: which services exist where, and which pages explain that coverage."],
              ["Consistent business information", "The name, category, and contact details should match across the site and the listings the business controls."],
              ["Local service discovery", "People search for a service in a place. The page should make both the service and the place explicit."],
              ["Duplicate or thin location pages", "Repeated pages are hard to maintain and hard to justify. Fewer accurate pages are the better structure."],
              ["Internal linking", "Locations should link to the services they offer, and services should link to the locations that provide them."],
              ["Content governance", "Someone needs a rule for what is written once for the brand and what is written again for a location."],
            ].map(([title, text]) => (
              <article key={title} className="border-t border-line pt-5">
                <h3 className={ui.h3}>{title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{text}</p>
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
          <h2 id="challenges-heading" className={cx(ui.h2, "mt-3")}>The brand is clear. The locations are copies.</h2>
          <p className={cx(ui.body, "mt-5 text-muted")}>
            Multi-location sites often publish a page per city from one template. The service, the proof, and the next step stay identical. Searchers cannot tell which place they have reached, and the business cannot keep the facts current.
          </p>
          <p className={cx(ui.body, "mt-4 text-ink")}>
            Growth Agency plans this work for businesses operating in India, the United States, and the United Kingdom.
          </p>

          </ScrollReveal>
        </Container>
      </section>

      <section id="engagement" aria-labelledby="engagement-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="engagement-heading"
            eyebrow="What an engagement can include"
            title="A location model, then the pages that model allows."
          />
</ScrollReveal>
          <ol className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              ["The model", "Which locations and service areas deserve a page, and which should point to a stronger one."],
              ["The pages", "Templates for shared brand facts and the details that genuinely change by place."],
              ["The links", "Connections between services and locations, plus a rule for keeping business information consistent."],
            ].map(([title, text], index) => (
              <li key={title} className="bg-surface p-5">
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section aria-labelledby="example-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <p className={ui.eyebrow}>Illustrative example</p>
          <h2 id="example-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>A service business with several locations</h2>
          <p className={cx(ui.body, ui.measure, "mt-4 text-muted")}>
            A hypothetical example of location pages for a service business. It is not a client engagement, a testimonial, a ranking, or a reported result.
          </p>
          <Link href="/case-studies/multi-location-service-business" className={cx(ui.textLink, "mt-6")}>
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
            title="Local search foundations, through four practices."
          />
</ScrollReveal>
          <ul className="mt-10">
            {services.map(({ service, why }, index) => (
              <li key={service.slug} className="border-b border-line py-5 first:border-t">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>
                  {service.name}
                </Link>
                <p className={cx(ui.body, "mt-2 max-w-2xl text-muted")}>{why}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Does each location have a clear search presence?"
        description="We'll look at how locations, services, and shared business information are organized. We will not invent places or proof."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
