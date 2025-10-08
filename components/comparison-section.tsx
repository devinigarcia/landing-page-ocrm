"use client"

import { Button } from "@/components/ui/button"

const features = [
  "Funil de Vendas",
  "Gestão de Comissões (Vendas)",
  "Ranking de Vendas",
  "Redação Contratos",
  "Assinatura Contratos",
  "Gestão da Carteira de Contratos",
  "Recorrências (Boletos)",
  "Régua de cobrança",
  "Financeiro Gerencial",
  "ROI de Campanhas",
  "Gestão de Entregáveis",
  "BI + Relatórios",
]

const problemsList = [
  "Lead data",
  "Lead routing",
  "Intent signals",
  "Data enrichment",
  "CRM",
  "Meeting notetaker",
  "Multi-channel outreach",
  "Meeting scheduling",
]

export function ComparisonSection() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-background overflow-hidden">
      <div className="gradient-blob gradient-blob-purple w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] -bottom-32 -left-32 sm:-bottom-48 sm:-left-48 absolute" />

      <div className="container-responsive relative z-10">
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
              Vá além do funil de vendas
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
              Você precisa gerenciar suas máquinas, seus caixas, seus times, sua logística, suas propagandas e o seu
              principal ativo, o cliente, vai ficando em segundo plano.
            </p>
            <p className="text-lg sm:text-xl font-semibold pt-2 sm:pt-4 px-4 sm:px-0">Nós temos a solução para fazer tudo isso funcionar!</p>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-secondary rounded-xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 border border-border/50">
              <div className="space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-[#fb923c] font-semibold text-xs sm:text-sm uppercase tracking-wider">Problema</p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">The modern GTM stack has exploded.</h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Customer data is siloed and manual data entry is still a headache, even in the age of AI.
                  </p>
                </div>

                <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2">
                  {problemsList.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 sm:gap-3">
                      <div className="flex h-2 w-2 rounded-full bg-[#fb923c]/60 flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-card rounded-xl shadow-xl overflow-hidden border border-border/50">
              {/* Desktop: Tabela tradicional */}
              <div className="hidden lg:block overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-secondary">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-card-foreground">Funcionalidade</th>
                      <th className="px-6 py-4 text-center font-semibold text-card-foreground">Outros CRMs</th>
                      <th className="px-6 py-4 text-center font-semibold text-card-foreground bg-primary/10">OCRM</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    {[
                      "Funil de Vendas",
                      "Gestão de Comissões (Vendas)",
                      "Ranking de Vendas",
                      "Redação Contratos",
                      "Assinatura Contratos",
                      "Gestão da Carteira de Contratos",
                      "Recorrências (Boletos)",
                      "Régua de cobrança",
                      "Financeiro Gerencial",
                      "ROI de Campanhas",
                      "Gestão de Entregáveis",
                      "BI + Relatórios",
                    ].map((feature, index) => (
                      <tr key={index} className="hover:bg-secondary/30">
                        <td className="px-6 py-4 text-card-foreground font-medium">{feature}</td>
                        <td className="px-6 py-4 text-center text-2xl text-muted-foreground">
                          {index === 0 ? "✓" : "–"}
                        </td>
                        <td className="px-6 py-4 text-center text-2xl text-primary bg-primary/5">✓</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile: Cards de comparação */}
              <div className="lg:hidden p-4 sm:p-6">
                <div className="space-y-4">
                  {[
                    "Funil de Vendas",
                    "Gestão de Comissões (Vendas)",
                    "Ranking de Vendas",
                    "Redação Contratos",
                    "Assinatura Contratos",
                    "Gestão da Carteira de Contratos",
                    "Recorrências (Boletos)",
                    "Régua de cobrança",
                    "Financeiro Gerencial",
                    "ROI de Campanhas",
                    "Gestão de Entregáveis",
                    "BI + Relatórios",
                  ].map((feature, index) => (
                    <div key={index} className="bg-secondary/50 rounded-lg p-4 border border-border/30">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-card-foreground text-sm sm:text-base">{feature}</h4>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-center">
                            <div className="text-lg sm:text-xl text-muted-foreground">
                              {index === 0 ? "✓" : "–"}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">Outros</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg sm:text-xl text-primary">✓</div>
                            <div className="text-xs text-primary mt-1">OCRM</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 sm:p-6 bg-secondary/50 text-center">
                <p className="text-base sm:text-lg font-semibold text-card-foreground">
                  É hora de transformar seus dados em vantagem competitiva!
                </p>
                <Button
                  size="lg"
                  className="mt-4 text-sm sm:text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold px-6 sm:px-8 w-full sm:w-auto touch-target"
                  onClick={scrollToForm}
                >
                  Migre agora para o OCRM
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-0">
            <div className="bg-secondary rounded-xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl border border-border/50">
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center space-y-3 sm:space-y-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                    O funil nunca foi suficiente
                  </h1>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    Você precisa gerenciar suas máquinas, seus caixas, seus times, sua logística, suas
                    propagandas e o seu principal ativo, o cliente, vai ficando em segundo plano.
                  </p>
                  <p className="text-lg sm:text-xl font-semibold text-primary">
                    Nós temos a solução para fazer tudo isso funcionar!
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg leading-relaxed">
                    O OCRM é um hub completo de soluções corporativas que reúne tudo em um só
                    lugar. A sua gestão fragmentada que te obrigava a ter um aplicativo para:
                  </p>

                  <div className="grid gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="text-primary text-base sm:text-lg flex-shrink-0">•</span>
                        <span className="text-xs sm:text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-border/30 text-center">
                    <p className="text-lg sm:text-xl font-semibold">
                      É passado! Aqui, você encontra tudo em um único sistema.
                    </p>
                    <p className="text-base sm:text-lg mt-3 sm:mt-4 font-medium">
                      Decisões inteligentes nascem de dados bem interpretados
                    </p>
                  </div>
                </div>

                {/* Dashboard Visual Reference */}
                <div className="bg-card rounded-lg p-4 sm:p-6 border border-border/30">
                  <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center space-y-3 sm:space-y-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg mx-auto flex items-center justify-center">
                        <span className="text-lg sm:text-2xl text-primary-foreground font-bold">📊</span>
                      </div>
                      <div className="space-y-1 sm:space-y-2">
                        <p className="text-white font-semibold text-base sm:text-lg">Dashboard OCRM</p>
                        <p className="text-slate-300 text-xs sm:text-sm">Visão completa e integrada do seu negócio</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 mt-4 sm:mt-8 text-xs text-slate-400">
                        <div>Customer data is siloed</div>
                        <div>Manual data entry</div>
                        <div>Multiple systems</div>
                        <div>Fragmented workflow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-3 sm:space-y-4 pt-6 sm:pt-8 px-4 sm:px-0">
            <Button
              size="lg"
              className="text-sm sm:text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold px-6 sm:px-8 w-full sm:w-auto touch-target"
              onClick={scrollToForm}
            >
              Dê início à sua migração
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
