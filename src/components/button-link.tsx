import Link from "next/link";
import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary: ui.buttonPrimary,
  secondary: ui.buttonSecondary,
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={cx(
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
