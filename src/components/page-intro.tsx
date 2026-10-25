import type { Crumb } from "@/components/breadcrumbs";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { SampleNotice } from "@/components/sample-notice";

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
    <header className="border-b border-line bg-paper">
      <Container className="py-14 sm:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl font-serif text-4xl font-semibold tracking-tight text-navy sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{lede}</p>
        {notice ? <SampleNotice>{notice}</SampleNotice> : null}
      </Container>
    </header>
  );
}
