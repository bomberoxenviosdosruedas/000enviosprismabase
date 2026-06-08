
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, MapPin, Phone } from "lucide-react";

const tips = [
  {
    icon: <MapPin className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
    title: "Direcciones Precisas",
    description: "Asegúrate de ingresar direcciones completas y exactas, incluyendo número, barrio o referencias si es necesario.",
  },
  {
    icon: <Lightbulb className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
    title: "Verifica en el Mapa",
    description: "Una vez calculada la ruta, revisa que los puntos de origen y destino en el mapa sean los correctos.",
  },
  {
    icon: <Phone className="h-6 w-6 md:h-7 md:w-7 text-primary" />,
    title: "Datos de Contacto Claros",
    description: "Al confirmar el envío (próximamente), proporciona números de teléfono válidos para origen y destino.",
  },
];

export default function CalculatorTips() {
  return (
    <section className="py-12 md:py-16 bg-blue-50/50 font-sans">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-3 md:mb-4 font-display">
          Consejos para una Cotización Exitosa
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto">
          Sigue estas recomendaciones para obtener la cotización más precisa y facilitar tu envío.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {tips.map((tip, index) => (
            <Card
              key={index}
              className="bg-white border-blue-100 shadow-lg text-center h-full flex flex-col transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-1"
            >
              <CardHeader className="items-center pb-3">
                <div className="p-3 bg-blue-50 rounded-full mb-2">
                    {tip.icon}
                </div>
                <CardTitle className="text-xl md:text-2xl font-display text-foreground">{tip.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow pt-0">
                <CardDescription className="text-sm md:text-base text-muted-foreground">{tip.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
