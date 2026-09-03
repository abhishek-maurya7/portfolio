import { LINK_FRAGMENT } from "./link";

export const LINK_WITH_ICON_FRAGMENT = `
  ${LINK_FRAGMENT}

  fragment LinkWithIcon on ComponentSharedLinkWithIcon {
    icon
    link {
      ...Link
    }
  }
`;
