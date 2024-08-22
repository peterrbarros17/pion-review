"use client";
import Link from "next/link";
import { useState } from "react";

const ToggleMenu = () => {
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
            ? "flex  items-center gap-4 absolute left-0 top-32 bg-[var(--gray-dark)] py-2 px-4 md:static md:flex-row"
            : "hidden md:flex gap-4 bg-[var(--gray-dark)] px-4"
        }`}
      >
        <Link href="/" className="hover-links">
          Início
        </Link>
        <Link href="/reviews" className="hover-links">
          Reviews
        </Link>
        <Link href="/news" className="hover-links">
          Novidades
        </Link>
        <Link href="/popular" className="hover-links">
          Popular
        </Link>
      </nav>
    </>
  );
};

export default ToggleMenu;
