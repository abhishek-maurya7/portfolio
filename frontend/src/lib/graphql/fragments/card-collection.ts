import { CARD_FRAGMENT } from "@/lib/graphql/fragments/card";

export const CARD_COLLECTION_FRAGMENT = `
${CARD_FRAGMENT}
  fragment CardCollection on ComponentSectionsProjects {
    title
    description
    cards {
      ...Card
    }
    footnote {
      __typename
      body
    }
  }
`;
