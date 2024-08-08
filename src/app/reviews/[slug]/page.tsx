import getPostBySlug from "@/lib/getPosts";
import Image from "next/image";

const PageSlug = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug);
  return (
    <div className="w-full md:w-10/12 p-4 md:p-0 flex flex-col gap-2">
      <h1 className="text-[24px] bg-[var(--red)] p-2">{post.title}</h1>
      <p>
        Monster Hunter Iceborne expande o já vasto mundo de Monster Hunter:
        World, introduzindo novos monstros, regiões geladas e mecânicas de jogo.
        A dificuldade foi elevada, oferecendo um verdadeiro desafio aos
        caçadores veteranos.
      </p>
      <div>
        <Image
          alt={post.alt}
          src={post.url}
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
      <p>
        As novas armas e armaduras são visualmente impressionantes e bem
        equilibradas. A adição da Garra Retrátil traz uma nova dinâmica às
        caçadas.A narrativa é envolvente, complementando a experiência. No
        geral, Iceborne é uma expansão que justifica seu preço e amplia a
        longevidade do jogo.
      </p>
    </div>
  );
};

export default PageSlug;
