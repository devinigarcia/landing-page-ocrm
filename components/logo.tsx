"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({
  className,
  variant = "primary",
  size = "md",
}: LogoProps) {
  const sizeValues = {
    sm: { width: 60, height: 20 },
    md: { width: 90, height: 30 },
    lg: { width: 120, height: 40 },
    xl: { width: 150, height: 50 },
  };

  const { width, height } = sizeValues[size];

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/WhatsApp Image 2025-10-15 at 11.24.57.jpeg"
        alt="OCRM Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}

// Versão SVG para máxima precisão técnica (agora usando a mesma imagem)
export function LogoSVG({
  className,
  variant = "primary",
  size = "md",
}: LogoProps) {
  const sizeValues = {
    sm: { width: 60, height: 20 },
    md: { width: 90, height: 30 },
    lg: { width: 120, height: 40 },
    xl: { width: 150, height: 50 },
  };

  const { width, height } = sizeValues[size];

  return (
    <div className={cn("relative", className)}>
      <Image
        src="/WhatsApp Image 2025-10-15 at 11.24.57.jpeg"
        alt="OCRM Logo"
        width={width}
        height={height}
        className="object-contain"
        priority
      />
    </div>
  );
}
