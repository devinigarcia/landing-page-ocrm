"use client";
import { motion } from "framer-motion";

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
  return (
    <div className="relative w-full h-[700px] bg-black flex items-center justify-center text-white overflow-hidden">
      {/* Centro */}
      <motion.div
        className="absolute z-10 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 flex items-center justify-center text-3xl font-bold shadow-lg"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        D
      </motion.div>

      {/* Linhas SVG */}
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {dataLeft.map((_, i) => (
          <motion.path
            key={i}
            d={`M 200 ${100 + i * 100} C 400 ${150 + i * 50}, 600 ${150 + i * 50}, 800 ${350}`}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
        {dataRight.map((_, i) => (
          <motion.path
            key={i}
            d={`M 800 ${100 + i * 100} C 600 ${150 + i * 50}, 400 ${150 + i * 50}, 200 ${350}`}
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            fill="transparent"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: i * 0.1 }}
          />
        ))}
      </svg>

      {/* Blocos laterais */}
      <div className="absolute left-10 flex flex-col gap-6">
        {dataLeft.map((item, i) => (
          <motion.div
            key={i}
            className="bg-neutral-900 border border-gray-700 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-neutral-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            {item} +
          </motion.div>
        ))}
      </div>

      <div className="absolute right-10 flex flex-col gap-6">
        {dataRight.map((item, i) => (
          <motion.div
            key={i}
            className="bg-neutral-900 border border-gray-700 px-4 py-2 rounded-md text-sm cursor-pointer hover:bg-neutral-800 transition"
            whileHover={{ scale: 1.05 }}
          >
            {item} +
          </motion.div>
        ))}
      </div>
    </div>
  );
}

