import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "navy" | "outline" | "dark";
  size?: "sm" | "md";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "gold",
  size = "md",
  className = "",
}) => {
  const base = "inline-flex items-center font-medium rounded-full tracking-wide";

  const variants = {
    gold: "bg-[#FFF8EA] text-[#B87C00] border border-[#F5A800]/30",
    navy: "bg-[#161F2C] text-white border border-[#35445A]",
    dark: "bg-[#253142] text-[#F5A800] border border-[#F5A800]/30",
    outline: "bg-transparent text-[#64748B] border border-slate-300",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3.5 py-1 text-xs sm:text-sm",
  };

  return (
    <span className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  );
};
