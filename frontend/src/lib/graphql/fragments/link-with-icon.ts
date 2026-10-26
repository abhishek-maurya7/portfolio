export const LINK_WITH_ICON_FRAGMENT = `
  fragment LinkWithIcon on ComponentSharedLinkWithIcon {
    __typename
    id
    icon
    link {
      ...Link
    }
    iconOnly
  }
`;
