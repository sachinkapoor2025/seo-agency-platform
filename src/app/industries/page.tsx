import { ServiceDocumentPage } from "@/components/service-document-page";
import { industries } from "@/content/industries";
import { getIndustryDocument, industryArtwork, industryCardHref } from "@/content/industry-pages";
import { serviceMetadata } from "@/lib/service-metadata";

const route = "/industries";
const artwork = industryArtwork[route];

function requireOverview() {
  const overview = getIndustryDocument(route);
  if (!overview) {
    throw new Error("Missing industries overview content");
  }
  return overview;
}

const document = requireOverview();

export const metadata = serviceMetadata(document, artwork);

const related = {
  title: "Industry pages",
  links: [
    ...industries.map((industry) => ({
      href: `/industries/${industry.slug}`,
      label: industry.name,
    })),
  ],
};

export default function IndustriesPage() {
  return (
    <ServiceDocumentPage
      document={document}
      artwork={artwork}
      crumbs={[
        { label: "Home", href: "/" },
        { label: "Industries" },
      ]}
      cardHref={industryCardHref}
      cardMedia={{
        "E-Commerce & Retail": {
          src: industryArtwork["/industries/ecommerce"].src,
          width: industryArtwork["/industries/ecommerce"].width,
          height: industryArtwork["/industries/ecommerce"].height,
          alt: industryArtwork["/industries/ecommerce"].alt,
        },
      }}
      related={related}
    />
  );
}
