"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export function Section2() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const openWhatsApp = () => {
    const phoneNumber = "5511999999999"; // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent(
      "Olá! Gostaria de saber mais sobre o OCRM."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const features = [
    {
      title: "Unificação de Dados",
      description: "Visão integral em um só lugar",
      attribute: "Integrador",
    },
    {
      title: "Automação de Processos",
      description: "Eficiência sem perder controle",
      attribute: "Inteligente",
    },
    {
      title: "Respostas em Tempo Real",
      description: "Indicadores e alertas instantâneos",
      attribute: "Preciso",
    },
    {
      title: "Insights Estratégicos",
      description: "Padrões e tendências que orientam o futuro",
      attribute: "Estratégico",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="spacing-responsive relative overflow-hidden"
      style={{ backgroundColor: "#000000" }}
    >
      {/* Fundo limpo */}

      <div className="container-responsive relative z-10">
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <motion.h1
            className="text-responsive-2xl font-bold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Dê adeus à era da gestão descentralizada
          </motion.h1>

          <motion.h2
            className="text-responsive-lg text-gray-300 max-w-4xl mx-auto mb-3 sm:mb-4 md:mb-6 lg:mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            O OCRM organiza, automatiza e revela dados em{" "}
            <span
              style={{ color: "rgb(255, 234, 0)" }}
              className="font-semibold"
            >
              tempo real
            </span>
            .
          </motion.h2>

          <motion.p
            className="text-responsive-base text-gray-300 max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Tenha{" "}
            <span
              style={{ color: "rgb(255, 234, 0)" }}
              className="font-semibold"
            >
              visão integral
            </span>{" "}
            da jornada do cliente com{" "}
            <span
              style={{ color: "rgb(255, 234, 0)" }}
              className="font-semibold"
            >
              indicadores em tempo real
            </span>{" "}
            que transformam dados em vantagem competitiva.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid-responsive-4 mb-8 sm:mb-12 md:mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-2 sm:p-3 md:p-4 lg:p-6 shadow-lg text-center border border-yellow-bright/20 relative overflow-hidden"
              style={{
                backgroundColor: "rgb(48, 48, 48)",
              }}
              layout={false}
              layoutId={undefined}
              initial={{
                opacity: 0,
                y: 100,
                scale: 0.5,
                rotateX: -90,
                rotateY: 45,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotateX: 0,
                rotateY: 0,
              }}
              animate={{}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{
                scale: 1.08,
                y: -10,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(255, 234, 0, 0.4)",
                transition: { duration: 0.3, type: "spring" },
              }}
              animate={{}}
              transition={{}}
            >
              {/* Efeito de brilho de fundo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-yellow-600/10 rounded-xl"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1,
                  delay: index * 0.3 + 0.5,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
              />

              {/* Ícones para os cards */}
              {index === 0 && (
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 mb-3 sm:mb-4 relative z-10 mx-auto flex items-center justify-center"
                  initial={{
                    scale: 0,
                    rotate: -360,
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.3 + 0.4,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/gerenciamento-de-banco-de-dados.png"
                    alt="Gerenciamento de Banco de Dados"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </motion.div>
              )}

              {index === 1 && (
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 mb-3 sm:mb-4 relative z-10 mx-auto flex items-center justify-center"
                  initial={{
                    scale: 0,
                    rotate: -360,
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.3 + 0.4,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/automacao.png"
                    alt="Automação"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </motion.div>
              )}

              {index === 2 && (
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 mb-3 sm:mb-4 relative z-10 mx-auto flex items-center justify-center"
                  initial={{
                    scale: 0,
                    rotate: -360,
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.3 + 0.4,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/tempo.png"
                    alt="Tempo Real"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </motion.div>
              )}

              {index === 3 && (
                <motion.div
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 mb-3 sm:mb-4 relative z-10 mx-auto flex items-center justify-center"
                  initial={{
                    scale: 0,
                    rotate: -360,
                    y: -50,
                    opacity: 0,
                  }}
                  whileInView={{
                    scale: 1,
                    rotate: 0,
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: index * 0.3 + 0.4,
                    ease: [0.68, -0.55, 0.265, 1.55],
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                >
                  <Image
                    src="/insights-do-consumidor.png"
                    alt="Insights do Consumidor"
                    width={72}
                    height={72}
                    className="object-contain"
                  />
                </motion.div>
              )}

              <motion.div
                className="text-xs font-semibold px-2 py-1 rounded-full mb-1 sm:mb-2 md:mb-3 inline-block relative z-10"
                style={{
                  backgroundColor: "rgba(255, 234, 0, 0.2)",
                  color: "rgb(255, 234, 0)",
                }}
                initial={{
                  opacity: 0,
                  x: -50,
                  scale: 0.5,
                  rotate: -45,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3 + 0.6,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(255, 234, 0, 0.3)",
                  transition: { duration: 0.2 },
                }}
                animate={{}}
                transition={{}}
              >
                {feature.attribute}
              </motion.div>

              <motion.h3
                className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white mb-1 relative z-10"
                initial={{
                  opacity: 0,
                  y: 30,
                  x: -20,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3 + 0.8,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  color: "rgb(255, 234, 0)",
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.title}
              </motion.h3>

              <motion.p
                className="text-xs sm:text-sm text-gray-300 leading-relaxed relative z-10"
                initial={{
                  opacity: 0,
                  y: 30,
                  x: 20,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3 + 1.0,
                  ease: "backOut",
                }}
                viewport={{ once: true }}
                whileHover={{
                  color: "white",
                  scale: 1.02,
                  transition: { duration: 0.2 },
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-responsive-base text-gray-300 mb-3 sm:mb-4 md:mb-6">
            Dados isolados não dizem nada. Conectados com sabedoria,{" "}
            <span
              style={{ color: "rgb(255, 234, 0)" }}
              className="font-semibold"
            >
              dizem tudo
            </span>
            .
          </p>
          <button
            onClick={openWhatsApp}
            className="text-gray-black font-semibold py-1.5 sm:py-2 md:py-3 lg:py-4 px-3 sm:px-4 md:px-6 lg:px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] shadow-lg hover:shadow-xl touch-target w-full sm:w-auto"
            style={{
              background:
                "linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))",
            }}
          >
            Quero vender com estratégia
          </button>
        </motion.div>
      </div>
    </section>
  );
}
