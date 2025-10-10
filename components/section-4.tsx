"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function Section4() {
  const [hoveredBlock, setHoveredBlock] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999' // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o OCRM.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openMigrationGuide = () => {
    // Abrir guia de migração - pode ser um modal ou página
    window.open('https://ocrm.com.br/migracao', '_blank')
  }

  // Adicionar CSS para animações elegantes dos blocos
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        @keyframes elegant-float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg);
          }
          50% { 
            transform: translateY(-8px) rotate(1deg);
          }
        }
        
        @keyframes ripple-effect {
          0% { 
            transform: scale(0);
            opacity: 1;
          }
          100% { 
            transform: scale(4);
            opacity: 0;
          }
        }
        
        @keyframes morphing-border {
          0% { 
            border-radius: 8px;
            border-color: rgba(255, 234, 0, 0.2);
          }
          25% { 
            border-radius: 20px;
            border-color: rgba(255, 234, 0, 0.4);
          }
          50% { 
            border-radius: 12px;
            border-color: rgba(255, 234, 0, 0.6);
          }
          75% { 
            border-radius: 16px;
            border-color: rgba(255, 234, 0, 0.4);
          }
          100% { 
            border-radius: 8px;
            border-color: rgba(255, 234, 0, 0.2);
          }
        }
        
        @keyframes dot-orbit {
          0% { 
            transform: rotate(0deg) translateX(15px) rotate(0deg);
          }
          100% { 
            transform: rotate(360deg) translateX(15px) rotate(-360deg);
          }
        }
        
        @keyframes text-wave {
          0%, 100% { 
            transform: translateY(0px);
          }
          50% { 
            transform: translateY(-2px);
          }
        }
        
        .functionality-block {
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .functionality-block::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          background: radial-gradient(circle, rgba(255, 234, 0, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.6s ease;
        }
        
        .functionality-block:hover::before {
          width: 200px;
          height: 200px;
        }
        
        .functionality-block:hover {
          animation: elegant-float 2s ease-in-out infinite;
        }
        
        .functionality-block:active::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          background: rgba(255, 234, 0, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: ripple-effect 0.6s ease-out;
        }
        
        .functionality-dot {
          transition: all 0.4s ease;
          position: relative;
        }
        
        .functionality-dot::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 8px;
          height: 8px;
          background: rgba(255, 234, 0, 0.3);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .functionality-block:hover .functionality-dot::before {
          opacity: 1;
          animation: dot-orbit 3s linear infinite;
        }
        
        .functionality-text {
          transition: all 0.4s ease;
          position: relative;
        }
        
        .functionality-block:hover .functionality-text {
          animation: text-wave 1.5s ease-in-out infinite;
        }
        
        .functionality-block:hover {
          border-radius: 16px;
          animation: morphing-border 3s ease-in-out infinite;
        }
      `
      if (!document.head.querySelector('style[data-functionality-animations]')) {
        style.setAttribute('data-functionality-animations', 'true')
        document.head.appendChild(style)
      }
    }
  }, [])

  const functionalities = [
    "Funil de Vendas",
    "Gestão de Comissões (Vendas)",
    "Ranking de Vendas", 
    "Redação Contratos",
    "Assinatura Contratos",
    "Gestão da Carteira de Contratos",
    "Recorrências (Boletos)",
    "Régua de Cobrança",
    "Financeiro Gerencial",
    "ROI de Campanhas",
    "Gestão de Entregáveis",
    "BI + Relatórios"
  ]

  return (
    <section className="spacing-responsive relative overflow-hidden" style={{ backgroundColor: '#161616' }}>
      <div className="container-responsive relative z-10">
        <div className="text-center mb-8 sm:mb-12">
                  <motion.h1 
                    className="text-responsive-2xl font-bold text-white mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    O funil nunca foi suficiente
                  </motion.h1>
                  
                  <motion.div 
                    className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-responsive-base text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <p>
                      Gerenciar máquinas, fluxo de caixa, equipes, logística, publicidade... 
                      A gestão de uma empresa é um <span style={{ color: 'rgb(255, 234, 0)' }}>desafio</span> complexo que vai <span style={{ color: 'rgb(255, 234, 0)' }}>muito além</span> de um simples funil de vendas.
                    </p>
                    
                    <p className="font-semibold text-responsive-lg" style={{ color: 'rgb(255, 234, 0)' }}>
                      Nós temos a solução para fazer tudo isso funcionar!
                    </p>
                    
                    <p>
                      O OCRM é um <span style={{ color: 'rgb(255, 234, 0)' }}>hub completo</span> de soluções corporativas que reúne tudo em um só lugar. 
                      A sua gestão <span style={{ color: 'rgb(255, 234, 0)' }}>fragmentada</span> que te obrigava a ter um aplicativo para:
                    </p>
                  </motion.div>
        </div>

        {/* Lista de Funcionalidades */}
        <motion.div 
          className="grid-responsive-3 mb-6 sm:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {functionalities.map((func, index) => (
            <motion.div
              key={index}
              className="functionality-block flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg border border-yellow-bright/20 relative"
              style={{ backgroundColor: 'rgb(255, 234, 0)' }}
              initial={{ opacity: 0, y: 30, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredBlock(index)}
              onMouseLeave={() => setHoveredBlock(null)}
            >
              <div 
                className="functionality-dot w-2 h-2 rounded-full flex-shrink-0 absolute left-3 sm:left-4" 
                style={{ backgroundColor: 'rgb(0, 0, 0)' }}
              />
              <span 
                className="functionality-text font-medium text-xs sm:text-sm text-center w-full" 
                style={{ color: 'rgb(0, 0, 0)' }}
              >
                {func}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mensagem de Solução */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-responsive-lg text-gray-300 mb-4 sm:mb-6">
            É passado! Aqui, você encontra tudo em um único sistema.
          </p>
          
                  <p className="text-responsive-xl font-bold italic mb-6 sm:mb-8" style={{ color: 'rgb(255, 234, 0)' }}>
                    Decisões inteligentes nascem de dados bem interpretados
                  </p>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
                  <motion.button 
                    onClick={openWhatsApp}
                    className="text-gray-black font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] shadow-lg hover:shadow-xl touch-target w-full sm:w-auto"
                    style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="hidden sm:inline">Dê início à sua migração</span>
                    <span className="sm:hidden">Iniciar migração</span>
                  </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
