"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion, AnimatePresence } from "framer-motion"

export function ContactForm() {
  const [showOtherSegment, setShowOtherSegment] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    employees: '',
    segment: '',
    otherSegment: ''
  })

  // Adicionar CSS para animações do formulário
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style')
      style.textContent = `
        @keyframes input-focus {
          0% { 
            border-color: rgba(255, 234, 0, 0.3);
            box-shadow: 0 0 0 rgba(255, 234, 0, 0);
          }
          100% { 
            border-color: rgb(255, 234, 0);
            box-shadow: 0 0 0 3px rgba(255, 234, 0, 0.1);
          }
        }
        
        @keyframes label-float {
          0% { 
            transform: translateY(0);
            color: rgb(60, 60, 60);
          }
          100% { 
            transform: translateY(-2px);
            color: rgb(255, 234, 0);
          }
        }
        
        @keyframes line-draw {
          0% { 
            width: 0;
            opacity: 0;
          }
          100% { 
            width: 100%;
            opacity: 1;
          }
        }
        
        .animated-input {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        
        .animated-input:focus {
          animation: input-focus 0.3s ease-out forwards;
        }
        
        .animated-label {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .animated-label.focused {
          animation: label-float 0.3s ease-out forwards;
        }
        
        .input-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: linear-gradient(90deg, rgb(255, 234, 0), rgb(229, 186, 0));
          border-radius: 1px;
        }
        
        .input-line.animate {
          animation: line-draw 0.5s ease-out forwards;
        }
        
        .form-field {
          position: relative;
          margin-bottom: 1rem;
        }
        
        @media (min-width: 640px) {
          .form-field {
            margin-bottom: 1.5rem;
          }
        }
        
        .form-field::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255, 234, 0, 0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .form-field:hover::after {
          opacity: 1;
        }
      `
      if (!document.head.querySelector('style[data-form-animations]')) {
        style.setAttribute('data-form-animations', 'true')
        document.head.appendChild(style)
      }
    }
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFocus = (field: string) => {
    setFocusedField(field)
  }

  const handleBlur = () => {
    setFocusedField(null)
  }

  return (
    <motion.div 
      className="contact-form-custom shadow-2xl border border-border/50 rounded-xl flex flex-col gap-4 sm:gap-6 py-4 sm:py-6"
      style={{ 
        backgroundColor: 'rgb(174, 174, 174)',
        color: 'rgb(0, 0, 0)'
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="px-4 sm:px-6"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="text-xl sm:text-2xl font-semibold" style={{ color: 'rgb(0, 0, 0)' }}>Dê o primeiro passo</div>
        <div className="text-sm sm:text-base" style={{ color: 'rgb(60, 60, 60)' }}>
          Gere insights estratégicos com base no seu relacionamento com o cliente
        </div>
      </motion.div>
      
      <div className="px-4 sm:px-6">
        <form className="space-y-3 sm:space-y-4">
          {/* Nome */}
          <motion.div 
            className="form-field"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Label 
              htmlFor="name" 
              className={`animated-label ${focusedField === 'name' ? 'focused' : ''}`}
              style={{ color: focusedField === 'name' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
            >
              Nome *
            </Label>
            <div className="relative">
              <Input 
                id="name" 
                placeholder="Seu nome completo" 
                required 
                className="animated-input bg-background border-border"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                onFocus={() => handleFocus('name')}
                onBlur={handleBlur}
              />
              {focusedField === 'name' && (
                <div className="input-line animate"></div>
              )}
            </div>
          </motion.div>

          {/* E-mail */}
          <motion.div 
            className="form-field"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Label 
              htmlFor="email" 
              className={`animated-label ${focusedField === 'email' ? 'focused' : ''}`}
              style={{ color: focusedField === 'email' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
            >
              E-mail comercial *
            </Label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                required
                className="animated-input bg-background border-border"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                onFocus={() => handleFocus('email')}
                onBlur={handleBlur}
              />
              {focusedField === 'email' && (
                <div className="input-line animate"></div>
              )}
            </div>
          </motion.div>

          {/* Celular */}
          <motion.div 
            className="form-field"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Label 
              htmlFor="phone" 
              className={`animated-label ${focusedField === 'phone' ? 'focused' : ''}`}
              style={{ color: focusedField === 'phone' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
            >
              Celular *
            </Label>
            <div className="relative">
              <Input
                id="phone"
                type="tel"
                placeholder="(00) 00000-0000"
                required
                className="animated-input bg-background border-border"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                onFocus={() => handleFocus('phone')}
                onBlur={handleBlur}
              />
              {focusedField === 'phone' && (
                <div className="input-line animate"></div>
              )}
            </div>
          </motion.div>

          {/* Colaboradores */}
          <motion.div 
            className="form-field"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Label 
              htmlFor="employees" 
              className={`animated-label ${focusedField === 'employees' ? 'focused' : ''}`}
              style={{ color: focusedField === 'employees' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
            >
              Quantidade de colaboradores? *
            </Label>
            <div className="relative">
              <Select 
                required 
                value={formData.employees}
                onValueChange={(value) => handleInputChange('employees', value)}
              >
                <SelectTrigger 
                  id="employees" 
                  className="animated-input bg-background border-border"
                  onFocus={() => handleFocus('employees')}
                  onBlur={handleBlur}
                >
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
              {focusedField === 'employees' && (
                <div className="input-line animate"></div>
              )}
            </div>
          </motion.div>

          {/* Segmento */}
          <motion.div 
            className="form-field"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Label 
              htmlFor="segment" 
              className={`animated-label ${focusedField === 'segment' ? 'focused' : ''}`}
              style={{ color: focusedField === 'segment' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
            >
              Segmento da empresa *
            </Label>
            <div className="relative">
              <Select 
                required 
                value={formData.segment}
                onValueChange={(value) => {
                  handleInputChange('segment', value)
                  setShowOtherSegment(value === "outros")
                }}
              >
                <SelectTrigger 
                  id="segment" 
                  className="animated-input bg-background border-border"
                  onFocus={() => handleFocus('segment')}
                  onBlur={handleBlur}
                >
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
              {focusedField === 'segment' && (
                <div className="input-line animate"></div>
              )}
            </div>
          </motion.div>

          {/* Outro Segmento */}
          <AnimatePresence>
            {showOtherSegment && (
              <motion.div 
                className="form-field"
                initial={{ opacity: 0, height: 0, x: -20 }}
                animate={{ opacity: 1, height: 'auto', x: 0 }}
                exit={{ opacity: 0, height: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Label 
                  htmlFor="other-segment" 
                  className={`animated-label ${focusedField === 'otherSegment' ? 'focused' : ''}`}
                  style={{ color: focusedField === 'otherSegment' ? 'rgb(255, 234, 0)' : 'rgb(0, 0, 0)' }}
                >
                  Qual segmento?
                </Label>
                <div className="relative">
                  <Input
                    id="other-segment"
                    placeholder="Especifique seu segmento"
                    className="animated-input bg-background border-border"
                    value={formData.otherSegment}
                    onChange={(e) => handleInputChange('otherSegment', e.target.value)}
                    onFocus={() => handleFocus('otherSegment')}
                    onBlur={handleBlur}
                  />
                  {focusedField === 'otherSegment' && (
                    <div className="input-line animate"></div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.p 
            className="text-xs" 
            style={{ color: 'rgb(60, 60, 60)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            * Campos obrigatórios
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-[rgb(255, 234, 0)] to-[rgb(229, 186, 0)] hover:from-[rgb(229, 186, 0)] hover:to-[rgb(255, 234, 0)] text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg touch-target"
              size="lg"
            >
              Solicitar contato
            </Button>
          </motion.div>
        </form>
      </div>
    </motion.div>
  )
}
