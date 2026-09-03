"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Search from "../_ui/_main/Search";

const NAV = [
  { href: "/", label: "Início" },
  { href: "/reviews", label: "Reviews" },
  { href: "/news", label: "Novidades" },
  { href: "/popular", label: "Popular" },
];

const AppHeader = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--line)] bg-[var(--canvas)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
        <Link href="/" className="shrink-0 font-display text-lg font-semibold tracking-tight text-white">
          Pion<span className="text-[var(--brand)]">Review</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  active
                    ? "bg-white/5 text-white"
                    : "text-[var(--muted)] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden md:block">
          <Search />
        </div>

        <button
          type="button"
          className="ml-auto inline-flex flex-col gap-1 rounded-md border border-[var(--line)] p-2 md:hidden"
          aria-expanded={open}
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-px w-4 bg-white" />
          <span className="block h-px w-4 bg-white" />
          <span className="block h-px w-4 bg-white" />
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--line)] bg-[var(--surface)] px-4 py-3 md:hidden">
          <nav className="mb-3 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-[var(--muted)] hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Search />
        </div>
      )}
    </header>
  );
};

export default AppHeader;
