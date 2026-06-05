'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Zap, Globe, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const EmprendedoresHome = () => {
  const solutions = [
    {
      title: "Soluciones Corporativas",
      description: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala",
      icon: Building2,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
      badge: "Corporativo",
    },
    {
      title: "Envíos Flex MercadoLibre",
      description: "Socio estratégico para potenciar tus ventas con entregas en el día",
      icon: Zap,
      features: ["Cumplimiento de SLAs", "Mejora tu reputación", "Tarifas competitivas", "Soporte Flex dedicado"],
      link: "/servicios/enviosflex",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
      badge: "MercadoLibre",
    },
    {
      title: "Logística E-Commerce",
      description: "Gestión integral de última milla para PyMEs en crecimiento",
      icon: Globe,
      features: ["Integración tecnológica", "Rutas optimizadas", "Flota especializada", "Seguimiento en tiempo real"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
      badge: "PyMEs",
    },
  ];

  return (
    <section className="relative min-h-[100dvh] flex items-center py-20 lg:py-32 px-4 overflow-hidden bg-transparent">
      {/* Background Decorative Tech Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02]">
        <Image
          src="/hero/delivery_background.jpeg"
          alt="Background Delivery"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-primary/10 border border-primary/20 text-primary text-xxs font-black tracking-[0.4em] mb-10 uppercase"
            >
              <Building2 size={16} className="animate-pulse" /> Soluciones Corporativas y PyME
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-headline-lg-mobile md:text-display-lg text-foreground font-bold uppercase"
            >
              Potencia tu <span className="text-primary">Logística</span> <br />
              con <span className="text-secondary-container text-secondary font-black">DosRuedas</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:border-l lg:border-outline-variant lg:pl-12"
          >
            <p className="text-muted-foreground text-body-lg mb-10">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-primary text-headline-md font-bold uppercase">500+</span>
                <span className="text-label-sm text-muted-foreground uppercase">Empresas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-secondary text-headline-md font-bold uppercase">24/7</span>
                <span className="text-label-sm text-muted-foreground uppercase">Operativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              className="group relative h-full rounded-3xl overflow-hidden border border-outline-variant bg-card hover:border-primary/40 transition-all duration-500 shadow-md hover:shadow-lg flex flex-col justify-between"
            >
              <div className="relative w-full h-48 sm:h-56">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm bg-card border border-outline-variant text-[9px] font-black text-primary uppercase tracking-[0.2em] shadow-sm">
                    {solution.badge}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-surface-variant/40 border border-outline-variant flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground shadow-sm">
                    <solution.icon size={24} />
                  </div>

                  <h3 className="text-headline-md text-foreground font-semibold mb-4 uppercase group-hover:text-primary transition-colors">
                    {solution.title}
                  </h3>

                  <p className="text-muted-foreground text-body-md mb-6">
                    {solution.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {solution.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-label-sm text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <CheckCircle2 size={12} className="text-primary" />
                        </div>
                        <span className="uppercase">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={solution.link}
                  className="group/btn w-full py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 text-label-md text-center flex items-center justify-center gap-4 uppercase shadow-sm active:scale-95 font-semibold"
                >
                  CONFIGURAR PLAN <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Floor Element */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent opacity-50" />
    </section>
  );
};