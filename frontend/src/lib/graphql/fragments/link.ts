export const LINK_FRAGMENT = `
  fragment Link on ComponentSharedLink {
    label
    href
    target
    rel
    variant
  }
`;

export const LINK_WITH_ID_FRAGMENT = `
  fragment LinkWithId on ComponentSharedLink {
    id
    ...Link
  }
`;
