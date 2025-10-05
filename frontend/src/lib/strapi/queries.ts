import { gql } from "graphql-request";

export const GET_HERO_QUERY = gql`
  query GetHero {
    hero {
      greeting
      name
      role
      company
      short_bio
      resume_url
    }
  }
`;

export const GET_NAVIGATION_QUERY = gql`
  query Navigation {
    navigation {
      documentId
      link {
        id
        label
        url
      }
    }
  }
`;
