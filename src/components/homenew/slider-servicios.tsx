'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Package, Truck, Clock, ChevronRight, Zap, Globe } from 'lucide-react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Envíos Express",
    bajada: "Prioridad absoluta y certeza total.",
    desc: "Diseñado para operaciones de alta criticidad horaria. Vos elegís el rango exacto de entrega con solo 2 horas de anticipación. Garantizamos precisión en el tiempo de tu cliente final.",
    icon: <Zap />,
    theme: { bg: "bg-error-container", text: "text-on-error-container", border: "border-error-container/30", accent: "text-error" },
    href: "/servicios/envios-express",
    badge: "ALTA PRIORIDAD",
    buttonText: "Solicitar Express"
  },
  {
    title: "Envíos LowCost",
    bajada: "Máxima rentabilidad y eficiencia en ruteo masivo.",
    desc: "Variabilizá tus costos logísticos. Ingresá tus pedidos antes de las 13:00 hs y te garantizamos la entrega en el día antes de las 19:00 hs.",
    icon: <Clock />,
    theme: { bg: "bg-secondary-container", text: "text-on-secondary-container", border: "border-secondary-container/30", accent: "text-secondary" },
    href: "/servicios/envios-lowcost",
    badge: "RENTABILIDAD",
    buttonText: "Ahorrá con LowCost"
  },
  {
    title: "Envíos Flex (MercadoLibre)",
    bajada: "Potenciá tu reputación al máximo.",
    desc: "Somos expertos en MercadoLibre. Despachá hasta las 15:00 hs y nosotros cumplimos tus acuerdos de nivel de servicio (SLAs) Same-Day para que tu termómetro siempre esté en verde.",
    icon: <Package />,
    theme: { bg: "bg-primary-container", text: "text-on-primary-container", border: "border-primary-container/30", accent: "text-primary" },
    href: "/servicios/enviosflex",
    badge: "MERCADOLIBRE",
    buttonText: "Activar Envíos Flex"
  },
  {
    title: "E-Commerce & 3PL",
    bajada: "Tercerización integral y cuentas corrientes.",
    desc: "Más que un envío, somos tu depósito y tu equipo. Soluciones escalables para PyMEs y plataformas digitales, con facturación mensual centralizada.",
    icon: <Truck />,
    theme: { bg: "bg-tertiary-container", text: "text-on-tertiary-container", border: "border-tertiary-container/30", accent: "text-tertiary" },
    href: "/servicios/plan-emprendedores",
    badge: "INTEGRAL",
    buttonText: "Hablar con un asesor"
  }
];

export default function SliderServicios() {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-transparent overflow-hidden">
      {/* Tech lines background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full tech-grid-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tighter mb-4">
              SOLUCIONES A <span className="text-primary">MEDIDA</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-md lg:border-l lg:border-outline-variant lg:pl-10"
          >
            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
              Hemos redefinido los estándares de la logística urbana para ofrecerte una ventaja competitiva real en un mercado en constante evolución.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group p-6 md:p-8 rounded-3xl bg-card border border-outline-variant hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col min-h-[420px] h-auto shadow-md hover:shadow-lg"
            >
              {/* Internal Accent Light */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 blur-[40px] rounded-full group-hover:bg-primary/5 transition-all duration-700" />

              <div
                className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-sm border",
                  service.theme.bg,
                  service.theme.text,
                  service.theme.border
                )}
              >
                {React.cloneElement(service.icon, { size: 24 })}
              </div>

              <div className="mb-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[9px] font-black text-muted-foreground/80 uppercase tracking-[0.3em]">{service.badge}</span>
                  <div className="h-px w-6 bg-outline-variant/30" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-1 uppercase tracking-tight group-hover:text-primary transition-colors leading-tight">
                  {service.title}
                </h3>
                <p className={cn("text-[10px] font-black uppercase tracking-[0.2em] mb-4", service.theme.accent)}>
                  {service.bajada}
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <Link
                href={service.href}
                className="flex items-center gap-3 text-muted-foreground text-xs font-semibold uppercase tracking-[0.2em] hover:text-primary transition-all pt-4 mt-auto border-t border-outline-variant/30"
              >
                {service.buttonText} <ChevronRight size={16} />
              </Link>

              {/* Decorative Side Accent */}
              <div className="absolute bottom-10 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-outline-variant/30 to-transparent group-hover:via-primary/55 transition-all" />

              {/* Specific Visual for certain cards */}
              {idx === 0 && (
                <div className="absolute bottom-20 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Zap size={100} className="text-muted-foreground/20" />
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
          className="mt-24 flex flex-col items-center gap-8 py-12 border-t border-outline-variant"
        >
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3 text-muted-foreground">
              <Zap size={14} />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase">MÁXIMO PODER</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-outline-variant" />
            <div className="flex items-center gap-3 text-muted-foreground">
              <Globe size={14} />
              <span className="text-[9px] font-black tracking-[0.5em] uppercase">INFRAESTRUCTURA TOTAL</span>
            </div>
          </div>
          <p className="text-muted-foreground text-[8px] font-black uppercase tracking-[1em] text-center max-w-lg leading-loose opacity-60">
            ENGINEERING LOGISTICS FOR THE MODERN ERA OF COMMERCE IN MAR DEL PLATA
          </p>
        </motion.div>
      </div>
    </section>
  );
}