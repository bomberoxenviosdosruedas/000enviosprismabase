'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Cursor, Globe, Lightning, Play, ShieldCheck } from '@phosphor-icons/react';
import Image from 'next/image';

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  const features = [
    { icon: <Lightning className="text-secondary" />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck className="text-primary" />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-secondary" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-primary" },
    { label: "Motocicletas dedicadas para máxima agilidad urbana", value: "Flota Exclusiva", color: "text-blue-600" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-blue-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">

          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-blue-200 text-blue-600 text-xxs font-black tracking-[0.3em] mb-10 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Partner Logístico Especializado
            </div>

            <h2 className="text-headline-lg-mobile md:text-display-lg mb-10 uppercase text-foreground">
              Nuestra Visión <br />
              <span className="text-primary italic">Logística</span>
            </h2>

            <p className="text-muted-foreground text-body-lg mb-12 max-w-2xl">
              Transformamos <span className="font-bold text-foreground">tus costos fijos en solutions flexibles</span> que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-50 group-hover:border-primary/50 transition-all shadow-sm">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-headline-md text-sm text-foreground uppercase mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-body-md text-xs">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t border-blue-200">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={`text-headline-lg-mobile md:text-headline-lg ${stat.color} tracking-tighter italic leading-tight`}>
                    {stat.value}
                  </span>
                  <span className="text-label-sm text-muted-foreground uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-full border border-blue-200 items-center justify-center text-blue-600/40"
              >
                <Globe size={24} />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 relative"
            style={{ scale, y }}
          >
            {/* Visual Frame */}
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden group border border-blue-100 shadow-[0_20px_50px_-10px_rgba(37,99,235,0.15)] bg-white">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-110 filter brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent" />

              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-10 left-8 right-8 p-10 rounded-xl bg-white/60 backdrop-blur-md border border-white/50 flex items-center justify-between group-hover:bg-white/80 transition-all duration-700 shadow-xl">
                <div>
                  <h3 className="font-display text-2xl font-black text-foreground uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-3 text-xxs text-blue-600 font-black tracking-[0.2em] uppercase">
                    <CheckCircle size={14} className="animate-pulse" aria-hidden="true" /> ¿Listo para formar parte de nuestra familia?
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 12 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Ir a página sobre nosotros"
                  className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-lg hover:bg-blue-600 transition-all"
                  onClick={() => window.location.href = '/nosotros/sobre-nosotros'}
                >
                  <Play size={24} fill="currentColor" className="ml-1" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-10 right-10 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded-lg bg-blue-100 backdrop-blur-md border border-blue-200 text-[9px] font-black text-blue-600 uppercase tracking-widest flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                  EN LÍNEA
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-blue-300 to-transparent mr-4" />
              </div>
            </div>

            {/* Background Light Leaks */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-blue-200/50 rounded-full blur-[120px] opacity-50" />
            <div className="absolute -z-10 -top-20 -left-20 w-[300px] h-[300px] bg-yellow-100/50 rounded-full blur-[100px] opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
