"use client";

import ThemeContextProvider from "@/providers/theme-provider";
import Header from "@/components/organisms/header";
import type { LayoutData } from "@/app/layout";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
  data: LayoutData;
};

export default function AppShell({ children, data }: AppShellProps) {
  return (
    <ThemeContextProvider>
      <div className="bg-background text-text-body">
        <Header data={data.header} />
        {children}
      </div>
    </ThemeContextProvider>
  );
}
