"use client";

import { useEffect, useId, useRef, useState } from "react";

type Option = {
  value: string;
  label: string;
};

type ContactFormProps = {
  services: Option[];
  countries: readonly Option[];
};

type FieldName = "name" | "email" | "website" | "service" | "country" | "message";

type FormValues = Record<FieldName, string>;

type FormErrors = Partial<Record<FieldName, string>>;

const emptyValues: FormValues = {
  name: "",
  email: "",
  website: "",
  service: "",
  country: "",
  message: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isWebsite(value: string) {
  const trimmed = value.trim();
  if (!trimmed) return true;
  try {
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
    const url = new URL(withProtocol);
    return url.hostname.includes(".");
  } catch {
    return false;
  }
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) {
    errors.email = "Enter your email address.";
  } else if (!isEmail(values.email.trim())) {
    errors.email = "Enter an email address in the format name@example.com.";
  }
  if (!isWebsite(values.website)) {
    errors.website = "Enter a website address, or leave this field blank.";
  }
  if (!values.service) errors.service = "Select a service.";
  if (!values.country) errors.country = "Select a country.";
  if (!values.message.trim()) errors.message = "Enter a message.";
  return errors;
}

export function ContactForm({ services, countries }: ContactFormProps) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>(emptyValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  function update(field: FieldName, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setValues(emptyValues);
    setStatus("submitting");
    timeoutRef.current = window.setTimeout(() => {
      setStatus("success");
    }, 500);
  }

  if (status === "success") {
    return (
      <div role="status" className="border border-line bg-paper p-6 sm:p-8">
        <h2 className="font-serif text-2xl font-semibold text-navy">
          This demonstration did not send your enquiry
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink">
          The form accepted the fields as a frontend demo only. Nothing was sent,
          stored, or emailed. There is no backend connected to this page.
        </p>
        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center border border-navy px-5 text-sm font-semibold text-navy hover:bg-white"
          onClick={() => setStatus("idle")}
        >
          Return to the form
        </button>
      </div>
    );
  }

  const errorMessages = Object.values(errors).filter((error): error is string =>
    Boolean(error),
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === "submitting"} className="space-y-6">
      <p className="border-l-2 border-navy bg-paper px-4 py-3 text-sm leading-6 text-ink">
        This form is a frontend demonstration. Submitting it does not send, store, or
        email your details.
      </p>
      {errorMessages.length > 0 ? (
        <div role="alert" className="border border-danger/30 bg-white px-4 py-3 text-sm text-danger">
          <p className="font-semibold">Check the highlighted fields.</p>
          <ul className="mt-2 list-disc pl-5">
            {errorMessages.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field
          id={`${formId}-name`}
          label="Name"
          required
          error={errors.name}
          value={values.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id={`${formId}-email`}
          label="Email"
          required
          type="email"
          error={errors.email}
          value={values.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id={`${formId}-website`}
          label="Website"
          type="url"
          error={errors.website}
          value={values.website}
          autoComplete="url"
          onChange={(value) => update("website", value)}
        />
        <SelectField
          id={`${formId}-country`}
          label="Country"
          required
          error={errors.country}
          value={values.country}
          placeholder="Select a country"
          options={countries}
          onChange={(value) => update("country", value)}
        />
      </div>
      <SelectField
        id={`${formId}-service`}
        label="Service of interest"
        required
        error={errors.service}
        value={values.service}
        placeholder="Select a service"
        options={services}
        onChange={(value) => update("service", value)}
      />
      <div>
        <label htmlFor={`${formId}-message`} className="text-sm font-semibold text-ink">
          Message <span className="font-normal text-muted">(required)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full border border-line bg-white px-3 py-2 text-base text-ink"
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className="mt-2 text-sm text-danger">
            {errors.message}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-11 items-center justify-center bg-navy px-5 text-sm font-semibold text-white hover:bg-navy-dark disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting…" : "Submit demonstration"}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  required,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}{" "}
        <span className="font-normal text-muted">
          {required ? "(required)" : "(optional)"}
        </span>
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-line bg-white px-3 py-2 text-base text-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  error,
  onChange,
  required,
  placeholder,
  options,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder: string;
  options: readonly Option[];
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-semibold text-ink">
        {label}{" "}
        {required ? (
          <span className="font-normal text-muted">(required)</span>
        ) : null}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border border-line bg-white px-3 py-2 text-base text-ink"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
