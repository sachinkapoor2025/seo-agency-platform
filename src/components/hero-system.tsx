import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

const foundations = [
  {
    index: "01",
    title: "Technical foundations",
    detail: "Crawl access, templates, and the paths between pages.",
  },
  {
    index: "02",
    title: "Useful content",
    detail: "Pages written for a defined question and a real audience.",
  },
] as const;

const discovery = [
  {
    index: "03",
    title: "Search visibility",
    detail: "A clear presence in classic search across priority markets.",
  },
  {
    index: "04",
    title: "AI-mediated discovery",
    detail: "Answers and generative results drawn from a consistent source.",
  },
] as const;

const markets = ["India", "United States", "United Kingdom"] as const;

function LayerList({ items }: { items: readonly { index: string; title: string; detail: string }[] }) {
  return (
    <ol className="relative mt-3">
      <span
        aria-hidden="true"
        className="absolute top-3 bottom-3 left-[0.8125rem] w-px bg-accent/35"
      />
      {items.map((layer) => (
        <li key={layer.index} className="relative grid grid-cols-[2.75rem_minmax(0,1fr)] gap-3 py-3">
          <span className="relative z-10 flex h-7 w-7 items-center justify-center bg-surface font-serif text-sm font-semibold text-accent">
            {layer.index}
          </span>
          <div className="min-w-0">
            <p className="font-serif text-lg font-semibold tracking-tight">{layer.title}</p>
            <p className="mt-1 text-sm leading-6 text-muted">{layer.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function HeroSystem() {
  return (
    <div className="relative min-w-0">
      <div
        aria-hidden="true"
        className="absolute top-6 right-0 bottom-0 left-3 hidden border border-line bg-sage lg:block"
      />
      <div className="relative border border-line bg-surface">
        <div className="border-b border-line bg-sage px-5 py-4 sm:px-6">
          <p className="font-serif text-xl font-semibold tracking-tight">One connected system</p>
          <p className="mt-1 text-sm leading-6 text-ink">
            Foundations support both kinds of discovery.
          </p>
        </div>
        <div className="px-5 pt-4 sm:px-6">
          <p className={ui.eyebrow}>Foundations</p>
          <LayerList items={foundations} />
        </div>
        <div className="px-5 pt-3 pb-1 sm:px-6">
          <div
            className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3"
            aria-hidden="true"
          >
            <span className="h-px bg-line" />
            <span className="pl-[0.14em] text-[0.6875rem] font-semibold tracking-[0.14em] whitespace-nowrap text-accent uppercase">
              Supports
            </span>
            <span className="h-px bg-line" />
          </div>
          <p className={cx(ui.eyebrow, "mt-4 whitespace-nowrap")}>Discovery</p>
          <LayerList items={discovery} />
        </div>
        <div className="grid border-t border-line sm:grid-cols-3">
          {markets.map((market) => (
            <p
              key={market}
              className="border-b border-line px-5 py-3 text-sm font-semibold last:border-b-0 sm:border-r sm:border-b-0 sm:px-6 sm:last:border-r-0"
            >
              {market}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
