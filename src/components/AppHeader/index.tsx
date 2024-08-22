import Link from "next/link";
import ToggleMenu from "./ToggleMenu";
import Search from "../_ui/_main/Search";

interface AppHeaderProps {}

const AppHeader = ({}: AppHeaderProps) => {
  return (
    <header className="flex flex-col items-center gap-4 p-4 md:flex-col md:justify-between md:items-center bg-gradient-to-r from-red-800 to-bg-[var(--gray-dark)]">
      <div className="flex items-center gap-2">
        <Link href="/" className="text-xl my-2">
          <div className="text-2xl font-bold">Pion Review</div>
        </Link>
      </div>
      <div className="flex items-center justify-between w-full lg:w-[1000px] bg-[var(--gray-dark)] p-2">
        <ToggleMenu />
        <Search />
      </div>
    </header>
  );
};

export default AppHeader;
