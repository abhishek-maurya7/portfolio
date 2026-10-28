import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import Link, {
  type LinkData,
  type LinkWithIconData,
} from "@/components/molecules/link";
import Typography from "@/components/atoms/typography";
import Media from "@/components/molecules/media";
import type { MediaItem } from "@/components/atoms/video";

export interface Gallery {
  title: string;
  description: string | null;
  items: MediaItem[];
}

export interface HeroProps {
  __typename: "ComponentSectionsHero";
  greeting: string;
  name: string;
  shortIntro: BlocksContent;
  resume: LinkData;
  socials: LinkWithIconData[];
  showCase: Gallery | null;
}

export default function Hero({ data }: { data: HeroProps }) {
  const { greeting, name, shortIntro, resume, socials, showCase } = data;
  return (
    <div className="flex h-[calc(100dvh-72px)] items-end py-12 md:items-center md:justify-center">
      <div className="md:max-w-2/3 xl:max-w-1/3">
        <Typography className="text-text-muted">{greeting}</Typography>
        <Typography as="h1" className="text-hero-heading">
          {name}
        </Typography>
        <div className="[&_strong]:text-body-bold-muted mt-2">
          <BlocksRenderer content={shortIntro} />
        </div>
        <div className="mt-4 flex items-center gap-6">
          <Link data={resume} />
          <div className="flex gap-2">
            {socials.map((social) => {
              return <Link key={social.id} data={social} />;
            })}
          </div>
        </div>
        {showCase && (
          <div className="mt-10">
            <Typography>{showCase.title}</Typography>

            <div className="mt-1 grid auto-cols-fr grid-flow-col auto-rows-16 items-center gap-x-2 md:auto-rows-20">
              {showCase.items.map((item, index) => (
                <div
                  key={`${index}-${item.label}`}
                  className="border-border h-full min-h-0 min-w-0 overflow-hidden rounded-md border"
                >
                  <Media data={item} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
