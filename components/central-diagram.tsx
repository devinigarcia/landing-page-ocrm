"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/logo"

interface ConnectedElementProps {
  title: string
  icon: string
  position: "top" | "top-right" | "right" | "bottom-right" | "bottom" | "bottom-left" | "left" | "top-left"
  delay?: number
  orbitRadius: number
}

export function ConnectedElement({ title, icon, position, delay = 0, orbitRadius }: ConnectedElementProps) {
  const positions = {
    "top": { x: 0, y: -orbitRadius },
    "top-right": { x: orbitRadius * 0.707, y: -orbitRadius * 0.707 },
    "right": { x: orbitRadius, y: 0 },
    "bottom-right": { x: orbitRadius * 0.707, y: orbitRadius * 0.707 },
    "bottom": { x: 0, y: orbitRadius },
    "bottom-left": { x: -orbitRadius * 0.707, y: orbitRadius * 0.707 },
    "left": { x: -orbitRadius, y: 0 },
    "top-left": { x: -orbitRadius * 0.707, y: -orbitRadius * 0.707 }
  }

  const { x, y } = positions[position]

  return (
    <motion.div
              className="absolute backdrop-blur-sm rounded-full shadow-2xl w-36 h-36 flex flex-col items-center justify-center border border-gray-300/30 circular-orbit"
              style={{
        backgroundColor: 'rgb(255, 255, 255)',
        left: '50%',
        top: '50%'
      }}
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: delay + 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {/* Container centralizado */}
      <div className="flex flex-col items-center justify-center h-full w-full">
        {/* Ícone */}
        <div className="relative mb-2 flex items-center justify-center w-full">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center text-lg shadow-lg bg-gray-200">
            {icon}
          </div>
        </div>
        
        {/* Título */}
        <div className="text-xs font-semibold leading-tight transition-colors duration-300 text-center w-full" style={{ color: 'rgb(0, 0, 0)' }}>
          {title}
        </div>
      </div>
    </motion.div>
  )
}

export function CentralDiagram() {
  // Adicionar CSS para animação circular - apenas no desktop
  if (typeof document !== 'undefined') {
    const style = document.createElement('style')
    style.textContent = `
      @keyframes circular-orbit {
        0% { transform: translate(-50%, -50%) rotate(0deg) translateX(240px) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg) translateX(240px) rotate(-360deg); }
      }
      .circular-orbit {
        animation: circular-orbit 20s linear infinite;
      }
      .circular-orbit:nth-child(1) { animation-delay: 0s; }
      .circular-orbit:nth-child(2) { animation-delay: -2.5s; }
      .circular-orbit:nth-child(3) { animation-delay: -5s; }
      .circular-orbit:nth-child(4) { animation-delay: -7.5s; }
      .circular-orbit:nth-child(5) { animation-delay: -10s; }
      .circular-orbit:nth-child(6) { animation-delay: -12.5s; }
      .circular-orbit:nth-child(7) { animation-delay: -15s; }
      .circular-orbit:nth-child(8) { animation-delay: -17.5s; }
      
      @media (max-width: 1023px) {
        .circular-orbit {
          animation: none !important;
        }
      }
    `
    if (!document.head.querySelector('style[data-circular-orbit]')) {
      style.setAttribute('data-circular-orbit', 'true')
      document.head.appendChild(style)
    }
  }

  const elements = [
    { title: "Gestão Comercial", icon: "📊", position: "top" as const, orbitRadius: 240 },
    { title: "Gestão de Leads", icon: "🎯", position: "top-right" as const, orbitRadius: 240 },
    { title: "Gestão de Relacionamento", icon: "🤝", position: "right" as const, orbitRadius: 240 },
    { title: "Gestão de Dados", icon: "💾", position: "bottom-right" as const, orbitRadius: 240 },
    { title: "Gestão de Processos", icon: "⚙️", position: "bottom" as const, orbitRadius: 240 },
    { title: "Gestão de Indicadores", icon: "📈", position: "bottom-left" as const, orbitRadius: 240 },
    { title: "Lead Data", icon: "📋", position: "left" as const, orbitRadius: 240 },
    { title: "Intent Signals", icon: "📡", position: "top-left" as const, orbitRadius: 240 }
  ]

  return (
    <>
      {/* Desktop: Diagrama Radial */}
      <div className="hidden lg:block relative w-full max-w-6xl mx-auto aspect-square" style={{ border: 'none', outline: 'none' }}>
        {/* Logo Central Premium */}
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.div
            className="w-32 h-32 bg-gradient-to-br from-gray-black via-gray-dark to-gray-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.1,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            {/* Logo */}
            <div className="relative z-10">
              <Logo variant="light" size="md" />
            </div>
            
            {/* Anel decorativo */}
            <div className="absolute inset-0 rounded-full border-2 animate-spin border-gray-400" style={{ animationDuration: '20s' }}></div>
          </motion.div>
        </div>

        {/* Elementos Conectados */}
        {elements.map((element, index) => (
          <ConnectedElement
            key={index}
            title={element.title}
            icon={element.icon}
            position={element.position}
            delay={index * 0.1}
            orbitRadius={element.orbitRadius}
          />
        ))}
      </div>

      {/* Mobile: Layout em Grid */}
      <div className="lg:hidden w-full max-w-4xl mx-auto">
        {/* Logo Central no Topo */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-gray-black via-gray-dark to-gray-black rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20">
            <Logo variant="light" size="sm" />
          </div>
        </motion.div>

        {/* Grid de Elementos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {elements.map((element, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + (index * 0.1),
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              whileHover={{ 
                scale: 1.05,
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              {/* Ícone */}
              <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-white/20 rounded-xl flex items-center justify-center text-2xl sm:text-3xl">
                {element.icon}
              </div>
              
              {/* Título */}
              <h3 className="text-sm sm:text-base font-semibold text-white leading-tight">
                {element.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
