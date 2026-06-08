# Visual Design Directions: Envíos Dos Ruedas

This document defines three distinct visual archetypes for the "Envíos Dos Ruedas" platform, developed using the Elite Design System Architect framework. All directions strictly adhere to the non-negotiable premium constraints.

---

## DIRECTION 1: "ART GALLERY MINIMAL" (Quiet & Clinical)

### 1. Visual Atmosphere Matrix
- **Creativity:** 2/10
- **Variance:** 3/10
- **Density:** 2/10 (Hyper-airy)
- **Motion:** 3/10 (Subtle, linear transitions)

### 2. Color Calibration System
- **Canvas:** #F8FAFC (Slate-50)
- **Surface:** #FFFFFF (White)
- **Text:** #09090B (Off-Black / Zinc-950)
- **Borders:** #A1A1AA (Zinc-400)
- **Accents:** #71717A (Zinc-500 - used only for transaction states)

### 3. Typographic Stack
- **Headings:** Satoshi (Light/Regular weights)
- **Data/Labels:** Geist Mono
- **Scale:**
  - Display: 64px, 300 weight, -0.03em letter-spacing.
  - Headline: 24px, 400 weight.
  - Label: 12px, 500 weight, 0.1em tracking.

### 4. Core Component Blueprints
- **Buttons:** 1px Zinc-400 border, square corners (0px radius). Hover: Inverts to Off-Black background with White text.
- **Inputs:** Minimalist bottom-border only (1px Zinc-400). Labels in Geist Mono positioned top-left.
- **Grid:** Defined by visible 1px strokes. Asymmetric anchoring within bento cells.
- **Motion:** Spring (Stiffness 100, Damping 20) for interaction; standard linear for layout transitions.

---

## DIRECTION 2: "STUDIO BALANCED" (Premium Daily App)

### 1. Visual Atmosphere Matrix
- **Creativity:** 5/10
- **Variance:** 6/10
- **Density:** 5/10 (Balanced)
- **Motion:** 6/10 (Tactile, spring-heavy)

### 2. Color Calibration System
- **Canvas:** #09090B (Zinc-950)
- **Surface:** #18181B (Zinc-900 / Glassmorphic)
- **Text:** #F8FAFC (Zinc-50)
- **Borders:** #27272A (Zinc-800)
- **Accents:** #22543D (Forest Green - Low Saturation)

### 3. Typographic Stack
- **Headings:** Outfit (Semi-Bold/Medium)
- **Body:** Geist Sans
- **Scale:**
  - Display: 64px, 600 weight, -0.02em letter-spacing.
  - Headline: 32px, 500 weight.
  - Label: 12px, 600 weight, uppercase tracking.

### 4. Core Component Blueprints
- **Buttons:** Forest Green fill, 8px border radius. Secondary: Transparent with Zinc-700 border.
- **Inputs:** Zinc-950 background, Forest Green focus ring.
- **Glass Cards:** 70% Zinc-900 opacity, 20px backdrop-blur, 1px subtle border.
- **Bento Layout:** Asymmetric scaling of service cards (e.g., 2:1 ratio).
- **Motion:** Spring (Stiffness 100, Damping 20) for all hover/press states.

---

## DIRECTION 3: "KINETIC EDITORIAL" (High-Variance Bold)

### 1. Visual Atmosphere Matrix
- **Creativity:** 9/10
- **Variance:** 9/10
- **Density:** 4/10 (Editorial spacing)
- **Motion:** 8/10 (Dynamic shifts)

### 2. Color Calibration System
- **Canvas:** #F5F5F0 (Cream)
- **Surface:** #0A0A0A (Obsidian)
- **Text:** #0A0A0A (Obsidian)
- **Borders:** #0A0A0A (Heavy 2px/3px strokes)
- **Accents:** #D97706 (Raw Amber - 75% max saturation)

### 3. Typographic Stack
- **Display:** Cabinet Grotesk (Heavy Italic)
- **Data/Inputs:** Satoshi
- **Scale:**
  - Display: 120px, 800 weight (Italic), -0.04em letter-spacing.
  - Headline: 64px, 700 weight.
  - Body: 16px, 400 weight.

### 4. Core Component Blueprints
- **Buttons:** Massive Obsidian background, Cream text, 0px radius. Hover: Raw Amber shift.
- **Tracking Map:** Large asymmetric panel with heavy Obsidian frames.
- **Timeline:** Vertical shifts with alternating left/right alignment. Inline typography mixing weights.
- **Loading:** Solid Obsidian skeleton blocks (no spinners).
- **Motion:** High-velocity spring physics (Stiffness 100, Damping 20) for entrance animations.
