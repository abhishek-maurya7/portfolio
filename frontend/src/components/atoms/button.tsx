import { cva, cx } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariants = "primary" | "secondary" | "tertiary";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariants;
};

const classes = cva(
  "focus-visible:ring-focus-ring px-3 py-2 text-base font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: cx(
          "rounded-md",
          "bg-action-background hover:bg-action-background-hover",
          "text-action-foreground",
          "disabled:bg-action-disabled-background disabled:text-action-disabled-foreground",
        ),

        secondary: cx(
          "rounded-md",
          "border-2",
          "border-action-border hover:border-action-border-hover",
          "text-action-text hover:text-action-text-hover",
          "disabled:border-action-disabled-border disabled:text-action-disabled-foreground",
        ),

        tertiary: cx(
          "border-b-2",
          "border-b-action-border hover:border-b-action-border-hover",
          "text-action-text hover:text-action-text-hover",
          "disabled:border-b-action-disabled-border disabled:text-action-disabled-foreground",
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
