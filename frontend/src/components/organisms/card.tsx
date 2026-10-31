import Typography from "@/components//atoms/typography";
import { cx } from "class-variance-authority";
import Image from "next/image";
import Link, { type LinkWithIconData } from "../molecules/link";

interface Tag {
  documentId: string;
  name: string;
}

interface Banner {
  url: string;
  width: number;
  height: number;
}

export interface CardProps {
  id: string;
  title: string;
  description?: string | null;
  banner: Banner | null;
  tags: Tag[];
  links: LinkWithIconData[];
  showBanner: boolean;
}

export default function Card({
  title,
  description,
  showBanner,
  banner,
  tags,
  links,
}: CardProps) {
  const hasBanner = showBanner && !!banner;
  const textLinks = links.filter((link) => !link.iconOnly);
  const iconLinks = links.filter((link) => link.iconOnly);

  return (
    <article className="bg-card group relative flex h-full flex-col overflow-hidden rounded-lg p-2">
      <div
        aria-hidden
        className={cx(
          "pointer-events-none absolute inset-x-0 top-0 z-0 bg-[linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] mask-[linear-gradient(to_bottom,black_70%,transparent)] bg-size-[24px_24px] opacity-[0.07] transition-opacity duration-300 [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent)] group-hover:opacity-[0.18]",
          hasBanner ? "h-3/4" : "h-1/2",
        )}
      />

      <div className="z-1 pb-4">
        {hasBanner && (
          <Image
            src={banner.url}
            width={banner.width}
            height={banner.height}
            alt={title}
            className="object-fit aspect-video h-50 w-full rounded"
          />
        )}

        <div className={`space-y-2 px-2 ${hasBanner ? "mt-4" : "pt-2"}`}>
          <Typography as="h3" className="text-card-heading">
            {title}
          </Typography>
          {description && (
            <Typography as="p" className="text-card-description">
              {description}
            </Typography>
          )}
        </div>

        {tags.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-3 px-2">
            {tags.map((tag) => (
              <li key={tag.documentId}>
                <Typography as="span" className="text-card-tag dark:opacity-70">
                  {tag.name}
                </Typography>
              </li>
            ))}
          </ul>
        )}
      </div>

      {links.length > 0 && (
        <div className="z-1 -mx-2 mt-auto -mb-2 flex flex-wrap justify-between gap-4 px-4 py-4">
          {textLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-5">
              {textLinks.map((link) => (
                <li key={link.id}>
                  <Link data={link} />
                </li>
              ))}
            </ul>
          )}
          {iconLinks.length > 0 && (
            <ul className="flex flex-wrap items-center gap-2">
              {iconLinks.map((link) => (
                <li key={link.id}>
                  <Link data={link} />
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </article>
  );
}
