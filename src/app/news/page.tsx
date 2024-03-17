import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Novidades sobre jogos e lançamentos - Pion Review",
  description: "App games review",
};

interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  return <h1>News Page</h1>;
}
