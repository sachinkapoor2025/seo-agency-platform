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

const architecture = [
  { title: "Provider information", detail: "Who the organization is, and which pages identify a facility or practitioner." },
  { title: "Healthcare services", detail: "What is offered, in language the organization can stand behind." },
  { title: "Locations", detail: "A place or department, when that place changes the information." },
  { title: "Patient information", detail: "Practical pages for visits and questions the organization already answers." },
] as const;

const matters = [
  {
    title: "Provider and facility information",
    text: "Names, roles, and facilities should be consistent across the pages that mention them.",
  },
  {
    title: "Service and treatment information",
    text: "A service page should describe what is offered and who it is for. It should stay within what qualified reviewers can support.",
  },
  {
    title: "Location and department pages",
    text: "A location or department earns its own page when the address, the service, or the audience actually changes.",
  },
  {
    title: "Clear informational content",
    text: "Pages should be specific, dated when facts change, and written so a reader can tell what is general information.",
  },
  {
    title: "Search intent and information needs",
    text: "People look for a provider, a service, a location, or a practical question. Those are different pages.",
  },
  {
    title: "Accessibility and page organization",
    text: "Important information should be reachable in the templates, with headings and paths a person can follow.",
  },
  {
    title: "Consistent business information",
    text: "Names, addresses, hours, and contact details should match wherever the organization publishes them.",
  },
] as const;

const related = [
  ["technical-seo", "Templates and paths for services, locations, and patient information."],
  ["on-page-seo", "Pages that state what a service or location is, within what the organization can support."],
  ["content-strategy", "A plan for informational pages that can be reviewed and kept current."],
  ["answer-engine-optimization", "Clear answers to common questions, limited to what the organization is qualified to say."],
] as const;

export function HealthcareIndustryPage() {
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
              { label: "Healthcare" },
            ]}
          />
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,22rem)] lg:gap-14">
            <div className="min-w-0">
              <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Healthcare</p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4")}>Make important healthcare information easier to discover and understand.</h1>
            </HeroEntrance>
              <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
                Healthcare search is an information problem. People need to find a provider, a service, a location, or a practical page, and to understand what that page is allowed to say.
              </p>
            </HeroEntrance>
              <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Discuss your information structure
                </ButtonLink>
                <ButtonLink href="#engagement" variant="secondary" className="w-full sm:w-auto">
                  See what an engagement includes
                </ButtonLink>
              </div>
            </HeroEntrance>
              <SampleNotice>
                This is a planning overview for search and information structure. Growth Agency does not provide medical advice, does not claim clinical expertise, and this page does not describe a healthcare client or a patient outcome.
              </SampleNotice>
            </div>
            <HeroEntrance {...heroStep("visual", "min-w-0")}>
              <div className="min-w-0 border border-line bg-surface">
              <p className="border-b border-line bg-sage px-5 py-4 font-serif text-xl font-semibold tracking-tight">
                Information structure
              </p>
              <ol className="relative">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-4 bottom-4 left-[1.35rem] z-10 w-px bg-ink/20"
                />
                {architecture.map((item) => (
                  <li key={item.title} className="border-b border-line py-4 pr-5 pl-10 last:border-b-0">
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

      <section aria-labelledby="matters-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="matters-heading"
            eyebrow="What has to be findable"
            title="Accuracy comes before volume."
          />
</ScrollReveal>
          <ol className="mt-12 divide-y divide-line border-y border-line">
            {matters.map((item, index) => (
              <li key={item.title} className="grid gap-3 py-6 md:grid-cols-[minmax(0,18rem)_1fr] md:gap-10">
<ScrollReveal {...revealStep(index)}>
                <h3 className={ui.h3}>{item.title}</h3>
                <p className={cx(ui.body, "text-muted")}>{item.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>
          <p className={cx(ui.body, ui.measure, "mt-8 text-ink")}>
            Search work can organize information. It does not replace clinical review, and regulatory requirements differ by country. Those reviews belong with qualified people at the organization.
          </p>


        </Container>
      </section>

      <section aria-labelledby="challenges-heading" className="border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-8 lg:grid-cols-3")}>
          <ScrollReveal {...revealStep()}>
          <div className="lg:col-span-3">
            <p className={ui.eyebrow}>Common challenges</p>
            <h2 id="challenges-heading" className={cx(ui.h2, "mt-3 max-w-3xl")}>The same facts appear in more than one template.</h2>
          </div>
          {[
            ["Scattered services", "Treatments, departments, and locations describe the same offer in different words."],
            ["Anxious queries", "A search can be urgent. The page still has to stay within what the organization can accurately say."],
            ["Unstable details", "Hours, addresses, and contact paths drift between the website and other listings."],
          ].map(([title, text]) => (
            <article key={title} className="border-t border-line pt-5">
              <h3 className={ui.h3}>{title}</h3>
              <p className={cx(ui.body, "mt-3 text-muted")}>{text}</p>
            </article>
          ))}

          </ScrollReveal>
        </Container>
      </section>

      <section id="engagement" aria-labelledby="engagement-heading" className="scroll-mt-24 border-b border-line bg-sage">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading
            id="engagement-heading"
            eyebrow="What an engagement can include"
            title="The work organizes information. It does not write clinical advice."
          />
          <ul className={cx(ui.body, "mt-8 max-w-3xl space-y-4 text-ink")}>
            <li>A map of provider, service, location, and patient-information templates.</li>
            <li>Page structure for services and departments, ready for review by the organization.</li>
            <li>Guidance on headings, internal links, and which pages should exist.</li>
            <li>A check that names, locations, and contact details are used consistently.</li>
            <li>Question-led pages limited to information the organization can review and stand behind.</li>
          </ul>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="services-heading"
            eyebrow="Relevant services"
            title="Four practices, all inside information structure."
          />
</ScrollReveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2">
            {services.map(({ service, why }, index) => (
              <li key={service.slug} className="bg-background p-5">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>
                  {service.name}
                </Link>
                <p className={cx(ui.body, "mt-3 text-muted")}>{why}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Is important information easy to find and understand?"
        description="We'll look at how provider, service, and location information is organized. The conversation is about search structure, not medical advice."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
