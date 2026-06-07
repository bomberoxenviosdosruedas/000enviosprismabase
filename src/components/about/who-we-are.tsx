"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function WhoWeAre() {
  return (
    <section className="py-16 px-4 bg-[background]">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-display-md text-secondary mb-6 font-display">Quiénes Somos</h2>
          <div className="w-24 h-1.5 bg-secondary mx-auto mb-8 rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-headline-lg text-foreground leading-relaxed mb-8 font-display italic"
            >
              "Tu aliado confiable en mensajería y delivery en Mar del Plata"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-col items-center justify-center mb-8 p-6 bg-[background]/60 backdrop-blur-sm rounded-xl border border-white/10 shadow-sm"
            >
              <div className="flex items-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-6 h-6 fill-secondary text-secondary" />
                ))}
              </div>
              <span className="text-headline-lg-mobile font-bold text-foreground font-display">4.9 estrellas en Google Reviews</span>
              <p className="text-body-md text-muted-foreground mt-2 font-sans">Basado en la confianza de cientos de clientes locales</p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-body-lg text-muted-foreground leading-relaxed font-sans"
            >
              Envíos DosRuedas se posiciona en el mercado como tu Partner Logístico Especializado. Entendemos que la eficiencia operativa en la entrega es el pilar fundamental de la experiencia del cliente final. Transformamos tu estructura de gasto fijo en soluciones flexibles que acompañan el crecimiento de tu negocio.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="mt-12 p-8 bg-[background]/60 backdrop-blur-md border border-white/10 rounded-xl text-left"
            >
              <h3 className="text-headline-lg text-primary mb-4 font-display uppercase tracking-tight">Nuestra Ventaja Injusta</h3>
              <p className="text-body-lg text-gray-300 leading-relaxed font-sans mb-4">
                En un mercado saturado de apps genéricas, nosotros decidimos ir por el camino de la excelencia territorial. Nuestra "Ventaja Injusta" se basa en tres pilares innegociables:
              </p>
              <ul className="space-y-4 text-body-md text-gray-400 font-sans">
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Atención Personalizada:</strong> Damos la cara frente a cualquier inconveniente. No sos un ticket, sos un partner.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Flota Exclusiva:</strong> Controlamos cada eslabón de la cadena para asegurar puntualidad y seguridad.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary font-bold">●</span>
                  <span><strong>Cero Tercerización:</strong> No delegamos tu confianza en terceros. Si es DosRuedas, lo hacemos nosotros.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
