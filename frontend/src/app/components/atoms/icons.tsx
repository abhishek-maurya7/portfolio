import {
  faGithub,
  faFacebook,
  faDiscord,
  faFigma,
  faYoutube,
  faCodepen,
  faInstagram,
  faTiktok,
  faDribbble,
  faMedium,
  faWhatsapp,
  faLine,
  faBehance,
  faProductHunt,
  faFreeCodeCamp,
  faGitlab,
  faSpotify,
  faPlaystation,
  faBlogger,
  faBluesky,
  faDev,
  faDigitalOcean,
  faHackerrank,
  faHuggingFace,
  faItunesNote,
  faKaggle,
  faLastfm,
  faLeetcode,
  faLinkedinIn,
  faLinktree,
  faMeta,
  faNotion,
  faNpm,
  faPinterestP,
  faQuora,
  faReddit,
  faSnapchat,
  faSteam,
  faThreads,
  faTumblr,
  faUpwork,
  faXbox,
  faXTwitter,
  faYCombinator,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowRight,
  Copy,
  ExternalLink,
  Globe,
  Link2,
  Mail,
  Send,
  TextAlignJustify,
  X,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

// Minimal shape of a Font Awesome icon definition (avoids an extra type import)
type FaDefinition = {
  iconName: string;
  icon: [number, number, unknown, unknown, string | string[]];
};

// Turns a Font Awesome definition into a component with Lucide-style props
function fromFa(def: FaDefinition): ComponentType<LucideProps> {
  const [width, height, , , pathData] = def.icon;
  const paths = Array.isArray(pathData) ? pathData : [pathData];

  function FaIcon({ size = 24, absoluteStrokeWidth, ...props }: LucideProps) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
        width={size}
        height={size}
        fill="currentColor"
        aria-hidden="true"
        {...props}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    );
  }
  FaIcon.displayName = `Fa(${def.iconName})`;
  return FaIcon;
}

const fontAwesomeIcon = {
  faGithub: fromFa(faGithub),
  faFacebook: fromFa(faFacebook),
  faDiscord: fromFa(faDiscord),
  faFigma: fromFa(faFigma),
  faYoutube: fromFa(faYoutube),
  faCodepen: fromFa(faCodepen),
  faInstagram: fromFa(faInstagram),
  faTiktok: fromFa(faTiktok),
  faDribbble: fromFa(faDribbble),
  faMedium: fromFa(faMedium),
  faWhatsapp: fromFa(faWhatsapp),
  faLine: fromFa(faLine),
  faBehance: fromFa(faBehance),
  faProductHunt: fromFa(faProductHunt),
  faFreeCodeCamp: fromFa(faFreeCodeCamp),
  faGitlab: fromFa(faGitlab),
  faSpotify: fromFa(faSpotify),
  faPlaystation: fromFa(faPlaystation),
  faBlogger: fromFa(faBlogger),
  faBluesky: fromFa(faBluesky),
  faDev: fromFa(faDev),
  faDigitalOcean: fromFa(faDigitalOcean),
  faHackerrank: fromFa(faHackerrank),
  faHuggingFace: fromFa(faHuggingFace),
  faItunesNote: fromFa(faItunesNote),
  faKaggle: fromFa(faKaggle),
  faLastfm: fromFa(faLastfm),
  faLeetcode: fromFa(faLeetcode),
  faLinkedinIn: fromFa(faLinkedinIn),
  faLinktree: fromFa(faLinktree),
  faMeta: fromFa(faMeta),
  faNotion: fromFa(faNotion),
  faNpm: fromFa(faNpm),
  faPinterestP: fromFa(faPinterestP),
  faQuora: fromFa(faQuora),
  faReddit: fromFa(faReddit),
  faSnapchat: fromFa(faSnapchat),
  faSteam: fromFa(faSteam),
  faThreads: fromFa(faThreads),
  faTumblr: fromFa(faTumblr),
  faUpwork: fromFa(faUpwork),
  faXbox: fromFa(faXbox),
  faXTwitter: fromFa(faXTwitter),
  faYCombinator: fromFa(faYCombinator),
} as const;

const lucideIcons = {
  "arrow-right": ArrowRight,
  "external-link": ExternalLink,
  mail: Mail,
  "text-align-justify": TextAlignJustify,
  x: X,
  "link-2": Link2,
  globe: Globe,
  telegram: Send,
  send: Send,
  copy: Copy,
} as const;

const iconMap = { ...lucideIcons, ...fontAwesomeIcon };

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name?: string;
}

export default function Icon({ name, ...props }: IconProps) {
  console.log("🚀 ~ Icon ~ name:", name);
  if (!name) return null;

  const IconComponent = iconMap[name as IconName];

  if (!IconComponent) {
    console.warn(
      `[Icon] "${name}" is not in iconMap. Add it to components/atoms/icons.tsx`,
    );
    return null;
  }

  return <IconComponent {...props} />;
}
