import type { VariantProps } from "class-variance-authority";

export interface TypographyProps extends VariantProps<any>, Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as?: React.ElementType;
  ariaLabel?: string;
}