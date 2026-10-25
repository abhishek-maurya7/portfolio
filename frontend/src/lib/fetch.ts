type GraphQLOptions = {
  url?: string;
  query?: string;
  variables?: Record<string, unknown>;
  headers?: HeadersInit;
};

class GraphQLError extends Error {
  errors: unknown[];

  constructor(message: string, errors: unknown[]) {
    super(message, { cause: errors });
    this.name = "GraphQLError";
    this.errors = errors;
  }
}

export async function fetchGraphQL<T>({
  url,
  query,
  variables,
  headers,
}: GraphQLOptions): Promise<T> {
  if (!url) {
    throw new TypeError("GraphQL API URL is required");
  }

  if (!query) {
    throw new TypeError("GraphQL query is required");
  }

  const requestHeaders = new Headers(headers);
  if (!requestHeaders.get("Authorization")) {
    throw new Error("GraphQL Authorization header is required");
  }

  let response: Response;
  try {
    response = await fetch(url, {
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
  } catch (networkError) {
    throw new Error("Network request failed", { cause: networkError });
  }

  if (!response.ok) {
    throw new Error(
      `GraphQL request failed with HTTP ${response.status}: ${response.statusText}`,
    );
  }

  let result;
  try {
    result = await response.json();
  } catch (jsonError) {
    throw new Error("Failed to parse response body as JSON", {
      cause: jsonError,
    });
  }

  if (result.errors && result.errors.length > 0) {
    throw new GraphQLError("GraphQL execution returned errors", result.errors);
  }

  return result.data;
}
