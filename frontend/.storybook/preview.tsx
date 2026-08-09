import type { Decorator, Preview } from "@storybook/nextjs-vite";
import { DocsContainer, type DocsContainerProps } from "@storybook/addon-docs/blocks";
import { addons } from "storybook/preview-api";
import { GLOBALS_UPDATED } from "storybook/internal/core-events";
import { useEffect } from "react";
import "./../src/app/globals.css";

const channel = addons.getChannel();

const getTheme = (bgKey?: string) => (bgKey === "dark" ? "dark" : "light");

const applyTheme = (theme: "light" | "dark") => {
  document.documentElement.classList.toggle("dark", theme === "dark");
  document.documentElement.style.colorScheme = theme;
};

const withTheme: Decorator = (Story, context) => {
  applyTheme(getTheme(context.globals.backgrounds?.value));
  return <Story />;
};

const ThemedDocsContainer = (props: DocsContainerProps) => {
  useEffect(() => {
    const handleGlobalsUpdated = (event: { globals?: { backgrounds?: { value?: string } } }) => {
      applyTheme(getTheme(event.globals?.backgrounds?.value));
    };

    channel.on(GLOBALS_UPDATED, handleGlobalsUpdated);
    return () => channel.off(GLOBALS_UPDATED, handleGlobalsUpdated);
  }, []);

  return <DocsContainer {...props} />;
};

const preview: Preview = {
  decorators: [withTheme],

  initialGlobals: {
    backgrounds: { value: "light", grid: true },
  },

  parameters: {
    layout: "centered",
    backgrounds: {
      options: {
        light: { name: "Light", value: "#FAFAFA" },
        dark: { name: "Dark", value: "#0a192f" },
      },
    },
    docs: {
      container: ThemedDocsContainer,
    },
  },
};

export default preview;