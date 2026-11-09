import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ButtonLink } from "@/components/button-link";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroEntrance } from "@/components/hero-entrance";
import { ScrollReveal } from "@/components/scroll-reveal";
import { services } from "@/content/services";
import {
  cleanTitle,
  heroLead,
  remainingIntro,
  serviceHref,
  type ContentBlock,
  type ContentSection,
  type ContentSubsection,
  type ServiceArtwork,
  type ServiceDocument,
} from "@/content/service-pages";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const tones = ["bg-background", "bg-surface", "bg-sage"] as const;

function headingId(title: string, index: number) {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${slug || "section"}-${index}`;
}

function Blocks({ blocks, nested = false }: { blocks: ContentBlock[]; nested?: boolean }) {
  const nodes: React.ReactNode[] = [];

  for (let index = 0; index < blocks.length; index += 1) {
    const block = blocks[index];

    if (block.kind === "labeled") {
      const group: Extract<ContentBlock, { kind: "labeled" }>[] = [block];
      let next = index + 1;
      while (next < blocks.length && blocks[next].kind === "labeled") {
        group.push(blocks[next] as Extract<ContentBlock, { kind: "labeled" }>);
        next += 1;
      }
      nodes.push(
        <ul key={block.label} className="mt-8 grid gap-4 md:grid-cols-2">
          {group.map((item) => (
            <li key={item.label} className="border border-line bg-surface p-5 sm:p-6">
              <h3 className={ui.h3}>{item.label}</h3>
              <p className={cx(ui.body, "mt-3 text-muted")}>{item.text}</p>
            </li>
          ))}
        </ul>,
      );
      index = next - 1;
      continue;
    }

    if (block.kind === "bold") {
      const paragraphs: string[] = [];
      let next = index + 1;
      while (next < blocks.length && blocks[next].kind === "p") {
        paragraphs.push((blocks[next] as Extract<ContentBlock, { kind: "p" }>).text);
        next += 1;
      }
      if (paragraphs.length > 0) {
        nodes.push(
          <div key={block.text} className="mt-6 border-t border-line pt-5">
            {nested ? (
              <p className="font-serif text-xl font-semibold tracking-tight">{block.text.replace(/:$/, "")}</p>
            ) : (
              <h3 className={ui.h3}>{block.text.replace(/:$/, "")}</h3>
            )}
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className={cx(ui.body, "mt-3 text-muted")}>
                {paragraph}
              </p>
            ))}
          </div>,
        );
        index = next - 1;
        continue;
      }
      nodes.push(
        <p key={block.text} className={cx(ui.body, "mt-6 font-semibold text-ink")}>
          {block.text}
        </p>,
      );
      continue;
    }

    if (block.kind === "ul") {
      nodes.push(
        <ul key={block.items[0]} className="mt-4 grid gap-2.5">
          {block.items.map((item) => (
            <li key={item} className={cx(ui.body, "grid grid-cols-[0.7rem_minmax(0,1fr)] gap-3 text-ink")}>
              <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    nodes.push(
      <p key={block.text} className={cx(ui.body, "mt-4 text-muted")}>
        {block.text}
      </p>,
    );
  }

  return <>{nodes}</>;
}

function isProcess(section: ContentSection) {
  return (
    section.subsections.length > 2 &&
    section.subsections.every((item) => /^step\s+\d+/i.test(item.title))
  );
}

function isCompact(section: ContentSection) {
  return (
    section.subsections.length >= 3 &&
    section.subsections.every((item) => {
      const lists = item.blocks.some((block) => block.kind === "ul");
      const length = item.blocks.reduce((total, block) => {
        if (block.kind === "p") return total + block.text.length;
        if (block.kind === "labeled") return total + block.text.length;
        return total;
      }, 0);
      return !lists && length < 360;
    })
  );
}

function SubsectionBody({ item }: { item: ContentSubsection }) {
  return <Blocks blocks={item.blocks} nested />;
}

function SectionBody({ section }: { section: ContentSection }) {
  if (isProcess(section)) {
    return (
      <ol className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {section.subsections.map((item, index) => (
          <li key={item.title} className="min-w-0 border-t border-line pt-5">
            <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
            <h3 className={cx(ui.h3, "mt-3")}>{item.title}</h3>
            <SubsectionBody item={item} />
          </li>
        ))}
      </ol>
    );
  }

  if (isCompact(section)) {
    return (
      <ul className="mt-10 grid gap-4 md:grid-cols-2">
        {section.subsections.map((item) => (
          <li key={item.title} className="min-w-0 border border-line bg-surface p-5 sm:p-6">
            <h3 className={ui.h3}>{item.title}</h3>
            <SubsectionBody item={item} />
          </li>
        ))}
      </ul>
    );
  }

  if (section.subsections.length > 0) {
    return (
      <ol className="mt-8 divide-y divide-line border-y border-line">
        {section.subsections.map((item, index) => (
          <li
            key={item.title}
            className="grid gap-3 py-7 lg:grid-cols-[minmax(12rem,18rem)_minmax(0,1fr)] lg:gap-10"
          >
            <div className="min-w-0">
              <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
              <h3 className={cx(ui.h3, "mt-2")}>{item.title}</h3>
            </div>
            <SubsectionBody item={item} />
          </li>
        ))}
      </ol>
    );
  }

  return null;
}

function ServiceRun({ sections }: { sections: ContentSection[] }) {
  return (
    <ol className="grid gap-4 lg:grid-cols-2">
      {sections.map((section, index) => {
        const href = serviceHref(section.title);
        const title = cleanTitle(section.title);
        return (
          <li key={title} className={cx(index === sections.length - 1 && "lg:col-span-2")}>
            <Link
              href={href ?? "/services"}
              className="flex h-full min-w-0 flex-col border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
            >
              <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
              <h2 className={cx(ui.h3, "mt-3")}>{title}</h2>
              <Blocks blocks={section.blocks} nested />
              <p className={cx("mt-5 text-sm font-semibold", ui.textLink)}>View service</p>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}

function isNumberedGrid(section: ContentSection) {
  return section.subsections.length >= 4 && section.subsections.every((item) => /^\d+\.\s/.test(item.title));
}

function IndustryCards({
  section,
  cardHref,
  cardMedia,
}: {
  section: ContentSection;
  cardHref: (title: string) => string | undefined;
  cardMedia?: Record<string, { src: string; width: number; height: number; alt: string }>;
}) {
  return (
    <ol className="mt-10 grid gap-4 lg:grid-cols-2">
      {section.subsections.map((item, index) => {
        const href = cardHref(item.title);
        const title = cleanTitle(item.title);
        const media = cardMedia?.[title];
        const wide = index === section.subsections.length - 1 && section.subsections.length % 2 === 1;
        const heading = (
          <>
            <p className={ui.eyebrow}>{String(index + 1).padStart(2, "0")}</p>
            <h3 className={cx(ui.h3, "mt-3")}>{title}</h3>
          </>
        );
        const body = (
          <>
            {media ? (
              <div className="mb-5 grid items-start gap-x-5 sm:mb-0 sm:grid-cols-[minmax(0,1fr)_10.5rem]">
                <Image
                  src={media.src}
                  alt={media.alt}
                  width={media.width}
                  height={media.height}
                  unoptimized
                  className="h-auto w-40 max-w-full object-contain sm:col-start-2 sm:row-start-1 sm:w-full"
                />
                <div className="sm:col-start-1 sm:row-start-1">{heading}</div>
              </div>
            ) : (
              heading
            )}
            <Blocks blocks={item.blocks} nested />
            {href ? <p className={cx("mt-5 text-sm font-semibold", ui.textLink)}>View industry</p> : null}
          </>
        );
        return (
          <li key={title} className={wide ? "lg:col-span-2" : undefined}>
            {href ? (
              <Link
                href={href}
                className="flex h-full min-w-0 flex-col border border-line bg-surface p-6 transition-colors duration-150 hover:border-accent sm:p-8"
              >
                {body}
              </Link>
            ) : (
              <article className="flex h-full min-w-0 flex-col border border-line bg-surface p-6 sm:p-8">{body}</article>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function ContentSections({
  sections,
  cardHref,
  cardMedia,
}: {
  sections: ContentSection[];
  cardHref?: (title: string) => string | undefined;
  cardMedia?: Record<string, { src: string; width: number; height: number; alt: string }>;
}) {
  const rendered: React.ReactNode[] = [];

  for (let index = 0; index < sections.length; ) {
    if (serviceHref(sections[index].title)) {
      const run: ContentSection[] = [];
      while (index < sections.length && serviceHref(sections[index].title)) {
        run.push(sections[index]);
        index += 1;
      }
      rendered.push(
        <section key={run[0].title} aria-label="Core SEO services" className="border-t border-line bg-background">
          <Container className={ui.section}>
            <ScrollReveal>
              <ServiceRun sections={run} />
            </ScrollReveal>
          </Container>
        </section>,
      );
      continue;
    }

    const section = sections[index];
    const id = headingId(section.title, index);
    rendered.push(
      <section key={id} aria-labelledby={id} className={cx("border-t border-line", tones[index % tones.length])}>
        <Container className={ui.section}>
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 id={id} className={ui.h2}>
                {cleanTitle(section.title)}
              </h2>
              <Blocks blocks={section.blocks} />
            </div>
            {cardHref && isNumberedGrid(section) ? (
              <IndustryCards section={section} cardHref={cardHref} cardMedia={cardMedia} />
            ) : (
              <SectionBody section={section} />
            )}
          </ScrollReveal>
        </Container>
      </section>,
    );
    index += 1;
  }

  return <>{rendered}</>;
}

export function ServiceDocumentPage({
  document,
  artwork,
  crumbs,
  cardHref,
  cardMedia,
  related,
}: {
  document: ServiceDocument;
  artwork: ServiceArtwork;
  crumbs?: { label: string; href?: string }[];
  cardHref?: (title: string) => string | undefined;
  cardMedia?: Record<string, { src: string; width: number; height: number; alt: string }>;
  related?: { title: string; links: { href: string; label: string }[] } | null;
}) {
  const lead = heroLead(document);
  const rest = remainingIntro(document);
  const crumb =
    crumbs ??
    (document.route === "/services"
      ? [
          { label: "Home", href: "/" },
          { label: "Services" },
        ]
      : [
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: services.find((item) => `/services/${item.slug}` === document.route)?.name ?? document.h1 },
        ]);

  return (
    <>
      <section
        aria-labelledby="hero-heading"
        className="service-hero relative border-b border-line"
        style={{
          backgroundColor: artwork.background,
          ["--art-w" as string]: artwork.width,
          ["--art-h" as string]: artwork.height,
          ["--art-scale" as string]: artwork.scale ?? 1,
        }}
      >
        <Container className="service-hero-copy relative z-10 pt-5">
          <div className="max-w-xl lg:max-w-[32rem]">
            <HeroEntrance duration={0.5} distance={14}>
              <Breadcrumbs items={crumb} />
            </HeroEntrance>
            <div className="flex flex-col gap-6">
              {document.eyebrow ? <p className={ui.eyebrow}>{document.eyebrow}</p> : null}
              <HeroEntrance delay={0.06} duration={0.56} distance={18}>
                <h1 id="hero-heading" className={ui.display}>
                  {document.h1}
                </h1>
              </HeroEntrance>
              <HeroEntrance delay={0.14} duration={0.52} distance={14}>
                <p className={cx(ui.bodyLg, "text-muted")}>{lead}</p>
              </HeroEntrance>
              <HeroEntrance delay={0.22} duration={0.52} distance={12}>
                <ButtonLink href="/contact" className="w-full sm:w-auto">
                  {document.heroAction ?? document.cta.action}
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

      {rest.length > 0 ? (
        <section aria-label="Introduction" className="border-b border-line bg-background">
          <Container className="py-12 lg:py-14">
            <ScrollReveal>
              <div className="max-w-3xl">
                <Blocks blocks={rest} />
              </div>
            </ScrollReveal>
          </Container>
        </section>
      ) : null}

      <ContentSections sections={document.sections} cardHref={cardHref} cardMedia={cardMedia} />

      {document.faq.length > 0 ? (
      <section aria-labelledby="faq-heading" className="border-t border-line bg-background">
        <Container className={ui.section}>
          <ScrollReveal>
            <h2 id="faq-heading" className={cx(ui.h2, "max-w-3xl")}>
              {document.faqTitle}
            </h2>
            <div className="mt-8">
              <FaqAccordion items={document.faq} />
            </div>
          </ScrollReveal>
        </Container>
      </section>
      ) : null}

      {related ? (
        <section aria-labelledby="related-links-heading" className="border-t border-line bg-surface">
          <Container className={ui.section}>
            <h2 id="related-links-heading" className={ui.h2}>
              {related.title}
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {related.links.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center border border-line bg-background px-4 text-sm font-semibold transition-colors duration-150 hover:border-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : related === null || document.route === "/services" ? null : (
        <section aria-labelledby="other-services-heading" className="border-t border-line bg-surface">
          <Container className={ui.section}>
            <h2 id="other-services-heading" className={ui.h2}>
              Other services
            </h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              <li>
                <Link href="/services" className="inline-flex min-h-11 items-center border border-line bg-background px-4 text-sm font-semibold transition-colors duration-150 hover:border-accent">
                  All services
                </Link>
              </li>
              {services
                .filter((item) => `/services/${item.slug}` !== document.route)
                .map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="inline-flex min-h-11 items-center border border-line bg-background px-4 text-sm font-semibold transition-colors duration-150 hover:border-accent"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </Container>
        </section>
      )}

      <ConsultationCta
        title={document.cta.title}
        paragraphs={document.cta.paragraphs}
        note={document.cta.note ?? undefined}
        actionLabel={document.cta.action}
      />
    </>
  );
}
