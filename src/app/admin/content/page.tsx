import type { Metadata } from "next";
import Link from "next/link";
import { DemoNotice } from "@/components/admin/demo-notice";
import { caseStudies } from "@/content/case-studies";
import { industries } from "@/content/industries";
import { articles } from "@/content/insights";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Website Content",
  description:
    "Read-only overview of the public Growth Agency content already stored in the project.",
};

const sections = [
  {
    title: "Services",
    count: services.length,
    href: "/services",
    description: "Public service pages, including technical SEO, AEO, GEO, and AI search visibility.",
  },
  {
    title: "Industries",
    count: industries.length,
    href: "/industries",
    description: "Public industry overviews. These pages do not claim client engagements.",
  },
  {
    title: "Case Studies",
    count: caseStudies.length,
    href: "/case-studies",
    description: "Illustrative examples on the public site. They are not verified results.",
  },
  {
    title: "Insights / Blog",
    count: articles.length,
    href: "/insights",
    description: "Sample articles stored with the website. They are not a CMS.",
  },
];

export default function ContentPage() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-base leading-7 text-muted">
        Counts below are read from the same local content modules that render the
        public website. This screen cannot edit, publish, or unpublish anything.
      </p>
      <DemoNotice>
        This is a read-only prototype. Changing copy still happens in the project
        files, not in this admin panel.
      </DemoNotice>
      <ul className="grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <li key={section.title} className="flex flex-col border border-line bg-white p-5">
            <h2 className="font-serif text-2xl font-semibold text-navy">{section.title}</h2>
            <p className="mt-3 font-serif text-3xl font-semibold text-navy">{section.count}</p>
            <p className="mt-1 text-sm text-muted">
              {section.count === 1 ? "Public page" : "Public pages"} in the local content module
            </p>
            <p className="mt-3 flex-1 text-sm leading-6 text-ink">{section.description}</p>
            <Link
              href={section.href}
              className="mt-5 inline-flex min-h-11 items-center self-start border border-navy px-4 text-sm font-semibold text-navy hover:bg-paper"
            >
              View public page
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
