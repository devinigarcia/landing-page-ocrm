"use client"

import { ContactForm } from "@/components/contact-form"
import { Reveal, Stagger, StaggerItem, MotionDiv } from "@/components/animations"
import { useEffect, useState, useRef } from "react"
import { PhoneMockup } from "@/components/phone-mockup"
import { motion, useMotionValue, useSpring, useInView } from "framer-motion"

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

  const titleText = "Imagine ter toda a jornada do seu cliente na palma da sua mão?"
  
  return (
    <section ref={sectionRef} id="contato" className="relative overflow-hidden min-h-screen">
      {/* Background animado com gradientes dinâmicos */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-purple-50/10 to-orange-50/20"
          animate={{ 
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(251, 146, 60, 0.1) 100%)",
              "linear-gradient(225deg, rgba(147, 51, 234, 0.1) 0%, rgba(251, 146, 60, 0.05) 50%, rgba(59, 130, 246, 0.1) 100%)",
              "linear-gradient(45deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(251, 146, 60, 0.1) 100%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Partículas flutuantes */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Efeito de brilho no cursor */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none mix-blend-soft-light"
          style={{
            background: "radial-gradient(circle, rgba(251, 146, 60, 0.1) 0%, transparent 70%)",
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%"
          }}
        />
      </div>

      <div 
        className="container max-w-7xl mx-auto relative z-10 py-16 md:py-24 lg:py-32 px-4"
        style={{ transform: `translateY(${offsetY * 0.1}px)` }}
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <motion.p 
                className="text-sm font-medium text-primary uppercase tracking-wider"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Conheça a Inteligência em Negócios
              </motion.p>
              
              <motion.h1 
                className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.span
                  className="inline-block bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent bg-300% animate-gradient"
                  initial={{ backgroundPosition: "0% 50%" }}
                  animate={{ backgroundPosition: "100% 50%" }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  Imagine ter toda a jornada
                </motion.span>
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  do seu cliente na palma da sua mão?
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground text-pretty leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
              >
                Monitore os seus passos, do funil de vendas até o sucesso, e transforme os dados da sua empresa em
                decisões estratégicas.
              </motion.p>
            </div>
          </div>

          <div className="lg:pl-8 w-full">
            {/* Mockup + CTA + Form colapsável */}
            <div className="w-full max-w-2xl mx-auto text-center">
              <motion.div 
                ref={mockupRef}
                className="relative mx-auto w-[32rem] h-[24rem] sm:w-[36rem] sm:h-[28rem] flex items-center justify-center"
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
                <img 
                  src="/dual-iphone-mockup.svg" 
                  alt="Dual iPhone Mockup" 
                  className="w-full h-full object-contain relative z-10"
                />
              </motion.div>
              
              <motion.h3 
                className="mt-6 text-xl font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                Pronto para dar o próximo passo?
              </motion.h3>
              
              <motion.button 
                id="cta-toggle-form" 
                onClick={toggleForm}
                className="group relative mt-3 inline-flex items-center justify-center rounded-md px-8 py-4 text-base bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.6 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Solicitar contato</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileTap={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.1 }}
                />
              </motion.button>
              
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

      <div className="container max-w-7xl mx-auto relative z-10 pb-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <div className="relative bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-center overflow-hidden">
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
                className="text-lg md:text-xl font-medium text-primary-foreground"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.2 }}
              >
                Um upgrade estratégico para suas campanhas.
              </motion.p>
              <motion.p 
                className="text-sm text-primary-foreground/80 mt-2"
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
