import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroEntrance } from "@/components/hero-entrance";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SectionHeading } from "@/components/section-heading";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const heroImage = "/images/seo-for-the-ai-powered-era.webp";
const heroArtwork = "/images/seo-for-the-ai-powered-era-hero.webp";

const pageDescription =
  "International SEO for the USA, UK, Australia, Canada, and Europe. Growth Agency improves discoverability across search engines and AI platforms.";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com"),
  title: {
    absolute: "International SEO Services That Drive Sustainable Online Growth | Growth Agency",
  },
  description: pageDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: "International SEO Services That Drive Sustainable Online Growth | Growth Agency",
    description: pageDescription,
    url: "https://dev.d1ffcl0phwxd2e.amplifyapp.com/",
    siteName: "Growth Agency",
    type: "website",
    images: [
      {
        url: heroImage,
        width: 1672,
        height: 941,
        alt: "Illustration of a laptop, globe, and rising search chart representing international SEO.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "International SEO Services That Drive Sustainable Online Growth | Growth Agency",
    description: pageDescription,
    images: [heroImage],
  },
};

const heroLead =
  "Grow your business with a strategic approach to search engine optimization and AI-powered search visibility. Growth Agency helps businesses strengthen their online presence, attract relevant audiences, and improve their discoverability across traditional search engines and emerging AI platforms.";

const presenceParagraphs = [
  "Online visibility requires more than publishing content or adding keywords to website pages. Your website needs a strong technical foundation, relevant information, and a clear structure that helps search engines and AI-powered platforms understand your business.",
  "As an SEO services company, Growth Agency brings together technical SEO, content strategy, on-page optimization, and AI search visibility to create a connected approach to organic growth.",
  "We focus on understanding your website, identifying opportunities, and implementing improvements that support your long-term digital visibility.",
] as const;

const services = [
  {
    slug: "technical-seo",
    kicker: "Foundation",
    name: "Technical SEO Services",
    paragraphs: [
      "A technically optimized website makes it easier for search engines to crawl, render, and understand your pages.",
      "Our technical SEO services focus on website structure, crawl accessibility, internal linking, and technical issues that may affect search visibility.",
    ],
    layout: "feature",
  },
  {
    slug: "on-page-seo",
    kicker: "Pages",
    name: "On-Page SEO Services",
    paragraphs: [
      "Your website pages should clearly communicate their purpose to both visitors and search engines.",
      "Our on-page SEO approach focuses on optimizing page titles, headings, content structure, internal links, and relevant keyword placement to improve page clarity and search relevance.",
    ],
    layout: "plain",
  },
  {
    slug: "content-strategy",
    kicker: "Editorial",
    name: "Content Strategy and Optimization",
    paragraphs: [
      "Useful content helps businesses answer customer questions and establish a meaningful online presence.",
      "We develop content strategies based on search intent, audience requirements, and business objectives. Each page is planned around a clear topic and purpose rather than publishing content simply to increase website volume.",
    ],
    layout: "sage",
  },
  {
    slug: "ecommerce-seo",
    kicker: "Catalogs",
    name: "E-commerce SEO Services",
    paragraphs: [
      "E-commerce websites need a well-organized structure that helps search engines understand their product catalogs.",
      "Our e-commerce SEO services focus on category pages, product pages, supporting content, and website templates to improve product discoverability and organic search performance.",
    ],
    layout: "rule",
  },
  {
    slug: "answer-engine-optimization",
    kicker: "AEO",
    name: "Answer Engine Optimization (AEO)",
    paragraphs: [
      "Search experiences are changing, and people increasingly expect direct answers to their questions.",
      "Our Answer Engine Optimization services help structure website information so that important questions receive clear, accurate, and useful answers.",
      "We focus on content clarity, meaningful headings, and well-organized information that supports answer-based search experiences.",
    ],
    layout: "sage",
  },
  {
    slug: "generative-engine-optimization",
    kicker: "GEO",
    name: "Generative Engine Optimization (GEO)",
    paragraphs: [
      "Generative AI platforms are creating new ways for people to discover businesses and information.",
      "Our Generative Engine Optimization approach focuses on improving content consistency, information clarity, and website structure so that generative systems can better understand your business.",
    ],
    layout: "plain",
  },
  {
    slug: "ai-search-visibility",
    kicker: "Combined",
    name: "AI Search Visibility",
    paragraphs: [
      "Modern search visibility extends beyond traditional search engine results.",
      "We connect technical accessibility, useful content, and consistent website information to help businesses build a stronger presence across traditional search, answer engines, and AI-mediated discovery experiences.",
    ],
    layout: "closing",
  },
] as const;

