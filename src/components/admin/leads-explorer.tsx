"use client";

import { useMemo, useState } from "react";
import { EnquiryTable } from "@/components/admin/enquiry-table";
import { ui } from "@/lib/ui";
import { cx } from "@/lib/cx";
import {
  enquiryStatuses,
  type DemoEnquiry,
  type EnquiryStatus,
} from "@/content/admin-demo-data";

type StatusFilter = "All" | EnquiryStatus;

export function LeadsExplorer({ enquiries }: { enquiries: DemoEnquiry[] }) {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("All");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return enquiries.filter((enquiry) => {
      const matchesStatus = status === "All" || enquiry.status === status;
      const matchesQuery =
        needle.length === 0 ||
        enquiry.name.toLowerCase().includes(needle) ||
        enquiry.email.toLowerCase().includes(needle);
      return matchesStatus && matchesQuery;
    });
  }, [enquiries, query, status]);

  return (
    <section aria-labelledby="enquiry-list-heading" className="space-y-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <h2 id="enquiry-list-heading" className="font-serif text-2xl font-semibold text-navy">
          Enquiry list
        </h2>
        <p className="text-sm text-muted">
          Showing {filtered.length} of {enquiries.length} demo records
        </p>
      </div>
        <form
        className={cx(ui.card, "grid gap-4 p-4 sm:grid-cols-2")}
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <div>
          <label htmlFor="enquiry-search" className={ui.fieldLabel}>
            Search by name or email
          </label>
          <input
            id="enquiry-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className={ui.fieldControl}
          />
        </div>
        <div>
          <label htmlFor="enquiry-status" className={ui.fieldLabel}>
            Status
          </label>
          <select
            id="enquiry-status"
            value={status}
            onChange={(event) => setStatus(event.target.value as StatusFilter)}
            className={ui.fieldControl}
          >
            <option value="All">All statuses</option>
            {enquiryStatuses.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </form>
      {filtered.length === 0 ? (
        <div className="border border-dashed border-line bg-white px-4 py-10 text-center">
          <p className="font-serif text-2xl font-semibold text-navy">No matching demo records</p>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted">
            No demo enquiries match this name, email, or status. Clear the search or choose
            another status.
          </p>
          <button
            type="button"
            className={cx(ui.buttonSecondary, "mt-5")}
            onClick={() => {
              setQuery("");
              setStatus("All");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <EnquiryTable enquiries={filtered} variant="full" />
      )}
    </section>
  );
}
