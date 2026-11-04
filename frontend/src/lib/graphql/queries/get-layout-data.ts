import { LINK_FRAGMENT } from "@/lib/graphql/fragments/link";

export const GET_LAYOUT_DATA_QUERY = `
  ${LINK_FRAGMENT}

  query Header {
    header {
      logo {
        label
        media {
          url
          mime
        }
      }
      links {
        ...Link
      }
    }

    footer {
      links {
        ...Link
      }
    }
  }
`;
