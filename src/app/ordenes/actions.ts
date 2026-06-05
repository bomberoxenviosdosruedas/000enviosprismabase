
'use server';

import { z } from 'zod';
import type {
  ClientSearchInput, ClientSearchResult,
  RegisterClientInput, RegisterClientResult,
  QuoteShipmentInput, QuoteShipmentResult
} from '@/types/order-actions';
import type { SaveShipmentInput, SaveShipmentResult } from '@/types/order-actions';

// --- Client Search and Registration ---
export async function searchClientByPhone(input: ClientSearchInput): Promise<ClientSearchResult> {
  console.log('Mock searchClientByPhone', input);
  return { success: true, data: null, message: 'Servicio temporalmente deshabilitado.' };
}

export async function registerClient(input: RegisterClientInput): Promise<RegisterClientResult> {
  console.log('Mock registerClient', input);
  return { success: false, error: 'Servicio temporalmente deshabilitado.' };
}

// --- Shipment Quoting ---
export async function quoteShipment(input: QuoteShipmentInput): Promise<QuoteShipmentResult> {
  console.log('Mock quoteShipment', input);
  // Return a static quote for testing UI
  return {
    success: true,
    data: {
      price: 5000,
      distanceText: "10 km",
      durationText: "25 min",
      originLat: -38.00,
      originLng: -57.55,
      destinationLat: -38.01,
      destinationLng: -57.56,
    },
  };
}

// --- Shipment Saving ---
export async function saveShipment(input: SaveShipmentInput): Promise<SaveShipmentResult> {
  console.log('Mock saveShipment', input);
  return { success: false, error: 'Servicio temporalmente deshabilitado.' };
}

export async function getAuthenticatedRepartidorIdFromServerSession(): Promise<number | null> {
  return null;
}
