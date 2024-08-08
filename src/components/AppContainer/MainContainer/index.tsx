interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between m-6">
      {children}
    </div>
  );
};

export default MainContainer;
