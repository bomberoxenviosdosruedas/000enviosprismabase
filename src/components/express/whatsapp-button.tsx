'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";

export function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699";
    const message = "Hola, me gustaría consultar sobre el servicio de Envíos Express.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant="outline"
      size="lg"
      className="bg-surface-container border border-outline-variant text-on-surface hover:bg-surface-container-high font-[family-name:var(--font-orbitron)] font-bold px-8 py-4 rounded-xl transition-all uppercase tracking-tight h-auto"
    >
      <Image src="/icon/icon-whatsapp-verde.svg" alt="WhatsApp Icon" width={20} height={20} className="w-5 h-5 mr-2" />
      WhatsApp
    </Button>
  );
}
