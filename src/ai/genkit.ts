import { genkit } from "genkit";
import { googleAI } from "@genkit-ai/google-genai";

// 1. Validación estricta de la API Key en desarrollo y producción
const apiKey = process.env.GEMINIENLACE;

if (!apiKey) {
  throw new Error(
    "❌ ERROR CRÍTICO: La variable de entorno GEMINIENLACE no está definida. " +
      "Por favor, verifícala en tu archivo .env",
  );
}

// 2. Inicialización centralizada de Genkit
export const ai = genkit({
  plugins: [googleAI({ apiKey })],
  // Modelo por defecto equilibrado y de ultra-baja latencia
  model: "googleai/gemini-2.0-flash",
});

// 3. Exportación de alias de modelos para usarlos fácilmente en tus flows
export const models = {
  flash: "googleai/gemini-2.0-flash", // Velocidad y eficiencia para rutas en tiempo real
  pro: "googleai/gemini-2.0-pro", // Máxima inteligencia para lógicas complejas
};
