"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { FaqItem } from "./faq-item"
import { Truck, DollarSign, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqData {
  category: string
  icon: React.ElementType
  questions: Array<{
    question: string
    answer: string
  }>
}

export function FaqCategories() {
  const [activeCategory, setActiveCategory] = useState("servicios")

  const faqData: FaqData[] = [
    {
      category: "servicios",
      icon: Truck,
      questions: [
        {
          question: "¿Qué tipo de envíos realizan?",
          answer:
            "Transportamos en moto: mandados, trámites, paquetes, delivery y servicios de cadetería.",
        },
        {
          question: "¿Cuáles son las zonas de cobertura? ¿Cubren toda la ciudad/región?",
          answer:
            "Cubrimos todo Mar del Plata (no cubrimos zonas aledañas). Garantizamos presencia en todos los barrios de la ciudad con estándares de seguridad propios.",
        },
        {
          question: "¿Realizan entregas a Contrareembolso?",
          answer:
            "Sí, el efectivo cobrado será rendido en el transcurso del día o al día siguiente.",
        },
        {
          question: "¿Cómo realizo el seguimiento de mi envío?",
          answer:
            "Centralizamos la gestión vía WhatsApp. Por razones de seguridad no utilizamos GPS en tiempo real, pero garantizamos la notificación inmediata tras la entrega efectiva del paquete.",
        },
        {
          question: "¿Cuáles son los límites de carga?",
          answer:
            "Operamos con una flota exclusiva de motocicletas. La capacidad máxima es de 5 kg o dimensiones de 40x40x30 cm por bulto.",
        },
        {
          question: "¿Cómo puedo solicitar un servicio de mensajería?",
          answer:
            "Comunícate por mensaje de WhatsApp al 2236602699 y un operador te responderá a la brevedad.",
        },
        {
          question: "¿Cuáles son sus horarios de atención/servicio?",
          answer:
            "Nuestro horario de atención es de lunes a viernes de 8 a 18 hs y sábados de 9 a 15 hs. Consulta por WhatsApp para el servicio de delivery nocturno.",
        },
        {
          question: "¿Trabajan con empresas o solo con particulares?",
          answer: "Atendemos empresas, emprendedores y particulares.",
        },
        {
          question: "¿Qué los diferencia de otros servicios de mensajería en moto?",
          answer:
            "Trabajamos con estándares de excelencia, no toleramos faltas de respeto y preferimos rechazar un envío antes que fallar. Nuestra ventaja es la flota exclusiva y la cero tercerización.",
        },
      ],
    },
    {
      category: "precios",
      icon: DollarSign,
      questions: [
        {
          question: "¿Cómo calculan el costo del envío?",
          answer:
            "El costo de envío se calcula según la distancia entre el retiro y la entrega, y adicionales que puedan existir (bulto, lluvia, demora, distancia de retiro).",
        },
        {
          question: "¿Cuáles son las formas de pago que aceptan?",
          answer: "Se puede abonar en efectivo o por transferencia.",
        },
        {
          question: "¿Emiten factura?",
          answer: "Para todos nuestros servicios profesionales emitimos Factura C.",
        },
        {
          question: "¿Ofrecen descuentos para emprendedores o clientes masivos?",
          answer: "Sí, ofrecemos planes especiales para emprendedores y clientes con muchos envíos.",
        },
      ],
    },
    {
      category: "proceso",
      icon: Clock,
      questions: [
        {
          question: "¿Qué información necesito proporcionar para solicitar un envío?",
          answer:
            "Para solicitar un envío necesitamos los siguientes datos: dirección de retiro, dirección de entrega, tamaño del envío, nombre y teléfono de quien recibe.",
        },
        {
          question: "¿Puedo modificar la dirección de entrega una vez que el envío está en curso?",
          answer:
            "Sí, pero dependiendo de la distancia, podría tener un costo adicional.",
        },
        {
          question: "¿Qué sucede si el destinatario no está presente o rechaza el producto?",
          answer:
            "Si tu comprador rechaza el producto en el domicilio, la devolución del paquete a tu tienda o local se realiza totalmente SIN CARGO.",
        },
      ],
    },
  ]

  const categories = [
    { id: "servicios", label: "Servicios Generales", icon: Truck },
    { id: "precios", label: "Precios y Pagos", icon: DollarSign },
    { id: "proceso", label: "Proceso de Envío", icon: Clock },
  ]

  const activeFaq = faqData.find((faq) => faq.category === activeCategory)

  return (
    <section className="py-16 px-4 bg-[background]">
      <div className="container mx-auto max-w-6xl">
        {/* Category Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon
            const isActive = activeCategory === category.id

            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={isActive ? "default" : "outline"}
                className={cn(
                  "h-auto p-6 flex flex-col items-center space-y-4 transition-all duration-300 font-display rounded-xl",
                  isActive
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl scale-105 border-primary"
                    : "bg-[background]/60 backdrop-blur-sm border-white/10 hover:bg-white/5 hover:border-primary/50 text-muted-foreground"
                )}
              >
                <div className={cn(
                  "p-3 rounded-full",
                  isActive ? "bg-primary-foreground/10" : "bg-primary/5"
                )}>
                  <IconComponent className={cn("w-6 h-6", isActive ? "text-primary-foreground" : "text-primary")} />
                </div>
                <span className="text-base font-bold uppercase tracking-wider">{category.label}</span>
              </Button>
            )
          })}
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-display-md text-foreground font-display">
              {categories.find((cat) => cat.id === activeCategory)?.label}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="space-y-4">
            {activeFaq?.questions.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
