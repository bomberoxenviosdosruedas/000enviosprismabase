import type { Metadata, Viewport } from "next";
import { Outfit, Geist, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppReviewButton } from "@/components/seo/WhatsAppReviewButton";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.enviosdosruedas.com'),
  title: {
    default: 'Envíos DosRuedas | Logística E-commerce, Flex y Mensajería en Mar del Plata',
    template: '%s | Envíos DosRuedas MDP',
  },
  description: 'Logística de alta precisión en Mar del Plata. Especialistas en Envíos Express, LowCost, MercadoLibre Flex y Fulfillment 3PL para Pymes.',
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${geist.variable} ${jetbrains.variable} font-sans antialiased bg-zinc-950 text-slate-100`}
      >
        {children}
        <WhatsAppReviewButton />
        <Toaster />
      </body>
    </html>
  );
}
