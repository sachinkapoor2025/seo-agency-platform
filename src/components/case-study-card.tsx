import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="h-full">
      <Link
        href={`/case-studies/${study.slug}`}
        className={cx(
          ui.cardInteractive,
          "flex h-full flex-col overflow-hidden p-0 focus-visible:border-accent",
        )}
      >
        <Image
          src={study.image.src}
          alt={study.image.alt}
          width={study.image.width}
          height={study.image.height}
          unoptimized
          className="h-auto w-full"
        />
        <div className="flex flex-1 flex-col p-6 sm:p-8">
          <p className={ui.eyebrow}>Featured website</p>
          <h3 className={cx(ui.h3, "mt-3 break-words")}>{study.name}</h3>
          <p className={cx(ui.body, "mt-4 flex-1 text-muted")}>{study.summary}</p>
          <p className={cx(ui.textLink, "mt-6")}>View Case Study</p>
        </div>
      </Link>
    </article>
  );
}
