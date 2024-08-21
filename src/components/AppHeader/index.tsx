import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import Search from "../_ui/_main/Search";

interface AppHeaderProps {}

const AppHeader = ({}: AppHeaderProps) => {
  return (
    <header className="flex flex-col sm:flex sm:flex-row px-2 md:p-0 items-center justify-between md:justify-around h-12 md:flex md:flex-row bg-[var(--gray-dark)]">
      <Link href="/" className="text-xl">
        Pion Review
      </Link>
      <ToggleMenu />
      <Search />
    </header>
  );
};

export default AppHeader;
