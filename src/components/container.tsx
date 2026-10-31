import { cx } from "@/lib/cx";
import { ui } from "@/lib/ui";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "header" | "footer" | "article";
};

export function Container({
  children,
  className,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={cx(ui.container, className)}>
      {children}
    </Tag>
  );
}
