import Image from "next/image";
import Link from "next/link";
import ReadMoreButton from "../ReadMoreButton";

interface CardComponentProps {
  alt: string;
  url: string;
  title: string;
  description: string;
  textButton: string;
  slug: string;
}

const CardComponent = ({
  alt,
  url,
  title,
  description,
  slug,
}: CardComponentProps) => {
  return (
    <section>
      <Link href={`/reviews/${slug}`}>
        <Image
          alt={alt}
          src={url}
          width={1920}
          height={1080}
          priority={true}
          className="cursor-pointer hover:scale-105 transition-transform ease-in duration-150"
        />
        <article className="flex flex-col md:flex md:flex-row gap-4 px-0 py-0 md:px-2 md:py-2 items-center my-4">
          <h1 className=" text-4xl w-full md:w-[40%] capitalize">{title}</h1>
          <div className="flex flex-col gap-2 items-center w-full md:w-[60%]">
            <p>{description}</p>
            <ReadMoreButton>Leia mais...</ReadMoreButton>
          </div>
        </article>
      </Link>
    </section>
  );
};

export default CardComponent;
