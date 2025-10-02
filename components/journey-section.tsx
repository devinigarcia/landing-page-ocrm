"use client"

import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/animations"
import { motion } from "framer-motion"

export function JourneySection() {
  const scrollToForm = () => {
    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/50 border-y border-border/50">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Vá além do funil de vendas
            </h2>
          </Reveal>

          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto rounded-xl shadow-2xl">
              <table className="w-full border-collapse bg-card">
                <thead>
                  <tr className="border-b-2 border-primary/30">
                    <th className="p-4 text-left font-bold text-card-foreground border-r border-border">
                      Funcionalidade
                    </th>
                    <th className="p-4 text-center font-bold text-card-foreground border-r border-border">
                      Outros CRMs
                    </th>
                    <th className="p-4 text-center font-bold text-primary-foreground bg-gradient-to-r from-primary to-primary/80">
                      OCRM
                    </th>
                  </tr>
                </thead>
                <motion.tbody
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.08 } },
                  }}
                >
                  {[
                    { feature: "Funil de Vendas", others: true, ocrm: true },
                    { feature: "Gestão de Comissões (Vendas)", others: false, ocrm: true },
                    { feature: "Ranking de Vendas", others: false, ocrm: true },
                    { feature: "Redação Contratos", others: false, ocrm: true },
                    { feature: "Assinatura Contratos", others: false, ocrm: true },
                    { feature: "Gestão da Carteira de Contratos", others: false, ocrm: true },
                    { feature: "Recorrências (Boletos)", others: false, ocrm: true },
                    { feature: "Régua de cobrança", others: false, ocrm: true },
                    { feature: "Financeiro Gerencial", others: false, ocrm: true },
                    { feature: "ROI de Campanhas", others: false, ocrm: true },
                    { feature: "Gestão de Entregáveis", others: false, ocrm: true },
                    { feature: "BI + Relatórios", others: false, ocrm: true },
                  ].map((row, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                      variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }}
                    >
                      <td className="p-4 text-left text-card-foreground border-r border-border/30">{row.feature}</td>
                      <td className="p-4 text-center border-r border-border/30">
                        {row.others ? (
                          <span className="text-primary text-xl">✓</span>
                        ) : (
                          <span className="text-muted-foreground">−</span>
                        )}
                      </td>
                      <td className="p-4 text-center bg-primary/5">
                        <span className="text-primary text-xl font-bold">✓</span>
                      </td>
                    </motion.tr>
                  ))}
                </motion.tbody>
              </table>
            </div>
          </div>

          <Reveal>
            <div className="space-y-4 pt-4">
              <p className="text-xl font-semibold text-balance">
                É hora de transformar seus dados em vantagem competitiva!
              </p>
              <Button
                size="lg"
                className="btn-shine text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold px-8"
                onClick={scrollToForm}
              >
                Migre agora para o OCRM
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
