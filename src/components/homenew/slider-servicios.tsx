'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CaretRight, Clock, Globe, Lightning, Package, SquaresFour, Truck } from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Envíos Express",
    bajada: "Prioridad absoluta y certeza total.",
    desc: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Garantizamos precisión en el tiempo de tu cliente final.",
    icon: <Lightning />,
    color: "hsl(221.2, 83.2%, 53.3%)",
    href: "/servicios/envios-express",
    badge: "ALTA PRIORIDAD",
    buttonText: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    bajada: "Máxima rentabilidad y eficiencia en ruteo masivo.",
    desc: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega en el día antes de las 19:00 hs.",
    icon: <Clock />,
    color: "hsl(45, 93%, 47%)",
    href: "/servicios/envios-lowcost",
    badge: "RENTABILIDAD",
    buttonText: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex (MercadoLibre)",
    bajada: "Potenciá tu reputación al máximo.",
    desc: "Somos expertos en MercadoLibre. Despachá hasta las 15:00 hs y nosotros cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro siempre esté en verde.",
    icon: <Package />,
    color: "hsl(221.2, 83.2%, 53.3%)",
    href: "/servicios/enviosflex",
    badge: "MERCADOLIBRE",
    buttonText: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    bajada: "Tercerización integral y cuentas corrientes.",
    desc: "Más que un envío, somos tu depósito y tu equipo. Soluciones escalables para PyMEs y plataformas digitales, con facturación mensual centralizada.",
    icon: <Truck />,
    color: "hsl(45, 93%, 47%)",
    href: "/servicios/plan-emprendedores",
    badge: "INTEGRAL",
    buttonText: "Hablar con un asesor"
  }
];

export default function SliderServicios() {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-[background] overflow-hidden">
      {/* Tech lines background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full tech-grid-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient-blue" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-blue-400 text-xxs font-black tracking-[0.25em] mb-8 uppercase font-sans">
              <SquaresFour size={12} className="text-primary animate-pulse" /> CAPACIDADES DINÁMICAS
            </div>
            <h2 className="font-display text-orbitron text-4xl md:text-5xl lg:text-6xl font-black italic text-white uppercase tracking-tighter mb-4">
              SOLUCIONES A <span className="text-secondary drop-shadow-[0_0_20px_rgba(255,230,0,0.35)]">MEDIDA</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:border-l lg:border-white/10 lg:pl-10"
          >
            <p className="text-gray-400 font-[family-name:var(--font-roboto)] text-lg md:text-xl leading-relaxed font-light">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </motion.div>
        </div>

        <div className="grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group p-6 md:p-10 rounded-xl md:rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 transition-all duration-700 relative overflow-hidden flex flex-col min-h-[440px] h-auto backdrop-blur-xl shadow-2xl"
            >
              {/* Internal Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] blur-[40px] rounded-full group-hover:bg-primary/10 transition-all duration-700" />

              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-[0_15px_30px_-5px_rgba(0,0,0,0.5)]"
                style={{ backgroundColor: service.color, color: idx % 2 === 0 ? 'white' : 'black' }}
              >
                {React.cloneElement(service.icon, { size: 32 })}
              </div>

              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xxs font-black text-white/40 uppercase tracking-[0.3em]">{service.badge}</span>
                  <div className="h-px w-6 bg-white/10" />
                </div>
                <h3 className="font-display text-orbitron text-2xl font-black text-white mb-1 uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className="text-xxs font-black uppercase tracking-[0.2em] mb-4" style={{ color: service.color }}>
                  {service.bajada}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-[family-name:var(--font-roboto)] font-light">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="flex items-center gap-4 text-white font-display text-orbitron text-xxs font-black uppercase tracking-[0.3em] opacity-30 group-hover:opacity-100 group-hover:text-secondary transition-all group-hover:gap-6 pt-6 mt-auto border-t border-white/5"
              >
                {service.buttonText} <CaretRight size={18} />
              </Link>

              {/* Decorative Side Accent */}
              <div className="absolute bottom-10 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-white/10 to-transparent group-hover:via-secondary/50 transition-all" />

              {/* Specific Visual for certain cards */}
              {idx === 0 && (
                <div className="absolute bottom-20 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Lightning size={100} className="text-white/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Interactive Element */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-24 flex flex-col items-center gap-8 py-12 border-t border-white/5"
        >
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-white/20">
              <Lightning size={14} />
              <span className="text-xxs font-black tracking-[0.5em] uppercase">MÁXIMO PODER</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-primary/20" />
            <div className="flex items-center gap-3 text-white/20">
              <Globe size={14} />
              <span className="text-xxs font-black tracking-[0.5em] uppercase">INFRAESTRUCTURA TOTAL</span>
            </div>
          </div>
          <p className="text-gray-400 text-xxs font-black uppercase tracking-[1em] text-center max-w-lg leading-loose opacity-50">
            ENGINEERING LOGISTICS FOR THE MODERN ERA OF COMMERCE IN MAR DEL PLATA
          </p>
        </motion.div>
      </div>
    </section>
  );
}