import Image from "next/image";
import type { Metadata } from "next";
import getPostBySlug from "@/lib/getPosts";
import { resolveSourceVideo } from "@/lib/source-video";
import {
  GameMetaTable,
  ReviewSections,
  ScoreBanner,
} from "@/components/_ui/_main/StructuredReview";
import ReviewSourceVideo from "@/components/_ui/_main/ReviewSourceVideo";
import type { ReviewContentBlock, ReviewPost } from "@/types/homePageType";

async function loadReview(slug: string): Promise<ReviewPost> {
  return (await getPostBySlug("reviewspage", slug)) as ReviewPost;
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await loadReview(params.slug);
  if (!post?.title) {
    return { title: "Review não encontrada" };
  }
  const description = post.description || post.summary || `Review de ${post.title}`;
  return {
    title: post.title,
    description,
    alternates: { canonical: `/reviews/${params.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      images: post.url ? [{ url: post.url, alt: post.alt || post.title }] : undefined,
    },
  };
}

const PageSlug = async ({ params }: { params: { slug: string } }) => {
  const post = await loadReview(params.slug);

  if (!post?.title) {
    return (
      <p className="text-[var(--muted)]">Review não encontrada.</p>
    );
  }

  const isStructured =
    post.format === "structured" &&
    Array.isArray(post.sections) &&
    post.sections.length > 0;
  const sourceVideo = resolveSourceVideo({
    url: post.url,
    sourceVideo: post.sourceVideo,
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: post.title,
    reviewBody: post.summary || post.description,
    inLanguage: "pt-BR",
    author: { "@type": "Organization", name: "Pion Review" },
    itemReviewed: {
      "@type": "VideoGame",
      name: post.gameMeta?.developer
        ? post.title
        : post.title.replace(/ Review.*$/i, ""),
      genre: post.gameMeta?.genre,
      publisher: post.gameMeta?.publisher,
    },
    ...(post.scores?.overall != null
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue: post.scores.overall,
            bestRating: 10,
            worstRating: 0,
          },
        }
      : {}),
    ...(sourceVideo
      ? {
          associatedMedia: {
            "@type": "VideoObject",
            name: sourceVideo.title || post.title,
            url: sourceVideo.watchUrl,
            embedUrl: sourceVideo.embedUrl,
            thumbnailUrl: sourceVideo.poster || post.url,
          },
        }
      : {}),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        Review
      </p>
      <h1 className="max-w-3xl font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
        {post.title}
      </h1>
      {post.description && (
        <p className="mt-3 max-w-2xl text-[var(--muted)]">{post.description}</p>
      )}

      {sourceVideo ? (
        <ReviewSourceVideo
          poster={post.url}
          alt={post.alt || post.title}
          video={sourceVideo}
        />
      ) : post.url ? (
        <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl border border-[var(--line)]">
          <Image
            alt={post.alt || post.title}
            src={post.url}
            fill
            priority
            sizes="(min-width: 1024px) 960px, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}

      {isStructured ? (
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="min-w-0">
            <GameMetaTable meta={post.gameMeta} />
            <div className="mt-8">
              <ReviewSections sections={post.sections} />
            </div>
            {post.summary && (
              <section className="mt-10 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
                <h2 className="font-display text-lg font-semibold text-white">
                  Veredito
                </h2>
                <p className="mt-2 text-[15px] leading-7 text-[var(--ink)]/90">
                  {post.summary}
                </p>
              </section>
            )}
          </div>
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ScoreBanner scores={post.scores} />
          </div>
        </div>
      ) : (
        <div className="prose-invert mt-8 max-w-2xl">
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
                <div key={index} className="relative my-6 aspect-video overflow-hidden rounded-xl">
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
      )}
    </article>
  );
};

export default PageSlug;
