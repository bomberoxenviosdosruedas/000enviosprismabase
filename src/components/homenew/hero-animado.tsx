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
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-[#2563eb]/5 border border-[#2563eb]/15 text-[#2563eb] text-xxs font-black tracking-[0.2em] mb-8 uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000 fill-mode-both">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2563eb] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]"></span>
            </span>
            Tu Solución Confiable
          </div>

          <h1 className="text-headline-lg-mobile md:text-display-lg mb-4 xl:mb-6 uppercase text-white animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
            Mensajería y <span className="text-[#2563eb]">Logística E-Commerce</span> en <span className="text-[#fbc107] italic font-bold">Mar del Plata</span>
          </h1>

          <p className="text-white/80 text-body-lg mb-8 xl:mb-10 max-w-2xl mx-auto lg:mx-0 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Mensajería y delivery rápido, seguro y económico en Mar del Plata. Soluciones logísticas a la medida de tu negocio.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            <Link
              href="/cotizar/express"
              aria-label="Solicitar Servicio de mensajería desde el héroe"
              className="group relative px-10 py-5 bg-[#fbc107] hover:bg-[#fbc107]/90 text-black text-label-md rounded-xl transition-all shadow-cta hover:shadow-lg hover:-translate-y-0.5 uppercase overflow-hidden active:scale-95 font-semibold"
            >
              <span className="relative z-10 flex items-center gap-2">
                Solicitar Servicio <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>

            <Link
              href="/servicios/envios-express"
              aria-label="Ver todos los servicios de envíos"
              className="flex items-center gap-4 group text-white hover:text-[#2563eb] transition-colors py-2 font-medium"
            >
              <div className="w-14 h-14 rounded-xl bg-surface-variant/40 border border-outline-variant flex items-center justify-center group-hover:bg-[#2563eb]/10 group-hover:border-[#2563eb]/20 transition-all group-hover:scale-110 shadow-sm" aria-hidden="true">
                <Play className="fill-[#2563eb] text-[#2563eb] ml-1" size={18} />
              </div>
              <span className="text-xs uppercase tracking-wider">Ver Servicios</span>
            </Link>
          </div>

          <div className="mt-10 lg:mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/80 font-semibold">
              <ShieldCheck size={14} className="text-[#2563eb]" /> 100% SEGURO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/80 font-semibold">
              <Zap size={14} className="text-[#fbc107]" /> ULTRA RÁPIDO
            </div>
            <div className="flex items-center gap-2 text-label-sm uppercase text-white/80 font-semibold">
              <Globe size={14} className="text-[#2563eb]" /> COBERTURA TOTAL
            </div>
          </div>
        </div>

        {/* Visuals - Client Component */}
        <HeroVisuals />
      </div>

    </section>
  );
}