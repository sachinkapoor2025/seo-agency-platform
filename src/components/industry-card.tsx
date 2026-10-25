import Link from "next/link";
import type { Industry } from "@/content/types";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="h-full">
      <Link
        href={`/industries/${industry.slug}`}
        className="flex h-full flex-col border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-navy">
          {industry.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{industry.summary}</p>
        <p className="mt-6 text-sm font-semibold text-navy">View industry</p>
      </Link>
    </article>
  );
}
