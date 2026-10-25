export const site = {
  name: "Growth Agency",
  title: "Growth Agency | International SEO and AI Search Visibility",
  description:
    "Growth Agency is an international SEO and AI search visibility practice for organizations that need a clear presence in classic search, answer engines, and generative search. Priority markets include India, the United States, and the United Kingdom.",
  positioning:
    "International SEO and AI search visibility for teams that want a careful, evidence-led presence in India, the United States, and the United Kingdom.",
} as const;

export const consultationCountries = [
  { value: "india", label: "India" },
  { value: "united-states", label: "United States" },
  { value: "united-kingdom", label: "United Kingdom" },
  { value: "other", label: "Another country" },
] as const;

export const principles = [
  {
    title: "Evidence-led strategy",
    description:
      "Recommendations start from the site, the queries, and the markets that matter. Volume of activity is not treated as progress.",
  },
  {
    title: "Sustainable growth",
    description:
      "The work favors pages, systems, and content operations that a team can maintain after the first release.",
  },
  {
    title: "Technical quality",
    description:
      "Search visibility depends on a site that can be crawled, rendered, understood, and maintained. Technical quality is part of the strategy, not a separate cleanup.",
  },
  {
    title: "Transparent measurement",
    description:
      "Measurement is explained in plain language: what is being watched, what it can and cannot say, and how decisions will use it.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Discover",
    description:
      "Clarify the commercial goal, the priority markets, and the current state of the site, content, and search presence.",
  },
  {
    step: "02",
    title: "Strategize",
    description:
      "Choose the technical, on-page, content, and visibility work that fits the goal. Leave out activity that cannot be justified.",
  },
  {
    step: "03",
    title: "Execute",
    description:
      "Implement with the people who own the website, content, and product. Changes are specified clearly enough to be reviewed.",
  },
  {
    step: "04",
    title: "Improve",
    description:
      "Review what changed, what remains uncertain, and what should happen in the next cycle. No cycle is treated as a final guarantee.",
  },
] as const;
