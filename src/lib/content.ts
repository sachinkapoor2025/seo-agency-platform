import { articles } from "@/content/insights";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import type { Article, CaseStudy, Service } from "@/content/types";

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getServicesBySlug(slugs: string[]): Service[] {
  return slugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });
}

export function getArticlesBySlug(slugs: string[]): Article[] {
  return slugs.flatMap((slug) => {
    const article = getArticle(slug);
    return article ? [article] : [];
  });
}

export function servicesForCaseStudy(study: CaseStudy): Service[] {
  return getServicesBySlug(study.serviceSlugs);
}
