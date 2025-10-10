"use client"

import { ContactForm } from "@/components/contact-form"
import { Reveal, Stagger, StaggerItem, MotionDiv } from "@/components/animations"
import { useEffect, useState, useRef } from "react"
import { PhoneMockup } from "@/components/phone-mockup"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"
import { Logo } from "@/components/logo"

export function HeroSection() {
  const [offsetY, setOffsetY] = useState(0)
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const sectionRef = useRef(null)
  const mockupRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      setMousePosition({ x: clientX, y: clientY })
      mouseX.set(clientX)
      mouseY.set(clientY)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible)
  }

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999' // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o OCRM.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const openDemo = () => {
    // Abrir demonstração - pode ser um modal ou link externo
    window.open('https://demo.ocrm.com.br', '_blank')
  }

  const titleText = "Imagine ter toda a jornada do seu cliente na palma da sua mão?"
  
  return (
    <section ref={sectionRef} id="contato" className="relative overflow-hidden safe-area-top" style={{ backgroundColor: '#161616' }}>
      {/* Fundo limpo */}

              <div 
                className="container-responsive relative z-10 py-4 sm:py-6 md:py-8 lg:py-12 xl:py-16"
                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
              >
                <div className="grid gap-4 sm:gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                  <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      <motion.h1 
                        className="text-responsive-2xl font-bold tracking-tight text-balance leading-tight text-white"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                      >
                        <motion.span
                          className="inline-block"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: 0.6 }}
                        >
                          Imagine ter toda a <span style={{ color: 'rgb(255, 234, 0)' }}>jornada do cliente</span> na palma da sua mão?
                        </motion.span>
                      </motion.h1>
                      
                      <motion.h2 
                        className="text-responsive-lg text-gray-300 text-pretty leading-relaxed max-w-2xl mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                      >
                        Monitore os seus passos, do funil de vendas até o sucesso, e transforme os dados da sua empresa em 
                        <span style={{ color: 'rgb(255, 234, 0)' }} className="font-semibold"> decisões estratégicas</span>.
                      </motion.h2>
                    </div>
                  </div>

          <div className="lg:pl-8 w-full">
            {/* Mockup + CTA + Form colapsável */}
            <div className="w-full max-w-2xl mx-auto text-center">
              <motion.div 
                ref={mockupRef}
                className="relative mx-auto w-[280px] h-[200px] xs:w-[300px] xs:h-[220px] sm:w-[320px] sm:h-[240px] md:w-[400px] md:h-[300px] lg:w-[32rem] lg:h-[24rem] xl:w-[36rem] xl:h-[28rem] flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Mockups duplos com as novas imagens */}
                  <div className="relative w-full h-full">
                    {/* Imagem frontal */}
                    <motion.div
                      className="absolute left-0 top-0 w-[60%] h-[80%] rounded-2xl overflow-hidden shadow-2xl"
                      animate={{ y: [0, 8, 0] }}
                      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img 
                        src="/WhatsApp Image 2025-10-07 at 16.21.22.jpeg" 
                        alt="Mockup frontal" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    
                    {/* Imagem traseira */}
                    <motion.div
                      className="absolute -right-[10%] bottom-[5%] w-[60%] h-[80%] rounded-2xl overflow-hidden shadow-2xl rotate-[-15deg]"
                      animate={{ y: [0, -6, 0] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <img 
                        src="/WhatsApp Image 2025-10-07 at 16.21.00.jpeg" 
                        alt="Mockup traseiro" 
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto px-4 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
              <motion.button 
                id="cta-toggle-form" 
                onClick={toggleForm}
                  className="group relative inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base text-gray-black font-semibold overflow-hidden transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] touch-target w-full sm:w-auto"
                  style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                  <span className="relative z-10">Começar grátis</span>
              </motion.button>
                
                <motion.button 
                  onClick={openDemo}
                  className="group relative inline-flex items-center justify-center rounded-lg px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base border-2 font-semibold transition-all duration-300 hover:bg-[rgb(255, 234, 0)] hover:text-[#161616] touch-target w-full sm:w-auto"
                  style={{ borderColor: 'rgb(255, 234, 0)', color: 'rgb(255, 234, 0)' }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Ver demonstração</span>
                </motion.button>
              </motion.div>
              
              <motion.div 
                id="contact-collapsible" 
                className="mt-4 text-left overflow-hidden"
                initial={false}
                animate={{
                  height: isFormVisible ? "auto" : 0,
                  opacity: isFormVisible ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
              >
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ 
                    y: isFormVisible ? 0 : -20, 
                    opacity: isFormVisible ? 1 : 0 
                  }}
                  transition={{ duration: 0.3, delay: isFormVisible ? 0.2 : 0 }}
                >
                  <ContactForm />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-responsive relative z-10 pb-8 sm:pb-12 md:pb-16">
        <motion.div
          className="pt-4 sm:pt-6 md:pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-4 sm:p-6 md:p-8 text-center overflow-hidden shadow-lg">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 5
              }}
            />
            <div className="relative z-10">
              <motion.p 
                className="text-responsive-lg font-medium text-primary-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                Um upgrade estratégico para suas campanhas.
              </motion.p>
              <motion.p 
                className="text-responsive-sm text-primary-foreground/80 mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 }}
              >
                Transforme dados em decisões inteligentes que impulsionam seus resultados.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
