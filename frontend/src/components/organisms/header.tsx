"use client";

import { cx } from "class-variance-authority";
import Link from "next/link";
import { useContext, useState } from "react";

import Button from "@/components/atoms/button";
import Icon from "@/components/atoms/icons";
import { ThemeContext, type Theme } from "@/providers/themeProvider";

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

const themeOptions: { value: Theme; icon: string }[] = [
  { value: "light", icon: "sun" },
  { value: "dark", icon: "moon" },
];

export default function Header({ data }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className="relative flex items-center justify-between p-4">
      <div>{/* logo container */}</div>

      <nav>
        <ul
          className={cx(
            "bg-background absolute top-full left-0 z-10 flex h-[calc(100dvh-72px)] w-full flex-col p-4",
            { hidden: !open },
            "md:static md:z-0 md:flex md:h-auto md:w-auto md:flex-row md:items-center md:gap-3 md:bg-transparent md:p-0",
          )}
        >
          {data.links.map(({ id, label, href, target, rel }) => (
            <li key={id ?? href} className="w-full">
              <Link
                href={href}
                target={targetMap[target]}
                rel={rel}
                className="text-action-text hover:text-action-text-hover focus-visible:outline-focus-ring block px-3 py-2 text-center focus-visible:outline-2"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-auto flex justify-center md:mt-0 md:ml-3 md:w-auto">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-border text-action-text hover:text-action-text-hover hover:bg-quote-background focus-visible:outline-focus-ring inline-flex size-9 items-center justify-center rounded-lg border transition-colors focus-visible:outline-2"
            >
              <Icon name="sun" className="hidden size-4 dark:block" />
              <Icon name="moon" className="block size-4 dark:hidden" />
            </button>
          </li>
        </ul>
      </nav>

      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="border-0! md:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        variant="tertiary"
      >
        <Icon name={open ? "x" : "text-align-justify"} />
      </Button>
    </header>
  );
}
