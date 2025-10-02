import Link from "next/link"
import { Instagram, Linkedin, Mail, MapPin, Phone, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/30">
      <div className="container py-8 md:py-12 lg:py-16 px-6 sm:px-8">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
                <span className="font-mono text-lg font-bold text-primary-foreground">O</span>
              </div>
              <span className="text-xl font-semibold">OCRM</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A solução completa para gestão de relacionamento com o cliente.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contato</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(00) 0000-0000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>contato@ocrm.com.br</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <Link href="https://ocrm.com.br" className="hover:text-primary transition-colors">
                  www.ocrm.com.br
                </Link>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Endereço</h3>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>
                Rua Exemplo, 123
                <br />
                São Paulo - SP
                <br />
                CEP 00000-000
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Redes Sociais</h3>
            <div className="flex gap-4">
              <Link
                href="https://instagram.com/ocrm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://linkedin.com/company/ocrm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 md:mt-12 md:pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} OCRM. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
