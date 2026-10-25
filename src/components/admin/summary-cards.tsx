export type SummaryItem = {
  label: string;
  value: number;
  hint: string;
};

export function SummaryCards({ items }: { items: SummaryItem[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <li key={item.label} className="border border-line bg-white p-5">
          <p className="text-sm font-semibold text-muted">{item.label}</p>
          <p className="mt-2 font-serif text-3xl font-semibold text-navy">{item.value}</p>
          <p className="mt-2 text-sm leading-6 text-muted">{item.hint}</p>
        </li>
      ))}
    </ul>
  );
}
