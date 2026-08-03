import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import Button from "@/app/components/atoms/Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Tertiary: Story = {
  args: {
    children: "Tertiary",
    variant: "tertiary",
  },
};