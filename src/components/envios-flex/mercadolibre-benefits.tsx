'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, ShieldCheck, Clock, MapPin, Smartphone, UserCheck } from "lucide-react"
import { motion } from "framer-motion"

function ReputationThermometer() {
  return (
    <div className="max-w-md mx-auto mb-12">
      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">
        <span>Reputación</span>
        <span className="text-green-500">MercadoLíder Platinum</span>
      </div>
      <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden border border-white/10 flex">
        <div className="h-full w-1/5 bg-red-500/50" />
        <div className="h-full w-1/5 bg-orange-500/50" />
        <div className="h-full w-1/5 bg-yellow-500/50" />
        <div className="h-full w-1/5 bg-lime-500/50" />
        <motion.div
          className="h-full w-1/5 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
          initial={{ width: 0 }}
          whileInView={{ width: '20%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export function MercadoLibreBenefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Corte 15:00 hs",
      description: "Despachá tus ventas hasta las 15:00 hs para entrega garantizada en el mismo día.",
    },
    {
      icon: ShieldCheck,
      title: "Reputación Intacta",
      description: "Cumplimos el 100% de tus acuerdos de nivel de servicio (SLAs) para que mantengas tu estatus de MercadoLíder.",
    },
    {
      icon: TrendingUp,
      title: "Devoluciones sin cargo",
      description: "Si el comprador rechaza el producto en domicilio, la devolución a tu local es totalmente SIN CARGO.",
    },
    {
      icon: MapPin,
      title: "Cobertura MDP",
      description: "Cubrimos todas las zonas habilitadas por MercadoLibre Flex en Mar del Plata.",
    },
    {
      icon: Smartphone,
      title: "App de Control",
      description: "Gestioná y monitoreá tus despachos desde nuestra plataforma exclusiva.",
    },
    {
      icon: UserCheck,
      title: "Choferes Calificados",
      description: "Personal capacitado para brindar la mejor experiencia de entrega a tus clientes.",
    },
  ]

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ReputationThermometer />
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              BENEFICIOS <span className="text-secondary">PARA VENDEDORES</span>
            </h2>
            <div className="w-24 h-2 bg-secondary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              La solución definitiva para llevar tu tienda de MercadoLibre al siguiente nivel de competitividad.
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
                <Card className="h-full bg-[background]/60 border-white/10 hover:border-secondary/50 transition-all group backdrop-blur-sm rounded-3xl overflow-hidden relative">
                   <div className="absolute top-0 left-0 w-full h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardContent className="p-10 relative">
                     <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rotate-45 translate-x-12 -translate-y-12 group-hover:bg-secondary/5 transition-colors" />

                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform relative">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="font-display text-headline-lg font-bold mb-4 uppercase text-foreground tracking-tight">{benefit.title}</h3>
                    <p className="text-gray-400 text-body-md leading-relaxed font-sans">{benefit.description}</p>
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
