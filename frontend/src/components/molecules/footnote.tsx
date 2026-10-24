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
      className="border-border text-text-muted/70 mt-10 border-t-2 py-2 text-sm"
      id={component.__typename}
    >
      <BlocksRenderer content={component.body} />
    </div>
  );
}
