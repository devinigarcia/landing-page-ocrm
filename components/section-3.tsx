"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Section3() {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null)
  const [selectedColumn, setSelectedColumn] = useState<string | null>(null)

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999' // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o OCRM.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openPricing = () => {
    // Abrir página de preços - pode ser um modal ou seção
    document.getElementById("precos")?.scrollIntoView({ behavior: "smooth" })
  }

  // Adicionar CSS para animações da tabela
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        @keyframes row-highlight {
          0% { 
            background-color: rgb(71, 71, 71);
            transform: scale(1);
          }
          100% { 
            background-color: rgb(90, 90, 90);
            transform: scale(1.02);
          }
        }
        
        @keyframes checkmark-pulse {
          0% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 234, 0, 0);
          }
          50% { 
            transform: scale(1.1);
            box-shadow: 0 0 10px rgba(255, 234, 0, 0.3);
          }
          100% { 
            transform: scale(1);
            box-shadow: 0 0 0 rgba(255, 234, 0, 0);
          }
        }
        
        @keyframes line-draw {
          0% { 
            width: 0;
            opacity: 0;
          }
          100% { 
            width: 100%;
            opacity: 1;
          }
        }
        
        .table-row {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          cursor: pointer;
        }
        
        .table-row:hover {
          animation: row-highlight 0.3s ease-out forwards;
        }
        
        .table-row::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255, 234, 0, 0.5), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .table-row:hover::after {
          opacity: 1;
        }
        
        .checkmark-ocrm {
          transition: all 0.3s ease;
        }
        
        .checkmark-ocrm:hover {
          animation: checkmark-pulse 0.6s ease-in-out;
        }
        
        .table-header {
          position: relative;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .table-header:hover {
          background-color: rgba(255, 234, 0, 0.1);
        }
        
        .table-header::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, rgb(255, 234, 0), rgb(229, 186, 0));
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .table-header:hover::after {
          opacity: 1;
        }
        
        .table-header.selected::after {
          opacity: 1;
          animation: line-draw 0.5s ease-out forwards;
        }
      `
      if (!document.head.querySelector('style[data-table-animations]')) {
        style.setAttribute('data-table-animations', 'true')
        document.head.appendChild(style)
      }
    }
  }, [])

  const features = [
    {
      name: "Funil de Vendas",
      otherCRMs: true,
      ocrm: true
    },
    {
      name: "Gestão de Comissões (Vendas)",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Ranking de Vendas",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Redação Contratos",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Assinatura Contratos",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Gestão da Carteira de Contratos",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Recorrências (Boletos)",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Régua de Cobrança",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Financeiro Gerencial",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "ROI de Campanhas",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "Gestão de Entregáveis",
      otherCRMs: false,
      ocrm: true
    },
    {
      name: "BI + Relatórios",
      otherCRMs: false,
      ocrm: true
    }
  ]

  return (
    <section className="spacing-responsive relative overflow-hidden" style={{ backgroundColor: '#161616' }}>
      {/* Fundo limpo */}
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-8 sm:mb-12">
                  <motion.h1 
                    className="text-responsive-2xl font-bold text-white mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Vá além do funil de vendas
                  </motion.h1>
                  
                  <motion.p
                    className="text-responsive-lg text-gray-300 max-w-4xl mx-auto mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    A empresa precisa de <span style={{ color: 'rgb(255, 234, 0)' }} className="font-semibold">clareza</span>. 
                    OCRM <span style={{ color: 'rgb(255, 234, 0)' }} className="font-semibold">organiza, automatiza e revela</span>. 
                    Isso permite decisões mais <span style={{ color: 'rgb(255, 234, 0)' }} className="font-semibold">inteligentes</span> e 
                    <span style={{ color: 'rgb(255, 234, 0)' }} className="font-semibold"> experiências melhores</span>.
                  </motion.p>
        </div>

        {/* Tabela Comparativa - Desktop */}
        <motion.div 
          className="hidden lg:block rounded-2xl shadow-2xl overflow-hidden mb-8 sm:mb-12 border border-yellow-bright/20"
          style={{ backgroundColor: 'rgb(71, 71, 71)' }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto px-2">
            <table className="w-full">
              <thead className="bg-gray-black">
                <tr>
                  <th 
                    className="px-1 py-2 text-left text-sm font-semibold table-header"
                    style={{ color: 'rgb(255, 234, 0)' }}
                    onClick={() => setSelectedColumn(selectedColumn === 'funcionalidade' ? null : 'funcionalidade')}
                  >
                    Funcionalidade
                  </th>
                  <th 
                    className="px-1 py-2 text-center text-sm font-semibold table-header"
                    style={{ color: 'rgb(255, 234, 0)' }}
                    onClick={() => setSelectedColumn(selectedColumn === 'outros' ? null : 'outros')}
                  >
                    Outros CRMs
                  </th>
                  <th 
                    className="px-1 py-2 text-center text-sm font-semibold table-header"
                    style={{ color: 'rgb(255, 234, 0)' }}
                    onClick={() => setSelectedColumn(selectedColumn === 'ocrm' ? null : 'ocrm')}
                  >
                    OCRM
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-yellow-bright/20">
                {features.map((feature, index) => (
                  <motion.tr
                    key={index}
                    className={`table-row ${hoveredRow === index ? 'hovered' : ''}`}
                    style={{ 
                      backgroundColor: hoveredRow === index ? 'rgb(90, 90, 90)' : 'rgb(71, 71, 71)',
                      transform: hoveredRow === index ? 'scale(1.02)' : 'scale(1)'
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                    whileHover={{ 
                      scale: 1.02,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <td 
                      className="px-1 py-2 text-base font-medium text-white transition-colors duration-300"
                      style={{ 
                        color: selectedColumn === 'funcionalidade' ? 'rgb(255, 234, 0)' : 'white'
                      }}
                    >
                      {feature.name}
                    </td>
                    <td className="px-1 py-2 text-center">
                      {feature.otherCRMs ? (
                        <motion.div 
                          className="inline-flex items-center justify-center w-6 h-6 bg-green-500 rounded-full border border-green-500"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className="text-white text-sm font-bold">✓</span>
                        </motion.div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full border border-gray-500">
                          <span className="text-white text-sm font-bold">–</span>
                        </div>
                      )}
                    </td>
                    <td className="px-3 py-4 text-center">
                      {feature.ocrm ? (
                        <motion.div 
                          className="checkmark-ocrm inline-flex items-center justify-center w-6 h-6 rounded-full border" 
                          style={{ 
                            backgroundColor: 'rgb(34, 197, 94)', 
                            borderColor: 'rgb(34, 197, 94)',
                            boxShadow: selectedColumn === 'ocrm' ? '0 0 15px rgba(34, 197, 94, 0.5)' : '0 0 5px rgba(34, 197, 94, 0.3)'
                          }}
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span 
                            className="text-sm font-bold" 
                            style={{ 
                              color: 'white',
                              textShadow: '0 0 2px rgba(0, 0, 0, 0.5)'
                            }}
                          >
                            ✓
                          </span>
                        </motion.div>
                      ) : (
                        <div className="inline-flex items-center justify-center w-6 h-6 bg-gray-500 rounded-full border border-gray-500">
                          <span className="text-white text-sm font-bold">–</span>
                        </div>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Cards Mobile - Versão Mobile */}
        <motion.div 
          className="lg:hidden space-y-3 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header Mobile */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-bold text-white mb-2">Comparação de Funcionalidades</h3>
            <p className="text-sm text-gray-300">Veja a diferença entre OCRM e outros sistemas</p>
          </div>

          {/* Cards de Funcionalidades */}
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-dark rounded-xl p-4 border border-yellow-bright/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h4 className="text-sm font-medium text-white mb-2">{feature.name}</h4>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Outros CRMs */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-gray-400">Outros</span>
                    {feature.otherCRMs ? (
                      <div className="w-6 h-6 bg-green-500/20 rounded-full border border-green-500/30 flex items-center justify-center">
                        <span className="text-green-400 text-xs">✓</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-gray-500/20 rounded-full border border-gray-500/30 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">–</span>
                      </div>
                    )}
                  </div>

                  {/* OCRM */}
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs text-yellow-bright font-semibold">OCRM</span>
                    {feature.ocrm ? (
                      <div className="w-6 h-6 bg-green-500/30 rounded-full border border-green-500 flex items-center justify-center shadow-lg">
                        <span className="text-green-400 text-xs font-bold">✓</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-gray-500/20 rounded-full border border-gray-500/30 flex items-center justify-center">
                        <span className="text-gray-400 text-xs">–</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Destaque Mobile */}
          <motion.div
            className="bg-gradient-to-r from-yellow-bright/10 to-yellow-dark/10 rounded-xl p-4 border border-yellow-bright/30 mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-sm font-bold text-yellow-bright mb-2">Vantagem OCRM</h4>
              <p className="text-xs text-gray-300">
                {features.filter(f => f.ocrm && !f.otherCRMs).length} funcionalidades exclusivas que outros CRMs não oferecem
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-responsive-xl font-bold text-white mb-6 sm:mb-8">
            É hora de transformar seus dados em vantagem competitiva!
          </h2>
          
                  <motion.button 
                    onClick={openWhatsApp}
                    className="text-gray-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] shadow-lg hover:shadow-xl touch-target w-full sm:w-auto"
                    style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="hidden sm:inline">Migre agora para o OCRM</span>
                    <span className="sm:hidden">Migre agora</span>
                  </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
