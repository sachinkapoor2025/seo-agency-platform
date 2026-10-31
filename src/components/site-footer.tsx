import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { footerExplore, footerServices } from "@/content/navigation";
import { site } from "@/content/site";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-background">
      <Container className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <p className={ui.h3}>{site.name}</p>
          <p className={cx(ui.small, "mt-4 max-w-md text-muted")}>{site.positioning}</p>
          <div className="mt-6">
            <ButtonLink href="/contact">Book a Consultation</ButtonLink>
          </div>
        </div>
        <nav aria-label="Footer">
          <p className={ui.eyebrow}>Explore</p>
          <ul className="mt-4 space-y-2">
            {footerExplore.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={cx(ui.quietLink, ui.small)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Services">
          <p className={ui.eyebrow}>Services</p>
          <ul className="mt-4 space-y-2">
            {footerServices.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={cx(ui.quietLink, ui.small)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="border-t border-line">
        <Container className="py-5">
          <p className={cx(ui.small, "text-muted")}>
            © {year} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
