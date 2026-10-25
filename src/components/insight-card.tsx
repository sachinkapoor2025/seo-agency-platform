import Link from "next/link";
import type { Article } from "@/content/types";
import { formatPublishedDate, readingTimeLabel } from "@/lib/format";

export function InsightCard({ article }: { article: Article }) {
  return (
    <article className="h-full">
      <Link
        href={`/insights/${article.slug}`}
        className="flex h-full flex-col border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          Sample article · {article.category}
        </p>
        <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight text-navy">
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{article.excerpt}</p>
        <p className="mt-6 text-sm text-muted">
          <time dateTime={article.publishedOn}>
            {formatPublishedDate(article.publishedOn)}
          </time>
          <span aria-hidden="true"> · </span>
          <span>{readingTimeLabel(article.readingTime)}</span>
        </p>
      </Link>
    </article>
  );
}
