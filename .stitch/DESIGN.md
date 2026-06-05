---
name: Envíos DosRuedas
colors:
  primary: "#2563eb"
  secondary: "#fbbf24"
  background: "#020617"
  foreground: "#f8fafc"
  border: "#1e293b"
  muted: "#1e293b"
  accent: "#1e293b"
  destructive: "#7f1d1d"
---

# Design System: Envíos DosRuedas

## 1. Visual Theme & Atmosphere

Envíos DosRuedas is a premium logistics and messaging platform that exudes professionalism, speed, and technological sophistication. The visual atmosphere is dominated by a refined dark mode that uses **Glassmorphism** to create depth and hierarchy. Surfaces are often semi-transparent with subtle backdrop blurs and hairline borders, giving the interface a high-tech, "OS-like" feel.

The design philosophy prioritizes clarity and efficiency. Layouts utilize an **Immersive Hero** approach followed by a **Bento Grid** structure for service overviews, allowing for a dense yet organized presentation of information. The vibe is "Cyber-Industrial" — combining the rugged reliability of logistics with the precision of modern software.

## 2. Color Palette & Roles

### Primary Foundation

- **Deep Space Background** (`#020617` / HSL 225 57% 3.9%): The core canvas of the application, providing a high-contrast base for all elements.
- **Surface Glass** (Slate 900 with Alpha): Used for cards and popovers, often with `backdrop-blur-md` and a 1px border.
- **Crisp Foreground** (`#f8fafc` / HSL 210 40% 98%): Primary text and icons, ensuring maximum readability.

### Accent & Interactive

- **Azul Intenso** (`#2563eb` / HSL 217.2 91.2% 59.8%): The primary brand color. Used for main CTAs, active states, progress indicators, and key focus rings.
- **Amarillo Ámbar** (`#fbbf24` / HSL 43 96% 56%): The secondary/action color. Signals speed, alerts, and high-importance interactive elements. It provides a warm, energetic contrast to the cool blues.

### Typography & Text Hierarchy

- **Primary Text**: Off-white for high legibility on dark backgrounds.
- **Muted Text** (Slate 400 / HSL 215 20.2% 65.1%): Used for secondary info, placeholders, and less critical metadata.
- **Inverse Text**: Deep Navy for use on top of Amarillo Ámbar backgrounds.

### Functional States

- **Success**: Emerald/Green tones for completed deliveries.
- **Error/Destructive** (`#7f1d1d` / HSL 0 62.8% 30.6%): Used for critical alerts and destructive actions.
- **Warning**: Amber/Orange for delayed shipments.

## 3. Typography Rules

### Hierarchy & Weights

- **Display & Headings**: `Orbitron`. A geometric, futuristic sans-serif that defines the brand's tech-forward identity. Used for page titles and major section headers.
- **Body & UI**: `Inter` (falling back to Sans). A highly legible, neutral sans-serif optimized for data-heavy logistics interfaces.
- **Weights**:
  - 900 (Black) for Display LG.
  - 700 (Bold) for Headlines.
  - 400 (Regular) for Body text.
  - 500 (Medium) for UI Labels and Interactive components.

### Spacing Principles

- **Display Scale**: Large headings (48px) have tight line-height (1.1) and negative letter-spacing (-0.02em) for a punchy, editorial look.
- **Body Scale**: Standard body (16px) uses a relaxed line-height (1.5) to ensure readability of long addresses and descriptions.
- **Label Tracking**: Small labels (12px) use increased letter-spacing (0.1em) for better scanability.

## 4. Component Stylings

### Buttons

- **Shape**: Rounded corners (`rounded-lg` / 1rem) for a modern, friendly but professional look.
- **Interaction**: Instant feedback with `active:scale-95`. Primary buttons use Azul Intenso background; Secondary use Amarillo Ámbar.
- **Touch Target**: Minimum 44x44px for all mobile-friendly actions.

### Cards & Bento Grid

- **Style**: Glassmorphic containers with `bg-card/50` and `backdrop-blur-xl`.
- **Borders**: 1px subtle borders (`border-border`) that catch the "light" of background gradients.
- **Layout**: Varied card sizes (spanning 1 or 2 columns) to create visual interest and hierarchy in the services section.

### Navigation

- **Header**: Sticky glass bar with `backdrop-blur-md`.
- **Active State**: Subtle indicator (color change or underline) with smooth transitions.
- **Mobile**: Full-screen overlay or bottom drawer with large, touchable targets.

### Inputs & Forms

- **Field Style**: Dark, inset backgrounds with high-contrast focus rings (`ring-primary`).
- **Feedback**: Integrated error messages and success states that don't shift the layout.

## 5. Layout Principles

### Grid & Structure

- **8dp Grid System**: All spacing (p-2, m-4, gap-8) is based on a 4px/8px base unit.
- **Max Width**: 1400px (`container-max`) for desktop layouts, ensuring content remains readable on ultra-wide screens.
- **Breakpoints**: Standard Tailwind breakpoints, with a focus on seamless transition from mobile (margin-mobile: 16px) to desktop (margin-desktop: 32px).

### Whitespace Strategy

- **Breathable Sections**: Generous vertical spacing (32px - 64px) between major page sections to reduce cognitive load.
- **Compact Data**: Tighter internal spacing (8px - 16px) within cards and forms to keep related information together.

### Alignment & Visual Balance

- **Centric Heroes**: Centralized text and CTAs for hero sections to command attention.
- **Grid Balance**: Use of empty space and varying card sizes to guide the eye through the service offerings.

## 6. Design System Notes for Stitch Generation

### Language to Use

- When generating screens, use terms like "Glassmorphic," "Bento Grid," "Cyber-Industrial," and "Immersive."
- Describe backgrounds as "Deep Navy" or "Slate 950."
- Refer to buttons as "High-contrast Azul Intenso" or "Tactile Amarillo."

### Color References

- Primary Action: `bg-[#2563eb]`
- Highlight/Urgency: `bg-[#fbbf24]`
- Root Background: `bg-[#020617]`
- Surface/Card: `bg-slate-900/50 backdrop-blur-md border-white/10`

### Component Prompts

- "A Bento Grid section with 3 glassmorphic cards showing different shipping speeds."
- "A hero section with a deep navy background, Orbitron display text, and a glowing Azul Intenso CTA."
- "A multi-step shipping calculator with a clean progressive disclosure layout and tactile Amarillo buttons."

### Incremental Iteration

- Start with the layout structure (Bento vs Linear).
- Apply the dark theme and glassmorphism.
- Refine with Orbitron headings and Lucide icons (stroke-width 1.5).
