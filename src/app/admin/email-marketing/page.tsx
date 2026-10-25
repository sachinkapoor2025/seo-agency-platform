import type { Metadata } from "next";
import { DemoNotice } from "@/components/admin/demo-notice";

export const metadata: Metadata = {
  title: "Email Marketing",
  description:
    "Prototype of email marketing for Growth Agency. Sending, uploads, and provider setup are not implemented.",
};

const templates = [
  {
    name: "Consultation follow-up",
    purpose: "A placeholder for a message after a consultation request.",
  },
  {
    name: "Monthly search briefing",
    purpose: "A placeholder for a recurring note about search work.",
  },
];

export default function EmailMarketingPage() {
  return (
    <div className="space-y-8">
      <p className="max-w-3xl text-base leading-7 text-muted">
        This screen shows where provider setup, templates, campaigns, and recipient
        lists would sit. None of those actions are available.
      </p>
      <DemoNotice>
        Sending, uploading, and provider configuration are not implemented. No email
        can be sent from this prototype, and no credentials are stored.
      </DemoNotice>

      <section aria-labelledby="provider-heading" className="border border-line bg-white p-5 sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <h2 id="provider-heading" className="font-serif text-2xl font-semibold text-navy">
            Provider configuration
          </h2>
          <p className="border border-line px-2 py-1 text-xs font-semibold uppercase tracking-wide text-navy">
            Not configured
          </p>
        </div>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-ink">
          No email provider is connected. There is no API key, domain, or sender
          address in this project.
        </p>
        <button
          type="button"
          disabled
          aria-describedby="provider-disabled"
          className="mt-5 inline-flex min-h-11 cursor-not-allowed items-center border border-line px-4 text-sm font-semibold text-muted"
        >
          Configure provider
        </button>
        <p id="provider-disabled" className="mt-2 text-sm text-muted">
          This control is disabled because provider setup is not part of the prototype.
        </p>
      </section>

      <section aria-labelledby="templates-heading">
        <h2 id="templates-heading" className="font-serif text-2xl font-semibold text-navy">
          Template overview
        </h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {templates.map((template) => (
            <li key={template.name} className="border border-line bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Prototype template
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-navy">{template.name}</h3>
              <p className="mt-3 text-sm leading-6 text-ink">{template.purpose}</p>
              <p className="mt-3 text-sm font-semibold text-navy">Not configured</p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          disabled
          aria-describedby="template-disabled"
          className="mt-4 inline-flex min-h-11 cursor-not-allowed items-center border border-line px-4 text-sm font-semibold text-muted"
        >
          Create template
        </button>
        <p id="template-disabled" className="mt-2 text-sm text-muted">
          Templates cannot be created or edited here.
        </p>
      </section>

      <section aria-labelledby="campaigns-heading">
        <h2 id="campaigns-heading" className="font-serif text-2xl font-semibold text-navy">
          Campaign overview
        </h2>
        <div className="mt-4 overflow-x-auto border border-line bg-white">
          <table className="w-full min-w-[36rem] text-left text-sm">
            <caption className="sr-only">Prototype campaigns that cannot be sent</caption>
            <thead className="border-b border-line bg-paper text-xs font-semibold uppercase tracking-wide text-muted">
              <tr>
                <th className="px-4 py-3 font-semibold">Name</th>
                <th className="px-4 py-3 font-semibold">Status</th>
                <th className="px-4 py-3 font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 text-ink">Sample draft briefing</td>
                <td className="px-4 py-3 font-semibold text-navy">Not configured</td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    disabled
                    aria-describedby="send-disabled"
                    className="inline-flex min-h-11 cursor-not-allowed items-center border border-line px-4 text-sm font-semibold text-muted"
                  >
                    Send campaign
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p id="send-disabled" className="mt-2 text-sm text-muted">
          Sending is disabled. This draft is a label only and has no recipients.
        </p>
      </section>

      <section aria-labelledby="recipients-heading" className="border border-line bg-white p-5 sm:p-6">
        <h2 id="recipients-heading" className="font-serif text-2xl font-semibold text-navy">
          Recipient list
        </h2>
        <p id="upload-note" className="mt-3 max-w-2xl text-sm leading-6 text-ink">
          Upload is not implemented. The file control below cannot add a recipient
          list, and no file is saved.
        </p>
        <div className="mt-5">
          <label htmlFor="recipient-file" className="text-sm font-semibold text-ink">
            Recipient file
          </label>
          <input
            id="recipient-file"
            type="file"
            disabled
            aria-describedby="upload-note"
            className="mt-2 block w-full cursor-not-allowed text-sm text-muted"
          />
        </div>
        <button
          type="button"
          disabled
          aria-describedby="upload-note"
          className="mt-4 inline-flex min-h-11 cursor-not-allowed items-center border border-line px-4 text-sm font-semibold text-muted"
        >
          Upload list
        </button>
      </section>
    </div>
  );
}
