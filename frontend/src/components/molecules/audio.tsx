"use client";

import { useRef, useState } from "react";

import Icon from "@/components/atoms/icons";

interface StrapiMedia {
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

export default function Audio({ data }: { data: MediaItem }) {
  const ref = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayback = async () => {
    const audio = ref.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.error("Audio playback failed:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <div className="bg-quote-background flex h-full min-h-0 w-full min-w-0 items-center justify-center gap-3 overflow-hidden p-3">
      <audio
        ref={ref}
        className="hidden"
        controls={false}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={data.media.url} type={data.media.mime} />
      </audio>

      <Icon name="eighth-notes" className="text-action-foreground" />

      <button
        type="button"
        onClick={togglePlayback}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
        className="bg-action-background text-action-foreground hover:bg-action-background-hover focus-visible:outline-focus-ring flex aspect-square h-full max-h-12 shrink-0 items-center justify-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <Icon
          name={isPlaying ? "pause" : "play"}
          className="fill-action-foreground size-2/3 stroke-0"
        />
      </button>
    </div>
  );
}
