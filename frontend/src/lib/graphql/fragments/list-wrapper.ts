import { LIST_FRAGMENT } from "./list";

export const LIST_WRAPPER_FRAGMENT = `
${LIST_FRAGMENT}
 fragment ListWrapper on ComponentSectionsListWrapper {
    __typename
    title
    description
    lists {
      ...ListFragment
    }
    footnote
  }
`;
