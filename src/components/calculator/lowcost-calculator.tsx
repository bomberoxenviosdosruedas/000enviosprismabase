
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, PackageCheck, RotateCcw, ThumbsUp } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/ordenes/actions';
import { ServiceTypeEnum } from '../../../generated/prisma/browser';
import type { QuoteDetails } from '@/types/order-actions';


export default function LowCostCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);

  const { toast } = useToast();

  const mapCoordinates = useMemo(() => {
    if (!quoteDetails) return null;
    return {
      origin: { lat: quoteDetails.originLat, lng: quoteDetails.originLng },
      destination: { lat: quoteDetails.destinationLat, lng: quoteDetails.destinationLng },
    };
  }, [quoteDetails]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!origin.trim() || !destination.trim()) {
      toast({
        variant: "destructive",
        title: "Campos incompletos",
        description: "Por favor, ingresa la dirección de origen y destino.",
      });
      return;
    }
    setIsCalculating(true);
    setQuoteDetails(null);

    const result = await quoteShipment({
        originAddress: origin,
        destinationAddress: destination,
        serviceType: ServiceTypeEnum.LOW_COST,
    });

    setIsCalculating(false);

    if (result.success && result.data) {
        setQuoteDetails(result.data);
        const priceText = result.data.price !== null ? `$${result.data.price.toLocaleString('es-AR')}` : "Consultar";
        toast({
            title: "Cotización Exitosa",
            description: `Distancia: ${result.data.distanceText}. Precio: ${priceText}`,
            variant: "default",
        });
    } else {
        toast({
            variant: "destructive",
            title: "Error de Cálculo",
            description: result.error || "No se pudo calcular la ruta o el precio. Verifica las direcciones o inténtalo más tarde.",
        });
    }
  };

  const handleNewQuote = () => {
    setOrigin('');
    setDestination('');
    setQuoteDetails(null);
    setIsCalculating(false);
  };

  return (
    <section className="w-full py-12 md:py-16 bg-background font-sans">
      <div className="container mx-auto px-4 md:px-6 max-w-2xl lg:max-w-3xl">
        <Card className="shadow-2xl bg-[#0a0d16]/60 border-white/10 backdrop-blur-md rounded-3xl overflow-hidden">
          <CardHeader className="pt-8">
            <CardTitle className="text-headline-lg text-primary font-display">Calculá tu Envío Low Cost</CardTitle>
            <CardDescription className="font-sans text-body-md mt-1 text-gray-400">
              Ingresá las direcciones de origen y destino para obtener una cotización para envíos programados.
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="origin" className="text-label-md font-sans text-gray-300">Dirección de Origen</Label>
                <AddressAutocomplete
                  id="origin"
                  placeholder="Ej: Av. Colón 1234, Mar del Plata"
                  value={origin}
                  onChange={setOrigin}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination" className="text-label-md font-sans text-gray-300">Dirección de Destino</Label>
                <AddressAutocomplete
                  id="destination"
                  placeholder="Ej: Juan B. Justo 5678, Mar del Plata"
                  value={destination}
                  onChange={setDestination}
                  required
                  className="text-body-md font-sans bg-[#030710] border-white/20 text-white rounded-xl focus-visible:ring-secondary"
                />
              </div>
              <Button type="submit" className="w-full text-label-md py-6 font-display uppercase tracking-tight rounded-xl bg-secondary hover:bg-yellow-400 text-black shadow-lg" size="lg" disabled={isCalculating}>
                {isCalculating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Calculando...
                  </>
                ) : (
                  <>
                    <Calculator className="mr-2 h-5 w-5" />
                    Calcular Ruta y Precio Low Cost
                  </>
                )}
              </Button>
            </form>

            {mapCoordinates && (
              <RouteMap
                origin={mapCoordinates.origin}
                destination={mapCoordinates.destination}
              />
            )}
            
            {quoteDetails && !isCalculating && (
              <Card className="mt-8 bg-primary/10 border-primary/20 rounded-2xl overflow-hidden backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-headline-lg-mobile text-primary flex items-center font-display uppercase tracking-tight">
                    <PackageCheck className="mr-3 h-7 w-7" />
                    Tu Cotización Low Cost
                  </CardTitle>
                  <CardDescription className="text-body-sm font-sans text-gray-400 mt-1">
                    Basado en la distancia y tiempo estimados para tu envío económico.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3 text-body-md font-sans text-gray-300">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Distancia:</span>
                    <span className="text-white">{quoteDetails.distanceText || 'N/A'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Tiempo Estimado:</span>
                    <span className="text-white">{quoteDetails.durationText || 'N/A'}</span>
                  </div>
                  <hr className="my-2 border-white/10" />
                  <div className="flex justify-between items-center mt-4">
                    <span className="font-bold text-headline-lg text-primary font-display uppercase tracking-tight">Precio Estimado:</span>
                    {quoteDetails.price !== null ? (
                      <span className="text-headline-lg font-black text-primary font-display italic">${quoteDetails.price.toLocaleString('es-AR')}</span>
                    ) : (
                      <span className="text-headline-lg font-black text-amber-500 font-display italic">Consultar</span>
                    )}
                  </div>
                  {quoteDetails.price === null && (
                    <p className="text-label-sm text-amber-500 text-center pt-2 font-sans">
                      La distancia excede nuestros rangos de precios estándar o no pudo ser calculada. Por favor, contactanos para una cotización personalizada.
                    </p>
                  )}
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-3 pt-4 md:pt-6 font-sans">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-slate-900 font-display font-bold uppercase tracking-tight text-label-md rounded-xl"
                    disabled={quoteDetails.price === null}
                    onClick={() => alert('Funcionalidad "Confirmar Envío Low Cost" pendiente de implementación.')}
                  >
                    <ThumbsUp className="mr-2 h-5 w-5" />
                    Confirmar Envío Low Cost
                  </Button>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto font-display font-bold uppercase tracking-tight text-label-md rounded-xl border-white/20 text-white hover:bg-white/10" onClick={handleNewQuote}>
                    <RotateCcw className="mr-2 h-5 w-5" />
                    Nueva Cotización
                  </Button>
                </CardFooter>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
