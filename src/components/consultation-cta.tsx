import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type ConsultationCtaProps = {
  title?: string;
  description?: string;
  actionLabel?: string;
};

export function ConsultationCta({
  title = "Talk through a search visibility plan",
  description = "Book a consultation to discuss priority markets, the current site, and the kind of work that would be useful. The conversation is a starting point, not a promise of rankings or results.",
  actionLabel = "Book a Consultation",
}: ConsultationCtaProps) {
  return (
    <section
      aria-labelledby="consultation-heading"
      className="border-t border-line bg-inverse text-on-inverse"
    >
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
        <div>
          <h2 id="consultation-heading" className={ui.h2}>
            {title}
          </h2>
          <p className={cx(ui.bodyLg, ui.measure, "mt-4 text-on-inverse/85")}>
            {description}
          </p>
        </div>
        <ButtonLink href="/contact" variant="secondary">
          {actionLabel}
        </ButtonLink>
      </Container>
    </section>
  );
}
