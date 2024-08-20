import logger from "@/logger";

export default async function getPostBySlug(page: string, slug: string) {
  const url = `https://pion-api.vercel.app/${page}?slug=${slug}`;

  const res = await fetch(url);
  if (!res.ok) return {};

  const data = await res.json();

  if (data.length === 0) return {};

  return data;
}

export async function getHomePost(id: string) {
  const res = await fetch(`https://pion-api.vercel.app/${id}`, {
    next: { revalidate: 0 },
  });
  if (!res.ok) {
    logger.error("Erro na requisição da API");

    return [];
  }

  logger.info("Dados da API obtidos com sucesso");
  return res.json();
}
