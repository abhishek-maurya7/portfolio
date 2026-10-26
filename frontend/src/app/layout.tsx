import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { type LinkData } from "@/components/organisms/header";
import { fetchGraphQL } from "@/lib/fetch";
import { GET_LAYOUT_DATA_QUERY } from "@/lib/graphql/queries/get-layout-data";

import "./globals.css";
import AppShell from "@/components/templates/app-shell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhishek Maurya | Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, and modern web technologies. Explore my projects, technical blogs, and professional experience.",
};

export interface LayoutData {
  header: {
    links: LinkData[];
  };
  footer: {
    links: LinkData[];
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const response = await fetchGraphQL<LayoutData>({
    url: process.env.CMS_GRAPHQL_URL,
    query: GET_LAYOUT_DATA_QUERY,
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
  });

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <AppShell data={response}>{children}</AppShell>
      </body>
    </html>
  );
}
