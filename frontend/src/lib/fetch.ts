type GraphQLOptions = {
  url?: string;
  query: string;
  variables?: Record<string, unknown>;
  headers?: HeadersInit;
};

export async function fetchGraphQL<T>({
  url,
  query,
  variables,
  headers,
}: GraphQLOptions): Promise<T> {
  const requestHeaders = new Headers(headers);

  if (!url) {
    throw new Error("GraphQL API URL is required");
  }

  if (!requestHeaders.get("Authorization")) {
    throw new Error("GraphQL Authorization header is required");
  }

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `GraphQL request failed with HTTP ${response.status}: ${response.statusText}`,
    );
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors));
  }

  return result.data;
}
