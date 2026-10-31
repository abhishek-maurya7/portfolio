import ComponentAssembly, {
  type PageSectionData,
} from "@/components/component-assembly";

import { fetchGraphQL } from "@/lib/fetch";
import getQueryBySlug from "@/lib/get-query-by-slug";
import { GET_ALL_SLUGS } from "@/lib/graphql/queries/page/get-all-slugs";

import { notFound, redirect } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
  const data = await fetchGraphQL<{ pages: { slug: string }[] }>({
    url: process.env.CMS_GRAPHQL_URL,
    query: GET_ALL_SLUGS,
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
  });

  return data.pages
    .filter((page) => page.slug !== "home")
    .map((page) => ({ slug: page.slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug === "home") redirect("/");

  const CMS_GRAPHQL_QUERY = getQueryBySlug(slug);
  if (!CMS_GRAPHQL_QUERY) {
    notFound();
  }

  const data = await fetchGraphQL<{
    pages?:
      | {
          title: string;
          slug: string;
          sections?: PageSectionData[];
        }[]
      | null;
  }>({
    url: process.env.CMS_GRAPHQL_URL,
    query: CMS_GRAPHQL_QUERY,
    variables: { filters: { slug: { eq: slug } } },
    headers: {
      Authorization: `Bearer ${process.env.CMS_API_TOKEN}`,
    },
  });

  const pageData = data.pages?.[0];
  if (!pageData || !pageData.sections?.length) {
    notFound();
  }

  return (
    <div>
      {pageData.sections.map((component) => {
        return (
          <ComponentAssembly key={component.__typename} component={component} />
        );
      })}
    </div>
  );
}
