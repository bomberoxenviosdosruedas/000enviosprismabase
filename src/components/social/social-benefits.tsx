import { Card, CardContent } from "@/components/ui/card"
import { Gift, Bell, Users, Zap } from "lucide-react"

export function SocialBenefits() {
  const benefits = [
    {
      icon: Gift,
      title: "Ofertas Exclusivas",
      description: "Accede a descuentos y promociones especiales solo para nuestros seguidores.",
    },
    {
      icon: Bell,
      title: "Actualizaciones",
      description: "Sé el primero en conocer nuevos servicios y cambios de horarios importantes.",
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a nuestra comunidad de clientes y comparte tus experiencias con nosotros.",
    },
    {
      icon: Zap,
      title: "Soporte Ágil",
      description: "Obtén respuestas rápidas a tus consultas a través de mensajes directos.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-[background]">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-display-md text-on-surface mb-4 font-display uppercase">Beneficios de Formar Parte</h2>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto font-sans">
            Descubrí por qué cientos de marplatenses ya nos siguen en nuestras redes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-white/10 bg-[background]/60 backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-headline-lg text-on-surface mb-4 font-display">{benefit.title}</h3>
                  <p className="text-body-md text-on-surface-variant leading-relaxed font-sans">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
