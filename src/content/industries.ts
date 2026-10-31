import type { Industry } from "@/content/types";

export const industries: Industry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce",
    summary:
      "Catalog-led websites where templates, filters, and product data decide whether search can reach the right products.",
    overview: [
      "E-commerce search is shaped by scale. A few templates generate thousands of URLs, and small rules have large effects.",
      "International selling adds currency, shipping, availability, and language. Those differences should be reflected in the site, not only in ads.",
    ],
    searchNeeds: [
      "Clear indexation rules for categories, products, and filtered views.",
      "Category pages that help a person choose, not only a grid of products.",
      "Stable product information in titles and descriptive fields.",
      "Supporting guides that link into the catalog without creating duplicates.",
    ],
    considerations: [
      "Merchandising cycles can undo search rules unless someone owns them.",
      "Marketplace or distributor content may conflict with the brand site.",
      "Country sites should not share assumptions about delivery, tax, or stock.",
      "This page describes typical search needs. It is not a claim of client work in retail.",
    ],
    relevantServices: [
      "technical-seo",
      "on-page-seo",
      "content-strategy",
      "ecommerce-seo",
      "ai-search-visibility",
    ],
  },
  {
    slug: "saas-technology",
    name: "SaaS and technology",
    summary:
      "Product, documentation, and comparison pages that often compete with each other for the same evaluation queries.",
    overview: [
      "Technology companies tend to publish product marketing, help docs, and thought pieces in separate systems. Search users do not care which system owns the page.",
      "Evaluation queries are specific. Pages need to explain the problem, the product boundary, and the next step without collapsing into jargon.",
    ],
    searchNeeds: [
      "A clear split between product pages, documentation, and educational content.",
      "Consistent naming for features and use cases.",
      "Technical templates that docs teams can change without breaking indexation.",
      "Answers that help a buyer or user complete a task.",
    ],
    considerations: [
      "Release cycles rename features faster than search pages are updated.",
      "Developer documentation and marketing sites can cannibalize each other.",
      "International pages may need different examples even when the product is the same.",
      "Nothing here implies a particular software client or outcome.",
    ],
    relevantServices: [
      "technical-seo",
      "on-page-seo",
      "content-strategy",
      "answer-engine-optimization",
      "generative-engine-optimization",
    ],
  },
  {
    slug: "professional-services",
    name: "Professional services",
    summary:
      "Expertise-led firms whose visibility depends on clear service pages and careful explanatory writing.",
    overview: [
      "Professional services are chosen on trust and fit. Search pages have to explain the problem, the way the firm works, and who the service is for.",
      "Long essays do not replace a service page that a buyer can compare. The two should support each other.",
    ],
    searchNeeds: [
      "Service pages with a defined audience and scope.",
      "Explanatory articles that answer questions the sales team already hears.",
      "Authors and reviewers who can stand behind published explanations.",
      "Internal links from insight to the relevant service.",
    ],
    considerations: [
      "Claims about results need evidence the firm is willing to publish, or they should not be published.",
      "Partners often edit in isolation, which creates overlapping pages.",
      "Markets such as India, the United States, and the United Kingdom can use different professional terms.",
      "This is a description of the search problem, not a client list.",
    ],
    relevantServices: [
      "content-strategy",
      "on-page-seo",
      "technical-seo",
      "answer-engine-optimization",
      "generative-engine-optimization",
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary:
      "Health and care organizations that need accurate, reviewable information architecture more than aggressive publishing.",
    overview: [
      "Healthcare search often sits next to anxious questions. Pages should be specific, dated when facts change, and reviewed by someone qualified to check them.",
      "Search work can organize information. It cannot replace clinical review, and it should not push pages to sound more certain than the evidence.",
    ],
    searchNeeds: [
      "A page model that separates services, conditions, locations, and patient information.",
      "Editorial standards for review, citations, and updates.",
      "Templates that do not generate thin location or treatment combinations.",
      "Clear paths from a general question to the right service.",
    ],
    considerations: [
      "Regulatory and advertising rules differ by country and must be handled by qualified reviewers.",
      "Medical language and patient language are not the same search need.",
      "Location pages are useful only when the location actually changes the offer.",
      "Growth Agency does not provide medical advice, and this page does not claim healthcare clients.",
    ],
    relevantServices: [
      "technical-seo",
      "on-page-seo",
      "content-strategy",
      "answer-engine-optimization",
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary:
      "Institutions and education providers whose programs, audiences, and intake cycles need distinct search pages.",
    overview: [
      "Education sites serve prospective students, families, employers, and current students at once. Those audiences rarely share a query.",
      "Program pages, admissions information, and advice content should be planned as a system, especially when intakes differ by country.",
    ],
    searchNeeds: [
      "Program pages that state who the course is for and how to apply.",
      "Separate treatment of domestic and international study needs where they differ.",
      "Advice content that links to a real program rather than floating alone.",
      "Templates that stay accurate across intake dates.",
    ],
    considerations: [
      "Rankings, placements, and outcomes should be published only when the institution can support them.",
      "A large course catalog can create near-duplicate program pages.",
      "Search language differs between students and the departments naming the courses.",
      "This overview does not refer to a specific school or campaign.",
    ],
    relevantServices: [
      "content-strategy",
      "on-page-seo",
      "technical-seo",
      "answer-engine-optimization",
    ],
  },
  {
    slug: "local-multi-location",
    name: "Local and multi-location businesses",
    summary:
      "Service businesses that need location pages only where a real place changes the offer, hours, or coverage.",
    overview: [
      "Local search is about being understood in a place. A single-location business and a multi-location brand do not need the same page model.",
      "The common failure is a city page that swaps the place name and changes nothing else. Those pages are hard to justify and hard to maintain.",
    ],
    searchNeeds: [
      "Accurate names, coverage areas, and service details.",
      "Location pages reserved for places with distinct information.",
      "Service pages that can route a person to the right location.",
      "Consistency between the website and public business profiles.",
    ],
    considerations: [
      "Opening hours and coverage change, so ownership of updates matters.",
      "Multi-country brands should not assume one location schema fits India, the United States, and the United Kingdom.",
      "Review content and local proof should be used only when they are real and permitted.",
      "No specific locations or performance figures are claimed here.",
    ],
    relevantServices: [
      "technical-seo",
      "on-page-seo",
      "content-strategy",
      "ai-search-visibility",
    ],
  },
];
