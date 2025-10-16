import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const sizes = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 128,
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/logo.png"
        alt="3i Premier Tech Solutions Logo"
        width={sizes[size]}
        height={sizes[size]}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
};

export default Logo;
