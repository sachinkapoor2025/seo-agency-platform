export type Service = {
  slug: string;
  name: string;
  summary: string;
  overview: string[];
  problems: string[];
  approach: string[];
  deliverables: string[];
  related: string[];
};

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  overview: string[];
  searchNeeds: string[];
  considerations: string[];
  relevantServices: string[];
};

export type CaseStudyImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type CaseStudyMetric = {
  label: string;
  value: string;
  definition: string;
};

export type CaseStudyWorkItem = {
  title: string;
  detail: string;
};

export type CaseStudyFinding = {
  title: string;
  detail: string;
  status: "Completed work" | "Report observation";
};

export type CaseStudyServiceLink = {
  href: string;
  label: string;
  description: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  websiteUrl: string;
  summary: string;
  seoTitle: string;
  seoDescription: string;
  image: CaseStudyImage;
  introduction: string;
  overview: string[];
  purpose: string;
  objectives: string[];
  work: CaseStudyWorkItem[];
  metrics: CaseStudyMetric[];
  withheld: string[];
  findings: CaseStudyFinding[];
  relatedServices: CaseStudyServiceLink[];
};

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedOn: string;
  introduction: string[];
  sections: ArticleSection[];
  related: string[];
  readingTime: number;
};

export type NavLink = {
  label: string;
  href: string;
};

export type NavItem = NavLink & {
  menuLabel: string;
  children?: NavLink[];
};
