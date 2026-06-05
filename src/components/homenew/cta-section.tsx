'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calculator, ArrowRight, ShieldCheck, Clock, MousePointer2 } from 'lucide-react';
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
          className="object-cover opacity-[0.03] grayscale"
        />

        {/* Static Background Highlight (Performance) */}
        <div
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full"
        />

        {/* Tech grid overlay */}
        <div className="absolute inset-0 tech-grid-overlay" />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-20 rounded-3xl bg-primary text-primary-foreground overflow-hidden shadow-lg border border-primary-foreground/10 group"
        >
          {/* Internal Glow Effects */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-foreground/5 blur-[80px] rounded-full group-hover:bg-primary-foreground/10 transition-all duration-1000" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-tertiary/5 blur-[80px] rounded-full" />

          <div className="relative z-10 text-center">
            <h2 className="text-headline-lg-mobile md:text-display-lg text-primary-foreground mb-8 uppercase font-bold">
              ¿Listo para escalar la <br />
              <span className="text-secondary-container">logística de tu E-Commerce?</span>
            </h2>

            <p className="text-primary-foreground/80 text-body-lg mb-12 max-w-4xl mx-auto opacity-90">
              <span className="font-bold">Olvidate de la gestión de paquetes</span> y enfocate en vender más. Dejá la distribución urbana en manos de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                href="https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web."
                aria-label="Contactanos por WhatsApp para servicios logísticos"
                className="group w-full sm:w-auto px-8 py-4 bg-secondary-container text-primary hover:bg-secondary-container/90 font-semibold text-label-md rounded-xl transition-all shadow-cta flex items-center justify-center gap-4 uppercase"
              >
                Contactanos por WhatsApp <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/tarifas"
                className="group w-full sm:w-auto px-8 py-4 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 text-label-md rounded-xl transition-all flex items-center justify-center gap-4 uppercase font-semibold"
              >
                Ver Tarifas 2026 <Calculator size={20} />
              </Link>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 pt-12 border-t border-primary-foreground/10">
              {[
                { icon: <Clock aria-hidden="true" />, text: "Confianza local comprobada" },
                { icon: <ShieldCheck aria-hidden="true" />, text: "Innovación constante en última milla" },
                { icon: <MousePointer2 aria-hidden="true" />, text: "Flota dedicada para máxima agilidad" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-4 text-label-sm text-primary-foreground/80 uppercase">
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center text-primary-container">
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