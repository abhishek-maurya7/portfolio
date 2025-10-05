import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("font-sans", {
  variants: {
    variant: {
      h1: "text-5xl font-bold text-gray-900 md:text-7xl dark:text-zinc-100",
      h2: "text-2xl font-medium text-gray-800 md:text-3xl dark:text-zinc-300",
      h3: "text-xl text-gray-600 md:text-2xl dark:text-zinc-400 font-semibold",
      h4: "text-lg font-semibold text-gray-700 md:text-xl dark:text-zinc-300",
      h5: "text-base font-semibold text-gray-700 md:text-lg dark:text-zinc-300",
      h6: "text-sm font-semibold text-gray-700 md:text-base dark:text-zinc-300",
      bodyLarge:
        "text-lg md:text-xl font-normal text-gray-800 dark:text-zinc-200",
      bodyMedium:
        "text-base md:text-lg font-normal text-gray-700 dark:text-zinc-300",
      bodySmall:
        "text-sm md:text-base font-normal text-gray-600 dark:text-zinc-400",
      linkLarge:
        "text-lg md:text-xl font-medium text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",
      linkMedium:
        "text-base md:text-lg font-medium text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",
      linkSmall:
        "text-sm md:text-base font-medium text-indigo-600 dark:text-indigo-400 underline underline-offset-4 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors",
    },
  },
  defaultVariants: {
    variant: "bodyLarge",
  },
});

const headingMap: Record<string, keyof JSX.IntrinsicElements> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  bodyLarge: "p",
  bodyMedium: "p",
  bodySmall: "p",
  linkLarge: "a",
  linkMedium: "a",
  linkSmall: "a",
};

export interface TypographyProps
  extends VariantProps<typeof typographyVariants>,
    Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as?: React.ElementType;
  ariaLabel?: string;
}

export function Typography({
  className,
  variant,
  as,
  ariaLabel,
  children,
  ...props
}: TypographyProps) {
  const Component = as || headingMap[variant || "bodyLarge"] || "span";

  return (
    <Component
      className={cn(typographyVariants({ variant, className }))}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Component>
  );
}
