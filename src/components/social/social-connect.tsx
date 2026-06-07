import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Share2 as Facebook, Camera as Instagram } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function SocialConnect() {
  const socialNetworks = [
    {
      name: "Facebook",
      icon: Facebook,
      handle: "@enviosdosruedas",
      description: "Seguinos en Facebook para ofertas exclusivas y actualizaciones diarias de nuestros servicios en Mar del Plata.",
      color: "bg-facebook",
      url: "https://facebook.com/enviosdosruedas",
      followers: "2.5K+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      handle: "@enviosdosruedas",
      description: "Mirá nuestro día a día en Instagram, fotos de entregas y promociones especiales diseñadas para vos.",
      color: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
      url: "https://instagram.com/enviosdosruedas",
      followers: "3.2K+",
    },
    {
      name: "WhatsApp",
      icon: null,
      handle: "+54 9 223 660-2699",
      description: "Atención directa por WhatsApp. Canal personalizado para cotizaciones y pedidos inmediatos.",
      color: "bg-whatsapp",
      url: "https://wa.me/5492236602699?text=Hola%20Envios%20DosRuedas,%20vengo%20desde%20la%20web.",
      followers: "Atención 24/7",
    },
  ]

  return (
    <section className="py-16 px-4 bg-surface font-sans">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-on-surface mb-6 font-display uppercase tracking-tight">¡Seguí el Movimiento!</h2>
          <p className="text-body-lg text-on-surface-variant max-w-3xl mx-auto font-sans leading-relaxed">
            Unite a nuestra comunidad para acceder a beneficios exclusivos y estar al tanto de todo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {socialNetworks.map((network) => {
            const IconComponent = network.icon
            return (
              <Card key={network.name} className="group hover:shadow-2xl transition-all duration-500 border-white/10 bg-[background]/60 backdrop-blur-md overflow-hidden rounded-3xl hover:-translate-y-2">
                <CardContent className="p-10 flex flex-col h-full items-center text-center">
                  <div className={cn("w-20 h-20 rounded-lg flex items-center justify-center mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg relative", network.color)}>
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
                    {IconComponent ? (
                      <IconComponent className="w-10 h-10 text-white relative z-10" />
                    ) : (
                      <Image src="/icon/icon-whatsapp.svg" alt="WhatsApp" width={40} height={40} className="w-10 h-10 relative z-10" />
                    )}
                  </div>

                  <h3 className="text-headline-lg text-on-surface font-display mb-2">{network.name}</h3>
                  <div className="px-3 py-1 bg-primary/10 text-primary text-label-sm rounded-sm mb-6 font-sans">
                    {network.followers}
                  </div>

                  <p className="text-on-surface-variant mb-8 leading-relaxed font-sans text-body-lg flex-grow">{network.description}</p>

                  <Button asChild size="lg" className={cn("w-full text-white font-bold h-14 rounded-sm shadow-md hover:shadow-xl transition-all relative overflow-hidden group/btn text-label-md uppercase font-display", network.color)}>
                    <a href={network.url} target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10">
                        {network.name === "WhatsApp" ? "Hablá con nosotros" : `Seguinos en ${network.name}`}
                      </span>
                      <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                    </a>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
