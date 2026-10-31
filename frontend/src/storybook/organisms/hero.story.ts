import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import type { MediaItem } from "@/components/molecules/media";
import Hero, { type HeroProps } from "@/components/organisms/hero";

const heroData: HeroProps = {
  __typename: "ComponentSectionsHero",
  greeting: "Hello, I'm",
  name: "Abhishek Maurya",
  shortIntro: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "A frontend developer building accessible and thoughtful web experiences.",
        },
      ],
    },
  ],
  resume: {
    label: "View resume",
    href: "#resume",
    target: "self",
    rel: "",
    variant: "primary",
  },
  socials: [
    {
      id: "github",
      icon: "faGithub",
      iconOnly: true,
      link: {
        label: "GitHub",
        href: "https://github.com/",
        target: "blank",
        rel: "noopener noreferrer",
        variant: "secondary",
      },
    },
    {
      id: "linkedin",
      icon: "faLinkedinIn",
      iconOnly: true,
      link: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/",
        target: "blank",
        rel: "noopener noreferrer",
        variant: "secondary",
      },
    },
  ],
  location: "Based in India",
  openToWork: "Available for opportunities",
  showCase: null,
};

const showcaseItem: MediaItem = {
  label: "Audio sample",
  showTooltip: false,
  openWithPopup: false,
  media: {
    ext: ".mp3",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
    mime: "audio/mpeg",
    width: null,
    height: null,
  },
};

const meta = {
  title: "Organisms/Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    data: heroData,
  },
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithShowcase: Story = {
  args: {
    data: {
      ...heroData,
      showCase: {
        title: "Featured media",
        description: "An audio example in the hero showcase.",
        items: [showcaseItem],
      },
    },
  },
};
