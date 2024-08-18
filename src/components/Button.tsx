import { forwardRef, ReactNode } from "react";
import { cn } from "../lib/utils";

type Size = "small" | "medium" | "large";
type Variant = "primary" | "secondary";

type Props = {
  children: ReactNode;
  size?: Size;
  variant?: Variant;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Sizes = {
  small: "px-3 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "px-5 py-3 text-lg",
};

const Variants = {
  primary:
    "bg-blue-600 border border-blue-600 text-white hover:bg-blue-500 ring-blue-500",
  secondary:
    "bg-gray-600 border border-gray-600 text-white hover:bg-gray-500 ring-gray-500",
};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      size = "medium",
      variant = "primary",
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "inline-flex items-center justify-center space-x-2 font-medium transition-all duration-200 rounded focus:outline-none focus:ring",
          Sizes[size],
          Variants[variant],
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
