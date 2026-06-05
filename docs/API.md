# API Reference

This document provides a comprehensive reference for the Server Actions and AI Flows available in the application.

## Server Actions

### `src/app/actions.ts`

#### `generateTestimonialSummary`

Generates an AI-powered summary of customer testimonials.

- **Input**: `FormData` containing `testimonials` (string, 20-5000 chars).
- **Output**: `AISummaryState` object with `summary`, `error`, `fieldErrors`, or `formError`.
- **Validation**: `aiSummarySchema` (Zod).

#### `submitContactForm`

Processes contact form submissions.

- **Input**: `FormData` with `name` (min 2), `email` (valid email), and `message` (10-1000 chars).
- **Output**: `ContactFormState` with `message`, `error`, `fieldErrors`, or `formError`.
- **Validation**: `contactSchema` (Zod).

---

### `src/app/ordenes/actions.ts`

#### `searchClientByPhone`

Searches for a registered client by their phone number.

- **Input**: `ClientSearchInput` { `phone`: string (regex `^\+?\d{7,15}$`) }.
- **Output**: `ClientSearchResult` { `success`: boolean, `data`?: Client | null, `error`?: string }.

#### `registerClient`

Registers a new client in the system.

- **Input**: `RegisterClientInput` { `name`, `lastName`?, `phone`, `email`?, `address` }.
- **Output**: `RegisterClientResult` { `success`: boolean, `data`?: Client, `error`?: string, `fieldErrors`?: ZodIssue[] }.
- **Notes**: Performs geocoding for the provided address via Nominatim.

#### `quoteShipment`

Calculates a price estimate for a shipment based on distance and service type.

- **Input**: `QuoteShipmentInput` { `originAddress`, `destinationAddress`, `serviceType` }.
- **Output**: `QuoteShipmentResult` { `success`: boolean, `data`?: QuoteDetails, `error`?: string }.
- **Logic**:
  - Geocodes origin and destination.
  - Calculates route via OSRM.
  - Applies pricing logic based on distance (standard ranges up to 10km, base + extra per-km beyond).

#### `saveShipment`

Creates a new shipping order in the database.

- **Input**: `SaveShipmentInput` (comprehensive object including client, origin/destination details, dates, times, and costs).
- **Output**: `SaveShipmentResult` { `success`: boolean, `message`?: string, `shipmentId`?: number }.
- **Authorization**: Requires an authenticated `repartidor` session.
- **Validation**: `saveShipmentSchema` (Zod) with complex date/time refinements.

---

## AI Flows

### `src/ai/flows/summarize-testimonials.ts`

#### `summarizeTestimonialsFlow`

A Genkit-powered flow to summarize text.

- **Input**: `SummarizeTestimonialsInput` { `testimonials`: string }.
- **Output**: `SummarizeTestimonialsOutput` { `summary`: string }.
- **Model**: Uses `googleai/gemini-2.5-flash` (configured in `src/ai/genkit.ts`).
- **Prompt**: "Summarize the following customer testimonials, highlighting the overall sentiment and key points:\n\n{{{testimonials}}}"
