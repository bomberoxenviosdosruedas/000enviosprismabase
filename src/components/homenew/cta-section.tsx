'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Clock, Cursor, Lightning, ShieldCheck } from '@phosphor-icons/react';
import Link from 'next/link';

export const CtaSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-20 lg:py-32 px-4 bg-blue-50 overflow-hidden">
      {/* High-End Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-blue-100/50" />

        {/* Static Background Highlight (Performance) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/50 blur-[150px] rounded-full"
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-24 rounded-3xl bg-white shadow-2xl border border-blue-100 overflow-hidden group"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 blur-[80px] rounded-full group-hover:bg-blue-200 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-100 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xxs font-black tracking-[0.4em] mb-12 uppercase"
            >
              <Lightning size={16} className="text-blue-500 animate-pulse" /> ¡Empezá Ahora!
            </motion.div>

            <h2 className="text-headline-lg-mobile md:text-display-lg text-foreground mb-10 uppercase italic">
              ¿Listo para escalar la <br />
              <span className="text-blue-600">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-muted-foreground text-body-lg mb-16 max-w-4xl mx-auto">
              <span className="font-bold text-foreground">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-12 py-6 bg-blue-600 text-white text-label-md rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-4 uppercase"
              >
                Contactanos por WhatsApp <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tarifas"
                className="w-full sm:w-auto px-12 py-6 bg-blue-50 border border-blue-100 text-blue-600 text-label-md rounded-2xl transition-all flex items-center justify-center gap-4 hover:bg-blue-100 uppercase"
              >
                Ver Tarifas 2026 <Calculator size={22} />
              </Link>
            </div>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-16 border-t border-blue-100">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <Cursor aria-hidden="true" />, text: "Motocicletas dedicadas para máxima agilidad urbana" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-muted-foreground uppercase">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
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
