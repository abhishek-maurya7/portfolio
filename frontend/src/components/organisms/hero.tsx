import Typography from "@/components/atoms/typography";
import Link, {
  type LinkData,
  type LinkWithIconData,
} from "@/components/molecules/link";
import Media, { type MediaItem } from "@/components/molecules/media";
import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { cx } from "class-variance-authority";

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
  location?: string;
  openToWork?: string;
  showCase: Gallery | null;
}

export default function Hero({ data }: { data: HeroProps }) {
  const {
    greeting,
    name,
    shortIntro,
    resume,
    socials,
    location,
    openToWork,
    showCase,
  } = data;
  return (
    <div className="flex h-[calc(100dvh-72px)] items-end py-12 md:items-center md:justify-center">
      <div className="lg:w-4/5 xl:w-2/3">
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
        {(location || openToWork) && (
          <div
            className={cx(
              "text-text-muted mt-12 flex items-center text-sm",
              location && openToWork ? "justify-between" : "justify-end",
            )}
          >
            {location && <Typography>{location}</Typography>}

            {openToWork && (
              <div className="flex items-center">
                <span className="border-status-available mr-1 inline-block h-3 w-2 animate-[flip_3s_ease-in-out_infinite] rounded-full border-2 transform-3d"></span>
                <Typography>Open to Work</Typography>
              </div>
            )}
          </div>
        )}
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
