import Typography from "@/components/atoms/typography";
import Footnote from "@/components/molecules/footnote";
import Card, { type CardProps } from "@/components/organisms/card";
import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface CardCollectionData {
  __typename: "ComponentSectionsCardCollection";
  title: string;
  description: string | null;
  showBanner: boolean;
  cards: CardProps[];
  footnote: BlocksContent | null;
}

interface CardCollectionProps {
  component: CardCollectionData;
}

export default function CardCollection({ component }: CardCollectionProps) {
  const { title, description, showBanner, cards, footnote } = component;
  return (
    <section className="py-12">
      <Typography as="h2" className="mb-2">
        {title}
      </Typography>

      <Typography className="mb-4" as="p">
        {description}
      </Typography>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => {
          console.log("🚀 ~ CardCollection ~ card:", card);
          console.log("🚀 ~ CardCollection ~ showBanner:", showBanner);
          return <Card {...card} key={card.id} showBanner={showBanner} />;
        })}
      </div>
      {footnote && <Footnote body={footnote} />}
    </section>
  );
}
