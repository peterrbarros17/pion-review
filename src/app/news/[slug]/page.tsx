import { getHomePost } from "@/lib/getPosts";
import type { NewPostPageType } from "@/types/homePageType";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const data: NewPostPageType[] = await getHomePost("newspage");
  const post = data.find((item) => item.slug === params.slug);
  if (!post?.title) return { title: "Notícia não encontrada" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/news/${params.slug}` },
  };
}

const NewsSlug = async ({ params }: { params: { slug: string } }) => {
  const data: NewPostPageType[] = await getHomePost("newspage");
  const post = data.find((item) => item.slug === params.slug);

  if (!post?.title) {
    return <p className="text-[var(--muted)]">Notícia não encontrada.</p>;
  }

  return (
    <article className="max-w-2xl">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        Novidade
      </p>
      <h1 className="font-display text-3xl font-semibold text-white">{post.title}</h1>
      <p className="mt-4 text-[15px] leading-7 text-[var(--ink)]/90">{post.description}</p>
    </article>
  );
};

export default NewsSlug;
