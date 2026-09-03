import type { SourceVideo } from "@/types/homePageType";

export interface ResolvedSourceVideo {
  provider: "youtube" | "twitch";
  watchUrl: string;
  embedUrl: string;
  videoId: string;
  channelName?: string;
  channelUrl?: string;
  title?: string;
  poster?: string;
  platformLabel: string;
}

function youtubeIdFromUrl(raw?: string | null): string | null {
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
    if (host === "youtu.be") return parsed.pathname.slice(1).split("/")[0] || null;
    if (host === "i.ytimg.com" || host === "img.youtube.com") {
      const parts = parsed.pathname.split("/").filter(Boolean);
      const vi = parts.indexOf("vi");
      if (vi >= 0 && parts[vi + 1]) return parts[vi + 1];
    }
    if (host.endsWith("youtube.com")) {
      const fromQuery = parsed.searchParams.get("v");
      if (fromQuery) return fromQuery;
      const parts = parsed.pathname.split("/").filter(Boolean);
      const marker = parts.findIndex((part) =>
        ["live", "shorts", "embed", "v"].includes(part),
      );
      if (marker >= 0 && parts[marker + 1]) return parts[marker + 1];
    }
  } catch {
    return null;
  }
  return null;
}

function twitchIdFromUrl(raw?: string | null): string | null {
  if (!raw) return null;
  try {
    const parsed = new URL(raw);
    const host = parsed.hostname.replace(/^www\./i, "").toLowerCase();
    if (host !== "twitch.tv" && host !== "m.twitch.tv") return null;
    const parts = parsed.pathname.split("/").filter(Boolean);
    const at = parts.findIndex((part) => part === "videos" || part === "video");
    if (at >= 0 && parts[at + 1] && /^\d+$/.test(parts[at + 1])) return parts[at + 1];
  } catch {
    return null;
  }
  return null;
}

function youtubeEmbed(id: string, autoplay = false): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  return `https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`;
}

function twitchEmbed(id: string, autoplay = false): string {
  const params = new URLSearchParams({
    video: id,
    autoplay: autoplay ? "true" : "false",
  });
  for (const parent of ["pion-review.vercel.app", "localhost", "127.0.0.1"]) {
    params.append("parent", parent);
  }
  return `https://player.twitch.tv/?${params.toString()}`;
}

/**
 * Resolves a playable VOD from the published sourceVideo, or infers a YouTube
 * id from a thumbnail URL already stored as the review cover.
 */
export function resolveSourceVideo(input: {
  url?: string | null;
  sourceVideo?: SourceVideo | null;
}): ResolvedSourceVideo | null {
  const src = input.sourceVideo;
  const youtubeId =
    (src?.provider !== "twitch" ? src?.videoId : undefined) ||
    youtubeIdFromUrl(src?.url) ||
    youtubeIdFromUrl(input.url);
  if (youtubeId) {
    return {
      provider: "youtube",
      videoId: youtubeId,
      watchUrl: src?.url || `https://www.youtube.com/watch?v=${youtubeId}`,
      embedUrl: youtubeEmbed(youtubeId),
      channelName: src?.channelName,
      channelUrl: src?.channelUrl,
      title: src?.title,
      poster: src?.thumbnailUrl || input.url || `https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`,
      platformLabel: "YouTube",
    };
  }

  const twitchId =
    (src?.provider === "twitch" ? src?.videoId : undefined) ||
    twitchIdFromUrl(src?.url);
  if (twitchId) {
    return {
      provider: "twitch",
      videoId: twitchId,
      watchUrl: src?.url || `https://www.twitch.tv/videos/${twitchId}`,
      embedUrl: twitchEmbed(twitchId),
      channelName: src?.channelName,
      channelUrl: src?.channelUrl,
      title: src?.title,
      poster: src?.thumbnailUrl || input.url || undefined,
      platformLabel: "Twitch",
    };
  }

  return null;
}

export function embedUrlWithAutoplay(video: ResolvedSourceVideo): string {
  if (video.provider === "youtube") return youtubeEmbed(video.videoId, true);
  return twitchEmbed(video.videoId, true);
}
