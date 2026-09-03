import Link from "next/link";
import { FaTwitch, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa";

const social = [
  { href: "https://www.youtube.com", label: "YouTube", icon: FaYoutube },
  { href: "https://www.twitch.tv", label: "Twitch", icon: FaTwitch },
  { href: "https://www.instagram.com", label: "Instagram", icon: FaInstagram },
  { href: "https://discord.com", label: "Discord", icon: FaDiscord },
];

const AppFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-semibold text-white">
            Pion<span className="text-[var(--brand)]">Review</span>
          </p>
          <p className="mt-1 max-w-sm text-xs leading-relaxed text-[var(--muted)]">
            Reviews a partir de lives reais. Sem afiliação com publishers.
          </p>
        </div>
        <nav aria-label="Rodapé" className="flex gap-4 text-xs text-[var(--muted)]">
          <Link href="/reviews" className="hover:text-white">
            Reviews
          </Link>
          <Link href="/news" className="hover:text-white">
            Novidades
          </Link>
          <a href="#conteudo" className="hover:text-white">
            Topo
          </a>
        </nav>
        <ul className="flex gap-2">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="hover-links-midias inline-flex text-sm"
              >
                <item.icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="border-t border-[var(--line)] py-4 text-center text-[11px] text-[var(--muted)]">
        © {year} Pion Review
      </p>
    </footer>
  );
};

export default AppFooter;
