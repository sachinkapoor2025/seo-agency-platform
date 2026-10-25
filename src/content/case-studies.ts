import type { CaseStudy } from "@/content/types";

export const caseStudies: CaseStudy[] = [
  {
    slug: "international-product-catalogue",
    title: "An international product catalogue",
    summary:
      "A hypothetical retailer with one catalog template and several country sites, used to show how indexation and category pages would be planned.",
    industry: "E-commerce",
    serviceSlugs: ["ecommerce-seo", "technical-seo", "on-page-seo"],
    context: [
      "This is an illustrative example, not a client engagement. Imagine a retailer selling the same product families in India, the United States, and the United Kingdom.",
      "The website uses one commerce platform. Country sites share most templates, while currency, delivery, and some ranges differ.",
    ],
    challenge: [
      "Filtered URLs are crawlable, and many of them offer no unique value.",
      "Category pages are product grids with little guidance.",
      "Country versions sometimes reuse copy that mentions the wrong delivery rules.",
    ],
    strategy: [
      "Decide which category and product templates should be indexed in each market.",
      "Close or consolidate filter URLs that only reshuffle the same products.",
      "Give priority categories a short decision guide and links to genuine advice pages.",
      "Review country templates for delivery, tax, and availability language.",
    ],
    implementation: [
      "Engineering would receive indexation rules for parameters, canonicals, and pagination.",
      "Merchandising would supply the attributes needed for category introductions.",
      "Editors would rewrite a small set of categories before expanding the pattern.",
      "Each country site would be checked separately rather than assumed to inherit the fix.",
    ],
    measurement: [
      "A measurement plan would watch index coverage of the intended templates, the share of crawled URLs that are low value, and whether priority categories earn impressions for their target themes.",
      "It would also check qualitative outcomes: can a shopper tell which category to use, and does the page state the right market rules?",
      "The plan would not treat a short-term traffic change as proof of success, and this example includes no performance results.",
    ],
  },
  {
    slug: "b2b-software-documentation",
    title: "Product pages beside a documentation set",
    summary:
      "A hypothetical software company whose marketing pages and help docs compete for the same evaluation and setup queries.",
    industry: "SaaS and technology",
    serviceSlugs: [
      "content-strategy",
      "answer-engine-optimization",
      "technical-seo",
    ],
    context: [
      "This is an illustrative example. The imagined company sells a B2B product and publishes documentation on a separate help center.",
      "Feature names in the product UI, the marketing site, and the docs have drifted apart.",
    ],
    challenge: [
      "Setup questions rank the help center, while evaluation questions land on vague product pages.",
      "Some feature pages repeat the documentation and add little for a buyer.",
      "Search templates differ, so titles and canonicals are inconsistent.",
    ],
    strategy: [
      "Assign each priority query a single preferred URL and a reason.",
      "Rewrite product pages around the job to be done, and link to the exact doc for implementation detail.",
      "Rename or redirect overlapping feature explainers.",
      "Align titles and headings with the names customers actually search.",
    ],
    implementation: [
      "A shared glossary would be agreed by product marketing and documentation.",
      "The help center would noindex task pages that exist only as campaign duplicates, while keeping genuine tasks indexable.",
      "Internal links would be added from product pages to the canonical task, and back where a buyer might need commercial context.",
      "Writers would follow an answer pattern: the direct response, the boundary of the feature, and the next step.",
    ],
    measurement: [
      "The plan would track which URL is visible for each priority query, whether documentation and product pages still overlap, and if support content answers the intended task.",
      "Assisted demo requests could be reviewed later, with the caveat that search is only one influence.",
      "No rankings, revenue, or conversion figures are part of this sample.",
    ],
  },
  {
    slug: "multi-location-service-business",
    title: "A service business with several locations",
    summary:
      "A hypothetical multi-location service brand, used to show when a location page is justified and when it is not.",
    industry: "Local and multi-location businesses",
    serviceSlugs: ["on-page-seo", "technical-seo", "ai-search-visibility"],
    context: [
      "This is an illustrative example of a service business operating in more than one city. The brand is fictional and no locations are named as clients.",
      "The current site has a city page for every place the team is willing to travel, including places with no staff, no unique offer, and no local detail.",
    ],
    challenge: [
      "City pages are near-duplicates and difficult to keep accurate.",
      "The core service explanation is weaker than the location pages.",
      "Public business information and the website do not use the same names or coverage notes.",
    ],
    strategy: [
      "Rebuild the service pages so they explain the offer without depending on a city.",
      "Keep location pages only where coverage, hours, or the offer truly change.",
      "Redirect or consolidate the rest into the relevant service.",
      "Define who updates location facts and how often.",
    ],
    implementation: [
      "Content and operations would list the facts that make a location distinct.",
      "Development would adjust the location template and internal links.",
      "A short style note would stop future city pages from being spun from a find-and-replace.",
      "AI search visibility work would use the same canonical service explanations rather than a separate set of pages.",
    ],
    measurement: [
      "The plan would watch whether the remaining location URLs stay indexed, whether duplicate city themes drop away, and whether service pages are the ones visible for non-local queries.",
      "Accuracy checks would matter as much as visibility: hours, coverage, and names should match public profiles.",
      "This sample does not invent call volume, rankings, or map-pack results.",
    ],
  },
  {
    slug: "advisory-explanatory-content",
    title: "Explanatory content for an advisory firm",
    summary:
      "A hypothetical professional-services firm deciding which questions deserve a public page and which should stay in sales conversations.",
    industry: "Professional services",
    serviceSlugs: [
      "content-strategy",
      "generative-engine-optimization",
      "on-page-seo",
    ],
    context: [
      "This is an illustrative example. The firm is imaginary. It advises organizations and wants a public site that explains its scope without overclaiming.",
      "Partners have published articles under their own names, but the service pages are short slogans.",
    ],
    challenge: [
      "Articles overlap and occasionally disagree.",
      "Service pages do not show who the work is for.",
      "There is pressure to publish more frequently rather than to fix the existing explanation.",
    ],
    strategy: [
      "Choose a small set of services and write pages a buyer can compare.",
      "Select questions the firm is qualified to answer in public.",
      "Make one URL the canonical explanation for each topic and update or retire the others.",
      "Link each article to a service only when the connection is genuine.",
    ],
    implementation: [
      "Partners would review facts and the boundaries of each service.",
      "Editors would merge overlapping articles and add clear caveats.",
      "The site would show review dates on pages that state changeable facts.",
      "Generative-search preparation would mean consistent sourcing, not a separate content brand.",
    ],
    measurement: [
      "The plan would follow impressions and clicks for the chosen questions, the share of topics with a single canonical URL, and whether sales still needs to correct the website.",
      "Quality review would ask if a careful reader can tell what the firm does and does not do.",
      "No testimonials, awards, or performance results are included, because this is a sample scenario.",
    ],
  },
];
