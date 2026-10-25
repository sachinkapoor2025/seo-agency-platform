import Link from "next/link";
import type { CaseStudy } from "@/content/types";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="h-full">
      <Link
        href={`/case-studies/${study.slug}`}
        className="flex h-full flex-col border border-line bg-paper p-6 transition-shadow hover:shadow-md"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          Illustrative example
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-navy">
          {study.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-ink">{study.industry}</p>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{study.summary}</p>
        <p className="mt-6 text-sm font-semibold text-navy">Read the example</p>
      </Link>
    </article>
  );
}
