import type { Metadata } from "next";
import { ConsultationCta } from "@/components/consultation-cta";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Technical SEO, on-page SEO, content strategy, e-commerce SEO, answer engine optimization, generative engine optimization, and AI search visibility.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Services"
        title="A connected set of search services."
        lede="The services cover the technical site, the pages people land on, the content system behind them, and the way that body of work shows up in classic and AI-mediated search. They are planned together so one workstream does not undo another."
      />
      <Container className="py-14 sm:py-16">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-sm leading-6 text-muted">
          Each service page explains the problems it addresses, the approach, and the
          types of deliverables involved. None of them promise a ranking, a traffic
          level, or a revenue outcome.
        </p>
      </Container>
      <ConsultationCta
        title="Not sure which service applies?"
        description="A consultation can sort the current site, the priority markets, and the work that should come first."
      />
    </>
  );
}
