import { cx } from "@/lib/cx";

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
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-3 font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
