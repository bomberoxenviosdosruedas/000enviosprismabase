import Link from 'next/link';
import { Play, ArrowRight, ShieldCheck, Zap, Globe } from 'lucide-react';
import { HeroBackground } from './hero-background';
import { HeroVisuals } from './hero-visuals';

export default function HeroAnimado() {
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center pt-24 pb-12 lg:pt-32 lg:pb-16 px-4 overflow-hidden bg-transparent">
      {/* Background Parallax - Client Component */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Badge - Animation with CSS */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-primary/5 border border-primary/15 text-primary text-xxs font-black tracking-[0.2em] mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Tu Solución Confiable
          </div>

          <h1 className="text-headline-lg-mobile md:text-display-lg mb-4 xl:mb-6 uppercase text-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
            Mensajería y <span className="text-primary">Logística E-Commerce</span> en <span className="text-secondary italic font-bold">Mar del Plata</span>
          </h1>

          <p className="text-muted-foreground text-body-lg mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Mensajería y delivery rápido, seguro y económico en Mar del Plata. Soluciones logísticas a la medida de tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-10 py-5 bg-secondary-container hover:bg-secondary-container/90 text-primary text-label-md rounded-xl transition-all shadow-cta hover:shadow-lg hover:-translate-y-0.5 uppercase overflow-hidden active:scale-95 font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-foreground/80 hover:text-primary transition-colors py-2 font-medium"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-variant/40 border border-outline-variant flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all group-hover:scale-110 shadow-sm" aria-hidden="true">
                <Play className="fill-primary text-primary ml-1" size={18} />
              </div>
              <span className="text-xs uppercase tracking-wider">Ver Servicios</span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
            <div className="flex items-center gap-2 text-label-sm uppercase text-muted-foreground font-semibold">
              <ShieldCheck size={14} className="text-primary" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-muted-foreground font-semibold">
              <Zap size={14} className="text-tertiary" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-muted-foreground font-semibold">
              <Globe size={14} className="text-primary" /> COBERTURA TOTAL
            </div>
          </div>
        </div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

    </section>
  );
}