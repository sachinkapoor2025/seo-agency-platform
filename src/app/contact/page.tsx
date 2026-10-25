import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/page-intro";
import { consultationCountries } from "@/content/site";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Growth Agency. This contact form is a frontend demonstration and does not send or store enquiries.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Book a consultation."
        lede="Use this form to describe the website, the service you want to discuss, and the country that matters most. It is a frontend demonstration only. Submitting it does not send, store, or email an enquiry."
      />
      <Container className="grid gap-12 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:py-16">
        <aside>
          <h2 className="font-serif text-2xl font-semibold text-navy">
            What a conversation covers
          </h2>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-ink">
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" />
              The markets you care about, including India, the United States, and the United Kingdom.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" />
              Whether the immediate need is technical, editorial, or both.
            </li>
            <li className="flex gap-3">
              <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-navy" />
              What a first phase of work would look like, without a promise of rankings.
            </li>
          </ul>
          <p className="mt-6 text-sm leading-6 text-muted">
            No office address, phone number, or business email is published, because
            this POC does not invent contact details.
          </p>
        </aside>
        <ContactForm
          services={services.map((service) => ({
            value: service.slug,
            label: service.name,
          }))}
          countries={consultationCountries}
        />
      </Container>
    </>
  );
}
