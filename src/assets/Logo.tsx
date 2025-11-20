import React from "react";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Logo: React.FC<LogoProps> = ({
  width = 100,
  height = 100,
  color = "#ffffff",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Circle */}
      <circle cx="100" cy="100" r="95" stroke={color} strokeWidth="10" />

      {/* Stylized A */}
      <path
        d="M60 150 L100 40 L140 150 L120 150 L100 100 L80 150 Z"
        fill={color}
      />
    </svg>
  );
};

export default Logo;
