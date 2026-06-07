# Plan de Auditoría y Refactorización de Componentes

## Contexto
El sistema de diseño "Envios Dos Ruedas" (definido en `.stitch/DESIGN.md`) requiere una migración sistemática desde estilos hardcoded (colores, espaciados, radios) hacia tokens de Tailwind CSS recién configurados en `tailwind.config.ts`.

## Estrategia de Auditoría
El alcance es extenso, por lo que se priorizará la refactorización por "capas de componentes":
1.  **Componentes UI Base (`src/components/ui/`)**: Asegurar que los componentes primitivos (Button, Card, Input) respeten los tokens.
2.  **Secciones de Página (`src/components/homenew`, `src/components/calculator`, `src/components/express`, etc.)**: Refactorizar contenedores y bloques de contenido para usar `bg-surface`, `bg-surface-container`, etc.
3.  **Refinamiento de Tipografía**: Asegurar el uso de las nuevas clases (`.text-display-lg`, etc.) reemplazando utilidades obsoletas.

## Plan de Ejecución
1.  **Auditoría Técnica**:
    - Usar `Grep` para detectar patrones problemáticos: `bg-.*`, `border-.*`, `rounded-.*`, `text-.*` que contengan valores hexadecimales o nombres de colores antiguos.
2.  **Refactorización por Lotes**:
    - **Lote 1 (Core)**: `src/components/ui/` (Button, Card, Input, Textarea).
    - **Lote 2 (Home & Layout)**: `src/components/homenew/` y componentes hero de las diferentes páginas.
    - **Lote 3 (Específicos de Negocio)**: Calculadoras, secciones de beneficios y formularios de contacto.
3.  **Consistencia**: Cada lote debe ser validado visualmente o mediante el uso de `/verify` si es posible.

## Notas de Diseño a Aplicar:
- **Botones**: `rounded-sm` (4px), 1px inner glow, `secondary` (Cyber Gold).
- **Cards**: `rounded-lg` (8px), `surface-container-low`, 1px border.
- **Inputs**: `bg-surface-container-low`, 1px `border-outline-variant` (se engrosa en focus).
- **Tipografía**: `Anybody` (Display), `Hanken Grotesk` (Body), `JetBrains Mono` (Labels).

## Seguimiento
- El progreso se trackeará en el gestor de tareas del proyecto, marcando cada lote como completado.
