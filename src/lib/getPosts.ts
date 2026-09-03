import logger from "@/logger";

const API_BASE = process.env.PION_API_URL ?? "https://pion-api.vercel.app";
const noStore = { cache: "no-store" as RequestCache };

function createdMs(item: {
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}): number {
  for (const raw of [item.createdAt, item.updatedAt]) {
    if (!raw) continue;
    const t = Date.parse(raw);
    if (!Number.isNaN(t) && t > 0) return t;
  }
  const id = String(item._id ?? "");
  if (/^[a-f0-9]{24}$/i.test(id)) {
    return parseInt(id.slice(0, 8), 16) * 1000;
  }
  return 0;
}

export function newestFirst<T extends {
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}>(items: T[]): T[] {
  return [...items].sort((a, b) => createdMs(b) - createdMs(a));
}

export function postPath(post: {
  slug?: string;
  scores?: unknown;
  format?: string;
  url?: string;
}): string {
  if (!post.slug) return "/reviews";
  if (post.scores || post.format === "structured") return `/reviews/${post.slug}`;
  if (!post.url) return `/news/${post.slug}`;
  return `/reviews/${post.slug}`;
}

export default async function getPostBySlug(page: string, slug: string) {
  try {
    const url = `${API_BASE}/${page}?slug=${encodeURIComponent(slug)}`;
    const res = await fetch(url, noStore);
    if (!res.ok) return {};

    const data = await res.json();
    if (Array.isArray(data) && data.length === 0) return {};
    return data;
  } catch (error) {
    logger.error("Erro na requisição da API por slug");
    return {};
  }
}

export async function getHomePost(id: string) {
  try {
    const res = await fetch(`${API_BASE}/${id}`, noStore);
    if (!res.ok) {
      logger.error("Erro na requisição da API");
      return [];
    }

    const data = await res.json();
    logger.info("Dados da API obtidos com sucesso");
    const list = Array.isArray(data) ? data : [];
    return newestFirst(list);
  } catch (error) {
    logger.error("Erro na requisição da API");
    return [];
  }
}
