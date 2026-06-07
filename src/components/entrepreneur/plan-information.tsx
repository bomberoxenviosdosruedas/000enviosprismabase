"use client"

import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PlanInformation() {
  const features = [
    {
      title: "Soluciones 3PL",
      description: "Terceriza tu logística con nosotros. Almacenamos, preparamos y enviamos tus productos.",
    },
    {
      title: "Fulfillment",
      description: "Picking y packing profesional. Tu mercadería segura y lista para salir en minutos.",
    },
    {
      title: "Cuentas Corrientes",
      description: "Esquemas de pago flexibles adaptados al flujo de caja de tu empresa o emprendimiento.",
    },
  ]

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { type: "spring" as any, stiffness: 100 } },
  };

  return (
    <section className="py-24 px-4 bg-surface relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
        >
          {/* Left Content */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-label-sm font-bold tracking-widest mb-6 uppercase">
              SOLUCIONES CORPORATIVAS
            </div>
            <h2 className="font-display text-display-lg text-display-lg font-black leading-[1] mb-8 uppercase text-foreground tracking-tighter">
              LOGÍSTICA 3PL <br />
              <span className="text-primary italic">PARA EMPRENDEDORES</span>
            </h2>
            <p className="text-on-surface/70 text-body-lg mb-10 leading-relaxed font-sans max-w-xl">
              Somos más que una empresa de envíos; nos convertimos en tu departamento de logística. Delegá el almacenamiento y la distribución en expertos y enfocate en hacer crecer tu negocio.
            </p>

            {/* Features */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  custom={index}
                  variants={itemVariants}
                >
                  <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 border border-primary/30">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-headline-lg-mobile font-bold text-on-surface mb-2 font-display uppercase tracking-tight">{feature.title}</h3>
                    <p className="text-on-surface/70 text-body-md leading-relaxed font-sans">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Large Branding */}
          <motion.div
            className="flex justify-center lg:justify-end mt-8 lg:mt-0"
            variants={itemVariants}
          >
            <div className="text-center lg:text-right select-none opacity-20">
              <div className="space-y-2">
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-on-surface font-display tracking-tighter leading-none">
                  CORE
                </div>
                <div className="text-7xl md:text-8xl lg:text-9xl font-black italic text-primary font-display tracking-tighter leading-none">
                  BUSINESS
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
