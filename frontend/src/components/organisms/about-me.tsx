"use client";

import Icon from "@/components/atoms/icons";
import Typography from "@/components/atoms/typography";
import Footnote from "@/components/molecules/footnote";
import {
  BlocksRenderer,
  type BlocksContent,
} from "@strapi/blocks-react-renderer";
import Image from "next/image";
import Link from "next/link";
export interface AboutMeSectionData {
  __typename: "ComponentSectionsAboutMe";
  title: string;
  body: BlocksContent;
  footnote?: BlocksContent | null;
}

export default function AboutMe({ section }: { section: AboutMeSectionData }) {
  return (
    <div
      className="mx-auto space-y-1 py-12"
      id={section.__typename}
      key={section.__typename}
    >
      <Typography as="h2" className="mb-2">
        {section.title}
      </Typography>
      <div className="lg:max-w-[80%]">
        <BlocksRenderer
          content={section.body}
          blocks={{
            image: ({ image }) => (
              <Image
                src={image.url}
                alt={image.alternativeText ?? ""}
                width={image.width}
                height={image.height}
                sizes="(min-width: 768px) 600px, 100vw"
                loading="lazy"
                className="mx-auto my-4 h-auto max-w-full rounded-xl md:w-1/3!"
              />
            ),
            link: ({ url, children, ...restProps }) => {
              const target =
                "target" in restProps ? restProps.target : undefined;

              return (
                <Link
                  href={url}
                  {...restProps}
                  className="text-link hover:text-link-hover focus-visible:outline-focus-ring underline underline-offset-2 focus-visible:outline-2"
                >
                  {children}
                  &nbsp;
                  {target === "_blank" && (
                    <Icon
                      name="external-link"
                      className="inline size-4 -translate-y-0.5"
                    />
                  )}
                </Link>
              );
            },
            heading: ({ children, level }) => {
              switch (level) {
                case 1:
                  return <Typography as="h1">{children}</Typography>;
                case 2:
                  return <Typography as="h2">{children}</Typography>;
                case 3:
                  return <Typography as="h3">{children}</Typography>;
                case 4:
                  return <Typography as="h4">{children}</Typography>;
                case 5:
                  return <Typography as="h5">{children}</Typography>;
                case 6:
                  return <Typography as="h6">{children}</Typography>;
                default:
                  return <Typography as="h1">{children}</Typography>;
              }
            },
            paragraph: (abc) => {
              return (
                <Typography as="p" className="text-justify">
                  {abc.children}
                </Typography>
              );
            },
            quote: ({ children }) => (
              <Typography as="em" className="inline-block w-full">
                <blockquote className="border-x-quote-border bg-quote-background relative overflow-hidden border-x-4 px-4 py-3">
                  {children}
                </blockquote>
              </Typography>
            ),
            code: ({ children }) => (
              <div className="bg-code-background text-code-foreground rounded-xl p-4 pt-3">
                <div className="overflow-auto">
                  <pre className="mb-1">
                    <code>{children}</code>
                  </pre>
                </div>
              </div>
            ),
          }}
        />
      </div>

      {section.footnote && <Footnote body={section.footnote} />}
    </div>
  );
}
