import type { ReviewGameMeta, ReviewScores, ReviewSection } from "@/types/homePageType";

function formatScore(value?: number) {
  if (value == null || Number.isNaN(value)) return "—";
  return Number(value).toFixed(1);
}

export function ScoreBanner({ scores }: { scores?: ReviewScores }) {
  if (!scores) return null;
  const rows: Array<[string, number | undefined]> = [
    ["História", scores.story],
    ["Gameplay", scores.gameplay],
    ["Visual e áudio", scores.visual],
    ["Duração", scores.length],
    ["Preço", scores.pricepoint],
  ];

  return (
    <aside className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
        Nota
      </p>
      <div className="mt-2 flex items-end gap-2">
        <span className="font-display text-5xl font-semibold text-white">
          {formatScore(scores.overall)}
        </span>
        <span className="mb-1 text-sm text-[var(--muted)]">/ 10</span>
      </div>
      <ul className="mt-5 space-y-3">
        {rows.map(([label, value]) => {
          const n = value ?? 0;
          return (
            <li key={label}>
              <div className="mb-1 flex justify-between text-xs text-[var(--muted)]">
                <span>{label}</span>
                <span className="font-mono text-white">{formatScore(value)}</span>
              </div>
              <div className="h-1 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-[var(--brand)]"
                  style={{ width: `${Math.min(100, (n / 10) * 100)}%` }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export function GameMetaTable({ meta }: { meta?: ReviewGameMeta }) {
  if (!meta) return null;
  const rows: Array<[string, string | undefined]> = [
    ["Gênero", meta.genre],
    ["Estúdio", meta.developer],
    ["Publisher", meta.publisher],
    ["Lançamento", meta.releaseDate],
    ["Plataformas", meta.platforms],
    ["Preço", meta.price],
  ];

  return (
    <dl className="grid gap-2 text-sm sm:grid-cols-2">
      {rows.map(([label, value]) =>
        value && value !== "—" ? (
          <div
            key={label}
            className="rounded-xl border border-[var(--line)] bg-[var(--surface)] px-3 py-2"
          >
            <dt className="text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
              {label}
            </dt>
            <dd className="mt-0.5 text-white">{value}</dd>
          </div>
        ) : null
      )}
    </dl>
  );
}

export function ReviewSections({ sections }: { sections?: ReviewSection[] }) {
  if (!sections?.length) return null;

  return (
    <div className="flex flex-col gap-10">
      {sections.map((section) => (
        <section key={section.id} id={section.id}>
          <div className="mb-4 flex items-baseline justify-between gap-3 border-b border-[var(--line)] pb-2">
            <h2 className="font-display text-xl font-semibold text-white">
              {section.title}
            </h2>
            {section.score != null && (
              <span className="font-mono text-sm text-[var(--brand-soft)]">
                {formatScore(section.score)}
              </span>
            )}
          </div>
          {section.body.split(/\n\n+/).map((paragraph, index) => (
            <p
              key={index}
              className="mb-4 text-[15px] leading-7 text-[var(--ink)]/90"
            >
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
