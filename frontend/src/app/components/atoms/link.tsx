import NextLink from "next/link";

import { cva } from "class-variance-authority";

import Typography from "@/app/components/atoms/Typography";
import Icon from "@/app/components/atoms/icons";

const targetMap = {
  self: "_self",
  blank: "_blank",
  parent: "_parent",
  top: "_top",
} as const;

const linkClasses = cva("inline-flex items-center justify-center gap-2", {
  variants: {
    variant: {
      primary:
        "rounded-lg bg-[#264165] text-[#E4E4E7] focus:ring-2 focus:ring-[#264165]/50 focus:outline-none",
      secondary:
        "rounded-lg border-2 border-[#264165] focus:ring-2 focus:ring-[#264165]/50 focus:outline-none",
      tertiary: "focus:ring-2 focus:ring-[#264165]/50 focus:outline-none",
      flat: "p-0!",
    },
    iconOnly: {
      true: "size-9 p-0",
      false: "px-3 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    iconOnly: false,
  },
});

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

export interface SocialLinkData {
  __typename: "ComponentSharedLinkWithIcon";
  id: string;
  icon: string;
  iconOnly: boolean;
  link: LinkData;
}

type LinkProps = {
  data: LinkData | SocialLinkData;
};

export default function Link({ data }: LinkProps) {
  const isSocialLink = data.__typename === "ComponentSharedLinkWithIcon";

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
    </NextLink>
  );
}
