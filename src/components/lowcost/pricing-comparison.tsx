"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import type { PriceRange } from '../../../generated/prisma/client';

export type PriceRangeClient = Omit<PriceRange, 'distanciaMinKm' | 'distanciaMaxKm' | 'precioRango'> & {
  distanciaMinKm: number;
  distanciaMaxKm: number;
  precioRango: number;
  nombreZona?: string;
};

interface PricingComparisonProps {
  priceRanges: PriceRangeClient[];
}

export function PricingComparison({ priceRanges }: PricingComparisonProps) {
  const displayedPriceRanges = priceRanges.slice(0, 4);

  const staticData = [
    {
      description: "La mejor tarifa para ruteo en el centro",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Cobertura extendida económica",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Llegamos a toda la ciudad al mejor costo",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
    {
      description: "Máximo ahorro en distancias largas",
      features: ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"],
    },
  ];

  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, necesito cotizar un envío Low Cost de más de 13 km.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="pricing-comparison" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-display-md font-black italic mb-6 uppercase text-foreground tracking-tighter">
              TARIFAS 2026 <span className="text-primary">ENVÍOS LOWCOST</span>
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto mb-8 rounded-full" />
            <p className="text-gray-400 text-body-lg max-w-2xl mx-auto font-sans">
              Eficiencia en ruteo masivo. Garantizamos entregas antes de las 19:00 hs para pedidos antes de las 13:00 hs.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedPriceRanges.map((range, index) => (
            <motion.div
              key={range.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="relative bg-[background]/60 border-white/10 backdrop-blur-md hover:border-primary/50 transition-all duration-300 rounded-3xl overflow-hidden h-full flex flex-col group">
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-primary/30 py-1 px-3 rounded-full text-xxs font-bold uppercase tracking-widest">
                  Tarifa 2026
                </Badge>

                <CardHeader className="text-center pt-12 pb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-display text-headline-lg font-bold text-foreground uppercase tracking-tight">
                    {range.nombreZona || `Zona ${index + 1}`}
                  </CardTitle>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">
                    {index === 0 ? "Radio céntrico" : index === 1 ? "Periferia cercana" : index === 2 ? "Zonas alejadas" : "Límites de ciudad"}
                  </p>
                  <div className="text-4xl font-black text-foreground mt-6 font-display italic tracking-tighter">
                    ${range.precioRango.toLocaleString('es-AR')}
                  </div>
                </CardHeader>

                <CardContent className="flex-grow pb-12">
                  <p className="text-gray-400 mb-8 text-center text-body-md font-sans leading-relaxed">
                    {staticData[index]?.description || "Eficiencia en ruteo masivo"}
                  </p>
                  <ul className="space-y-4 font-sans">
                    {(staticData[index]?.features || ["Eficiencia en ruteo", "Corte 13:00 hs", "Entrega antes 19:00 hs"]).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-body-md">
                        <ArrowRightCircle className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="bg-[background]/60 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-label-sm font-bold tracking-widest mb-6 uppercase">
                  COTIZACIÓN ESPECIAL
                </div>
                <h3 className="font-display text-display-md font-black text-foreground uppercase tracking-tighter mb-4 italic">
                  ZONA 5: <span className="text-secondary">$700 / KM</span>
                </h3>
                <p className="text-gray-400 font-sans leading-relaxed text-body-lg">
                  Para envíos de larga distancia fuera del ejido urbano masivo, ofrecemos la tarifa más competitiva por kilómetro.
                </p>
              </div>
              <div className="flex justify-center md:justify-end">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-secondary hover:bg-yellow-400 text-black font-display font-black px-10 py-6 rounded-xl transition-all uppercase tracking-tight shadow-[0_0_20px_rgba(251,191,36,0.3)] h-auto text-label-md"
                >
                  <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={24} height={24} className="w-6 h-6 mr-3" />
                  CONSULTAR POR WHATSAPP
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
