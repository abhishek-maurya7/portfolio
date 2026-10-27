import { LINK_WITH_ICON_FRAGMENT } from "./link-with-icon";

export const CARD_FRAGMENT = `
  fragment Card on ComponentSharedProjectCard {
    id
    title
    description
    tags {
      documentId
      name
    }
    links {
      ...LinkWithIcon
    }
    banner {
      url
      width
      height
      alternativeText
      caption
    }
  }
`;
