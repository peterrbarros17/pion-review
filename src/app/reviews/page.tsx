import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acompanhe a review do seu jogo desejado - Pion Review",
  description: "App games review",
};

interface ReviewsPageProps {}

export default async function ReviewsPage({}: ReviewsPageProps) {
  return (
    <div>
      <h1>Reviews Page</h1>
    </div>
  );
}
