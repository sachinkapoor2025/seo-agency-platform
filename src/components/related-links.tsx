import Link from "next/link";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

export function RelatedLinks({
  title,
  links,
}: {
  title: string;
  links: RelatedLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="py-10" aria-labelledby="related-heading">
      <h2 id="related-heading" className={ui.h2}>
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={cx(ui.cardInteractive, "block h-full")}>
              <span className={ui.h3}>{link.label}</span>
              {link.description ? (
                <span className={cx(ui.small, "mt-2 block text-muted")}>{link.description}</span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
