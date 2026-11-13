import type { CaseStudy } from "@/content/types";

export const caseStudyReportingPeriod = "August 2026 – November 2026";

export const caseStudyReportTitle =
  "SEO Performance & Growth Portfolio Report, August–November 2026 (labeled Q3–Q4 2026 in the document)";

const laterRecommendations = [
  "Video SEO and VideoObject schema, described as a way to pursue video rich results and visual-search demand.",
  "AI-driven content personalization, described as using search-intent data to tailor on-site content and internal paths.",
  "E-E-A-T work through author profiles, credentialed content, citations, and brand mentions.",
] as const;

export const caseStudyLaterRecommendations = laterRecommendations;

const imageSize = { width: 1024, height: 682 } as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "usarakhi",
    name: "UsaRakhi.com",
    websiteUrl: "https://www.usarakhi.com",
    summary:
      "A festive gifting website for Rakhi, Diwali, Bhai Dooj, and related combos. The August–November 2026 report covers hreflang, non-rakhi keywords, and technical work. Session counts were not included, so no growth rate is shown.",
    seoTitle: "UsaRakhi.com Case Study | Growth Agency",
    seoDescription:
      "UsaRakhi.com case study for August–November 2026: festive gifting pages, hreflang, and technical work. Session totals were not included, so no growth rate is shown.",
    image: {
      ...imageSize,
      src: "/images/case-studies/usarakhi.webp",
      alt: "UsaRakhi.com shown on a laptop and phone, with a Diwali and Bhai Dooj campaign, a rakhi, and an India and United States gift theme.",
    },
    introduction:
      "UsaRakhi.com is a featured website project for festive gifting. The supplied project image presents Rakhi, Diwali, and Bhai Dooj, with sweet, dry-fruit, chocolate, and pooja combos, and the line “Connecting Hearts Across Borders.” The SEO report for August–November 2026 describes seasonal demand capture, hreflang, and visibility beyond rakhi products.",
    overview: [
      "The project image shows a storefront for Diwali and Bhai Dooj, with navigation for Bhai Dooj combos, Diwali combos, sweet combos, dry-fruit combos, chocolate combos, pooja sets, and a location menu. The artwork pairs a rakhi with Indian and United States motifs.",
      "The report describes the SEO focus as seasonal demand, international targeting, and product lines that are not limited to rakhi. It refers to overseas gifting demand and regional pages. It does not name the regions or list the hreflang codes.",
    ],
    purpose:
      "The website presents festive gifts for purchase. The report describes the SEO work as capturing peak-season searches and extending visibility to non-rakhi products outside that peak.",
    objectives: [
      "Capture seasonal search demand around the gifting peaks named in the report.",
      "Use hreflang so the intended regional page is the one served.",
      "Extend keyword visibility beyond rakhi products. The report gives this as a way to reduce dependence on one seasonal peak. It does not report off-season revenue.",
    ],
    work: [
      {
        title: "hreflang architecture",
        detail:
          "The report says international targeting was implemented and validated, and that the status moved from “not optimized” to “successfully deployed.” It describes the aim as serving the right regional page and reducing cross-market conflicts. The hreflang values and the URLs involved are not listed.",
      },
      {
        title: "Non-rakhi keywords",
        detail:
          "The report says high-priority keywords for products other than rakhi were used to extend visibility beyond festival peaks. It describes that visibility as expanded. It does not list the keywords, positions, or search volumes.",
      },
      {
        title: "Technical SEO and Core Web Vitals",
        detail:
          "The report says crawl efficiency and page experience were improved for mobile-heavy gifting traffic. It does not include LCP, INP, CLS, or any other Core Web Vitals score.",
      },
      {
        title: "Category and landing-page content",
        detail:
          "The report says landing pages were refined to match purchase intent across product lines. It does not name the URLs or show the copy that changed.",
      },
    ],
    metrics: [],
    withheld: [
      "The report includes a growth percentage for organic sessions. Both the starting count and the later count are placeholders, and the report says placeholder fields should be verified against Search Console before distribution. The percentage is omitted because the counts behind it were not supplied.",
      "Non-rakhi keyword visibility is described as expanded. No query list, positions, or volumes were included.",
      "The report’s business-impact note connects the session figure to more efficient overseas demand and to off-season revenue potential. No revenue, orders, or session totals were included, so those outcomes are not stated as results.",
    ],
    findings: [
      {
        status: "Completed work",
        title: "Regional targeting is reported as deployed",
        detail:
          "hreflang is the one item with a before-and-after status in the report: not optimized, then successfully deployed. That is a deployment status, not a traffic result.",
      },
      {
        status: "Report observation",
        title: "Seasonal dependence is discussed, not measured",
        detail:
          "The report presents non-rakhi keywords as a way to carry demand outside the festival peak. It calls the resulting visibility expanded and does not supply a keyword set or an off-season comparison.",
      },
      {
        status: "Report observation",
        title: "The session growth rate cannot be checked from this document",
        detail:
          "A session growth rate is printed in the report’s growth column while the starting and current session cells were left blank. That rate is omitted here so an unverified placeholder is not treated as a result.",
      },
    ],
    relatedServices: [
      {
        href: "/services/technical-seo",
        label: "Technical SEO",
        description: "Related because the report describes hreflang, crawl efficiency, and page-experience work.",
      },
      {
        href: "/services/ecommerce-seo",
        label: "E-commerce SEO",
        description: "Related because the website is a gifting store and the report discusses product-line landing pages.",
      },
      {
        href: "/services/on-page-seo",
        label: "On-Page SEO",
        description: "Related because the report describes category and landing-page content matched to purchase intent.",
      },
    ],
  },
  {
    slug: "blossompot",
    name: "BlossomPot.com",
    websiteUrl: "https://www.blossompot.com",
    summary:
      "A gifting website for flowers, cakes, and occasion hampers, with United States delivery shown in the project image. The August–November 2026 report records a 16.79% homepage CTR and 4,020+ product snippet impressions.",
    seoTitle: "BlossomPot.com Case Study | Growth Agency",
    seoDescription:
      "BlossomPot.com case study for August–November 2026: US gifting pages, product snippets, a 16.79% homepage CTR, and 4,020+ product snippet impressions.",
    image: {
      ...imageSize,
      src: "/images/case-studies/blossompot.webp",
      alt: "BlossomPot.com shown on a laptop and phone beside pink roses and a gift box, with a flowers, cakes, and gifts campaign.",
    },
    introduction:
      "BlossomPot.com is a featured website project for flowers, cakes, and occasion gifts. The project image shows United States delivery and the line “Connecting Hearts Across Borders.” The August–November 2026 report describes geo-targeted “to USA” landing pages, product schema, and on-page titles.",
    overview: [
      "The project image shows a catalogue for flowers, bouquets, cakes, birthday gifts, anniversary gifts, Valentine’s gifts, hampers, combined gifts, and flower-and-cake combinations, plus a cities menu. A delivery control is set to the United States.",
      "The report frames the work as international SEO for US-intent gifting queries. It names flowers, bouquets, cakes, birthday, anniversary, Valentine’s, and hampers as the “to USA” categories that were rebuilt.",
    ],
    purpose:
      "The website presents gifts for delivery. The report describes the SEO work as matching US search intent on those occasion and product categories and earning product rich results.",
    objectives: [
      "Scale search visibility for gifting categories aimed at the United States.",
      "Align “to USA” landing pages with US search intent.",
      "Earn product rich results through structured data. The report does not include a separate defect list or a baseline audit.",
    ],
    work: [
      {
        title: "Geo-targeted landing pages",
        detail:
          "The report says “to USA” category pages were rebuilt for flowers, bouquets, cakes, birthday, anniversary, Valentine’s, and hampers, around US search intent.",
      },
      {
        title: "Product schema",
        detail:
          "The report says product structured data was deployed and describes it as the change that unlocked product snippets. It does not include the schema markup or the product URLs.",
      },
      {
        title: "Topical clusters",
        detail:
          "The report says occasion-based and product-based clusters were organized with internal linking. It does not include a map of those links.",
      },
      {
        title: "Titles and meta descriptions",
        detail:
          "The report says SERP titles and meta descriptions were rewritten to improve click-through on high-impression queries. It does not list the queries or the impression counts.",
      },
    ],
    metrics: [
      {
        label: "Homepage click-through rate",
        value: "16.79%",
        definition:
          "The homepage CTR reported for August–November 2026. The starting CTR was left as a placeholder, so this is the reported rate for the period, not a measured change. The report calls it above typical homepage CTR benchmarks and does not state the benchmark, the impression count, or the click count.",
      },
      {
        label: "Product snippet impressions",
        value: "4,020+",
        definition:
          "Product snippet impressions reported for the same period. The starting count was left as a placeholder, so this is not shown as growth. The report describes the figure as rich-result visibility for product pages and does not list the products or queries.",
      },
    ],
    withheld: [
      "Geo-targeted category visibility is described as expanded coverage for US-intent gifting queries. No queries, positions, or impression totals were included for that row.",
      "The report’s business-impact note says the homepage CTR shows that the brand and offer win the click in the US gifting market, and that product snippets put shoppers in front of the catalogue earlier. No traffic total, ranking list, orders, or revenue were included with that interpretation.",
      "A portfolio-wide traffic average and a portfolio-wide keyword-visibility average appear in the same report’s executive summary. The report says both should be verified against Search Console before distribution. They are not repeated here.",
    ],
    findings: [
      {
        status: "Completed work",
        title: "US category pages and product schema are the documented changes",
        detail:
          "The report ties the rebuilt “to USA” categories, product schema, topical clusters, and rewritten titles to US gifting queries and product snippets. Those are the activities it describes as done.",
      },
      {
        status: "Report observation",
        title: "Two figures are usable, and neither is a before-and-after result",
        detail:
          "16.79% and 4,020+ are the only BlossomPot numbers filled in. Both starting cells were placeholders. The figures describe the reporting period. They do not show how much the rate or the impression count moved.",
      },
      {
        status: "Report observation",
        title: "The market conclusion is the report’s interpretation",
        detail:
          "The report reads the homepage CTR as evidence of winning the click in the US gifting market. The document does not include the competitive set, the queries behind the rate, or commercial outcomes.",
      },
    ],
    relatedServices: [
      {
        href: "/services/ecommerce-seo",
        label: "E-commerce SEO",
        description: "Related because the report focuses on gifting category pages and product rich results.",
      },
      {
        href: "/services/on-page-seo",
        label: "On-Page SEO",
        description: "Related because the report describes rewritten titles, meta descriptions, and internal clusters.",
      },
      {
        href: "/services/technical-seo",
        label: "Technical SEO",
        description: "Related because the report describes product structured data on the catalogue.",
      },
    ],
  },
  {
    slug: "halloweenready",
    name: "HalloweenReady.com",
    websiteUrl: "https://www.halloweenready.com",
    summary:
      "A Halloween store for costumes, decorations, and party supplies, with United States delivery shown in the project image. The August–November 2026 report describes programmatic seasonal pages and schema. Traffic totals were not included, so no growth rate is shown.",
    seoTitle: "HalloweenReady.com Case Study | Growth Agency",
    seoDescription:
      "HalloweenReady.com case study for August–November 2026: programmatic seasonal pages and schema. Traffic totals were not included, so no growth rate is shown.",
    image: {
      ...imageSize,
      src: "/images/case-studies/halloweenready.webp",
      alt: "HalloweenReady.com shown on a laptop and phone, with a Halloween costumes and decorations campaign, pumpkins, and a haunted-house backdrop.",
    },
    introduction:
      "HalloweenReady.com is a featured website project for Halloween costumes, decorations, and party supplies. The project image shows United States delivery and a seasonal campaign. The August–November 2026 report describes programmatic pages for long-tail seasonal searches, early indexation, and structured data.",
    overview: [
      "The project image presents the site as a shop for costumes, decorations, and party supplies. Visible sections include hampers, home decorations, costumes, party supplies, toys and novelty, a Halloween guide, contact, and cities. The campaign line is “Get ready for Halloween.”",
      "The report describes the strategy as programmatic SEO for high-volume seasonal demand. It does not include a page count, a URL sample, or a country-by-country traffic split. The project image is the source for the United States delivery setting.",
    ],
    purpose:
      "The website sells seasonal Halloween products. The report describes the SEO work as covering long-tail seasonal queries with template-driven pages and getting those pages indexed before the demand peak.",
    objectives: [
      "Capture seasonal searches with a programmatic page framework.",
      "Index the pages ahead of the peak so they are available when demand rises.",
      "Keep a large template-driven set eligible for crawling and rich results. The report does not include crawl stats or a list of schema types.",
    ],
    work: [
      {
        title: "Programmatic page framework",
        detail:
          "The report says scalable templates were built for long-tail seasonal queries, with unique, intent-matched content. It describes the coverage as scaled and does not say how many pages were published.",
      },
      {
        title: "Early-season indexation",
        detail:
          "The report says pages were deployed and indexed ahead of the demand peak. It does not include index-coverage counts or the dates those pages were submitted.",
      },
      {
        title: "Schema and structured data",
        detail:
          "The report says markup was applied to strengthen SERP presentation and rich-result eligibility. It does not name the schema types or confirm that rich results were earned.",
      },
      {
        title: "Performance and crawl paths",
        detail:
          "The report says load times were kept fast and the architecture was kept clean across a large page set. It does not include speed scores, crawl stats, or the template rules.",
      },
    ],
    metrics: [],
    withheld: [
      "The report includes a growth percentage for organic traffic. Both the starting count and the later count are placeholders, and the report says placeholder fields should be verified against Search Console before distribution. The percentage is omitted.",
      "Seasonal keyword visibility is described as a strong peak-season presence, and programmatic coverage as scaled template-driven pages. No keywords, positions, or URL counts were included.",
      "The report interprets the traffic figure as a lower acquisition cost per visit. No cost, visit total, or traffic total was included, so that comparison is not shown.",
    ],
    findings: [
      {
        status: "Completed work",
        title: "The documented method is programmatic pages prepared before the peak",
        detail:
          "The report’s account of this website is a template system for long-tail seasonal queries, indexation ahead of demand, schema for rich-result eligibility, and crawl and performance work across that page set.",
      },
      {
        status: "Report observation",
        title: "Rich-result eligibility is not the same as rich results earned",
        detail:
          "Schema is described as strengthening eligibility and SERP presentation. The report does not include an example result, a schema type, or a count of rich results.",
      },
      {
        status: "Report observation",
        title: "The traffic growth rate cannot be checked from this document",
        detail:
          "A traffic growth rate is printed in the report’s growth column while both traffic cells were left blank. The acquisition-cost sentence depends on that rate and does not include a cost, so neither figure is published.",
      },
    ],
    relatedServices: [
      {
        href: "/services/ecommerce-seo",
        label: "E-commerce SEO",
        description: "Related because the website is a seasonal store and the report focuses on shopping queries.",
      },
      {
        href: "/services/technical-seo",
        label: "Technical SEO",
        description: "Related because the report describes indexation, crawl paths, structured data, and page speed.",
      },
      {
        href: "/services/content-strategy",
        label: "Content Strategy",
        description: "Related because the report describes intent-matched content on template-driven seasonal pages.",
      },
    ],
  },
  {
    slug: "spicycenter",
    name: "SpicyCenter.com",
    websiteUrl: "https://www.spicycenter.com",
    summary:
      "An Indian spices website with a catalogue, guides, and an enquiry path. The August–November 2026 report covers guide content, wholesale-intent searches, and a 50% click-through rate on an Asafoetida guide.",
    seoTitle: "SpicyCenter.com Case Study | Growth Agency",
    seoDescription:
      "SpicyCenter.com case study for August–November 2026: spice guides, wholesale-intent pages, and a 50% click-through rate on the Asafoetida guide.",
    image: {
      ...imageSize,
      src: "/images/case-studies/spicycenter.webp",
      alt: "SpicyCenter.com shown on a laptop and phone with bowls of Indian spices and the headline Authentic Indian Spices.",
    },
    introduction:
      "SpicyCenter.com is a featured website project for Indian spices and ingredients. The project image presents a catalogue, spice guides, and an enquiry path, with the country control set to the United States. The August–November 2026 report describes guide content, wholesale and bulk keywords, and internal links from guides to products.",
    overview: [
      "The project image headlines the site as “Authentic Indian Spices” and “From our farms to your kitchen,” with the line “Pure, natural, full of flavour.” Visible sections include a catalogue, an enquiry path, a spice guide, Indian spices, masalas, recipes, a journal, markets, the Middle East, food sourcing, guides, and about.",
      "The report describes the SEO focus as authority-led content for the spices and ingredients category, including informational guides and commercial searches from wholesale, bulk, and trade audiences. Those headlines are the website’s own presentation in the supplied image, not separate operating claims.",
    ],
    purpose:
      "The website presents spices for research and purchase. The report describes the SEO work as answering ingredient queries in depth and connecting those answers to product and category pages, including searches with wholesale and trade intent.",
    objectives: [
      "Build category authority with in-depth, query-matched guides. The Asafoetida guide is the example the report names.",
      "Target wholesale, bulk, and trade-intent searches.",
      "Move readers from educational pages to product and category pages. The report does not include lead or order counts for that path.",
    ],
    work: [
      {
        title: "Guide content",
        detail:
          "The report says in-depth guides were published to match informational queries and build category authority. Asafoetida is the guide it names. A full list of guides from the period was not included.",
      },
      {
        title: "Wholesale and trade keywords",
        detail:
          "The report says pages were mapped and optimized for wholesale, bulk, and trade-intent searches. It describes the rankings as dominant and the discovery of wholesale and bulk buyers as stronger. It does not list keywords or positions.",
      },
      {
        title: "Snippet-oriented on-page structure",
        detail:
          "The report says headings, concise answers, and metadata were structured for click-through. The only click-through rate it gives is for the Asafoetida guide.",
      },
      {
        title: "Links from guides to products",
        detail:
          "The report says educational content was internally linked to product and category pages so a reader can move toward a purchase. It does not include the link map or a conversion count.",
      },
    ],
    metrics: [
      {
        label: "Asafoetida guide click-through rate",
        value: "50%",
        definition:
          "The click-through rate reported for the Asafoetida guide during August–November 2026. It is not a site-wide CTR. The starting rate was a placeholder. The report does not include the query, impressions, or clicks, and it describes the figure as engagement on an informational query.",
      },
    ],
    withheld: [
      "B2B keyword rankings are described as dominant positions, and informational and commercial visibility as expanded. No keywords, positions, impressions, or volumes were included.",
      "The report infers higher lead quality and larger order potential from the B2B visibility. No leads, orders, or revenue were included, so those outcomes are not stated as results.",
    ],
    findings: [
      {
        status: "Completed work",
        title: "Guides are connected to commercial pages in the report’s account",
        detail:
          "The documented work is guide content, wholesale and trade targeting, on-page structure aimed at snippets, and internal links from guides to products and categories.",
      },
      {
        status: "Report observation",
        title: "The 50% rate belongs to one guide",
        detail:
          "The Asafoetida guide is the only URL with a reported click-through rate. Treating 50% as the performance of SpicyCenter.com would widen the figure past what the report measured.",
      },
      {
        status: "Report observation",
        title: "Wholesale visibility is described, not ranked in detail",
        detail:
          "“Dominant positions” and “stronger wholesale and bulk-buyer discovery” are the report’s words. Without the queries or positions, the page does not convert that language into a ranking claim. The inference about lead quality and order size is also unmeasured.",
      },
    ],
    relatedServices: [
      {
        href: "/services/content-strategy",
        label: "Content Strategy",
        description: "Related because the report describes in-depth guides as the authority-building work.",
      },
      {
        href: "/services/on-page-seo",
        label: "On-Page SEO",
        description: "Related because the report describes headings, answers, metadata, and internal links.",
      },
      {
        href: "/services/ecommerce-seo",
        label: "E-commerce SEO",
        description: "Related because the report connects guide content to product and category pages.",
      },
    ],
  },
];
