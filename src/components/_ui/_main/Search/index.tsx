"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineWeibo, AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/results?title=${query}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-[var(--red)] text-white rounded-md overflow-auto px-2 block sm:flex">
        <input
          type="text"
          value={query}
          placeholder="Buscar..."
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 bg-[var(--red)] border-none outline-none placeholder:text-slate-50"
        />
        <button type="submit" className=" text-white ">
          <AiOutlineSearch size={20} />
        </button>
      </div>
    </form>
  );
};

export default Search;
