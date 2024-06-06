import { ComponentProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TitleProps extends ComponentProps<"h1"> {
  children: ReactNode;
}

export default function Title({ children, className, ...props }: TitleProps) {
  return (
    <h1
      className={twMerge(
        "font-archivo-black text-soft-white text-6xl text-center drop-shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}
