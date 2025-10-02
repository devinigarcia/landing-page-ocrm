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

  useEffect(() => {
    if (!inView) return
    // troca por pares: [1,0,3,2,...]
    const swapped = features.map((_, i) => (i % 2 === 0 ? i + 1 : i - 1)).map((i) => (i < features.length ? i : i - 1))
    setOrder(swapped)
  }, [inView])

  return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">

      <div className="container max-w-7xl mx-auto relative z-10 px-4">
        <Reveal>
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <p className="text-sm font-medium text-primary uppercase tracking-wider">O que nós oferecemos</p>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Dê adeus a era da gestão descentralizada
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
              return (
                <StaggerItem key={featureIndex} i={index}>
                  <MotionDiv
                    layout
                    transition={{ layout: { type: "spring", stiffness: 420, damping: 34 } }}
                    whileHover={{ y: -6, rotateX: 1.5, rotateY: -1.5 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    onMouseMove={(e) => {
                      const target = e.currentTarget as HTMLElement
                      const rect = target.getBoundingClientRect()
                      target.style.setProperty("--mx", `${e.clientX - rect.left}px`)
                      target.style.setProperty("--my", `${e.clientY - rect.top}px`)
                    }}
                    className="h-full"
                  >
                    <Card className="sr card-hover-glow h-full min-h-[220px] md:min-h-[240px] bg-card border-border/50 transition-all hover:shadow-xl">
                      <CardContent className="h-full pt-6 space-y-4 flex flex-col">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                          <Icon className="h-7 w-7 text-primary" />
                        </div>
                        <div className="space-y-2 mt-2">
                          <h3 className="font-semibold text-lg text-card-foreground">{feature.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
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
