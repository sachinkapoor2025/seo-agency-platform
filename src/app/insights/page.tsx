import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroEntrance } from "@/components/hero-entrance";
import { InsightCard } from "@/components/insight-card";
import { ScrollReveal } from "@/components/scroll-reveal";
import { articles } from "@/content/insights";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const metadataBase = new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com");
const title = "SEO Insights, Digital Marketing Knowledge & Growth Strategies | Growth Agency";
const description =
  "Stay informed, discover new opportunities, and make smarter digital decisions with insights from Growth Agency.";
const artwork = {
  src: "/images/insights/seo-insights-knowledge-hub.webp",
  width: 1008,
  height: 854,
  alt: "Illustration of an open book, a laptop, search documents, an AI panel, and a growth chart.",
  background: "#faf4e9",
  scale: 0.88,
};

export const metadata: Metadata = {
  metadataBase,
  title: { absolute: title },
  description,
  alternates: { canonical: "/insights" },
  openGraph: {
    title,
    description,
    url: new URL("/insights", metadataBase).toString(),
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

const categories = [
  {
    title: "Search Engine Optimization (SEO)",
    text: "Understand the fundamentals and advanced practices of search engine optimization. Explore keyword research, search intent, on-page optimization, technical SEO, link building, and strategies for improving organic visibility.",
    action: "Explore SEO Insights",
    href: "#latest-articles",
  },
  {
    title: "Technical SEO",
    text: "Discover practical guidance on website crawling, indexing, site architecture, Core Web Vitals, website performance, structured data, and technical issues that can affect search visibility.",
    action: "Explore Technical SEO",
    href: "/insights/technical-foundations-for-retrieval",
  },
  {
    title: "On-Page SEO",
    text: "Learn how to improve page titles, meta descriptions, headings, internal links, content structure, keyword relevance, and user experience to make important website pages more useful and discoverable.",
    action: "Explore On-Page SEO",
    href: "/services/on-page-seo",
  },
  {
    title: "Content Strategy and Marketing",
    text: "Explore content planning, topic clusters, keyword mapping, audience research, search intent, content optimization, and strategies for creating valuable content that supports business goals.",
    action: "Explore Content Strategy",
    href: "/services/content-strategy",
  },
  {
    title: "E-commerce SEO",
    text: "Find practical insights on product page optimization, category page SEO, e-commerce website architecture, product discovery, Shopify SEO, and online store growth.",
    action: "Explore E-commerce SEO",
    href: "/insights/ecommerce-search-before-the-product-grid",
  },
  {
    title: "Local SEO",
    text: "Learn how to improve local search visibility through Google Business Profile optimization, local keyword research, location pages, business listings, customer reviews, and local content.",
    action: "Explore Local SEO",
    href: "/industries/local-multi-location",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    text: "Understand how answer-focused content, clear information architecture, useful FAQs, and direct responses can help your content become more accessible across answer-driven search experiences.",
    action: "Explore AEO Insights",
    href: "/insights/what-answer-engine-optimization-asks",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    text: "Discover strategies for improving brand discoverability across generative AI platforms through topical authority, entity clarity, useful content, and a consistent online presence.",
    action: "Explore GEO Insights",
    href: "/insights/planning-pages-for-generative-search",
  },
  {
    title: "AI Search Visibility",
    text: "Explore how AI-powered search is changing online discovery and what businesses can do to improve the clarity, accessibility, and visibility of their brand information.",
    action: "Explore AI Search Insights",
    href: "/insights/measuring-search-without-vanity-metrics",
  },
  {
    id: "website-development",
    title: "Website Design and Development",
    text: "Discover insights on website design, responsive development, user experience, website architecture, conversion-focused layouts, and building websites that support business growth.",
    action: "Explore Website Development Insights",
    href: "#website-development",
  },
];

const outcomes = [
  {
    title: "Understand Changing Search Behaviour",
    text: "Stay informed about how people discover information, evaluate businesses, and interact with search platforms.",
  },
  {
    title: "Identify SEO Opportunities",
    text: "Understand keyword opportunities, competitor gaps, technical improvements, and content areas that can strengthen your website.",
  },
  {
    title: "Improve Website Performance",
    text: "Discover ways to improve website structure, usability, content quality, and technical foundations.",
  },
  {
    title: "Build Better Content Strategies",
    text: "Learn how to create relevant, useful, and search-focused content that addresses your audience's needs.",
  },
  {
    title: "Prepare for AI-Powered Search",
    text: "Understand AEO, GEO, and AI search visibility and how these developments connect with your broader SEO strategy.",
  },
  {
    title: "Make Informed Marketing Decisions",
    text: "Use practical insights and strategic guidance to prioritize improvements that align with your business objectives.",
  },
];

const industries = [
  { label: "E-commerce and online retail businesses", href: "/industries/ecommerce" },
  { label: "SaaS and technology companies", href: "/industries/saas-technology" },
  { label: "Professional service providers", href: "/industries/professional-services" },
  { label: "Healthcare organizations and clinics", href: "/industries/healthcare" },
  { label: "Educational institutions and EdTech businesses", href: "/industries/education" },
  { label: "Local and multi-location businesses", href: "/industries/local-multi-location" },
  { label: "Small and growing businesses" },
  { label: "B2B and service-based companies" },
];

const faqs = [
  {
    question: "What are SEO insights?",
    answer:
      "SEO insights are practical findings, recommendations, and information that help businesses understand search performance, identify optimization opportunities, and improve their online visibility.",
  },
  {
    question: "What topics are covered in the Growth Agency Insights section?",
    answer:
      "Our insights cover SEO, technical SEO, on-page SEO, content strategy, e-commerce SEO, local SEO, website design and development, AEO, GEO, AI search visibility, and broader digital marketing topics.",
  },
  {
    question: "How can SEO insights help my business?",
    answer:
      "SEO insights can help you understand how customers search, identify website improvement opportunities, develop relevant content, and make better decisions about your organic search strategy.",
  },
  {
    question: "Are these insights useful for beginners?",
    answer:
      "Yes. Our content is intended to help readers understand digital marketing concepts, from fundamental SEO practices to more advanced website optimization and AI search strategies.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO focuses on improving visibility in traditional search results. AEO focuses on making useful information accessible in direct-answer experiences, while GEO focuses on how brands and their information appear in generative AI responses. These approaches overlap and can work together within a broader search visibility strategy.",
  },
  {
    question: "How often should I review my website's SEO strategy?",
    answer:
      "SEO should be reviewed regularly. The appropriate frequency depends on your website, industry, competition, business priorities, and changes in search behaviour. Technical issues, content accuracy, keyword performance, and important landing pages should receive ongoing attention.",
  },
  {
    question: "Can I use these insights to improve my website?",
    answer:
      "Yes. Many of our resources are intended to provide practical guidance that businesses and marketing teams can use when planning website improvements, content updates, and SEO activities.",
  },
  {
    question: "Does Growth Agency provide SEO and digital marketing services?",
    answer:
      "Growth Agency offers services across technical SEO, on-page SEO, content strategy, e-commerce SEO, Answer Engine Optimization, Generative Engine Optimization, and AI search visibility. You can explore the relevant service pages to understand the available solutions.",
  },
];

export default function InsightsPage() {
  const latest = [...articles].sort((left, right) => right.publishedOn.localeCompare(left.publishedOn));

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
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Insights" }]} />
            </HeroEntrance>
            <div className="flex flex-col gap-6">
              <HeroEntrance delay={0.06} duration={0.56} distance={18}>
                <h1 id="hero-heading" className={ui.display}>
                  SEO Insights, Digital Marketing Knowledge & Growth Strategies
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.14} duration={0.52} distance={14}>
                <div className="grid gap-4">
                  <p className={cx(ui.bodyLg, "text-ink")}>Practical Insights to Build a Stronger Digital Presence</p>
                  <p className={cx(ui.body, "text-muted")}>
                    Explore practical guidance on SEO, content strategy, e-commerce, local search, and AI-powered discovery to improve your visibility and make smarter digital decisions.
                  </p>
                </div>
              </HeroEntrance>
              <HeroEntrance delay={0.22} duration={0.52} distance={12}>
                <ButtonLink href="#latest-articles" className="w-full sm:w-auto">
                  Explore Latest Insights
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

      <section aria-labelledby="categories-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="categories-heading" className={ui.h2}>
                Explore Insights Across Digital Marketing and SEO
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Digital marketing continues to evolve. Search behaviour changes, website technologies advance, and businesses need strategies that adapt to new opportunities.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our insights cover important areas of digital growth, helping business owners, marketers, founders, and website professionals understand what matters and how to apply it.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2">
              {categories.map((item, index) => (
                <li key={item.title} id={item.id} className="scroll-mt-24">
                  <Link
                    href={item.href}
                    className="flex h-full min-w-0 flex-col border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
                  >
                    <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                    <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                    <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                    <p className={cx("mt-5 text-sm font-semibold", ui.textLink)}>{item.action}</p>
                  </Link>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section id="latest-articles" aria-labelledby="latest-heading" className="scroll-mt-24 border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="latest-heading" className={ui.h2}>
                Latest Insights and Articles
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Explore our latest articles, guides, and resources covering search engine optimization, digital marketing, website development, and emerging search technologies.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Whether you are looking for practical SEO tips, technical guidance, content ideas, or new approaches to digital growth, our articles are designed to help you make informed decisions.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                The articles below are sample explanations for this website. They are not independently verified research or client evidence.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="#article-list">Read Our Latest Articles</ButtonLink>
            </div>
            <ul id="article-list" className="scroll-mt-24 mt-10 grid gap-4 md:grid-cols-2">
              {latest.map((article) => (
                <li key={article.slug}>
                  <InsightCard article={article} />
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="learn-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="learn-heading" className={ui.h2}>
                Learn. Optimize. Grow.
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We believe useful digital knowledge should be practical, understandable, and connected to real business challenges.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Our insights are designed to help you:</p>
            </div>
            <ul className="mt-10 grid gap-4 md:grid-cols-2">
              {outcomes.map((item) => (
                <li key={item.title} className="min-w-0 border border-line bg-surface p-5 sm:p-6">
                  <h3 className={ui.h3}>{item.title}</h3>
                  <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="industries-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="industries-heading" className={ui.h2}>
                Insights for Businesses Across Industries
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Different industries have different audiences, search behaviours, and digital challenges. Our resources explore strategies that can be adapted to businesses across multiple sectors.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Explore insights relevant to:</p>
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
                Our content also considers businesses targeting international audiences across the USA, UK, Australia, Canada, and Europe.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="landscape-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="landscape-heading" className={ui.h2}>
                Stay Ahead of the Changing Search Landscape
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Search is no longer limited to traditional search engine results pages. People increasingly interact with featured answers, AI-generated summaries, conversational search experiences, and other discovery platforms.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Businesses need a strong digital foundation that supports visibility across these evolving experiences.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                At Growth Agency, we explore the relationship between traditional SEO, Answer Engine Optimization, Generative Engine Optimization, and AI search visibility.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our goal is to make complex digital marketing concepts easier to understand and turn useful knowledge into practical strategies.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <h2 id="faq-heading" className={cx(ui.h2, "max-w-3xl")}>
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="consultation-heading" className="border-t border-line bg-inverse text-on-inverse">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-center">
            <div>
              <h2 id="consultation-heading" className={ui.h2}>
                Have a Digital Growth Challenge?
              </h2>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                The right strategy starts with understanding the challenge.
              </p>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                Explore our insights to learn more about SEO, website optimization, content marketing, and AI search visibility. If you need support applying these strategies to your business, our team can help you identify the right opportunities.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <ButtonLink href="/services" className="w-full sm:w-auto">
                Explore Our Services
              </ButtonLink>
              <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
                Contact Growth Agency
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
