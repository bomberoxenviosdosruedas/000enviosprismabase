---
name: Envíos DosRuedas
colors:
  primary: "#2563eb"
  secondary: "#fbbf24"
  background: "#050810"
  foreground: "#f8fafc"
  muted: "#1e293b"
  accent: "#3b82f6"
  destructive: "#ef4444"
---

# Design System: Envíos DosRuedas

## 1. Visual Theme & Atmosphere

Envíos DosRuedas project a **high-tech, futuristic, and ultra-reliable** visual identity. The design is centered around a "Logistics 2.0" aesthetic that combines the speed and efficiency of a courier service with the precision of a modern software platform. It leverages a dark-themed, glassmorphic interface that emphasizes depth, transparency, and vibrant interactive elements.

The atmosphere is defined by **high-contrast visual hierarchies**, where deep navy backgrounds are punctuated by electric blue primary actions and warm amber secondary accents. The use of the Orbitron typeface for headings adds a mechanical, industrial-strength feel, while the Inter body type ensures readability and professionalism. Micro-animations and shader backgrounds provide a sense of constant motion and responsiveness, mirroring the core business value of rapid delivery.

## 2. Color Palette & Roles

### Primary Foundation

- **Deep Void Background** (#050810): The canvas for the entire application. A dark, near-black blue that provides maximum contrast for text and interactive elements.
- **Surface / Card Background** (HSL 225 57% 3.9% / rgba(255, 255, 255, 0.03)): Used for containers and navigation bars, often with backdrop-blur for a glassmorphic effect.
- **Pure White / Slate 50** (#f8fafc): Primary text color for maximum legibility against dark backgrounds.

### Accent & Interactive

- **Azul Intenso (Electric Blue)** (#2563eb): The brand's heartbeat. Used for primary CTAs, active navigation states, and critical highlights. Often paired with a glow or drop-shadow effect.
- **Amarillo Ámbar (Amber)** (#fbbf24): Secondary brand color. Used for highlighting the "DosRuedas" suffix in branding, as well as for warnings, ratings, and secondary accents that need high visibility.
- **Blue Gradient**: A dynamic transition from #2563eb through #3b82f6, used to give buttons and special sections a "powered-up" feel.

### Typography & Text Hierarchy

- **Primary Text**: Slate 50 (#f8fafc) for main content.
- **Secondary Text**: Slate 400 (#94a3b8) for descriptions and metadata.
- **Muted Text**: Slate 500 / 600 for less important information and placeholders.

### Functional States

- **Success**: Emerald 500 (#10b981).
- **Warning / Pending**: Amber 500 (#f59e0b).
- **Error / Destructive**: Rose 600 (#e11d48).

## 3. Typography Rules

### Hierarchy & Weights

- **Display (Headings)**: **Orbitron**. Used exclusively for titles, badges, and branding. It is often used with *italic* styling and *uppercase* transform to convey speed.
  - **Display Large**: 48px, 900 weight, 1.1 line-height.
  - **Headline Large**: 24px, 700 weight, 1.3 line-height.
- **Sans (Body)**: **Inter**. Used for all descriptive text, form inputs, and UI controls.
  - **Body Large**: 18px, 400 weight, 1.6 line-height.
  - **Body Medium**: 16px, 400 weight, 1.5 line-height.
  - **Label Small**: 12px, 700 weight, 0.1em tracking.

### Spacing Principles

- **Generous Tracking**: Labels and small badges use wide tracking (0.1em to 0.3em) to enhance the "technical" look.
- **Tight Heading Leading**: Large display headings use tight line heights (1.1) to create a bold, impactful block of text.

## 4. Component Stylings

### Buttons

- **Shape**: Ranges from `rounded-md` (8px) for standard UI to `rounded-2xl` (16px) for Hero CTAs.
- **Primary (Gradient)**: Uses a blue-to-blue gradient with a subtle white-to-transparent shine animation on hover. Shadow: `0 10px 40px -10px rgba(37,99,235,0.4)`.
- **Secondary (Amber)**: Solid #fbbf24 with black text. Highly visible for "Request Service" actions.

### Cards & Containers

- **Glassmorphism**: Cards use a very subtle white border (`border-white/10`) and a semi-transparent background (`bg-white/[0.03]`) with `backdrop-blur-md`.
- **Shadows**: Subtle but deep shadows to create depth on the dark background.
- **Bento Grid**: Service overviews and features are organized in a grid layout with varying card sizes.

### Navigation

- **Floating Header**: A transparent, blurred container that "floats" at the top of the viewport.
- **Active States**: Indicated by a glowing blue background and border (`bg-primary/20 text-blue-400 border-primary/30`).

### Inputs & Forms

- **Dark Insets**: Inputs have a dark, slightly inset appearance with a focus ring that matches the primary blue.
- **Validation**: Errors are clearly marked with red borders and descriptive icons.

## 5. Layout Principles

### Grid & Structure

- **8dp Grid**: All spacing, padding, and margins are based on an 8px increment system.
- **Max Content Width**: 1280px (max-w-7xl) for main content areas.
- **Responsive Breakpoints**: Standard Tailwind breakpoints (sm, md, lg, xl, 2xl).

### Whitespace Strategy

- **Breathable Sections**: Large vertical gaps (pt-24 to pt-32) between major sections to prevent information overload.
- **Compact Components**: Internal component spacing is tighter to maintain a "dashboard-like" efficiency.

### Alignment & Visual Balance

- **Center-to-Left Transition**: Heroes are often centered on mobile and left-aligned on desktop to balance visuals and text.
- **Motion Path**: Visual elements (like the Hero visuals) are placed to guide the eye from the headline to the primary CTA.

## 6. Design System Notes for Stitch Generation

### Language to Use

- When generating screens, use terms like "Glassmorphism", "High-tech logistics", "Dark Mode", "Orbitron Typography", and "Electric Blue Accents".
- Describe layouts as "Bento grids" or "Progressive disclosure forms".

### Color References

- `bg-background`: #050810
- `text-primary`: #2563eb
- `text-secondary`: #fbbf24
- `border-white/10`: Subtle glass border.

### Component Prompts

- "Create a glassmorphic card with a 1px white/10 border, backdrop-blur, and an Orbitron heading in italic uppercase."
- "Design a primary button with a blue gradient background and a glowing drop shadow."
- "Generate a multi-step form using a progressive disclosure pattern with a dark, tech-oriented theme."

### Incremental Iteration

- To refine a screen, ask to "increase the glassmorphism blur" or "add an amber accent to the headline to match the DosRuedas branding".
