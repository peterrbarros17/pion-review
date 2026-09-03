import CardComponent from "@/components/_ui/_main/CardFeatured/CardComponent";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import type { HomePageType, ReviewPost } from "@/types/homePageType";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jogos em alta",
  description: "As reviews mais recentes e bem avaliadas do Pion Review.",
  alternates: { canonical: "/popular" },
};

const PopularPage = async () => {
  const data = (await getHomePost("reviewspage")) as Array<
    HomePageType & Partial<ReviewPost>
  >;
  const ranked = [...data].sort(
    (a, b) => (b.scores?.overall ?? 0) - (a.scores?.overall ?? 0)
  );

  return (
    <>
      <CardsHeader
        title="Popular"
        hint="Ordenado pela nota geral quando ela existe."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {ranked.map((item) => (
          <li key={item._id}>
            <CardComponent
              alt={item.alt}
              description={item.description}
              title={item.title}
              url={item.url}
              slug={item.slug}
              score={item.scores?.overall}
              sourceVideo={item.sourceVideo}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default PopularPage;
