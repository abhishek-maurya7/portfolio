import { cva, type VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ReactNode,
  HTMLAttributes,
} from "react";

const typographyClasses = cva("leading-normal", {
  variants: {
    variant: {
      bodySmall: "text-sm",
      bodyMedium: "text-base",
      bodyLarge: "text-lg",
    },
  },
  defaultVariants: {
    variant: "bodyMedium",
  },
});

type TypographyElement =
  "span" | "p" | "label" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type TypographyProps<T extends TypographyElement = "span"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<VariantProps<typeof typographyClasses>, "as"> &
  Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function Typography<T extends TypographyElement = "span">({
  as,
  children,
  variant,
  className,
  ...props
}: TypographyProps<T>) {
  const Element = as ?? "span";

  return (
    <Element
      {...(props as HTMLAttributes<HTMLElement>)}
      className={typographyClasses({ variant, className })}
    >
      {children}
    </Element>
  );
}

export default Typography;
