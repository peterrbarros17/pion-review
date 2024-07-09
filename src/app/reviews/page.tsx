import CardComponent from "@/components/_ui/_main/CardFeatured/CardComponent";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import { HomePageType } from "@/types/homePageType";
import { Metadata } from "next";
import { MdRateReview } from "react-icons/md";

export const metadata: Metadata = {
  title: "Acompanhe a review do seu jogo desejado - Pion Review",
  description: "App games review",
};

export default async function ReviewsPage() {
  const data: HomePageType[] = await getHomePost("reviewspage");

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
        {data.map((item) => (
          <li key={item._id} className="flex-auto md:w-1/3">
            <CardComponent
              alt={item.alt}
              description={item.description}
              title={item.title}
              url={item.url}
              textButton={item.textButton}
              slug={item.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
