"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactForm() {
  const [showOtherSegment, setShowOtherSegment] = useState(false)

  return (
    <Card className="shadow-2xl border-border/50 bg-card">
      <CardHeader>
        <CardTitle className="text-2xl text-card-foreground">Dê o primeiro passo</CardTitle>
        <CardDescription className="text-base text-muted-foreground">
          Gere insights estratégicos com base no seu relacionamento com o cliente
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-card-foreground">
              Nome *
            </Label>
            <Input id="name" placeholder="Seu nome completo" required className="bg-background border-border" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-card-foreground">
              E-mail comercial *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-card-foreground">
              Celular *
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(00) 00000-0000"
              required
              className="bg-background border-border"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="employees" className="text-card-foreground">
              Quantidade de colaboradores? *
            </Label>
            <Select required>
              <SelectTrigger id="employees" className="bg-background border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-20">Até 20</SelectItem>
                <SelectItem value="21-50">De 21 a 50</SelectItem>
                <SelectItem value="51-100">De 51 a 100</SelectItem>
                <SelectItem value="101-200">De 101 a 200</SelectItem>
                <SelectItem value="200+">Acima de 200</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="segment" className="text-card-foreground">
              Segmento da empresa *
            </Label>
            <Select required onValueChange={(value) => setShowOtherSegment(value === "outros")}>
              <SelectTrigger id="segment" className="bg-background border-border">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="industria">Indústria</SelectItem>
                <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                <SelectItem value="marketing">Agência de Marketing</SelectItem>
                <SelectItem value="consultoria">Consultoria/Treinamentos</SelectItem>
                <SelectItem value="contabilidade">Contabilidade</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {showOtherSegment && (
            <div className="space-y-2">
              <Label htmlFor="other-segment" className="text-card-foreground">
                Qual segmento?
              </Label>
              <Input
                id="other-segment"
                placeholder="Especifique seu segmento"
                className="bg-background border-border"
              />
            </div>
          )}

          <p className="text-xs text-muted-foreground">* Campos obrigatórios</p>

          <Button
            type="submit"
            className="w-full bg-[#fb923c] hover:bg-[#f97316] text-background font-semibold"
            size="lg"
          >
            Solicitar contato
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
