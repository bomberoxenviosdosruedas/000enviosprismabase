"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle, Calculator, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/browser';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};

interface ExpressPricingRangesProps {
  priceRanges: PriceRangeClient[];
}

export function ExpressPricingRanges({ priceRanges }: ExpressPricingRangesProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);

  const staticData = [
    {
      description: "Ideal para entregas inmediatas en el centro",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Cobertura extendida con rapidez",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Llegamos a donde otros no",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
    {
      description: "Máxima cobertura urbana",
      features: ["Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"],
    },
  ];

  return (
    <section className="py-32 px-4 bg-background relative">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-lg md:text-[60px] font-black italic mb-6 uppercase text-foreground tracking-tighter">
              TARIFAS 2026 <span className="text-primary">ENVÍOS EXPRESS</span>
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-8" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Consultá los precios actualizados para nuestro servicio premium con rango horario a elección.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative bg-[#0a0d16]/60 border-white/10 hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group shadow-xl">
                <Badge className="absolute top-0 right-0 bg-primary text-slate-900 border-none py-1 px-4 rounded-none text-xxs font-bold uppercase tracking-widest">
                  Tarifa 2026
                </Badge>

                <CardHeader className="text-center pt-16 pb-8">
                  <div className="w-16 h-16 bg-slate-800 rounded-none flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors border border-slate-700">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-headline-lg font-bold text-foreground uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </h3>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-2">
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-5xl font-black text-foreground mt-8 font-display italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pb-12 px-8">
                  <p className="text-gray-400 mb-10 text-center text-body-md font-sans leading-relaxed">
                    {staticData[index]?.description || "Servicio premium garantizado"}
                  </p>
                  <ul className="space-y-5 font-sans">
                    {(staticData[index]?.features || ["Elegís rango horario", "Seguimiento real"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 space-y-12">
          {/* Cotizador CTA Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0a0d16]/60 border border-white/10 rounded-3xl overflow-hidden p-8 md:p-16 shadow-2xl relative">
               <div className="grid lg:grid-cols-3 gap-12 items-center">
                  <div className="lg:col-span-2">
                    <div className="inline-flex items-center gap-2 px-4 py-1 bg-secondary text-black text-xxs font-bold tracking-widest mb-6 uppercase">
                      COTIZACIÓN DINÁMICA
                    </div>
                    <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-6 italic">
                      ZONA 5: <span className="text-secondary">$1.000 / KM</span>
                    </h3>
                    <p className="text-gray-400 font-sans text-body-lg leading-relaxed max-w-3xl">
                      Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión.
                    </p>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                     <Button
                      asChild
                      size="lg"
                      className="bg-secondary hover:bg-yellow-400 text-black font-display font-bold px-12 py-8 rounded-xl transition-all uppercase tracking-tight h-auto text-label-md shadow-lg"
                    >
                      <Link href="/cotizar/express">
                        <Calculator className="w-6 h-6 mr-3" />
                        IR AL COTIZADOR
                      </Link>
                    </Button>
                  </div>
               </div>
            </div>
          </motion.div>

          {/* Conditions Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="text-center mb-8">
               <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                  <AlertTriangle className="h-6 w-6 text-primary" />
               </div>
               <h4 className="font-display font-bold text-foreground text-headline-lg uppercase tracking-tight">Condiciones del Servicio Express</h4>
            </div>

            <Accordion type="single" collapsible className="w-full bg-[#0a0d16]/60 border border-white/10 rounded-xl overflow-hidden">
              <AccordionItem value="item-1" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Tiempos y Tolerancia
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Contamos con una tolerancia de 10 minutos en puerta. Es fundamental que el receptor esté disponible para asegurar la eficiencia del servicio.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Recargos por Clima
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  En días de lluvia, se aplica un recargo del 50% sobre el valor del envío para garantizar la seguridad de nuestros repartidores y la protección de tu carga.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10 px-6">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Bultos y Pesos
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  El servicio estándar incluye un bulto de hasta 5kg/40cm. Cada bulto excedente tiene un costo adicional de $1.800.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10 px-6 last:border-0">
                <AccordionTrigger className="text-foreground hover:no-underline font-sans uppercase text-sm font-bold tracking-wider">
                  Anticipación Requerida
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 font-sans leading-relaxed pb-6 text-body-md">
                  Para coordinar un envío express con éxito, solicitamos una anticipación mínima de 2 horas.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
