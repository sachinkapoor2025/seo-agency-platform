import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type TextSectionProps = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export function TextSection({ title, paragraphs, items }: TextSectionProps) {
  return (
    <section className="border-b border-line py-10">
      <h2 className={ui.h2}>{title}</h2>
      {paragraphs?.map((paragraph) => (
        <p key={paragraph} className={cx(ui.body, ui.measure, "mt-4")}>
          {paragraph}
        </p>
      ))}
      {items ? (
        <ul className={cx(ui.measure, "mt-5 space-y-3")}>
          {items.map((item) => (
            <li key={item} className={cx(ui.body, "flex gap-3")}>
              <span aria-hidden="true" className={ui.mark} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
