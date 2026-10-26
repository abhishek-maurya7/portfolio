import ComponentAssembly, {
  type PageSectionData,
} from "@/components/component-assembly";
import { fetchGraphQL } from "@/lib/fetch";
import getQueryBySlug from "@/lib/get-query-by-slug";

type HomePageResponse = {
  pages: Array<{
    sections: PageSectionData[];
  }>;
};

export default async function Home() {
  const CMS_GRAPHQL_URL = process.env.CMS_GRAPHQL_URL;
  const CMS_API_TOKEN = process.env.CMS_API_TOKEN;
  const query = getQueryBySlug("home");

  if (!query) {
    throw new Error("No GraphQL query configured for the home page");
  }

  const response = await fetchGraphQL<HomePageResponse>({
    url: CMS_GRAPHQL_URL,
    query,
    variables: {
      slug: "home",
    },
    headers: {
      Authorization: `Bearer ${CMS_API_TOKEN}`,
    },
  });

  const pageData = response.pages[0];
  if (!pageData) {
    throw new Error("Home page content was not found");
  }

  return (
    <main className="*:px-3">
      {pageData.sections.map((component) => {
        if (!component.__typename) return;

        return (
          <ComponentAssembly key={component.__typename} component={component} />
        );
      })}
    </main>
  );
}
