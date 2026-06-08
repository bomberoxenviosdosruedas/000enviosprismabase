'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, Clock, MapPin, TrendingDown, Users, Globe, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export function LowcostBenefits() {
  const benefits = [
    {
      icon: Globe,
      title: "Eficiencia en Ruteo",
      description: "Ruteo diario masivo optimizado mediante IA. NO se elige rango horario para maximizar tu rentabilidad.",
    },
    {
      icon: Clock,
      title: "Corte y Entrega (SLA)",
      description: "Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega efectiva en el día, antes de las 19:00 hs.",
    },
    {
      icon: DollarSign,
      title: "Economía y Escala",
      description: "Bajá tus costos fijos y pagá solo por lo que enviás.",
    },
    {
      icon: MapPin,
      title: "Cobertura Total",
      description: "Llegamos a todos los barrios de Mar del Plata con ruteos optimizados.",
    },
    {
      icon: TrendingDown,
      title: "Menos Operatividad",
      description: "Simplificá tus despachos diarios con un esquema de retiro programado.",
    },
    {
      icon: Users,
      title: "Ideal Emprendedores",
      description: "Escalá tu negocio sin preocuparte por los costos fijos de envío.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-blue-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-foreground tracking-tighter">
              BENEFICIOS <span className="text-primary drop-shadow-[0_0_15px_rgba(37,99,235,0.35)]">LOWCOST</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.4)]" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              La combinación perfecta entre economía y eficiencia logística para tu negocio.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <Card className="h-full bg-white border-blue-100 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(37,99,235,0.1)] transition-all duration-300 group rounded-3xl overflow-hidden relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors duration-300" />

                    <div className="flex justify-between items-start mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-blue-100 border border-blue-200 flex items-center justify-center group-hover:scale-110 group-hover:border-primary/50 transition-transform relative">
                        <IconComponent className="w-8 h-8 text-primary group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.8)] transition-all" />
                      </div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                      >
                        <CheckCircle2 className="w-6 h-6 text-green-500/80 drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]" />
                      </motion.div>
                    </div>
                    <h3 className="font-[family-name:var(--font-orbitron)] text-2xl font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-[family-name:var(--font-roboto)]">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
