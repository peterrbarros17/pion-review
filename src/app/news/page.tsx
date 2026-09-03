import CardsHeader from "@/components/_ui/_main/CardsHeader";
import { getHomePost } from "@/lib/getPosts";
import { NewPostPageType } from "@/types/homePageType";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Novidades de jogos",
  description: "Lançamentos, notas e o que está rolando nos games.",
  alternates: { canonical: "/news" },
};

const NewsPage = async () => {
  const data: NewPostPageType[] = await getHomePost("newspage");

  return (
    <>
      <CardsHeader
        title="Novidades"
        hint="Notas curtas sobre lançamentos e o que vale acompanhar."
      />
      <ul className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--surface)]/70">
        {data.map((item) => (
          <li key={item._id}>
            <Link href={`/news/${item.slug}`} className="block px-5 py-4 hover:bg-white/[0.02]">
              <h2 className="font-display text-lg font-semibold text-white">{item.title}</h2>
              <p className="mt-1 text-sm text-[var(--muted)]">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsPage;
