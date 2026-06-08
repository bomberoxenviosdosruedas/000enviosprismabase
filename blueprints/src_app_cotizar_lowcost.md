# src/app/cotizar/lowcost/page.tsx // Cotizador LowCost

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS

- **Hero Anchor**:
  - Heading: "PRESUPUESTO LOGÍSTICO LOWCOST"
  - Subtitle: "Calculá tu tarifa para envíos programados y masivos en Mar del Plata."
- **Interactive Form Field (Calculator)**:
  - Step 1 Label: "Configuración de Ruta"
  - Step 2 Label: "Resultado de Cotización"
  - Form Input Placeholder (Origin): "Ej: Av. Colón 1234"
  - Form Input Placeholder (Destination): "Ej: Juan B. Justo 5678"
  - Button Label (Submit): "Calcular Cotización"
  - Button Label (Calculating): "Calculando..."
  - Result Heading: "Cotización Low Cost"
  - Result Description: "Valores estimados basados en la ruta más óptima para envíos económicos."
  - Data Label: "Distancia"
  - Data Label: "Tiempo Estimado"
  - Data Label: "Total Estimado"
  - Error Message: "La distancia excede los rangos estándar..."
  - Button Label (Confirm): "Confirmar Envío"
  - Button Label (Retry): "Volver a cotizar"
- **Section: Map Features**:
  - Heading: "Beneficios de Nuestro Cotizador"
  - Body Paragraph: "Nuestra herramienta de cotización con mapa integrado te ofrece transparencia y control sobre tus envíos."
  - Feature 1: "Visualización en Mapa" / "Observa la ruta exacta que tomará tu envío..."
  - Feature 2: "Cálculo Preciso" / "Obtén estimaciones de distancia y tiempo..."
  - Feature 3: "Confirmación Fácil" / "Una vez cotizado, puedes proceder a confirmar tu envío..."
- **Section: Pricing Information**:
  - Badge: "Transparencia de Precios"
  - Heading: "¿Cómo Calculamos el Precio?"
  - Body Paragraph: "Nuestros precios se basan en la distancia. Queremos que siempre sepas qué estás pagando."
  - Card 1: "Basado en la Distancia" / "Utilizamos la distancia calculada entre origen y destino..."
  - Card 2: "Tiempo Estimado (Informativo)" / "El tiempo de entrega estimado se calcula utilizando datos de tráfico..."
  - Footer Text: "Para distancias muy largas... te invitamos a contactarnos..."
- **Section: Calculator Tips**:
  - Heading: "Consejos para una Cotización Exitosa"
  - Body Paragraph: "Sigue estas recomendaciones para obtener la cotización más precisa..."
  - Tip 1: "Direcciones Precisas" / "Asegúrate de ingresar direcciones completas..."
  - Tip 2: "Verifica en el Mapa" / "Una vez calculada la ruta, revisa que los puntos..."
  - Tip 3: "Datos de Contacto Claros" / "proporciona números de teléfono válidos..."
- **Hero Anchor (Contact)**:
  - Heading: "¿Dudas o Envíos Especiales?"
  - Body Paragraph: "Si tu envío excede nuestros rangos estándar... no dudes en contactarnos."
  - Button Label: "Formulario de Contacto"
  - Button Label: "Llámanos: 223-660-2699"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE

- [Navigation Bar]: Reused from main layout.
- [Hero Anchor]: Page title and subtitle block.
- [Interactive Form Field]: Multi-step form with address autocomplete (LowCost logic).
- [Data Terminal / Table]: Results card showing calculated LowCost price.
- [Bento Layout / Grid]: Feature cards with icons.
- [Bento Layout / Grid]: Pricing calculation explanation cards.
- [Bento Layout / Grid]: Tip cards for users.
- [Hero Anchor] (Section): Call-to-action block for special cases.
- [Matrix Footer]: Reused from main layout.

## 3. TRANSMISSION & FORWARDING GOALS

- **Address Autocomplete**: Collects location strings for low-cost routing.
- **Calculate Action**: Triggers low-cost pricing logic.
- **Confirm Action**: Redirects to low-cost shipment booking.
- **Contact Action**: Redirects to "/contacto" or initiates a phone call.
