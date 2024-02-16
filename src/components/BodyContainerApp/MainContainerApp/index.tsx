import { FunctionComponent } from "react";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: FunctionComponent<MainContainerProps> = ({
  children,
}: MainContainerProps) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between">
      {children}
    </div>
  );
};

export default MainContainer;
