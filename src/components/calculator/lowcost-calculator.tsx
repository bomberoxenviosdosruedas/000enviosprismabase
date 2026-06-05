
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Calculator, Loader2, PackageCheck, RotateCcw, ThumbsUp, AlertCircle } from 'lucide-react';
import React, { useState, FormEvent, useMemo } from 'react';
import RouteMap from './route-map';
import { AddressAutocomplete } from './address-autocomplete';
import { useToast } from '@/hooks/use-toast';
import { quoteShipment } from '@/app/ordenes/actions';
import { ServiceTypeEnum } from '../../../generated/prisma/enums';
import type { QuoteDetails } from '@/types/order-actions';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';


export default function LowCostCalculator() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [quoteDetails, setQuoteDetails] = useState<QuoteDetails | null>(null);
  const [step, setStep] = useState(1);

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
      setStep(2);
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
    setStep(1);
  };

  const handleConfirmShipment = () => {
    toast({
      title: "Próximamente",
      description: "La funcionalidad de confirmar envío low cost estará disponible muy pronto.",
    });
  };

  return (
    <section className="w-full py-12 md:py-16 bg-background font-sans overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl lg:max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-2xl bg-card/60 border-border/50 backdrop-blur-xl rounded-3xl overflow-hidden border">
            <CardHeader className="pt-8 px-6 md:px-8">
              <CardTitle className="text-3xl md:text-4xl text-primary font-display font-bold tracking-tight">
                Calculá tu Envío Low Cost
              </CardTitle>
              <CardDescription className="text-base md:text-lg mt-2 font-sans text-muted-foreground">
                Ingresá las direcciones de origen y destino para obtener una cotización para envíos programados.
              </CardDescription>
            </CardHeader>
            <CardContent className="pb-8 px-6 md:px-8 space-y-8 min-h-[400px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="origin" className="text-sm font-medium text-foreground/80 ml-1">
                            Dirección de Origen
                          </Label>
                          <AddressAutocomplete
                            id="origin"
                            placeholder="Ej: Av. Colón 1234"
                            value={origin}
                            onChange={setOrigin}
                            required
                            className="bg-background/50 border-border focus-visible:ring-primary h-12 rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="destination" className="text-sm font-medium text-foreground/80 ml-1">
                            Dirección de Destino
                          </Label>
                          <AddressAutocomplete
                            id="destination"
                            placeholder="Ej: Juan B. Justo 5678"
                            value={destination}
                            onChange={setDestination}
                            required
                            className="bg-background/50 border-border focus-visible:ring-primary h-12 rounded-xl"
                          />
                        </div>
                      </div>
                      <Button
                        type="submit"
                        className={cn(
                          "w-full py-7 text-lg font-display font-bold uppercase tracking-wider rounded-2xl",
                          "bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-xl transition-all duration-300",
                          "active:scale-[0.98] focus-visible:ring-offset-2 focus-visible:ring-primary"
                        )}
                        disabled={isCalculating}
                      >
                        {isCalculating ? (
                          <>
                            <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                            Calculando...
                          </>
                        ) : (
                          <>
                            <Calculator className="mr-3 h-6 w-6" />
                            Calcular Cotización
                          </>
                        )}
                      </Button>
                    </form>

                    {isCalculating && (
                      <div className="space-y-4 pt-4">
                        <div className="h-48 w-full bg-muted/20 animate-pulse rounded-2xl" />
                        <div className="h-32 w-full bg-muted/10 animate-pulse rounded-2xl" />
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <AnimatePresence mode="wait">
                      {mapCoordinates && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="rounded-2xl overflow-hidden border border-border shadow-inner"
                        >
                          <RouteMap
                            origin={mapCoordinates.origin}
                            destination={mapCoordinates.destination}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {quoteDetails && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                      >
                        <Card className="bg-primary/5 border-primary/20 rounded-2xl overflow-hidden backdrop-blur-sm border-2">
                          <CardHeader className="pb-4">
                            <CardTitle className="text-2xl text-primary flex items-center font-display font-bold tracking-tight">
                              <PackageCheck className="mr-3 h-8 w-8" />
                              Cotización Low Cost
                            </CardTitle>
                            <CardDescription className="text-sm font-sans text-muted-foreground">
                              Valores estimados basados en la ruta más óptima para envíos económicos.
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              <div className="p-4 rounded-xl bg-background/40 border border-border/50">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Distancia</span>
                                <p className="text-xl font-bold text-foreground mt-1">{quoteDetails.distanceText || 'N/A'}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-background/40 border border-border/50">
                                <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Tiempo Estimado</span>
                                <p className="text-xl font-bold text-foreground mt-1">{quoteDetails.durationText || 'N/A'}</p>
                              </div>
                            </div>

                            <div className="pt-4 mt-4 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                              <span className="text-xl font-display font-bold text-primary uppercase tracking-tighter">Total Estimado</span>
                              {quoteDetails.price !== null ? (
                                <div className="flex flex-col items-end">
                                  <span className="text-4xl md:text-5xl font-black text-primary font-display tracking-tighter">
                                    ${quoteDetails.price.toLocaleString('es-AR')}
                                  </span>
                                </div>
                              ) : (
                                <span className="text-3xl font-black text-orange-500 font-display">Consultar</span>
                              )}
                            </div>

                            {quoteDetails.price === null && (
                              <div className="flex items-start gap-2 p-3 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm">
                                <AlertCircle className="h-5 w-5 shrink-0" />
                                <p>La distancia excede los rangos estándar o no pudo ser calculada. Por favor, contactanos para una cotización personalizada.</p>
                              </div>
                            )}
                          </CardContent>
                          <CardFooter className="flex flex-col sm:flex-row gap-4 pt-4 pb-6">
                            <Button
                              size="lg"
                              className={cn(
                                "w-full sm:flex-1 h-14 bg-green-600 hover:bg-green-700 text-white font-bold uppercase tracking-tight rounded-xl shadow-lg transition-all",
                                "active:scale-95 disabled:opacity-50"
                              )}
                              disabled={quoteDetails.price === null}
                              onClick={handleConfirmShipment}
                            >
                              <ThumbsUp className="mr-2 h-5 w-5" />
                              Confirmar Envío
                            </Button>
                            <Button
                              size="lg"
                              variant="outline"
                              className="w-full sm:w-auto h-14 font-bold uppercase tracking-tight rounded-xl border-border hover:bg-accent text-foreground transition-all active:scale-95"
                              onClick={handleNewQuote}
                            >
                              <RotateCcw className="mr-2 h-5 w-5" />
                              Volver a cotizar
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
