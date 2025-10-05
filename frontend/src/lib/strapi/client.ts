import { GraphQLClient } from "graphql-request";
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

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

export async function getStrapiData<T = any>(
  query: string | TypedDocumentNode<T, any>,
  variables: Record<string, any> = {}
): Promise<T> {
  try {
    const response: T = await strapiClient.request<T>(query, variables);
    return response;
  } catch (error) {
    console.error("Error fetching Strapi data:", error);
    throw error;
  }
}