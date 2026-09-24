import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "narrow" | "default" | "wide";
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  size = "default",
}) => {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1440px]",
  };

  return (
    <div
      className={`mx-auto px-4 sm:px-6 lg:px-8 w-full ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
};
