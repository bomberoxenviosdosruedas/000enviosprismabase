"use server";

import { prisma } from '@/lib/prisma';
import { Prisma, ServiceType as PrismaServiceTypeEnum, Order as PrismaOrder, Client } from '../../../generated/prisma/client';
import { z } from 'zod';
import { geocodeNominatim } from '@/lib/maps/nominatim';

// --- Types ---
export type ServiceType = PrismaServiceTypeEnum;

export interface QuoteShipmentInput {
  originAddress: string;
  destinationAddress: string;
  serviceType: ServiceType;
}

export interface QuoteShipmentResult {
  success: boolean;
  data?: {
    price: number | null;
    distanceText: string;
    durationText: string;
    originLat: number;
    originLng: number;
    destinationLat: number;
    destinationLng: number;
  };
  error?: string;
  fieldErrors?: z.ZodIssue[];
}

export interface SaveShipmentInput {
  clientId?: number;
  originFullName: string;
  originPhone: string;
  originAddress: string;
  originLat: number;
  originLng: number;
  destinationContactName: string;
  destinationContactPhone: string;
  destinationContactEmail?: string;
  destinationAddress: string;
  destinationLat: number;
  destinationLng: number;
  serviceType: ServiceType;
  quotedPrice: number;
  distanceText?: string;
  durationText?: string;
  clientNameAtOrder?: string;
  clientPhoneAtOrder?: string;
  pickupDate: Date;
  pickupTimeFrom: string;
  pickupTimeTo: string;
  deliveryDate: Date;
  deliveryTimeFrom: string;
  deliveryTimeTo: string;
  shippingCost?: number;
  totalCost?: number;
}

export interface SaveShipmentResult {
  success: boolean;
  message?: string;
  shipmentId?: number;
  error?: string;
  fieldErrors?: z.ZodIssue[];
}

// --- Utilities ---

/**
 * Serializa objetos Decimal de Prisma a números estándar para evitar errores de hidratación
 * y problemas de serialización en Server Actions (Error: Only plain objects, and a few built-ins...).
 */
function serializeDecimal(value: Prisma.Decimal | null | undefined): number | null {
  if (value === null || value === undefined) return null;
  return Number(value.toString());
}

// --- Client Actions ---

export async function searchClientByPhone(phone: string) {
  try {
    const client = await prisma.client.findUnique({
      where: { phone },
    });

    if (!client) return null;

    // Serialización para evitar errores de "Decimal" en el cliente
    return {
      ...client,
      balance: serializeDecimal(client.balance)
    } as unknown as Client;
  } catch (error) {
    console.error('Error searching client by phone:', error);
    return null;
  }
}

export async function registerClient(data: { name: string; phone: string; email?: string }) {
  try {
    const client = await prisma.client.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email || null,
        balance: 0,
      },
    });

    return {
      success: true,
      data: {
        ...client,
        balance: serializeDecimal(client.balance)
      } as unknown as Client
    };
  } catch (error: any) {
    if (error.code === 'P2002') {
      const target = error.meta?.target as string[];
      if (target) {
        if (target?.includes('phone')) return { success: false, error: 'El número de teléfono ya está registrado.' };
        if (target?.includes('email')) return { success: false, error: 'La dirección de email ya está registrada.' };
        return { success: false, error: 'Error de duplicado al guardar el cliente.' };
      }
    }
    console.error('Error registering client:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Error al registrar cliente: ${errorMessage}` };
  }
}


// --- Shipment Quoting ---

const quoteShipmentSchema = z.object({
  originAddress: z.string().min(5, "La dirección de origen es requerida."),
  destinationAddress: z.string().min(5, "La dirección de destino es requerida."),
  serviceType: z.nativeEnum(PrismaServiceTypeEnum),
});

