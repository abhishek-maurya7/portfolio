import { HOME_PAGE_QUERY } from "@/lib/graphql/queries/page/get-home-page-content";

export default function getQueryBySlug(slug: string) {
  const queryMap: Record<string, string | undefined> = {
    home: HOME_PAGE_QUERY,
  };

  return queryMap[slug];
}
