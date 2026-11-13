import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { RelatedLinks } from "@/components/related-links";
import {
  caseStudyLaterRecommendations,
  caseStudyReportingPeriod,
  caseStudyReportTitle,
} from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

function VisitWebsite({
  study,
  className,
}: {
  study: CaseStudy;
  className?: string;
}) {
  return (
    <a
      href={study.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cx(ui.buttonSecondary, "w-full sm:w-auto", className)}
    >
      Visit Website
      <span className="sr-only">, {study.name} (opens in a new tab)</span>
    </a>
  );
}

export function CaseStudyDetail({ study }: { study: CaseStudy }) {
  return (
    <>
      <header className="border-b border-line bg-background">
        <Container className="py-14 sm:py-16 lg:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Case Studies", href: "/case-studies" },
              { label: study.name },
            ]}
          />
          <div className="max-w-3xl">
            <p className={ui.eyebrow}>Featured website project</p>
            <h1 className={cx(ui.h1, "mt-4 break-words")}>{study.name}</h1>
            <p className={cx(ui.bodyLg, "mt-5 text-muted")}>{study.introduction}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <VisitWebsite study={study} />
            </div>
          </div>
          <Image
            src={study.image.src}
            alt={study.image.alt}
            width={study.image.width}
            height={study.image.height}
            priority
            unoptimized
            className="mt-10 h-auto w-full border border-line"
          />
        </Container>
      </header>

      <section aria-labelledby="overview-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <div className="max-w-3xl">
            <h2 id="overview-heading" className={ui.h2}>
              Project overview
            </h2>
            {study.overview.map((paragraph) => (
              <p key={paragraph} className={cx(ui.body, "mt-4 text-muted")}>
                {paragraph}
              </p>
            ))}
            <h3 className={cx(ui.h3, "mt-8")}>Primary purpose</h3>
            <p className={cx(ui.body, "mt-4 text-muted")}>{study.purpose}</p>
          </div>
        </Container>
      </section>

      <section aria-labelledby="objectives-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <div className="max-w-3xl">
            <h2 id="objectives-heading" className={ui.h2}>
              Project objectives
            </h2>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              These are the aims stated in the {caseStudyReportingPeriod} report. The document does not add a separate problem log beyond what is noted here.
            </p>
            <ul className="mt-6 grid gap-4">
              {study.objectives.map((objective) => (
                <li key={objective} className="border border-line bg-surface p-5 sm:p-6">
                  <p className={ui.body}>{objective}</p>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="work-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <div className="max-w-3xl">
            <h2 id="work-heading" className={ui.h2}>
              Work described in the report
            </h2>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              The report presents the items below as work carried out in {caseStudyReportingPeriod}. They are not future recommendations.
            </p>
          </div>
          <ol className="mt-8 grid gap-4 lg:grid-cols-2">
            {study.work.map((item, index) => (
              <li key={item.title} className="min-w-0 border border-line bg-background p-5 sm:p-6">
                <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                <p className={cx(ui.body, "mt-4 text-muted")}>{item.detail}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="metrics-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <div className="max-w-3xl">
            <h2 id="metrics-heading" className={ui.h2}>
              SEO performance and metrics
            </h2>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              Reporting period: {caseStudyReportingPeriod}. Source: {caseStudyReportTitle}. A figure from this period describes what the report recorded. It is not presented as proof that one change caused the result.
            </p>
          </div>
          {study.metrics.length > 0 ? (
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {study.metrics.map((metric) => (
                <li key={metric.label} className="min-w-0 border border-line bg-surface p-5 sm:p-6">
                  <h3 className={ui.h3}>{metric.label}</h3>
                  <p className="mt-4 font-serif text-4xl font-semibold tracking-tight text-ink">{metric.value}</p>
                  <p className={cx(ui.body, "mt-4 text-muted")}>{metric.definition}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className={cx(ui.body, "mt-8 max-w-3xl text-ink")}>
              No numeric result from this report is published for {study.name}. The cells that would support a growth rate were left blank.
            </p>
          )}
          <div className="mt-8 max-w-3xl">
            <h3 className={ui.h3}>What this report does not establish</h3>
            <ul className="mt-4 grid gap-3">
              {study.withheld.map((item) => (
                <li key={item} className={cx(ui.body, "grid grid-cols-[0.7rem_minmax(0,1fr)] gap-3 text-muted")}>
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section aria-labelledby="findings-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <div className="max-w-3xl">
            <h2 id="findings-heading" className={ui.h2}>
              Key findings
            </h2>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              Completed work and report observations are labeled separately. Observations are not additional results.
            </p>
          </div>
          <ul className="mt-8 grid gap-4">
            {study.findings.map((finding) => (
              <li key={finding.title} className="min-w-0 border border-line bg-background p-5 sm:p-6">
                <p className={ui.eyebrow}>{finding.status}</p>
                <h3 className={cx(ui.h3, "mt-3")}>{finding.title}</h3>
                <p className={cx(ui.body, "mt-4 text-muted")}>{finding.detail}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10 max-w-3xl border-t border-line pt-8">
            <h3 className={ui.h3}>Noted for a later period</h3>
            <p className={cx(ui.body, "mt-4 text-muted")}>
              The same report lists three Q1 2027 initiatives for the four websites together. They are recommendations, not work completed on {study.name} during {caseStudyReportingPeriod}.
            </p>
            <ul className="mt-4 grid gap-3">
              {caseStudyLaterRecommendations.map((item) => (
                <li key={item} className={cx(ui.body, "grid grid-cols-[0.7rem_minmax(0,1fr)] gap-3 text-ink")}>
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-line bg-background">
        <Container className="pt-16 pb-6 lg:pt-20">
          <RelatedLinks title="Related services" links={study.relatedServices} />
          <p className={cx(ui.body, "max-w-3xl text-muted")}>
            <Link href="/case-studies" className={ui.textLink}>
              All featured website projects
            </Link>
          </p>
        </Container>
      </section>

      <section aria-labelledby="next-heading" className="border-t border-line bg-inverse text-on-inverse">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end">
            <div>
              <h2 id="next-heading" className={ui.h2}>
                Talk through a project of your own
              </h2>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                The figures on this page stay inside what the {caseStudyReportingPeriod} report supplied. A conversation about another website starts from that site’s own evidence.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Contact Growth Agency
              </ButtonLink>
              <ButtonLink href="/case-studies" variant="secondary" className="w-full sm:w-auto">
                Back to case studies
              </ButtonLink>
              <VisitWebsite study={study} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
