"use client";

import { useState } from "react";
import Image from "next/image";
import { FaPlay, FaTwitch, FaYoutube } from "react-icons/fa";
import {
  embedUrlWithAutoplay,
  type ResolvedSourceVideo,
} from "@/lib/source-video";

export default function ReviewSourceVideo({
  poster,
  alt,
  video,
}: {
  poster?: string | null;
  alt: string;
  video: ResolvedSourceVideo;
}) {
  const [playing, setPlaying] = useState(false);
  const posterSrc = poster || video.poster;
  const Icon = video.provider === "twitch" ? FaTwitch : FaYoutube;

  return (
    <div className="mt-6">
      <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--line)] bg-black">
        {playing ? (
          <iframe
            title={video.title || alt}
            src={embedUrlWithAutoplay(video)}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            {posterSrc ? (
              <Image
                alt={alt}
                src={posterSrc}
                fill
                priority
                sizes="(min-width: 1024px) 960px, 100vw"
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[var(--surface-2)]" />
            )}
            <button
              type="button"
              onClick={() => setPlaying(true)}
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/35 text-white transition hover:bg-black/45"
              aria-label={`Reproduzir vídeo no ${video.platformLabel}`}
            >
              <span className="inline-flex size-16 items-center justify-center rounded-full bg-[var(--brand)] text-black shadow-lg">
                <FaPlay className="ml-1 text-xl" />
              </span>
              <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur">
                Assistir a live
              </span>
            </button>
          </>
        )}
      </div>
      <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-[var(--muted)]">
        <span>
          Gameplay desta review
          {video.channelName ? (
            <>
              {" "}
              ·{" "}
              {video.channelUrl ? (
                <a
                  href={video.channelUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white hover:text-[var(--brand-soft)]"
                >
                  {video.channelName}
                </a>
              ) : (
                video.channelName
              )}
            </>
          ) : null}
        </span>
        <a
          href={video.watchUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--brand-soft)] hover:text-white"
        >
          <Icon className="text-sm" />
          Assista no {video.platformLabel} →
        </a>
      </p>
    </div>
  );
}
