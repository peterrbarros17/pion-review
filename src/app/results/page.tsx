import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { newestFirst, postPath } from "@/lib/getPosts";

export const metadata: Metadata = {
  title: "Busca",
  robots: { index: false, follow: true },
};

const Results = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const search = (searchParams.title ?? "").trim();
  if (!search) {
    return <p className="text-[var(--muted)]">Digite um termo na busca.</p>;
  }

  const res = await fetch(
    `https://pion-api.vercel.app/search?title=${encodeURIComponent(search)}`,
    { cache: "no-store" }
  );
  const posts = res.ok ? await res.json() : [];
  const list = newestFirst(Array.isArray(posts) ? posts : []);

  return (
    <>
      <p className="mb-6 text-sm text-[var(--muted)]">
        {list.length} resultado{list.length === 1 ? "" : "s"} para “{search}”
      </p>
      <ul className="space-y-3">
        {list.map((post: {
          _id: string;
          alt?: string;
          url?: string;
          title: string;
          description?: string;
          slug?: string;
          scores?: unknown;
          format?: string;
        }) => (
          <li key={post._id}>
            <Link
              href={postPath(post)}
              className="flex gap-4 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-3 hover:border-white/15"
            >
              {post.url && (
                <div className="relative h-20 w-32 shrink-0 overflow-hidden rounded-lg bg-[var(--surface-2)]">
                  <Image
                    alt={post.alt || post.title}
                    src={post.url}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>
              )}
              <div>
                <h2 className="font-display font-semibold text-white">{post.title}</h2>
                <p className="mt-1 line-clamp-2 text-sm text-[var(--muted)]">
                  {post.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Results;
