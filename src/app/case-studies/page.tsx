import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { ScrollReveal } from "@/components/scroll-reveal";
import { caseStudies } from "@/content/case-studies";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const metadataBase = new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com");
const title = "SEO Case Studies & Digital Growth Projects | Growth Agency";
const description =
  "Explore how strategic SEO, website optimization, content marketing, and digital growth solutions can help businesses strengthen their online presence.";
const artwork = {
  src: "/images/case-studies/case-studies-measurable-growth.webp",
  width: 1032,
  height: 762,
  alt: "Illustration of a laptop growth dashboard connected to a storefront, website, briefcase, map, and performance charts.",
  background: "#f9f3e9",
  scale: 0.88,
};

export const metadata: Metadata = {
  metadataBase,
  title: { absolute: title },
  description,
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title,
    description,
    url: new URL("/case-studies", metadataBase).toString(),
    siteName: "Growth Agency",
    type: "website",
    images: [{ url: artwork.src, width: artwork.width, height: artwork.height, alt: artwork.alt }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [artwork.src],
  },
};

const workAreas = [
  {
    title: "Search Engine Optimization (SEO)",
    text: "Building a stronger organic search foundation through technical improvements, on-page optimization, keyword strategy, content development, and search visibility planning.",
  },
  {
    title: "Website Design and Development",
    text: "Creating user-focused website experiences with clear navigation, responsive layouts, structured content, and conversion-oriented design.",
  },
  {
    title: "E-commerce SEO",
    text: "Improving product and category discoverability, website architecture, technical performance, and shopping-related search experiences.",
  },
  {
    title: "Local SEO",
    text: "Helping businesses strengthen their local online presence through location pages, business information optimization, local content, and relevant search strategies.",
  },
  {
    title: "Content Strategy",
    text: "Developing useful content frameworks based on audience needs, search intent, keyword opportunities, and topical relevance.",
  },
  {
    title: "AI Search Optimization",
    text: "Preparing websites and brand information for evolving search experiences through Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and AI search visibility strategies.",
  },
];

const projectCategories = [
  {
    id: "seo-projects",
    title: "SEO and Organic Search Projects",
    text: "Explore projects involving technical SEO, on-page optimization, keyword research, content improvements, and organic search strategy.",
    action: "Explore SEO Projects",
    href: "#illustrative-examples",
  },
  {
    title: "E-commerce Website and SEO Projects",
    text: "Discover work related to e-commerce website optimization, product discovery, category page improvements, and search-focused shopping experiences.",
    action: "Explore E-commerce Projects",
    href: "/case-studies/international-product-catalogue",
  },
  {
    title: "Local SEO and Multi-Location Projects",
    text: "Explore strategies designed to improve local search presence, location page quality, business information consistency, and visibility across multiple markets.",
    action: "Explore Local SEO Projects",
    href: "/case-studies/multi-location-service-business",
  },
  {
    id: "website-projects",
    title: "Website Design and Development Projects",
    text: "See how website structure, user experience, responsive design, and development considerations support stronger digital experiences.",
    action: "Explore Website Projects",
    href: "#website-projects",
  },
  {
    title: "Content and AI Search Projects",
    text: "Explore content strategy, answer-focused content, entity optimization, and approaches to improving brand discoverability across AI-powered search experiences.",
    action: "Explore Content and AI Search Projects",
    href: "/case-studies/b2b-software-documentation",
  },
];

const steps = [
  {
    title: "Understanding the Business Challenge",
    text: "We begin by understanding the business model, target audience, website condition, competition, and objectives. This helps identify the challenges that matter most.",
  },
  {
    title: "Research and Opportunity Analysis",
    text: "We evaluate relevant search opportunities, audience behaviour, competitors, website performance, and areas where improvements may create meaningful value.",
  },
  {
    title: "Building a Tailored Strategy",
    text: "Based on the findings, we develop a practical strategy aligned with the project's priorities. This may include technical SEO, website improvements, content planning, local optimization, or AI search readiness.",
  },
  {
    title: "Execution and Optimization",
    text: "We work through the agreed scope, focusing on relevant improvements and maintaining alignment between strategy, implementation, and business objectives.",
  },
  {
    title: "Performance Measurement",
    text: "We review suitable performance indicators based on the project goals. These may include organic clicks, impressions, search visibility, qualified enquiries, website engagement, or conversions.",
  },
  {
    title: "Continuous Improvement",
    text: "Digital growth requires ongoing evaluation. We use performance insights to identify new opportunities, refine existing strategies, and guide future improvements.",
  },
];

