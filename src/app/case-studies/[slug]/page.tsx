import type { Metadata } from "next";
import type { JSX } from "react";
import { notFound } from "next/navigation";
import { AdvisoryCaseStudy } from "@/components/case-advisory";
import { CatalogueCaseStudy } from "@/components/case-catalogue";
import { DocumentationCaseStudy } from "@/components/case-documentation";
import { LocationsCaseStudy } from "@/components/case-locations";
import { caseStudies } from "@/content/case-studies";
import type { CaseStudy } from "@/content/types";
import { getCaseStudy } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const pages: Record<string, (props: { study: CaseStudy }) => JSX.Element> = {
  "international-product-catalogue": CatalogueCaseStudy,
  "b2b-software-documentation": DocumentationCaseStudy,
  "multi-location-service-business": LocationsCaseStudy,
  "advisory-explanatory-content": AdvisoryCaseStudy,
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
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
  const Page = study ? pages[study.slug] : undefined;

  if (!study || !Page) notFound();

  return <Page study={study} />;
}
