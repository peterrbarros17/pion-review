import type { ReviewGameMeta, ReviewScores, ReviewSection } from "@/types/homePageType";

function formatScore(value?: number) {
  if (value == null || Number.isNaN(value)) return "—";
  return value.toFixed(1);
}

export function ScoreBanner({ scores }: { scores?: ReviewScores }) {
  if (!scores) return null;
  const rows: Array<[string, number | undefined]> = [
    ["Story & Setting", scores.story],
    ["Gameplay", scores.gameplay],
    ["Design, Visual & Audio", scores.visual],
    ["Game Length & Replayability", scores.length],
    ["Pricepoint", scores.pricepoint],
  ];

  return (
    <aside className="my-6 rounded border border-[var(--gray)] bg-[var(--gray-dark)] p-4">
      <div className="mb-4 flex items-end gap-3">
        <span className="text-5xl font-bold text-[var(--red)]">
          {formatScore(scores.overall)}
        </span>
        <span className="pb-1 text-sm uppercase tracking-widest text-[var(--white)]/70">
          / 10
        </span>
      </div>
      <ul className="flex flex-col gap-2">
        {rows.map(([label, value]) => (
          <li
            key={label}
            className="flex items-center justify-between gap-4 border-b border-[var(--gray)] pb-2 text-sm last:border-0"
          >
            <span>{label}</span>
            <span className="font-mono text-[var(--red)]">{formatScore(value)}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function GameMetaTable({ meta }: { meta?: ReviewGameMeta }) {
  if (!meta) return null;
  const rows: Array<[string, string | undefined]> = [
    ["Genre", meta.genre],
    ["Developer", meta.developer],
    ["Publisher", meta.publisher],
    ["Release date", meta.releaseDate],
    ["Platforms", meta.platforms],
    ["Price", meta.price],
  ];

  return (
    <dl className="my-4 grid gap-2 text-sm md:grid-cols-2">
      {rows.map(([label, value]) =>
        value ? (
          <div key={label} className="rounded bg-[var(--gray-dark)] p-2">
            <dt className="text-xs uppercase tracking-wider text-[var(--white)]/50">
              {label}
            </dt>
            <dd className="mt-1">{value}</dd>
          </div>
        ) : null
      )}
    </dl>
  );
}

export function ReviewSections({ sections }: { sections?: ReviewSection[] }) {
  if (!sections?.length) return null;

  return (
    <div className="flex flex-col gap-8">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <div className="mb-3 flex items-baseline justify-between gap-3 border-b border-[var(--gray)] pb-2">
            <h2 className="text-xl capitalize text-[var(--red)]">{section.title}</h2>
            {section.score != null && (
              <span className="font-mono text-lg text-[var(--red)]">
                {formatScore(section.score)}
              </span>
            )}
          </div>
          {section.body.split(/\n\n+/).map((paragraph, index) => (
            <p key={index} className="mb-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
