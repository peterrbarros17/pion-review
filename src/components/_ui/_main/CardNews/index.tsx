import Link from "next/link";
import { getHomePost } from "@/lib/getPosts";
import { NewPostPageType } from "@/types/homePageType";

const CardNews = async () => {
  const data: NewPostPageType[] = await getHomePost("newspage");

  return (
    <aside className="rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        Novidades
      </p>
      <h2 className="mt-1 font-display text-lg font-semibold text-white">
        Lançamentos e notas
      </h2>
      <ul className="mt-4 divide-y divide-[var(--line)]">
        {data.map((item) => (
          <li key={item._id} className="py-3 first:pt-0 last:pb-0">
            <Link href={`/news/${item.slug}`} className="block group">
              <h3 className="text-sm font-medium text-white group-hover:text-[var(--brand-soft)]">
                {item.title}
              </h3>
              <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[var(--muted)]">
                {item.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CardNews;
