import { forwardRef, ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className = "", ...props },
  ref
) {
  return (
    <button
      className={twMerge(
        "bg-gray-100 text-black px-4 py-1.5 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 focus:outline-none",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
