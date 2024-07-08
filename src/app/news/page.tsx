import CardNews from "@/components/_ui/_main/CardNews";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Novidades sobre jogos e lançamentos - Pion Review",
  description: "App games review",
};

interface NewsPageProps {}

export default function NewsPage({}: NewsPageProps) {
  return (
    <div className="flex flex-col md:flex md:flex-row gap-4">
      <CardNews />
      <CardNews />
      <CardNews />
    </div>
  );
}
