import type { Metadata } from "next";
import { DemoNotice } from "@/components/admin/demo-notice";
import { EnquiryTable } from "@/components/admin/enquiry-table";
import { SummaryCards } from "@/components/admin/summary-cards";
import {
  demoEnquiries,
  enquiryCounts,
  recentEnquiries,
} from "@/content/admin-demo-data";

export const metadata: Metadata = {
  title: "Dashboard",
  description:
    "Demo dashboard for Growth Agency enquiries. Counts and records are fictional prototype data.",
};

export default function AdminDashboardPage() {
  const counts = enquiryCounts(demoEnquiries);
  const recent = recentEnquiries(demoEnquiries);

  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-base leading-7 text-muted">
        A snapshot of fictional enquiries used to show how the admin panel will be
        organized. Nothing on this page is loaded from a database.
      </p>
      <DemoNotice>
        All displayed records and counts are demo data. They are not connected to the
        public contact form, and this page is not a protected admin system.
      </DemoNotice>
      <section aria-labelledby="summary-heading">
        <h2 id="summary-heading" className="sr-only">
          Enquiry summary
        </h2>
        <SummaryCards
          items={[
            {
              label: "Total Enquiries",
              value: counts.total,
              hint: "Every fictional record in the demo set.",
            },
            {
              label: "New Enquiries",
              value: counts.new,
              hint: "Marked New and not yet reviewed in this prototype.",
            },
            {
              label: "In Progress",
              value: counts.inProgress,
              hint: "Marked In Progress. Status cannot be changed here.",
            },
            {
              label: "Resolved",
              value: counts.resolved,
              hint: "Marked Resolved in the sample data only.",
            },
          ]}
        />
      </section>
      <section aria-labelledby="recent-heading" className="space-y-4">
        <h2 id="recent-heading" className="font-serif text-2xl font-semibold text-navy">
          Recent enquiries
        </h2>
        <EnquiryTable enquiries={recent} variant="recent" />
      </section>
      <section aria-labelledby="workflow-heading" className="border border-line bg-white p-5 sm:p-6">
        <h2 id="workflow-heading" className="font-serif text-2xl font-semibold text-navy">
          Example next steps
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">
          These steps describe the sample workflow. They are not assigned tasks and
          cannot be completed in this prototype.
        </p>
        <ol className="mt-5 space-y-4">
          <li className="border-t border-line pt-4">
            <p className="font-semibold text-ink">Review new demo enquiries</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {counts.new} records are marked New. They are not messages submitted
              through the public website.
            </p>
          </li>
          <li className="border-t border-line pt-4">
            <p className="font-semibold text-ink">Continue in-progress examples</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {counts.inProgress} records are marked In Progress.
            </p>
          </li>
          <li className="border-t border-line pt-4">
            <p className="font-semibold text-ink">Leave resolved examples unchanged</p>
            <p className="mt-1 text-sm leading-6 text-muted">
              {counts.resolved} records are marked Resolved. There is no action to
              reopen or archive them.
            </p>
          </li>
        </ol>
      </section>
    </div>
  );
}
