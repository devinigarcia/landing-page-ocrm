"use client"

import { Button } from "@/components/ui/button"
import { Reveal, Stagger, StaggerItem, MotionDiv } from "@/components/animations"

const integrationAreas = [
  { name: "Gestão Comercial", color: "#fb923c" }, // Bright Orange - main brand color
  { name: "Gestão de Leads", color: "#a855f7" }, // Purple - main brand color
  { name: "Gestão de Relacionamento", color: "#6366f1" }, // Indigo - purple variation
  { name: "Gestão de Dados", color: "#fcd34d" }, // Light Yellow/Gold - warm accent
  { name: "Gestão de Processos", color: "#7c3aed" }, // Deep Purple/Violet - replacing dark orange
  { name: "Gestão de Indicadores", color: "#ec4899" }, // Pink/Magenta - replacing light peach
]

export function IntegrationSection() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/30 border-y border-border/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Integração total para acompanhar a jornada do cliente
              </h2>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto px-8">
            <Reveal>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 md:p-12 shadow-lg border border-primary/20">
                <div className="relative aspect-square max-w-2xl mx-auto">
                <svg viewBox="0 0 700 700" className="w-full h-full">
                  <defs>
                    <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#c026d3" />
                    </linearGradient>
                    <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>

                  {/* Animated orbital rings */}
                  <circle
                    cx="350"
                    cy="350"
                    r="150"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    opacity="0.4"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 350 350"
                      to="360 350 350"
                      dur="120s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="350"
                    cy="350"
                    r="210"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    opacity="0.3"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 350 350"
                      to="-360 350 350"
                      dur="180s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx="350"
                    cy="350"
                    r="270"
                    fill="none"
                    stroke="url(#purpleGradient)"
                    strokeWidth="2"
                    strokeDasharray="8,8"
                    opacity="0.2"
                  >
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 350 350"
                      to="360 350 350"
                      dur="240s"
                      repeatCount="indefinite"
                    />
                  </circle>

                  {/* Center circle - OCRM */}
                  <circle cx="350" cy="350" r="80" fill="white" stroke="url(#purpleGradient)" strokeWidth="4" />
                  <text
                    x="350"
                    y="350"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-2xl font-bold fill-primary"
                  >
                    OCRM
                  </text>
                  <text
                    x="350"
                    y="375"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-base fill-muted-foreground"
                  >
                    Centro
                  </text>

                  {/* Orbiting journey stages - all elements grouped with rotation animation */}
                  <g>
                    <animateTransform
                      attributeName="transform"
                      attributeType="XML"
                      type="rotate"
                      from="0 350 350"
                      to="360 350 350"
                      dur="60s"
                      repeatCount="indefinite"
                    />
                    
                    {/* Captação de Leads - Top (0 degrees) */}
                    <g>
                      <circle cx="350" cy="80" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="350"
                        y="78"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Captação
                      </text>
                      <text
                        x="350"
                        y="93"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-xs fill-muted-foreground"
                      >
                        de Leads
                      </text>
                    </g>

                    {/* Qualificação - Top Right (45 degrees) */}
                    <g>
                      <circle cx="541" cy="159" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="541"
                        y="159"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Qualificação
                      </text>
                    </g>

                    {/* Proposta - Right (90 degrees) */}
                    <g>
                      <circle cx="620" cy="350" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="620"
                        y="350"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Proposta
                      </text>
                    </g>

                    {/* Fechamento - Bottom Right (135 degrees) */}
                    <g>
                      <circle cx="541" cy="541" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="541"
                        y="541"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Fechamento
                      </text>
                    </g>

                    {/* Pós-venda - Bottom (180 degrees) */}
                    <g>
                      <circle cx="350" cy="620" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="350"
                        y="620"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Pós-venda
                      </text>
                    </g>

                    {/* Retenção - Bottom Left (225 degrees) */}
                    <g>
                      <circle cx="159" cy="541" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="159"
                        y="541"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Retenção
                      </text>
                    </g>

                    {/* Expansão - Left (270 degrees) */}
                    <g>
                      <circle cx="80" cy="350" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="80"
                        y="350"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Expansão
                      </text>
                    </g>

                    {/* Advocacy - Top Left (315 degrees) */}
                    <g>
                      <circle cx="159" cy="159" r="45" fill="white" stroke="url(#orangeGradient)" strokeWidth="3" />
                      <text
                        x="159"
                        y="159"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="text-sm font-semibold fill-card-foreground"
                      >
                        Advocacy
                      </text>
                    </g>
                  </g>
                </svg>
              </div>
            </div>
            </Reveal>
          </div>

          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="bg-secondary rounded-xl p-8 md:p-12 shadow-xl border border-border/50">
                <div className="flex flex-col items-center gap-8">
                  <div className="relative aspect-square max-w-lg w-full mx-auto">
                  <svg viewBox="0 0 400 400" className="w-full h-full">
                    {/* Gestão Comercial - Bright Orange (0-60 degrees) */}
                    <path
                      d="M 200 200 L 200 50 A 150 150 0 0 1 329.9 125 Z"
                      fill="#fb923c"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Gestão de Leads - Purple (60-120 degrees) */}
                    <path
                      d="M 200 200 L 329.9 125 A 150 150 0 0 1 329.9 275 Z"
                      fill="#a855f7"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Gestão de Relacionamento - Indigo (120-180 degrees) */}
                    <path
                      d="M 200 200 L 329.9 275 A 150 150 0 0 1 200 350 Z"
                      fill="#6366f1"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Gestão de Dados - Light Yellow/Gold (180-240 degrees) */}
                    <path
                      d="M 200 200 L 200 350 A 150 150 0 0 1 70.1 275 Z"
                      fill="#fcd34d"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Gestão de Processos - Deep Purple/Violet (240-300 degrees) */}
                    <path
                      d="M 200 200 L 70.1 275 A 150 150 0 0 1 70.1 125 Z"
                      fill="#7c3aed"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Gestão de Indicadores - Pink/Magenta (300-360 degrees) */}
                    <path
                      d="M 200 200 L 70.1 125 A 150 150 0 0 1 200 50 Z"
                      fill="#ec4899"
                      stroke="white"
                      strokeWidth="3"
                    />

                    {/* Center circle */}
                    <defs>
                      <linearGradient id="purpleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a855f7" />
                        <stop offset="100%" stopColor="#c026d3" />
                      </linearGradient>
                    </defs>
                    <circle cx="200" cy="200" r="65" fill="white" stroke="url(#purpleGradient2)" strokeWidth="4" />
                    <text
                      x="200"
                      y="205"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="text-2xl font-bold fill-primary"
                    >
                      OCRM
                    </text>
                  </svg>
                </div>

                <Stagger>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-2xl">
                    {integrationAreas.map((area, index) => (
                      <StaggerItem key={index}>
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-sm flex-shrink-0 border border-white/20"
                            style={{ backgroundColor: area.color }}
                          />
                          <p className="font-semibold text-sm text-white">{area.name}</p>
                        </div>
                      </StaggerItem>
                    ))}
                  </div>
                </Stagger>
              </div>
            </div>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-1 items-center max-w-4xl mx-auto">
            <div className="space-y-6">
              <Reveal>
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 shadow-lg border border-primary/20">
                  <div className="relative aspect-square max-w-lg mx-auto">
                    <div className="absolute inset-0 flex items-center justify-center">
                    {/* Center logo - properly centered */}
                    <div className="relative z-20 w-28 h-28 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-xl border-4 border-primary/30">
                      <div className="text-3xl font-bold text-primary-foreground">O</div>
                    </div>

                    {/* Connecting dots */}
                    {Array.from({ length: 40 }).map((_, i) => (
                      <MotionDiv
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-primary/30 z-0"
                        style={{
                          left: `${50 + Math.cos((i / 40) * Math.PI * 2) * (20 + Math.random() * 15)}%`,
                          top: `${50 + Math.sin((i / 40) * Math.PI * 2) * (20 + Math.random() * 15)}%`,
                        }}
                        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.8, 1] }}
                        transition={{ duration: 2 + (i % 5) * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.02 }}
                      />
                    ))}
                  </div>

                  {/* Hub features positioned around center - z-index ensures they're above dots but below center */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      📊 Lead data
                    </div>
                  </div>

                  <div className="absolute top-1/4 left-2 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      🔀 Lead routing
                    </div>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      📡 Intent signals
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-4 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      ✨ Data enrichment
                    </div>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      💼 CRM
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 left-4 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      📧 Multi-channel
                    </div>
                  </div>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-card border-2 border-primary/30 rounded-lg px-4 py-2 text-primary text-sm font-medium whitespace-nowrap shadow-lg">
                      📅 Meeting scheduling
                    </div>
                  </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>

          <Reveal>
            <div className="text-center pt-8">
              <Button
                size="lg"
                className="btn-shine text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold px-8"
                onClick={scrollToForm}
              >
                Garanta já uma solução completa e integrada
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
