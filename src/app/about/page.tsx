import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroEntrance } from "@/components/hero-entrance";
import { ScrollReveal } from "@/components/scroll-reveal";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const metadataBase = new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com");
const title = "About Growth Agency | SEO & AI Search Marketing Agency";
const description =
  "Discover Growth Agency, a digital growth partner focused on SEO, AEO, GEO and AI search visibility to help businesses strengthen their online presence.";
const artwork = {
  src: "/images/about/about-growth-agency.webp",
  width: 1046,
  height: 941,
  alt: "Illustration of people reviewing search charts, a laptop, and a growth dashboard around a meeting table.",
  background: "#f8f1e6",
  scale: 0.88,
};

export const metadata: Metadata = {
  metadataBase,
  title: { absolute: title },
  description,
  alternates: { canonical: "/about" },
  openGraph: {
    title,
    description,
    url: new URL("/about", metadataBase).toString(),
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

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    text: "We focus on improving organic search visibility through technical improvements, on-page optimization, keyword research, content planning, and website structure. Our SEO approach aims to make websites easier for search engines to crawl, understand, and rank for relevant searches.",
    href: "/services",
  },
  {
    title: "Technical SEO",
    text: "A technically sound website creates a stronger foundation for search performance. We work on website crawling, indexing, site architecture, page experience, structured data, and other technical factors that influence search accessibility and usability.",
    href: "/services/technical-seo",
  },
  {
    title: "On-Page SEO",
    text: "Relevant and well-structured website content helps users and search engines understand your pages. Our on-page SEO approach includes keyword mapping, title tags, meta descriptions, heading structure, internal linking, content optimization, and search intent alignment.",
    href: "/services/on-page-seo",
  },
  {
    title: "Content Strategy",
    text: "We develop content strategies around audience needs, relevant search queries, topic opportunities, and business objectives. From keyword research to topic clusters and content planning, the focus is on creating useful content that supports long-term organic visibility.",
    href: "/services/content-strategy",
  },
  {
    title: "E-commerce SEO",
    text: "Online stores need optimized product pages, category pages, technical foundations, and useful shopping content to compete in search results. Our e-commerce SEO approach focuses on improving product discoverability, website structure, and organic search opportunities.",
    href: "/services/ecommerce-seo",
  },
  {
    title: "Answer Engine Optimization (AEO)",
    text: "People increasingly look for direct answers rather than browsing multiple pages. AEO focuses on making content clear, relevant, and well-structured so that search and answer platforms can understand and potentially use it to respond to user questions.",
    href: "/services/answer-engine-optimization",
  },
  {
    title: "Generative Engine Optimization (GEO)",
    text: "Generative AI platforms are creating new ways for people to discover brands and information. Our GEO approach focuses on brand understanding, topical authority, entity clarity, useful content, and digital presence to support visibility across generative search experiences.",
    href: "/services/generative-engine-optimization",
  },
  {
    title: "AI Search Visibility",
    text: "We help businesses understand and improve their presence across evolving AI-powered search experiences. This broader approach brings together SEO, AEO, GEO, brand visibility, content quality, and entity optimization.",
    href: "/services/ai-search-visibility",
  },
];

const steps = [
  {
    title: "Understand Your Business",
    text: "We begin by understanding your website, services, target audience, industry, and digital objectives.",
  },
  {
    title: "Analyse Search Opportunities",
    text: "We review relevant keywords, search intent, competitors, content gaps, and opportunities across traditional and AI-powered search experiences.",
  },
  {
    title: "Build a Clear Strategy",
    text: "Based on the findings, we identify priorities and develop an approach covering technical SEO, content, on-page optimization, and relevant AI search opportunities.",
  },
  {
    title: "Implement Improvements",
    text: "We focus on practical optimization activities that improve website structure, content relevance, search accessibility, and overall discoverability.",
  },
  {
    title: "Monitor and Refine",
    text: "Search behaviour and competition continue to change. Ongoing analysis helps identify new opportunities and areas that may need further improvement.",
  },
];

const differences = [
  {
    title: "SEO and AI Search Together",
    text: "We consider traditional organic search alongside AEO, GEO, and AI search visibility to help businesses prepare for a wider range of discovery experiences.",
  },
  {
    title: "Strategy Before Implementation",
    text: "We focus on understanding the website, audience, and search opportunities before prioritizing optimization activities.",
  },
  {
    title: "Content That Serves Real Users",
    text: "We believe useful, relevant, and well-organized content is essential for both user experience and search visibility.",
  },
  {
    title: "Technical and Content Alignment",
    text: "Strong content needs a technically accessible website. We consider both areas as part of a connected optimization strategy.",
  },
  {
    title: "Long-Term Digital Foundations",
    text: "Our focus is on building sustainable improvements through relevant optimization, useful information, and continuous refinement.",
  },
];

