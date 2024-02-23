import { FunctionComponent } from "react";

interface BodyContainerProps {
  children: React.ReactNode;
}

const BodyContainer: FunctionComponent<BodyContainerProps> = ({
  children,
}: BodyContainerProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between my-10">
      {children}
    </div>
  );
};

export default BodyContainer;
