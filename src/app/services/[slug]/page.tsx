import type { Metadata } from "next";
import type { JSX } from "react";
import { notFound } from "next/navigation";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { RelatedLinks } from "@/components/related-links";
import { AeoDetail } from "@/components/aeo-detail";
import { AiSearchVisibilityDetail } from "@/components/ai-search-visibility-detail";
import { ContentStrategyDetail } from "@/components/content-strategy-detail";
import { EcommerceSeoDetail } from "@/components/ecommerce-seo-detail";
import { GeoDetail } from "@/components/geo-detail";
import { OnPageSeoDetail } from "@/components/on-page-seo-detail";
import { TechnicalSeoDetail } from "@/components/technical-seo-detail";
import { TextSection } from "@/components/text-section";
import { services } from "@/content/services";
import { getService, getServicesBySlug } from "@/lib/content";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceDescriptions: Record<string, string> = {
  "technical-seo":
    "We help businesses improve how search engines access, understand and navigate their websites through careful technical analysis and structured optimization.",
  "on-page-seo":
    "We help businesses make their pages clearer, more relevant and more useful by aligning content, structure and search intent with what their audiences need.",
  "content-strategy":
    "We help businesses plan and develop meaningful content around audience needs, search intent and business priorities.",
  "ecommerce-seo":
    "We help e-commerce businesses improve product and category discovery through stronger site architecture, useful product content and search-focused optimization.",
  "answer-engine-optimization":
    "We help businesses structure useful information so that direct-answer experiences can better interpret their expertise and address audience questions.",
  "generative-engine-optimization":
    "We help businesses strengthen the clarity, depth and consistency of their digital information for an evolving search environment that includes generative experiences.",
  "ai-search-visibility":
    "We help businesses assess and strengthen their presence across AI-assisted discovery experiences through clear information, useful content and a connected search strategy.",
};

const serviceDetails: Record<string, () => JSX.Element> = {
  "technical-seo": TechnicalSeoDetail,
  "on-page-seo": OnPageSeoDetail,
  "content-strategy": ContentStrategyDetail,
  "ecommerce-seo": EcommerceSeoDetail,
  "answer-engine-optimization": AeoDetail,
  "generative-engine-optimization": GeoDetail,
  "ai-search-visibility": AiSearchVisibilityDetail,
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
    description: serviceDescriptions[slug] ?? service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Detail = serviceDetails[service.slug];
  if (Detail) {
    return <Detail />;
  }

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
