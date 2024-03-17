interface BodyContainerProps {
  children: React.ReactNode;
}

export default function BodyContainer({ children }: BodyContainerProps) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-10">
      {children}
    </div>
  );
}
