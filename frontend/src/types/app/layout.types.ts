import type { ReactNode } from "react";

export interface RootLayoutProps {
  children: ReactNode;
}

export interface SiteSetting {
  initialTheme: {
    name: "dark" | "light";
  };
}