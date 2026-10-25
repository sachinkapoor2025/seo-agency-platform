import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ProcessSteps } from "@/components/process-steps";
import { principles } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Growth Agency is an international SEO and AI search visibility practice focused on evidence, technical quality, sustainable work, and transparent measurement.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About"
        title="An international search practice with a narrow promise."
        lede="Growth Agency helps organizations improve how they are found in classic search and in AI-mediated answers. The priority markets are India, the United States, and the United Kingdom. The promise is a clear plan and careful execution, not a guaranteed position."
      />
      <Container className="py-4">
        <section className="border-b border-line py-10">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy">
            Mission
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
            Make search visibility a managed part of how a website is built and
            explained. That means technical access, pages with a defined purpose, and
            content consistent enough to be used by people and by retrieval systems.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
            The practice combines technical SEO, on-page SEO, content strategy,
            e-commerce SEO, answer engine optimization, generative engine optimization,
            and AI search visibility. Those labels describe the work. They are not
            separate campaigns that ignore each other.
          </p>
        </section>
        <section className="border-b border-line py-10">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-navy">
            Approach
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
            Start with the business goal and the markets, then look at the site that
            already exists. Recommend the smallest set of changes that removes a real
            obstacle or answers a real question. Write the recommendation so the people
            who own the website can review it.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
            International work does not mean copying one market’s pages into another.
            Language, regulation, offer, and search behavior are checked before a page
            is reused.
          </p>
        </section>
        <section className="border-b border-line py-10" aria-labelledby="principles-heading">
          <h2
            id="principles-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-navy"
          >
            Principles
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {principles.map((principle) => (
              <li key={principle.title} className="border border-line bg-paper p-6">
                <h3 className="font-serif text-2xl font-semibold text-navy">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted">{principle.description}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="py-10" aria-labelledby="about-process-heading">
          <h2
            id="about-process-heading"
            className="font-serif text-3xl font-semibold tracking-tight text-navy"
          >
            Process
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink">
            Engagements move through four steps and then repeat. Nothing in the process
            assumes a permanent outcome.
          </p>
          <ProcessSteps />
        </section>
      </Container>
      <ConsultationCta
        title="Start with a consultation"
        description="Share the site, the markets, and the question you are trying to answer. The form on the contact page is a demonstration and does not send a message."
      />
    </>
  );
}
