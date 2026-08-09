import { ButtonHTMLAttributes, ReactNode } from "react";
import { cva, cx } from "class-variance-authority";

type ButtonVariants = "primary" | "secondary" | "tertiary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariants;
};

const classes = cva(
  "px-3 py-2 text-base flex transition-all duration-150 focus:outline-none focus-visible:ring-2 disabled:pointer-events-none font-medium",
  {
    variants: {
      variant: {
        primary: cx(
          "rounded-md",
          "bg-indigo-600 hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600",
          "text-zinc-50",
          "disabled:bg-indigo-600/40 disabled:text-zinc-50/70",
          "dark:disabled:bg-indigo-500/40 dark:disabled:text-zinc-50/50",
          "focus-visible:ring-primary/50",
        ),

        secondary: cx(
          "rounded-md",
          "border-2",
          "border-indigo-600 hover:border-indigo-500 dark:border-indigo-500 dark:hover:border-indigo-600",
          "text-zinc-800 hover:text-zinc-900 dark:text-zinc-200 dark:hover:text-zinc-50",
          "disabled:border-zinc-300 disabled:text-zinc-400",
          "dark:disabled:border-zinc-700 dark:disabled:text-zinc-500",
          "focus-visible:ring-primary/50",
        ),

        tertiary: cx(
          "border-b-2",
          "border-b-indigo-600 hover:border-b-indigo-500 dark:border-b-indigo-500 dark:hover:border-b-indigo-400",
          "text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-50",
          "disabled:border-b-zinc-300 disabled:text-zinc-400",
          "dark:disabled:border-b-zinc-700 dark:disabled:text-zinc-600",
          "focus-visible:ring-primary/50",
        ),
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export default function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={classes({ variant, className })}>
      {children}
    </button>
  );
}
