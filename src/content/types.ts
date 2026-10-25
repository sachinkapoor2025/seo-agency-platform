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

export type CaseStudy = {
  slug: string;
  title: string;
  summary: string;
  industry: string;
  serviceSlugs: string[];
  context: string[];
  challenge: string[];
  strategy: string[];
  implementation: string[];
  measurement: string[];
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
