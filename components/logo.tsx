"use client";

import { cn } from "@/lib/utils";

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
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
    xl: "text-4xl",
  };

  const variantClasses = {
    light: "text-white",
    dark: "text-gray-900",
    primary: "text-primary",
  };

  return (
    <div
      className={cn(
        "font-bold font-sans tracking-tight",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <span className="relative inline-flex items-center">
        {/* Círculo "o" - geometria perfeita com bordas arredondadas */}
        <span className="relative inline-block w-[0.6em] h-[0.6em] rounded-full border-2 border-current">
          {/* Preenchimento sutil para dar profundidade */}
          <span className="absolute inset-0 rounded-full bg-current opacity-10"></span>
        </span>
        {/* Ponto separador */}
        <span className="mx-1 text-[0.8em]">.</span>
        {/* Texto "crm" - fonte sans-serif, peso normal */}
        <span className="font-normal text-[0.9em]">crm</span>
      </span>
    </div>
  );
}

// Versão SVG para máxima precisão técnica
export function LogoSVG({
  className,
  variant = "primary",
  size = "md",
}: LogoProps) {
  const sizeValues = {
    sm: { width: 60, height: 20, fontSize: 12 },
    md: { width: 80, height: 26, fontSize: 16 },
    lg: { width: 100, height: 32, fontSize: 20 },
    xl: { width: 120, height: 40, fontSize: 24 },
  };

  const colors = {
    light: "#ffffff",
    dark: "#000000",
    primary: "hsl(var(--primary))",
  };

  const { width, height, fontSize } = sizeValues[size];
  const color = colors[variant];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Círculo "o" - geometria perfeita com bordas arredondadas */}
      <circle
        cx="20"
        cy="20"
        r="16"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        className="opacity-90"
      />

      {/* Preenchimento sutil para profundidade */}
      <circle cx="20" cy="20" r="14" fill={color} opacity="0.1" />

      {/* Ponto separador */}
      <circle cx="45" cy="20" r="1.5" fill={color} />

      {/* Texto "crm" - sans-serif, peso normal */}
      <text
        x="55"
        y="26"
        fontSize={fontSize * 0.7}
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="400"
        fill={color}
        className="tracking-tight"
      >
        crm
      </text>
    </svg>
  );
}
