'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CaretRight, Clock, Cursor, Lightning, Package, Truck } from '@phosphor-icons/react';
import Link from 'next/link';
import { cn } from "@/lib/utils";

// Definición de tipos para la tematización semántica
type ServiceTheme = {
  card: string;
  icon: string;
  accent: string;
  text: string;
  desc: string;
  button: string;
  badge?: string;
  accentColor: string;
  glowColor: string;
};

const THEMES: Record<string, ServiceTheme> = {
  express: {
    card: "bg-white border-blue-100 hover:border-blue-200 shadow-xl",
    icon: "bg-blue-50 border border-blue-100 text-blue-600",
    accent: "text-blue-600",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-blue-600",
    badge: "bg-blue-50 text-blue-600 border-blue-100",
    accentColor: "blue-600",
    glowColor: "rgba(37,99,235,0.05)"
  },
  lowcost: {
    card: "bg-white border-blue-100 hover:border-blue-200 shadow-xl",
    icon: "bg-blue-50 border border-blue-100 text-blue-500",
    accent: "text-blue-500",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-foreground",
    button: "text-muted-foreground hover:text-foreground group-hover:text-blue-500",
    badge: "bg-blue-50 text-blue-500 border-blue-100",
    accentColor: "blue-500",
    glowColor: "rgba(59,130,246,0.05)"
  },
  meli: {
    card: "bg-white border-blue-100 hover:border-blue-200 shadow-xl",
    icon: "bg-blue-50 border border-blue-100 text-blue-700",
    accent: "text-blue-700",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-blue-700",
    button: "text-muted-foreground hover:text-foreground group-hover:text-blue-700",
    badge: "bg-blue-50 text-blue-700 border-blue-100",
    accentColor: "blue-700",
    glowColor: "rgba(29,78,216,0.05)"
  },
  ecommerce: {
    card: "bg-white border-blue-100 hover:border-blue-200 shadow-xl",
    icon: "bg-blue-50 border border-blue-100 text-blue-800",
    accent: "text-blue-800",
    text: "text-foreground",
    desc: "text-muted-foreground [&>span]:text-blue-800",
    button: "text-muted-foreground hover:text-foreground group-hover:text-blue-800",
    badge: "bg-blue-50 text-blue-800 border-blue-100",
    accentColor: "blue-800",
    glowColor: "rgba(30,64,175,0.05)"
  }
};

export const ServicesOverview = () => {
  const services = [
    {
      theme: "express",
      title: "Envíos Express",
      bajada: "Prioridad absoluta y certeza total.",
      desc: <>Diseñado para operaciones de alta criticidad horaria. <span className="font-bold">Vos elegís el rango exacto</span> de entrega con solo 2 horas de anticipación.</>,
      icon: <Lightning />,
      href: "/servicios/envios-express",
      buttonText: "Solicitar Express",
      badge: "ALTA PRIORIDAD",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "lowcost",
      title: "Envíos LowCost",
      bajada: "Rentabilidad y ruteo masivo.",
      desc: <>Variabilizá tus costos logísticos. <span className="font-bold">Ingresá tus pedidos</span> antes de las 13:00 hs y garantizamos entrega en el día.</>,
      icon: <Clock />,
      href: "/servicios/envios-lowcost",
      buttonText: "Ahorrá con LowCost",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "meli",
      title: "Envíos Flex (MercadoLibre)",
      bajada: "Potenciá tu reputación al máximo.",
      desc: <>Somos expertos en MercadoLibre. Cumplimos tus <span className="font-bold">acuerdos de nivel de servicio (SLAs) Same-Day</span> para que tu termómetro esté en verde.</>,
      icon: <Package />,
      href: "/servicios/enviosflex",
      buttonText: "Activar Envíos Flex",
      className: "md:col-span-2 md:row-span-1"
    },
    {
      theme: "ecommerce",
      title: "E-Commerce & 3PL",
      bajada: "Tercerización y cuentas corrientes.",
      desc: <>Más que un envío, somos tu depósito. <span className="font-bold">Soluciones escalables</span> para PyMEs con facturación mensual centralizada.</>,
      icon: <Truck />,
      href: "/servicios/plan-emprendedores",
      buttonText: "Hablar con un asesor",
      className: "md:col-span-2 md:row-span-1"
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.98 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-blue-50 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-200/20 blur-[160px] pointer-events-none opacity-50" />

      {/* Section Transition Lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-white border border-blue-200 text-blue-600 text-xxs font-black tracking-[0.2em] mb-8 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Nuestros Servicios
            </div>
            <h2 className="text-headline-lg-mobile md:text-display-lg italic uppercase text-foreground">
              Soluciones <br />
              <span className="text-primary">Logísticas</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-md lg:border-l lg:border-blue-200 lg:pl-10"
          >
            <p className="text-muted-foreground text-body-lg">
              Infraestructura moderna para negocios que no se detienen. Inteligencia aplicada a cada kilómetro.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, idx) => {
            const theme = THEMES[service.theme as keyof typeof THEMES];
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={cn(
                  "group p-6 lg:p-10 rounded-xl lg:rounded-xl transition-all duration-500 flex flex-col justify-between relative overflow-hidden bg-white border border-blue-100 hover:border-blue-200 shadow-xl",
                  service.className
                )}
              >
                {/* Background Highlight on Hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${theme.glowColor}, transparent)` }}
                />

                <div className="relative z-10">
                  <div className={cn(
                    "w-12 h-12 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl flex items-center justify-center mb-6 lg:mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6",
                    theme.icon
                  )}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>

                  <h3 className={cn("text-headline-md mb-1 uppercase", theme.text)}>
                    {service.title}
                  </h3>
                  <p className={cn("text-label-sm uppercase mb-4", theme.accent)}>
                    {service.bajada}
                  </p>
                  <div className={cn("text-body-md mb-6 max-w-[320px]", theme.desc)}>
                    {service.desc}
                  </div>
                </div>

                <div className="relative z-10 flex items-center justify-between">
                  <Link
                    href={service.href}
                    className={cn("flex items-center gap-3 text-label-md transition-all", theme.button)}
                  >
                    {service.buttonText} <CaretRight size={16} />
                  </Link>

                  {service.badge && (
                    <div className={cn("hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full text-[9px] font-black tracking-widest uppercase border", theme.badge)}>
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Decorative side border accent */}
                <div className={cn("absolute top-1/2 -right-1 w-[2px] h-20 bg-gradient-to-b from-transparent via-blue-200 to-transparent group-hover:via-current transition-all", theme.accent)} />

                {/* Specific Visual for the first card */}
                {idx === 0 && (
                  <div className="absolute top-10 right-10 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true">
                    <Cursor size={120} className="rotate-12 text-blue-200" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
