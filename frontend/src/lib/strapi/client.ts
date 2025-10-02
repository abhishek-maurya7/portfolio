import { GraphQLClient } from "graphql-request";

const url = process.env.STRAPI_BASE_URL;
const token = process.env.STRAPI_READ_ONLY_ACCESS_TOKEN;

if (!url) {
  throw new Error("Missing required environment variable: STRAPI_BASE_URL");
}

if (!token) {
  throw new Error("Missing required environment variable: STRAPI_READ_ONLY_ACCESS_TOKEN");
}

export const strapiClient = new GraphQLClient(`${url}/graphql`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});