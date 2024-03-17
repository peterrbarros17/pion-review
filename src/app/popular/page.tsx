import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Os melhore jogos mais bem avaliados - Pion Review",
  description: "App games review",
};

interface PopularPageProps {}

export default function PopularPage({}: PopularPageProps) {
  return <h1>Popular Page</h1>;
}