const markets = [
  {
    title: "SEO Services in the USA",
    text: "Build a stronger search presence among US audiences through relevant content, technical optimization, and search-focused website improvements.",
  },
  {
    title: "SEO Services in the UK",
    text: "Improve your website's discoverability among UK audiences with content and SEO strategies aligned with local search intent.",
  },
  {
    title: "SEO Services in Australia",
    text: "Develop a search visibility strategy that connects your website with relevant Australian audiences and their information needs.",
  },
  {
    title: "SEO Services in Canada",
    text: "Strengthen your online presence among Canadian audiences through useful website content and technically sound SEO practices.",
  },
  {
    title: "SEO Services Across Europe",
    text: "Plan your international search strategy around different European markets, audience expectations, and relevant search requirements.",
  },
] as const;

const stages = [
  {
    step: "01",
    title: "Discover",
    text: "We begin by understanding your business objectives, priority markets, website structure, and current search visibility.",
  },
  {
    step: "02",
    title: "Strategize",
    text: "We identify relevant technical, content, and search optimization opportunities and create a strategy based on your priorities.",
  },
  {
    step: "03",
    title: "Execute",
    text: "We work with the people responsible for your website, content, and technical implementation to make practical, reviewable improvements.",
  },
  {
    step: "04",
    title: "Measure",
    text: "We monitor relevant performance indicators, evaluate progress, and explain what the available data tells us.",
  },
  {
    step: "05",
    title: "Improve",
    text: "We use insights from each stage to refine the strategy and identify the next opportunities for improvement.",
  },
] as const;

const reasons = [
  {
    title: "Technical and Strategic SEO Together",
    text: "We connect technical website improvements with the commercial goals your website needs to support.",
  },
  {
    title: "Visibility Beyond Traditional Search",
    text: "Our approach considers traditional search engines, answer engines, and generative AI discovery experiences.",
  },
  {
    title: "Content Built Around Search Intent",
    text: "We focus on creating useful, relevant content that addresses genuine audience questions and supports important business pages.",
  },
  {
    title: "A Clear and Measurable Approach",
    text: "We evaluate relevant performance signals and communicate progress without making unrealistic ranking or revenue promises.",
  },
  {
    title: "International Market Perspective",
    text: "We consider the differences between international markets when planning search visibility and content strategies.",
  },
] as const;

const faqs = [
  {
    question: "What are international SEO services?",
    answer:
      "International SEO services help businesses optimize their websites to reach relevant audiences in different countries. They involve technical optimization, international content planning, and strategies that consider the search behavior of different markets.",
  },
  {
    question: "Why are SEO services important for businesses?",
    answer:
      "SEO helps businesses improve their organic search visibility, make important website pages easier to discover, and connect with people searching for relevant products, services, or information.",
  },
  {
    question: "What services does an SEO agency provide?",
    answer:
      "An SEO agency may provide technical SEO, on-page optimization, keyword research, content strategy, e-commerce SEO, and search visibility improvements based on business requirements.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO timelines depend on factors such as website condition, competition, content quality, technical issues, and the scope of implementation. Meaningful improvements generally require consistent work and ongoing evaluation.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO focuses on improving visibility in traditional search engines. AEO focuses on making information useful and accessible for direct-answer experiences. GEO focuses on helping generative AI systems understand and use relevant information when generating responses.",
  },
  {
    question: "Can SEO help businesses target multiple countries?",
    answer:
      "Yes. International SEO helps businesses develop market-specific website structures and content strategies to reach relevant audiences across different countries.",
  },
  {
    question: "Do you provide e-commerce SEO services?",
    answer:
      "Yes. E-commerce SEO is one of our core capabilities, focusing on product pages, category pages, catalog structures, and supporting content.",
  },
] as const;

