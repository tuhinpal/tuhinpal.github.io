import { twMerge } from "tailwind-merge";
import Link, { LinkProps } from "next/link";

export interface AnchorProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  target?: string;
}

const Anchor = ({ children, className = "", ...props }: AnchorProps) => {
  return (
    <Link
      className={twMerge(
        "bg-gray-100 text-black px-4 py-1.5 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-200 transform hover:scale-105 focus:outline-none",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Anchor;
