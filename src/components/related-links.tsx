import Link from "next/link";

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
      <h2
        id="related-heading"
        className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl"
      >
        {title}
      </h2>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href} className="border border-line bg-paper">
            <Link href={link.href} className="block p-5 hover:bg-white">
              <span className="font-serif text-xl font-semibold text-navy">
                {link.label}
              </span>
              {link.description ? (
                <span className="mt-2 block text-sm leading-6 text-muted">
                  {link.description}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
