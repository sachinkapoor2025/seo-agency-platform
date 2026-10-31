import { processSteps } from "@/content/site";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function ProcessSteps() {
  return (
    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <li key={step.title} className="border-t-2 border-accent bg-surface pt-5">
          <p className={ui.eyebrow}>{step.step}</p>
          <h3 className={cx(ui.h3, "mt-3")}>{step.title}</h3>
          <p className={cx(ui.small, "mt-3 text-muted")}>{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
