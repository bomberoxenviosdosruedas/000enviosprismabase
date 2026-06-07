'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { Package, ShieldCheck, CreditCard, BarChart, Truck, Users } from "lucide-react"
import { motion } from "framer-motion"

function SuccessMetrics() {
  const metrics = [
    { label: "Entregas Efectivas", value: "99.8%" },
    { label: "Clientes Corporativos", value: "+150" },
    { label: "SLA Cumplido", value: "100%" },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      {metrics.map((metric, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="text-center p-8 bg-[background]/60 rounded-3xl border border-white/10 backdrop-blur-sm"
        >
          <div className="text-display-md font-black text-primary font-display mb-2 italic">
            {metric.value}
          </div>
          <div className="text-label-sm font-bold uppercase tracking-widest text-on-surface/70">
            {metric.label}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export function EntrepreneurBenefits() {
  const benefits = [
    {
      icon: Truck,
      title: "Partner Logístico Especializado",
      description: "Más que un envío, somos tu depósito. Soluciones de almacenamiento y fulfillment para PyMEs.",
    },
    {
      icon: CreditCard,
      title: "Cuentas Corrientes",
      description: "Esquemas de facturación mensual centralizada adaptados a tu flujo de caja (Factura C disponible).",
    },
    {
      icon: ShieldCheck,
      title: "Límites Claros y Seguros",
      description: "Flota de motos exclusiva. Llevamos bultos de hasta 5 kg (40x40x30 cm). Seguimiento centralizado vía WhatsApp.",
    },
    {
      icon: Package,
      title: "Almacenaje Seguro",
      description: "Contamos con depósitos propios con seguridad para tu mercadería.",
    },
    {
      icon: BarChart,
      title: "Reportes Detallados",
      description: "Métricas claras sobre tus entregas, devoluciones y tiempos promedio.",
    },
    {
      icon: Users,
      title: "Asesor Dedicado",
      description: "Un ejecutivo de cuentas para resolver todas tus dudas operativas.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SuccessMetrics />
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-on-surface tracking-tighter">
              BENEFICIOS <span className="text-primary">PARA NEGOCIOS</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-sm" />
            <p className="text-on-surface/70 text-body-lg max-w-2xl mx-auto font-sans">
              Potenciamos tu capacidad operativa con soluciones logísticas de clase mundial.
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
              >
                <Card className="h-full bg-[background]/60 border-white/10 hover:border-primary/30 transition-all group backdrop-blur-sm rounded-3xl overflow-hidden">
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-on-surface/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-primary/5 transition-colors" />

                    <div className="w-16 h-16 rounded-sm bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-on-surface tracking-tight">{benefit.title}</h3>
                    <p className="text-on-surface/70 text-body-md leading-relaxed font-sans">{benefit.description}</p>
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
