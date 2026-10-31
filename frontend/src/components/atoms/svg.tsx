"use client";

import type { MediaItem } from "@/components/atoms/video";
import { useEffect, useState } from "react";

export default function Svg({ data }: { data: MediaItem }) {
  const [svg, setSvg] = useState("");

  useEffect(() => {
    async function getSvgData() {
      try {
        const response = await fetch(data.media.url);

        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status}`);
        }

        const text = await response.text();
        setSvg(text);
      } catch (error) {
        console.error("Failed to load SVG:", error);
      }
    }

    getSvgData();
  }, [data.media.url]);

  return (
    <span
      className="flex h-full min-h-0 w-full min-w-0 items-center justify-center overflow-hidden [&>svg]:block [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
