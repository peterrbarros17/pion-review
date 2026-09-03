import Image from "next/image";
import Link from "next/link";
import { FaPlay, FaTwitch, FaYoutube } from "react-icons/fa";
import { resolveSourceVideo } from "@/lib/source-video";
import type { SourceVideo } from "@/types/homePageType";

interface CardComponentProps {
  alt: string;
  url: string;
  title: string;
  description: string;
  textButton?: string;
  slug: string;
  href?: string;
  score?: number;
  eyebrow?: string;
  sourceVideo?: SourceVideo;
}

const CardComponent = ({
  alt,
  url,
  title,
  description,
  slug,
  href,
  score,
  eyebrow = "Review",
  sourceVideo,
}: CardComponentProps) => {
  const to = href ?? `/reviews/${slug}`;
  const video = resolveSourceVideo({ url, sourceVideo });
  const WatchIcon = video?.provider === "twitch" ? FaTwitch : FaYoutube;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 transition hover:border-white/15">
      <Link href={to} className="flex flex-1 flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-2)]">
          {url ? (
            <Image
              alt={alt || title}
              src={url}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[var(--surface-2)]" />
          )}
          {video && (
            <span className="absolute left-3 top-3 inline-flex size-9 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur">
              <FaPlay className="ml-0.5 text-xs" />
            </span>
          )}
          {score != null && (
            <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 font-mono text-sm text-white backdrop-blur">
              {score.toFixed(1)}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
            {eyebrow}
          </p>
          <h2 className="font-display text-lg font-semibold leading-snug text-white">
            {title}
          </h2>
          {description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
              {description}
            </p>
          )}
          <span className="mt-auto pt-2 text-xs text-[var(--brand-soft)]">
            Ler review →
          </span>
        </div>
      </Link>
      {video && (
        <a
          href={video.watchUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 border-t border-[var(--line)] px-4 py-2.5 text-xs text-[var(--muted)] hover:bg-white/[0.03] hover:text-white"
        >
          <WatchIcon className="shrink-0" />
          <span className="truncate">
            {video.channelName
              ? `Gameplay · ${video.channelName}`
              : `Assista no ${video.platformLabel}`}
          </span>
          <span className="ml-auto shrink-0 text-[var(--brand-soft)]">
            {video.platformLabel} →
          </span>
        </a>
      )}
    </article>
  );
};

export default CardComponent;
