import CardNews from "@/components/_ui/_main/CardNews";
import CardComponent from "@/components/_ui/_main/CardFeatured/CardComponent";
import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import { resolveSourceVideo } from "@/lib/source-video";
import type { HomePageType, ReviewPost } from "@/types/homePageType";
import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaTwitch, FaYoutube } from "react-icons/fa";

const Home = async () => {
  const reviews = (await getHomePost("reviewspage")) as Array<
    HomePageType & Partial<ReviewPost>
  >;
  const [featured, ...rest] = reviews;
  const grid = rest.slice(0, 6);
  const featuredVideo = featured
    ? resolveSourceVideo({ url: featured.url, sourceVideo: featured.sourceVideo })
    : null;
  const FeaturedWatchIcon =
    featuredVideo?.provider === "twitch" ? FaTwitch : FaYoutube;

  return (
    <>
      <CardsHeader
        title="O que vale jogar agora"
        hint="As reviews mais novas primeiro — publicadas a partir das lives."
      />
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
        <section>
          {featured ? (
            <div className="overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
              <Link href={`/reviews/${featured.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  {featured.url ? (
                    <Image
                      alt={featured.alt}
                      src={featured.url}
                      fill
                      priority
                      sizes="(min-width: 1024px) 640px, 100vw"
                      className="object-cover transition duration-300 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="h-full w-full bg-[var(--surface-2)]" />
                  )}
                  {featured.scores?.overall != null && (
                    <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 font-mono text-sm text-white backdrop-blur">
                      {featured.scores.overall.toFixed(1)}
                    </span>
                  )}
                  {featuredVideo && (
                    <span className="absolute left-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur">
                      <FaPlay className="ml-0.5 text-sm" />
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
                    Mais recente
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold text-white">
                    {featured.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm text-[var(--muted)]">
                    {featured.description}
                  </p>
                </div>
              </Link>
              {featuredVideo && (
                <a
                  href={featuredVideo.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border-t border-[var(--line)] px-5 py-3 text-sm text-[var(--muted)] hover:text-white"
                >
                  <FeaturedWatchIcon />
                  <span className="truncate">
                    {featuredVideo.channelName
                      ? `Gameplay · ${featuredVideo.channelName}`
                      : `Assista no ${featuredVideo.platformLabel}`}
                  </span>
                  <span className="ml-auto shrink-0 text-[var(--brand-soft)]">
                    {featuredVideo.platformLabel} →
                  </span>
                </a>
              )}
            </div>
          ) : (
            <p className="rounded-2xl border border-[var(--line)] p-6 text-[var(--muted)]">
              Nenhuma review publicada ainda.
            </p>
          )}
        </section>
        <CardNews />
      </div>

      {grid.length > 0 && (
        <section className="mt-10">
          <div className="mb-4 flex items-end justify-between gap-4">
            <h2 className="font-display text-lg font-semibold text-white">
              Publicadas agora
            </h2>
            <Link
              href="/reviews"
              className="text-sm text-[var(--brand-soft)] hover:text-white"
            >
              Ver todas →
            </Link>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grid.map((item) => (
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
        </section>
      )}
    </>
  );
};

export default Home;
