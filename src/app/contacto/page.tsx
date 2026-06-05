import type { Metadata } from "next";
import { OptimizedHeader } from "@/components/homenew/OptimizedHeader";
import { CarruselRedes } from "@/components/homenew/carrusel-redes";
import { Footer } from "@/components/homenew/Footer";
import { ContactPageClient } from "@/components/contact/contact-page-client";

export const metadata: Metadata = {
  title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
  description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
  alternates: { canonical: 'https://www.enviosdosruedas.com/contacto' },
  openGraph: {
    title: "Contacto | WhatsApp y Atención Logística en Mar del Plata",
    description: "Contactanos por WhatsApp o visitanos en Friuli 1972, Mar del Plata. Atención personalizada en logística y mensajería para PyMEs y emprendedores.",
    url: 'https://www.enviosdosruedas.com/contacto',
    images: [{ url: '/og-image.jpg' }],
  },
};

export default function ContactPage() {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground selection:bg-primary/30">
      <OptimizedHeader />
      <main className="flex-grow">
        <ContactPageClient />
      </main>
      <CarruselRedes />
      <Footer />
    </div>
  );
}
