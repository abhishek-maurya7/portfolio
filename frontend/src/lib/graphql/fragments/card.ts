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
