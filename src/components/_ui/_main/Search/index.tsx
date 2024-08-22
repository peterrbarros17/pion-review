"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setQuery("");
    router.push(`/results?title=${query}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex mx-10 md:mx-0 bg-[var(--gray-dark)] rounded-md"
    >
      <input
        type="text"
        value={query}
        placeholder="Buscar..."
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 flex-grow outline-0 bg-white rounded-l-md text-black w-52 md:w-72 lg:w-full"
      />
      <button
        type="submit"
        className="p-2 bg-[var(--gray-dark)] rounded-r-md flex items-center justify-center"
      >
        <AiOutlineSearch size={20} />
      </button>
    </form>
  );
};

export default Search;
