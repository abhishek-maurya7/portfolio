export type RichTextChild = {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
};

export type LinkChild = {
  type: "link";
  url: string;
  children: RichTextChild[];
};

export type ParagraphNode = {
  type: "paragraph";
  children: Array<RichTextChild | LinkChild>;
};

export type HeadingNode = {
  type: "heading";
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: Array<RichTextChild | LinkChild>;
};

export type ListNode = {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemNode[];
};

export type ListItemNode = {
  type: "list-item";
  children: Array<RichTextChild | LinkChild>;
};

export type RichTextNode = ParagraphNode | HeadingNode | ListNode | ListItemNode | LinkChild;

export interface RichTextProps {
  content: RichTextNode[];
}
