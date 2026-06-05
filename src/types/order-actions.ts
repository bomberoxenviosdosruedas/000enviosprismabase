// src/types/order-actions.ts
import type { z } from 'zod';

// --- Types for searchClientByPhone ---
export interface ClientSearchInput {
  phone: string;
}
export interface ClientSearchResult {
  success: boolean;
  data?: any;
  error?: string;
  message?: string; 
  fieldErrors?: z.ZodIssue[];
}

// --- Types for registerClient ---
export interface RegisterClientInput {
  name: string;
  lastName?: string;
  phone: string;
  email?: string;
  address: string;
}
export interface RegisterClientResult {
  success: boolean;
  data?: any;
  error?: string;
  fieldErrors?: z.ZodIssue[];
}

// --- Types for quoteShipment ---
export interface QuoteShipmentInput {
  originAddress: string;
  destinationAddress: string;
  serviceType: any;
}
export interface QuoteDetails {
  price: number | null; 
  distanceText: string;
  durationText: string;
  originLat: number; 
  originLng: number; 
  destinationLat: number; 
  destinationLng: number; 
}
export interface QuoteShipmentResult {
  success: boolean;
  data?: QuoteDetails;
  error?: string;
  fieldErrors?: z.ZodIssue[];
}

// --- Types for saveShipment ---
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
  
  serviceType: any;
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
  error?: string;
  fieldErrors?: z.ZodIssue[];
  shipmentId?: number; 
}
