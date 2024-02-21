import Link from "next/link";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FunctionComponent } from "react";
import { Concert_One } from "next/font/google";

const concertOne = Concert_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface FooterAppProps {}

const FooterApp: FunctionComponent<FooterAppProps> = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-1 md:gap-2 text-[12px] md:text-sm">
      <Link href="#" className="hover-links">
        Volta ao Topo
      </Link>
      <div className="flex gap-4 items-center hover:bg-indigo-500 transition-all duration-150 ease-in p-2 my-2 rounded-md">
        <IoLogoDiscord className="text-4xl" />
        <Link href="" className={`uppercase ${concertOne.className}`}>
          Discord
        </Link>
      </div>
      <nav className="flex gap-4 text-xl md:text-2xl">
        <Link
          href=""
          className="bg-[var(--gray)] hover:bg-indigo-500 p-2 rounded-full hover-links-midias"
        >
          <FaDiscord />
        </Link>
        <Link
          href=""
          className="bg-[var(--gray)] hover:bg-pink-500 p-2 rounded-full hover-links-midias"
        >
          <FaInstagram />
        </Link>
        <Link
          href=""
          className="bg-[var(--gray)] hover:bg-red-500 p-2 rounded-full hover-links-midias"
        >
          <FaYoutube />
        </Link>
        <Link
          href=""
          className="bg-[var(--gray)] hover:bg-red-500 p-2 rounded-full hover-links-midias"
        >
          <FaYoutube />
        </Link>
        <Link
          href=""
          className="bg-[var(--gray)] hover:bg-purple-500 p-2 rounded-full hover-links-midias"
        >
          <FaTwitch />
        </Link>
      </nav>
      <div className="flex items-center gap-4">
        <FaRegCopyright />
        <Link href="" className="hover-links">
          Pion Review - 2024
        </Link>
      </div>
      <p className="text-center">
        Esse website não está afiliado com qualquer empresa de jogos digitais
      </p>
    </footer>
  );
};

export default FooterApp;
