import Link, {
  type LinkData,
  type SocialLinkData,
} from "@/app/components/atoms/link";
import Hero, { type HeroProps } from "@/app/components/organisms/hero";
import AboutMe, {
  type AboutMeSectionData,
  type FootnoteData,
} from "@/app/components/templates/aboutMe";
import Footnote from "@/app/components/molecules/footnote";

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
