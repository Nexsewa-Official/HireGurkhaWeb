"use client";

import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "default";
  size?: "sm" | "md" | "lg";
  useImage?: boolean; // Set to true if rendering custom PNG/SVG logo image
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  variant = "default",
  size = "md",
  useImage = false,
}) => {
  const heightMap = {
    sm: "h-7",
    md: "h-9 sm:h-10",
    lg: "h-12 sm:h-14",
  };

  const isDarkBg = variant === "light";
  const primaryColor = isDarkBg ? "#FFFFFF" : "#343E4F"; // Dark Slate or White
  const goldColor = "#F5A800"; // Signature Yellow/Gold Accent

  if (useImage) {
    return (
      <div className={`relative inline-flex items-center ${heightMap[size]} ${className}`}>
        <Image
          src="/logo.png"
          alt="Hire Gurkha LLC Logo"
          width={240}
          height={60}
          className="h-full w-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 select-none ${heightMap[size]} ${className}`}>
      <svg
        viewBox="0 0 380 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
        aria-label="Hire Gurkha Logo"
      >
        {/* H */}
        <path
          d="M 12 18 L 25 18 L 25 38 L 43 38 L 43 18 L 56 18 L 56 64 L 43 64 L 43 49 L 25 49 L 25 64 L 12 64 Z"
          fill={primaryColor}
        />

        {/* i Stem */}
        <path
          d="M 68 30 L 80 30 L 80 64 L 68 64 Z"
          fill={primaryColor}
        />
        {/* i Top-Left Yellow Accent Block */}
        <rect x="56" y="20" width="12" height="10" fill={goldColor} rx="1" />
        {/* i Circle Dot */}
        <circle cx="89" cy="25" r="7" fill={primaryColor} />

        {/* r */}
        <path
          d="M 94 30 L 106 30 L 106 37 C 109 32 114 30 120 30 C 122 30 124 30.5 125 31 L 122 41 C 120 40.5 118 40 116 40 C 110 40 106 44 106 51 L 106 64 L 94 64 Z"
          fill={primaryColor}
        />

        {/* Stylized 'e' / 'c' with yellow arrow */}
        <g>
          <path
            d="M 152 28 C 137 28 126 38 126 51 C 126 64 137 73 152 73 C 163 73 171 67 174 59 L 162 56 C 160 60 156 63 152 63 C 144 63 138 57 138 51 C 138 45 144 38 152 38 C 156 38 160 41 162 45 L 174 42 C 171 34 163 28 152 28 Z"
            fill={primaryColor}
          />
          {/* Horizontal Arrow Tip inside 'e' */}
          <path
            d="M 148 47 L 168 47 L 175 51 L 168 55 L 148 55 Z"
            fill={goldColor}
          />
        </g>

        {/* gurkha text in gold */}
        <text
          x="184"
          y="63"
          fill={goldColor}
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          fontSize="41"
          fontWeight="400"
          letterSpacing="-0.5px"
        >
          gurkha
        </text>
      </svg>
    </div>
  );
};
