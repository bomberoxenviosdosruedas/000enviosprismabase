"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRightCircle, Calculator } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/browser';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
};

interface EntrepreneurPricingRangesProps {
  priceRanges: PriceRangeClient[];
}


export function EntrepreneurPricingRanges({ priceRanges }: EntrepreneurPricingRangesProps) {
  const entrepreneurTiers = [
    {
      name: "3PL Fulfillment",
      price: "$6.000",
      distanceRange: "Tarifa Plana Same Day",
      description: "Incluye almacenamiento, picking y embalaje básico.",
      features: [
        "Cobranza contra-reembolso bonificada",
        "Rechazos devueltos sin cargo",
        "Control de stock incluido",
      ],
      badgeText: "Plan E-Commerce",
    },
    {
      name: "Plan 24HS",
      price: "$3.800",
      distanceRange: "Next Day (Retiro hoy)",
      description: "Tarifas decrecientes: Pro $3.500 | Elite $3.200 | Partner $3.000",
      features: [
        "20% OFF usando Drop-Off",
        "Entrega garantizada < 24hs",
        "Ideal para grandes volúmenes",
      ],
      badgeText: "Plan Escala",
    },
    {
      name: "Cta. Cte. Flexible",
      price: "Híbrido",
      distanceRange: "LowCost + Beneficios Express",
      description: "Pagá tarifas LowCost pero con prioridad de gestión.",
      features: [
        "Corte extendido hasta 15:00 hs",
        "Elección de rango horario",
        "Facturación mensual centralizada",
      ],
      badgeText: "Plan Corporativo",
    },
  ];

  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-black italic mb-6 uppercase text-slate-900 tracking-tighter">
              PLANES 3PL Y <span className="text-primary">SOLUCIONES E-COMMERCE</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-lg max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
              Elegí el plan que mejor se adapte al volumen de tu negocio. Desde almacenamiento hasta ruteo masivo.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {entrepreneurTiers.map((tier, index) => {
            return (
               <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
              >
                  <Card className="relative bg-white/5 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                      <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-xxs font-bold uppercase tracking-widest">
                          {tier.badgeText}
                      </Badge>

                      <CardHeader className="text-center pt-12 pb-6">
                          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                              <Coins className="w-8 h-8 text-primary" />
                          </div>
                          <CardTitle className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-slate-900 uppercase tracking-tight">
                              {tier.name}
                          </CardTitle>
                          <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                              {tier.distanceRange}
                          </p>
                          <div className="text-4xl font-black text-slate-900 mt-6 font-[family-name:var(--font-orbitron)] italic tracking-tighter">
                              {tier.price}
                          </div>
                      </CardHeader>

                      <CardContent className="flex-grow pb-12">
                          <p className="text-gray-400 mb-8 text-center text-sm font-[family-name:var(--font-roboto)] leading-relaxed">
                              {tier.description}
                          </p>
                          <ul className="space-y-4 font-[family-name:var(--font-roboto)]">
                              {tier.features.map((feature, featureIndex) => (
                                  <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                                      <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                                      {feature}
                                  </li>
                              ))}
                          </ul>
                      </CardContent>
                  </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
