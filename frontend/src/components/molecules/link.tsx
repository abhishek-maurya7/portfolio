import NextLink from "next/link";

import { cva } from "class-variance-authority";

import Icon from "@/components/atoms/icons";
import Typography from "@/components/atoms/typography";

const targetMap = {
  self: "_self",
  blank: "_blank",
  parent: "_parent",
  top: "_top",
} as const;

const linkClasses = cva(
  "focus-visible:ring-focus-ring inline-flex items-center justify-center gap-2 transition-colors focus-visible:ring-2 focus-visible:outline-none",
  {
    variants: {
      variant: {
        primary:
          "bg-action-background text-action-foreground hover:bg-action-background-hover rounded-lg",
        secondary:
          "border-action-border text-action-text hover:border-action-border-hover hover:text-action-text-hover rounded-lg border-2",
        tertiary:
          "border-action-border text-action-text hover:border-action-border-hover hover:text-action-text-hover border-b-2",
        flat: "hover:text-action-text-hover justify-start p-0!",
      },
      iconOnly: {
        true: "size-10 justify-center! p-0",
        false: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      iconOnly: false,
    },
  },
);

type LinkTarget = keyof typeof targetMap;
type LinkVariant = "primary" | "secondary" | "tertiary" | "flat";

export interface LinkData {
  __typename?: "ComponentSharedLink";
  id?: string;
  label: string;
  href: string;
  target: LinkTarget;
  rel: string;
  variant: LinkVariant;
}

export interface LinkWithIconData {
  __typename?: "ComponentSharedLinkWithIcon";
  id: string;
  icon: string;
  iconOnly: boolean;
  link: LinkData;
}

type LinkProps = {
  data: LinkData | LinkWithIconData;
};

export default function Link({ data }: LinkProps) {
  const isSocialLink = "link" in data;

  const link = isSocialLink ? data.link : data;
  const icon = isSocialLink ? data.icon : undefined;
  const iconOnly = isSocialLink ? data.iconOnly : false;

  const { label, href, target, rel, variant } = link;

  return (
    <NextLink
      href={href}
      target={targetMap[target]}
      rel={rel}
      aria-label={iconOnly ? label : undefined}
      className={linkClasses({ variant, iconOnly })}
    >
      {icon && <Icon name={icon} aria-hidden="true" className="size-5" />}
      {!iconOnly && <Typography>{label}</Typography>}
      {target === "blank" && variant === "flat" && !iconOnly && (
        <Icon name="external_link" className="w-3 -translate-y-1" />
      )}
    </NextLink>
  );
}
