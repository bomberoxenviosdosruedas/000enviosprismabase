"use client"

import { Button } from "@/components/ui/button"
import { DollarSign, Calendar, BarChart3, Check } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function LowcostContent() {
  const features = [
    {
      icon: BarChart3,
      title: "Eficiencia en Ruteo",
      description: "Ruteo diario masivo optimizado. NO se elige rango horario para maximizar eficiencia.",
    },
    {
      icon: Calendar,
      title: "Corte y Entrega",
      description: "Pedidos antes de las 13:00 hs se entregan garantizados antes de las 19:00 hs.",
    },
    {
      icon: DollarSign,
      title: "Tarifa Económica",
      description: "La mejor tarifa de Mar del Plata para envíos masivos y ruteos diarios.",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left Content - Large Branding */}
          <motion.div
            className="flex justify-center lg:justify-start order-2 lg:order-1"
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <div className="text-center lg:text-left select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-foreground font-display tracking-tighter leading-none">
                  ENVIOS
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  LOWCOST
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-label-sm font-bold tracking-widest mb-6 uppercase">
              MÁXIMA RENTABILIDAD
            </div>
            <h2 className="font-display text-display-lg text-display-lg font-black leading-[1] mb-8 uppercase text-foreground tracking-tighter">
              ENVÍOS LOWCOST: <br />
              <span className="text-primary italic">MÁXIMA EFICIENCIA</span>
            </h2>
            <p className="text-gray-400 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Nuestro servicio LowCost está diseñado para el ruteo diario masivo. Optimizamos nuestras rutas para ofrecer la tarifa más competitiva, garantizando la entrega en el día para pedidos ingresados antes del horario de corte.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    variants={itemVariants}
                  >
                    <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 mt-1">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-headline-lg-mobile font-bold text-foreground mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                      <p className="text-gray-400 text-body-md leading-relaxed font-sans">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Button */}
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-yellow-400 text-black font-display font-black px-10 py-5 rounded-xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-label-md"
            >
              <Link href="/cotizar/lowcost">Cotizá tu Envío Low Cost</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
