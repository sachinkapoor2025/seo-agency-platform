import { processSteps } from "@/content/site";

export function ProcessSteps() {
  return (
    <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {processSteps.map((step) => (
        <li key={step.title} className="border-t-2 border-navy bg-white pt-5">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy">
            {step.step}
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold text-navy">{step.title}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
