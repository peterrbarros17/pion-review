import Link from "next/link";
import { FunctionComponent } from "react";

interface HeaderAppProps {}

const HeaderApp: FunctionComponent<HeaderAppProps> = () => {
  return (
    <header className="flex flex-col items-center justify-between h-12 md:flex md:flex-row">
      <Link href="/" className="text-xl">
        Pion Review
      </Link>
      <nav className="flex gap-4">
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
    </header>
  );
};

export default HeaderApp;
