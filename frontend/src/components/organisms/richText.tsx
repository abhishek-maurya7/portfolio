import { cn } from "@/lib/utils";
import { Typography } from "../atoms";
import type {
  RichTextNode,
  RichTextProps,
} from "@/types/components/richText.types";
import Link from "next/link";

export default function RichText({ content }: RichTextProps) {
  function renderNode(node: RichTextNode | any, key: number): React.ReactNode {
    switch (node.type) {
      case "paragraph":
        return (
          <Typography variant="bodyLarge" key={key}>
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </Typography>
        );
      case "heading": {
        const variant = `h${node.level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
        return (
          <Typography variant={variant} key={key}>
            {node.children?.map((child: any, i: number) => renderNode(child, i))}
          </Typography>
        );
      }
      case "list": {
        const ListTag = node.format === "ordered" ? "ol" : "ul";
        return (
          <ListTag
            key={key}
            className={cn("ml-4 mb-2 marker:text-xl", {
              "list-disc": ListTag === "ul",
              "list-decimal": ListTag === "ol",
            })}
          >
            {node.children.map((item: any, i: number) => (
              <li key={i} className="mb-1">
                <Typography variant="bodyLarge">
                  {item.children?.map((child: any, j: number) =>
                    renderNode(child, j)
                  )}
                </Typography>
              </li>
            ))}
          </ListTag>
        );
      }
      case "link": {
        return (
          <Link
            href={node.url}
            key={key}
            className="underline text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            {node.children?.map((child: any, i: number) =>
              renderNode(child, i)
            )}
          </Link>
        );
      }
      default:
        let el: React.ReactNode = node.text;
        if (node.bold) el = <strong key={key}>{el}</strong>;
        if (node.italic) el = <em key={key}>{el}</em>;
        if (node.underline) el = <u key={key}>{el}</u>;
        if (node.strikethrough) el = <s key={key}>{el}</s>;
        if (node.code)
          el = (
            <code
              key={key}
              className="px-1 py-0.5 rounded bg-gray-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 font-mono text-sm"
            >
              {el}
            </code>
          );
        return el;
    }
  }
  return <>{content.map((node, key) => renderNode(node, key))}</>;
}
