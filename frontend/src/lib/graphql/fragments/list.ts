import { LIST_ITEM_FRAGMENT } from "./list-item";

export const LIST_FRAGMENT = `
${LIST_ITEM_FRAGMENT}
  fragment ListFragment on ComponentSharedList {
    id
    title
    items {
      ...ListItemFragment
    }
  }
`;