const closingParagraphs = [
  "Your website deserves a search strategy built around your business goals, target markets, and audience needs.",
  "Whether you are looking to strengthen your organic search presence, improve website content, or prepare for the evolving world of AI-powered search, Growth Agency can help you identify the right opportunities.",
  "Let's discuss your website, priority markets, and the improvements that can support your next stage of digital growth.",
] as const;

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="hero-heading" className="relative overflow-hidden border-b border-line bg-[#fef7ea]">
        <Image
          src={heroArtwork}
          alt=""
          width={1172}
          height={900}
          priority
          unoptimized
          className="pointer-events-none absolute bottom-3 left-1/2 h-auto w-auto max-h-[15.5rem] max-w-[calc(100%-1.5rem)] -translate-x-1/2 object-contain select-none sm:max-h-[20rem] lg:bottom-auto lg:left-auto lg:right-4 lg:top-1/2 lg:max-h-none lg:w-[min(48%,34rem)] lg:max-w-none lg:translate-x-0 lg:-translate-y-1/2 xl:w-[min(58%,48rem)]"
        />
        <Container className="relative z-10 pt-12 pb-[17.5rem] sm:pt-14 sm:pb-[22rem] lg:flex lg:items-center lg:py-16 lg:pb-16">
          <div className="flex max-w-xl flex-col gap-6 lg:max-w-[32rem]">
            <HeroEntrance duration={0.56} distance={18}>
              <h1 id="hero-heading" className={ui.display}>
                International SEO Services That Drive Sustainable Online Growth
              </h1>
            </HeroEntrance>
            <HeroEntrance delay={0.12} duration={0.52} distance={14}>
              <p className={cx(ui.bodyLg, "text-muted")}>{heroLead}</p>
            </HeroEntrance>
            <HeroEntrance delay={0.24} duration={0.52} distance={12} className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" className="w-full sm:w-auto">
                Book a Strategy Call
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Our Services
              </ButtonLink>
            </HeroEntrance>
          </div>
        </Container>
      </section>

      <section aria-labelledby="presence-heading" className="bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-12 lg:gap-16")}>
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              id="presence-heading"
              title="Build a Stronger Online Presence with Strategic SEO"
            />
          </ScrollReveal>
          <ScrollReveal className="flex flex-col gap-5 lg:col-span-7" delay={0.08}>
            {presenceParagraphs.map((paragraph) => (
              <p key={paragraph} className={cx(ui.bodyLg, "text-muted")}>
                {paragraph}
              </p>
            ))}
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading
              id="services-heading"
              eyebrow="Services"
              title="Our Digital Marketing and SEO Services"
              description="We provide specialized SEO and search visibility solutions designed to improve website performance and help businesses reach their target audiences."
            />
          </ScrollReveal>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => {
              const wide = service.layout === "feature" || service.layout === "closing";
              return (
                <li key={service.slug} className={wide ? "md:col-span-2" : undefined}>
                  <ScrollReveal className="h-full min-w-0" delay={index * 0.08}>
                    <Link
                      href={`/services/${service.slug}`}
                      className={cx(
                        "flex h-full min-w-0 flex-col gap-4 border border-line p-6 transition-colors duration-150 sm:p-7",
                        service.layout === "feature" &&
                          "bg-inverse text-on-inverse md:flex-row md:items-end md:justify-between md:gap-12",
                        service.layout === "closing" &&
                          "bg-surface md:flex-row md:items-end md:justify-between md:gap-12",
                        service.layout === "sage" && "bg-sage",
                        service.layout === "plain" && "bg-surface",
                        service.layout === "rule" && "border-t-2 border-t-accent bg-surface",
                        "hover:border-accent",
                      )}
                    >
                      <div className="min-w-0">
                        <p className={cx(ui.eyebrow, service.layout === "feature" && "text-on-inverse/80")}>
                          {service.kicker}
                        </p>
                        <h3 className={cx(ui.h3, "mt-3")}>{service.name}</h3>
                        <div
                          className={cx(
                            ui.body,
                            "mt-3 flex max-w-2xl flex-col gap-3",
                            service.layout === "feature" ? "text-on-inverse/85" : "text-muted",
                          )}
                        >
                          {service.paragraphs.map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                          ))}
                        </div>
                      </div>
                      <p
                        className={cx(
                          "text-sm font-semibold",
                          service.layout === "feature"
                            ? "text-on-inverse underline decoration-on-inverse/40 underline-offset-4"
                            : ui.textLink,
                        )}
                      >
                        View service
                      </p>
                    </Link>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
          <ScrollReveal className="mt-8">
            <ButtonLink href="/services">Discover Our SEO Solutions</ButtonLink>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="markets-heading" className="border-t border-line bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-12 lg:gap-14")}>
          <ScrollReveal className="lg:col-span-4">
            <SectionHeading
              id="markets-heading"
              title="International SEO Services for Global Markets"
              description="Reaching customers in different countries requires more than targeting international keywords. Your website needs a clear content strategy that considers audience expectations, search intent, and the differences between individual markets."
            />
            <p className={cx(ui.body, "mt-4 text-ink")}>
              Growth Agency plans search visibility strategies for businesses targeting international audiences.
            </p>
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-8" delay={0.08}>
            <ol>
              {markets.map((market, index) => (
                <li
                  key={market.title}
                  className="grid gap-2 border-t border-line py-5 md:grid-cols-[minmax(14rem,0.9fr)_1.1fr] md:items-baseline md:gap-8"
                >
                  <h3 className={ui.h3}>
                    <span className="mr-3 font-sans text-sm font-semibold tracking-wide text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {market.title}
                  </h3>
                  <p className={cx(ui.body, "text-muted")}>{market.text}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="process-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading
              id="process-heading"
              eyebrow="Process"
              title="Our SEO Process: From Strategy to Continuous Improvement"
              description="Effective SEO requires a structured process, regular evaluation, and continuous refinement."
            />
          </ScrollReveal>
          <ol className="mt-10 grid lg:grid-cols-5">
            {stages.map((stage, index) => (
              <li key={stage.title}>
                <ScrollReveal className="border-t-2 border-accent py-5 lg:pr-6" delay={index * 0.09}>
                  <p className={ui.eyebrow}>{stage.step}</p>
                  <h3 className={cx(ui.h3, "mt-3")}>{stage.title}</h3>
                  <p className={cx(ui.small, "mt-3 text-muted")}>{stage.text}</p>
                </ScrollReveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="why-heading" className="border-t border-line bg-surface">
        <Container className={cx(ui.section, "grid gap-10 lg:grid-cols-12 lg:gap-16")}>
          <ScrollReveal className="lg:col-span-5">
            <SectionHeading
              id="why-heading"
              title="Why Choose Growth Agency?"
              description="Choosing the right SEO agency means finding a team that understands the relationship between technology, content, and business objectives."
            />
          </ScrollReveal>
          <ScrollReveal className="lg:col-span-7" delay={0.08}>
            <ol className="border-t border-line">
              {reasons.map((reason, index) => (
                <li
                  key={reason.title}
                  className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-line py-5"
                >
                  <span className="font-serif text-lg font-semibold text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <h3 className={ui.h3}>{reason.title}</h3>
                    <p className={cx(ui.body, "mt-2 text-muted")}>{reason.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <SectionHeading id="faq-heading" title="Frequently Asked Questions" />
          </ScrollReveal>
          <ScrollReveal className="mt-10" delay={0.08}>
            <FaqAccordion items={faqs} />
          </ScrollReveal>
        </Container>
      </section>

      <ScrollReveal>
        <ConsultationCta
          title="Let's Build Your Next Stage of Search Growth"
          paragraphs={closingParagraphs}
          note="Start with a conversation about your search visibility goals and explore a practical path toward stronger online discoverability."
          actionLabel="Book a Strategy Call Today"
        />
      </ScrollReveal>
    </>
  );
}
