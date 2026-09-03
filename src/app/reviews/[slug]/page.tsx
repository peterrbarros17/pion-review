import Image from "next/image";
import getPostBySlug from "@/lib/getPosts";
import {
  GameMetaTable,
  ReviewSections,
  ScoreBanner,
} from "@/components/_ui/_main/StructuredReview";
import type { ReviewContentBlock, ReviewPost } from "@/types/homePageType";

const PageSlug = async ({
  params,
}: {
  params: { slug: string };
  page?: string;
}) => {
  const post = (await getPostBySlug("reviewspage", params.slug)) as ReviewPost;

  if (!post?.title) {
    return (
      <div className="w-full p-4 md:w-10/12">
        <p>Review não encontrada.</p>
      </div>
    );
  }

  const isStructured =
    post.format === "structured" &&
    Array.isArray(post.sections) &&
    post.sections.length > 0;

  return (
    <div>
      <div className="flex w-full flex-col gap-2 p-4 md:w-10/12 md:p-0">
        <h1 className="bg-[var(--red)] p-2 text-[24px] capitalize">{post.title}</h1>
        {post.url && (
          <Image
            alt={post.alt || post.title}
            src={post.url}
            width={1920}
            height={1080}
            priority
            className="h-auto w-full"
          />
        )}

        {isStructured ? (
          <>
            <GameMetaTable meta={post.gameMeta} />
            <ScoreBanner scores={post.scores} />
            <ReviewSections sections={post.sections} />
            {post.summary && (
              <section className="mt-6 rounded border border-[var(--gray)] bg-[var(--gray-dark)] p-4">
                <h2 className="mb-2 text-lg text-[var(--red)]">Summary</h2>
                <p className="leading-relaxed">{post.summary}</p>
              </section>
            )}
          </>
        ) : (
          (post.content ?? []).map((block: ReviewContentBlock, index: number) => {
            if (block.type === "paragraph") {
              return <p key={index}>{block.text}</p>;
            }
            if (block.type === "image" && block.src) {
              return (
                <div key={index}>
                  <Image
                    alt={block.alt || post.title}
                    src={block.src}
                    width={1920}
                    height={1080}
                    priority={index === 0}
                  />
                </div>
              );
            }
            return null;
          })
        )}
      </div>
    </div>
  );
};

export default PageSlug;
