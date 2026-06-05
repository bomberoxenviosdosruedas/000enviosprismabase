'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, ShieldCheck, CheckCircle2, Play, Globe } from 'lucide-react';
import Image from 'next/image';

export const VisionSection = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [30, 0]);

  const features = [
    { icon: <Zap className="text-tertiary" />, title: "Entregas a Tiempo", text: "Puntualidad garantizada en cada envío" },
    { icon: <ShieldCheck className="text-primary" />, title: "Envíos Seguros", text: "Protección total de tus paquetes" }
  ];

  const stats = [
    { label: "Confianza local comprobada", value: "+5.000", color: "text-primary" },
    { label: "Innovación constante en última milla", value: "7 Años", color: "text-tertiary" },
    { label: "Motocicletas dedicadas para máxima agilidad urbana", value: "Flota Exclusiva", color: "text-secondary" }
  ];

  return (
    <section className="relative min-h-[100dvh] pt-28 pb-16 lg:pt-32 lg:pb-20 px-4 bg-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]">
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
            <h2 className="text-headline-lg-mobile md:text-display-lg mb-10 uppercase text-foreground font-bold">
              Nuestra Visión <br />
              <span className="text-primary">Logística</span>
            </h2>

            <p className="text-muted-foreground text-body-lg mb-12 max-w-2xl">
              Transformamos <span className="font-bold text-foreground">tus costos fijos en soluciones flexibles</span> que acompañan el crecimiento de tu negocio.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
              {features.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-5 group"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-xl bg-surface-variant/40 border border-outline-variant flex items-center justify-center shrink-0 group-hover:bg-card group-hover:border-primary transition-all shadow-sm group-hover:shadow-md">
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-headline-md text-sm text-foreground font-semibold uppercase mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-body-md text-xs">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-16 gap-y-10 pt-10 border-t border-outline-variant">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col max-w-[200px]">
                  <span className={`text-headline-lg-mobile md:text-headline-lg ${stat.color} font-bold tracking-tighter leading-tight`}>
                    {stat.value}
                  </span>
                  <span className="text-label-sm text-muted-foreground uppercase mt-2">
                    {stat.label}
                  </span>
                </div>
              ))}

              <motion.div
                whileHover={{ rotate: 90 }}
                className="hidden md:flex ml-auto w-16 h-16 rounded-xl border border-outline-variant items-center justify-center text-muted-foreground/60 hover:text-primary hover:border-primary transition-colors"
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
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden group border border-outline-variant shadow-lg">
              <Image
                src="/hero/mapa_background.jpeg"
                alt="Vanguardia Logística"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[3000ms] group-hover:scale-105 filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />

              {/* Animated Inner Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              {/* Floating Interactive Hub */}
              <div className="absolute bottom-6 left-6 right-6 p-6 lg:p-8 rounded-2xl bg-card border border-outline-variant flex items-center justify-between transition-all duration-700 shadow-xl">
                <div className="mr-4">
                  <h3 className="font-display text-lg font-bold text-foreground uppercase tracking-tight mb-2">Conocé más sobre nosotros</h3>
                  <div className="flex items-center gap-2 text-xxs text-muted-foreground font-semibold uppercase">
                    <CheckCircle2 size={12} className="text-primary animate-pulse" aria-hidden="true" /> ¿Listo para sumarte?
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Ir a página sobre nosotros"
                  className="w-12 h-12 rounded-xl bg-primary hover:bg-primary/90 flex items-center justify-center text-primary-foreground shadow-md transition-all shrink-0"
                  onClick={() => window.location.href = '/nosotros/sobre-nosotros'}
                >
                  <Play size={20} fill="currentColor" className="ml-0.5" aria-hidden="true" />
                </motion.button>
              </div>

              {/* Holographic Status */}
              <div className="absolute top-6 right-6 flex flex-col items-end gap-3">
                <div className="px-3 py-1.5 rounded-sm bg-primary-container border border-primary-container/20 text-[9px] font-black text-on-primary-container uppercase tracking-widest flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                  EN LÍNEA
                </div>
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent mr-4" />
              </div>
            </div>

            {/* Background Light Leaks */}
            <div className="absolute -z-10 -bottom-20 -right-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] opacity-50" />
            <div className="absolute -z-10 -top-20 -left-20 w-[300px] h-[300px] bg-tertiary/5 rounded-full blur-[100px] opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};