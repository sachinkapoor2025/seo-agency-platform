export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="border-l-2 border-navy bg-white px-4 py-3 text-sm leading-6 text-ink" role="note">
      {children}
    </p>
  );
}
