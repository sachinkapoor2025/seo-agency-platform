import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

export function SampleNotice({ children }: { children: React.ReactNode }) {
  return <p className={cx(ui.callout, ui.measure, "mt-6")}>{children}</p>;
}
