"use client";

import { BaseHTMLAttributes } from "react";
import { ImLinkedin, ImGithub } from "react-icons/im";

import Button from "@/components/Button";
import { twMerge } from "tailwind-merge";

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
      <Button style={buttonStyle}>
        <ImLinkedin style={iconStyle} />
      </Button>

      <Button style={buttonStyle}>
        <ImGithub style={iconStyle} />
      </Button>
    </div>
  );
};

export default SocialMedia;
