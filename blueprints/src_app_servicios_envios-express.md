# src/app/servicios/envios-express/page.tsx // Envíos Express

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS

- **Hero Anchor**:
  - Pre-Title: "DISPONIBLE EN MAR DEL PLATA"
  - Main Heading: "ENVÍOS EXPRESS INMEDIATOS"
  - Description: "La solución premium para operaciones de alta criticidad horaria. Vos tenés el control total: elegí el rango exacto de entrega con certeza absoluta."
  - Button Label: "COTIZÁ TU ENVÍO EXPRESS"
  - Button Label: "HABLAR POR WHATSAPP"
- **Section: Soluciones Premium**:
  - Badge: "SOLUCIONES PREMIUM"
  - Heading: "ENTREGAS RÁPIDAS Y EFICIENTES"
  - Body Paragraph: "Nuestro servicio Express ofrece cobertura total en Mar del Plata, llegando a barrios clave como Güemes, Chauvín, Los Troncos y la zona del Puerto con rapidez absoluta..."
  - Feature 1: "Alta criticidad horaria" / "Servicio diseñado para cuando el tiempo es el factor más importante..."
  - Feature 2: "Rango horario a elección" / "El cliente elige el rango horario de entrega que mejor se adapte a su necesidad."
  - Feature 3: "Anticipación mínima" / "Solo requerimos un mínimo de 2 horas de anticipación para coordinar tu envío prioritario."
- **Data Terminal / Table (Pricing)**:
  - Heading: "TARIFAS 2026 ENVÍOS EXPRESS"
  - Body Paragraph: "Consultá los precios actualizados para nuestro servicio premium con rango horario a elección."
  - Tier 1: "Radio céntrico" / "Ideal para entregas inmediatas en el centro" / "Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"
  - Tier 2: "Periferia cercana" / "Cobertura extendida con rapidez" / "Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"
  - Tier 3: "Zonas alejadas" / "Llegamos a donde otros no" / "Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"
  - Tier 4: "Límites de ciudad" / "Máxima cobertura urbana" / "Elegís rango horario", "Mínimo 2hs anticipación", "Seguimiento real"
- **Contextual CTA (Dynamic Quotation)**:
  - Badge: "COTIZACIÓN DINÁMICA"
  - Heading: "ZONA 5: .000 / KM"
  - Body Paragraph: "Para envíos de larga distancia fuera del ejido urbano o una cotización precisa con mapa, utilizá nuestro cotizador inteligente de alta precisión."
  - Button Label: "IR AL COTIZADOR"
- **Section: Conditions Accordion**:
  - Heading: "Condiciones del Servicio Express"
  - Accordion 1: "Tiempos y Tolerancia" / "Contamos con una tolerancia de 10 minutos en puerta..."
  - Accordion 2: "Recargos por Clima" / "En días de lluvia, se aplica un recargo del 50%..."
  - Accordion 3: "Bultos y Pesos" / "El servicio estándar incluye un bulto de hasta 5kg/40cm..."
  - Accordion 4: "Anticipación Requerida" / "Para coordinar un envío express con éxito, solicitamos una anticipación mínima de 2 horas."
- **Section: Benefits**:
  - Badge: "VENTAJA COMPETITIVA"
  - Heading: "POR QUÉ ELEGIR EXPRESS"
  - Benefit 1: "Certeza Total" / "Cumplimos con el rango horario pactado con una precisión del 99%."
  - Benefit 2: "Control Absoluto" / "Gestioná tus envíos desde nuestra plataforma con seguimiento en tiempo real."
  - Benefit 3: "Prioridad VIP" / "Tus paquetes son los primeros en nuestra hoja de ruta diaria."
- **Section: Urgent Scenarios**:
  - Heading: "¿CUÁNDO NECESITAS EXPRESS?"
  - Subtitle: "Situaciones donde cada minuto cuenta y la rapidez es fundamental."
  - Scenario 1: "Documentos" / "Contratos, documentos legales, certificados..."
  - Scenario 2: "Salud" / "Medicamentos, análisis médicos y suministros..."
  - Scenario 3: "Negocios" / "Entregas comerciales que no pueden retrasarse..."
  - Scenario 4: "Regalos" / "Regalos y sorpresas que deben llegar en un rango horario acotado"
- **Hero Anchor (CTA)**:
  - Badge: "PRIORIDAD MÁXIMA"
  - Heading: "¿LISTO PARA TU ENVÍO EXPRESS?"
  - Body Paragraph: "No esperes más. Nuestro equipo está listo para manejar tu envío prioritario..."
  - Button Label: "COTIZAR AHORA"
  - Button Label: "WHATSAPP PRIORITARIO"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE

- [Navigation Bar]: Reused from main layout.
- [Hero Anchor]: Split layout with text and a visual rotating card.
- [Data Terminal / Table]: Grid of pricing cards with badge, icon, title, price, and feature list.
- [Interactive Form Field]: Accordion component for service conditions.
- [Hero Anchor] (Section): Asymmetric layout for content with large decorative branding text.
- [Bento Layout / Grid]: Benefit cards with icons and descriptions.
- [Matrix Footer]: Reused from main layout.

## 3. TRANSMISSION & FORWARDING GOALS

- **Quotation CTAs**: Redirect to "/cotizar/express".
- **WhatsApp CTA**: External redirection to WhatsApp for priority support.
- **Accordion Toggles**: Expand to show detailed service terms.
