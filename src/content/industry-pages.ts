import documents from "@/content/industry-documents.json";
import type { ServiceArtwork, ServiceDocument } from "@/content/service-pages";

export const industryDocuments = documents as ServiceDocument[];

export const industryArtwork: Record<string, ServiceArtwork> = {
  "/industries": {
    src: "/images/industries/industry-specific-seo-strategies.webp",
    width: 1082,
    height: 941,
    alt: "Illustration of retail, healthcare, education, and local businesses connected around a search chart.",
    background: "#f9f2e6",
  },
  "/industries/saas-technology": {
    src: "/images/industries/saas-technology-growth-dashboard.webp",
    width: 1102,
    height: 863,
    alt: "Illustration of a SaaS dashboard with product features, integrations, documentation, and a growth chart.",
    background: "#faf3e8",
  },
  "/industries/professional-services": {
    src: "/images/industries/professional-services-seo-growth.webp",
    width: 1107,
    height: 941,
    alt: "Illustration of a professional services desk with expertise, credentials, and search visibility.",
    background: "#f9f3e7",
  },
  "/industries/healthcare": {
    src: "/images/industries/healthcare-seo-growth-strategy.webp",
    width: 1177,
    height: 823,
    alt: "Illustration of a clinic, laptop, stethoscope, and healthcare search information.",
    background: "#f8f3e8",
  },
  "/industries/education": {
    src: "/images/industries/education-seo-growth-banner.webp",
    width: 1135,
    height: 941,
    alt: "Illustration of a campus, course pages, a graduation cap, and an education growth chart.",
    background: "#f9f3e8",
  },
  "/industries/ecommerce": {
    src: "/images/industries/ecommerce-industry-hero.webp",
    width: 1126,
    height: 941,
    alt: "Illustration of an online store on a laptop, with a shopping cart, product card, SEO chart, and structured data panel.",
    background: "#faf4e9",
    scale: 0.88,
  },
  "/industries/local-multi-location": {
    src: "/images/industries/local-multi-location-seo-strategy.webp",
    width: 1137,
    height: 868,
    alt: "Illustration of store locations, a map, a laptop, and a phone showing local listings.",
    background: "#faf3e8",
  },
};

const dedicatedIndustryPages: Record<string, string> = {
  "E-Commerce & Retail": "/industries/ecommerce",
  "Healthcare & Medical": "/industries/healthcare",
  "SaaS & Technology": "/industries/saas-technology",
  "Education & E-Learning": "/industries/education",
  "Legal & Professional Services": "/industries/professional-services",
  "Local & Home Services": "/industries/local-multi-location",
};

export function getIndustryDocument(route: string) {
  return industryDocuments.find((document) => document.route === route);
}

export function industryCardHref(title: string) {
  return dedicatedIndustryPages[title.replace(/^\d+\.\s*/, "")];
}
