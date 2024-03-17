"use client";
import Link from "next/link";
import { useState } from "react";

export default function ToggleMenu() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <button
        className="flex flex-col gap-1 cursor-pointer md:hidden"
        onClick={toggleMenu}
      >
        <div className="w-5 h-[2px] bg-white"></div>
        <div className="w-5 h-[2px] bg-white"></div>
        <div className="w-5 h-[2px] bg-white"></div>
      </button>
      <nav
        className={`${
          isOpenMenu
            ? "flex gap-4 absolute right-0 top-12 bg-[var(--gray-dark)] py-2 px-4"
            : "hidden md:flex gap-4"
        }`}
      >
        <Link href="/" className="hover-links">
          Início
        </Link>
        <Link href="/news" className="hover-links">
          Novidades
        </Link>
        <Link href="/reviews" className="hover-links">
          Reviews
        </Link>
        <Link href="/popular" className="hover-links">
          Popular
        </Link>
      </nav>
    </>
  );
}
