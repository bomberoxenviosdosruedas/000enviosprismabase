'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Camera as Instagram, Share2 as Facebook, MessageCircle as Twitter, ExternalLink, Phone, Heart } from "lucide-react";

const socialNetworks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/enviosdosruedas",
    color: "hsl(45, 93%, 47%)",
    description: "Novedades diarias",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/enviosdosruedas",
    color: "hsl(221.2, 83.2%, 53.3%)",
    description: "Comunidad activa",
  },
  {
    name: "WhatsApp",
    icon: Phone,
    isWhatsApp: true,
    color: "#25D366",
    description: "Atención inmediata",
  },
];

const feedItems = [
  { 
    id: 17, 
    type: 'fb', 
    image: '/redes/fac1.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid0a1i4tygsZQjwp9bsvS9xSHApJqMe5JkeoJbqx12Qvas18nSojtGhj6U9cFn3m5hDl"
  },
  { 
    id: 15, 
    type: 'ig', 
    image: '/redes/ig1.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DJhlS5xOrTb/"
  },
  { 
    id: 7, 
    type: 'ig', 
    image: '/redes/ig3.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DK12WIDslKW/"
  },
  { 
    id: 19, 
    type: 'ig', 
    image: '/redes/ig4.webp',
    postUrl: "https://www.instagram.com/enviosdosruedas/p/DEaAGAmRMKj/"
  },
  { 
    id: 21, 
    type: 'fb', 
    image: '/redes/fac2.webp',
    postUrl: "https://www.facebook.com/enviosdosruedas/posts/pfbid03WPv5ZE93ZNwL5PMRwuTpJxGaGSBzLigJqDSyzATNcSkRT3xBMZz7GKbhPv1mC53l"
  },
];

export const CarruselRedes = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20 lg:py-32 px-6 bg-transparent overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/2 bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tighter">
              SIGUE NUESTRO <span className="text-primary">MOVIMIENTO</span>
            </h2>
            <p className="text-muted-foreground text-lg mt-4 max-w-xl">
              Únete a nuestra comunidad digital y mantente al día con las últimas noticias de logística en Mar del Plata.
            </p>
          </div>

          <div className="flex gap-4">
            {socialNetworks.map((net, idx) => (
              <button
                key={idx}
                onClick={net.isWhatsApp ? handleWhatsAppClick : () => window.open(net.href, "_blank")}
                className="group flex items-center gap-4 p-4 rounded bg-card border border-outline-variant hover:border-primary/40 transition-all shadow-sm hover:shadow-md text-foreground"
                aria-label={`Seguinos en ${net.name}`}
              >
                <div
                  className="w-12 h-12 rounded-md flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${net.color}15`, color: net.color }}
                  aria-hidden="true"
                >
                  <net.icon size={24} />
                </div>
                <div className="text-left hidden lg:block">
                  <div className="text-sm font-bold uppercase tracking-tight text-foreground/80 group-hover:text-primary transition-colors">{net.name}</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest">{net.description}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="relative group/carousel">
          <div className="flex gap-6 w-fit overflow-hidden py-10">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -1000] }}
              transition={{ repeat: Infinity, duration: 40, ease: "linear" as any }}
              whileHover={{ animationPlayState: 'paused' }}
            >
              {[...feedItems, ...feedItems, ...feedItems].map((item, idx) => (
                <a
                  key={idx}
                  href={(item as any).postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-72 h-72 shrink-0 rounded-lg overflow-hidden relative group border border-outline-variant shadow-md transition-all hover:border-primary/40 block"
                  aria-label={`Ver publicación ${item.id} en ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`}
                >
                  <img src={item.image} alt={`Publicación de ${item.type === 'ig' ? 'Instagram' : 'Facebook'}`} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-card/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-6 p-8">
                    <div className="w-12 h-12 rounded bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                      {item.type === 'ig' && <Instagram size={24} />}
                      {item.type === 'fb' && <Facebook size={24} />}
                    </div>
                    <div className="text-center">
                      <div className="text-foreground font-bold uppercase tracking-tight mb-2 text-sm">VER POST</div>
                      <ExternalLink size={20} className="text-primary mx-auto" />
                    </div>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Side Gradients */}
          <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};
