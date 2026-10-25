import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

type ConsultationCtaProps = {
  title?: string;
  description?: string;
};

export function ConsultationCta({
  title = "Talk through a search visibility plan",
  description = "Book a consultation to discuss priority markets, the current site, and the kind of work that would be useful. The conversation is a starting point, not a promise of rankings or results.",
}: ConsultationCtaProps) {
  return (
    <section aria-labelledby="consultation-heading" className="border-t border-line bg-navy text-white">
      <Container className="grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
        <div>
          <h2
            id="consultation-heading"
            className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl"
          >
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/85 sm:text-lg">
            {description}
          </p>
        </div>
        <ButtonLink
          href="/contact"
          variant="secondary"
          className="border-white bg-white text-navy hover:bg-paper"
        >
          Book a Consultation
        </ButtonLink>
      </Container>
    </section>
  );
}
