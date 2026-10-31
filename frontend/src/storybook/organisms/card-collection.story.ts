import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import CardCollection, {
  type CardCollectionData,
} from "@/components/organisms/card-collection";

const collectionData: CardCollectionData = {
  __typename: "ComponentSectionsCardCollection",
  title: "Selected projects",
  description: "A few projects and experiments.",
  showBanner: true,
  cards: [
    {
      id: "portfolio",
      title: "Portfolio",
      description: "A personal site built with Next.js and TypeScript.",
      banner: {
        url: "https://res.cloudinary.com/w4jdhmfo/image/upload/v1793179664/images_f53396a2c1.jpg",
        width: 516,
        height: 387,
      },
      tags: [
        { documentId: "nextjs", name: "Next.js" },
        { documentId: "typescript", name: "TypeScript" },
      ],
      links: [
        {
          id: "portfolio-source",
          icon: "github",
          iconOnly: true,
          link: {
            label: "Source code",
            href: "https://github.com/",
            target: "blank",
            rel: "noopener noreferrer",
            variant: "secondary",
          },
        },
        {
          id: "portfolio-demo",
          icon: "external_link",
          iconOnly: false,
          link: {
            label: "Live demo",
            href: "https://example.com/",
            target: "blank",
            rel: "noopener noreferrer",
            variant: "flat",
          },
        },
      ],
      showBanner: false,
    },
    {
      id: "design-system",
      title: "Design system",
      description: "Reusable components organized for consistent UI.",
      banner: null,
      tags: [{ documentId: "storybook", name: "Storybook" }],
      links: [],
      showBanner: false,
    },
  ],
  footnote: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          text: "Project descriptions are provided for demonstration.",
        },
      ],
    },
  ],
};

const meta = {
  title: "Organisms/CardCollection",
  component: CardCollection,
  tags: ["autodocs"],
  args: {
    component: collectionData,
  },
} satisfies Meta<typeof CardCollection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithoutBanners: Story = {
  args: {
    component: {
      ...collectionData,
      showBanner: false,
    },
  },
};
