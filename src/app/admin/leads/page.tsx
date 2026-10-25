import type { Metadata } from "next";
import { DemoNotice } from "@/components/admin/demo-notice";
import { LeadsExplorer } from "@/components/admin/leads-explorer";
import { SummaryCards } from "@/components/admin/summary-cards";
import { demoEnquiries, enquiryCounts } from "@/content/admin-demo-data";

export const metadata: Metadata = {
  title: "Leads & Inquiries",
  description:
    "Search and filter fictional Growth Agency enquiries. This prototype does not save changes or send email.",
};

export default function LeadsPage() {
  const counts = enquiryCounts(demoEnquiries);

  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-base leading-7 text-muted">
        Search the fictional enquiry list by name or email, or narrow it by status.
        Filtering happens in the browser and does not update any record.
      </p>
      <DemoNotice>
        These rows are demo data with example.com addresses. They are not live
        customer enquiries, and this screen cannot email anyone or store edits.
      </DemoNotice>
      <SummaryCards
        items={[
          {
            label: "Total Enquiries",
            value: counts.total,
            hint: "Unfiltered size of the demo set.",
          },
          {
            label: "New Enquiries",
            value: counts.new,
            hint: "Status New in the sample data.",
          },
          {
            label: "In Progress",
            value: counts.inProgress,
            hint: "Status In Progress in the sample data.",
          },
          {
            label: "Resolved",
            value: counts.resolved,
            hint: "Status Resolved in the sample data.",
          },
        ]}
      />
      <LeadsExplorer enquiries={demoEnquiries} />
    </div>
  );
}
