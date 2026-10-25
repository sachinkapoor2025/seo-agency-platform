import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { InsightCard } from "@/components/insight-card";
import { PageIntro } from "@/components/page-intro";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Sample articles on SEO, technical SEO, answer engine optimization, generative engine optimization, and AI search visibility.",
};

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Insights"
        title="Sample writing on search visibility."
        lede="These articles explain SEO, technical foundations, answer engine optimization, generative engine optimization, and measurement. They were written for this website POC. They are not client research, and they do not present fabricated studies."
        notice="Each article is labeled sample content. Treat it as an explanation, not as original research."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {articles.map((article) => (
            <InsightCard key={article.slug} article={article} />
          ))}
        </div>
      </Container>
      <ConsultationCta />
    </>
  );
}
