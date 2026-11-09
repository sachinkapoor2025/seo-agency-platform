"use client";

import { useId, useState } from "react";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type FaqItem = {
  question: string;
  answer: string;
};

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set());

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className="border-t border-line">
      {items.map((item, index) => {
        const expanded = open.has(index);
        const buttonId = `${baseId}-button-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={item.question} className="border-b border-line">
            <h3 className={ui.h3}>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <Chevron expanded={expanded} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!expanded}
              inert={!expanded}
              className={cx(
                "grid transition-[grid-template-rows] duration-150 ease-out",
                expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className={cx(ui.body, "max-w-3xl pb-5 text-muted")}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
      className={cx("shrink-0 text-accent transition-transform duration-150", expanded && "rotate-180")}
    >
      <path d="M3 5.5 7 9l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
