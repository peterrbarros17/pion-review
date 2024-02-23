import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import CardHeaders from "../CardHeaders";
import { AiOutlineWeibo } from "react-icons/ai";

interface CardInHighProps {}

const CardInHigh: FunctionComponent<CardInHighProps> = () => {
  return (
    <section className="w-full p-2 md:p-0 md:w-2/3 bg-[var(--gray-dark)] overflow-hidden flex flex-col">
      <div className="my-4 ml-0 md:ml-2">
        <CardHeaders
          title="Novidades"
          icon={AiOutlineWeibo}
          color="var(--red)"
          size={24}
        />
      </div>
      <Link href="" className="flex flex-col gap-4">
        <Image
          alt="resident evil post"
          src="https://wallpapers.com/images/hd/resident-evil-biohazard-horror-game-series-jill-valentine-gz9olv8bqzklu3te.jpg"
          width={1920}
          height={1080}
          priority={true}
          className="hover:scale-105 transition-transform ease-in duration-150"
        />
        <article className="flex flex-col md:flex md:flex-row gap-4 px-0 py-0 md:px-2 md:py-2 items-center">
          <h1 className=" text-4xl w-full md:w-[40%]">Resident evil</h1>
          <div className="flex flex-col gap-2 items-center w-full md:w-[60%]">
            <p>
              Resident evil 3, conheça os principais personagens, enredo e dicas
              sobre esse grande survival horror
            </p>
            <button className="bg-[var(--red)] w-full">Leia mais...</button>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default CardInHigh;
