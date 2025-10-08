"use client"

import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone, Globe } from "lucide-react"
import { Logo } from "@/components/logo"

export function Footer() {
  return (
    <footer className="border-t border-yellow-bright/20 safe-area-bottom" style={{ backgroundColor: '#161616' }}>
      <div className="container-responsive py-6 sm:py-8 md:py-12 lg:py-16">
        {/* Mobile: Layout em coluna única */}
        <div className="lg:hidden space-y-8">
          {/* Logo e Descrição */}
          <div className="text-center space-y-4">
            <Logo variant="primary" size="lg" />
            <p className="text-sm text-gray-300 leading-relaxed max-w-md mx-auto">
              A solução completa para gestão de relacionamento com o cliente.
            </p>
          </div>

          {/* Contato e Endereço em Grid 2x1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base text-center sm:text-left">Contato</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(00) 0000-0000</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="break-all">contato@ocrm.com.br</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start gap-3">
                  <Globe className="h-4 w-4 flex-shrink-0" />
                  <Link href="https://ocrm.com.br" className="hover:text-[rgb(255, 234, 0)] transition-colors break-all">
                    www.ocrm.com.br
                  </Link>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-white text-base text-center sm:text-left">Endereço</h3>
              <div className="flex items-start justify-center sm:justify-start gap-3 text-sm text-gray-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div className="text-center sm:text-left">
                  <div>Rua Exemplo, 123</div>
                  <div>São Paulo - SP</div>
                  <div>CEP 00000-000</div>
                </div>
              </div>
            </div>
          </div>

          {/* Redes Sociais Centralizadas */}
          <div className="space-y-4">
            <h3 className="font-semibold text-white text-base text-center">Redes Sociais</h3>
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.instagram.com/ocrmoficial?igsh=OXgyajhpZnA4ZTlz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[rgba(255,234,0,0.3)] hover:bg-[rgb(255, 234, 0)] hover:text-[#161616] hover:border-[rgb(255, 234, 0)] transition-all duration-300 touch-target"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ocrmoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[rgba(255,234,0,0.3)] hover:bg-[rgb(255, 234, 0)] hover:text-[#161616] hover:border-[rgb(255, 234, 0)] transition-all duration-300 touch-target"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop: Layout em grid */}
        <div className="hidden lg:grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <Logo variant="primary" size="md" />
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              A solução completa para gestão de relacionamento com o cliente.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Contato</h3>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>(00) 0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="break-all">contato@ocrm.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
                <Link href="https://ocrm.com.br" className="hover:text-[rgb(255, 234, 0)] transition-colors break-all">
                  www.ocrm.com.br
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Endereço</h3>
            <div className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4 mt-0.5 flex-shrink-0" />
              <span>
                Rua Exemplo, 123
                <br />
                São Paulo - SP
                <br />
                CEP 00000-000
              </span>
            </div>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-white text-sm sm:text-base">Redes Sociais</h3>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://www.instagram.com/ocrmoficial?igsh=OXgyajhpZnA4ZTlz"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-[rgba(255,234,0,0.3)] hover:bg-[rgb(255, 234, 0)] hover:text-[#161616] hover:border-[rgb(255, 234, 0)] transition-colors touch-target"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/ocrmoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-[rgba(255,234,0,0.3)] hover:bg-[rgb(255, 234, 0)] hover:text-[#161616] hover:border-[rgb(255, 234, 0)] transition-colors touch-target"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 md:mt-12 md:pt-8 border-t border-yellow-bright/20 text-center text-xs sm:text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} OCRM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
