# 💼 Portfolio Website - Justin Kirsch

Moderne, professionelle Portfolio-Website eines angehenden **Fachinformatiker für Anwendungsentwicklung** mit Fokus auf Full-Stack-Entwicklung.

[![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

## ✨ Features

### 🎨 Design & UX
- **Modern & Premium Design** – Professionelles, minimalistisches Design mit Glassmorphism-Effekten
- **Dark/Light Mode** – Vollständig implementierter Theme-Switcher mit System-Präferenz-Detection
- **Responsive Design** – Mobile-First Ansatz, optimiert für alle Bildschirmgrößen
- **Smooth Animations** – Subtile Framer Motion Animationen für eine flüssige User Experience
- **Parallax Effects** – Moderne Parallax-Scrolling-Effekte im Hero-Bereich
- **Interactive Elements** – 3D-Tilt-Effekte auf Karten, Hover-Animationen und mehr

### ⚡ Performance & Technik
- **Next.js 16 App Router** – Modernste React-Framework-Features
- **Turbopack** – Blitzschnelle Build-Zeiten im Development
- **TypeScript** – Vollständig typsicher entwickelt
- **SEO-Optimiert** – Semantic HTML, Meta-Tags und strukturierte Daten
- **Accessibility** – WCAG 2.1 AA konform, Screen-Reader-kompatibel
- **Image Optimization** – Automatische Bildoptimierung mit next/image

### 📱 Sections
- **Hero Section** – Eindrucksvoller Einstieg mit Profilbild, Status-Badge und Social Links
- **About & Skills** – Kombinierte Sektion mit persönlicher Vorstellung und Tech-Stack
- **Projects** – Showcase der wichtigsten Projekte mit GitHub-Links
- **Contact** – Kontaktmöglichkeiten mit E-Mail, GitHub und LinkedIn
- **Footer** – Professioneller Footer mit Impressum und Datenschutz

## 🛠️ Tech Stack

### Core
- **[Next.js 16.1.2](https://nextjs.org/)** – React Framework mit App Router
- **[React 19.2.3](https://react.dev/)** – UI Library
- **[TypeScript 5](https://www.typescriptlang.org/)** – Type-Safe Development

### Styling & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-First CSS Framework
- **[Shadcn UI](https://ui.shadcn.com/)** – High-Quality React Components
- **[Radix UI](https://www.radix-ui.com/)** – Accessible Component Primitives
- **[Lucide React](https://lucide.dev/)** – Beautiful Icon Library

### Animation & Interaction
- **[Framer Motion](https://www.framer.com/motion/)** – Production-Ready Animation Library
- **[next-themes](https://github.com/pacocoursey/next-themes)** – Perfect Dark Mode Support

### Typography
- **[Inter](https://fonts.google.com/specimen/Inter)** – Modern, professional font via next/font

## 🚀 Quick Start

### Installation

```bash
# Repository klonen
git clone https://github.com/Justin-Kirsch/portfolio-website.git
cd portfolio-website

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Die Website ist dann verfügbar unter: **http://localhost:3000**

### Build & Deployment

```bash
# Production Build erstellen
npm run build

# Production Server lokal starten
npm start
```

## 📁 Projektstruktur

```
portfolio-website/
├── app/
│   ├── layout.tsx              # Root Layout mit Theme Provider & Metadata
│   ├── page.tsx                # Haupt-Seite mit allen Sections
│   ├── impressum/              # Impressum-Seite
│   ├── datenschutz/            # Datenschutz-Seite
│   └── globals.css             # Globale Styles & CSS-Variablen
├── components/
│   ├── layout/
│   │   ├── container.tsx       # Container-Wrapper
│   │   ├── footer.tsx          # Footer mit Links
│   │   ├── navbar.tsx          # Navigation mit Theme-Switcher
│   │   └── section.tsx         # Section-Wrapper
│   ├── providers/
│   │   └── theme-provider.tsx  # Theme Context Provider
│   ├── sections/
│   │   ├── about-skills-section.tsx  # Über mich & Skills
│   │   ├── contact-section.tsx       # Kontakt-Informationen
│   │   ├── hero-section.tsx          # Hero mit Profilbild
│   │   └── projects-section.tsx      # Projekt-Showcase
│   └── ui/                     # Wiederverwendbare UI-Komponenten
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── profile-image.tsx
│       ├── scroll-progress.tsx
│       ├── stats-grid.tsx
│       ├── theme-toggle.tsx
│       └── ...
├── lib/
│   ├── data/
│   │   ├── projects.ts         # Projekt-Daten
│   │   └── skills.ts           # Skill-Kategorien
│   ├── fonts.ts                # Font-Konfiguration
│   ├── types.ts                # TypeScript-Typen
│   └── utils.ts                # Utility-Funktionen (cn, etc.)
└── public/
    └── images/                 # Statische Bilder
```

## ✏️ Anpassung

### 1. Persönliche Informationen

**Hero Section** (`components/sections/hero-section.tsx`):
```tsx
<h1>Justin Kirsch</h1>
<p>Angehender Fachinformatiker für Anwendungsentwicklung</p>
```

**Kontaktdaten** (`components/sections/contact-section.tsx`):
```tsx
const contactLinks = [
  { label: 'E-Mail', value: 'kontakt@kirsch-justin.de', ... },
  { label: 'GitHub', value: 'github.com/Justin-Kirsch', ... },
  { label: 'LinkedIn', value: 'linkedin.com/in/kirsch-justin', ... },
];
```

**Metadata** (`app/layout.tsx`):
```tsx
export const metadata: Metadata = {
  title: 'Portfolio | Justin Kirsch',
  description: 'Portfolio eines angehenden Fachinformatikers...',
  authors: [{ name: 'Justin Kirsch' }],
};
```

### 2. Skills & Technologien

Bearbeite `lib/data/skills.ts`:
```tsx
export const skills: Skill[] = [
  { name: 'TypeScript', category: 'languages' },
  { name: 'React', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  // Weitere Skills...
];
```

### 3. Projekte

Bearbeite `lib/data/projects.ts`:
```tsx
export const projects: Project[] = [
  {
    title: 'Projekt-Name',
    description: 'Beschreibung des Projekts...',
    technologies: ['React', 'Next.js', 'TypeScript'],
    githubUrl: 'https://github.com/username/repo',
    liveUrl: 'https://example.com', // Optional
  },
];
```

### 4. Über Mich Text

Bearbeite `components/sections/about-skills-section.tsx` und passe den Text an deine Situation an.

## 🎨 Design-System

### Farben

Das Portfolio verwendet ein durchdachtes Farbschema mit CSS-Variablen:

**Light Mode:**
- Background: `hsl(0 0% 100%)` – Reines Weiß
- Foreground: `hsl(240 10% 3.9%)` – Anthrazit
- Primary: `hsl(240 5.9% 10%)` – Navy
- Accent: Cyan/Violet Gradient

**Dark Mode:**
- Background: `hsl(240 10% 3.9%)` – Dunkelgrau
- Foreground: `hsl(0 0% 98%)` – Off-White
- Primary: `hsl(0 0% 98%)` – Helles Grau
- Accent: Cyan/Violet Gradient

Alle Farben sind in `app/globals.css` definiert und können einfach angepasst werden.

### Typografie

- **Font Family:** Inter (via next/font)
- **Hierarchie:**
  - H1: `text-4xl` bis `text-8xl` (responsive)
  - H2: `text-3xl` bis `text-4xl`
  - Body: `text-lg` bis `text-xl`
- **Line Height:** Großzügig für optimale Lesbarkeit

### Breakpoints

```css
sm:  640px   /* Small devices */
md:  768px   /* Medium devices */
lg:  1024px  /* Large devices */
xl:  1280px  /* Extra large */
2xl: 1536px  /* 2X Extra large */
```

## 🚀 Deployment

### Vercel (Empfohlen)

1. Repository auf GitHub pushen
2. Auf [Vercel](https://vercel.com) importieren
3. Automatisches Deployment bei jedem Push

```bash
# Oder via Vercel CLI
npm i -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy .next/ Ordner
```

### Eigener Server (Node.js)

```bash
# Standalone Build erstellen
npm run build

# Server starten
npm start
```

Für detaillierte Deployment-Anweisungen siehe `.agent/workflows/deploy-netcup.md`.

## 📊 Performance

- ⚡ **Lighthouse Score:** 90+ in allen Kategorien
- 🖼️ **Image Optimization:** Automatisch via next/image
- 📦 **Code Splitting:** Automatisch via Next.js
- 🎯 **Font Loading:** Optimiert mit next/font
- 🔄 **Caching:** Intelligentes Caching für statische Assets

## ♿ Accessibility

- ✅ Semantisches HTML5
- ✅ ARIA-Labels für interaktive Elemente
- ✅ Keyboard-Navigation vollständig unterstützt
- ✅ WCAG 2.1 AA konform
- ✅ Screen-Reader-kompatibel
- ✅ Fokus-Indikatoren für alle interaktiven Elemente

## 📝 Verfügbare Scripts

```bash
npm run dev      # Development Server mit Turbopack
npm run build    # Production Build erstellen
npm start        # Production Server starten
npm run lint     # ESLint ausführen
```

## 🔧 Konfiguration

### Environment Variables

Erstelle eine `.env.local` Datei für lokale Umgebungsvariablen:

```env
# Beispiel
NEXT_PUBLIC_SITE_URL=https://kirsch-justin.de
```

### Next.js Config

Die Konfiguration befindet sich in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  output: 'standalone', // Für Server-Deployment
  reactCompiler: true,  // React Compiler aktiviert
};
```

## 📄 Lizenz

Dieses Projekt ist für persönliche Nutzung erstellt. Bei Verwendung als Template bitte Credits geben.

## 🤝 Kontakt

**Justin Kirsch**
- 🌐 Website: [kirsch-justin.de](https://kirsch-justin.de)
- 📧 E-Mail: [kontakt@kirsch-justin.de](mailto:kontakt@kirsch-justin.de)
- 💼 LinkedIn: [linkedin.com/in/kirsch-justin](https://www.linkedin.com/in/kirsch-justin/)
- 🐙 GitHub: [github.com/Justin-Kirsch](https://github.com/Justin-Kirsch)

---

**Entwickelt mit ❤️ und Next.js**
