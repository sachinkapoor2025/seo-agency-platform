import type { Service } from "@/content/types";

export const services: Service[] = [
  {
    slug: "technical-seo",
    name: "Technical SEO",
    summary:
      "Make the website easier to crawl, render, and maintain so search engines and answer systems can reach the right pages.",
    overview: [
      "Technical SEO is the structural work that lets a website be discovered and understood. It covers crawling, indexation, internal linking, page experience, and the way templates generate URLs and metadata.",
      "For international sites, the same template can behave differently across markets. The work looks at how country versions, languages, and shared systems affect what is eligible to appear in search.",
    ],
    problems: [
      "Important pages are difficult to crawl or are competing with thin duplicates.",
      "Templates produce inconsistent titles, canonicals, or indexation rules.",
      "International versions are unclear to search engines.",
      "Releases change URLs or internal links without a search review.",
    ],
    approach: [
      "Review crawl access, indexation signals, and template behavior before recommending content volume.",
      "Trace how a page is generated, linked, and rendered.",
      "Prioritize fixes that unblock important templates rather than isolated one-page edits.",
      "Document decisions so developers can implement and later maintain them.",
    ],
    deliverables: [
      "A technical assessment of crawl, indexation, and template risk.",
      "A prioritized implementation list for engineering teams.",
      "Recommendations for internal linking and URL structure.",
      "Notes on international and multilingual setup where relevant.",
      "A plain-language explanation of what each change is for.",
    ],
    related: ["on-page-seo", "ecommerce-seo", "ai-search-visibility"],
  },
  {
    slug: "on-page-seo",
    name: "On-Page SEO",
    summary:
      "Clarify what each important page is for, and align headings, copy, and internal links with that purpose.",
    overview: [
      "On-page SEO shapes the meaning of an individual URL. Titles, headings, body copy, media, and internal links should agree on the question the page answers.",
      "The aim is a page a person can use and a retrieval system can interpret. It is not a checklist of repeated phrases.",
    ],
    problems: [
      "Pages try to rank for several unrelated needs at once.",
      "Headings and titles describe the company rather than the task the visitor has.",
      "Support content is published, but primary pages do not link to it.",
      "Market-specific pages reuse copy that ignores local language or intent.",
    ],
    approach: [
      "Define the primary purpose of each priority page.",
      "Rewrite structure before adding length.",
      "Connect related pages so people and crawlers can move with context.",
      "Review pages after template or campaign changes.",
    ],
    deliverables: [
      "Page-purpose briefs for priority URLs.",
      "Title, heading, and internal-link recommendations.",
      "Guidance for editors working inside existing templates.",
      "A review of overlapping pages that should be consolidated or differentiated.",
      "Notes on how page changes will be checked after publication.",
    ],
    related: ["content-strategy", "technical-seo", "answer-engine-optimization"],
  },
  {
    slug: "content-strategy",
    name: "Content Strategy",
    summary:
      "Plan a body of pages that answers real questions across priority markets, without publishing for its own sake.",
    overview: [
      "Content strategy decides which topics deserve a page, which audience it serves, and how it connects to commercial pages. It is a planning discipline, not a promise of traffic.",
      "International planning has to respect different search language, regulation, and buying cycles in markets such as India, the United States, and the United Kingdom.",
    ],
    problems: [
      "Publishing calendars are busy, but the site still fails to answer core questions.",
      "The same topic exists in several weak pages.",
      "Content is written for a single market and reused unchanged elsewhere.",
      "Editorial work is disconnected from technical templates and measurement.",
    ],
    approach: [
      "Map questions to existing URLs before proposing new ones.",
      "Separate explanatory content, product or service pages, and supporting proof.",
      "Define ownership, review, and update expectations for each content type.",
      "Plan market variations only where the search need actually differs.",
    ],
    deliverables: [
      "A topic map tied to existing or proposed URLs.",
      "Content briefs that state audience, purpose, and internal links.",
      "Guidance on what should not be published.",
      "A maintenance rhythm for pages that need review.",
      "Handoff notes for writers and subject reviewers.",
    ],
    related: [
      "on-page-seo",
      "answer-engine-optimization",
      "generative-engine-optimization",
    ],
  },
  {
    slug: "ecommerce-seo",
    name: "E-commerce SEO",
    summary:
      "Improve category, product, and supporting pages so a catalog can be found, filtered, and understood.",
    overview: [
      "E-commerce search has to deal with large templates, faceted navigation, similar products, and content that is often supplied by a catalog rather than an editor.",
      "The useful work is usually in information architecture, indexation rules, and the few pages that help a shopper choose. Adding text to every product is rarely the first move.",
    ],
    problems: [
      "Faceted URLs create crawl waste or duplicate indexation.",
      "Category pages do not explain how to choose.",
      "Product templates lack stable titles, descriptions, or availability signals.",
      "International catalogs share products but not currency, shipping, or language rules.",
    ],
    approach: [
      "Identify which catalog templates deserve indexation.",
      "Set rules for filters, sorts, and parameters.",
      "Improve category narrative and internal paths to products.",
      "Coordinate with merchandising so search changes do not fight the catalog.",
    ],
    deliverables: [
      "Indexation rules for categories, filters, and product variants.",
      "Template recommendations for titles and descriptive fields.",
      "A category-page content pattern.",
      "Internal linking notes between guides, categories, and products.",
      "Implementation notes for the commerce platform team.",
    ],
    related: ["technical-seo", "on-page-seo", "ai-search-visibility"],
  },
  {
    slug: "answer-engine-optimization",
    name: "Answer Engine Optimization",
    summary:
      "Structure pages so they can answer a specific question clearly, whether the response appears in classic search or an answer interface.",
    overview: [
      "Answer engine optimization, often shortened to AEO, is the practice of making a page a direct, sourced answer to a defined question. It depends on clarity, structure, and a page that deserves to be cited.",
      "It does not require gimmicks. A good answer page states the question, gives a usable response, and shows what the reader should do next.",
    ],
    problems: [
      "Pages discuss a topic without answering the question that prompted the visit.",
      "Key facts are buried below marketing copy.",
      "Several pages answer the same question differently.",
      "There is no editorial standard for definitions, steps, or caveats.",
    ],
    approach: [
      "Select questions that match real demand and the organization’s authority to answer.",
      "Put the answer near the start, then support it.",
      "Use headings, lists, and definitions where they help scanning.",
      "Note the limits of the answer, especially in regulated subjects.",
    ],
    deliverables: [
      "A question set mapped to URLs.",
      "Answer-page patterns for editors.",
      "Recommendations for headings, summaries, and supporting detail.",
      "Internal links between questions and commercial pages.",
      "Review criteria for accuracy and duplication.",
    ],
    related: [
      "content-strategy",
      "generative-engine-optimization",
      "on-page-seo",
    ],
  },
  {
    slug: "generative-engine-optimization",
    name: "Generative Engine Optimization",
    summary:
      "Prepare a site’s information so generative systems are more likely to find a clear, consistent source when they assemble an answer.",
    overview: [
      "Generative engine optimization, often shortened to GEO, looks at how a body of pages represents an organization and its subjects. Generative systems draw on many sources. Inconsistent or thin pages make a poor source.",
      "The practical work is still editorial and technical: stable facts, clear authorship context, crawlable pages, and content that agrees with itself.",
    ],
    problems: [
      "Core facts differ across the website.",
      "Important explanations exist only in formats that are hard to retrieve.",
      "There is no distinction between opinion, instruction, and basic fact.",
      "Teams chase mentions in generative tools without a source worth citing.",
    ],
    approach: [
      "Establish a small set of canonical explanations for priority topics.",
      "Remove or consolidate contradictory pages.",
      "Make supporting evidence and caveats visible.",
      "Keep technical access and on-page clarity aligned with the content.",
    ],
    deliverables: [
      "A source map of priority topics and canonical URLs.",
      "Editorial rules for facts, definitions, and updates.",
      "Recommendations for page structure and supporting references.",
      "A list of contradictions or gaps to resolve.",
      "Guidance on what generative visibility cannot be promised.",
    ],
    related: [
      "answer-engine-optimization",
      "content-strategy",
      "ai-search-visibility",
    ],
  },
  {
    slug: "ai-search-visibility",
    name: "AI Search Visibility",
    summary:
      "Connect technical access, page clarity, and content consistency so the organization can be found in AI-mediated search experiences.",
    overview: [
      "AI search visibility is the combined outcome of technical SEO, answer-focused pages, and a coherent body of content. It is a way to plan the work, not a separate trick.",
      "Interfaces change quickly. The durable part is a website that states who it serves, what it offers, and what it knows, in pages machines and people can both use.",
    ],
    problems: [
      "Teams treat AI search as a channel that can be bolted on.",
      "The site is technically available but the content is vague.",
      "Or the content is strong but templates block retrieval.",
      "Reporting focuses on screenshots of tools rather than on the site itself.",
    ],
    approach: [
      "Start with markets, offers, and questions that matter commercially.",
      "Check whether those pages can be crawled and are internally supported.",
      "Align AEO and GEO work with the same URL map.",
      "Define a modest measurement set before expanding production.",
    ],
    deliverables: [
      "A visibility plan that ties markets, pages, and workstreams together.",
      "Priority URL lists for classic and AI-mediated discovery.",
      "Cross-team recommendations spanning engineering and editorial.",
      "A measurement outline with explicit limits.",
      "A sequenced roadmap rather than a single campaign.",
    ],
    related: [
      "technical-seo",
      "answer-engine-optimization",
      "generative-engine-optimization",
    ],
  },
];
