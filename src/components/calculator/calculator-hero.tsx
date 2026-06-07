'use client';

import { HeroSection } from "@/components/ui/HeroSection";

export default function CalculatorHero() {
  return (
    <HeroSection
      preTitle="Cotizador Express"
      title={
        <>
          Cotizador de Envíos <span className="text-secondary">Express</span>
        </>
      }
      description="Calcula el costo de tu envío prioritario al instante. Alta precisión y elección de rango horario."
      ctaButtons={[
        {
          text: "Más Sobre Envíos Express",
          href: "/servicios/envios-express",
          variant: "secondary",
          icon: "ArrowRight"
        }
      ]}
      titleClassName="text-3xl sm:text-4xl md:text-7xl font-black italic tracking-tighter leading-[0.9] mb-8 uppercase text-on-surface font-display"
      descriptionClassName="text-on-surface-variant text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-sans"
    />
  );
}
