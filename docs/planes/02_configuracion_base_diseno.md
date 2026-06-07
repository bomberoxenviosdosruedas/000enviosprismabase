# Plan de Implementación: Refactorización de Sistema de Diseño (Configuración Base)

## Contexto
El objetivo es alinear la configuración base del proyecto con el sistema de diseño "Envios Dos Ruedas" definido en `.stitch/DESIGN.md`. Actualmente, `tailwind.config.ts` y `globals.css` utilizan una estructura de colores genérica que no respeta la paleta y semántica visual definida por el diseño.

## Enfoque Recomendado
1. **Migración de Colores a Tailwind**: Trasladar la paleta de colores desde `.stitch/DESIGN.md` directamente a `tailwind.config.ts` dentro de `theme.extend.colors`. Esto elimina la dependencia de variables CSS HSL complejas y facilita el uso de clases como `bg-surface`, `text-primary`, etc.
2. **Limpieza de `globals.css`**: Eliminar las variables CSS `:root` actuales, dejando solo los estilos base necesarios (reset, scrollbar, etc.).
3. **Estandarización de Tipografía**: Reemplazar las utilidades CSS personalizadas en `globals.css` por clases de utilidad de Tailwind basadas en las configuraciones de `theme.extend.fontFamily` y los tamaños de tipografía del diseño.

## Archivos Críticos
- `tailwind.config.ts`: Modificación total del objeto `theme.extend.colors`.
- `src/app/globals.css`: Eliminación de variables CSS y refactorización de utilidades.

## Verificación
- Comparar visualmente los colores base con los valores hexadecimales de `.stitch/DESIGN.md`.
- Validar que las utilidades de tipografía sigan funcionando correctamente tras la migración a clases de Tailwind.
- Verificar el correcto funcionamiento del `scroll-behavior` y los estilos de enfoque (`:focus-visible`).
