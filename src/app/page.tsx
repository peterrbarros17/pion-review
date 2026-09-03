import CardNews from "@/components/_ui/_main/CardNews";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import { HomePageType } from "@/types/homePageType";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  const data: HomePageType[] = await getHomePost("homepage");
  const featured = data[0];

  return (
    <>
      <CardsHeader
        title="O que vale jogar agora"
        hint="Reviews e destaques feitos a partir de gameplay — não de press kit."
      />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section>
          {featured ? (
            <Link
              href={`/homepage/${featured.slug}`}
              className="group block overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  alt={featured.alt}
                  src={featured.url}
                  fill
                  priority
                  sizes="(min-width: 1024px) 640px, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
                  Em alta
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                  {featured.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                  {featured.description}
                </p>
              </div>
            </Link>
          ) : (
            <p className="rounded-2xl border border-[var(--line)] p-6 text-[var(--muted)]">
              Nenhum destaque no momento.
            </p>
          )}
        </section>
        <CardNews />
      </div>
    </>
  );
};

export default Home;
