"use client";

import Audio from "@/components/atoms/audio";
import Svg from "@/components/atoms/svg";
import Video, { type MediaItem } from "@/components/atoms/video";
import Image from "next/image";

export default function Media({ data }: { data: MediaItem }) {
  const { media, label } = data;

  if (media.mime === "image/svg+xml") {
    return (
      <div className="h-full min-h-0 w-full min-w-0 overflow-hidden">
        <Svg data={data} />
      </div>
    );
  }

  if (media.mime.startsWith("image/")) {
    return (
      <div className="h-full w-full overflow-hidden">
        <Image
          src={media.url}
          alt={label || "Media"}
          width={media.width ?? 800}
          height={media.height ?? 600}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="h-full w-full object-contain"
        />
      </div>
    );
  }

  if (media.mime.startsWith("video/")) {
    return (
      <div className="h-full w-full overflow-hidden [&_video]:h-full [&_video]:w-full [&_video]:object-contain [&>div]:h-full">
        <Video data={data} />
      </div>
    );
  }

  if (media.mime.startsWith("audio/")) {
    return (
      <div className="h-full w-full overflow-hidden">
        <Audio data={data} />
      </div>
    );
  }

  return null;
}
