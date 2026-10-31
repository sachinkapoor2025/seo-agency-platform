import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="h-full">
      <Link
        href={`/case-studies/${study.slug}`}
        className={cx(ui.cardInteractive, "flex h-full flex-col")}
      >
        <p className={ui.eyebrow}>Illustrative example</p>
        <h3 className={cx(ui.h3, "mt-3")}>{study.title}</h3>
        <p className={cx(ui.small, "mt-2 font-medium")}>{study.industry}</p>
        <p className={cx(ui.small, "mt-3 flex-1 text-muted")}>{study.summary}</p>
        <p className={cx(ui.textLink, "mt-6")}>Read the example</p>
      </Link>
    </article>
  );
}
