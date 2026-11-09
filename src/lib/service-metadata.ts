import type { Metadata } from "next";
import { heroLead, type ServiceArtwork, type ServiceDocument } from "@/content/service-pages";

const metadataBase = new URL("https://dev.d1ffcl0phwxd2e.amplifyapp.com");

export function serviceMetadata(document: ServiceDocument, artwork: ServiceArtwork): Metadata {
  const description = heroLead(document);
  const title = `${document.h1} | Growth Agency`;
  const url = new URL(document.route, metadataBase).toString();

  return {
    metadataBase,
    title: { absolute: title },
    description,
    alternates: { canonical: document.route },
    openGraph: {
      title,
      description,
      url,
      siteName: "Growth Agency",
      type: "website",
      images: [
        {
          url: artwork.src,
          width: artwork.width,
          height: artwork.height,
          alt: artwork.alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [artwork.src],
    },
  };
}
