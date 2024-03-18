import CardHeaders from "../CardsHeader";
import { RiFireFill } from "react-icons/ri";
import Link from "next/link";

interface CardNewsProps {}

export default function CardNews({}: CardNewsProps) {
  const news = [
    {
      id: 1,
      title: "A plague tale",
      description:
        "Praga de ratos e soldados da inquisição, conheça um dos melhores jogos de 2022",
      slug: "a-plague-tale",
    },
    {
      id: 2,
      title: "Don't starve together",
      description:
        "Um dos melhores sandbox com um multiplay online cheio de mistérios e perigos para se jogar com amigos",
      slug: "dont-starve-together",
    },
    {
      id: 3,
      title: "Diablo IV",
      description:
        "Diablo IV um dos melhores da franquia com melhorias tanto na jogabilidade quanto no desenvolvimento das histórias",
      slug: "diablo",
    },
  ];
  return (
    <aside className="w-full md:w-1/3 bg-[var(--gray-dark)]">
      <div className="my-2 md:my-4 ml-0 md:ml-2">
        <CardHeaders
          title="Novidades"
          icon={RiFireFill}
          color="var(--red)"
          size={24}
        />
      </div>
      <ul className="flex flex-col divide-y-2 p-2 md:p-4">
        {news.map((item) => (
          <li key={item.id} className="py-4">
            <Link href={`/news/${item.slug}`}>
              <h3 className="my-2 hover-links">{item.title}</h3>
              <p className="text-slate-300 text-sm">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
