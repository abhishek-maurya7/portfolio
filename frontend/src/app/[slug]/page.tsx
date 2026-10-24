import { fetchGraphQL } from "@/lib/fetch";
import { GET_ALL_SLUGS } from "@/lib/graphql/queries/page/getAllSlugs";
import { GET_PAGE_BY_SLUG } from "@/lib/graphql/queries/page/getContentBySlug";
import ComponentAssembly, {
  type ComponentData,
} from "@/components/componentAssembly";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await fetchGraphQL<{ pages: { slug: string }[] }>({
    url: process.env.CMS_GRAPHQL_URL,
    query: GET_ALL_SLUGS,
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
  });

  return data.pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const data = await fetchGraphQL<{
    pages: {
      title: string;
      slug: string;
      sections: ComponentData[];
    }[];
  }>({
    url: process.env.CMS_GRAPHQL_URL,
    query: GET_PAGE_BY_SLUG,
    variables: { slug },
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
  });

  const pageData = data.pages[0];
  return (
    <div>
      {pageData.sections.map((component, index) => {
        return (
          <section key={index} className="px-4">
            <ComponentAssembly component={component} />
          </section>
        );
      })}
    </div>
  );
}
