import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { IndustryCard } from "@/components/industry-card";
import { PageIntro } from "@/components/page-intro";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "How search planning differs for e-commerce, SaaS, professional services, healthcare, education, and local or multi-location businesses.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Industries"
        title="The search problem follows the business."
        lede="A catalog, a software product, a professional firm, a healthcare organization, an education provider, and a multi-location service do not share the same pages or the same risks. These overviews describe those differences for priority markets including India, the United States, and the United Kingdom."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-muted">
          Industry pages are planning guides. They do not claim that Growth Agency has
          served a named organization in that field, and they do not imply regulated
          expertise beyond search and content structure.
        </p>
      </Container>
      <ConsultationCta />
    </>
  );
}
