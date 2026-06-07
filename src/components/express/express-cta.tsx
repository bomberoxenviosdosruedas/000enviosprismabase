"use client"

import { Button } from "@/components/ui/button"
import { Zap, Phone, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function ExpressCta() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5492236602699"
    const message = "Necesito un envío express prioritario. ¿Pueden ayudarme?"
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-24 px-4 bg-surface-light relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="p-12 md:p-16 rounded-xl bg-gradient-to-br from-primary/10 via-[background]/80 to-secondary/5 border border-white/10 backdrop-blur-xl relative overflow-hidden text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-32 translate-x-32" />

          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-900/50 text-xxs font-bold tracking-[0.3em] mb-10 uppercase">
             PRIORIDAD MÁXIMA <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          </div>

          <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-6xl font-black italic tracking-tighter leading-tight mb-8 uppercase text-slate-900">
            ¿LISTO PARA TU <br />
            ENVÍO <span className="text-primary">EXPRESS?</span>
          </h2>

          <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-[family-name:var(--font-roboto)]">
            No esperes más. Nuestro equipo está listo para manejar tu envío prioritario y garantizar que llegue a tiempo. ¡Cada minuto cuenta!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
             <Link
              href="/cotizar/express"
              className="px-12 py-5 bg-primary hover:bg-primary/90 text-slate-900 font-[family-name:var(--font-orbitron)] font-black rounded-2xl transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(37,99,235,0.3)] flex items-center gap-3 uppercase tracking-tight h-auto"
            >
              <Zap size={20} /> COTIZAR AHORA
            </Link>
            <Button
              onClick={handleWhatsAppClick}
              className="px-12 py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-slate-900 font-[family-name:var(--font-orbitron)] font-bold rounded-2xl transition-all flex items-center gap-3 uppercase tracking-tight h-auto group"
            >
              <Phone size={20} className="text-secondary" />
              WHATSAPP PRIORITARIO
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
