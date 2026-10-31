"use client";

import { useRef, useState } from "react";

import Icon from "@/components/atoms/icons";
import { cx } from "class-variance-authority";

/***
 * to be moved - started
 ***/
export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata?: {
    public_id: string;
    resource_type: string;
  };
}

export interface StrapiMedia {
  ext: string;
  url: string;
  mime: string;
  width: number | null;
  height: number | null;
}

export interface MediaItem {
  label: string;
  showTooltip: boolean;
  openWithPopup: boolean;
  media: StrapiMedia;
}

interface VideoProps {
  data: MediaItem;
}
/***
 * to be moved - end
 ***/

export default function Video({ data }: VideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async (): Promise<void> => {
    const video = ref.current;
    if (!video) return;

    if (video.paused || video.ended) {
      try {
        if (video.ended) video.currentTime = 0;
        await video.play();
      } catch (error: unknown) {
        console.error("Video playback failed:", error);
      }
    } else {
      video.pause();
    }
  };

  return (
    <div className="group relative h-full min-h-0 w-full min-w-0 overflow-hidden">
      <video
        ref={ref}
        className="absolute inset-0 h-full w-full object-contain"
        controls={false}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={data.media.url} type={data.media.mime} />
      </video>

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause video" : "Play video"}
        className={cx(
          "bg-action-background/70 text-action-foreground hover:bg-action-background-hover focus-visible:outline-focus-ring absolute top-1/2 left-1/2 flex aspect-square h-1/2 max-h-16 -translate-1/2 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
          isPlaying
            ? "opacity-0 group-hover:opacity-100 focus-visible:opacity-100"
            : "opacity-100",
        )}
      >
        <Icon
          name={isPlaying ? "pause" : "play"}
          className="fill-action-foreground text-action-foreground size-2/3 stroke-0"
        />
      </button>
    </div>
  );
}
