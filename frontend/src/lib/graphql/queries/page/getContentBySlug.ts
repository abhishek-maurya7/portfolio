import { HERO_FRAGMENT } from "@/lib/graphql/fragments/hero";
import { ABOUT_ME_FRAGMENT } from "@/lib/graphql/fragments/aboutMe";

export const GET_PAGE_BY_SLUG = `
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
