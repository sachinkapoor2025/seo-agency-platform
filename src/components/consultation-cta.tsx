import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type ConsultationCtaProps = {
  title?: string;
  description?: string;
  paragraphs?: readonly string[];
  note?: string;
  actionLabel?: string;
};

export function ConsultationCta({
  title = "Talk through a search visibility plan",
  description = "Book a consultation to discuss priority markets, the current site, and the kind of work that would be useful. The conversation is a starting point, not a promise of rankings or results.",
  paragraphs,
  note,
  actionLabel = "Book a Consultation",
}: ConsultationCtaProps) {
  const body = paragraphs && paragraphs.length > 0 ? paragraphs : [description];

  return (
    <section
      aria-labelledby="consultation-heading"
      className="border-t border-line bg-inverse text-on-inverse"
    >
      <Container className="py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_auto] lg:items-center">
          <div>
            <h2 id="consultation-heading" className={ui.h2}>
              {title}
            </h2>
            {body.map((paragraph) => (
              <p key={paragraph} className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
                {paragraph}
              </p>
            ))}
          </div>
          <ButtonLink href="/contact" variant="secondary">
            {actionLabel}
          </ButtonLink>
        </div>
        {note ? (
          <p className={cx(ui.body, ui.measure, "mt-8 text-on-inverse/85")}>{note}</p>
        ) : null}
      </Container>
    </section>
  );
}
