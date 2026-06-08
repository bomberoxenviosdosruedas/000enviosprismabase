
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function CalculatorContact() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-blue-600 p-6 md:p-10 lg:p-12 rounded-lg shadow-xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4 font-display">
            ¿Dudas o Envíos Especiales?
          </h2>
          <p className="text-md sm:text-lg md:text-xl text-blue-50 mb-6 md:mb-8 max-w-lg md:max-w-2xl mx-auto font-sans">
            Si tu envío excede nuestros rangos estándar, necesitas múltiples paradas, o tienes alguna consulta específica, no dudes en contactarnos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4">
            <Button size="lg" variant="secondary" asChild className="text-sm sm:text-base w-full sm:w-auto font-sans">
              <Link href="/contacto">
                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Formulario de Contacto
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-sm sm:text-base border-white text-white hover:bg-white/10 w-full sm:w-auto font-sans">
              <a href="tel:+542236602699">
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Llámanos: 223-660-2699
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
