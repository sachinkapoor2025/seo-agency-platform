"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ButtonLink } from "@/components/button-link";
import { mainNavigation } from "@/content/navigation";
import { site } from "@/content/site";
import type { NavItem } from "@/content/types";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type MenuKey = "services" | "industries";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

function canHoverOpen() {
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileSection, setMobileSection] = useState<MenuKey | null>(null);
  const [activePath, setActivePath] = useState(pathname);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLDivElement>(null);
  const restoreFocusRef = useRef(true);
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);
  const servicesMenuId = useId();
  const industriesMenuId = useId();
  const mobileMenuId = useId();

  if (pathname !== activePath) {
    setActivePath(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
    setMobileSection(null);
  }

  useEffect(() => {
    if (!openMenu) return;

    function onPointerDown(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Node)) return;
      const container = openMenu === "services" ? servicesRef.current : industriesRef.current;
      if (container?.contains(target)) return;
      setOpenMenu(null);
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [openMenu]);

  useEffect(() => {
    if (!mobileOpen) return;
    const panel = mobilePanelRef.current;
    const previouslyFocused =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function focusableItems() {
      if (!panel) return [];
      return Array.from(
        panel.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"),
      );
    }

    focusableItems()[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = focusableItems();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
      if (restoreFocusRef.current) {
        previouslyFocused?.focus();
      }
      restoreFocusRef.current = true;
    };
  }, [mobileOpen]);

  function toggleMenu(key: MenuKey) {
    setOpenMenu((current) => (current === key ? null : key));
  }

  function onMenuButtonKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
    key: MenuKey,
    container: HTMLDivElement | null,
  ) {
    if (event.key !== "ArrowDown") return;
    event.preventDefault();
    setOpenMenu(key);
    window.requestAnimationFrame(() => {
      container?.querySelector<HTMLAnchorElement>("a[href]")?.focus();
    });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface">
      <div className={cx(ui.container, "flex h-16 items-center justify-between gap-4")}>
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-accent" />
          <span className="truncate font-serif text-lg font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) =>
            item.children ? (
              <DesktopMenu
                key={item.href}
                item={item}
                menuKey={item.href === "/services" ? "services" : "industries"}
                menuId={item.href === "/services" ? servicesMenuId : industriesMenuId}
                containerRef={item.href === "/services" ? servicesRef : industriesRef}
                openMenu={openMenu}
                pathname={pathname}
                onToggle={toggleMenu}
                onOpen={setOpenMenu}
                onKeyDown={onMenuButtonKeyDown}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(pathname, item.href) ? "page" : undefined}
                className={cx(
                  ui.quietLink,
                  "px-3 py-2 text-sm font-semibold",
                  isActive(pathname, item.href) && "text-accent",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ButtonLink href="/contact" className="px-3 sm:px-5">
            <span className="sm:hidden">Contact</span>
            <span className="hidden sm:inline">Book a Consultation</span>
          </ButtonLink>
          <button
            ref={menuButtonRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-control border border-line lg:hidden"
            aria-expanded={mobileOpen}
            aria-controls={mobileMenuId}
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id={mobileMenuId}
          ref={mobilePanelRef}
          className="fixed inset-x-0 bottom-0 top-16 z-50 overflow-y-auto border-t border-line bg-surface lg:hidden"
          onClick={(event) => {
            if (event.target instanceof Element && event.target.closest("a")) {
              restoreFocusRef.current = false;
            }
          }}
        >
          <nav aria-label="Mobile" className={cx(ui.container, "flex flex-col py-4")}>
            <button
              type="button"
              className={cx(ui.buttonSecondary, "mb-3 w-full")}
              onClick={() => setMobileOpen(false)}
            >
              Close menu
            </button>
            <ButtonLink href="/contact" className="mb-3 w-full">
              Book a Consultation
            </ButtonLink>
            {mainNavigation.map((item) =>
              item.children ? (
                <MobileSection
                  key={item.href}
                  item={item}
                  sectionKey={item.href === "/services" ? "services" : "industries"}
                  openSection={mobileSection}
                  pathname={pathname}
                  onToggle={setMobileSection}
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  className={cx(ui.quietLink, "border-b border-line py-3 text-base font-semibold")}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}

function DesktopMenu({
  item,
  menuKey,
  menuId,
  containerRef,
  openMenu,
  pathname,
  onToggle,
  onOpen,
  onKeyDown,
}: {
  item: NavItem;
  menuKey: MenuKey;
  menuId: string;
  containerRef: React.RefObject<HTMLDivElement | null>;
  openMenu: MenuKey | null;
  pathname: string;
  onToggle: (key: MenuKey) => void;
  onOpen: (key: MenuKey | null) => void;
  onKeyDown: (
    event: React.KeyboardEvent<HTMLButtonElement>,
    key: MenuKey,
    container: HTMLDivElement | null,
  ) => void;
}) {
  const expanded = openMenu === menuKey;
  const sectionActive = isActive(pathname, item.href);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        if (canHoverOpen()) onOpen(menuKey);
      }}
      onMouseLeave={(event) => {
        const next = event.relatedTarget;
        if (next instanceof Node && containerRef.current?.contains(next)) return;
        if (
          document.activeElement instanceof Node &&
          containerRef.current?.contains(document.activeElement)
        ) {
          return;
        }
        if (openMenu === menuKey) onOpen(null);
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          aria-current={sectionActive ? "page" : undefined}
          className={cx(
            ui.quietLink,
            "px-2 py-2 text-sm font-semibold",
            sectionActive && "text-accent",
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="inline-flex h-9 w-8 items-center justify-center rounded-control text-ink transition-colors duration-150 hover:bg-background"
          aria-expanded={expanded}
          aria-controls={menuId}
          aria-label={expanded ? `Hide ${item.label.toLowerCase()}` : item.menuLabel}
          onClick={() => onToggle(menuKey)}
          onKeyDown={(event) => onKeyDown(event, menuKey, containerRef.current)}
        >
          <ChevronIcon expanded={expanded} />
        </button>
      </div>
      {expanded && item.children ? (
        <div
          id={menuId}
          className="absolute left-0 top-full z-30 mt-2 w-80 rounded-card border border-line bg-surface p-2 shadow-card"
        >
          <ul>
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  aria-current={pathname === child.href ? "page" : undefined}
                  className={cx(
                    "block rounded-control px-3 py-2 text-sm font-medium text-ink transition-colors duration-150 hover:bg-background hover:text-accent",
                  )}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={item.href}
            className={cx(
              "mt-1 block border-t border-line px-3 py-2 text-sm font-semibold text-accent transition-colors duration-150 hover:bg-background hover:text-accent-hover hover:underline hover:underline-offset-[0.18em]",
            )}
          >
            View all {item.label.toLowerCase()}
          </Link>
        </div>
      ) : null}
    </div>
  );
}

function MobileSection({
  item,
  sectionKey,
  openSection,
  pathname,
  onToggle,
}: {
  item: NavItem;
  sectionKey: MenuKey;
  openSection: MenuKey | null;
  pathname: string;
  onToggle: (key: MenuKey | null) => void;
}) {
  const expanded = openSection === sectionKey;
  const panelId = `${sectionKey}-mobile-panel`;

  return (
    <div className="border-b border-line">
      <div className="flex items-center justify-between gap-3">
        <Link
          href={item.href}
          aria-current={isActive(pathname, item.href) ? "page" : undefined}
          className={cx(ui.quietLink, "py-3 text-base font-semibold")}
        >
          {item.label}
        </Link>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-ink"
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={expanded ? `Hide ${item.label.toLowerCase()}` : item.menuLabel}
          onClick={() => onToggle(expanded ? null : sectionKey)}
        >
          <ChevronIcon expanded={expanded} />
        </button>
      </div>
      {expanded && item.children ? (
        <ul id={panelId} className="mb-3 border-l border-line pl-3">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                aria-current={pathname === child.href ? "page" : undefined}
                className={cx(ui.quietLink, "block py-2 text-sm")}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
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

function ChevronIcon({ expanded }: { expanded: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true"
      className={cx("transition-transform duration-150", expanded && "rotate-180")}
    >
      <path d="M3 5.5 7 9l4-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
