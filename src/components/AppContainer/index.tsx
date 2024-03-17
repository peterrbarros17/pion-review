interface AppContainerProps {
  children: React.ReactNode;
}

export default function AppContainer({ children }: AppContainerProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-10">
      {children}
    </div>
  );
}
