import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: '#09090b',
        foreground: '#f8fafc',
        primary: {
          DEFAULT: '#0022FF',
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#FFD700',
          foreground: '#09090b',
        },
        surface: '#18181b',
        'surface-dim': '#09090b',
        'surface-bright': '#27272a',
        zinc: {
          950: '#09090b',
        }
      },
      fontFamily: {
        sans: ["var(--font-geist)", "sans-serif"],
        display: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        '2xl': '1rem',
        xl: '0.75rem',
        lg: '0.5rem',
        md: '0.375rem',
        DEFAULT: '0.25rem',
      },
      boxShadow: {
        'studio-glow': '0 0 40px -12px rgba(0, 34, 255, 0.3)',
      }
    },
  },
  plugins: [animate],
} satisfies Config

export default config
