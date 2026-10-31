import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Audio, { type MediaItem } from "@/components/molecules/audio";

const meta = {
  title: "Molecules/Audio",
  component: Audio,
  tags: ["autodocs"],
} satisfies Meta<typeof Audio>;

export default meta;

type Story = StoryObj<typeof meta>;

const audioData: MediaItem = {
  label: "T-Rex roar",
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

export const Basic: Story = {
  args: {
    data: audioData,
  },
};
