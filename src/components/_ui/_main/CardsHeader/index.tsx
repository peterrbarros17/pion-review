import React from "react";
import { IconType } from "react-icons";

interface CardHeadersProps {
  title: string;
  icon: IconType;
  size?: string | number;
  color?: string;
}

export default function CardHeaders({
  title,
  icon,
  size,
  color,
}: CardHeadersProps) {
  return (
    <div className="flex items-center gap-2">
      <div>{React.createElement(icon, { size, color })}</div>
      <h1 className="text-lg">{title}</h1>
    </div>
  );
}
