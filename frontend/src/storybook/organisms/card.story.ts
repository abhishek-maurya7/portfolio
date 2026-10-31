import Card from "@/components/organisms/card";
import { Meta, StoryObj } from "@storybook/nextjs-vite";

const meta = {
  title: "Organisms/Card",
  component: Card,
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "7",
    title: "project 1",
    description: "project description",
    banner: {
      url: "https://res.cloudinary.com/w4jdhmfo/image/upload/v1793179664/images_f53396a2c1.jpg",
      width: 516,
      height: 387,
    },
    showBanner: true,
    tags: [
      {
        documentId: "rlba8z29yjnbt3skb7exp0cb",
        name: "adjfasdkfasf",
      },
      {
        documentId: "frvm3tt5vs3a9u1fojoe1ok8",
        name: "tech1",
      },
    ],
    links: [
      {
        __typename: "ComponentSharedLinkWithIcon",
        id: "3",
        icon: "faBehance",
        iconOnly: true,
        link: {
          id: "3",
          label: "behance",
          href: "https://google.com",
          rel: "noopener noreferrer",
          target: "self",
          variant: "primary",
        },
      },
    ],
  },
};
