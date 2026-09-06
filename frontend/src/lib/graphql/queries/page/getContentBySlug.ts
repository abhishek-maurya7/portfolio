import { HERO_FRAGMENT } from "@/lib/graphql/fragments/hero";

export const GET_PAGE_BY_SLUG = `
  ${HERO_FRAGMENT}

  query Page($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      title
      slug
      sections {
        ...Hero
      }
    }
  }
`;