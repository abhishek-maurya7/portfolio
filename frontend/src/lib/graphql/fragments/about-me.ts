export const ABOUT_ME_FRAGMENT = `
  fragment AboutMe on ComponentSectionsAboutMe {
    __typename
    title
    body
    footnote {
      body
    }
  }
`;
