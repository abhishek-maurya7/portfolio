import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";

interface FootnoteProps {
  __typename: "ComponentSharedFootNote";
  body: BlocksContent;
}

export default function Footnote({ component }: { component: FootnoteProps }) {
  return (
    <div
      className="my-2 border-t-2 border-[#233554] py-2"
      id={component.__typename}
    >
      <BlocksRenderer content={component.body} />
    </div>
  );
}
