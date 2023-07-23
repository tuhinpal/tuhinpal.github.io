"use client";

import { BaseHTMLAttributes } from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";

import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";
import Anchor from "./Anchor";

export interface SocialMediaProps extends BaseHTMLAttributes<HTMLDivElement> {
  className?: string;
  buttonStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
}

const SocialMedia = ({
  className = "",
  buttonStyle,
  iconStyle,
}: SocialMediaProps) => {
  return (
    <div className={twMerge("flex items-center gap-3", className)}>
      <Anchor
        href="https://www.linkedin.com/in/tuhinkantipal/"
        className="group"
        style={buttonStyle}
        target="_blank"
        aria-label="LinkedIn profile"
      >
        <ImLinkedin
          className="group-hover:text-blue-600 transition-all duration-200"
          style={iconStyle}
        />
      </Anchor>

      <Anchor
        href="https://github.com/tuhinpal"
        className="group"
        style={buttonStyle}
        target="_blank"
        aria-label="GitHub profile"
      >
        <ImGithub
          className="group-hover:text-black transition-all duration-200"
          style={iconStyle}
        />
      </Anchor>
    </div>
  );
};

export default SocialMedia;
