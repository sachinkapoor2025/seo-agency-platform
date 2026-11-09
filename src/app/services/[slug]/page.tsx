import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDocumentPage } from "@/components/service-document-page";
import { services } from "@/content/services";
import { getServiceDocument, serviceArtwork } from "@/content/service-pages";
import { serviceMetadata } from "@/lib/service-metadata";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = `/services/${slug}`;
  const document = getServiceDocument(route);
  const artwork = serviceArtwork[route];
  if (!document || !artwork) return { title: "Service not found" };
  return serviceMetadata(document, artwork);
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const route = `/services/${slug}`;
  const document = getServiceDocument(route);
  const artwork = serviceArtwork[route];
  if (!document || !artwork) notFound();

  return <ServiceDocumentPage document={document} artwork={artwork} />;
}
