import documents from "@/content/service-documents.json";

export type ContentBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "bold"; text: string }
  | { kind: "labeled"; label: string; text: string };

export type ContentSubsection = {
  title: string;
  blocks: ContentBlock[];
};

export type ContentSection = {
  title: string;
  blocks: ContentBlock[];
  subsections: ContentSubsection[];
};

export type ServiceDocument = {
  file: string;
  route: string;
  eyebrow?: string;
  h1: string;
  heroAction?: string;
  intro: ContentBlock[];
  sections: ContentSection[];
  faqTitle: string;
  faq: { question: string; answer: string }[];
  cta: {
    title: string;
    paragraphs: string[];
    action: string;
    note: string | null;
  };
};

export type ServiceArtwork = {
  src: string;
  width: number;
  height: number;
  alt: string;
  background: string;
  scale?: number;
};

export const serviceDocuments = documents as ServiceDocument[];

export const serviceArtwork: Record<string, ServiceArtwork> = {
  "/services": {
    src: "/images/services/strategic-growth-analytics-hero.webp",
    width: 1146,
    height: 866,
    alt: "Illustration of a laptop, globe, SEO magnifying glass, plant, and growth target.",
    background: "#fbf4e6",
  },
  "/services/technical-seo": {
    src: "/images/services/seo-crawl-to-search-success.webp",
    width: 1096,
    height: 898,
    alt: "Illustration of website code, a sitemap, and a magnifying glass reviewing page structure.",
    background: "#fbf4e8",
  },
  "/services/on-page-seo": {
    src: "/images/services/on-page-seo-optimization-dashboard.webp",
    width: 1126,
    height: 884,
    alt: "Illustration of a webpage layout, internal links, and a magnifying glass.",
    background: "#fcf7eb",
  },
  "/services/content-strategy": {
    src: "/images/services/content-strategy-growth-workflow.webp",
    width: 1156,
    height: 941,
    alt: "Illustration of a content plan, calendar, topic clusters, and growth chart.",
    background: "#fcf5ea",
  },
  "/services/ecommerce-seo": {
    src: "/images/services/ecommerce-seo-growth-blueprint.webp",
    width: 1258,
    height: 941,
    alt: "Illustration of an online store, product pages, and an ecommerce SEO checklist.",
    background: "#fbf4e8",
  },
  "/services/answer-engine-optimization": {
    src: "/images/services/ai-search-optimization-strategy.webp",
    width: 1194,
    height: 941,
    alt: "Illustration of answer-focused search content and an AEO dashboard.",
    background: "#fcf5ea",
  },
  "/services/generative-engine-optimization": {
    src: "/images/services/generative-engine-optimization-workflow.webp",
    width: 1252,
    height: 941,
    alt: "Illustration of a generative search workflow with a laptop and AI platform labels.",
    background: "#fcf5ea",
  },
  "/services/ai-search-visibility": {
    src: "/images/services/ai-search-growth-analytics.webp",
    width: 1238,
    height: 890,
    alt: "Illustration of connected brand facts, search results, and an AI answers panel.",
    background: "#fcf4ec",
  },
};

const serviceHrefs: Record<string, string> = {
  "Technical SEO Services": "/services/technical-seo",
  "On-Page SEO Services": "/services/on-page-seo",
  "Content Strategy and SEO Optimization": "/services/content-strategy",
  "E-commerce SEO Services": "/services/ecommerce-seo",
  "Answer Engine Optimization (AEO)": "/services/answer-engine-optimization",
  "Generative Engine Optimization (GEO)": "/services/generative-engine-optimization",
  "AI Search Visibility": "/services/ai-search-visibility",
};

export function getServiceDocument(route: string) {
  return serviceDocuments.find((document) => document.route === route);
}

export function cleanTitle(title: string) {
  return title.replace(/^\d+\.\s*/, "");
}

export function serviceHref(title: string) {
  return serviceHrefs[cleanTitle(title)];
}

export function heroLead(document: ServiceDocument) {
  const paragraph = document.intro.find((block) => block.kind === "p");
  return paragraph && paragraph.kind === "p" ? paragraph.text : document.h1;
}

export function remainingIntro(document: ServiceDocument) {
  const index = document.intro.findIndex((block) => block.kind === "p");
  return document.intro.filter((_, item) => item !== index);
}
