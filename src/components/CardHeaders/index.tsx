import React from "react";
import { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface CardHeadersProps {
  title: string;
  icon: IconType;
  size?: string | number;
  color?: string;
}

const CardHeaders: FunctionComponent<CardHeadersProps> = ({
  title = "card header title",
  icon,
  size = 24,
  color = "",
}) => {
  return (
    <div className="flex items-center gap-2">
      <div>{React.createElement(icon, { size, color })}</div>
      <h1 className="text-lg">{title}</h1>
    </div>
  );
};

export default CardHeaders;
