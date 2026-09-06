export const LINK_WITH_ICON_FRAGMENT = `
  fragment LinkWithIcon on ComponentSharedLinkWithIcon {
    icon
    link {
      ...Link
    }
  }
`;
