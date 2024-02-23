import { FunctionComponent } from "react";
import CardHeaders from "../CardHeaders";
import { RiFireFill } from "react-icons/ri";

interface CardNewsProps {}

const CardNews: FunctionComponent<CardNewsProps> = () => {
  const news = [
    {
      id: 1,
      title: "Monster hunter",
      description: "Conheça as melhores builds e itens",
    },
    {
      id: 2,
      title: "Fortnite",
      description: "Aprenda a jogar o battle royale de construção",
    },
    {
      id: 3,
      title: "Diablo",
      description: "Entenda a lore dos jogos dessa franquia",
    },
  ];
  return (
    <aside className="w-full md:w-1/3 bg-[var(--gray-dark)]">
      <div className="my-2 md:my-4 ml-0 md:ml-2">
        <CardHeaders
          title="Popular"
          icon={RiFireFill}
          color="var(--red)"
          size={24}
        />
      </div>
      <ul className="flex flex-col divide-y-2 p-2 md:p-4 space-y-1">
        {news.map((item) => (
          <li key={item.id} className="py-4">
            <h3>{item.title}</h3>
            <p className="text-slate-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CardNews;
