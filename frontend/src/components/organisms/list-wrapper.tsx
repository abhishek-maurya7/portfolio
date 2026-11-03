import Typography from "@/components/atoms/typography";
import List, { type ListProps } from "@/components/molecules/list";
import type { BlocksContent } from "@strapi/blocks-react-renderer";
import Footnote from "../molecules/footnote";

export interface ListWrapperData {
  __typename: "ComponentSectionsListWrapper";
  title: string;
  description: string | null;
  lists: Array<Omit<ListProps, "id"> & { id: string }>;
  footnote: BlocksContent | null;
}

export default function ListWrapper({
  component,
}: {
  component: ListWrapperData;
}) {
  const { title, description, lists, footnote } = component;

  return (
    <section aria-label={title} className="py-12">
      <header className="mb-4 max-w-2xl space-y-2">
        <Typography as="h2">{title}</Typography>
        {description && <Typography as="p">{description}</Typography>}
      </header>

      <div className="divide-y divide-current/10 border-t border-current/10">
        {lists.map((list, index) => (
          <List
            key={list.id}
            id={index}
            title={list.title}
            items={list.items}
          />
        ))}
      </div>

      {footnote && <Footnote body={footnote} />}
    </section>
  );
}
