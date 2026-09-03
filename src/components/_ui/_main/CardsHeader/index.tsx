interface CardsHeaderProps {
  title: string;
  icon?: React.ComponentType<{ size?: string | number; color?: string }>;
  size?: string | number;
  color?: string;
  hint?: string;
}

const CardsHeader = ({ title, hint }: CardsHeaderProps) => {
  return (
    <header className="mb-5">
      <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        Pion Review
      </p>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-white">
        {title}
      </h1>
      {hint && <p className="mt-1 text-sm text-[var(--muted)]">{hint}</p>}
    </header>
  );
};

export default CardsHeader;
