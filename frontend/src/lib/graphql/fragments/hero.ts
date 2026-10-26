import { LINK_FRAGMENT } from "@/lib/graphql/fragments/link";
import { LINK_WITH_ICON_FRAGMENT } from "@/lib/graphql/fragments/link-with-icon";
import { MEDIA_ITEM_FRAGMENT } from "@/lib/graphql/fragments/media-item";

export const HERO_FRAGMENT = `
  ${LINK_FRAGMENT}
  ${LINK_WITH_ICON_FRAGMENT}
  ${MEDIA_ITEM_FRAGMENT}

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
    showCase {
      title
      description
      items {
        ...MediaItem
      }
    }
  }
`;
