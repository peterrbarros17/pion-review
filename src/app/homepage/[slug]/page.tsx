import Image from "next/image";
import { getHomePost } from "@/lib/getPosts";
import type { ReviewContentBlock, ReviewPost } from "@/types/homePageType";
import type { Metadata } from "next";

async function loadHome(slug: string) {
  const list = (await getHomePost("homepage")) as ReviewPost[];
  return list.find((item) => item.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await loadHome(params.slug);
  if (!post?.title) return { title: "Post não encontrado" };
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/homepage/${params.slug}` },
  };
}

const PageSlug = async ({ params }: { params: { slug: string } }) => {
  const post = await loadHome(params.slug);

  if (!post?.title) {
    return <p className="text-[var(--muted)]">Post não encontrado.</p>;
  }

  return (
    <article className="max-w-3xl">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        Destaque
      </p>
      <h1 className="font-display text-3xl font-semibold text-white">{post.title}</h1>
      {post.url && (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--line)]">
          <Image
            alt={post.alt || post.title}
            src={post.url}
            fill
            priority
            sizes="800px"
            className="object-cover"
          />
        </div>
      )}
      <div className="mt-8">
        {(post.content ?? []).map((block: ReviewContentBlock, index: number) => {
          if (block.type === "paragraph") {
            return (
              <p key={index} className="mb-4 text-[15px] leading-7">
                {block.text}
              </p>
            );
          }
          if (block.type === "image" && block.src && block.src !== "none") {
            return (
              <div
                key={index}
                className="relative my-6 aspect-video overflow-hidden rounded-xl"
              >
                <Image
                  alt={block.alt || post.title}
                  src={block.src}
                  fill
                  sizes="800px"
                  className="object-cover"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
};

export default PageSlug;
