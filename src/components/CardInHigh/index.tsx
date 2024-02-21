import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

interface CardInHighProps {}

const CardInHigh: FunctionComponent<CardInHighProps> = () => {
  return (
    <section className="w-full md:w-2/3 p-2 bg-[var(--gray-dark)] overflow-hidden">
      <Link href="" className="flex flex-col gap-4">
        <Image
          alt="resident evil post"
          src="https://wallpapers.com/images/hd/resident-evil-biohazard-horror-game-series-jill-valentine-gz9olv8bqzklu3te.jpg"
          width={1920}
          height={1080}
          priority={true}
          className="hover:scale-105 transition-transform ease-in duration-150"
        />
        <article className="flex flex-col md:flex md:flex-row gap-4">
          <h1 className=" text-4xl w-full md:w-1/3">Resident evil</h1>
          <div className="flex flex-col gap-2 items-center w-full md:w-2/3">
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
