import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import AboutMe, {
  type AboutMeSectionData,
} from "@/components/organisms/about-me";

const section: AboutMeSectionData = {
  __typename: "ComponentSectionsAboutMe",
  title: "About me",
  body: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "I enjoy turning ideas into reliable, accessible interfaces.",
        },
      ],
    },
    {
      type: "heading",
      level: 3,
      children: [{ type: "text", text: "How I work" }],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "I focus on clear component boundaries, thoughtful details, and maintainable code.",
        },
      ],
    },
    {
      type: "quote",
      children: [{ type: "text", text: "Build with care and keep learning." }],
    },
  ],
  footnote: [
    {
      type: "paragraph",
      children: [{ type: "text", text: "Thanks for stopping by." }],
    },
  ],
};

const meta = {
  title: "Organisms/AboutMe",
  component: AboutMe,
  tags: ["autodocs"],
  args: {
    section,
  },
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutFootnote: Story = {
  args: {
    section: {
      ...section,
      footnote: null,
    },
  },
};
