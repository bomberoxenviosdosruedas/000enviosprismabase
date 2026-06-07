'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Buildings, CheckCircle, Globe, Lightning } from '@phosphor-icons/react';
import Image from 'next/image';
import Link from 'next/link';

export const EmprendedoresHome = () => {
  const solutions = [
    {
      title: "Soluciones Corporativas",
      description: "Optimización logística para empresas con Cuenta Corriente Flexible y beneficios de escala",
      icon: Buildings,
      features: ["Cuenta Corriente Flexible", "Facturación simplificada", "Gestión multi-usuario", "Reportes de impacto"],
      link: "/servicios/plan-emprendedores",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
      badge: "Corporativo",
    },
    {
      title: "Envíos Flex MercadoLibre",
      description: "Socio estratégico para potenciar tus ventas con entregas en el día",
      icon: Lightning,
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
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05]">
        <Image
          src="/hero/delivery_background.jpeg"
          alt="Background Delivery"
          fill
          className="object-cover"
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] mix-blend-screen" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b82f633_0,transparent_50%)]" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-xxs font-black tracking-[0.4em] mb-10 uppercase backdrop-blur-md"
            >
              <Buildings size={16} className="animate-pulse" /> Soluciones Corporativas y PyME
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-headline-lg-mobile md:text-display-lg italic text-white uppercase"
            >
              Potencia tu <span className="text-primary drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]">Logística</span> <br />
              con <span className="text-secondary drop-shadow-[0_0_15px_rgba(234,179,8,0.2)]">DosRuedas</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:border-l lg:border-white/10 lg:pl-12"
          >
            <p className="text-gray-400 text-body-lg mb-10">
              Transformamos la última milla de tu empresa con una flota ágil y especializada de alta precisión. Beneficios exclusivos para clientes corporativos.
            </p>
            <div className="flex gap-8">
              <div className="flex flex-col gap-1">
                <span className="text-secondary text-headline-md italic uppercase">500+</span>
                <span className="text-label-sm text-gray-500 uppercase">Empresas</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-secondary text-headline-md italic uppercase">24/7</span>
                <span className="text-label-sm text-gray-500 uppercase">Operativa</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto lg:h-[650px]">
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-full rounded-xl overflow-hidden border border-white/5 bg-[background] hover:border-primary/40 transition-all duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-15 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[background] via-[background]/80 to-transparent" />

              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <div className="flex justify-between items-start mb-auto">
                  <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-[9px] font-black text-primary uppercase tracking-[0.3em] shadow-lg">
                    {solution.badge}
                  </span>
                </div>

                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-10 group-hover:bg-primary group-hover:text-slate-900 transition-all duration-500 group-hover:rotate-6 shadow-2xl backdrop-blur-sm">
                  <solution.icon size={32} />
                </div>

                <h3 className="text-headline-md text-white mb-6 uppercase">
                  {solution.title}
                </h3>

                <p className="text-gray-400 text-body-md mb-10">
                  {solution.description}
                </p>

                <div className="space-y-4 mb-12">
                  {solution.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-4 text-label-sm text-gray-400">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <CheckCircle size={12} className="text-primary" />
                      </div>
                      <span className="uppercase">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={solution.link}
                  className="group/btn w-full py-6 rounded-2xl bg-white/5 border border-white/10 text-white text-label-md text-center flex items-center justify-center gap-4 hover:bg-white/10 hover:text-white transition-all duration-500 uppercase shadow-xl backdrop-blur-sm active:scale-95"
                >
                  CONFIGURAR PLAN <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dynamic Floor Element */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50" />
    </section>
  );
};