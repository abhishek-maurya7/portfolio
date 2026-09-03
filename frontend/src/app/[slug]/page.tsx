import { fetchGraphQL } from "@/lib/fetch";
import { GET_ALL_SLUGS } from "@/lib/graphql/queries/page/getAllSlugs";

export const dynamicParams = false;

export async function generateStaticParams() {


    const data = await fetchGraphQL<{pages: { slug: string }[] }>({
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

export default function Page() {
    return (
        <div>
            page page
        </div>
    );
}