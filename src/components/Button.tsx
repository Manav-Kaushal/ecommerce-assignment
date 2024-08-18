import { ReactNode } from "react";
import { cn } from "../lib/utils";

type Size = "small" | "medium" | "large";

type Props = {
  children: ReactNode;
  size?: Size;
};

const Sizes = {
  small: "px-4 py-1.5 text-sm",
  medium: "px-4 py-1.5 text-sm",
  large: "px-4 py-1.5 text-sm",
};

const Button = ({ children, size = "medium" }: Props) => {
  return (
    <button
      className={cn(
        "inline-flex items-center space-x-2 font-medium text-white transition-all duration-200 bg-blue-600 border border-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:ring",
        Sizes[size]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
