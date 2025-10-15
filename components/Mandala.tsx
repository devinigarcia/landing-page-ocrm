"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const dataLeft = [
  "Dados Cadastrais",
  "Dados Fiscais",
  "Dados Estimados",
  "Dados Online",
  "Dados Localizados",
  "Dados Segmentados",
];

const dataRight = [
  "Dados Censitários",
  "Dados Econômicos",
  "Dados de Consumo",
  "Dados Comerciais",
  "Dados de Vias",
  "Dados Exclusivos",
];

export default function Mandala() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="relative w-full h-[900px] bg-black flex items-center justify-center overflow-hidden">
      {/* Núcleo */}
      <motion.div
        className="absolute bottom-24 z-30 flex items-center justify-center rounded-full"
        animate={{
          scale: [1, 1.05, 1],
          boxShadow: [
            "0 0 40px rgba(157,140,255,0.3)",
            "0 0 80px rgba(157,140,255,0.6)",
            "0 0 40px rgba(157,140,255,0.3)",
          ],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          width: 140,
          height: 140,
          background:
            "radial-gradient(circle at 40% 30%, #1a1b25 0%, #0a0a12 100%)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <span className="text-4xl font-bold text-white select-none">D</span>
      </motion.div>

      {/* Orbitas de partículas */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#9d8cff]"
          style={{
            width: 4,
            height: 4,
            opacity: 0.25 + Math.random() * 0.5,
            bottom: "120px",
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
        className="absolute w-full h-full"
        viewBox="0 0 1200 900"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9d8cff" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#9d8cff" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#9d8cff" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Curvas Esquerda → Centro */}
        {dataLeft.map((_, i) => {
          const y = 220 + i * 85;
          const isActive = hovered === i;
          return (
            <motion.path
              key={i}
              d={`M 200 ${y} C 480 ${y + 200}, 700 700, 600 780`}
              stroke="url(#lineGrad)"
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeOpacity={isActive ? 1 : 0.3}
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          );
        })}

        {/* Curvas Direita → Centro */}
        {dataRight.map((_, i) => {
          const y = 220 + i * 85;
          const isActive = hovered === i + dataLeft.length;
          return (
            <motion.path
              key={i}
              d={`M 1000 ${y} C 720 ${y + 200}, 500 700, 600 780`}
              stroke="url(#lineGrad)"
              strokeWidth={isActive ? 2.5 : 1.5}
              strokeOpacity={isActive ? 1 : 0.3}
              fill="transparent"
              initial={{ pathLength: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 3,
                delay: i * 0.1,
                ease: "easeInOut",
                repeat: Infinity,
              }}
            />
          );
        })}
      </svg>

      {/* Blocos Esquerda */}
      <div className="absolute left-12 flex flex-col gap-6 z-50">
        {dataLeft.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className={`px-4 py-2 rounded-md text-sm border backdrop-blur-sm transition cursor-pointer ${
              hovered === i
                ? "border-[#9d8cff] text-white bg-neutral-900/70"
                : "border-gray-700 text-gray-300 bg-neutral-900/40"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {item} +
          </motion.div>
        ))}
      </div>

      {/* Blocos Direita */}
      <div className="absolute right-12 flex flex-col gap-6 z-50">
        {dataRight.map((item, i) => (
          <motion.div
            key={i}
            onMouseEnter={() => setHovered(i + dataLeft.length)}
            onMouseLeave={() => setHovered(null)}
            className={`px-4 py-2 rounded-md text-sm border backdrop-blur-sm transition cursor-pointer ${
              hovered === i + dataLeft.length
                ? "border-[#9d8cff] text-white bg-neutral-900/70"
                : "border-gray-700 text-gray-300 bg-neutral-900/40"
            }`}
            whileHover={{ scale: 1.05 }}
          >
            {item} +
          </motion.div>
        ))}
      </div>
    </div>
  );
}
