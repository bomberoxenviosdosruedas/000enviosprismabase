import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { OptimizedHeader } from "@/components/homenew/optimized-header";
import HeroAnimado from "@/components/homenew/hero-animado";

export const metadata: Metadata = {
  title: "Mensajería y Logística E-commerce en Mar del Plata | Envíos DosRuedas",
  description: "Especialistas en logística e-commerce y última milla en Mar del Plata. Envíos en el día, Flex y soluciones 3PL para potenciar tu negocio local.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/' },
};

const VisionSection = dynamic(() => import("@/components/homenew/vision-section").then(mod => mod.VisionSection), { ssr: true });
const SliderServicios = dynamic(() => import("@/components/homenew/slider-servicios"), { ssr: true });
const EmprendedoresHome = dynamic(() => import("@/components/homenew/emprendedores-home").then(mod => mod.EmprendedoresHome), { ssr: true });
const CarruselRedes = dynamic(() => import("@/components/homenew/carrusel-redes").then(mod => mod.CarruselRedes), { ssr: true });
const Footer = dynamic(() => import("@/components/homenew/footer").then(mod => mod.Footer), { ssr: true });

export default function HomePage() {
  return (
    <div className="dark min-h-[100dvh] bg-zinc-950 text-slate-100 selection:bg-blue-600/30 flex flex-col font-sans">
      <OptimizedHeader />
      <main className="flex-grow">
        {/* Studio Balanced Layout - Asymmetric and Clinical */}
        <div className="space-y-24 pb-24">
          <HeroAnimado />
          <div className="container mx-auto px-6">
            <VisionSection />
            <div className="grid grid-cols-12 gap-8 my-32">
              <div className="col-span-12 lg:col-span-8">
                <SliderServicios />
              </div>
              <div className="col-span-12 lg:col-span-4">
                {/* CTA Contextual block integrated in grid */}
                <div className="h-full bg-zinc-900/50 rounded-2xl border border-zinc-800 p-12 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">Soluciones Inmediatas</h3>
                  <p className="text-zinc-400 mb-8 font-light">Optimización de ruteo para [cobertura_local] con tarifas desde [tarifa_base].</p>
                  <button className="w-full py-4 bg-yellow-400 text-black font-bold rounded-xl uppercase tracking-tighter hover:bg-yellow-300 transition-all">
                    Cotizar Ahora
                  </button>
                </div>
              </div>
            </div>
            <EmprendedoresHome />
          </div>
          <CarruselRedes />
        </div>
      </main>
      <Footer />
    </div>
  );
}
