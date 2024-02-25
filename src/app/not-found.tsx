import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center flex-col gap-2">
      <h2 className="text-3xl">Página não encontrada</h2>
      <p>Não foi possível localizar a URL</p>
      <Link href="/" className="text-[var(--red)]">
        Voltar para Home
      </Link>
    </div>
  );
}
