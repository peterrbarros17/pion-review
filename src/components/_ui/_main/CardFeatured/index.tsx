import Image from "next/image";
import Link from "next/link";
import CardHeaders from "../CardsHeader";
import { AiOutlineWeibo } from "react-icons/ai";
import CardComponent from "./CardComponent";

interface CardFeaturedProps {}

const card = [
  {
    id: 1,
    alt: "resident evil outbreak",
    url: "https://wallpapers.com/images/hd/fan-art-umbrella-logo-resident-evil-hd-fdjmdag2fz7w6akt.jpg",
    title: "Residen Evil Outbreak",
    description:
      "Conheça esse game spin-off da franquia residenti evil que conta a história de outros sobreviventes de raccoon city",
    textButton: "Leia mais...",
    slug: "resident-evil-outbreak",
  },
];

export default function CardFeatured({}: CardFeaturedProps) {
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
        {card.map((item) => (
          <CardComponent
            key={item.id}
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
