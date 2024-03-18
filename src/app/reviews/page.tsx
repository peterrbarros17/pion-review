import CardComponent from "@/components/_ui/_main/CardFeatured/CardComponent";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { Metadata } from "next";
import { MdRateReview } from "react-icons/md";

export const metadata: Metadata = {
  title: "Acompanhe a review do seu jogo desejado - Pion Review",
  description: "App games review",
};

interface ReviewsPageProps {}

const card = [
  {
    id: 1,
    alt: "resident evil",
    url: "https://wallpapers.com/images/hd/resident-evil-biohazard-horror-game-series-jill-valentine-gz9olv8bqzklu3te.jpg",
    title: "Residen Evil",
    description:
      "Conheça os principais personagens, enredo e dicas sobre Resident evil 3",
    textButton: "Leia mais...",
    slug: "resident-evil-3",
  },
  {
    id: 2,
    alt: "monster hunter iceborne",
    url: "https://wallpapers.com/images/hd/monster-hunter-world-iceborne-velkhana-szbpapsm90ebg1az.jpg",
    title: "Monster hunter iceborne",
    description:
      "Aprenda as melhores builds e armas para o end game de monster hunter iceborne",
    textButton: "Leia mais...",
    slug: "monster-hunter-iceborne",
  },
  {
    id: 3,
    alt: "fortnite battle royale",
    url: "https://wallpapers.com/images/hd/1080-fortnite-1920-x-1080-3pf6unakulvsai66.jpg",
    title: "Fortnite battle royale",
    description: "Aprenda a jogar o battle royale mais famoso de construção",
    textButton: "Leia mais...",
    slug: "fortnite-battle-royale-construcoes",
  },
];

export default async function ReviewsPage({}: ReviewsPageProps) {
  return (
    <div className="bg-[var(--black)] p-4">
      <div className="my-4">
        <CardsHeader
          title="Reviews"
          icon={MdRateReview}
          color="var(--red)"
          size={24}
        />
      </div>
      <ul className="flex flex-wrap gap-4">
        {card.map((item) => (
          <div key={item.id} className="flex-auto md:w-1/3">
            <CardComponent
              key={item.id}
              alt={item.alt}
              description={item.description}
              title={item.title}
              url={item.url}
              textButton={item.textButton}
              slug={item.slug}
            />
          </div>
        ))}
      </ul>
    </div>
  );
}
