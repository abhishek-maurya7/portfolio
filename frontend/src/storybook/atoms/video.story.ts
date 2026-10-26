import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Video from "@/components/atoms/video";
import type { MediaItem } from "@/components/atoms/video";

const meta = {
  title: "Atoms/Video",
  component: Video,
  tags: ["autodocs"],
} satisfies Meta<typeof Video>;

export default meta;

type Story = StoryObj<typeof meta>;

const videoData: MediaItem = {
  label: "Flower",
  showTooltip: false,
  openWithPopup: false,
  media: {
    ext: ".mp4",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    mime: "video/mp4",
    width: 640,
    height: 360,
  },
};

export const Basic: Story = {
  args: {
    data: videoData,
  },
};