const industries = [
  {
    label: "E-commerce Businesses",
    text: "Online stores looking to improve product and category page visibility.",
    href: "/industries/ecommerce",
  },
  {
    label: "SaaS and Technology Companies",
    text: "Technology brands seeking stronger organic reach and topical authority.",
    href: "/industries/saas-technology",
  },
  {
    label: "Professional Services",
    text: "Consultants, agencies, legal firms, and other service providers building online credibility.",
    href: "/industries/professional-services",
  },
  {
    label: "Healthcare Businesses",
    text: "Healthcare organizations looking to improve the discoverability of useful, trustworthy information.",
    href: "/industries/healthcare",
  },
  {
    label: "Education and EdTech",
    text: "Educational institutions and learning platforms targeting relevant search audiences.",
    href: "/industries/education",
  },
  {
    label: "Local and Multi-Location Businesses",
    text: "Businesses seeking stronger visibility across their service areas and locations.",
    href: "/industries/local-multi-location",
  },
];

const faqs = [
  {
    question: "What is Growth Agency?",
    answer:
      "Growth Agency is a digital visibility-focused brand offering services across SEO, technical SEO, on-page SEO, content strategy, e-commerce SEO, AEO, GEO, and AI search visibility.",
  },
  {
    question: "What services does Growth Agency offer?",
    answer:
      "Growth Agency offers a range of search optimization services, including technical SEO, on-page SEO, content strategy, e-commerce SEO, Answer Engine Optimization, Generative Engine Optimization, and AI search visibility.",
  },
  {
    question: "How is Growth Agency different from a traditional SEO agency?",
    answer:
      "Growth Agency considers both traditional search engine optimization and emerging AI-powered discovery experiences. Its service approach brings together SEO, AEO, GEO, content strategy, and AI search visibility.",
  },
  {
    question: "What is the difference between SEO, AEO, and GEO?",
    answer:
      "SEO focuses on improving visibility in traditional search engine results. AEO focuses on making information easier to understand and use in direct-answer experiences. GEO focuses on improving how brands and their information may be discovered and represented in generative AI experiences.",
  },
  {
    question: "Which businesses can benefit from Growth Agency services?",
    answer:
      "E-commerce businesses, SaaS companies, professional service providers, healthcare organizations, educational institutions, and local or multi-location businesses can explore these services according to their digital goals.",
  },
  {
    question: "Does Growth Agency support international SEO?",
    answer:
      "Growth Agency's digital visibility approach includes international audience considerations for businesses targeting markets such as the USA, UK, Canada, Australia, and Europe.",
  },
  {
    question: "How can I get started with Growth Agency?",
    answer:
      "You can contact Growth Agency through the website to discuss your business, website, target audience, and digital visibility goals.",
  },
];

