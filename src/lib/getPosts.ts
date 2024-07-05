import logger from "@/logger";

export async function getPosts(page: any) {
  const res = await fetch(
    `http://localhost:3001/reviews?_page=${page}&_per_page=6`
  );
  if (!res.ok) {
    logger.error("Erro na requisição da API");

    return [];
  }

  logger.info("Dados da API obtidos com sucesso");
  return res.json();
}

export async function getHomePost(id: string) {
  const res = await fetch(`https://pion-api.vercel.app/${id}`);
  if (!res.ok) {
    logger.error("Erro na requisição da API");

    return [];
  }

  logger.info("Dados da API obtidos com sucesso");
  return res.json();
}
