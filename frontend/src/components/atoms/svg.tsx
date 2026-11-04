"use client";

import { useEffect, useState } from "react";

export default function Svg({ url }: { url: string }) {
  const [svg, setSVG] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchSVG = async () => {
      try {
        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch SVG: ${response.status}`);
        }

        const data = await response.text();

        setSVG(data);
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") {
          return;
        }

        console.error("Failed to load SVG:", error);
        setSVG("");
      }
    };

    fetchSVG();

    return () => controller.abort();
  }, [url]);

  return (
    <span
      className="flex h-full min-h-0 w-full min-w-0 items-center justify-center overflow-hidden [&>svg]:block [&>svg]:h-auto [&>svg]:max-h-full [&>svg]:w-full [&>svg]:max-w-full"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
