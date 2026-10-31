"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { cx } from "@/lib/cx";

const navigation = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/leads", label: "Leads & Inquiries" },
  { href: "/admin/content", label: "Website Content" },
  { href: "/admin/email-marketing", label: "Email Marketing" },
];

const titles: Record<string, string> = {
  "/admin": "Dashboard",
  "/admin/leads": "Leads & Inquiries",
  "/admin/content": "Website Content",
  "/admin/email-marketing": "Email Marketing",
};

function isActive(pathname: string, href: string) {
  if (href === "/admin") return pathname === "/admin";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function titleFor(pathname: string) {
  const match = Object.keys(titles)
    .sort((left, right) => right.length - left.length)
    .find((href) => isActive(pathname, href));
  return match ? titles[match] : "Admin";
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [activePath, setActivePath] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef(true);
  const menuId = useId();
  const title = titleFor(pathname);

  if (pathname !== activePath) {
    setActivePath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function focusableItems() {
      if (!panel) return [];
      return Array.from(panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
    }

    focusableItems()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusableItems();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      if (restoreFocusRef.current) previouslyFocused?.focus();
      restoreFocusRef.current = true;
    };
  }, [open]);

  return (
    <div className="min-h-screen bg-background lg:grid lg:grid-cols-[16rem_minmax(0,1fr)]">
      <aside className="hidden bg-inverse text-on-inverse lg:flex lg:min-h-screen lg:flex-col">
        <AdminBrand />
        <AdminNav pathname={pathname} />
      </aside>

      <div className="flex min-w-0 flex-col">
        <header className="sticky top-0 z-30 border-b border-line bg-surface">
          <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
            <button
              ref={menuButtonRef}
              type="button"
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-control border border-line text-ink lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              onClick={() => setOpen((current) => !current)}
            >
              <span className="sr-only">{open ? "Close navigation" : "Open navigation"}</span>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
                Admin prototype
              </p>
              <h1 className="truncate font-serif text-2xl font-semibold tracking-tight text-navy">
                {title}
              </h1>
            </div>
            <div className="flex shrink-0 items-center gap-3">
              <span className="border border-navy px-2 py-1 text-xs font-semibold tracking-wide text-navy">
                DEMO
              </span>
              <p className="hidden text-right sm:block">
                <span className="block text-sm font-semibold text-ink">Prototype user</span>
                <span className="block text-xs text-muted">Not a real account</span>
              </p>
            </div>
          </div>
        </header>

        <main id="admin-main" className="flex-1 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          {children}
        </main>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-inverse/40"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          />
          <div
            id={menuId}
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label="Admin navigation"
            className="relative flex h-full w-[min(100%,18rem)] flex-col bg-inverse text-on-inverse"
            onClick={(event) => {
              if (event.target instanceof Element && event.target.closest("a")) {
                restoreFocusRef.current = false;
              }
            }}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <AdminBrand />
              <button
                type="button"
                className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-on-inverse/30"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close navigation</span>
                <CloseIcon />
              </button>
            </div>
            <AdminNav pathname={pathname} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

function AdminBrand() {
  return (
    <div className="px-4 py-5">
      <p className="font-serif text-lg font-semibold">Growth Agency</p>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-on-inverse/80">
        Prototype
      </p>
    </div>
  );
}

function AdminNav({ pathname }: { pathname: string }) {
  return (
    <nav aria-label="Admin" className="flex flex-1 flex-col px-3 pb-6">
      <ul className="space-y-1">
        {navigation.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cx(
                  "block px-3 py-2 text-sm font-semibold",
                  active
                    ? "bg-surface text-ink focus-visible:outline-ink"
                    : "text-on-inverse hover:bg-surface/10 focus-visible:outline-on-inverse",
                )}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto space-y-3 px-3 pt-8 text-sm leading-6 text-on-inverse/80">
        <p>This prototype is not access-controlled and is not a production admin system.</p>
        <Link href="/" className="inline-flex font-semibold text-on-inverse underline focus-visible:outline-on-inverse">
          View public website
        </Link>
      </div>
    </nav>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
