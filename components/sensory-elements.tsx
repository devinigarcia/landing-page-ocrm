"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface SensoryElementProps {
  className?: string
  type?: "visual" | "tactile" | "auditory" | "gustatory" | "olfactory"
  intensity?: "subtle" | "medium" | "strong"
}

// Elementos visuais sensoriais - estimulantes e sofisticados
export function VisualSensory({ className, intensity = "medium" }: SensoryElementProps) {
  const intensityClasses = {
    subtle: "opacity-30",
    medium: "opacity-60", 
    strong: "opacity-90"
  }

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Ondas de energia visual */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full border-2 border-yellow-bright ${intensityClasses[intensity]}`}
          style={{
            width: `${100 + i * 50}px`,
            height: `${100 + i * 50}px`,
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)"
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Elementos táteis - texturas e profundidade
export function TactileSensory({ className }: SensoryElementProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Texturas visuais que sugerem tato */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-light/20 via-transparent to-yellow-bright/10" />
      
      {/* Padrões de textura */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 gap-2 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-yellow-bright/10 rounded-sm"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

// Elementos auditivos - ritmo e cadência
export function AuditorySensory({ className }: SensoryElementProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Ondas sonoras visuais */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 bg-yellow-bright rounded-full"
          style={{
            width: `${200 + i * 100}px`,
            left: "50%",
            top: `${20 + i * 20}%`,
            transform: "translateX(-50%)"
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Elementos gustativos/olfativos - aromas e sabores visuais
export function GustatoryOlfactorySensory({ className }: SensoryElementProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Partículas aromáticas */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 bg-yellow-bright/40 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

// Experiência sensorial completa
export function SensoryExperience({ className, children }: { className?: string, children?: React.ReactNode }) {
  const [activeSenses, setActiveSenses] = useState<string[]>([])

  useEffect(() => {
    // Simula ativação gradual dos sentidos
    const timer = setTimeout(() => {
      setActiveSenses(["visual"])
    }, 500)
    
    const timer2 = setTimeout(() => {
      setActiveSenses(["visual", "tactile"])
    }, 1000)
    
    const timer3 = setTimeout(() => {
      setActiveSenses(["visual", "tactile", "auditory"])
    }, 1500)
    
    const timer4 = setTimeout(() => {
      setActiveSenses(["visual", "tactile", "auditory", "gustatory"])
    }, 2000)

    return () => {
      clearTimeout(timer)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fundo base */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-light/30 via-white to-yellow-bright/20" />
      
      {/* Elementos sensoriais ativos */}
      {activeSenses.includes("visual") && <VisualSensory intensity="medium" />}
      {activeSenses.includes("tactile") && <TactileSensory />}
      {activeSenses.includes("auditory") && <AuditorySensory />}
      {activeSenses.includes("gustatory") && <GustatoryOlfactorySensory />}
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Indicador sensorial - mostra qual sentido está ativo
export function SensoryIndicator({ activeSense }: { activeSense: string }) {
  const senseLabels = {
    visual: "VISUAL",
    tactile: "TÁTIL", 
    auditory: "AUDITIVO",
    gustatory: "GUSTATIVO",
    olfactory: "OLFATIVO"
  }

  return (
    <motion.div
      className="absolute top-4 right-4 bg-yellow-bright text-gray-black px-3 py-1 rounded-full text-xs font-semibold"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {senseLabels[activeSense as keyof typeof senseLabels]}
    </motion.div>
  )
}

// Elemento de estimulação mental - como o gengibre estimula a mente
export function MentalStimulation({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* Ondas cerebrais visuais */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-0.5 bg-yellow-bright rounded-full"
          style={{
            width: `${150 + i * 30}px`,
            left: "50%",
            top: `${15 + i * 10}%`,
            transform: "translateX(-50%)"
          }}
          animate={{
            scaleX: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}