export default function AboutPage() {
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
              <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "About" }]} />
            </HeroEntrance>
            <div className="flex flex-col gap-6">
              <HeroEntrance delay={0.06} duration={0.56} distance={18}>
                <h1 id="hero-heading" className={ui.display}>
                  About Growth Agency – Building Better Digital Visibility Through SEO & AI Search
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.14} duration={0.52} distance={14}>
                <div className="grid gap-4">
                  <p className={cx(ui.bodyLg, "text-ink")}>Helping Businesses Build a Stronger Presence in Search</p>
                  <p className={cx(ui.body, "text-muted")}>
                    We help businesses strengthen their online visibility through SEO, AEO, GEO, and AI search optimization. By combining technical expertise, useful content, and audience-focused strategies, we help brands connect with relevant audiences across traditional and AI-powered search.
                  </p>
                </div>
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

      <section aria-labelledby="purpose-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <ScrollReveal>
              <p className={ui.eyebrow}>Our Mission</p>
              <h2 id="purpose-heading" className={cx(ui.h2, "mt-3")}>
                Making Digital Visibility More Meaningful for Every Business
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our mission is to help businesses improve how they appear, communicate, and compete online.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We aim to create practical, data-informed digital strategies that bring together technical SEO, useful content, search intent, and emerging search technologies. By focusing on long-term visibility rather than short-term tactics, we help businesses build a stronger foundation for sustainable digital growth.
              </p>
            </ScrollReveal>
            <ScrollReveal>
              <p className={ui.eyebrow}>Our Vision</p>
              <h2 className={cx(ui.h2, "mt-3")}>Preparing Businesses for the Future of Search</h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                The way people discover information is changing. Traditional search engines now exist alongside AI-powered platforms, conversational search, and answer-driven experiences.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our vision is to help businesses adapt to this changing digital landscape. We want to make search visibility more accessible, strategic, and effective by combining proven SEO principles with evolving AEO and GEO practices.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We believe businesses should be ready not only for how people search today, but also for how they will discover brands and information in the future.
              </p>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="services-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className={ui.eyebrow}>What We Do</p>
              <h2 id="services-heading" className={cx(ui.h2, "mt-3")}>
                Complete Digital Visibility Solutions
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                At Growth Agency, our services are designed to address different aspects of online discoverability. We bring together essential SEO practices and emerging AI search optimization strategies to support a connected digital growth approach.
              </p>
            </div>
            <ol className="mt-10 grid gap-4 md:grid-cols-2">
              {services.map((item, index) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="flex h-full min-w-0 flex-col border border-line bg-background p-6 transition-colors duration-150 hover:border-accent sm:p-8"
                  >
                    <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                    <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
                    <p className={cx(ui.body, "mt-4 text-muted")}>{item.text}</p>
                    <p className={cx("mt-5 text-sm font-semibold", ui.textLink)}>View service</p>
                  </Link>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="approach-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className={ui.eyebrow}>Our Approach</p>
              <h2 id="approach-heading" className={cx(ui.h2, "mt-3")}>
                A Strategy Built Around Your Business Goals
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                We understand that every business has different audiences, competition, challenges, and growth priorities. That&apos;s why an effective digital visibility strategy should begin with understanding the business rather than applying the same checklist to every website.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>Our approach follows a structured process:</p>
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

      <section aria-labelledby="difference-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className={ui.eyebrow}>What Makes Our Approach Different?</p>
              <h2 id="difference-heading" className={cx(ui.h2, "mt-3")}>
                Connected Thinking Across Modern Search
              </h2>
            </div>
            <ol className="mt-8 divide-y divide-line border-y border-line">
              {differences.map((item, index) => (
                <li key={item.title} className="grid gap-3 py-7 lg:grid-cols-[minmax(12rem,18rem)_minmax(0,1fr)] lg:gap-10">
                  <div className="min-w-0">
                    <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
                    <h3 className={cx(ui.h3, "mt-2")}>{item.title}</h3>
                  </div>
                  <p className={cx(ui.body, "text-muted lg:pt-7")}>{item.text}</p>
                </li>
              ))}
            </ol>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="industries-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <p className={ui.eyebrow}>Who We Work With</p>
              <h2 id="industries-heading" className={cx(ui.h2, "mt-3")}>
                Supporting Businesses Across Different Industries
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our digital visibility services are relevant to businesses with different business models and audience needs, including:
              </p>
              <ul className="mt-6 grid gap-5">
                {industries.map((item) => (
                  <li key={item.label}>
                    <h3 className={ui.h3}>
                      <Link href={item.href} className={ui.textLink}>
                        {item.label}
                      </Link>
                    </h3>
                    <p className={cx(ui.body, "mt-2 text-muted")}>{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="international-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="international-heading" className={ui.h2}>
                Helping Businesses Reach International Audiences
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Digital visibility is not limited by geographical boundaries. Businesses targeting customers in different markets need strategies that account for regional search behaviour, audience expectations, language, and competition.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Growth Agency focuses on digital visibility opportunities for businesses targeting markets such as the United States, United Kingdom, Canada, Australia, and Europe.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Our approach considers the importance of relevant keyword targeting, localized content, website structure, and market-specific search intent when developing international SEO strategies.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="future-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="future-heading" className={ui.h2}>
                The Future of Search Is Evolving. Is Your Business Ready?
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Search is no longer limited to a list of traditional blue links. People are discovering information through search engines, featured answers, conversational interfaces, and generative AI platforms.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Businesses that invest in useful content, strong technical foundations, clear brand information, and relevant search strategies can build a stronger foundation for this changing environment.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                At Growth Agency, we bring SEO, AEO, GEO, and AI search visibility together to help businesses navigate this evolution with a clearer digital strategy.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="together-heading" className="border-t border-line bg-surface">
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id="together-heading" className={ui.h2}>
                Let&apos;s Build Your Digital Visibility Together
              </h2>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Your website should do more than exist online. It should help the right audience discover your business, understand your services, and take the next step.
              </p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Whether you&apos;re looking to strengthen your SEO foundation, improve content visibility, or explore opportunities in AI-powered search, Growth Agency can help you identify the right direction.
              </p>
              <p className={cx(ui.body, "mt-4 font-semibold text-ink")}>Ready to strengthen your online presence?</p>
              <p className={cx(ui.body, "mt-4 text-muted")}>
                Get in touch with Growth Agency and start building a smarter digital visibility strategy.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  Contact Us
                </ButtonLink>
                <ButtonLink href="/services" variant="secondary" className="w-full sm:w-auto">
                  Explore Our Services
                </ButtonLink>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-line bg-background">
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

      <section aria-labelledby="discover-heading" className="border-t border-line bg-inverse text-on-inverse">
        <Container className="py-16 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-center">
            <div>
              <h2 id="discover-heading" className={ui.h2}>
                Let&apos;s Make Your Business Easier to Discover
              </h2>
              <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                Build a stronger online presence with a connected approach to SEO, AEO, GEO, and AI search visibility.
              </p>
            </div>
            <ButtonLink href="/contact" variant="secondary">
              Get in Touch
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
