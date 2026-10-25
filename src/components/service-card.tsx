import Link from "next/link";
import type { Service } from "@/content/types";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className="flex h-full flex-col border border-line bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
      >
        <h3 className="font-serif text-2xl font-semibold tracking-tight text-navy">
          {service.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-muted">{service.summary}</p>
        <p className="mt-6 text-sm font-semibold text-navy">View service</p>
      </Link>
    </article>
  );
}
