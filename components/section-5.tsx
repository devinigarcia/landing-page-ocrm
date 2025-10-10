"use client"

import { motion } from "framer-motion"
import { CentralDiagram } from "@/components/central-diagram"

export function Section5() {
  const openWhatsApp = () => {
    const phoneNumber = '5511999999999' // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o OCRM.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openTrial = () => {
    // Abrir trial gratuito - pode ser um modal ou página
    window.open('https://trial.ocrm.com.br', '_blank')
  }
  const managementAreas = [
    {
      name: "Gestão Comercial",
      position: "top-left",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Gestão de Leads", 
      position: "left-middle",
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Gestão de Relacionamento",
      position: "bottom-left", 
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Gestão de Dados",
      position: "bottom-right",
      color: "from-gray-800 to-gray-900"
    },
    {
      name: "Gestão de Processos",
      position: "right-middle",
      color: "from-yellow-400 to-orange-500"
    },
    {
      name: "Gestão de Indicadores",
      position: "top-right",
      color: "from-gray-800 to-gray-900"
    }
  ]

  return (
    <section className="spacing-responsive relative overflow-hidden" style={{ backgroundColor: '#161616' }}>
              {/* Fundo limpo */}
      
      <div className="container-responsive relative z-10">
        <div className="text-center mb-16">
                  <motion.h1 
                    className="text-responsive-2xl font-bold text-white mb-6 sm:mb-8"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    Integração total para acompanhar a jornada do cliente
                  </motion.h1>
        </div>

        {/* Diagrama Central */}
        <motion.div 
          className="relative flex justify-center items-center mb-16"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CentralDiagram />
        </motion.div>

        {/* Lista de Gestões */}
        <motion.div 
          className="flex justify-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl">
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão Comercial</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão de Leads</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão de Relacionamento</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão de Dados</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão de Processos</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Gestão de Indicadores</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Lead Data</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 group">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300" style={{ background: 'linear-gradient(to bottom right, rgb(255, 234, 0), rgb(229, 186, 0))' }}></div>
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 text-xs sm:text-sm">Intent Signals</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-gray-dark/50 via-gray-medium/30 to-gray-dark/50 rounded-3xl p-6 sm:p-8 md:p-12 border border-yellow-bright/20 shadow-xl backdrop-blur-sm">
            <h3 className="text-responsive-xl font-bold text-white mb-3 sm:mb-4">
              Pronto para transformar sua gestão?
            </h3>
            <p className="text-responsive-base text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Descubra como o OCRM pode revolucionar a forma como você gerencia seus clientes e processos.
            </p>
                    <motion.button 
                      onClick={openWhatsApp}
                      className="group relative inline-flex items-center justify-center rounded-2xl px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg text-gray-black font-semibold overflow-hidden transition-all duration-500 transform hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] shadow-2xl hover:shadow-3xl touch-target w-full sm:w-auto"
                      style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10">Começar agora</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
