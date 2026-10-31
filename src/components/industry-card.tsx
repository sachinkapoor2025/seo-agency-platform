import Link from "next/link";
import type { Industry } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <article className="h-full">
      <Link
        href={`/industries/${industry.slug}`}
        className={cx(ui.cardInteractive, "flex h-full flex-col")}
      >
        <h3 className={ui.h3}>{industry.name}</h3>
        <p className={cx(ui.small, "mt-3 flex-1 text-muted")}>{industry.summary}</p>
        <p className={cx(ui.textLink, "mt-6")}>View industry</p>
      </Link>
    </article>
  );
}
