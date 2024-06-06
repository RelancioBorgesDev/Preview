import { ElementType } from "react";
import Title from "./Title";
import Subtitle from "./Subtitle";

interface CardProps {
  icon: ElementType;
  title: string;
  subtitle: string;
}

export default function Card({ icon: Icon, title, subtitle }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-around gap-4 rounded-xl p-4">
      <span className="bg-soft-white flex items-center justify-center rounded-full p-2 ">
        <Icon size={40} />
      </span>
      <Title className="text-xl">{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </div>
  );
}
