import { Button, Typography } from '@/components/atoms';
import { FileCode2 } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Abhishek Maurya | Frontend Developer',
};

export default function Home() {
  return (
    <main>
      <section className="flex h-[calc(100dvh-64px)] flex-col pb-12 md:items-center md:px-0 md:pb-16">
        <div className="mt-auto flex flex-col space-y-2 text-left md:m-auto">
          <h3 className="text-xl text-gray-600 md:text-2xl dark:text-zinc-400">
            Hi
            <span
              role="img"
              aria-label="waving hand"
            >
              👋
            </span>
            , I am
          </h3>

          <h1 className="text-5xl font-bold text-gray-900 md:text-7xl dark:text-zinc-100">
            Abhishek Maurya,
          </h1>

          <h2 className="text-2xl font-medium text-gray-800 md:text-3xl dark:text-zinc-300">
            I am a{' '}
            <u className="decoration-blue-600 underline-offset-4 dark:decoration-blue-400">
              Front-end
            </u>{' '}
            developer.
          </h2>

          <p className="mt-2 max-w-xl text-base text-gray-700 md:text-lg dark:text-zinc-400">
            I&apos;m a front-end developer passionate about creating fast,
            accessible, and visually engaging web experiences. Currently,
            I&apos;m expanding my skills into backend development while building
            modern, human-centered applications at{' '}
            <u className="decoration-blue-600 underline-offset-4 dark:decoration-blue-400">
              Digitas India
            </u>
            , using React, Next.js, and the latest web technologies.
          </p>
          <a
            href="/Abhishek-Maurya-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-max items-center justify-center rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 text-white shadow-md transition-all hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
          >
            <Typography variant="bodyLarge">Resume</Typography>
            <FileCode2 className="ml-1" size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
