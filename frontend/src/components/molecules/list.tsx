import Typography from "@/components/atoms/typography";

interface ListItem {
  id: string;
  label: string;
}

export interface ListProps {
  id: number; // the list's position in its section, used for the number
  title: string;
  items: ListItem[];
}

export default function List({ id, title, items }: ListProps) {
  return (
    <div className="group py-6 md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-8">
      <Typography as="h3" className="flex items-baseline gap-3">
        <Typography
          as="span"
          variant="bodyLarge"
          className="text-body-bold-muted group-hover:text-status-available tabular-nums transition-colors"
        >
          {String(id + 1).padStart(2, "0")}
        </Typography>
        {title}
      </Typography>

      <ul className="mt-4 ml-8 flex flex-wrap gap-2 md:mt-0">
        {items.map((item) => (
          <li key={item.id} className="bg-card rounded-md px-3 py-1.5">
            <Typography as="span">{item.label}</Typography>
          </li>
        ))}
      </ul>
    </div>
  );
}
