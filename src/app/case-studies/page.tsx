import type { Metadata } from "next";
import { CaseStudyCard } from "@/components/case-study-card";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { caseStudies } from "@/content/case-studies";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative case-study examples showing how a search engagement might be framed. These are not verified client results.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Case studies"
        title="Illustrative examples, not client results."
        lede="These scenarios show how a brief, a strategy, and a measurement plan could be structured. They use hypothetical businesses. They do not name clients, show logos, or report rankings, revenue, or other performance figures."
        notice="Every item in this section is an illustrative sample. It is not a verified engagement."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.slug} study={study} />
          ))}
        </div>
      </Container>
      <ConsultationCta
        title="Want to talk about a real situation?"
        description="A consultation can look at the actual site and markets. It will not reuse these examples as if they were results."
      />
    </>
  );
}
