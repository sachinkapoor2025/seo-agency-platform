import { ServiceDocumentPage } from "@/components/service-document-page";
import { getServiceDocument, serviceArtwork } from "@/content/service-pages";
import { serviceMetadata } from "@/lib/service-metadata";

const route = "/services";
const artwork = serviceArtwork[route];

function requireOverview() {
  const overview = getServiceDocument(route);
  if (!overview) {
    throw new Error("Missing services overview content");
  }
  return overview;
}

const document = requireOverview();

export const metadata = serviceMetadata(document, artwork);

export default function ServicesPage() {
  return <ServiceDocumentPage document={document} artwork={artwork} />;
}
