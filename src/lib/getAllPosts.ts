import logger from "@/logger";

export default async function getAllPosts(page: any) {
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
