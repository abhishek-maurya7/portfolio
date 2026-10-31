import AboutMe, {
  type AboutMeSectionData,
} from "@/components/organisms/about-me";
import CardCollection, {
  type CardCollectionData,
} from "@/components/organisms/card-collection";
import Hero, { type HeroProps } from "@/components/organisms/hero";

export type PageSectionData =
  HeroProps | AboutMeSectionData | CardCollectionData;

interface ComponentAssemblyProps {
  component: PageSectionData;
}

export default function ComponentAssembly({
  component,
}: ComponentAssemblyProps) {
  switch (component.__typename) {
    case "ComponentSectionsHero":
      return <Hero data={component} />;
    case "ComponentSectionsAboutMe":
      return <AboutMe section={component} />;

    case "ComponentSectionsCardCollection":
      return <CardCollection component={component} />;

    default: {
      const { __typename } = component as { __typename?: string };
      if (!__typename) return null;

      console.warn(
        `[ComponentAssembly] "${__typename}" is not mapped to a component`,
      );

      return (
        <section id={__typename}>
          {`${__typename} has not been mapped to any component in the assembly`}
        </section>
      );
    }
  }
}
