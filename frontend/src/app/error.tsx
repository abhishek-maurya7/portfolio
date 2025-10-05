"use client";
import { Typography } from '@/components/atoms';
import Link from 'next/link';

export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-slate-900">
      <Typography variant="h1">Something went wrong</Typography>
      <Typography variant="bodyLarge" className="mt-2 mb-6">We couldn't load the page. Please try again later.</Typography>
      <Link href="/">
        <Typography variant="linkLarge">Go back home</Typography>
      </Link>
    </main>
  );
}