export async function quoteShipment(input: QuoteShipmentInput): Promise<QuoteShipmentResult> {
  try {
    const validatedData = quoteShipmentSchema.parse(input);

    const originCoords = await geocodeNominatim(validatedData.originAddress);
    if (!originCoords) return { success: false, error: `No se pudo geolocalizar la dirección de origen: ${validatedData.originAddress}` };

    const destinationCoords = await geocodeNominatim(validatedData.destinationAddress);
    if (!destinationCoords) return { success: false, error: `No se pudo geolocalizar la dirección de destino: ${validatedData.destinationAddress}` };

    let distanceKm: number;
    let distanceText: string;
    let durationText: string;

    const directionsUrl = `https://router.project-osrm.org/route/v1/driving/${originCoords.lng},${originCoords.lat};${destinationCoords.lng},${destinationCoords.lat}?overview=false`;

    const directionsResponse = await fetch(directionsUrl);
    if (!directionsResponse.ok) {
      const errorText = await directionsResponse.text();
      console.error(`OSRM Routing API HTTP error: ${directionsResponse.status}. URL: ${directionsUrl}. Response: ${errorText}`);
      return { success: false, error: `Error del API de ruteo OSRM (status ${directionsResponse.status}): ${directionsResponse.statusText}` };
    }

    const directionsData = await directionsResponse.json();

    if (!directionsData.routes || directionsData.routes.length === 0) {
      console.error(`OSRM Routing API logical error. Message: ${directionsData.message}`);
      return { success: false, error: `No se pudo calcular la ruta: ${directionsData.message || 'Sin rutas disponibles'}` };
    }

    const route = directionsData.routes[0];
    distanceKm = route.distance / 1000;
    distanceText = `${distanceKm.toFixed(1)} km`;
    durationText = `${Math.round(route.duration / 60)} min`;

    const priceRanges = await prisma.priceRange.findMany({
      where: { serviceType: validatedData.serviceType, isActive: true },
    });

    const matchingRange = priceRanges.find(r =>
      distanceKm >= r.distanciaMinKm.toNumber() &&
      distanceKm <= r.distanciaMaxKm.toNumber()
    );

    let price: number | null = null;
    if (matchingRange) {
      price = matchingRange.precioRango.toNumber();
    } else {
      const maxRange = priceRanges.reduce((prev, current) => (prev.distanciaMaxKm.toNumber() > current.distanciaMaxKm.toNumber()) ? prev : current, priceRanges[0]);
      if (!maxRange) return { success: false, error: "No se encontraron rangos de precio para este servicio." };

      const extraKm = distanceKm - maxRange.distanciaMaxKm.toNumber();
      // AUDIT: Ajustado a 700 para coincidir con la tarifa "Zona 5" documentada en el frontend.
      const extraPricePerKm = 700;
      price = maxRange.precioRango.toNumber() + extraKm * extraPricePerKm;
      price = Math.round(price * 100) / 100;
    }

    return {
      success: true,
      data: {
        price,
        distanceText,
        durationText,
        originLat: originCoords.lat,
        originLng: originCoords.lng,
        destinationLat: destinationCoords.lat,
        destinationLng: destinationCoords.lng,
      },
    };

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Datos de entrada para cotización inválidos.", fieldErrors: error.issues };
    }
    console.error('Error quoting shipment (outer catch):', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Error al cotizar envío: ${errorMessage}` };
  }
}

// --- Shipment Saving ---
export async function getAuthenticatedRepartidorIdFromServerSession(): Promise<number | null> {
  // SEGURIDAD: En producción esto DEBE usar un sistema de autenticación real (ej. NextAuth).
  // Por ahora, se mantiene como placeholder con advertencia explícita.
  if (process.env.NODE_ENV === 'production') {
    console.error("CRÍTICO: Intento de uso de autenticación simulada en producción.");
    return null;
  }

  console.warn("DEV MODE: getAuthenticatedRepartidorIdFromServerSession simulado.");
  try {
    const firstRepartidor = await prisma.repartidor.findFirst({ where: { isActive: true } });
    return firstRepartidor?.id ?? null;
  } catch (e) {
    return null;
  }
}

const saveShipmentSchema = z.object({
  clientId: z.number().int().optional(),
  originFullName: z.string().min(3, 'Nombre del punto de recogida es requerido.'),
  originPhone: z.string().regex(/^\+?\d{7,15}$/, 'Teléfono de recogida inválido.'),
  originAddress: z.string().min(5, 'La dirección de origen es requerida.'),
  originLat: z.number(),
  originLng: z.number(),
  destinationContactName: z.string().min(3, 'Nombre del destinatario es requerido.'),
  destinationContactPhone: z.string().regex(/^\+?\d{7,15}$/, 'Teléfono del destinatario inválido.'),
  destinationContactEmail: z.string().email('Email del destinatario inválido.').optional().or(z.literal('')),
  destinationAddress: z.string().min(5, 'La dirección de destino es requerida.'),
  destinationLat: z.number(),
  destinationLng: z.number(),
  serviceType: z.nativeEnum(PrismaServiceTypeEnum),
  quotedPrice: z.number().positive('El precio cotizado debe ser positivo.'),
  distanceText: z.string().optional(),
  durationText: z.string().optional(),
  clientNameAtOrder: z.string().optional(),
  clientPhoneAtOrder: z.string().optional(),
  pickupDate: z.coerce.date(),
  pickupTimeFrom: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato HH:MM inválido."),
  pickupTimeTo: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato HH:MM inválido."),
  deliveryDate: z.coerce.date(),
  deliveryTimeFrom: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato HH:MM inválido."),
  deliveryTimeTo: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, "Formato HH:MM inválido."),
  shippingCost: z.number().positive().optional(),
  totalCost: z.number().positive().optional(),
}).refine((data) => {
  // AUDIT: Restaurada validación de fechas (Entrega no puede ser antes de Recogida)
  const delivery = new Date(data.deliveryDate);
  const pickup = new Date(data.pickupDate);
  return delivery >= pickup;
}, {
  message: "La fecha de entrega no puede ser anterior a la de recogida",
  path: ["deliveryDate"]
}).refine((data) => {
  // AUDIT: Restaurada validación de horas si es el mismo día
  if (data.deliveryDate.getTime() === data.pickupDate.getTime()) {
    return data.deliveryTimeFrom >= data.pickupTimeFrom;
  }
  return true;
}, {
  message: "La hora de entrega debe ser posterior a la de recogida si es el mismo día",
  path: ["deliveryTimeFrom"]
});

export async function saveShipment(input: SaveShipmentInput): Promise<SaveShipmentResult> {
  try {
    const authenticatedRepartidorId = await getAuthenticatedRepartidorIdFromServerSession();
    if (authenticatedRepartidorId === null) {
      return { success: false, error: 'No autorizado. Debes estar autenticado.' };
    }

    const validatedData = saveShipmentSchema.parse(input);

    const [pHoursFrom, pMinutesFrom] = validatedData.pickupTimeFrom.split(':').map(Number);
    const finalPickupDateTime = new Date(validatedData.pickupDate);
    finalPickupDateTime.setHours(pHoursFrom, pMinutesFrom, 0, 0);

    const [dHoursFrom, dMinutesFrom] = validatedData.deliveryTimeFrom.split(':').map(Number);
    const finalDeliveryDateTime = new Date(validatedData.deliveryDate);
    finalDeliveryDateTime.setHours(dHoursFrom, dMinutesFrom, 0, 0);

    const orderData: Prisma.OrderCreateInput = {
      client: validatedData.clientId !== undefined ? { connect: { id: validatedData.clientId } } : undefined,
      originFullName: validatedData.originFullName,
      originPhone: validatedData.originPhone,
      originAddress: validatedData.originAddress,
      originLat: new Prisma.Decimal(validatedData.originLat.toFixed(7)),
      originLng: new Prisma.Decimal(validatedData.originLng.toFixed(7)),
      destinationContactName: validatedData.destinationContactName,
      destinationContactPhone: validatedData.destinationContactPhone,
      destinationContactEmail: validatedData.destinationContactEmail || null,
      destinationAddress: validatedData.destinationAddress,
      destinationLat: new Prisma.Decimal(validatedData.destinationLat.toFixed(7)),
      destinationLng: new Prisma.Decimal(validatedData.destinationLng.toFixed(7)),
      serviceType: validatedData.serviceType,
      quotedPrice: new Prisma.Decimal(validatedData.quotedPrice.toFixed(2)),
      distanceText: validatedData.distanceText,
      durationText: validatedData.durationText,
      clientNameAtOrder: validatedData.clientNameAtOrder || validatedData.destinationContactName,
      clientPhoneAtOrder: validatedData.clientPhoneAtOrder || validatedData.destinationContactPhone,
      pickupDate: validatedData.pickupDate,
      pickupTimeFrom: validatedData.pickupTimeFrom,
      pickupTimeTo: validatedData.pickupTimeTo,
      deliveryDate: validatedData.deliveryDate,
      deliveryTimeFrom: validatedData.deliveryTimeFrom,
      deliveryTimeTo: validatedData.deliveryTimeTo,
      pickupDateTime: finalPickupDateTime,
      deliveryDateTime: finalDeliveryDateTime,
      shippingCost: new Prisma.Decimal((validatedData.shippingCost ?? validatedData.quotedPrice).toFixed(2)),
      totalCost: new Prisma.Decimal((validatedData.totalCost ?? validatedData.quotedPrice).toFixed(2)),
    };

    const order: PrismaOrder = await prisma.order.create({ data: orderData });
    return { success: true, message: `Envío ${order.id} creado exitosamente.`, shipmentId: order.id as number };

  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      return { success: false, error: "Error de validación.", fieldErrors: error.issues };
    }
    const errorMessage = error instanceof Error ? error.message : String(error);
    return { success: false, error: `Error inesperado: ${errorMessage}` };
  }
}
