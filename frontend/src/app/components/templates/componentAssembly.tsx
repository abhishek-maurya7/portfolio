import Link, {
  type LinkData,
  type SocialLinkData,
} from "@/app/components/atoms/link";
import Hero, { type HeroProps } from "@/app/components/molecules/hero";

export type ComponentData = HeroProps | LinkData | SocialLinkData;

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

    default:
      console.log(
        `${component.__typename} has not been mapped with any component`,
      );
  }
}
