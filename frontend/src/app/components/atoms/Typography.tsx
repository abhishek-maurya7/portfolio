import { cva, cx, type VariantProps } from "class-variance-authority";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";
import { twMerge } from "tailwind-merge";

const typographyClasses = cva("leading-normal", {
  variants: {
    variant: {
      bodySmall: "text-sm leading-none",
      bodyMedium: "text-base leading-tight",
      bodyLarge: "text-lg leading-normal",
    },
    as: {
      span: "",
      p: "",
      label: "",
      h1: "text-4xl leading-snug md:text-5xl",
      h2: "text-4xl leading-tight",
      h3: "text-3xl leading-tight",
      h4: "text-2xl leading-snug",
      h5: "text-xl leading-snug",
      h6: "text-lg leading-snug",
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
} & Pick<VariantProps<typeof typographyClasses>, "variant"> &
  Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function Typography<T extends TypographyElement = "span">({
  as,
  children,
  variant,
  className,
  ...props
}: TypographyProps<T>) {
  const Element = (as ?? "span") as ElementType<HTMLAttributes<HTMLElement>>;

  return (
    <Element
      {...(props as HTMLAttributes<HTMLElement>)}
      className={cx(twMerge(typographyClasses({ variant, as }), className))}
    >
      {children}
    </Element>
  );
}

export default Typography;
