import React from "react";
import { IconType } from "react-icons";

interface CardsHeaderProps {
  title: string;
  icon: IconType;
  size?: string | number;
  color?: string;
}

export default function CardsHeader({
  title,
  icon,
  size,
  color,
}: CardsHeaderProps) {
  return (
    <header className="flex items-center gap-2">
      <div>{React.createElement(icon, { size, color })}</div>
      <h2 className="text-lg">{title}</h2>
    </header>
  );
}
