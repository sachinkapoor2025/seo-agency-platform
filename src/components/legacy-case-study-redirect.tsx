import Link from "next/link";
import { Container } from "@/components/container";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function LegacyCaseStudyRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/case-studies" />
      <Container className="py-20 sm:py-28">
        <h1 className={ui.h1}>This case study has moved</h1>
        <p className={cx(ui.body, "mt-5 text-muted")}>
          The illustrative example at this address is no longer published.
        </p>
        <p className="mt-6">
          <Link href="/case-studies" className={ui.textLink}>
            Continue to case studies
          </Link>
        </p>
      </Container>
    </>
  );
}
