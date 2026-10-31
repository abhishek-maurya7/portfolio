"use client";

import type { LayoutData } from "@/app/layout";
import Header from "@/components/organisms/header";
import ThemeContextProvider from "@/providers/theme-provider";
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
        <div className="mx-auto md:max-w-4/5 lg:max-w-2/3">{children}</div>
      </div>
    </ThemeContextProvider>
  );
}
