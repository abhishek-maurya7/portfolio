import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Header, { type LinkData } from "@/components/organisms/header";

const links: LinkData[] = [
  {
    id: "about",
    label: "About",
    href: "#about",
    target: "self",
    variant: "flat",
  },
  {
    id: "projects",
    label: "Projects",
    href: "#projects",
    target: "self",
    variant: "flat",
  },
];

const meta = {
  title: "Organisms/Header",
  component: Header,
  tags: ["autodocs"],
  args: {
    data: { links },
  },
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const NoNavigationLinks: Story = {
  args: {
    data: { links: [] },
  },
};
