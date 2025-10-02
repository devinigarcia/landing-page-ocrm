"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const scrollToForm = () => {
    document.getElementById("cta-toggle-form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary/70">
            <span className="font-mono text-lg font-bold text-primary-foreground">O</span>
          </div>
          <span className="text-xl font-semibold">OCRM</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#funcionalidades"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Funcionalidades
          </Link>
          <Link
            href="#precos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Preços
          </Link>
          <Link
            href="#recursos"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Recursos
          </Link>
          <Button
            onClick={scrollToForm}
            className="btn-shine bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold"
            size="sm"
          >
            Solicitar contato
          </Button>
        </nav>
      </div>
    </header>
  )
}
