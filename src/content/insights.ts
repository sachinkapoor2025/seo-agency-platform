import type { Article } from "@/content/types";

const articlesWithoutTime: Array<Omit<Article, "readingTime">> = [
  {
    slug: "what-answer-engine-optimization-asks",
    title: "What answer engine optimization asks of a website",
    excerpt:
      "A sample explanation of AEO: choose a real question, answer it plainly, and keep the page worth citing.",
    category: "AEO",
    publishedOn: "2026-03-12",
    introduction: [
      "This is sample article content for the Growth Agency website POC. It explains a working definition of answer engine optimization. It is not a research study and it does not report original data.",
      "Answer engine optimization, or AEO, is the habit of building a page around a question someone is actually trying to resolve. The page should be useful if a person reads it in full, and clear if a search or answer interface extracts part of it.",
    ],
    sections: [
      {
        heading: "Start with the question, not the format",
        paragraphs: [
          "A page aimed at an answer interface still needs a reader. The first decision is which question the organization is qualified to answer, and whether that question belongs on an existing URL.",
          "Formatting a weak page as a list does not make it an answer. If the organization cannot state the response in a few precise sentences, the topic is not ready.",
        ],
      },
      {
        heading: "Put the response where it can be found",
        paragraphs: [
          "The direct response should appear before the background. Headings can mark the question, the answer, the exceptions, and the next step. That structure helps a person scan and gives a retrieval system a cleaner passage to use.",
          "Supporting detail still matters. Definitions, constraints, and links to the related service keep the short answer from becoming a slogan.",
        ],
      },
      {
        heading: "Do not promise the interface",
        paragraphs: [
          "Search and answer interfaces change what they show. A durable AEO practice improves the page. It does not guarantee a particular rich result, citation, or placement.",
          "When several pages answer the same question, choose one and point the others to it. Consistency is more useful than coverage for its own sake.",
        ],
      },
    ],
    related: [
      "planning-pages-for-generative-search",
      "measuring-search-without-vanity-metrics",
    ],
  },
  {
    slug: "technical-foundations-for-retrieval",
    title: "Technical foundations that make content easier to retrieve",
    excerpt:
      "A sample note on why crawl access, templates, and internal links still matter when the interface looks new.",
    category: "Technical SEO",
    publishedOn: "2026-05-07",
    introduction: [
      "This sample article describes technical conditions that help a page be retrieved. It is explanatory material for the POC, not an audit of a real website and not a set of benchmark results.",
      "AI-mediated search still depends on pages that can be fetched and understood. A sophisticated content plan cannot compensate for templates that block crawling, duplicate themselves, or hide the main point in a script that never renders useful text.",
    ],
    sections: [
      {
        heading: "Access comes before interpretation",
        paragraphs: [
          "If a crawler cannot reach a URL, or the URL is a duplicate of a stronger one, the wording on the page is secondary. Indexation rules should be intentional for every template that creates many URLs.",
          "International sites need extra care. A shared template can emit the wrong canonical, language, or currency hint in one market and look fine in another.",
        ],
      },
      {
        heading: "Templates are the unit of work",
        paragraphs: [
          "Fixing a single URL rarely changes a catalog or a documentation set. The useful technical question is how the template builds titles, links, and indexation signals for every page of that type.",
          "Internal links show which pages the site itself treats as important. An orphaned explanation will struggle in any search interface.",
        ],
      },
      {
        heading: "Keep the main content in the response",
        paragraphs: [
          "The primary explanation should be present as text, not only as an image or a control that never resolves into content. That is a long-standing technical and editorial requirement.",
          "None of this guarantees inclusion in an AI answer. It removes avoidable reasons for a page to be missed.",
        ],
      },
    ],
    related: [
      "what-answer-engine-optimization-asks",
      "ecommerce-search-before-the-product-grid",
    ],
  },
  {
    slug: "planning-pages-for-generative-search",
    title: "Planning pages for generative search without chasing myths",
    excerpt:
      "A sample briefing on GEO: consistent sources, clear limits, and no promise of being quoted.",
    category: "GEO",
    publishedOn: "2026-07-16",
    introduction: [
      "This is sample content. It outlines a cautious way to think about generative engine optimization. It does not claim to measure how any model selects sources.",
      "Generative engine optimization, or GEO, is easy to mythologize. In practice it asks whether the site has a clear, consistent, crawlable source for the topics it wants to be associated with.",
    ],
    sections: [
      {
        heading: "One explanation should win",
        paragraphs: [
          "If three pages describe the same offer in three ways, a generative system has no stable source and a reader does not either. Choose a canonical explanation and retire the rest, or give each page a distinct job.",
          "Facts that change, such as pricing structures or eligibility, should have an owner and a visible reason to be trusted. An undated claim is a weak source.",
        ],
      },
      {
        heading: "Separate fact, instruction, and opinion",
        paragraphs: [
          "A page can include all three, but they should be distinguishable. Instructions that sound like universal facts create risk, especially in healthcare, finance, and professional advice.",
          "Caveats are part of quality. A shorter page that states its limit is a better source than a confident page that overreaches.",
        ],
      },
      {
        heading: "Mentions are not a strategy",
        paragraphs: [
          "Screenshots of a chat tool are anecdotes. They can prompt a review of the site. They are not a measurement program and not evidence that a tactic works.",
          "The planning output is still a URL map, an editorial standard, and technical access. Generative search does not replace that work.",
        ],
      },
    ],
    related: [
      "what-answer-engine-optimization-asks",
      "measuring-search-without-vanity-metrics",
    ],
  },
  {
    slug: "ecommerce-search-before-the-product-grid",
    title: "E-commerce search that starts before the product grid",
    excerpt:
      "A sample look at catalog SEO: which URLs deserve to exist, and what a category page is for.",
    category: "SEO",
    publishedOn: "2026-08-28",
    introduction: [
      "This sample article discusses e-commerce search planning. It uses a general catalog scenario and does not describe a real retailer or sales outcome.",
      "Teams often start by writing unique text for every product. The earlier question is which URLs should exist in the index at all, and which pages help a person decide.",
    ],
    sections: [
      {
        heading: "Filters are not all pages",
        paragraphs: [
          "A filter that creates a genuinely distinct set, such as a durable category shoppers already understand, may deserve a page. A filter that only sorts the same products usually does not.",
          "Those rules should be written down. Otherwise every merchandising experiment becomes an indexation accident.",
        ],
      },
      {
        heading: "Category pages have a job",
        paragraphs: [
          "A category page can explain how the range is organized and which product type fits which need. A grid alone asks the shopper to invent that logic.",
          "The copy can stay short. It should be specific to the category, and it should not be repeated with the name swapped.",
        ],
      },
      {
        heading: "Markets are not a duplicate button",
        paragraphs: [
          "A country site that changes the currency symbol but not delivery, tax, or range will mislead both shoppers and search engines. Market pages need market facts.",
          "Product descriptions inherited from a supplier may also be shared across the web. They are a starting point, not a finished search asset.",
        ],
      },
    ],
    related: [
      "technical-foundations-for-retrieval",
      "measuring-search-without-vanity-metrics",
    ],
  },
  {
    slug: "measuring-search-without-vanity-metrics",
    title: "How to talk about search measurement without vanity metrics",
    excerpt:
      "A sample guide to choosing a few measures that can inform a decision, and to saying what they cannot prove.",
    category: "AI search visibility",
    publishedOn: "2026-10-02",
    introduction: [
      "This is sample guidance for the POC. It recommends a way to discuss measurement. It does not publish benchmarks, industry averages, or case results.",
      "Search reporting goes wrong when a number is asked to prove more than it can. A useful measure is one a team can define, collect, and connect to a decision.",
    ],
    sections: [
      {
        heading: "Name the decision first",
        paragraphs: [
          "Before choosing a dashboard, name the decision the work is meant to inform. Examples include which template to fix, which questions to keep, or whether a country site should stay separate.",
          "If a metric cannot change that decision, it can stay out of the primary report.",
        ],
      },
      {
        heading: "Prefer a small set",
        paragraphs: [
          "A practical set might include index coverage of the intended URLs, visibility for a defined query list, and a quality check on whether the page answers the question. Some commercial metrics can sit beside those, with a note that search is not the only influence.",
          "A screenshot from a generative tool can be an observation. It should be labeled as one, and it should not be turned into a score without a method.",
        ],
      },
      {
        heading: "State the limit in the same breath",
        paragraphs: [
          "Impressions are not revenue. A citation in an answer interface is not a customer. Rank movement over a short window is not a verdict on a strategy.",
          "Transparent measurement says this out loud. That honesty makes the next planning cycle easier to trust.",
        ],
      },
    ],
    related: [
      "planning-pages-for-generative-search",
      "technical-foundations-for-retrieval",
    ],
  },
];

function countReadingTime(article: Omit<Article, "readingTime">) {
  const text = [
    article.title,
    article.introduction.join(" "),
    ...article.sections.flatMap((section) => [
      section.heading,
      section.paragraphs.join(" "),
    ]),
  ].join(" ");
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export const articles: Article[] = articlesWithoutTime.map((article) => ({
  ...article,
  readingTime: countReadingTime(article),
}));
