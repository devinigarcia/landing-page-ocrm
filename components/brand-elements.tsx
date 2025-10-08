"use client"

import { motion } from "framer-motion"

interface BrandElementProps {
  className?: string
  variant?: "curved" | "flowing" | "geometric" | "organic"
  size?: "sm" | "md" | "lg" | "xl"
  color?: "primary" | "secondary" | "accent"
  animated?: boolean
}

// Formas abstratas curvas - elemento principal da marca
export function CurvedShape({ className, variant = "curved", size = "md", color = "primary", animated = true }: BrandElementProps) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-24 h-24", 
    lg: "w-32 h-32",
    xl: "w-48 h-48"
  }

  const colorClasses = {
    primary: "fill-yellow-bright",
    secondary: "fill-gray-dark",
    accent: "fill-yellow-dark"
  }

  const variants = {
    curved: "M0,20 Q20,0 40,20 T80,20 Q100,40 80,60 T40,60 Q20,80 0,60 Z",
    flowing: "M0,30 Q30,0 60,30 Q90,60 60,90 Q30,120 0,90 Q-30,60 0,30 Z",
    geometric: "M0,0 L40,0 L60,20 L40,40 L0,40 L-20,20 Z",
    organic: "M0,20 C20,0 40,0 60,20 C80,40 60,60 40,60 C20,60 0,40 0,20 Z"
  }

  return (
    <motion.svg
      className={`${sizeClasses[size]} ${colorClasses[color]} ${className}`}
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      initial={animated ? { opacity: 0, scale: 0.8 } : {}}
      animate={animated ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <path
        d={variants[variant]}
        className="opacity-80"
      />
    </motion.svg>
  )
}

// Elementos gráficos dinâmicos
export function FlowingElements({ className }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          <CurvedShape 
            variant={["curved", "flowing", "geometric", "organic"][i % 4] as any}
            size={["sm", "md", "lg"][i % 3] as any}
            color={["primary", "secondary", "accent"][i % 3] as any}
            animated={false}
          />
        </motion.div>
      ))}
    </div>
  )
}

// Padrão de marca com repetição do logo
export function BrandPattern({ className, density = "medium" }: { className?: string, density?: "low" | "medium" | "high" }) {
  const densityClasses = {
    low: "opacity-20",
    medium: "opacity-30", 
    high: "opacity-40"
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className={`grid grid-cols-8 gap-4 ${densityClasses[density]}`}>
        {Array.from({ length: 64 }).map((_, i) => (
          <motion.div
            key={i}
            className="flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.02, duration: 0.5 }}
          >
            <div className="text-yellow-bright text-xs font-bold">
              o.crm
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Elemento de fundo com gradiente e formas
export function BrandBackground({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradiente de fundo */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-light via-white to-yellow-bright/20" />
      
      {/* Formas abstratas */}
      <FlowingElements />
      
      {/* Padrão de marca sutil */}
      <BrandPattern density="low" />
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Elemento de destaque com formas curvas
export function BrandAccent({ className, children }: { className?: string, children?: React.ReactNode }) {
  return (
    <div className={`relative ${className}`}>
      {/* Formas de destaque */}
      <div className="absolute -top-4 -right-4">
        <CurvedShape variant="curved" size="lg" color="primary" />
      </div>
      <div className="absolute -bottom-4 -left-4">
        <CurvedShape variant="flowing" size="md" color="accent" />
      </div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

// Mockup de dispositivo com elementos da marca
export function BrandMockup({ 
  className, 
  device = "laptop",
  children 
}: { 
  className?: string, 
  device?: "laptop" | "phone" | "tablet",
  children?: React.ReactNode 
}) {
  const deviceClasses = {
    laptop: "w-80 h-48 bg-gray-800 rounded-lg shadow-2xl",
    phone: "w-32 h-64 bg-gray-900 rounded-3xl shadow-2xl",
    tablet: "w-64 h-80 bg-gray-800 rounded-2xl shadow-2xl"
  }

  return (
    <div className={`relative ${className}`}>
      <div className={deviceClasses[device]}>
        {/* Tela do dispositivo */}
        <div className="absolute inset-2 bg-gray-black rounded-lg overflow-hidden">
          {/* Elementos gráficos de fundo */}
          <FlowingElements />
          
          {/* Conteúdo */}
          <div className="relative z-10 h-full flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
