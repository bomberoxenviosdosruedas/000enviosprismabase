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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
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
