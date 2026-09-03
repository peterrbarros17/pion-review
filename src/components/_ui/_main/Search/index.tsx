"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const term = query.trim();
    if (!term) return;
    setQuery("");
    router.push(`/results?title=${encodeURIComponent(term)}`);
  };

  return (
    <form onSubmit={handleSubmit} role="search" className="flex">
      <label htmlFor="busca" className="sr-only">
        Buscar reviews
      </label>
      <input
        id="busca"
        type="search"
        value={query}
        placeholder="Buscar jogo..."
        onChange={(e) => setQuery(e.target.value)}
        className="w-40 rounded-l-md border border-[var(--line)] bg-[var(--surface-2)] px-3 py-1.5 text-sm text-white outline-none placeholder:text-[var(--muted)] focus:border-[var(--brand)] md:w-56"
      />
      <button
        type="submit"
        aria-label="Buscar"
        className="rounded-r-md border border-l-0 border-[var(--line)] bg-[var(--surface)] px-2.5 text-[var(--muted)] hover:text-white"
      >
        <AiOutlineSearch size={18} />
      </button>
    </form>
  );
};

export default Search;
