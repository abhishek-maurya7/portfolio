export const CARD_FRAGMENT = `
  fragment Card on ComponentSharedCard {
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
    }
  }
`;
