import type { Metadata } from "next";
import { LegacyCaseStudyRedirect } from "@/components/legacy-case-study-redirect";

export const metadata: Metadata = {
  title: "Case studies",
  description: "This illustrative case study has moved to the case studies page.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/case-studies" },
};

export default function LegacyAdvisoryRedirect() {
  return <LegacyCaseStudyRedirect />;
}
