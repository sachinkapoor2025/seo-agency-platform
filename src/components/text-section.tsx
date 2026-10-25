type TextSectionProps = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export function TextSection({ title, paragraphs, items }: TextSectionProps) {
  return (
    <section className="border-b border-line py-10">
      <h2 className="font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
        {title}
      </h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className="mt-4 max-w-3xl text-base leading-7 text-ink">
          {paragraph}
        </p>
      ))}
      {items ? (
        <ul className="mt-5 max-w-3xl space-y-3">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-7 text-ink">
              <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 bg-navy" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
