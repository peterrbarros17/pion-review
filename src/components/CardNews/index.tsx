import { FunctionComponent } from "react";

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
    <aside className="w-full md:w-1/3 p-2 bg-[var(--gray-dark)]">
      <h2 className="text-[var(--red)] text-2xl">Novidades</h2>
      <ul className="flex flex-col gap-4">
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p className="text-slate-300">{item.description}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CardNews;
