import CardComponent from "./CardComponent";
import { HomePageType } from "@/types/homePageType";

const CardFeatured = ({ items }: { items: HomePageType[] }) => {
  return (
    <section>
      <ul className="grid gap-5 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item._id}>
            <CardComponent
              alt={item.alt}
              description={item.description}
              title={item.title}
              url={item.url}
              slug={item.slug}
              score={item.scores?.overall}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CardFeatured;
