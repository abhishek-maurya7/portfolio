"use client";

import { useState } from "react";
import Link from "next/link";
import { cx } from "class-variance-authority";

import Icon from "@/app/components/atoms/icons";
import Button from "@/app/components/atoms/Button";

const targetMap = {
  self: "_self",
  blank: "_blank",
  parent: "_parent",
  top: "_top",
} as const;

type LinkTarget = keyof typeof targetMap;
type LinkVariant = "primary" | "secondary" | "tertiary" | "flat";

export interface LinkData {
  __typename?: "ComponentSharedLink";
  id?: string;
  label: string;
  href: string;
  target: LinkTarget;
  rel?: string;
  variant: LinkVariant;
}

interface HeaderData {
  links: LinkData[];
}

interface HeaderProps {
  data: HeaderData;
}

export default function Header({ data }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between p-4">
      <div>{/* logo container */}</div>

      <nav>
        <ul
          className={cx(
            "bg-background absolute top-full left-0 z-10 flex h-[calc(100dvh-72px)] w-full flex-col",
            { hidden: !open },
            "md:static md:z-0 md:flex md:h-auto md:w-auto md:flex-row md:gap-3",
          )}
        >
          {data.links.map(({ id, label, href, target, rel }) => (
            <li key={id ?? href} className="w-full">
              <Link
                href={href}
                target={targetMap[target]}
                rel={rel}
                className="block px-3 py-2 text-center"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="md:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
      >
        <Icon name={open ? "x" : "text-align-justify"} />
      </Button>
    </header>
  );
}
