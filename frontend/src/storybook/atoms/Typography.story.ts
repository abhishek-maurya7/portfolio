import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Typography from "@/app/components/atoms/Typography";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    children: "Hello",
    as: "p",
  },
};

export const BodySmall: Story = {
  args: {
    variant: "bodySmall",
    children: "Body small text",
  },
};
