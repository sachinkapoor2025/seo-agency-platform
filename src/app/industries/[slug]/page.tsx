import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDocumentPage } from "@/components/service-document-page";
import { industries } from "@/content/industries";
import { getIndustryDocument, industryArtwork } from "@/content/industry-pages";
import { getIndustry } from "@/lib/content";
import { serviceMetadata } from "@/lib/service-metadata";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = `/industries/${slug}`;
  const document = getIndustryDocument(route);
  const artwork = industryArtwork[route];
  if (document && artwork) return serviceMetadata(document, artwork);

  const industry = getIndustry(slug);
  if (!industry) return { title: "Industry" };
  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const route = `/industries/${slug}`;
  const document = getIndustryDocument(route);
  const artwork = industryArtwork[route];
  const industry = getIndustry(slug);

  if (document && artwork && industry) {
    return (
      <ServiceDocumentPage
        document={document}
        artwork={artwork}
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        related={{
          title: "Other industries",
          links: [
            { href: "/industries", label: "All industries" },
            ...industries
              .filter((item) => item.slug !== industry.slug)
              .map((item) => ({ href: `/industries/${item.slug}`, label: item.name })),
          ],
        }}
      />
    );
  }

  notFound();
}
