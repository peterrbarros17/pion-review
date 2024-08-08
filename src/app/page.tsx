import CardFeatured from "@/components/_ui/_main/CardFeatured";
import CardNews from "@/components/_ui/_main/CardNews";
import { getHomePost } from "@/lib/getPosts";
import { HomePageType } from "@/types/homePageType";

const Home = async () => {
  const data: HomePageType[] = await getHomePost("homepage");
  return (
    <main>
      <div className="flex flex-col md:flex md:flex-row gap-4">
        {data && <CardFeatured items={data} />}
        <CardNews />
      </div>
    </main>
  );
};

export default Home;
