import type { Crumb } from "@/components/breadcrumbs";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { SampleNotice } from "@/components/sample-notice";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  lede: string;
  breadcrumbs?: Crumb[];
  notice?: string;
};

export function PageIntro({
  eyebrow,
  title,
  lede,
  breadcrumbs,
  notice,
}: PageIntroProps) {
  return (
    <header className="border-b border-line bg-background">
      <Container className="py-14 sm:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <p className={ui.eyebrow}>{eyebrow}</p>
        <h1 className={cx(ui.h1, "mt-3 max-w-4xl")}>{title}</h1>
        <p className={cx(ui.bodyLg, ui.measure, "mt-5 text-muted")}>{lede}</p>
        {notice ? <SampleNotice>{notice}</SampleNotice> : null}
      </Container>
    </header>
  );
}
