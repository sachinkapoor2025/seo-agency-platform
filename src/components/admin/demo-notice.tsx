export function DemoNotice({ children }: { children: React.ReactNode }) {
  return (
    <p className="callout" role="note">
      {children}
    </p>
  );
}
