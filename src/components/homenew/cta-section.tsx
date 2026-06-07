'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Clock, Cursor, Lightning, ShieldCheck } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 bg-transparent overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero/abstracto_background.jpeg"
          alt="Background Abstracto"
          fill
          className="object-cover opacity-[0.07] grayscale"
        />
        <div className="absolute inset-0 bg-radial-gradient-blue" />
        <div className="absolute inset-0 bg-radial-gradient-yellow" />

        {/* Static Background Highlight (Performance) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-24 rounded-xl primary-gradient-bg overflow-hidden glow-blue group border border-white/10"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[80px] rounded-full group-hover:bg-white/20 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-yellow-400/10 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card text-white text-xxs font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Lightning size={16} className="fill-yellow-400 text-yellow-400 animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-headline-lg-mobile md:text-display-lg text-white mb-10 uppercase italic">
              ¿Listo para escalar la <br />
              <span className="text-secondary drop-shadow-2xl">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-gray-300 text-body-lg mb-16 max-w-4xl mx-auto opacity-80">
              <span className="font-bold">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-12 py-6 bg-secondary text-primary text-label-md rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 flex items-center justify-center gap-4 uppercase"
              >
                Contactanos por WhatsApp <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tarifas"
                className="w-full sm:w-auto px-12 py-6 bg-white/5 border border-white/10 text-white text-label-md rounded-2xl transition-all backdrop-blur-md flex items-center justify-center gap-4 hover:bg-white/10 uppercase"
              >
                Ver Tarifas 2026 <Calculator size={22} />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-white/10">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <Cursor aria-hidden="true" />, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-blue-100/50 uppercase">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white transition-all">
                    {React.cloneElement(item.icon as React.ReactElement<{ size?: number; className?: string; fill?: string }>, { size: 18 })}
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};