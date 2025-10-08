"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999' // Exemplo: 55 (código do país) 11 (DDD) 999999999 (número)
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre o OCRM.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-bright/20 backdrop-blur supports-[backdrop-filter]:bg-black/60 safe-area-top" style={{ backgroundColor: 'rgba(22, 22, 22, 0.95)' }}>
      <div className="container-responsive flex h-14 sm:h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo variant="primary" size="md" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6">
          
          <Button
            onClick={openWhatsApp}
            className="btn-shine text-gray-black font-semibold shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] transition-all duration-300 touch-target"
            style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
            size="sm"
          >
            <span className="hidden xl:inline">Solicitar contato</span>
            <span className="xl:hidden">Contato</span>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-gray-300 hover:text-[rgb(255, 234, 0)] transition-colors touch-target"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-yellow-bright/20 bg-black/95 backdrop-blur safe-area-bottom">
          <nav className="container-responsive py-4 space-y-2">
            <Link
              href="#funcionalidades"
              className="block text-sm font-medium text-gray-300 hover:text-[rgb(255, 234, 0)] transition-colors py-3 touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Funcionalidades
            </Link>
            <Link
              href="#precos"
              className="block text-sm font-medium text-gray-300 hover:text-[rgb(255, 234, 0)] transition-colors py-3 touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Preços
            </Link>
            <Link
              href="#recursos"
              className="block text-sm font-medium text-gray-300 hover:text-[rgb(255, 234, 0)] transition-colors py-3 touch-target"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </Link>
            <div className="pt-2">
              <Button
                onClick={openWhatsApp}
                className="w-full btn-shine text-gray-black font-semibold shadow-lg hover:shadow-xl hover:bg-gradient-to-r hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] transition-all duration-300 touch-target"
                style={{ background: 'linear-gradient(to right, rgb(255, 234, 0), rgb(229, 186, 0))' }}
                size="sm"
              >
                Solicitar contato
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
