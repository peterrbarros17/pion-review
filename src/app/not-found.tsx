import Link from "next/link";

const NotFound = () => {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--brand-soft)]">
        404
      </p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-white">
        Página não encontrada
      </h1>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Esse endereço não existe ou a review ainda não foi publicada.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md bg-[var(--brand)] px-4 py-2 text-sm font-medium text-black"
      >
        Voltar ao início
      </Link>
    </div>
  );
};

export default NotFound;
