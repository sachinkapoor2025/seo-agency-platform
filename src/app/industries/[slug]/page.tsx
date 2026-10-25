import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { RelatedLinks } from "@/components/related-links";
import { TextSection } from "@/components/text-section";
import { industries } from "@/content/industries";
import { getIndustry, getServicesBySlug } from "@/lib/content";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry not found" };
  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  const services = getServicesBySlug(industry.relevantServices);

  return (
    <>
      <PageIntro
        eyebrow="Industry"
        title={industry.name}
        lede={industry.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        notice="This is a general planning overview. It does not describe a client engagement or claim results in this industry."
      />
      <Container className="py-4">
        <TextSection title="Overview" paragraphs={industry.overview} />
        <TextSection title="How search needs differ" items={industry.searchNeeds} />
        <TextSection title="Strategic considerations" items={industry.considerations} />
        <RelatedLinks
          title="Relevant services"
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
