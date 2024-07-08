import CardHeaders from "../CardsHeader";
import Link from "next/link";
import { getHomePost } from "@/lib/getPosts";
import { NewPostPageType } from "@/types/homePageType";
import { AiOutlineWeibo } from "react-icons/ai";

interface CardNewsProps {}

export default async function CardNews({}: CardNewsProps) {
  const data: NewPostPageType[] = await getHomePost("newspage");

  return (
    <aside className="w-full md:w-1/3 bg-[var(--gray-dark)]">
      <div className="my-2 md:my-4 ml-0 md:ml-2">
        <CardHeaders
          title="Novidades"
          icon={AiOutlineWeibo}
          color="var(--red)"
          size={24}
        />
      </div>
      <ul className="flex flex-col divide-y-2 p-2 md:p-4">
        {data.map((item) => (
          <li key={item._id} className="py-4">
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
