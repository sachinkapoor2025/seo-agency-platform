export function SampleNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 max-w-3xl border-l-2 border-navy bg-white px-4 py-3 text-sm leading-6 text-ink">
      {children}
    </p>
  );
}
