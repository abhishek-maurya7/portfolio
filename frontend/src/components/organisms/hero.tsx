
import { Typography } from "../atoms";
import { FileCode2 } from "lucide-react";
import RichText from "./richText";

import type { HeroSectionProps } from "@/types/components/hero.types";
export default function Hero({
  greeting,
  name,
  role,
  company,
  short_bio,
  resume_url,
}: HeroSectionProps) {
  return (
    <section className="flex h-[calc(100dvh-64px)] flex-col pb-12 md:items-center md:px-0 md:pb-16 lg:max-w-2/4 lg:mx-auto">
      <div className="mt-auto flex flex-col space-y-2 text-left md:m-auto">
        <Typography variant="h3">{greeting}</Typography>
        <Typography variant="h1">{name},</Typography>
        <Typography variant="h2">
          I am a{" "}
          <u className="decoration-blue-600 underline-offset-4 dark:decoration-blue-400">
            {role}
          </u>{" "}
          developer.
        </Typography>
        <RichText content={short_bio} />
        <a
          href={resume_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex w-max items-center justify-center rounded-sm bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2 text-white shadow-md transition-all hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-400"
        >
          <span className="text-xl">Resume</span>
          <FileCode2 className="ml-1" size={18} />
        </a>
      </div>
    </section>
  );
}
