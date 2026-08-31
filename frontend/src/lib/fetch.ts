type FetchGraphQLOptions = {
  method?: RequestInit["method"];
  headers?: HeadersInit;
  variables?: Record<string, unknown>;
};

export async function fetchGraphQL(
  url: string,
  query: string,
  options: FetchGraphQLOptions = {}
) {
  const { method = "POST", headers, variables } = options;

  const response = await fetch(url, {
    method,
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
    throw new Error("GraphQL query failed");
  }

  const result = await response.json();

  if (result.errors) {
    throw new Error(JSON.stringify(result.errors));
  }

  return result.data;
}