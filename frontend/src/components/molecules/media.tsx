"use client";

import Audio from "@/components/molecules/audio";
import type { MediaItem as AudioMediaItem } from "@/components/molecules/audio";
import Svg from "@/components/atoms/svg";
import Video, {
  type MediaItem as VideoMediaItem,
} from "@/components/molecules/video";
import Image from "next/image";

export type MediaItem = AudioMediaItem | VideoMediaItem;

export default function Media({ data }: { data: MediaItem }) {
  const { media, label } = data;

  if (media.mime === "image/svg+xml") {
    return <Svg url={media.url} />;
  }

  if (media.mime.startsWith("image/")) {
    return (
      <Image
        src={media.url}
        alt={label || "Media"}
        width={media.width ?? 800}
        height={media.height ?? 600}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="h-full w-full object-contain"
      />
    );
  }

  if (media.mime.startsWith("video/")) {
    return <Video data={data} />;
  }

  if (media.mime.startsWith("audio/")) {
    return <Audio data={data} />;
  }

  return null;
}
