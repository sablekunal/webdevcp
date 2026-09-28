# Design System: Sportik Tournament Operating System
**Project ID:** `projects/6272990501520824297`

## 1. Visual Theme & Atmosphere
Sportik embodies an **airy, athletic, high-clarity SaaS aesthetic** tailored specifically for sports tournament organizers, players, and matchday spectators in India. 
The visual language moves away from dark, heavy interfaces into a **clean, daylight-fresh stadium palette** dominated by crisp whites, cool slate neutrals, and vibrant Royal Blue accents. The experience feels fast, authoritative, and frictionless on both mobile devices at the ground and desktops in the organizing office.

- **Mood:** Energetic, trustworthy, modern, and uncluttered.
- **Density:** Balanced comfort — generous tap targets (minimum 44px) for mobile finger use in outdoor sunlight, paired with tight, information-dense tables for fixtures, standings, and brackets.
- **Aesthetic Philosophy:** Functionality first, elevated by subtle micro-interactions, crisp 1px borders, smooth glassmorphic header blur, and punchy athletic badges.

---

## 2. Color Palette & Roles

| Natural Language Descriptive Name | Hex Code | Functional Role |
|---|---|---|
| **Sportik Royal Blue** | `#004de6` (`#2563eb`) | Primary brand action color: primary CTA buttons, active navigation states, key metric figures, and brand logo mark. |
| **Deep Royal Hover** | `#003bb3` (`#1d4ed8`) | Hover and active pressed states for primary buttons and interactive links. |
| **Electric Sky Tint** | `#eff6ff` / `#dbeafe` | Light blue surface tint for active tabs, category badges, informational callouts, and hover states. |
| **Deep Navy Slate** | `#0f172a` | Primary typography for H1-H3 titles, modal headers, and the high-contrast dark footer. |
| **Charcoal Body Slate** | `#334155` | Primary body copy, table labels, and readable paragraph text. |
| **Muted Slate** | `#64748b` | Secondary descriptions, breadcrumb text, input placeholders, and inactive icons. |
| **Stadium Crisp White** | `#ffffff` | Primary card surfaces, modal dialogs, form input backgrounds, and table containers. |
| **Soft Court Slate** | `#f8fafc` | Global body background color and subtle zebra striping for tables. |
| **Structural Border Slate** | `#e2e8f0` | 1px border outlines for cards, input fields, table rows, and navigation dividers. |
| **Pitch Emerald** | `#10b981` | Success states, live match indicators, points table qualification badges, and positive budget balance. |
| **Trophy Amber Gold** | `#f59e0b` | Championship prize amounts, trophy highlights, tournament awards, and coin toss coins. |
| **Penalty Rose** | `#ef4444` | Form validation errors, tournament budget loss indicators, and elimination tags. |

---

## 3. Typography Rules

### Font Families
- **Display & Headings:** `Plus Jakarta Sans`, sans-serif. Used for all main page headings (`h1`, `h2`, `h3`, `h4`), metric numbers, and hero titles. Features a modern geometric structure with tight character kerning (`letter-spacing: -0.025em`).
- **Body & Interface:** `Inter`, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif. Used for paragraph text, form labels, table cells, navigation links, and small captions. Optimized for high readability across varying screen sizes.
- **Monospace Figures:** `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace. Used for match scores, points tables, team statistics, and time displays.
- **Iconography:** `Material Symbols Outlined` (Google Fonts) with fallback to `Font Awesome 6`. Configured with `font-variation-settings: 'opsz' 24, 'wght' 400`.

### Type Scale & Hierarchy
- **Hero Title (`h1`):** `36px` to `56px` (mobile to desktop), Font-weight `800` (Extrabold), Line-height `1.1`.
- **Section Heading (`h2`):** `24px` to `36px`, Font-weight `700` (Bold), Line-height `1.2`.
- **Card Title (`h3`):** `18px` to `22px`, Font-weight `700` (Bold), Line-height `1.3`.
- **Body Regular:** `15px` to `16px`, Font-weight `400` / `500`, Line-height `1.6`.
- **Sub-label / Caption:** `12px` to `13px`, Font-weight `600` (Semibold), Uppercase tracking `+0.05em`.

---

## 4. Component Stylings

### Header Navigation
- **Height & Layout:** Fixed `64px` height (`h-16`) on desktop, sticky at the top of the viewport (`sticky top-0 z-50`).
- **Surface:** Glassmorphic translucent white (`bg-white/90 backdrop-blur-md border-b border-slate-200`).
- **Logo:** `40px x 40px` rounded royal blue square (`rounded-xl bg-blue-600`) with white sports icon, flanked by bold `Sportik` logotype (`font-extrabold text-2xl tracking-tight text-slate-900`).
- **Links:** Clean `text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors`. Active links highlighted in bold royal blue.
- **Special Event Pill:** Subtle blue/indigo badge (`bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-semibold`) with pulsing live dot.
- **Primary CTA:** Royal Blue button (`bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-blue-500/20`).

### Footer
- **Theme:** High-contrast Charcoal-Navy (`bg-slate-900 text-slate-400 border-t border-slate-800`).
- **Grid Layout:** 5-column responsive layout (Brand blurb + Product + Free Tools + Events & Company + Legal/Contact).
- **Typography:** Crisp white category headers (`text-white font-semibold text-sm mb-4`), slate-400 links transitioning to white on hover.
- **Bottom Bar:** Divider border with copyright notice and direct support email (`hello@sportik.in`).

### Buttons
- **Primary Action:** Generously rounded pill or square (`rounded-xl` or `rounded-2xl`), solid Sportik Royal Blue (`#004de6`), white bold text, elevated with `shadow-md shadow-blue-500/20`. On hover, scale or darken to `#003bb3`.
- **Secondary / Ghost Action:** Subtle Slate container (`bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl`).
- **Special Highlight (Trophy / Event):** Amber Gold pill (`bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold shadow-md shadow-amber-400/25`).

### Cards & Containers
- **Border Radius:** Generously rounded corners (`rounded-3xl` for main cards, `rounded-2xl` for sub-cards).
- **Background & Border:** Pure white (`#ffffff`) with subtle 1px border (`border border-slate-200/80`).
- **Elevation:** Whisper-soft diffused shadow (`shadow-sm`, expanding to `shadow-xl shadow-blue-500/10` on hover with `-4px` translation).

### Inputs & Forms
- **Field Styling:** Height `42px` to `48px`, background `#ffffff`, border `1px solid #e2e8f0`, border-radius `12px` (`rounded-xl`).
- **Focus State:** 2px ring in Sportik Royal Blue (`focus:ring-2 focus:ring-blue-600 focus:border-transparent`).
- **Labels:** Crisp uppercase tracking (`text-xs font-semibold uppercase tracking-wider text-slate-700`).

---

## 5. Layout Principles
- **Container Max-Width:** Standard `max-w-7xl` (`1280px`) for wide dashboards, `max-w-5xl` for tool workspaces, and `max-w-4xl` for focused reading pages (About, Contact, Privacy, Terms).
- **Horizontal Gutters:** `px-4 sm:px-6 lg:px-8` responsive margin padding.
- **Vertical Spacing:** Generous breathing room between sections (`py-12 lg:py-20`).
- **Grid Systems:** 12-column responsive layout on desktop (`grid-cols-12 gap-8`), stacking cleanly into single or 2-column layouts on mobile devices.
- **Card Hovers:** Universal `card-hover` class providing smooth `transform: translateY(-4px)` with soft shadow elevation.
