import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { RelatedLinks } from "@/components/related-links";
import { TextSection } from "@/components/text-section";
import { caseStudies } from "@/content/case-studies";
import { getCaseStudy, servicesForCaseStudy } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Example not found" };
  return {
    title: study.title,
    description: study.summary,
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const services = servicesForCaseStudy(study);

  return (
    <>
      <PageIntro
        eyebrow="Illustrative example"
        title={study.title}
        lede={study.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: study.title },
        ]}
        notice="This scenario is hypothetical. It is not a client story, and it includes no performance results."
      />
      <Container className="py-4">
        <TextSection title="Hypothetical business context" paragraphs={study.context} />
        <TextSection title="Challenge" items={study.challenge} />
        <TextSection title="Strategy" items={study.strategy} />
        <TextSection title="Implementation" items={study.implementation} />
        <TextSection title="Measurement plan" paragraphs={study.measurement} />
        <RelatedLinks
          title="Services used in this example"
          links={services.map((service) => ({
            href: `/services/${service.slug}`,
            label: service.name,
            description: service.summary,
          }))}
        />
      </Container>
      <ConsultationCta />
    </>
  );
}
