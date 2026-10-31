import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Link, {
  type LinkData,
  type LinkWithIconData,
} from "@/components/molecules/link";

const meta = {
  title: "Molecules/Link",
  component: Link,
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

const makeLink = (overrides: Partial<LinkData> = {}): LinkData => ({
  __typename: "ComponentSharedLink",
  label: "Resume",
  href: "#",
  target: "self",
  rel: "noopener noreferrer",
  variant: "primary",
  ...overrides,
});

const makeSocialLink = (
  iconOnly: boolean,
  variant: LinkData["variant"],
): LinkWithIconData => ({
  __typename: "ComponentSharedLinkWithIcon",
  id: "30",
  icon: "sun",
  iconOnly,
  link: makeLink({
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    target: "blank",
    variant,
  }),
});

// Plain links
export const Primary: Story = { args: { data: makeLink() } };

export const Secondary: Story = {
  args: { data: makeLink({ variant: "secondary" }) },
};

export const Tertiary: Story = {
  args: { data: makeLink({ variant: "tertiary" }) },
};

export const Flat: Story = {
  args: { data: makeLink({ variant: "flat" }) },
};

// Flat + target="blank" is the only combo that shows the external-link icon
export const FlatExternal: Story = {
  args: {
    data: makeLink({
      variant: "flat",
      href: "https://example.com",
      target: "blank",
    }),
  },
};

// Icon only
export const PrimaryIconOnly: Story = {
  args: { data: makeSocialLink(true, "primary") },
};

export const SecondaryIconOnly: Story = {
  args: { data: makeSocialLink(true, "secondary") },
};

export const TertiaryIconOnly: Story = {
  args: { data: makeSocialLink(true, "tertiary") },
};

export const FlatIconOnly: Story = {
  args: { data: makeSocialLink(true, "flat") },
};

// Icon + label
export const PrimaryWithIcon: Story = {
  args: { data: makeSocialLink(false, "primary") },
};

export const SecondaryWithIcon: Story = {
  args: { data: makeSocialLink(false, "secondary") },
};

export const TertiaryWithIcon: Story = {
  args: { data: makeSocialLink(false, "tertiary") },
};

export const FlatWithIcon: Story = {
  args: { data: makeSocialLink(false, "flat") },
};
