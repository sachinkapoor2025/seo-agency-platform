import type { DemoEnquiry } from "@/content/admin-demo-data";
import { formatPublishedDate } from "@/lib/format";
import { StatusBadge } from "@/components/admin/status-badge";

export function EnquiryTable({
  enquiries,
  variant,
}: {
  enquiries: DemoEnquiry[];
  variant: "recent" | "full";
}) {
  return (
    <div className="overflow-x-auto border border-line bg-white">
      <table className={variant === "full" ? "w-full min-w-[56rem] text-left text-sm" : "w-full min-w-[40rem] text-left text-sm"}>
        <caption className="sr-only">
          {variant === "full" ? "Demo enquiries" : "Recent demo enquiries"}
        </caption>
        <thead className="border-b border-line bg-paper text-xs font-semibold uppercase tracking-wide text-muted">
          <tr>
            {variant === "full" ? <th className="px-4 py-3 font-semibold">ID</th> : null}
            <th className="px-4 py-3 font-semibold">Name</th>
            {variant === "full" ? <th className="px-4 py-3 font-semibold">Email</th> : null}
            <th className="px-4 py-3 font-semibold">Service</th>
            <th className="px-4 py-3 font-semibold">Source</th>
            <th className="px-4 py-3 font-semibold">Status</th>
            <th className="px-4 py-3 font-semibold">Date</th>
          </tr>
        </thead>
        <tbody>
          {enquiries.map((enquiry) => (
            <tr key={enquiry.id} className="border-b border-line last:border-b-0">
              {variant === "full" ? (
                <td className="px-4 py-3 font-semibold text-navy">{enquiry.id}</td>
              ) : null}
              <td className="px-4 py-3 text-ink">{enquiry.name}</td>
              {variant === "full" ? (
                <td className="px-4 py-3 text-ink">{enquiry.email}</td>
              ) : null}
              <td className="px-4 py-3 text-ink">{enquiry.service}</td>
              <td className="px-4 py-3 text-ink">{enquiry.source}</td>
              <td className="px-4 py-3">
                <StatusBadge status={enquiry.status} />
              </td>
              <td className="px-4 py-3 text-ink">
                <time dateTime={enquiry.createdOn}>{formatPublishedDate(enquiry.createdOn)}</time>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
