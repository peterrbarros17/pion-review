import { FunctionComponent } from "react";

interface BlurCircleProps {}

const BlurCircle: FunctionComponent<BlurCircleProps> = () => {
  return (
    <div className="w-96 h-96 blur-[300px] absolute top-12 right-0 bg-[var(--red)]"></div>
  );
};

export default BlurCircle;
