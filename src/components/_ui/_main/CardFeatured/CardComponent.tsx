import Image from "next/image";
import Link from "next/link";

interface CardComponentProps {
  alt: string;
  url: string;
  title: string;
  description: string;
  textButton?: string;
  slug: string;
  href?: string;
  score?: number;
  eyebrow?: string;
}

const CardComponent = ({
  alt,
  url,
  title,
  description,
  slug,
  href,
  score,
  eyebrow = "Review",
}: CardComponentProps) => {
  const to = href ?? `/reviews/${slug}`;

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]/80 transition hover:border-white/15">
      <Link href={to} className="flex h-full flex-col">
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-2)]">
          {url ? (
            <Image
              alt={alt || title}
              src={url}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="h-full w-full bg-[var(--surface-2)]" />
          )}
          {score != null && (
            <span className="absolute right-3 top-3 rounded-md bg-black/70 px-2 py-1 font-mono text-sm text-white backdrop-blur">
              {score.toFixed(1)}
            </span>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-2 p-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
            {eyebrow}
          </p>
          <h2 className="font-display text-lg font-semibold leading-snug text-white">
            {title}
          </h2>
          {description && (
            <p className="line-clamp-2 text-sm leading-relaxed text-[var(--muted)]">
              {description}
            </p>
          )}
          <span className="mt-auto pt-2 text-xs text-[var(--brand-soft)]">
            Ler review →
          </span>
        </div>
      </Link>
    </article>
  );
};

export default CardComponent;
