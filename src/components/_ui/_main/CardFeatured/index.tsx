import CardHeaders from "../CardsHeader";
import { AiOutlineWeibo } from "react-icons/ai";
import CardComponent from "./CardComponent";
import { HomePageType } from "@/types/homePageType";

interface MyItems {
  items: HomePageType[];
}

export default function CardFeatured({ items }: MyItems) {
  return (
    <section className="w-full p-2 md:p-0 md:w-2/3 bg-[var(--gray-dark)] overflow-hidden flex flex-col">
      <div className="my-4 ml-0 md:ml-2">
        <CardHeaders
          title="Em alta"
          icon={AiOutlineWeibo}
          color="var(--red)"
          size={24}
        />
      </div>

      <div className="flex flex-col gap-4">
        {items.map((item: any) => (
          <CardComponent
            key={item._id}
            alt={item.alt}
            description={item.description}
            title={item.title}
            url={item.url}
            textButton={item.textButton}
            slug={item.slug}
          />
        ))}
      </div>
    </section>
  );
}
