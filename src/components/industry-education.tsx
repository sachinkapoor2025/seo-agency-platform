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

const catalog = [
  { title: "Institution", detail: "Who teaches, and how the organization describes itself." },
  { title: "Programs", detail: "The qualifications and pathways a learner can choose." },
  { title: "Courses", detail: "The units inside a program, when they need their own page." },
  { title: "Admissions", detail: "How to apply, and what a learner needs before they do." },
  { title: "Resources", detail: "Guides and answers for people still deciding." },
] as const;

const stages = [
  { title: "Exploring", text: "Subject and qualification pages for someone who does not yet know the program name." },
  { title: "Comparing", text: "Program pages that say who the course is for, where it is taught, and how it is structured." },
  { title: "Applying", text: "Admissions, dates, requirements, and the practical questions that appear before an application." },
  { title: "Attending", text: "Campus, location, and study information for people who already have a place, kept distinct from recruitment pages." },
] as const;

const related = [
  ["content-strategy", "Program, admissions, and advice content planned as one system."],
  ["on-page-seo", "Program pages that say who they are for and how to apply."],
  ["technical-seo", "Catalog templates that stay accurate across a large course list."],
  ["answer-engine-optimization", "Answers to the questions applicants actually ask."],
] as const;

export function EducationIndustryPage() {
  const services = related.flatMap(([slug, why]) => {
    const service = getService(slug);
    return service ? [{ service, why }] : [];
  });

  return (
    <>
      <header className="border-b border-line bg-sage">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Education" },
            ]}
          />
          <HeroEntrance {...heroStep("eyebrow")}>
              <p className={ui.eyebrow}>Education</p>
            </HeroEntrance>
          <HeroEntrance {...heroStep("heading")}>
              <h1 className={cx(ui.h1, "mt-4 max-w-4xl")}>Help learners discover the right programs and information.</h1>
            </HeroEntrance>
          <HeroEntrance {...heroStep("description")}>
              <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-ink")}>
            An education site serves people at different points in a decision. Programs, courses, admissions, campuses, and advice pages should be planned together.
          </p>
            </HeroEntrance>
          <HeroEntrance {...heroStep("cta")}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" className="w-full sm:w-auto">
              Discuss your programs
            </ButtonLink>
            <ButtonLink href="#engagement" variant="secondary" className="w-full sm:w-auto">
              See what an engagement includes
            </ButtonLink>
          </div>
            </HeroEntrance>
          <SampleNotice>
            This is a planning overview. It does not describe a client engagement, a ranking, or a learner outcome.
          </SampleNotice>
          <HeroEntrance {...heroStep("visual", "mt-12 min-w-0")}>
          <ol className="grid min-w-0 border border-line bg-surface sm:grid-cols-2 lg:grid-cols-5">
            {catalog.map((item) => (
              <li key={item.title} className="border-b border-line px-5 py-5 last:border-b-0 sm:px-5 lg:border-r lg:border-b-0 lg:last:border-r-0">
                <p className="font-serif text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
          </HeroEntrance>
        </Container>
      </header>

      <section aria-labelledby="matters-heading" className="border-b border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal {...revealStep()}>
          <SectionHeading
            id="matters-heading"
            eyebrow="What has to be findable"
            title="A program page is the center of the catalog."
          />
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <article>
                <h3 className={ui.h3}>Program and course pages</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  A program needs its own page. A course needs one when the unit is searched for on its own and the content is distinct.
                </p>
              </article>
              <article>
                <h3 className={ui.h3}>Subject and qualification discovery</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  Learners often start with a subject or a qualification, then narrow to a program. Those paths should exist in the navigation.
                </p>
              </article>
              <article>
                <h3 className={ui.h3}>Admissions and application information</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  Requirements, dates, and how to apply should be easy to find from the program they belong to.
                </p>
              </article>
            </div>
            <div className="space-y-6 border-t border-line pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <article>
                <h3 className={ui.h3}>Location and campus information</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  A campus or study location gets a page when the place changes where or how someone learns.
                </p>
              </article>
              <article>
                <h3 className={ui.h3}>Frequently asked questions</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  Questions should sit with the program or the admissions step they belong to, and the answers should match the facts the institution publishes.
                </p>
              </article>
              <article>
                <h3 className={ui.h3}>Large catalogs</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>
                  Templates, filters, and archived intakes need rules so old or duplicate program URLs do not crowd out the current offer.
                </p>
              </article>
            </div>
          </div>

          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="stages-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="stages-heading"
            eyebrow="Decision stages"
            title="The same institution, four different information needs."
          />
</ScrollReveal>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stages.map((stage, index) => (
              <li key={stage.title} className="min-w-0">
<ScrollReveal {...revealStep(index)}>
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{stage.title}</h3>
                <p className={cx(ui.body, "mt-3 text-muted")}>{stage.text}</p>
              </ScrollReveal>
</li>
            ))}
          </ol>


        </Container>
      </section>

      <section id="engagement" aria-labelledby="engagement-heading" className="scroll-mt-24 border-b border-line bg-background">
        <Container className={cx(ui.section, "grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16")}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="engagement-heading"
            eyebrow="What an engagement can include"
            title="Catalog structure before more pages."
          />
</ScrollReveal>
          <ul className="divide-y divide-line border-y border-line">
            {[
              "A model for program, course, subject, and admissions templates.",
              "Navigation between qualifications, programs, and campuses.",
              "Rules for filters, intakes, and pages that should no longer be indexed.",
              "Question content placed with the decision it supports.",
              "Internal links from advice pages back to the program they describe.",
            ].map((item, index) => (
              <li key={item} className={cx(ui.body, "py-4 text-ink")}>
<ScrollReveal {...revealStep(index)}>{item}</ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-b border-line bg-surface">
        <Container className={ui.section}>

          <ScrollReveal {...revealStep()}>
<SectionHeading
            id="services-heading"
            eyebrow="Relevant services"
            title="Four practices for a program catalog."
          />
</ScrollReveal>
          <ul className="mt-10 divide-y divide-line border-t border-line">
            {services.map(({ service, why }, index) => (
              <li key={service.slug} className="grid gap-2 py-5 sm:grid-cols-[minmax(0,16rem)_1fr] sm:gap-8">
<ScrollReveal {...revealStep(index)}>
                <Link href={`/services/${service.slug}`} className={cx(ui.h3, "transition-colors duration-150 hover:text-accent")}>
                  {service.name}
                </Link>
                <p className={cx(ui.body, "text-muted")}>{why}</p>
              </ScrollReveal>
</li>
            ))}
          </ul>


        </Container>
      </section>

      <ScrollReveal {...revealStep()}>
      <ConsultationCta
        title="Can learners find the right program information?"
        description="We'll look at how programs, admissions, and supporting pages are organized."
        actionLabel="Book a Strategy Call"
      />
      </ScrollReveal>
    </>
  );
}
