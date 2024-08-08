import Link from "next/link";
import ToggleMenu from "./ToggleMenu";

interface AppHeaderProps {}

const AppHeader = ({}: AppHeaderProps) => {
  return (
    <header className="flex px-2 md:p-0 items-center justify-between md:justify-around h-12 md:flex md:flex-row bg-[var(--gray-dark)]">
      <Link href="/" className="text-xl">
        Pion Review
      </Link>
      <ToggleMenu />
    </header>
  );
};

export default AppHeader;
