import Link from "next/link";
import type { Article } from "@/content/types";
import { formatPublishedDate, readingTimeLabel } from "@/lib/format";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function InsightCard({ article }: { article: Article }) {
  return (
    <article className="h-full">
      <Link
        href={`/insights/${article.slug}`}
        className={cx(ui.cardInteractive, "flex h-full flex-col")}
      >
        <p className={ui.eyebrow}>Sample article · {article.category}</p>
        <h3 className={cx(ui.h3, "mt-3")}>{article.title}</h3>
        <p className={cx(ui.small, "mt-3 flex-1 text-muted")}>{article.excerpt}</p>
        <p className={cx(ui.small, "mt-6 text-muted")}>
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
