import CardComponent from "@/components/_ui/_main/CardFeatured/CardComponent";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import type { HomePageType, ReviewPost } from "@/types/homePageType";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews de jogos",
  description:
    "Todas as reviews do Pion Review: notas, capas e análise a partir de gameplay real.",
  alternates: { canonical: "/reviews" },
};

const ReviewsPage = async () => {
  const data = (await getHomePost("reviewspage")) as Array<
    HomePageType & Partial<ReviewPost>
  >;

  return (
    <>
      <CardsHeader
        title="Reviews"
        hint="Análises curtas, com nota e capa. Feitas a partir das lives."
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
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
    </>
  );
};

export default ReviewsPage;
