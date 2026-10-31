import {
  faBehance,
  faBlogger,
  faBluesky,
  faCodepen,
  faDev,
  faDigitalOcean,
  faDiscord,
  faDribbble,
  faFacebook,
  faFigma,
  faFreeCodeCamp,
  faGithub,
  faGitlab,
  faHackerrank,
  faHuggingFace,
  faInstagram,
  faItunesNote,
  faKaggle,
  faLastfm,
  faLeetcode,
  faLine,
  faLinkedinIn,
  faLinktree,
  faMedium,
  faMeta,
  faNotion,
  faNpm,
  faPinterestP,
  faPlaystation,
  faProductHunt,
  faQuora,
  faReddit,
  faSnapchat,
  faSpotify,
  faSteam,
  faThreads,
  faTiktok,
  faTumblr,
  faUpwork,
  faWhatsapp,
  faXbox,
  faXTwitter,
  faYCombinator,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  Copy,
  EighthNote,
  ExternalLink,
  Globe,
  Link2,
  Mail,
  Moon,
  Pause,
  Play,
  Send,
  Sun,
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

  function FaIcon({ size = 24, ...props }: LucideProps) {
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
  github: fromFa(faGithub),
  facebook: fromFa(faFacebook),
  discord: fromFa(faDiscord),
  figma: fromFa(faFigma),
  youtube: fromFa(faYoutube),
  codepen: fromFa(faCodepen),
  instagram: fromFa(faInstagram),
  tiktok: fromFa(faTiktok),
  dribbble: fromFa(faDribbble),
  medium: fromFa(faMedium),
  whatsapp: fromFa(faWhatsapp),
  line: fromFa(faLine),
  behance: fromFa(faBehance),
  product_hunt: fromFa(faProductHunt),
  free_code_camp: fromFa(faFreeCodeCamp),
  gitlab: fromFa(faGitlab),
  spotify: fromFa(faSpotify),
  playstation: fromFa(faPlaystation),
  blogger: fromFa(faBlogger),
  bluesky: fromFa(faBluesky),
  dev: fromFa(faDev),
  digital_ocean: fromFa(faDigitalOcean),
  hackerrank: fromFa(faHackerrank),
  hugging_face: fromFa(faHuggingFace),
  itunes_note: fromFa(faItunesNote),
  kaggle: fromFa(faKaggle),
  lastfm: fromFa(faLastfm),
  leetcode: fromFa(faLeetcode),
  linkedin_in: fromFa(faLinkedinIn),
  linktree: fromFa(faLinktree),
  meta: fromFa(faMeta),
  notion: fromFa(faNotion),
  npm: fromFa(faNpm),
  pinterest_p: fromFa(faPinterestP),
  quora: fromFa(faQuora),
  reddit: fromFa(faReddit),
  snapchat: fromFa(faSnapchat),
  steam: fromFa(faSteam),
  threads: fromFa(faThreads),
  tumblr: fromFa(faTumblr),
  upwork: fromFa(faUpwork),
  xbox: fromFa(faXbox),
  x_twitter: fromFa(faXTwitter),
  y_combinator: fromFa(faYCombinator),
} as const;

const lucideIcons = {
  arrow_right: ArrowRight,
  external_link: ExternalLink,
  mail: Mail,
  text_align_justify: TextAlignJustify,
  x: X,
  link_2: Link2,
  globe: Globe,
  telegram: Send,
  send: Send,
  copy: Copy,
  sun: Sun,
  moon: Moon,
  play: Play,
  pause: Pause,
  eighth_notes: EighthNote,
  arrow_up_right: ArrowUpRight,
  clipboard_list: ClipboardList,
} as const;

const iconMap = { ...lucideIcons, ...fontAwesomeIcon };

export type IconName = keyof typeof iconMap;

interface IconProps extends LucideProps {
  name?: string;
  className?: string;
}

export default function Icon({ name, ...props }: IconProps) {
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
