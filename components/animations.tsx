"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

type RevealProps = {
  children: ReactNode
  delay?: number
  y?: number
}

export function Reveal({ children, delay = 0, y = 24 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  delay?: number
  stagger?: number
}

export function Stagger({ children, delay = 0.8, stagger = 0.6 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

type ItemProps = {
  children: ReactNode
  delay?: number
  y?: number
  i?: number
}

export function StaggerItem({ children, delay = 0, y = 16, i = 0 }: ItemProps) {
  return (
    <motion.div
      custom={i}
      variants={{
        hidden: (index: number) => ({
          opacity: 0,
          y,
          x: index % 2 === 0 ? -36 : 36,
          rotateY: index % 2 === 0 ? -12 : 12,
          rotateX: -8,
          scale: 0.9,
          filter: "blur(8px)",
          transformPerspective: 1000,
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        }),
        show: {
          opacity: 1,
          y: 0,
          x: 0,
          rotateY: 0,
          rotateX: 0,
          scale: [1.03, 1],
          filter: "blur(0px)",
          transformPerspective: 1000,
          boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 34,
            mass: 0.85,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export const MotionDiv = motion.div

// Lightweight ScrollReveal client component (Intersection Observer)
// Attach className "sr" to elements and they will reveal when entering viewport
export function ScrollRevealObserver() {
  if (typeof window === "undefined") return null
  if (typeof window !== "undefined") {
    // Run once per mount
    const setup = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(".sr"))
      if (elements.length === 0) return
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible")
              observer.unobserve(entry.target)
            }
          }
        },
        { threshold: 0.15 }
      )
      elements.forEach((el) => observer.observe(el))

      // Toggle for contact collapsible (pure JS, no libs)
      const toggleBtn = document.getElementById("cta-toggle-form")
      const collapsible = document.getElementById("contact-collapsible")
      if (toggleBtn && collapsible) {
        const onClick = () => collapsible.classList.toggle("open")
        toggleBtn.addEventListener("click", onClick)
        // Cleanup to avoid duplicate handlers em navegação client-side
        window.addEventListener("beforeunload", () => toggleBtn.removeEventListener("click", onClick))
      }
    }
    // defer to next tick to ensure DOM is ready
    setTimeout(setup, 0)
  }
  return null
}


