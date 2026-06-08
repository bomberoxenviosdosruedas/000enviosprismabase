# Envíos DosRuedas 🏍️

**Envíos DosRuedas** es una plataforma integral de logística de última milla, envíos de comercio electrónico y mensajería (3PL) diseñada específicamente para optimizar la gestión de entregas en la ciudad de Mar del Plata, Argentina. Utilizando una arquitectura moderna y de alto rendimiento, la aplicación ofrece cotizaciones precisas basadas en distancias reales de conducción, gestión automatizada de etiquetas de envío, portales interactivos para repartidores y un sistema inteligente de resúmenes de testimonios mediante Inteligencia Artificial.

---

## 🛠️ Stack Tecnológico

El proyecto está construido sobre un stack moderno, robusto y escalable:

- **Framework**: [Next.js v16.2.4 (App Router)](https://nextjs.org/) con soporte para React 19.
- **Lenguaje**: [TypeScript v6.0.3](https://www.typescriptlang.org/) con tipado estricto.
- **Base de Datos**: PostgreSQL.
- **ORM**: [Prisma ORM v7.8.0](https://www.prisma.io/) con cliente generado a medida y adaptadores optimizados.
- **Inteligencia Artificial**: [Firebase Genkit v1.36.0](https://js.p.run/docs/genkit/) interactuando con los modelos **Google Gemini** (Gemini 2.5 Flash / Pro).
- **Estilos y Componentes**:
  - [Tailwind CSS v3.4.19](https://tailwindcss.com/) para estilos utilitarios.
  - [Shadcn UI](https://ui.shadcn.com/) para componentes visuales accesibles.
  - [Framer Motion](https://www.framer.com/motion/) para micro-interacciones y transiciones fluidas.
- **Mapas y Geolocalización**:
  - [Leaflet v1.9.4](https://leafletjs.com/) y [React Leaflet v5.0.0](https://react-leaflet.js.org/) para visualización interactiva.
  - [OpenStreetMap (Nominatim API)](https://nominatim.org/) para geocodificación de direcciones focalizada en Mar del Plata.
  - [OSRM (Open Source Routing Machine)](http://project-osrm.org/) para el cálculo exacto de rutas, distancias y tiempos de viaje de conducción.
- **Testing**: [Playwright v1.60.0](https://playwright.dev/) para pruebas E2E y de integración.
- **Despliegue**: Configurado y optimizado para [Netlify](https://www.netlify.com/).

---

## ✨ Características Clave

### 1. Ruteo e Interacción en Mapas

Geocodificación inteligente que añade automáticamente contexto local ("Mar del Plata, Buenos Aires, Argentina") y traza rutas interactivas mostrando la distancia precisa y la duración aproximada utilizando el motor OSRM.

### 2. Cotizador de Envíos Dinámico

Cálculo de tarifas instantáneo según tres modalidades de servicio:

- **Express**: Entregas rápidas con tarifa de alta prioridad.
- **Low Cost**: Tarifa económica para entregas de baja prioridad.
- **Punto de Retiro**: Costo reducido utilizando puntos logísticos establecidos.

Las tarifas se calculan buscando rangos dinámicos en la base de datos y aplicando fórmulas de costo base más variable por kilómetro excedente.

### 3. Automatización de Etiquetas y Flujo Logístico

Generación de etiquetas únicas (`Etiqueta`) con códigos de barras o QR utilizando `@zxing/library`, controlando estados logísticos detallados:

- `PENDIENTE`: Creado sin imprimir o asignar.
- `IMPRESA`: Etiqueta generada físicamente.
- `EN_CAMINO`: Asignada a un repartidor y en tránsito.
- `ENTREGADA` / `NO_ENTREGADA`: Estado final con marcas de tiempo de inicio y fin de la entrega.

### 4. Resumen de Testimonios por IA

Lógica implementada con Firebase Genkit y prompts estructurados que analizan los comentarios de clientes y los resumen de forma concisa utilizando el modelo Gemini 2.5 Flash, ideal para paneles administrativos.

---

## ⚙️ Instalación y Configuración Local

Sigue los pasos a continuación para configurar tu entorno de desarrollo local:

### Requisitos Previos

Asegúrate de tener instalado:

- **Node.js** (versión 18 o superior recomendada).
- **pnpm** (administrador de paquetes recomendado, versión 10.x).
- Una instancia de base de datos **PostgreSQL**.

### Paso 1: Clonar el Repositorio

```bash
git clone <url-del-repositorio>
cd 000enviosprismabase
```

### Paso 2: Instalar Dependencias

```bash
pnpm install
```

### Paso 3: Configurar Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto. Puedes basarte en el siguiente ejemplo:

```env
# URL de conexión de Prisma con PostgreSQL (con pooling si se requiere)
DATABASE_URL="postgresql://usuario:contraseña@localhost:5432/envios_dos_ruedas?schema=public"

# URL directa a la base de datos para ejecutar migraciones
DIRECT_URL="postgresql://usuario:contraseña@localhost:5432/envios_dos_ruedas?schema=public"

# Clave de API de Google Gemini para habilitar los flujos de IA
GEMINIENLACE="tu_api_key_de_google_gemini"

# Dirección URL base de la aplicación
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
```

### Paso 4: Inicializar la Base de Datos

Genera el cliente Prisma, empuja el esquema actual y puebla la base de datos con datos semilla de prueba:

```bash
# Generar cliente de Prisma
pnpm db:generate

# Sincronizar el esquema de Prisma con PostgreSQL
pnpm db:push

# Cargar datos de prueba iniciales (clientes, repartidores, rangos de precios)
pnpm db:seed
```

### Paso 5: Iniciar el Servidor de Desarrollo

```bash
pnpm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 📊 Modelo de Datos (Prisma Schema)

La base de datos PostgreSQL consta de las siguientes tablas y relaciones estructuradas para el flujo de mensajería:

| Entidad | Descripción | Relaciones Clave |
| :--- | :--- | :--- |
| **`User`** | Usuarios del sistema para autenticación base. | 1:N con `Post` |
| **`Client`** | Clientes que registran sus datos y direcciones usuales. | 1:N con `Order` |
| **`Order`** | Órdenes de envío que contienen la cotización, coordenadas e información del servicio. | Pertenece a `Client` y `Repartidor` |
| **`Repartidor`** | Conductores registrados, con placas y tipo de vehículo. | 1:N con `Order` y `Etiqueta` |
| **`Etiqueta`** | Etiquetas y bultos generados para control y escaneo de entrega. | Asignada a `Repartidor` |
| **`PriceRange`** | Rangos de tarifas por kilómetros y modalidad de servicio. | Configuración dinámica global |
| **`SocialPost`** | Publicaciones importadas de redes sociales (Instagram, Facebook, WhatsApp). | Visualización promocional |

Para ver la explicación completa de atributos y tipos de datos, consulta el documento de [Modelado de Datos](docs/DATA_MODEL.md).

---

## 📂 Estructura del Repositorio

La arquitectura del repositorio sigue las mejores prácticas de Next.js App Router:

```text
.
├── prisma/                  # Esquema Prisma, migraciones SQL y semilla (seed.ts)
├── public/                  # Archivos estáticos públicos (logos, imágenes)
├── src/
│   ├── ai/                  # Inicialización de Genkit y flujos (Flows y Prompts)
│   │   ├── genkit.ts        # Configuración central del cliente Genkit
│   │   └── flows/           # Flujos y lógica de IA (ej. summarize-testimonials.ts)
│   ├── app/                 # Rutas de la aplicación Next.js, Server Actions y layouts
│   │   ├── actions.ts       # Acciones del servidor principales (contacto, testimonios)
│   │   ├── ordenes/         # Vistas y acciones relacionadas a pedidos y cotizaciones
│   │   └── globals.css      # Estilos CSS globales y tokens de diseño
│   ├── components/          # Componentes modulares reutilizables organizados por dominio
│   │   ├── calculator/      # Cotizador express y lógica de mapas interactivos
│   │   ├── homenew/         # Secciones de la página de inicio (Landing Page)
│   │   └── ui/              # Componentes visuales primitivos de Shadcn UI
│   ├── hooks/               # Hooks de React personalizados
│   ├── lib/                 # Clientes de base de datos y utilidades (OSRM, Nominatim)
│   └── types/               # Tipos de datos estáticos y contratos TS
├── docs/                    # Documentación técnica extendida
├── tests/                   # Pruebas integrales de flujo de usuario (Playwright)
├── package.json             # Dependencias, metadatos y scripts
└── tailwind.config.ts       # Configuración y extensión de temas CSS
```

---

## 📜 Scripts Disponibles

En el archivo `package.json` encontrarás los siguientes comandos útiles:

- **`pnpm run dev`**: Levanta el entorno local con Next.js en modo desarrollo.
- **`pnpm run build`**: Compila la aplicación para producción optimizando bundles.
- **`pnpm run start`**: Ejecuta el servidor optimizado tras compilar.
- **`pnpm run lint`**: Ejecuta ESLint para analizar la calidad y el estilo del código TypeScript/React.
- **`pnpm run lint:docs`**: Comprueba la validez de los formatos de documentación Markdown.
- **`pnpm run db:generate`**: Re-genera el cliente estático de Prisma ORM.
- **`pnpm run db:push`**: Sincroniza directamente el esquema en desarrollo sin generar migraciones SQL.
- **`pnpm run db:migrate`**: Crea una nueva migración incremental y la aplica a la base de datos de desarrollo.
- **`pnpm run db:seed`**: Puebla la base de datos con registros ficticios de prueba.

---

## 🎨 Sistema de Diseño y Estilos (UI/UX)

La interfaz utiliza una identidad visual de vanguardia diseñada para inspirar rapidez y precisión tecnológica:

- **Paleta de Colores**: Basada en un modo oscuro profundo e inmersivo.
  - **Fondo base**: Slate 950 (`#13131b` / `bg-background`).
  - **Color Primario**: Azul Eléctrico (`#0022FF` / `text-primary`).
  - **Acento Secundario**: Cyber Gold / Amarillo Ámbar (`#FFD700` / `text-secondary`).
  - **Acento Terciario**: Neon Cyan (`#00dbe9` / `text-tertiary`).
- **Tipografía**:
  - **Display / Títulos**: `Anybody` o `Orbitron` para una presencia futurista y robusta.
  - **Cuerpo de Texto**: `Hanken Grotesk` para máxima legibilidad en interfaces de datos densos.
  - **Etiquetas y Código**: `JetBrains Mono` para datos logísticos y de depuración.
- **Detalles Visuales**: Tarjetas con efecto de desenfoque translúcido (`glass-panel` con backdrop blur) y bordes resplandecientes con sombras suaves de brillo sutil (`glow-primary` / `glow-secondary`).

Puedes encontrar un análisis de usabilidad y plan de mejoras en el [Informe UI/UX](docs/UI_UX_REPORT.md).

---

## 🧪 Pruebas de Calidad

### Pruebas E2E (Playwright)

El proyecto incluye escenarios de prueba de fin a fin para validar los flujos críticos de la plataforma. Para ejecutar los tests de Playwright localmente:

```bash
# Instalar los navegadores necesarios para Playwright (solo la primera vez)
pnpm exec playwright install

# Ejecutar las pruebas
pnpm exec playwright test
```

### Linter de Documentos

Para garantizar la consistencia en el formato de los archivos Markdown del proyecto, ejecuta:

```bash
pnpm run lint:docs
```

---

## 📚 Documentación Técnica Detallada

Para profundizar en áreas específicas del proyecto, explora los siguientes documentos técnicos:

- 📖 **[Guía del Usuario y Administrador](docs/USER_GUIDE.md)**: Manual operativo del cotizador, portal de reparto y panel administrativo.
- 📡 **[Referencia de API y Acciones de Servidor](docs/API.md)**: Documentación de Server Actions y flujos de IA con Genkit.
- 🏗️ **[Arquitectura y Flujos del Sistema](docs/ARCHITECTURE.md)**: Flujos con diagramas de secuencia Mermaid sobre cotización y creación de pedidos.
- 💾 **[Esquema y Modelo de Datos](docs/DATA_MODEL.md)**: Tipos de campos, enumeraciones y relaciones detalladas de Prisma.
- 🎨 **[Informe de Experiencia de Usuario (UI/UX)](docs/UI_UX_REPORT.md)**: Estado actual y matriz de refactorizaciones visuales propuestas.
