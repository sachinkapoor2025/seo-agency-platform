import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { RelatedLinks } from "@/components/related-links";
import { TextSection } from "@/components/text-section";
import { services } from "@/content/services";
import { getService, getServicesBySlug } from "@/lib/content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: service.name,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = getServicesBySlug(service.related);

  return (
    <>
      <PageIntro
        eyebrow="Service"
        title={service.name}
        lede={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
      />
      <Container className="py-4">
        <TextSection title="Overview" paragraphs={service.overview} />
        <TextSection title="Business problems addressed" items={service.problems} />
        <TextSection title="Approach" items={service.approach} />
        <TextSection
          title="Types of deliverables"
          paragraphs={[
            "These are types of work product a team can review and implement. They are not a guarantee of rankings, traffic, or revenue.",
          ]}
          items={service.deliverables}
        />
        <RelatedLinks
          title="Related services"
          links={related.map((item) => ({
            href: `/services/${item.slug}`,
            label: item.name,
            description: item.summary,
          }))}
        />
      </Container>
      <ConsultationCta />
    </>
  );
}
