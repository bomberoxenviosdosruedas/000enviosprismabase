'use client';
import React from 'react';
import { ArrowUpRight, Envelope, Globe, Lightning, MapPin, Phone, ShieldCheck, Truck } from '@phosphor-icons/react';
import Link from 'next/link';
import Image from 'next/image';
import { FooterSocialLinks } from './footer-social-links';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    empresa: [
      { label: "Sobre Nosotros", href: "/nosotros/sobre-nosotros" },
      { label: "Preguntas Frecuentes", href: "/nosotros/preguntas-frecuentes" },
      { label: "Nuestras Redes", href: "/nosotros/nuestras-redes" },
      { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
      { label: "Política de Privacidad", href: "/politica-de-privacidad" }
    ],
    servicios: [
      { label: "Envíos Express", href: "/servicios/envios-express" },
      { label: "Envíos LowCost", href: "/servicios/envios-lowcost" },
      { label: "Envíos Flex (MeLi)", href: "/servicios/enviosflex" },
      { label: "E-Commerce & 3PL", href: "/servicios/plan-emprendedores" }
    ]
  };

  return (
    <footer className="pt-32 pb-16 px-4 border-t border-blue-200 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full blur-[120px] pointer-events-none opacity-50" />
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-50 rounded-full blur-[100px] pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-24 mb-24">

          {/* Brand Identity */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 group shrink-0" aria-label="Volver al inicio desde el pie de página">
              <div className="relative w-12 h-12 sm:h-14 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:rotate-6 group-hover:scale-110">
                <Image src="/LogoEnviosDosRuedas.webp" alt="Logo Dos Ruedas" fill className="object-contain" sizes="(max-width: 640px) 48px, 56px" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-bold text-xl sm:text-2xl lg:text-3xl tracking-tighter text-foreground uppercase leading-none mb-1">
                  Envios DosRuedas
                </span>
                <span className="text-blue-600 text-xxs sm:text-sm lg:text-base uppercase italic tracking-[0.15em] leading-none">
                  tu solución confiable
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-base mb-12 leading-relaxed font-light max-w-sm">
              Tu solución confiable para mensajería y delivery en Mar del Plata. Servicios rápidos, seguros y económicos.
            </p>

            <FooterSocialLinks
              links={[
                { icon: "/icons/instagram.svg", href: "https://instagram.com/enviosdosruedas", label: "Instagram en el pie de página" },
                { icon: "/icons/facebook.svg", href: "https://facebook.com/enviosdosruedas", label: "Facebook en el pie de página" },
                { icon: "/icons/whatsapp.svg", href: "https://wa.me/542236602699", label: "WhatsApp en el pie de página" },
                { icon: "/icons/google.svg", href: "#", label: "Google en el pie de página" }
              ]}
            />
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-2">
            <h3 className="font-bold mb-10 tracking-[0.3em] text-xxs uppercase text-blue-600">Nosotros</h3>
            <ul className="space-y-6">
              {footerLinks.empresa.slice(0, 3).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-blue-600 transition-all flex items-center gap-3 group text-sm font-light">
                    <div className="w-1 h-1 rounded-full bg-blue-200 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold mb-10 tracking-[0.3em] text-xxs uppercase text-blue-600">Servicios</h3>
            <ul className="space-y-6">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted-foreground hover:text-blue-600 transition-all flex items-center gap-3 group text-sm font-light">
                    <div className="w-1 h-1 rounded-full bg-blue-200 group-hover:bg-blue-600 group-hover:scale-150 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="font-bold mb-10 tracking-[0.3em] text-xxs uppercase text-blue-600">Contacto Rápido</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0 transition-all">
                  <MapPin size={22} className="text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground text-xxs font-black uppercase tracking-widest mb-1 opacity-60">Ubicación</span>
                  <span className="text-muted-foreground text-sm leading-relaxed font-light">Friuli 1972, Mar del Plata</span>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0 transition-all">
                  <Phone size={22} className="text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground text-xxs font-black uppercase tracking-widest mb-1 opacity-60">Teléfono</span>
                  <a href="tel:+542236602699" className="text-muted-foreground hover:text-blue-600 transition-colors font-light text-sm">+54 223 660-2699</a>
                </div>
              </li>

              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-2xl border border-blue-100 bg-blue-50 flex items-center justify-center shrink-0 transition-all">
                  <Envelope size={22} className="text-blue-600" />
                </div>
                <div className="flex flex-col">
                  <span className="text-foreground text-xxs font-black uppercase tracking-widest mb-1 opacity-60">Email</span>
                  <a href="mailto:matiascejas@enviosdosruedas.com" className="text-muted-foreground hover:text-blue-600 transition-colors font-light text-sm">matiascejas@enviosdosruedas.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Stats/Trust Banner */}
        <div className="mb-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-blue-100 bg-blue-50/30">
          {[
            { icon: <ShieldCheck className="text-blue-600" />, label: "SEGURIDAD", value: "CERTIFICADA" },
            { icon: <Lightning className="text-blue-600" />, label: "VELOCIDAD", value: "MÁXIMA" },
            { icon: <Globe className="text-blue-600" />, label: "COBERTURA", value: "DISTRITAL" },
            { icon: <ArrowUpRight className="text-blue-600" />, label: "STATUS", value: "ONLINE" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center gap-2 px-4 border-r border-blue-100 last:border-r-0">
              <div className="opacity-80">{React.cloneElement(item.icon, { size: 20 })}</div>
              <span className="text-[8px] font-black tracking-[0.4em] text-muted-foreground uppercase">{item.label}</span>
              <span className="text-xxs font-black text-foreground uppercase tracking-widest">{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-muted-foreground uppercase tracking-[0.4em] font-black text-center md:text-left">
              © {currentYear} Envios DosRuedas. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-10">
            <Link href="/politica-de-privacidad" className="text-[9px] text-muted-foreground hover:text-blue-600 uppercase tracking-widest font-black transition-colors">Privacidad</Link>
            <Link href="/terminos-y-condiciones" className="text-[9px] text-muted-foreground hover:text-blue-600 uppercase tracking-widest font-black transition-colors">Términos</Link>
            <div className="w-10 h-10 rounded-full border border-blue-100 flex items-center justify-center text-blue-600" aria-hidden="true">
              <Globe size={14} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
