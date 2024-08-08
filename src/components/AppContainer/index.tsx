interface AppContainerProps {
  children: React.ReactNode;
}

const AppContainer = ({ children }: AppContainerProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-10">
      {children}
    </div>
  );
};

export default AppContainer;
