import Link from "next/link";
import type { Service } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className={cx(ui.cardInteractive, "flex h-full flex-col")}
      >
        <h3 className={ui.h3}>{service.name}</h3>
        <p className={cx(ui.small, "mt-3 flex-1 text-muted")}>{service.summary}</p>
        <p className={cx(ui.textLink, "mt-6")}>View service</p>
      </Link>
    </article>
  );
}
