import { ReactNode } from "react";

interface SubtitleProps {
  children: ReactNode;
}

export default function Subtitle({ children }: SubtitleProps) {
  return (
    <p className="font-anek-devanagari text-xl text-gray-400">{children}</p>
  );
}
