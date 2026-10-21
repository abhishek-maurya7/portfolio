import Link from "@/app/components/atoms/link";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    data: {
      __typename: "ComponentSharedLink",
      label: "Resume",
      href: "https://google.com",
      target: "self",
      rel: "noopener noreferrer",
      variant: "primary",
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

const baseLink = {
  label: "Resume",
  href: "https://google.com",
  target: "self" as const,
  rel: "noopener noreferrer",
};

const baseSocialLink = {
  __typename: "ComponentSharedLinkWithIcon" as const,
  id: "30",
  icon: "linkedin",
  iconOnly: false,
  link: {
    ...baseLink,
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    target: "blank" as const,
    variant: "primary" as const,
  },
};

export const Primary: Story = {
  args: {
    data: {
      __typename: "ComponentSharedLink",
      ...baseLink,
      variant: "primary",
    },
  },
};

export const Secondary: Story = {
  args: {
    data: {
      __typename: "ComponentSharedLink",
      ...baseLink,
      variant: "secondary",
    },
  },
};

export const Tertiary: Story = {
  args: {
    data: {
      __typename: "ComponentSharedLink",
      ...baseLink,
      variant: "tertiary",
    },
  },
};

export const Flat: Story = {
  args: {
    data: {
      __typename: "ComponentSharedLink",
      ...baseLink,
      variant: "flat",
    },
  },
};

export const PrimaryIconOnly: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: true,
      link: {
        ...baseSocialLink.link,
        variant: "primary",
      },
    },
  },
};

export const SecondaryIconOnly: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: true,
      link: {
        ...baseSocialLink.link,
        variant: "secondary",
      },
    },
  },
};

export const TertiaryIconOnly: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: true,
      link: {
        ...baseSocialLink.link,
        variant: "tertiary",
      },
    },
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: false,
      link: {
        ...baseSocialLink.link,
        variant: "primary",
      },
    },
  },
};

export const SecondaryWithIcon: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: false,
      link: {
        ...baseSocialLink.link,
        variant: "secondary",
      },
    },
  },
};

export const TertiaryWithIcon: Story = {
  args: {
    data: {
      ...baseSocialLink,
      iconOnly: false,
      link: {
        ...baseSocialLink.link,
        variant: "tertiary",
      },
    },
  },
};