const documentation = [
  {
    title: "Business Context",
    text: "Understand the business, industry, target audience, and digital environment behind the project.",
  },
  {
    title: "Initial Challenges",
    text: "Identify the website, search visibility, content, technical, or customer experience challenges that needed attention.",
  },
  {
    title: "Strategic Approach",
    text: "Understand why particular SEO, website, or digital marketing activities were selected for the project.",
  },
  {
    title: "Work Delivered",
    text: "Review the key activities, improvements, and deliverables included within the project scope.",
  },
  {
    title: "Performance Insights",
    text: "Explore the relevant measurements and observations used to assess project progress.",
  },
  {
    title: "Key Learnings",
    text: "Understand the insights and opportunities that can inform similar digital growth initiatives.",
  },
];

const industries = [
  { label: "E-commerce and online retail", href: "/industries/ecommerce" },
  { label: "SaaS and technology", href: "/industries/saas-technology" },
  { label: "Professional services", href: "/industries/professional-services" },
  { label: "Healthcare and clinics", href: "/industries/healthcare" },
  { label: "Education and EdTech", href: "/industries/education" },
  { label: "Local and multi-location businesses", href: "/industries/local-multi-location" },
  { label: "Service-based businesses" },
];

const measurements = [
  "Organic search clicks and impressions",
  "Search visibility for relevant keywords",
  "Organic website traffic",
  "Landing page performance",
  "Technical SEO improvements",
  "Local search performance",
  "Qualified enquiries and conversions",
  "E-commerce performance indicators",
  "Website engagement and user experience",
];

const exampleOrder = [
  "international-product-catalogue",
  "b2b-software-documentation",
  "multi-location-service-business",
  "advisory-explanatory-content",
];

