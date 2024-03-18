// import CardPopular from "@/components/_ui/_main/CardPopular";
// import CardsHeader from "@/components/_ui/_main/CardsHeader";
// import { FaPepperHot } from "react-icons/fa6";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Os melhore jogos mais bem avaliados - Pion Review",
  description: "App games review",
};

interface PopularPageProps {}

export default function PopularPage({}: PopularPageProps) {
  return (
    <h1>Popular</h1>
    // <section className="bg-[var(--black)] p-4">
    //   <div className="my-4">
    //     <CardsHeader
    //       title="Popular"
    //       size={24}
    //       icon={FaPepperHot}
    //       color="var(--red)"
    //     />
    //   </div>
    //   <CardPopular />
    // </section>
  );
}
