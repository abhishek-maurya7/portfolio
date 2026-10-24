import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";
import { cx } from "class-variance-authority";

import { LinkData, SocialLinkData } from "@/components/atoms/link";
import Typography from "@/components/atoms/typography";
import ComponentAssembly from "@/components/templates/componentAssembly";

export interface HeroProps {
  __typename: "ComponentSectionsHero";
  greeting: string;
  name: string;
  role: string;
  shortIntro: BlocksContent;
  resume: LinkData;
  socials: SocialLinkData[];
  location?: string;
  openToWork?: string;
}

export default function Hero({ data }: { data: HeroProps }) {
  const {
    greeting,
    name,
    role,
    shortIntro,
    resume,
    socials,
    location,
    openToWork,
  } = data;
  return (
    <div className="flex h-[calc(100dvh-72px)] items-end py-12 md:items-center md:justify-center">
      <div className="md:max-w-2/3 lg:max-w-1/3">
        <Typography>{greeting}</Typography>
        <Typography as="h1">{name}</Typography>
        <Typography className="text-xl leading-snug">
          and I am {role}
        </Typography>
        <div className="mt-2 text-[#E4E4E7]">
          <BlocksRenderer content={shortIntro} />
        </div>
        <div className="mt-4 flex items-center gap-6">
          <ComponentAssembly component={resume} />
          <div className="flex gap-2">
            {socials.map((social) => {
              return <ComponentAssembly key={social.id} component={social} />;
            })}
          </div>
        </div>
        {(location || openToWork) && (
          <div
            className={cx(
              "mt-12 flex items-center",
              location && openToWork ? "justify-between" : "justify-end",
            )}
          >
            {location && <Typography>{location}</Typography>}

            {openToWork && (
              <div className="flex items-center">
                <span className="mr-1 inline-block h-3 w-2 animate-[flip_3s_ease-in-out_infinite] rounded-full border-2 border-green-400 transform-3d"></span>
                <Typography>Open to Work</Typography>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
