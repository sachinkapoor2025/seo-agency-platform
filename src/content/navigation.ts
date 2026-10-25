import { industries } from "@/content/industries";
import { services } from "@/content/services";
import type { NavItem, NavLink } from "@/content/types";

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    menuLabel: "Show services",
    children: services.map((service) => ({
      label: service.name,
      href: `/services/${service.slug}`,
    })),
  },
  {
    label: "Industries",
    href: "/industries",
    menuLabel: "Show industries",
    children: industries.map((industry) => ({
      label: industry.name,
      href: `/industries/${industry.slug}`,
    })),
  },
  {
    label: "Case Studies",
    href: "/case-studies",
    menuLabel: "Case Studies",
  },
  {
    label: "Insights",
    href: "/insights",
    menuLabel: "Insights",
  },
  {
    label: "About",
    href: "/about",
    menuLabel: "About",
  },
];

export const footerExplore: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerServices: NavLink[] = services.map((service) => ({
  label: service.name,
  href: `/services/${service.slug}`,
}));
