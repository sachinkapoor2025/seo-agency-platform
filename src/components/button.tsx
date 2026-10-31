import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

const variants = {
  primary: ui.buttonPrimary,
  secondary: ui.buttonSecondary,
};

export function Button({
  variant = "primary",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button type={type} className={cx(variants[variant], className)} {...props} />
  );
}
