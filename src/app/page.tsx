import CardNews from "@/components/_ui/_main/CardNews";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import ReadMoreButton from "@/components/_ui/_main/ReadMoreButton";
import { getHomePost } from "@/lib/getPosts";
import { HomePageType } from "@/types/homePageType";
import Image from "next/image";
import Link from "next/link";
import { RiFireFill } from "react-icons/ri";

const Home = async () => {
  const data: HomePageType[] = await getHomePost("homepage");
  const featured = data[0];

  return (
    <main>
      <div className="flex flex-col md:flex md:flex-row gap-4">
        <div className="w-full p-2 md:p-0 md:w-2/3 bg-[var(--gray-dark)] overflow-hidden flex flex-col">
          <div className="my-4 ml-0 md:ml-2">
            <CardsHeader
              title="Em alta"
              icon={RiFireFill}
              color="var(--red)"
              size={24}
            />
          </div>
          {featured ? (
            <Link href={`/homepage/${featured.slug}`}>
              <Image
                alt={featured.alt}
                src={featured.url}
                width={1920}
                height={1080}
                priority={true}
                className="cursor-pointer hover:scale-105 transition-transform ease-in duration-150"
              />
              <article className="flex flex-col md:flex md:flex-row gap-4 px-0 py-0 md:px-2 md:py-2 items-center my-4">
                <h1 className=" text-4xl w-full md:w-[40%] capitalize">
                  {featured.title}
                </h1>
                <div className="flex flex-col gap-2 items-center w-full md:w-[60%]">
                  <p>{featured.description}</p>
                  <ReadMoreButton>Leia mais...</ReadMoreButton>
                </div>
              </article>
            </Link>
          ) : (
            <p className="p-4 text-slate-300">
              Nenhum destaque disponível no momento.
            </p>
          )}
        </div>
        <CardNews />
      </div>
    </main>
  );
};

export default Home;
