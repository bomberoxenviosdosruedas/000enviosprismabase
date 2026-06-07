# 01_refactorizacion_sistema_diseno

## Objetivo
Refactorizar los estilos hardcoded y eliminar inconsistencias visuales en toda la aplicación para alinearlos estrictamente con el sistema de diseño "Envios Dos Ruedas" definido en `.stitch/DESIGN.md`.

## Fases de Trabajo

### Fase 1: Auditoría y Configuración Base
- [ ] Ajustar `tailwind.config.ts` para mapear completamente la paleta de colores (`surface`, `primary`, `secondary`, `tertiary`, etc.) según `.stitch/DESIGN.md`.
- [ ] Limpiar `src/app/globals.css` eliminando variables CSS obsoletas y estandarizando las utilidades de tipografía.
- [ ] Asegurar que las fuentes (`Anybody`, `Hanken Grotesk`, `JetBrains Mono`) estén correctamente configuradas y vinculadas.

### Fase 2: Normalización de Componentes (Component-first)
- [ ] Refactorizar componentes en `src/components/` para usar clases de Tailwind basadas en el sistema de diseño.
- [ ] Aplicar lógica de "Elevation & Depth" mediante tonalidades de superficies en lugar de sombras tradicionales.
- [ ] Ajustar radios de borde (`rounded-sm` a `rounded-xl`) según el uso específico (botones, tarjetas, badges).

### Fase 3: Ajuste de Layouts y Páginas
- [ ] Estandarizar márgenes, gutters y espaciado entre secciones (base 8px, 80px+ entre secciones).
- [ ] Implementar sistema tipográfico (Anybody para headers, Hanken Grotesk para body).

### Fase 4: Verificación
- [ ] Validar accesibilidad y contraste (especialmente entre azul primario y texto, y acentos Cyber Gold).
- [ ] Ejecutar pruebas de regresión visual en componentes críticos.

## Prioridades
1. Configuración de `tailwind.config.ts` y `globals.css` (Fuente de verdad).
2. Sistema de colores (`primary`, `secondary`, `tertiary`, `surface`).
3. Tipografía (Jerarquía de tamaños y fuentes).
4. Componentes de UI (Botones, Inputs, Cards).

## Notas de Implementación
- Se debe evitar el uso de colores hardcoded (`#hex`) en los archivos `.tsx`. Usar solo las clases configuradas en `tailwind.config.ts`.
- Mantener la arquitectura de componentes `src/components`.
- Utilizar `backdrop-blur` para paneles de nivel 3 (pop-overs).
