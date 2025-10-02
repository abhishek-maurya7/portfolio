import { gql } from "graphql-request";

export const HERO_QUERY = gql`
  query Hero {
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
