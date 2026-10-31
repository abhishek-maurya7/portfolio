import {
  type BlocksContent,
  BlocksRenderer,
} from "@strapi/blocks-react-renderer";

export default function Footnote({ body }: { body: BlocksContent }) {
  return (
    <div className="border-border text-text-muted/70 mt-5 border-t-2 py-2 text-sm">
      <BlocksRenderer content={body} />
    </div>
  );
}
