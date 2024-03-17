import Link from "next/link";
import { FaDiscord, FaTwitch, FaYoutube } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { FaRegCopyright } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Concert_One } from "next/font/google";

const concertOne = Concert_One({
  weight: ["400"],
  subsets: ["latin"],
});

interface AppFooterProps {}

export default function AppFooter({}: AppFooterProps) {
  const socialMedias = [
    {
      id: 1,
      href: "#",
      hover: "bg-indigo-500",
      iconType: FaDiscord,
    },
    {
      id: 2,
      href: "#",
      hover: "bg-pink-500",
      iconType: FaInstagram,
    },
    {
      id: 3,
      href: "#",
      hover: "bg-red-500",
      iconType: FaYoutube,
    },
    {
      id: 4,
      href: "#",
      hover: "bg-red-500",
      iconType: FaYoutube,
    },
    {
      id: 5,
      href: "#",
      hover: "bg-purple-500",
      iconType: FaTwitch,
    },
  ];
  return (
    <footer className="flex flex-col items-center justify-center gap-1 md:gap-2 text-[12px] md:text-sm my-10">
      <Link href="#" className="hover-links">
        Volta ao Topo
      </Link>
      <p className="flex cursor-pointer gap-4 items-center hover:bg-indigo-500 transition-all duration-150 ease-in p-2 my-2 rounded-md">
        <IoLogoDiscord className="text-4xl" />
        <Link href="" className={`uppercase ${concertOne.className}`}>
          Discord
        </Link>
      </p>
      <nav>
        <ul className="flex gap-4 text-xl md:text-2xl">
          {socialMedias.map((item) => (
            <Link href={item.href} key={item.id} target="__blank">
              <li className={`hover:${item.hover} hover-links-midias`}>
                <item.iconType />
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <p className="flex items-center gap-4">
        <FaRegCopyright />
        <Link href="" className="hover-links">
          Pion Review - 2024
        </Link>
      </p>
      <p className="text-center">
        Esse website não está afiliado com qualquer empresa de jogos digitais
      </p>
    </footer>
  );
}
