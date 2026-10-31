"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/button";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

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
      <div role="status" className={cx(ui.card, "sm:p-8")}>
        <h2 className={ui.h3}>This demonstration did not send your enquiry</h2>
        <p className={cx(ui.body, ui.measure, "mt-4")}>
          The form accepted the fields as a frontend demo only. Nothing was sent,
          stored, or emailed. There is no backend connected to this page.
        </p>
        <Button variant="secondary" className="mt-6" onClick={() => setStatus("idle")}>
          Return to the form
        </Button>
      </div>
    );
  }

  const errorMessages = Object.values(errors).filter((error): error is string =>
    Boolean(error),
  );

  return (
    <form onSubmit={onSubmit} noValidate aria-busy={status === "submitting"} className="space-y-6">
      <p className={ui.callout}>
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
        <label htmlFor={`${formId}-message`} className={ui.fieldLabel}>
          Message <span className="field-hint">(required)</span>
        </label>
        <textarea
          id={`${formId}-message`}
          name="message"
          rows={6}
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? `${formId}-message-error` : undefined}
          onChange={(event) => update("message", event.target.value)}
          className={ui.fieldControl}
        />
        {errors.message ? (
          <p id={`${formId}-message-error`} className={ui.fieldError}>
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit demonstration"}
      </Button>
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
      <label htmlFor={id} className={ui.fieldLabel}>
        {label}{" "}
        <span className="field-hint">{required ? "(required)" : "(optional)"}</span>
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
        className={ui.fieldControl}
      />
      {error ? (
        <p id={`${id}-error`} className={ui.fieldError}>
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
      <label htmlFor={id} className={ui.fieldLabel}>
        {label} {required ? <span className="field-hint">(required)</span> : null}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={ui.fieldControl}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error ? (
        <p id={`${id}-error`} className={ui.fieldError}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
