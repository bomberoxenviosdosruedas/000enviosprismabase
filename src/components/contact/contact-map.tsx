'use client';

import { ExternalLink, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from "framer-motion";

export function ContactMap() {
  const openInOSM = () => {
    const osmUrl = `https://www.openstreetmap.org/search?query=Mar%20del%20Plata`;
    window.open(osmUrl, '_blank');
  };

  return (
    <section className="py-12 md:py-16 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-xl mb-4"
          >
            <MapPin className="w-5 h-5 text-primary mr-2" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider font-sans">Ubicación</span>
          </motion.div>
          <h2 className="text-headline-lg-mobile md:text-display-md italic uppercase text-white mb-4">
            Nuestra Zona de Cobertura
          </h2>
          <p className="text-gray-400 text-body-lg max-w-xl mx-auto">
            Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative h-[50vh] md:h-[60vh] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[background]/60 backdrop-blur-md"
        >
          <iframe 
            src="https://www.openstreetmap.org/export/embed.html?bbox=-57.8,-38.15,-57.4,-37.85&layer=mapnik"
            width="100%" 
            height="100%" 
            style={{ border:0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de cobertura de Envios DosRuedas en Mar del Plata"
            className="grayscale contrast-[1.1] invert dark:invert-0 dark:grayscale-0"
          ></iframe>
        </motion.div>
        <div className="text-center mt-8">
          <Button onClick={openInOSM} variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-black font-display font-black text-orbitron tracking-wider rounded-xl uppercase py-4 h-auto">
            <ExternalLink className="mr-2 h-4 w-4" />
            Ver en OpenStreetMap
          </Button>
        </div>
      </div>
    </section>
  );
}
