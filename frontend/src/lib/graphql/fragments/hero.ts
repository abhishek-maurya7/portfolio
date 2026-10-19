import { LINK_FRAGMENT } from "./link";
import { LINK_WITH_ICON_FRAGMENT } from "./linkWithIcon";

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
