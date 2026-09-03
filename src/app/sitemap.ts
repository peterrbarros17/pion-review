import type { MetadataRoute } from "next";
import { getHomePost } from "@/lib/getPosts";
import type { HomePageType } from "@/types/homePageType";

const site = "https://pion-review.vercel.app";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const reviews = (await getHomePost("reviewspage")) as HomePageType[];
  return [
    { url: site, changeFrequency: "daily", priority: 1 },
    { url: `${site}/reviews`, changeFrequency: "daily", priority: 0.9 },
    { url: `${site}/news`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${site}/popular`, changeFrequency: "weekly", priority: 0.6 },
    ...reviews.map((review) => ({
      url: `${site}/reviews/${review.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
