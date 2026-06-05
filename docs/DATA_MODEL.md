# Data Model

Based on the application code and types, the system uses the following logical data model.

*Note: The physical `schema.prisma` file may be a subset of this model as the project evolves.*

## Entities

### `User`

Standard system user, typically used for authentication.

- `id`: String (CUID), Primary Key
- `email`: String, Unique
- `name`: String (Optional)
- `createdAt`: DateTime
- `updatedAt`: DateTime

### `Client`

A registered customer who can place orders.

- `id`: Int, Primary Key
- `name`: String
- `lastName`: String (Optional)
- `phone`: String, Unique
- `email`: String, Unique (Optional)
- `address`: String
- `addressLat`: Decimal
- `addressLng`: Decimal
- `isActive`: Boolean

### `Order`

Represents a shipping request.

- `id`: Int, Primary Key
- `clientId`: Int (Optional), Foreign Key to `Client`
- `originFullName`: String
- `originPhone`: String
- `originAddress`: String
- `originLat`: Decimal
- `originLng`: Decimal
- `destinationContactName`: String
- `destinationContactPhone`: String
- `destinationContactEmail`: String (Optional)
- `destinationAddress`: String
- `destinationLat`: Decimal
- `destinationLng`: Decimal
- `serviceType`: Enum (`EXPRESS`, `LOWCOST`, etc.)
- `status`: String (Default: "pendiente")
- `quotedPrice`: Decimal
- `shippingCost`: Decimal
- `totalCost`: Decimal
- `distanceText`: String
- `durationText`: String
- `pickupDate`: DateTime
- `pickupTimeFrom`: String
- `pickupTimeTo`: String
- `deliveryDate`: DateTime
- `deliveryTimeFrom`: String
- `deliveryTimeTo`: String
- `pickupDateTime`: DateTime (Derived)
- `deliveryDateTime`: DateTime (Derived)

### `PriceRange`

Configurable pricing rules based on distance.

- `id`: Int, Primary Key
- `distanciaMinKm`: Decimal
- `distanciaMaxKm`: Decimal
- `precioRango`: Decimal
- `serviceType`: Enum
- `isActive`: Boolean

### `Repartidor`

Delivery personnel authorized to manage or create orders.

- `id`: Int, Primary Key
- `name`: String
- `isActive`: Boolean

## Relationships

- **Client 1:N Order**: A client can have multiple orders. An order optionally belongs to a client.
- **Repartidor 1:N Order**: (Implied) Repartidores manage the delivery of orders.
