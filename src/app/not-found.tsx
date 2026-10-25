import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested is not part of the Growth Agency website.",
};

export default function NotFound() {
  return (
    <Container className="py-20 sm:py-28">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
        That page is not available.
      </h1>
      <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
        The address may be mistyped, or the sample page you requested is not part of
        this website. You can return home or continue through the main sections.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <ButtonLink href="/">Back to home</ButtonLink>
        <ButtonLink href="/services" variant="secondary">
          Browse services
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Book a Consultation
        </ButtonLink>
      </div>
    </Container>
  );
}
