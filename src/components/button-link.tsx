import Link from "next/link";
import { cx } from "@/lib/cx";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  ariaLabel?: string;
};

const variants = {
  primary: "border border-navy bg-navy text-white hover:border-navy-dark hover:bg-navy-dark",
  secondary: "border border-navy bg-white text-navy hover:bg-paper",
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
        "inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
