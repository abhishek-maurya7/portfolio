import Image from "next/image";
import Link, { type LinkWithIconData } from "../molecules/link";
import Typography from "../atoms/typography";

interface Tag {
  documentId: string;
  name: string;
}

interface Banner {
  url: string;
  width: number;
  height: number;
}

interface CardProps {
  id: string;
  title: string;
  description?: string;
  banner: Banner | null;
  tags: Tag[];
  links: LinkWithIconData[];
}

export default function Card({
  id,
  title,
  description,
  banner,
  tags,
  links,
}: CardProps) {
  return (
    <div className="bg-card rounded-lg p-2">
      <div className="bg-card">
        {banner && (
          <Image
            src={banner.url}
            width={banner.width}
            height={banner.height}
            alt={title}
            className="rounded-lg"
          />
        )}
      </div>
      <div className="p-2">
        <Typography as="h3">{title}</Typography>
        {description && <Typography as="p">{description}</Typography>}
      </div>
      {tags && (
        <ul className="flex flex-wrap gap-3 p-2">
          {tags.map((tag) => (
            <li key={tag.documentId}>
              <Typography as="span" className="text-status-available/70">
                {tag.name}
              </Typography>
            </li>
          ))}
        </ul>
      )}
      <div className="border-border border-t p-2">
        {links.map((link) => (
          <Link key={link.id} data={link} />
        ))}
      </div>
    </div>
  );
}
