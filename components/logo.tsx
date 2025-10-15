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
    sm: { width: 42, height: 42 },
    md: { width: 63, height: 63 },
    lg: { width: 84, height: 84 },
    xl: { width: 105, height: 105 },
  };

  const mobileSizeValues = {
    sm: { width: 34, height: 34 },
    md: { width: 50, height: 50 },
    lg: { width: 67, height: 67 },
    xl: { width: 84, height: 84 },
  };

  const { width, height } = sizeValues[size];
  const { width: mobileWidth, height: mobileHeight } = mobileSizeValues[size];

  return (
    <div className={cn("relative", className)}>
      {/* Desktop */}
      <div
        className="hidden md:flex rounded-full overflow-hidden items-center justify-center"
        style={{
          width: width,
          height: height,
          backgroundColor: "#ffeb01",
          border: "2px solid #ffeb01",
          boxShadow: "0 0 20px rgba(255, 235, 1, 0.3)",
        }}
      >
        <Image
          src="/logoOcrm.jpg"
          alt="OCRM Logo"
          width={width * 0.8}
          height={height * 0.8}
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile */}
      <div
        className="md:hidden rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: mobileWidth,
          height: mobileHeight,
          backgroundColor: "#ffeb01",
          border: "2px solid #ffeb01",
          boxShadow: "0 0 20px rgba(255, 235, 1, 0.3)",
        }}
      >
        <Image
          src="/logoOcrm.jpg"
          alt="OCRM Logo"
          width={mobileWidth * 0.8}
          height={mobileHeight * 0.8}
          className="object-contain"
          priority
        />
      </div>
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
    sm: { width: 42, height: 42 },
    md: { width: 63, height: 63 },
    lg: { width: 84, height: 84 },
    xl: { width: 105, height: 105 },
  };

  const mobileSizeValues = {
    sm: { width: 34, height: 34 },
    md: { width: 50, height: 50 },
    lg: { width: 67, height: 67 },
    xl: { width: 84, height: 84 },
  };

  const { width, height } = sizeValues[size];
  const { width: mobileWidth, height: mobileHeight } = mobileSizeValues[size];

  return (
    <div className={cn("relative", className)}>
      {/* Desktop */}
      <div
        className="hidden md:flex rounded-full overflow-hidden items-center justify-center"
        style={{
          width: width,
          height: height,
          backgroundColor: "#ffeb01",
          border: "2px solid #ffeb01",
          boxShadow: "0 0 20px rgba(255, 235, 1, 0.3)",
        }}
      >
        <Image
          src="/logoOcrm.jpg"
          alt="OCRM Logo"
          width={width * 0.8}
          height={height * 0.8}
          className="object-contain"
          priority
        />
      </div>

      {/* Mobile */}
      <div
        className="md:hidden rounded-full overflow-hidden flex items-center justify-center"
        style={{
          width: mobileWidth,
          height: mobileHeight,
          backgroundColor: "#ffeb01",
          border: "2px solid #ffeb01",
          boxShadow: "0 0 20px rgba(255, 235, 1, 0.3)",
        }}
      >
        <Image
          src="/logoOcrm.jpg"
          alt="OCRM Logo"
          width={mobileWidth * 0.8}
          height={mobileHeight * 0.8}
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
