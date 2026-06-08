# INFORME DE AUDITORÍA TÉCNICA: ENVÍOS DOSRUEDAS

Este informe detalla los hallazgos de la auditoría técnica realizada al repositorio, centrada en la arquitectura de Next.js (App Router), la integridad del sistema de diseño, la seguridad de los datos y la configuración del entorno.

---

## 1. ERRORES DE CONFIGURACIÓN Y DEPENDENCIAS

### [ADVERTENCIA] Uso de Next.js v16 (Experimental)
*   **Archivo:** `package.json`, `pnpm-lock.yaml`
*   **Descripción:** El proyecto utiliza `next@16.2.7`. Aunque disponible en el registro de npm, esta versión es altamente experimental.
*   **Riesgo:** Inestabilidad potencial en el App Router, falta de soporte para plugins de terceros y cambios de última hora en Server Actions.
*   **Recomendación:** Evaluar la estabilidad frente a `Next.js 15.x` estable.

### [CRÍTICO] Error en Configuración de AI (Genkit)
*   **Archivo:** `src/ai/genkit.ts`
*   **Descripción:** Se intenta utilizar el modelo `googleai/gemini-2.5-flash`.
*   **Falla:** Dicho modelo no existe en la API oficial de Google AI (actualmente `gemini-2.0-flash` es el más reciente). Esto causará errores 404 en todas las funciones de IA.
*   **Solución:** Actualizar a `googleai/gemini-2.0-flash`.

---

## 2. SISTEMA DE DISEÑO Y UI (STRICT PREMIUM RULES)

### [DESINCRO] Desajuste de Tokens de Color
*   **Archivos:** `tailwind.config.ts` vs `src/app/globals.css`
*   **Problema:**
    *   `tailwind.config.ts`: `primary: "#0022FF"`
    *   `globals.css`: `--primary: 221 47% 43%` (#3a5ba0)
*   **Impacto:** Inconsistencia visual. Las clases de Tailwind no coinciden con las variables CSS del tema.

### [VIOLACIÓN] Uso de Efectos Prohibidos (Glows/Bloom)
*   **Archivos:** `src/app/globals.css`, `src/components/homenew/optimized-header.tsx`
*   **Problema:** Se detectaron clases como `.glow-primary` y `drop-shadow` intensos.
*   **Impacto:** Incumplimiento de las "Strict Premium Design Rules" que prohíben resplandores neón y sombras excesivas.

---

## 3. ARQUITECTURA DE DATOS Y SEGURIDAD

### [VULNERABILIDAD CRÍTICA] Autenticación Simulada
*   **Archivo:** `src/app/ordenes/actions.ts`
*   **Código:** `getAuthenticatedRepartidorIdFromServerSession` retorna el primer repartidor activo sin verificar identidad real.
*   **Riesgo:** Cualquier usuario puede crear órdenes a nombre de repartidores sin estar autenticado.
*   **Solución:** Implementar Middleware de Auth real o, al menos, lanzar un error si no hay sesión válida en entornos que no sean de desarrollo local.

### [FALLA] Serialización de Decimales de Prisma
*   **Archivo:** `src/app/ordenes/actions.ts`
*   **Problema:** Los campos `Decimal` de Prisma se envían directamente a componentes de cliente.
*   **Impacto:** Errores de hidratación ("Objects are not valid as a React child") porque los objetos `Decimal` no son serializables nativamente por Next.js.

---

## 4. CALIDAD DE CÓDIGO Y MANTENIBILIDAD

### [MEJORA] Geocodificación (User-Agent)
*   **Archivo:** `src/lib/maps/nominatim.ts`
*   **Problema:** User-Agent hardcodeado como `EnviosDosRuedas/1.0`.
*   **Recomendación:** Mover a variables de entorno para cumplir con las políticas de uso de Nominatim y permitir contacto técnico.

---

## RESUMEN DE ACCIONES REQUERIDAS
1. **Sincronizar** Tailwind con Variables CSS.
2. **Corregir** el nombre del modelo en Genkit.
3. **Eliminar** efectos de "glow" prohibidos.
4. **Validar** y serializar datos numéricos en Server Actions.
5. **Implementar** control de acceso real en la creación de órdenes.
