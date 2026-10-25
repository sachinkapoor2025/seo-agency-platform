import type { EnquiryStatus } from "@/content/admin-demo-data";
import { cx } from "@/lib/cx";

const styles: Record<EnquiryStatus, string> = {
  New: "bg-sand text-navy",
  "In Progress": "border border-navy/20 bg-paper text-navy",
  Resolved: "border border-line bg-white text-muted",
};

export function StatusBadge({ status }: { status: EnquiryStatus }) {
  return (
    <span className={cx("inline-flex items-center px-2 py-1 text-xs font-semibold", styles[status])}>
      {status}
    </span>
  );
}
