import { HERO_FRAGMENT } from "@/lib/graphql/fragments/hero";
import { ABOUT_ME_FRAGMENT } from "@/lib/graphql/fragments/about-me";

export const HOME_PAGE_QUERY = `
  ${HERO_FRAGMENT}
  ${ABOUT_ME_FRAGMENT}

  query Page($slug: String!) {
    pages(filters: { slug: { eq: $slug } }) {
      title
      slug
      sections {
        ...Hero
        ...AboutMe
      }
    }
  }
`;
