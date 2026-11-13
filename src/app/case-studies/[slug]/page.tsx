import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/case-study-detail";
import { caseStudies } from "@/content/case-studies";
import { getCaseStudy } from "@/lib/content";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

const metadataBase = new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com");

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found" };

  const path = `/case-studies/${study.slug}`;
  const url = new URL(path, metadataBase).toString();

  return {
    metadataBase,
    title: { absolute: study.seoTitle },
    description: study.seoDescription,
    alternates: { canonical: path },
    openGraph: {
      title: study.seoTitle,
      description: study.seoDescription,
      url,
      siteName: "Growth Agency",
      type: "article",
      images: [
        {
          url: study.image.src,
          width: study.image.width,
          height: study.image.height,
          alt: study.image.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.seoTitle,
      description: study.seoDescription,
      images: [study.image.src],
    },
  };
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const path = `/case-studies/${study.slug}`;
  const pageUrl = new URL(path, metadataBase).toString();
  const imageUrl = new URL(study.image.src, metadataBase).toString();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: study.seoTitle,
        description: study.seoDescription,
        isPartOf: {
          "@type": "WebSite",
          name: "Growth Agency",
          url: metadataBase.toString(),
        },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: imageUrl,
          width: study.image.width,
          height: study.image.height,
        },
        about: {
          "@type": "WebSite",
          name: study.name,
          url: study.websiteUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", metadataBase).toString() },
          { "@type": "ListItem", position: 2, name: "Case Studies", item: new URL("/case-studies", metadataBase).toString() },
          { "@type": "ListItem", position: 3, name: study.name, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <CaseStudyDetail study={study} />
    </>
  );
}
