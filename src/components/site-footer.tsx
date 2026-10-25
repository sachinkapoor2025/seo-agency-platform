import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { footerExplore, footerServices } from "@/content/navigation";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold text-navy">{site.name}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted">{site.positioning}</p>
          <div className="mt-6">
            <ButtonLink href="/contact">Book a Consultation</ButtonLink>
          </div>
        </div>
        <nav aria-label="Footer">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
            Explore
          </p>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink hover:text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
            Services
          </p>
          <ul className="mt-4 space-y-2">
            {footerServices.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-ink hover:text-navy">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5">
          <p className="text-sm text-muted">
            © {year} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
