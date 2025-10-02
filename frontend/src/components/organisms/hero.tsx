import { Typography } from "@/components/atoms";
import { FileCode2 } from "lucide-react";

export type HeroSectionProps = {
  greeting: string;
  name: string;
  role: string;
  company?: string;
  bio: string;
  resumeUrl?: string;
};

export default function Hero({
  greeting,
  name,
  role,
  company,
  bio,
  resumeUrl,
}: HeroSectionProps) {
  return (
    <section className="flex h-[calc(100dvh-64px)] flex-col pb-12 md:items-center md:px-0 md:pb-16">
      <div className="mt-auto flex flex-col space-y-2 text-left md:m-auto">
        <h3 className="text-xl text-gray-600 md:text-2xl dark:text-zinc-400">
          {greeting}
        </h3>

        <h1 className="text-5xl font-bold text-gray-900 md:text-7xl dark:text-zinc-100">
          {name},
        </h1>

        <h2 className="text-2xl font-medium text-gray-800 md:text-3xl dark:text-zinc-300">
          I am a{" "}
          <u className="decoration-blue-600 underline-offset-4 dark:decoration-blue-400">
            {role}
          </u>{" "}
          developer
          {company && (
            <>
              {" "}
              at{" "}
              <u className="decoration-blue-600 underline-offset-4 dark:decoration-blue-400">
                {company}
              </u>
            </>
          )}
          .
        </h2>

        <p className="mt-2 max-w-xl text-base text-gray-700 md:text-lg dark:text-zinc-400">
          {bio}
        </p>

        {resumeUrl && (
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-max items-center justify-center rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 text-white shadow-md transition-all hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
          >
            <Typography variant="bodyLarge">Resume</Typography>
            <FileCode2 className="ml-1" size={18} />
          </a>
        )}
      </div>
    </section>
  );
}
