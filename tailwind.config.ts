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
  prefix: "",
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
        surface: '#13131b',
        'surface-dim': '#13131b',
        'surface-bright': '#393842',
        'surface-container-lowest': '#0d0d16',
        'surface-container-low': '#1b1b23',
        'surface-container': '#1f1f28',
        'surface-container-high': '#292932',
        'surface-container-highest': '#34343d',
        'on-surface': '#e4e1ed',
        'on-surface-variant': '#c5c5db',
        'inverse-surface': '#e4e1ed',
        'inverse-on-surface': '#302f39',
        outline: '#8f8fa4',
        'outline-variant': '#444557',
        'surface-tint': '#bdc2ff',
        primary: {
          DEFAULT: '#0022FF',
          foreground: '#bbc1ff',
        },
        'on-primary': '#0012a1',
        'primary-container': '#0022ff',
        'on-primary-container': '#bbc1ff',
        'inverse-primary': '#2b3fff',
        secondary: {
          DEFAULT: '#fff9ef',
          foreground: '#3a3000',
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        'on-tertiary': '#00363a',
        'tertiary-container': '#005b61',
        'on-tertiary-container': '#00dae7',
        error: {
          DEFAULT: '#ffb4ab',
          foreground: '#690005',
        },
        whatsapp: "hsl(var(--whatsapp))",
        facebook: "hsl(var(--facebook))",
        instagram: "hsl(var(--instagram))",
      },
      fontSize: {
        xxs: "0.625rem",
      },
      borderRadius: {
        xl: "0.75rem",    /* 12px */
        lg: "0.5rem",     /* 8px */
        md: "0.375rem",   /* 6px */
        DEFAULT: "0.25rem", /* 4px */
        sm: "0.125rem",   /* 2px */
        full: "9999px",
      },
      spacing: {
        base: "8px",
        gutter: "24px",
        "margin-desktop": "64px",
        "margin-mobile": "20px",
      },
      fontFamily: {
        anybody: ["var(--font-anybody)", "sans-serif"],
        hanken: ["var(--font-hanken)", "sans-serif"],
        jetbrains: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-hanken)", "sans-serif"],
        display: ["var(--font-anybody)", "sans-serif"],
      },
      backgroundImage: {
        "glow-conic": "conic-gradient(from 180deg at 50% 50%, #0022FF 0deg, #FFD700 180deg, #0022FF 360deg)",
      },
      boxShadow: {
        "bloom-primary": "0 0 20px rgba(0, 34, 255, 0.15)",
        "bloom-secondary": "0 0 20px rgba(255, 215, 0, 0.15)",
      },
    },
  },
  plugins: [animate],
} satisfies Config

export default config
