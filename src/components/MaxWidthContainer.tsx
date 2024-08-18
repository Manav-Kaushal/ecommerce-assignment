import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

type Props = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const MaxWidthContainer = ({ children, ...props }: Props) => {
  const { className } = props;

  return (
    <div
      className={cn(
        "w-full px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthContainer;
