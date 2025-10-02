"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Database, Zap, Activity, TrendingUp } from "lucide-react"
import { Reveal, Stagger, StaggerItem, MotionDiv } from "@/components/animations"
import { useEffect, useMemo, useRef, useState } from "react"
import { useInView } from "framer-motion"

const features = [
  {
    icon: Database,
    title: "Unificação de Dados",
    description: "Visão integral em um só lugar",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    description: "Eficiência sem perder controle",
  },
  {
    icon: Activity,
    title: "Respostas em Tempo Real",
    description: "Indicadores e alertas instantâneos",
  },
  {
    icon: TrendingUp,
    title: "Insights Estratégicos",
    description: "Padrões e tendências que orientam o futuro",
  },
]

export function FeaturesSection() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  // Reordenação animada quando a seção entra em view
  const gridRef = useRef<HTMLDivElement | null>(null)
  const inView = useInView(gridRef, { amount: 0.3, once: true })
  const [order, setOrder] = useState<number[]>(() => features.map((_, i) => i))
  const [isReordering, setIsReordering] = useState(false)

  useEffect(() => {
    if (!inView || isReordering) return
    setIsReordering(true)
    // Pequeno delay para evitar conflitos com animações iniciais
    setTimeout(() => {
      const swapped = features.map((_, i) => (i % 2 === 0 ? i + 1 : i - 1)).map((i) => (i < features.length ? i : i - 1))
      setOrder(swapped)
    }, 600)
  }, [inView, isReordering])

  return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="container max-w-7xl mx-auto relative z-10 px-4">
        <Reveal>
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">O que nós oferecemos</p>
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Dê adeus a era da gestão descentralizada
            </h1>
            <h2 className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              O OCRM tem tudo o que a sua gestão de relacionamento com o cliente precisa em um só lugar: gestão comercial, contratos, assinaturas, recorrências, projetos e muito mais
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Centralize sua Gestão de Comercial, Contratos, Assinaturas, Recorrências, Projetos em um só lugar.
            </p>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              É uma solução que organiza, automatiza e revela dados em tempo real.
            </p>
          </div>
        </Reveal>

        <Stagger>
          <div ref={gridRef} className="[perspective:1200px] grid gap-6 sm:grid-cols-2 lg:grid-cols-4 items-stretch mb-12">
            {order.map((featureIndex, index) => {
              const feature = features[featureIndex]
              const Icon = feature.icon
              
              // Diferentes animações de entrada para cada card
              const getEntryAnimation = (index: number) => {
                const animations = [
                  // Card 1: Bounce in from top
                  {
                    initial: { y: -100, opacity: 0, rotateX: -90, scale: 0.8 },
                    animate: { y: 0, opacity: 1, rotateX: 0, scale: 1 },
                    transition: { 
                      type: "spring" as const, 
                      stiffness: 300, 
                      damping: 20,
                      delay: index * 0.15
                    }
                  },
                  // Card 2: Slide in from right with rotation
                  {
                    initial: { x: 100, opacity: 0, rotateY: 45, scale: 0.9 },
                    animate: { x: 0, opacity: 1, rotateY: 0, scale: 1 },
                    transition: { 
                      type: "spring" as const, 
                      stiffness: 260, 
                      damping: 20,
                      delay: index * 0.15
                    }
                  },
                  // Card 3: Pop in with elastic scale
                  {
                    initial: { scale: 0, opacity: 0, rotateZ: -180 },
                    animate: { scale: 1, opacity: 1, rotateZ: 0 },
                    transition: { 
                      type: "spring" as const, 
                      stiffness: 400, 
                      damping: 15,
                      delay: index * 0.15
                    }
                  },
                  // Card 4: Slide in from left with flip
                  {
                    initial: { x: -100, opacity: 0, rotateY: -45, scale: 0.9 },
                    animate: { x: 0, opacity: 1, rotateY: 0, scale: 1 },
                    transition: { 
                      type: "spring" as const, 
                      stiffness: 260, 
                      damping: 20,
                      delay: index * 0.15
                    }
                  }
                ]
                return animations[index % animations.length]
              }
              
              const entryAnimation = getEntryAnimation(index)
              
              return (
                <StaggerItem key={featureIndex} i={index}>
                  <MotionDiv
                    layout
                    initial={entryAnimation.initial}
                    animate={entryAnimation.animate}
                    transition={entryAnimation.transition}
                    whileHover={{ 
                      y: -8, 
                      rotateX: 2, 
                      rotateY: -2,
                      scale: 1.02,
                      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseMove={(e) => {
                      const target = e.currentTarget as HTMLElement
                      const rect = target.getBoundingClientRect()
                      const centerX = rect.left + rect.width / 2
                      const centerY = rect.top + rect.height / 2
                      const rotateX = (e.clientY - centerY) / 20
                      const rotateY = (centerX - e.clientX) / 20
                      
                      target.style.transform = `
                        perspective(1000px) 
                        rotateX(${Math.max(-15, Math.min(15, rotateX))}deg) 
                        rotateY(${Math.max(-15, Math.min(15, rotateY))}deg)
                        translateY(-8px)
                        scale(1.02)
                      `
                    }}
                    onMouseLeave={(e) => {
                      const target = e.currentTarget as HTMLElement
                      target.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)'
                    }}
                    className="h-full cursor-pointer"
                  >
                    <Card className="sr card-hover-glow h-full min-h-[220px] md:min-h-[240px] bg-card border-border/50 transition-all duration-300 hover:shadow-2xl overflow-hidden relative group">
                      {/* Efeito de brilho animado */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
                      
                      <CardContent className="h-full pt-6 space-y-4 flex flex-col relative z-10">
                        <MotionDiv
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ 
                            type: "spring" as const, 
                            stiffness: 300, 
                            damping: 20,
                            delay: entryAnimation.transition.delay + 0.2
                          }}
                          whileHover={{ 
                            scale: 1.1, 
                            rotate: 5,
                            boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                          }}
                          className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20 group-hover:border-primary/40 transition-colors"
                        >
                          <Icon className="h-7 w-7 text-primary group-hover:text-primary/90 transition-colors" />
                        </MotionDiv>
                        
                        <MotionDiv 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ 
                            delay: entryAnimation.transition.delay + 0.3,
                            duration: 0.6,
                            ease: "easeOut" as const
                          }}
                          className="space-y-2 mt-2"
                        >
                          <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/90 transition-colors">
                            {feature.description}
                          </p>
                        </MotionDiv>
                        <div className="grow" />
                      </CardContent>
                    </Card>
                  </MotionDiv>
                </StaggerItem>
              )
            })}
          </div>
        </Stagger>

        <Reveal>
          <div className="text-center">
            <Button
              size="lg"
              className="btn-shine text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold px-8"
              onClick={scrollToForm}
            >
              Fale conosco e garanta tudo isso
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
