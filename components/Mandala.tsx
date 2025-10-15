"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const dataLeft = [
  "Gestão Comercial",
  "Gestão de Leads",
  "Gestão de Relacionamento",
];

const dataRight = [
  "Gestão de Dados",
  "Gestão de Processos",
  "Gestão de Indicadores",
];

export default function Mandala() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Núcleo - esfera amarela com logo */}
      <motion.div
        className="z-30 flex items-center justify-center rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 40px rgba(253,185,39,0.4)",
            "0 0 90px rgba(253,185,39,0.9)",
            "0 0 40px rgba(253,185,39,0.4)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          width: 160,
          height: 160,
          background: "#ffeb01",
          border: "2px solid #ffeb01",
          boxShadow:
            "0 0 40px rgba(253,185,39,0.7), inset 0 0 20px rgba(255,255,255,0.2)",
        }}
      >
        <Image
          src="/WhatsApp Image 2025-10-15 at 11.24.57.jpeg"
          alt="o.crm logo"
          width={100}
          height={100}
          className="object-contain rounded-full"
          priority
        />
      </motion.div>

      {/* Partículas orbitando */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#CCCCCC]"
          style={{
            width: 4,
            height: 4,
            opacity: 0.25 + Math.random() * 0.5,
            left: "50%",
            top: "50%",
            marginLeft: "-2px",
            marginTop: "-2px",
          }}
          animate={{
            rotate: 360,
            x: [0, Math.cos((i * Math.PI) / 15) * 200],
            y: [0, Math.sin((i * Math.PI) / 15) * 200],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + Math.random() * 10,
            ease: "linear",
          }}
        />
      ))}

      {/* Linhas SVG */}
      <svg
        className="absolute w-full h-full top-0 left-0"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#CCCCCC" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#E0E0E0" stopOpacity="1" />
            <stop offset="100%" stopColor="#CCCCCC" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Curvas Esquerda → Centro */}
        {dataLeft.map((_, i) => {
          if (i === 0) return null; // Pula a primeira linha
          const yPositions = ["20%", "50%", "80%"]; // Posições verticais intercaladas
          const y = yPositions[i];
          const isActive = hovered === i;
          return (
            <motion.path
              key={i}
              d={`M 10% ${y} Q 30% ${y}, 50% 50%`}
              stroke="url(#lineGrad)"
              strokeWidth={isActive ? 3 : 2.5}
              strokeOpacity={1}
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 10px rgba(200,200,200,0.7))",
              }}
            />
          );
        })}

        {/* Curvas Direita → Centro */}
        {dataRight.map((_, i) => {
          if (i === 0) return null; // Pula a primeira linha
          const yPositions = ["10%", "40%", "70%"]; // Posições verticais intercaladas
          const y = yPositions[i];
          const isActive = hovered === i + dataLeft.length;
          return (
            <motion.path
              key={i}
              d={`M 90% ${y} Q 70% ${y}, 50% 50%`}
              stroke="url(#lineGrad)"
              strokeWidth={isActive ? 3 : 2.5}
              strokeOpacity={1}
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.85, 1, 0.85],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              style={{
                filter: "drop-shadow(0 0 10px rgba(200,200,200,0.7))",
              }}
            />
          );
        })}
      </svg>

      {/* Blocos Esquerda */}
      {dataLeft.map((item, i) => {
        const verticalPositions = ["20%", "50%", "80%"];
        return (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`absolute px-6 py-3 rounded-lg text-base border backdrop-blur-sm transition cursor-pointer z-50 -translate-y-1/2 ${
              hovered === i
                ? "border-[#ffeb01] text-white bg-neutral-900/80"
                : "border-gray-600 text-gray-200 bg-neutral-900/50"
            }`}
            style={{
              left: "10%",
              top: verticalPositions[i],
            }}
            whileHover={{ scale: 1.08 }}
          >
            {item} +
          </motion.div>
        );
      })}

      {/* Blocos Direita */}
      {dataRight.map((item, i) => {
        const verticalPositions = ["10%", "40%", "70%"];
        return (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i + dataLeft.length)}
            onMouseLeave={() => setHovered(null)}
            className={`absolute px-6 py-3 rounded-lg text-base border backdrop-blur-sm transition cursor-pointer z-50 -translate-y-1/2 ${
              hovered === i + dataLeft.length
                ? "border-[#ffeb01] text-white bg-neutral-900/80"
                : "border-gray-600 text-gray-200 bg-neutral-900/50"
            }`}
            style={{
              right: "10%",
              top: verticalPositions[i],
            }}
            whileHover={{ scale: 1.08 }}
          >
            {item} +
          </motion.div>
        );
      })}
    </div>
  );
}
