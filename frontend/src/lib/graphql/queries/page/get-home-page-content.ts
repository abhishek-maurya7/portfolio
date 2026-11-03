import { ABOUT_ME_FRAGMENT } from "@/lib/graphql/fragments/about-me";
import { CARD_COLLECTION_FRAGMENT } from "@/lib/graphql/fragments/card-collection";
import { HERO_FRAGMENT } from "@/lib/graphql/fragments/hero";
import { LIST_WRAPPER_FRAGMENT } from "@/lib/graphql/fragments/list-wrapper";

export const HOME_PAGE_QUERY = `
  ${HERO_FRAGMENT}
  ${ABOUT_ME_FRAGMENT}
  ${CARD_COLLECTION_FRAGMENT}
  ${LIST_WRAPPER_FRAGMENT}

  query Page($filters: PageFiltersInput) {
    pages(filters: $filters) {
      title
      slug
      sections {
        ...Hero
        ...AboutMe
        ...CardCollection
        ...ListWrapper
      }
      documentId
    }
  }
`;
