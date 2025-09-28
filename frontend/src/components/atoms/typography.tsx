import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("font-sans leading-normal", {
  variants: {
    variant: {
      h1: "text-5xl md:text-7xl font-bold",        // strong heading
      h2: "text-3xl md:text-4xl font-semibold",
      h3: "text-2xl md:text-3xl font-semibold",
      h4: "text-xl md:text-2xl font-medium",
      bodyLarge: "text-lg md:text-xl font-normal",
      bodyMedium: "text-base md:text-lg font-normal",
      bodySmall: "text-sm md:text-base font-normal",
      caption: "text-xs md:text-sm font-light",
    },
    color: {
      inherit: "text-inherit",
      primary: "text-gray-900 dark:text-gray-100",     // main headings
      secondary: "text-gray-700 dark:text-gray-400",   // body text
      muted: "text-gray-600 dark:text-gray-500",       // subtle / meta
      accent: "text-indigo-500 dark:text-indigo-400", // links, highlights
      code: "text-emerald-500 dark:text-emerald-400", // code snippets / dev tags
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "bodyMedium",
    color: "inherit",
    align: "left",
  },
});

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as?: React.ElementType;
  ariaLabel?: string;
}

export function Typography({
  className,
  variant,
  color,
  align,
  as: Component = "span",
  ariaLabel,
  children,
  ...props
}: TypographyProps) {
  return (
    <Component
      className={cn(typographyVariants({ variant, color, align, className }))}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Component>
  );
}
