import type { Preview } from "@storybook/nextjs-vite";
import { themes } from "storybook/theming";
import "./../src/app/globals.css";

const preview: Preview = {
decorators: [
  (Story, context) => {
    const background = context.globals.backgrounds?.value;
    const isDark = background === "#0a192f";

    document.documentElement.classList.toggle("dark", isDark);

    return <Story />;
  },
],

  parameters: {
    layout: "centered",

    backgrounds: {
      options: {
        light: {
          name: "Light",
          value: "#FAFAFA",
        },
        dark: {
          name: "Dark",
          value: "#0a192f",
        },
      },
    },

    docs: {
      theme: themes.dark,
    },
  },

  initialGlobals: {
    backgrounds: {
      value: "dark",
      grid: true,
    },
  },
};

export default preview;