# Architecture

This document describes the technical architecture and workflows of the Envíos DosRuedas platform.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Database ORM**: [Prisma](https://www.prisma.io/)
- **AI Integration**: [Firebase Genkit](https://js.p.run/docs/genkit/) with Google Gemini
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
- **Mapping & Routing**:
  - [OpenStreetMap (Nominatim)](https://nominatim.org/) for Geocoding
  - [OSRM](http://project-osrm.org/) for Routing and Distance calculation
  - [Leaflet](https://leafletjs.com/) for Map visualization

## System Workflows

### 1. Shipment Quoting Workflow

The quoting process involves geocoding addresses and calculating distances before applying business rules for pricing.

```mermaid
sequenceDiagram
    participant User
    participant Page as Quote Page
    participant Action as quoteShipment (Action)
    participant Geo as Nominatim API
    participant Router as OSRM API
    participant DB as Prisma/Database

    User->>Page: Enter Origin & Destination
    Page->>Action: Call quoteShipment
    Action->>Geo: Geocode addresses
    Geo-->>Action: Lat/Lng coordinates
    Action->>Router: Get driving distance
    Router-->>Action: Distance (km) & Duration
    Action->>DB: Fetch PriceRange for distance
    DB-->>Action: Price record
    Action->>Action: Apply pricing logic
    Action-->>Page: Return Quote (Price, distance, etc.)
    Page->>User: Display Quote
```

### 2. Order Creation Workflow

Orders require an authenticated session (simulated as a `repartidor` in dev) and complex validation of timing windows.

```mermaid
sequenceDiagram
    participant User
    participant Page as Checkout Page
    participant Action as saveShipment (Action)
    participant DB as Prisma/Database

    User->>Page: Submit Order Details
    Page->>Action: Call saveShipment
    Action->>Action: Check Repartidor Auth
    Action->>Action: Validate schema (Zod)
    Note over Action: Validates timing windows<br/>(pickup < delivery)
    Action->>DB: Create Order record
    DB-->>Action: Order ID
    Action-->>Page: Success Message
    Page->>User: Show Confirmation
```

## AI Architecture

The application uses **Genkit** to manage AI workflows.

- **Initialization**: Centralized in `src/ai/genkit.ts`.
- **Flows**: Defined in `src/ai/flows/`.
- **Deployment**: Integrated as Server Actions for seamless client-side usage via `useActionState`.