export default function CaseStudiesPage() {
  const examples = exampleOrder.map((slug) => {
    const study = caseStudies.find((item) => item.slug === slug);
    if (!study) throw new Error(`Missing case study: ${slug}`);
    return study;
  });

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="service-hero relative border-b border-line"
        style={{
          backgroundColor: artwork.background,
          ["--art-w" as string]: artwork.width,
          ["--art-h" as string]: artwork.height,
          ["--art-scale" as string]: artwork.scale,
        }}
      >
        <Container className="service-hero-copy relative z-10 pt-5">
          <div className="max-w-xl lg:max-w-[32rem]">
            <HeroEntrance duration={0.5} distance={14}>
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Case Studies" }]} />
            </HeroEntrance>
            <div className="flex flex-col gap-6">
              <HeroEntrance delay={0.06} duration={0.56} distance={18}>
                <h1 id="hero-heading" className={ui.display}>
                  SEO Case Studies & Digital Growth Projects
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.14} duration={0.52} distance={14}>
                <div className="grid gap-4">
                  <p className={cx(ui.bodyLg, "text-ink")}>
                    Real Strategies. Meaningful Work. A Smarter Approach to Digital Growth.
                  </p>
                  <p className={cx(ui.body, "text-muted")}>
                    Discover how our SEO, website, and content strategies address business challenges, strengthen search visibility, and create better digital experiences.
                  </p>
                  <p className={cx(ui.body, "text-muted")}>
                    Every project starts with your goals, audience, and challenges. We build tailored strategies to support meaningful digital growth.
                  </p>
                </div>
              </HeroEntrance>
              <HeroEntrance delay={0.22} duration={0.52} distance={12}>
                <ButtonLink href="#projects" className="w-full sm:w-auto">
                  Explore Our Work
                </ButtonLink>
              </HeroEntrance>
            </div>
          </div>
        </Container>
        <Image
          src={artwork.src}
          alt={artwork.alt}
          width={artwork.width}
          height={artwork.height}
          priority
          unoptimized
          className="service-hero-art pointer-events-none mx-auto mt-4 mb-6 h-auto w-auto max-h-[15.5rem] max-w-[calc(100%-1.5rem)] object-contain select-none sm:max-h-[20rem]"
        />
      </section>

      <section aria-labelledby="work-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="work-heading" className={ui.h2}>
                Our Work Across SEO and Digital Growth
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Every business has different goals, audiences, and online challenges. That is why we approach every project with a strategy shaped around its specific requirements.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Our work covers a range of digital growth areas, including:</p>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {workAreas.map((item) => (
                <li key={item.title} className="min-w-0 border border-line bg-surface p-5 sm:p-6">
                  <h3 className={ui.h3}>{item.title}</h3>
                  <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-24 border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="projects-heading" className={ui.h2}>
                Explore Our Digital Growth Projects
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our project portfolio is organized around the challenges businesses want to solve and the services that support their objectives.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Explore the relevant project details to understand the business context, strategic approach, work completed, and documented outcomes.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 lg:grid-cols-2">
              {projectCategories.map((item, index) => (
                <li key={item.title} id={item.id} className={cx("scroll-mt-24", index === projectCategories.length - 1 && "lg:col-span-2")}>
                  <Link
                    href={item.href}
                    className="flex h-full min-w-0 flex-col border border-line bg-background p-6 transition-colors duration-150 hover:border-accent sm:p-8"
                  >
                    <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                    <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                    <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                    <p className={cx("mt-5 text-sm font-semibold", ui.textLink)}>{item.action}</p>
                  </Link>
                </li>
              ))}
            </ol>
            <div id="illustrative-examples" className="scroll-mt-24 mt-10 max-w-3xl border-t border-line pt-8">
              <h3 className={ui.h3}>Illustrative examples</h3>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                These pages are illustrative examples, not verified client projects. They do not report rankings, traffic, leads, or revenue.
              </p>
              <ul className="mt-4 grid gap-2.5">
                {examples.map((study) => (
                  <li key={study.slug}>
                    <Link href={`/case-studies/${study.slug}`} className={ui.textLink}>
                      {study.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section id="approach" aria-labelledby="approach-heading" className="scroll-mt-24 border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="approach-heading" className={ui.h2}>
                How We Approach Every Project
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                A successful digital project needs more than isolated tasks. It requires a clear understanding of the business, a well-planned strategy, thoughtful execution, and continuous evaluation.
              </p>
            </div>
            <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, index) => (
                <li key={step.title} className="min-w-0 border-t border-line pt-5">
                  <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className={cx(ui.h3, "mt-3")}>{step.title}</h3>
                  <p className={cx(ui.body, "mt-4 text-muted")}>{step.text}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="documentation-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="documentation-heading" className={ui.h2}>
                What Makes a Strong Digital Growth Project?
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We believe useful project documentation should explain more than the final outcome. It should help readers understand the problem, the decisions behind the strategy, and the work involved.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                That is why our case study approach focuses on the following elements:
              </p>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {documentation.map((item) => (
                <li key={item.title} className="min-w-0 border border-line bg-background p-5 sm:p-6">
                  <h3 className={ui.h3}>{item.title}</h3>
                  <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="industries-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="industries-heading" className={ui.h2}>
                Industries and Markets We Support
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Different industries require different approaches to digital growth. Our strategies can be adapted to the needs of businesses operating across a range of sectors.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Our industry focus includes:</p>
              <ul className="mt-4 grid gap-2.5">
                {industries.map((item) => (
                  <li key={item.label} className={cx(ui.body, "grid grid-cols-[0.7rem_minmax(0,1fr)] gap-3 text-ink")}>
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    {item.href ? (
                      <Link href={item.href} className={ui.textLink}>
                        {item.label}
                      </Link>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
              <p className={cx(ui.body, "mt-6 text-muted")}>
                We also develop international search strategies for businesses targeting customers across the USA, UK, Australia, Canada, and European markets.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our approach considers local search behaviour, competition, audience expectations, and the requirements of each target market.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="results-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="results-heading" className={ui.h2}>
                Our Approach to Measurable Results
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We believe project performance should be evaluated using relevant data rather than unsupported claims.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Depending on the project, performance measurement may include:</p>
              <ul className="mt-4 grid gap-2.5">
                {measurements.map((item) => (
                  <li key={item} className={cx(ui.body, "grid grid-cols-[0.7rem_minmax(0,1fr)] gap-3 text-ink")}>
                    <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className={cx(ui.body, "mt-6 text-muted")}>
                Where performance figures are published, we aim to provide the reporting source, comparison period, starting point, and relevant project context.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Actual outcomes depend on factors such as the website&apos;s starting condition, competition, market demand, implementation, and external changes. No individual project result should be treated as a guaranteed outcome for another business.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="consultation-heading" className="border-t border-line bg-inverse text-on-inverse">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-center">
            <div>
              <h2 id="consultation-heading" className={ui.h2}>
                Looking for a Strategy That Fits Your Business?
              </h2>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                Your business deserves a digital strategy built around its own goals, audience, and market opportunities.
              </p>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                Whether you need stronger organic visibility, an optimized e-commerce website, better local search performance, or a more effective digital presence, Growth Agency can help you identify the right areas to focus on.
              </p>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                Let&apos;s understand your challenges and explore how the right combination of SEO, website optimization, content strategy, and AI search visibility can support your next stage of growth.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Discuss Your Project
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Our Services
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
