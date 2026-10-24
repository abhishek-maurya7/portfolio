import Link, {
  type LinkData,
  type SocialLinkData,
} from "@/components/molecules/link";
import Footnote from "@/components/molecules/footnote";
import Hero, { type HeroProps } from "@/components/organisms/hero";
import AboutMe, {
  type AboutMeSectionData,
  type FootnoteData,
} from "@/components/templates/aboutMe";

export type ComponentData =
  HeroProps | LinkData | SocialLinkData | AboutMeSectionData | FootnoteData;

interface ComponentAssemblyProps {
  component: ComponentData;
}

export default function ComponentAssembly({
  component,
}: ComponentAssemblyProps) {
  switch (component.__typename) {
    case "ComponentSectionsHero":
      return <Hero data={component} />;

    case "ComponentSharedLink":
    case "ComponentSharedLinkWithIcon":
      return <Link data={component} />;

    case "ComponentSectionsAboutMe":
      return <AboutMe section={component} />;

    case "ComponentSharedFootNote":
      return <Footnote component={component} />;

    default:
      console.log(
        `${component.__typename} has not been mapped with any component`,
      );
  }
}
