"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight, Loader2 } from "lucide-react";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  icon = false,
  loading = false,
  fullWidth = false,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F5A800] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

  const variants = {
    primary:
      "bg-[#F5A800] hover:bg-[#E59A00] text-[#161F2C] shadow-md hover:shadow-lg hover:shadow-[#F5A800]/25 border border-[#F5A800]",
    secondary:
      "bg-[#161F2C] hover:bg-[#253142] text-white shadow-md border border-[#35445A]",
    outline:
      "bg-transparent hover:bg-[#161F2C]/5 text-[#161F2C] border-2 border-[#161F2C]",
    dark:
      "bg-[#253142] hover:bg-[#35445A] text-white border border-white/10 hover:border-[#F5A800]/50",
    ghost:
      "bg-transparent hover:bg-[#F5A800]/10 text-[#161F2C] hover:text-[#D98F00]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm gap-1.5",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-8 py-4 text-lg gap-2.5",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
      whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          <span>{children}</span>
          {icon && (
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          )}
        </>
      )}
    </motion.button>
  );
};
