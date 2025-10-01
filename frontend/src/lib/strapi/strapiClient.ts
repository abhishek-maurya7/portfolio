import { GraphQLClient } from "graphql-request";

if (!process.env.STRAPI_BASE_URL || !process.env.STRAPI_READ_ONLY_ACCESS_TOKEN) {
  throw new Error("Missing Strapi environment variables");
}

export const strapiClient = new GraphQLClient(
  `${process.env.STRAPI_BASE_URL}/graphql`,
  {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_READ_ONLY_ACCESS_TOKEN}`,
    },
  }
);
