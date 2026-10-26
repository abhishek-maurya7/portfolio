import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import Audio from "@/components/atoms/audio";
import type { MediaItem } from "@/components/atoms/video";

const meta = {
  title: "Atoms/Audio",
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
    formats: null,
    width: null,
    height: null,
  },
};

export const Basic: Story = {
  args: {
    data: audioData,
  },
};
