"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Home, Mail, Share2 as Facebook, Camera as Instagram } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import type React from 'react';
import { cn } from "@/lib/utils"

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut" as any,
    },
  }),
};

interface ContactMethod {
  icon: React.ElementType | null;
  title: string;
  description: string;
  actionText: string;
  href?: string;
  onClick?: () => void;
  colorClasses: string;
  iconBg: string;
  iconColor: string;
}

export function ContactInfo() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Hola, me gustaría obtener información sobre sus servicios de envío."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const contactMethods: ContactMethod[] = [
    {
      icon: Mail,
      title: "Email",
      description: "Para consultas detalladas o corporativas.",
      actionText: "Enviar Email",
      href: "mailto:matiascejas@enviosdosruedas.com",
      colorClasses: "border-secondary text-secondary hover:bg-secondary hover:text-[var(--background)]",
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
    },
    {
      icon: Facebook,
      title: "Facebook",
      description: "Síguenos para novedades y promociones.",
      actionText: "Ir a Facebook",
      href: "https://facebook.com/enviosdosruedas",
      colorClasses: "border-primary text-primary hover:bg-primary hover:text-slate-900",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "Mira nuestro día a día y ofertas visuales.",
      actionText: "Ir a Instagram",
      href: "https://instagram.com/enviosdosruedas",
      colorClasses: "border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-slate-900",
      iconBg: "bg-pink-500/10",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-transparent">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <Card className="mb-8 sm:mb-10 shadow-2xl border border-white/10 backdrop-blur-md bg-[background]/60 hover:border-primary/30 transition-all duration-500 rounded-2xl">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="flex items-center justify-center mb-2 sm:mb-3">
                    <Home className="w-7 h-7 sm:w-8 sm:h-8 text-primary mr-2 sm:mr-3" />
                    <h2 className="text-headline-lg-mobile sm:text-headline-lg md:text-display-md font-bold text-primary font-display uppercase tracking-wider mb-2">Envios DosRuedas</h2>
                </div>
                <p className="text-label-md text-gray-400 mb-4 sm:mb-6 uppercase">Mensajería y Delivery</p>

                <div className="flex flex-col sm:flex-row items-center justify-center mb-4 sm:mb-6 gap-2 sm:gap-3">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  <span className="text-headline-lg-mobile sm:text-headline-lg md:text-display-md font-bold text-white font-display tracking-wider">223-660-2699</span>
                </div>

                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-[#25D366] hover:bg-[#25D366]/90 text-slate-900 px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base font-bold font-display text-orbitron tracking-wider rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 uppercase"
                >
                  <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp Icon" width={20} height={20} className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contactar por WhatsApp
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={method.title}
                  custom={index + 1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                >
                  <Card className="hover:shadow-2xl hover:-translate-y-1.5 h-full flex flex-col border border-white/10 bg-[background]/60 backdrop-blur-md hover:border-primary/30 rounded-2xl transition-all duration-500">
                    <CardContent className="p-6 text-center flex flex-col items-center flex-grow">
                      <div className={cn("w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300", method.iconBg)}>
                        {IconComponent && <IconComponent className={cn("w-7 h-7 sm:w-8 sm:h-8", method.iconColor)} />}
                      </div>
                      <h3 className="text-headline-lg font-bold text-white mb-2 uppercase">{method.title}</h3>
                      <p className="text-body-md text-gray-400 mb-6 flex-grow">{method.description}</p>
                      <Button
                        onClick={method.onClick}
                        asChild={!!method.href}
                        variant="outline"
                        size="sm"
                        className={cn("mt-auto transition-all duration-300 w-full text-xs sm:text-sm font-display text-orbitron font-bold tracking-wider rounded-xl uppercase py-2.5", method.colorClasses)}
                      >
                        {method.href ? (
                          <a href={method.href} target={method.href.startsWith("mailto:") ? "_self" : "_blank"} rel="noopener noreferrer">
                            {method.actionText}
                          </a>
                        ) : (
                          <span>{method.actionText}</span>
                        )}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
