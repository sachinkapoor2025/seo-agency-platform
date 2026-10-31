import type { Metadata } from "next";
import type { JSX } from "react";
import { notFound } from "next/navigation";
import { EducationIndustryPage } from "@/components/industry-education";
import { EcommerceIndustryPage } from "@/components/industry-ecommerce";
import { HealthcareIndustryPage } from "@/components/industry-healthcare";
import { LocalIndustryPage } from "@/components/industry-local";
import { ProfessionalIndustryPage } from "@/components/industry-professional";
import { SaasIndustryPage } from "@/components/industry-saas";
import { industries } from "@/content/industries";
import { getIndustry } from "@/lib/content";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

const descriptions: Record<string, string> = {
  ecommerce:
    "How e-commerce search planning covers category architecture, product pages, filters, indexation, and product information.",
  "saas-technology":
    "How SaaS and technology search planning covers product pages, features, integrations, documentation, and evaluation content.",
  "professional-services":
    "How professional-services search planning covers service pages, expertise, evidence, and the questions clients ask.",
  healthcare:
    "How healthcare search planning organizes provider, service, and location information without medical advice or clinical claims.",
  education:
    "How education search planning covers programs, courses, admissions, campuses, and large course catalogs.",
  "local-multi-location":
    "How local and multi-location search planning covers location pages, service areas, and consistent business information.",
};

const pages: Record<string, () => JSX.Element> = {
  ecommerce: EcommerceIndustryPage,
  "saas-technology": SaasIndustryPage,
  "professional-services": ProfessionalIndustryPage,
  healthcare: HealthcareIndustryPage,
  education: EducationIndustryPage,
  "local-multi-location": LocalIndustryPage,
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) {
    return { title: "Industry" };
  }

  return {
    title: industry.name,
    description: descriptions[industry.slug] ?? industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  const Page = industry ? pages[industry.slug] : undefined;

  if (!industry || !Page) {
    notFound();
  }

  return <Page />;
}
