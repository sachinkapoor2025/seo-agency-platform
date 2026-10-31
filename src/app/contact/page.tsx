import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { HeroEntrance } from "@/components/hero-entrance";
import { heroStep } from "@/lib/motion-steps";
import { consultationCountries } from "@/content/site";
import { services } from "@/content/services";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a consultation with Growth Agency. This contact form is a frontend demonstration and does not send or store enquiries.",
};

const covers = [
  "The markets you care about, including India, the United States, and the United Kingdom.",
  "Whether the immediate need is technical, editorial, or both.",
  "What a first phase of work would look like, without a promise of rankings.",
] as const;

export default function ContactPage() {
  return (
    <section className="border-b border-line bg-background">
      <Container className="grid items-start gap-12 py-14 sm:py-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:py-20">
        <div className="min-w-0">
          <HeroEntrance {...heroStep("eyebrow")}>
            <p className={ui.eyebrow}>Contact</p>
          </HeroEntrance>
          <HeroEntrance {...heroStep("heading")}>
            <h1 className={cx(ui.h1, "mt-4")}>Book a consultation.</h1>
          </HeroEntrance>
          <HeroEntrance {...heroStep("description")}>
            <p className={cx(ui.bodyLg, "mt-5 text-muted")}>
              Describe the website, the service you want to discuss, and the country that matters most. The form is a frontend demonstration. Submitting it does not send, store, or email an enquiry.
            </p>
            <h2 className={cx(ui.h3, "mt-10")}>What a conversation covers</h2>
            <ul className="mt-5 space-y-4">
              {covers.map((item) => (
                <li key={item} className={cx(ui.body, "border-t border-line pt-4")}>
                  {item}
                </li>
              ))}
            </ul>
            <p className={cx(ui.body, "mt-8 border-l-2 border-accent pl-4 text-ink")}>
              No office address, phone number, or business email is published. This site does not invent contact details.
            </p>
          </HeroEntrance>
        </div>
        <HeroEntrance {...heroStep("visual", "min-w-0")}>
        <div className="min-w-0 border border-line bg-surface p-5 sm:p-8">
          <ContactForm
            services={services.map((service) => ({
              value: service.slug,
              label: service.name,
            }))}
            countries={consultationCountries}
          />
        </div>
        </HeroEntrance>
      </Container>
    </section>
  );
}
