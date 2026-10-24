import { LINK_FRAGMENT } from "@/lib/graphql/fragments/link";
import { LINK_WITH_ICON_FRAGMENT } from "@/lib/graphql/fragments/linkWithIcon";

export const HERO_FRAGMENT = `
  ${LINK_FRAGMENT}
  ${LINK_WITH_ICON_FRAGMENT}

  fragment Hero on ComponentSectionsHero {
    __typename
    greeting
    name
    role
    shortIntro
    resume {
      ...Link
    }
    socials {
      ...LinkWithIcon
    } 
    location
    openToWork
  }
`;
