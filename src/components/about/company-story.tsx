"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, TrendingUp, Award } from "lucide-react"

import { motion } from "framer-motion"

export function CompanyStory() {
  const milestones = [
    {
      icon: Calendar,
      year: "2017",
      title: "Inicios",
      description: "Comenzamos como un servicio de mensajería local, adaptándonos rápidamente a las exigencias del mercado.",
    },
    {
      icon: TrendingUp,
      year: "2021",
      title: "Transformación",
      description: "Evolucionamos hacia el E-commerce moderno en Mar del Plata, optimizando procesos de última milla.",
    },
    {
      icon: Award,
      year: "2023",
      title: "Consolidación",
      description: "Alcanzamos los 4.9 estrellas en Google Reviews, validando nuestro compromiso con la excelencia.",
    },
    {
      icon: MapPin,
      year: "2024",
      title: "Actualidad",
      description: "Operamos bajo un modelo de tercerización 3PL diseñado para potenciar PyMEs y plataformas digitales.",
    },
  ]

  return (
    <section className="py-16 px-4 bg-surface overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4 font-display uppercase tracking-tight">Nuestra Historia</h2>
          <p className="text-lg text-on-surface/80 max-w-2xl mx-auto font-sans leading-relaxed">
            Más de 7 años revolucionando la logística de última milla en Mar del Plata.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Timeline Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-border-outline-variant -translate-y-1/2 z-0"></div>

          {milestones.map((milestone, index) => {
            const IconComponent = milestone.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                <Card className="relative z-10 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-border-outline-variant bg-surface-container rounded-lg group h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-on-surface" />
                      </div>
                      <span className="text-2xl font-bold text-on-surface font-display">{milestone.year}</span>
                    </div>
                    <h3 className="text-xl font-bold text-on-surface mb-3 font-display">{milestone.title}</h3>
                    <p className="text-on-surface/80 leading-relaxed font-sans">{milestone.description}</p>
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
