# Envíos DosRuedas 🏍️

**Envíos DosRuedas** es una plataforma integral de logística y mensajería diseñada para optimizar la gestión de envíos y la experiencia del usuario. Utilizando un stack tecnológico de vanguardia, la aplicación ofrece cotizaciones precisas en tiempo real, seguimiento de pedidos y una interfaz altamente interactiva.

## 🚀 Stack Tecnológico

La arquitectura del proyecto se basa en las siguientes tecnologías:

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Lenguaje**: [TypeScript](https://www.typescriptlang.org/)
- **Base de Datos**: PostgreSQL
- **ORM**: [Prisma](https://www.prisma.io/)
- **Inteligencia Artificial**: [Firebase Genkit](https://js.p.run/docs/genkit/) con el modelo Google Gemini.
- **Estilos y UI**: [Tailwind CSS](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/) y [Framer Motion](https://www.framer.com/motion/).
- **Mapas y Geolocalización**:
  - [Leaflet](https://leafletjs.com/) para visualización.
  - [OpenStreetMap (Nominatim)](https://nominatim.org/) para geocodificación.
  - [OSRM](http://project-osrm.org/) para cálculo de rutas y distancias.
- **Despliegue**: Optimizado para [Netlify](https://www.netlify.com/).

## 📊 Modelo de Datos (Arquitectura)

El esquema de base de datos en Prisma define las siguientes entidades principales y sus relaciones:

- **`User` & `Post`**: Modelos base para la gestión de usuarios y contenido relacionado.
- **`Client`**: Almacena datos de contacto y direcciones frecuentes de los clientes. Tiene una relación **1:N** con `Order`.
- **`Order`**: El núcleo del sistema. Relaciona un `Client` con un `Repartidor`. Contiene detalles de origen, destino, estados (`PENDIENTE`, `EN_CURSO`, `ENTREGADO`, `CANCELADO`), costos y tiempos de entrega.
- **`Repartidor`**: Información de los transportistas, incluyendo tipo de vehículo y placa. Tiene una relación **1:N** con `Order` y `Etiqueta`.
- **`Etiqueta`**: Entidad para la gestión logística de bultos y estados de entrega específicos.
- **`PriceRange`**: Configuración dinámica para el cálculo de costos basada en la distancia y el tipo de servicio (`EXPRESS`, `LOW_COST`, `PUNTO_DE_RETIRO`).
- **`SocialPost`**: Almacena metadatos de publicaciones de redes sociales (Instagram, Facebook, WhatsApp) para ser mostrados en la plataforma.

## ⚙️ Instalación y Configuración

Sigue estos pasos para configurar el proyecto localmente:

1. **Clonar el repositorio:**

   ```bash
   git clone <url-del-repositorio>
   cd 000enviosprismabase
   ```

2. **Instalar dependencias:**
   Este proyecto utiliza `pnpm`:

   ```bash
   pnpm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto basándote en las necesidades detectadas:

   ```env
   DATABASE_URL="tu_url_de_postgresql"
   DIRECT_URL="tu_url_directa_de_base_de_datos"
   GEMINIENLACE="tu_api_key_de_google_gemini"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

4. **Configurar la base de datos:**
   Genera el cliente de Prisma y sincroniza el esquema:

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Ejecutar el servidor de desarrollo:**

   ```bash
   pnpm run dev
   ```

## 📜 Scripts Disponibles

Definidos en `package.json`:

- **`pnpm run dev`**: Inicia el servidor de desarrollo de Next.js.
- **`pnpm run build`**: Crea una compilación optimizada para producción.
- **`pnpm run start`**: Inicia el servidor en modo producción.
- **`pnpm run lint`**: Ejecuta el linter para asegurar la calidad del código.
- **`pnpm run lint:docs`**: Valida el formato de la documentación Markdown.
- **`pnpm run db:generate`**: Genera el cliente de Prisma.
- **`pnpm run db:push`**: Sincroniza el esquema de Prisma con la base de datos.
- **`pnpm run db:migrate`**: Crea y aplica migraciones de base de datos.
- **`pnpm run db:seed`**: Puebla la base de datos con datos de prueba.

## 📂 Estructura del Repositorio

```text
.
├── prisma/               # Esquema de base de datos y migraciones
├── public/               # Activos estáticos (imágenes, iconos)
├── src/
│   ├── ai/               # Flujos de Genkit e integración con IA
│   ├── app/              # Rutas de Next.js (App Router) y Server Actions
│   ├── components/       # Componentes de React organizados por dominio
│   │   ├── calculator/   # Lógica de cotización y mapas interactivos
│   │   ├── homenew/      # Componentes de la página de inicio
│   │   ├── ui/           # Componentes base de Shadcn UI
│   │   └── ...           # (about, contact, express, lowcost, etc.)
│   ├── hooks/            # Hooks de React personalizados
│   ├── lib/              # Utilidades, ruteo (OSRM) y clientes
│   └── types/            # Definiciones de tipos de TypeScript
├── docs/                 # Documentación técnica adicional
└── package.json          # Dependencias y scripts
```

---

Desarrollado con ❤️ por el equipo de **Envíos DosRuedas**.
