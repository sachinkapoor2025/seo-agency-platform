import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cx(ui.measure, align === "center" && "mx-auto text-center")}>
      {eyebrow ? <p className={ui.eyebrow}>{eyebrow}</p> : null}
      <h2 id={id} className={cx(ui.h2, eyebrow && "mt-3")}>
        {title}
      </h2>
      {description ? (
        <p className={cx(ui.bodyLg, "mt-4 text-muted")}>{description}</p>
      ) : null}
    </div>
  );
}
