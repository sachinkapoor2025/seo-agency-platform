import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: LayoutProps<"/admin">) {
  return (
    <>
      <a href="#admin-main" className="skip-link">
        Skip to admin content
      </a>
      <AdminShell>{children}</AdminShell>
    </>
  );
}
