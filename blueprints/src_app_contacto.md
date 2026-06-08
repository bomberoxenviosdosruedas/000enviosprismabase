# src/app/contacto/page.tsx // Contacto

## 1. MAIN TEXT CONTENT & COPYWRITING LABELS

- **Hero Anchor**:
  - Heading: "CENTRO DE ATENCIÓN"
  - Subtitle: "Estamos listos para gestionar tu próxima entrega. Conectá con nosotros a través de nuestros canales oficiales."
- **Section: Contact Info**:
  - Card 1: "WhatsApp Directo" / "Chateá con nosotros para una respuesta instantánea." / "+54 223 660-2699" / "ABRIR WHATSAPP"
  - Card 2: "Correo Oficial" / "Envianos tus consultas corporativas o presupuestos." / "<matiascejas@enviosdosruedas.com>" / "ENVIAR EMAIL"
  - Card 3: "Ubicación" / "Visitanos en nuestra base operativa en Mar del Plata." / "Friuli 1972, Mar del Plata" / "VER EN MAPA"
- **Interactive Form Field (Contact Form)**:
  - Heading: "Envianos un Mensaje"
  - Subtitle: "Completá el formulario y un asesor se contactará con vos a la brevedad."
  - Form Input Label: "Nombre *" / "Tu nombre"
  - Form Input Label: "Email *" / "<tu@email.com>"
  - Form Input Label: "Mensaje *" / "Contanos sobre tu consulta o necesidad de envío..."
  - Button Label: "Enviar Mensaje"
  - Success Message: "¡Mensaje Enviado!" / "Tu consulta ha sido recibida correctamente..."
- **Section: Business Hours**:
  - Heading: "Horarios de Atención"
  - Subtitle: "Estamos disponibles para atenderte en los siguientes horarios."
  - Schedule Day: "Lunes - Viernes" / "9:00 - 18:00"
  - Schedule Day: "Sábados" / "10:00 - 15:00 "
  - Schedule Day: "Domingos" / "Cerrado"
- **Section: Contact Map**:
  - Badge: "Ubicación"
  - Heading: "Nuestra Zona de Cobertura"
  - Body Paragraph: "Operamos en toda la ciudad de Mar del Plata, listos para llegar a donde nos necesites."
  - Button Label: "Ver en OpenStreetMap"

## 2. INTERFACE ELEMENTS & CORE COMPONENTS TREE

- [Navigation Bar]: Reused from main layout.
- [Hero Anchor]: Centered title and description.
- [Bento Layout / Grid]: Contact method cards with icons and actions.
- [Interactive Form Field]: Form with validation and status indicators.
- [Data Terminal / Table]: Business hours card with structured rows.
- [Hero Anchor] (Section): Map container with external link action.
- [Matrix Footer]: Reused from main layout.

## 3. TRANSMISSION & FORWARDING GOALS

- **WhatsApp Action**: External redirection to WhatsApp.
- **Email Action**: Mailto link trigger.
- **Map Action**: External redirection to OpenStreetMap.
- **Form Submission**: Sends contact data to server actions and displays success/error toasts.
